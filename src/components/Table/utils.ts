import { Column, ComputedColumnWidthsResult } from './types';

/**
 * 工具函数集合：负责列宽与偏移的纯计算逻辑
 *
 * 这些函数不依赖于 DOM，只根据传入的列配置和容器宽度计算：
 * - 列的最终宽度字符串（px 或 %）
 * - 是否需要水平滚动以及表格总宽
 * - 每列的左/右像素偏移（用于粘性列计算）
 * - 左/右粘性区域在像素级的总宽度
 */

/**
 * 计算每列的宽度分配
 *
 * 参数说明：
 * - `columns`: 列配置数组
 * - `wrapWidth`: 容器可用宽度（用于把百分比转换为 px），可能为 null（未知）
 * - `showCheckbox`: 是否包含左侧选择列（会占用固定宽度）
 * - `preservePxAsMin`: 当为 true 时，含有 px 固定宽度的列会被视为“最小值”，避免压缩到比 px 小
 * - `minColumnPx`: 未指定宽度时使用的最小像素宽度
 *
 * 返回值：`ComputedColumnWidthsResult`，包含按需缩放后的列宽字符串、是否需要水平滚动及可选的 table 宽度
 */
export function computeColumnWidths(
  columns: Column[],
  wrapWidth: number | null,
  showCheckbox: boolean,
  preservePxAsMin: boolean,
  minColumnPx: number
): ComputedColumnWidthsResult {
  type ColInfo = { key: string; raw?: string; kind: 'percent' | 'other'; value?: number };
  const MIN_PX_PER_UNSPECIFIED = typeof minColumnPx === 'number' && minColumnPx > 0 ? minColumnPx : 80;

  // 解析列提供的 width，标记百分比类型以便后续缩放
  const cols: ColInfo[] = columns.map((c) => {
    const raw = typeof c.width === 'number' ? `${c.width}px` : typeof c.width === 'string' ? c.width.trim() : undefined;
    if (raw && raw.endsWith('%')) {
      const n = parseFloat(raw.slice(0, -1));
      if (!Number.isNaN(n)) return { key: c.key, raw, kind: 'percent', value: n };
    }
    return { key: c.key, raw: raw ?? undefined, kind: 'other' };
  });

  // 计算百分比列总和，并为未指定宽度的列预留最小百分比预算
  const totalPercent = cols.reduce((s, c) => s + (c.kind === 'percent' && c.value ? c.value : 0), 0);
  const unspecifiedCount = cols.filter((c) => c.kind === 'other' && !c.raw).length;
  const minTotalPercentReserved =
    wrapWidth && wrapWidth > 0 ? (unspecifiedCount * MIN_PX_PER_UNSPECIFIED * 100) / wrapWidth : unspecifiedCount * 3;
  const maxPercentBudget = Math.max(0, 100 - minTotalPercentReserved);

  // 如果百分比总和超过预算，则按比例缩放百分比列
  let scaledCols: { key: string; width?: string | number }[];
  if (totalPercent > 0 && totalPercent > maxPercentBudget) {
    const scale = maxPercentBudget / totalPercent;
    scaledCols = cols.map((c) => {
      if (c.kind === 'percent' && c.value) {
        return { key: c.key, width: `${(c.value * scale).toFixed(4).replace(/\.0+$/, '')}%` };
      }
      return { key: c.key, width: c.raw };
    });
  } else {
    scaledCols = cols.map((c) => ({ key: c.key, width: c.raw }));
  }

  // 评估所有列在像素级的期望总宽（用于判断是否需要 scroll / tableWidth）
  let desiredPxTotal = 0;
  let containsPx = false;
  let pxFixedTotal = 0;
  scaledCols.forEach((c) => {
    const w = c.width;
    if (!w) {
      desiredPxTotal += MIN_PX_PER_UNSPECIFIED;
      return;
    }
    const ws = String(w).trim();
    if (ws.endsWith('px')) {
      const n = parseFloat(ws.slice(0, -2));
      if (!Number.isNaN(n)) {
        containsPx = true;
        desiredPxTotal += n;
        pxFixedTotal += n;
        return;
      }
    }
    if (ws.endsWith('%')) {
      const n = parseFloat(ws.slice(0, -1));
      if (!Number.isNaN(n) && wrapWidth && wrapWidth > 0) {
        desiredPxTotal += (n / 100) * wrapWidth;
        return;
      }
    }
    desiredPxTotal += MIN_PX_PER_UNSPECIFIED;
  });

  // 选择列占用固定宽度（40px）
  if (showCheckbox) {
    desiredPxTotal += 40;
    pxFixedTotal += 40;
  }

  // 对于 preservePxAsMin 模式：如果 px 总和超过容器宽度，启用水平滚动并将 tableWidth 设置为期望总宽
  if (preservePxAsMin && wrapWidth && wrapWidth > 0 && pxFixedTotal > 0) {
    if (pxFixedTotal > wrapWidth) {
      return { cols: scaledCols, needsHScroll: true, tableWidth: Math.ceil(desiredPxTotal) + 'px' };
    }
    return { cols: scaledCols, needsHScroll: false, tableWidth: undefined };
  }

  const needsHScroll = !!(wrapWidth && desiredPxTotal > wrapWidth && containsPx);
  const tableWidth = needsHScroll ? Math.ceil(desiredPxTotal) + 'px' : undefined;

  return { cols: scaledCols, needsHScroll, tableWidth };
}

/**
 * 计算每列的左/右像素偏移
 *
 * 该函数基于最终的列宽（优先使用 computedColumnWidths 中的宽度，否则使用列定义中的 width）
 * 返回两个数组：`leftOffsets` 与 `rightOffsets`，用于设置粘性列的 left/right 值
 */
export function computeColumnPxOffsets(
  columns: Column[],
  computedColumnWidths: ComputedColumnWidthsResult,
  wrapWidth: number | null,
  showCheckbox: boolean,
  minColumnPx: number
) {
  const MIN_PX_PER_UNSPECIFIED = typeof minColumnPx === 'number' && minColumnPx > 0 ? minColumnPx : 80;

  const perColPx: number[] = columns.map((c) => {
    const w = computedColumnWidths.cols.find((x) => x.key === c.key)?.width || c.width;
    if (!w) return MIN_PX_PER_UNSPECIFIED;
    const ws = String(w).trim();
    if (ws.endsWith('px')) {
      const n = parseFloat(ws.slice(0, -2));
      return Number.isNaN(n) ? MIN_PX_PER_UNSPECIFIED : n;
    }
    if (ws.endsWith('%') && wrapWidth && wrapWidth > 0) {
      const n = parseFloat(ws.slice(0, -1));
      return Number.isNaN(n) ? MIN_PX_PER_UNSPECIFIED : (n / 100) * wrapWidth;
    }
    return MIN_PX_PER_UNSPECIFIED;
  });

  const checkboxPx = showCheckbox ? 40 : 0;

  // leftOffsets: 第一列左边从选择列宽度或 0 开始累加
  const leftOffsets: number[] = new Array(columns.length).fill(0);
  let acc = checkboxPx;
  for (let i = 0; i < columns.length; i++) {
    leftOffsets[i] = acc;
    acc += perColPx[i];
  }

  // rightOffsets: 从右向左累加，用于右侧粘性列的 right 值
  const rightOffsets: number[] = new Array(columns.length).fill(0);
  acc = 0;
  for (let i = columns.length - 1; i >= 0; i--) {
    rightOffsets[i] = acc;
    acc += perColPx[i];
  }

  return { leftOffsets, rightOffsets };
}

/**
 * 计算左右粘性区域的像素宽度
 *
 * - `leftFixedCount`/`rightFixedCount` 用于决定多少列参与粘性宽度计算
 * - 返回值 `leftStickyWidth` 与 `rightStickyWidth` 可直接用于设置 CSS 变量
 */
export function computeStickyWidths(
  columns: Column[],
  computedColumnWidths: ComputedColumnWidthsResult,
  wrapWidth: number | null,
  showCheckbox: boolean,
  leftFixedCount: number,
  rightFixedCount: number,
  minColumnPx: number
) {
  const MIN_PX_PER_UNSPECIFIED = typeof minColumnPx === 'number' && minColumnPx > 0 ? minColumnPx : 80;

  const getColPx = (c: Column) => {
    const w = computedColumnWidths.cols.find((x) => x.key === c.key)?.width || c.width;
    if (!w) return MIN_PX_PER_UNSPECIFIED;
    const ws = String(w).trim();
    if (ws.endsWith('px')) {
      const n = parseFloat(ws.slice(0, -2));
      return Number.isNaN(n) ? MIN_PX_PER_UNSPECIFIED : n;
    }
    if (ws.endsWith('%') && wrapWidth && wrapWidth > 0) {
      const n = parseFloat(ws.slice(0, -1));
      return Number.isNaN(n) ? MIN_PX_PER_UNSPECIFIED : (n / 100) * wrapWidth;
    }
    return MIN_PX_PER_UNSPECIFIED;
  };

  let leftW = 0;
  if (showCheckbox) leftW += 40;
  for (let i = 0; i < Math.max(0, leftFixedCount); i++) {
    const col = columns[i];
    if (!col) break;
    leftW += getColPx(col);
  }

  let rightW = 0;
  for (let i = columns.length - 1; i >= columns.length - rightFixedCount; i--) {
    const col = columns[i];
    if (!col) break;
    rightW += getColPx(col);
  }

  return { leftStickyWidth: Math.ceil(leftW), rightStickyWidth: Math.ceil(rightW) };
}
