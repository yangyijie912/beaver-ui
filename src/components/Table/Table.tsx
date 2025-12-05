import React, { useState, useRef, useMemo, useLayoutEffect, useEffect } from 'react';
import './Table.css';
import Empty from './Empty';
import Checkbox from '../Checkbox/Checkbox';

export type Column = {
  key: string;
  title: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
  /** 可选的列级渲染器：接收当前单元格值、整行数据、行索引和列定义，返回自定义渲染内容 */
  render?: (value: any, row: Row, rowIndex: number, column: Column) => React.ReactNode | null | undefined;
  /** 可选的单元格合并函数：返回当前单元格的 colSpan / rowSpan */
  span?: (row: Row, rowIndex: number, column: Column) => { colSpan?: number; rowSpan?: number } | undefined;
};

export type Row = Record<string, any>;

type Props = {
  /** 列定义 */
  columns: Column[];
  /** 行数据 */
  data: Row[];
  /** 行唯一标识字段 */
  rowKey?: string;
  /** 默认列对齐方式，列自身未配置 align 时使用 */
  defaultAlign?: 'left' | 'center' | 'right';
  /** 是否展示行前的复选框（默认 false） */
  showCheckbox?: boolean;
  /** 受控选中 keys（可选） */
  selectedKeys?: string[];
  /** 选中变化回调（受控或非受控时都会触发） */
  onSelectionChange?: (keys: string[]) => void;
  /** 可选的单元格渲染器：如果返回非 null/undefined，则使用其结果作为单元格内容 */
  renderCell?: (row: Row, column: Column, rowIndex: number) => React.ReactNode | null | undefined;
  /**
   * 当混合使用 px 与 百分比/未设置宽度时，是否保证 px 列的最小宽度，且尽量避免滚动（默认 true）。
   * 为 true 时，只有当 px 列总宽超过容器时才触发横向滚动，否则 px 列作为最小宽保留，百分比列保持弹性分配。
   * 为 false 时，则按常规逻辑：只要包含 px 列且总宽超出容器就触发横向滚动。
   */
  preservePxAsMin?: boolean;
  /** 未指定或无法换算宽度时的保守最小像素（默认 80） */
  minColumnPx?: number;
  /** 是否固定表头，默认 false */
  fixedHeader?: boolean;
  /** 表头距离容器顶部的偏移（例如有上方工具栏时），默认 0 */
  headerOffset?: number;
  /** 表格容器最大高度，设置后启用纵向滚动以配合粘性表头。示例：300 或 '50vh' */
  maxHeight?: number | string;
  /** 固定左侧的列数量（不含复选框列），默认 0。
   * 注意：固定列数量之和要小于总列数，否则为了避免重叠，超出时会自动禁用固定列；
   * 且当固定列宽度之和超过容器宽度时也会自动禁用固定列并打印警告。
   */
  fixedColumnCount?: number;
  /** 固定右侧的列数量，默认 0。
   * 注意：固定列数量之和要小于总列数，否则为了避免重叠，超出时会自动禁用固定列；
   * 且当固定列宽度之和超过容器宽度时也会自动禁用固定列并打印警告。
   */
  fixedRightCount?: number;
  /** 是否展示边框线，默认不展示 */
  border?: boolean;
  /** 自定义空状态：优先使用该 prop（ReactNode） */
  empty?: React.ReactNode;
  /** 空状态默认文案（当未提供 `empty` 时使用） */
  emptyText?: React.ReactNode;
};

const Table: React.FC<Props> = ({
  columns,
  data,
  rowKey = 'id',
  defaultAlign = 'left',
  showCheckbox = false,
  selectedKeys,
  onSelectionChange,
  renderCell,
  preservePxAsMin = true,
  minColumnPx = 80,
  fixedHeader = false,
  headerOffset = 0,
  maxHeight,
  fixedColumnCount = 0,
  fixedRightCount = 0,
  border = false,
  empty,
  emptyText,
}) => {
  const [internalSelected, setInternalSelected] = useState<Record<string, boolean>>({});
  const isControlled = Array.isArray(selectedKeys);

  // 包装器引用和宽度测量（用于为未指定宽度的列保留最小像素）
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [wrapWidth, setWrapWidth] = useState<number | null>(null);
  const [hasLeftShadow, setHasLeftShadow] = useState(false);
  const [hasRightShadow, setHasRightShadow] = useState(false);
  const [hasColumnEdgeShadow, setHasColumnEdgeShadow] = useState(false);
  const content = empty ?? <Empty text={emptyText ?? '暂无数据'} />;
  const [scrollbarHeight, setScrollbarHeight] = useState(0);
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);

  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    setWrapWidth(el.clientWidth || null);
    const ro = new ResizeObserver(() => {
      setWrapWidth(el.clientWidth || null);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // 构建当前所用的 selected map：受控时使用 prop，否则使用内部 state
  const selectedMap: Record<string, boolean> = useMemo(() => {
    if (isControlled) {
      const map: Record<string, boolean> = {};
      selectedKeys!.forEach((k) => (map[k] = true));
      return map;
    }
    return internalSelected;
  }, [isControlled, selectedKeys, internalSelected]);

  const notifySelectionChange = (nextMap: Record<string, boolean>) => {
    const keys = Object.keys(nextMap).filter((k) => nextMap[k]);
    onSelectionChange?.(keys);
  };

  const toggle = (key: string, checked?: boolean) => {
    if (isControlled) {
      const current = new Set(selectedKeys);
      const exists = current.has(key);
      const next = new Set(current);
      if (typeof checked === 'boolean') {
        if (checked) next.add(key);
        else next.delete(key);
      } else {
        if (exists) next.delete(key);
        else next.add(key);
      }
      const nextArr = Array.from(next);
      onSelectionChange?.(nextArr);
      return;
    }
    setInternalSelected((s) => {
      const next = typeof checked === 'boolean' ? { ...s, [key]: checked } : { ...s, [key]: !s[key] };
      notifySelectionChange(next);
      return next;
    });
  };

  const toggleAll = (checked: boolean) => {
    if (checked) {
      const map: Record<string, boolean> = {};
      data.forEach((r, i) => {
        const k = String(r[rowKey] ?? i);
        map[k] = true;
      });
      if (isControlled) {
        onSelectionChange?.(Object.keys(map));
      } else {
        setInternalSelected(map);
        notifySelectionChange(map);
      }
      return;
    }
    if (isControlled) {
      onSelectionChange?.([]);
    } else {
      setInternalSelected({});
      notifySelectionChange({});
    }
  };

  const total = data.length;
  const selectedCount = Object.keys(selectedMap).reduce((sum, k) => (selectedMap[k] ? sum + 1 : sum), 0);
  const headerChecked = total > 0 && data.every((r, i) => !!selectedMap[String(r[rowKey] ?? i)]);
  const headerIndeterminate = selectedCount > 0 && !headerChecked;

  // 列宽处理：如果有任何列指定了宽度，则使用固定布局和 colgroup
  const hasAnyWidth = columns.some((c) => !!c.width);

  // 归一化百分比宽度，并为未指定宽度的列保留最小像素以保持可见。
  // 同时计算在容器宽度下是否需要横向滚动（例如大量 px 固定宽或混合单位时）。
  const computedColumnWidths = React.useMemo(() => {
    type ColInfo = { key: string; raw?: string; kind: 'percent' | 'other'; value?: number };
    const MIN_PX_PER_UNSPECIFIED = typeof minColumnPx === 'number' && minColumnPx > 0 ? minColumnPx : 80;

    const cols: ColInfo[] = columns.map((c) => {
      const raw = c.width?.trim();
      if (raw && raw.endsWith('%')) {
        const n = parseFloat(raw.slice(0, -1));
        if (!Number.isNaN(n)) return { key: c.key, raw, kind: 'percent', value: n };
      }
      return { key: c.key, raw: raw ?? undefined, kind: 'other' };
    });

    // 先处理百分比超出 100% 的按比例缩放（保留为百分比字符串）
    const totalPercent = cols.reduce((s, c) => s + (c.kind === 'percent' && c.value ? c.value : 0), 0);
    const unspecifiedCount = cols.filter((c) => c.kind === 'other' && !c.raw).length;
    const minTotalPercentReserved =
      wrapWidth && wrapWidth > 0 ? (unspecifiedCount * MIN_PX_PER_UNSPECIFIED * 100) / wrapWidth : unspecifiedCount * 3;
    const maxPercentBudget = Math.max(0, 100 - minTotalPercentReserved);

    let scaledCols: { key: string; width?: string }[];
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

    // 计算混合单位时的像素总和（尽可能使用容器宽度将百分比换算为 px）
    let desiredPxTotal = 0;
    let containsPx = false;
    let pxFixedTotal = 0; // 仅统计明确以 px 指定的列宽
    scaledCols.forEach((c) => {
      const w = c.width;
      if (!w) {
        desiredPxTotal += MIN_PX_PER_UNSPECIFIED;
        return;
      }
      const ws = w.trim();
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
      // 对于其他单位（em/rem/auto）或无容器宽度的百分比，保守地分配最小像素
      desiredPxTotal += MIN_PX_PER_UNSPECIFIED;
    });

    // 考虑复选框列宽
    if (showCheckbox) {
      desiredPxTotal += 40;
      pxFixedTotal += 40; // 复选框是固定像素，占用空间
    }

    // 如果 caller 希望把 px 列作为最小保证宽（preservePxAsMin），则：
    // - 当 pxFixedTotal > wrapWidth 时强制滚动（因为最小保证本身就超出容器）
    // - 否则不强制滚动，允许百分比/未设置列弹性分配剩余空间
    if (preservePxAsMin && wrapWidth && wrapWidth > 0 && pxFixedTotal > 0) {
      if (pxFixedTotal > wrapWidth) {
        // px 最小保证超出容器：触发滚动，并且以更保守的 desiredPxTotal 作为表格宽
        return { cols: scaledCols, needsHScroll: true, tableWidth: Math.ceil(desiredPxTotal) + 'px' };
      }
      // pxFixedTotal <= wrapWidth：不强制滚动，保留弹性（不设置 tableWidth）
      return { cols: scaledCols, needsHScroll: false, tableWidth: undefined };
    }

    // 否则按原有策略：只有当包含 px 且预计总宽超出容器时触发横向滚动
    const needsHScroll = !!(wrapWidth && desiredPxTotal > wrapWidth && containsPx);
    const tableWidth = needsHScroll ? Math.ceil(desiredPxTotal) + 'px' : undefined;

    return { cols: scaledCols, needsHScroll, tableWidth };
  }, [columns, wrapWidth, showCheckbox, preservePxAsMin, minColumnPx]);

  // 限制固定列：避免左 + 右 固定列数量覆盖或重叠整个表格
  const totalColumns = columns.length;
  let leftFixedCount = Math.max(0, Math.min(fixedColumnCount, totalColumns));
  let rightFixedCount = Math.max(0, Math.min(fixedRightCount, totalColumns));
  if (leftFixedCount + rightFixedCount >= totalColumns) {
    console.warn(
      '[Beaver-UI-Table] fixedColumnCount + fixedRightCount >= columns.length — disabling fixed columns to avoid overlap'
    );
    leftFixedCount = 0;
    rightFixedCount = 0;
  }

  // 简化的左右阴影逻辑：
  // - 初始：左侧无阴影；右侧在内容溢出时初始显示
  // - 交互：监听 scroll/resize，滚动时左侧在 scrollLeft>0 显示，右侧在未到最右端时显示
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const scrollLeft = el.scrollLeft || 0;
        const max = Math.max(0, el.scrollWidth - el.clientWidth);
        setHasLeftShadow(effectiveLeftFixed > 0 && scrollLeft > 0);
        setHasRightShadow(effectiveRightFixed > 0 && scrollLeft < max - 1);
        // 列边缘阴影：只在非固定表头的情况下显示，当有固定列且发生滚动时
        const hasFixedColumns = effectiveLeftFixed > 0 || effectiveRightFixed > 0;
        const isScrolled = scrollLeft > 0 && scrollLeft < max - 1;
        setHasColumnEdgeShadow(!fixedHeader && hasFixedColumns && isScrolled);
        const sbh = Math.max(0, el.offsetHeight - el.clientHeight);
        setScrollbarHeight(sbh);
        const sbw = Math.max(0, el.offsetWidth - el.clientWidth);
        setScrollbarWidth(sbw);
        // measure header height inside the table - only for fixed header
        try {
          const tbl = el.querySelector('table');
          const thead = tbl ? (tbl.querySelector('thead') as HTMLElement | null) : null;
          const hh = fixedHeader && thead ? thead.offsetHeight : 0;
          setHeaderHeight(hh);
        } catch (e) {
          setHeaderHeight(0);
        }
      });
    };

    // 初始状态：左侧不显示，右侧根据是否溢出显示；同时测量滚动条高度
    const initialMax = Math.max(0, el.scrollWidth - el.clientWidth);
    setHasLeftShadow(false);
    setHasRightShadow(effectiveRightFixed > 0 && initialMax > 1);
    setHasColumnEdgeShadow(false);
    setScrollbarHeight(Math.max(0, el.offsetHeight - el.clientHeight));
    setScrollbarWidth(Math.max(0, el.offsetWidth - el.clientWidth));
    try {
      const tbl = el.querySelector('table');
      const thead = tbl ? (tbl.querySelector('thead') as HTMLElement | null) : null;
      const hh = fixedHeader && thead ? thead.offsetHeight : 0;
      setHeaderHeight(hh);
    } catch (e) {
      setHeaderHeight(0);
    }

    el.addEventListener('scroll', update, { passive: true });

    const ro = new ResizeObserver(() => {
      update();
    });
    ro.observe(el);

    return () => {
      el.removeEventListener('scroll', update);
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [wrapWidth, computedColumnWidths.tableWidth, leftFixedCount, rightFixedCount]);

  // 计算左右固定列的像素偏移
  const columnPxOffsets = React.useMemo(() => {
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

    const leftOffsets: number[] = new Array(columns.length).fill(0);
    let acc = checkboxPx;
    for (let i = 0; i < columns.length; i++) {
      leftOffsets[i] = acc;
      acc += perColPx[i];
    }

    const rightOffsets: number[] = new Array(columns.length).fill(0);
    acc = 0;
    for (let i = columns.length - 1; i >= 0; i--) {
      rightOffsets[i] = acc;
      acc += perColPx[i];
    }

    return { leftOffsets, rightOffsets };
  }, [columns, computedColumnWidths, wrapWidth, showCheckbox, minColumnPx]);

  // 计算左侧/右侧粘性区域的总宽度（用于把阴影放置在粘性区域的外侧）
  const { leftStickyWidth, rightStickyWidth } = React.useMemo(() => {
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
    if (showCheckbox) leftW += 40; // checkbox 列宽
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
  }, [columns, computedColumnWidths, wrapWidth, showCheckbox, leftFixedCount, rightFixedCount, minColumnPx]);

  // 当左右粘性区域宽度之和超过容器宽度时，禁用固定列并在控制台打印警告
  const [effectiveLeftFixed, setEffectiveLeftFixed] = useState<number>(leftFixedCount);
  const [effectiveRightFixed, setEffectiveRightFixed] = useState<number>(rightFixedCount);

  useEffect(() => {
    const wrapW = wrapWidth ?? (wrapRef.current ? wrapRef.current.clientWidth : null);
    if (wrapW == null) {
      setEffectiveLeftFixed(leftFixedCount);
      setEffectiveRightFixed(rightFixedCount);
      return;
    }
    const stickyTotal = leftStickyWidth + rightStickyWidth;
    if (stickyTotal >= wrapW) {
      // 禁用固定列
      if (!(effectiveLeftFixed === 0 && effectiveRightFixed === 0)) {
        console.warn(
          `[Beaver-UI-Table] fixed columns disabled: leftStickyWidth(${leftStickyWidth}) + rightStickyWidth(${rightStickyWidth}) >= containerWidth(${wrapW})`
        );
      }
      setEffectiveLeftFixed(0);
      setEffectiveRightFixed(0);
    } else {
      setEffectiveLeftFixed(leftFixedCount);
      setEffectiveRightFixed(rightFixedCount);
    }
    // 仅在相关输入更改时重新计算
  }, [wrapWidth, leftStickyWidth, rightStickyWidth, leftFixedCount, rightFixedCount]);

  return (
    <div
      className={`beaver-table__frame ${hasLeftShadow ? 'has-left-shadow' : ''} ${
        hasRightShadow ? 'has-right-shadow' : ''
      } ${fixedHeader ? 'beaver-table__frame--fixed-header' : ''}`}
      style={
        {
          ['--beaver-table-left-sticky-width' as any]: `${leftStickyWidth}px`,
          ['--beaver-table-right-sticky-width' as any]: `${rightStickyWidth}px`,
          ['--beaver-table-scrollbar-height' as any]: `${scrollbarHeight}px`,
          ['--beaver-table-scrollbar-width' as any]: `${scrollbarWidth}px`,
          ['--beaver-table-header-height' as any]: `${headerHeight}px`,
          ['--beaver-table-scrollable-height' as any]: `calc(100% - ${scrollbarHeight}px)`,
        } as React.CSSProperties
      }
    >
      <div
        className={`beaver-table__wrap ${border ? 'beaver-table__wrap--bordered' : ''}`}
        ref={wrapRef}
        style={{
          overflowX: computedColumnWidths.needsHScroll ? 'auto' : undefined,
          overflowY: fixedHeader ? 'auto' : undefined,
          // 为固定表头场景提供滚动条安全内边距，避免遮挡内容
          paddingBottom: fixedHeader ? 12 : undefined,
          maxHeight:
            fixedHeader && maxHeight != null
              ? typeof maxHeight === 'number'
                ? `${maxHeight}px`
                : maxHeight
              : undefined,
        }}
      >
        <table
          className={`beaver-table ${fixedHeader ? 'beaver-table--fixed-header' : ''} ${
            border ? 'beaver-table--bordered' : ''
          } ${hasColumnEdgeShadow ? 'beaver-table--column-edge-shadow' : ''}`}
          style={{ tableLayout: hasAnyWidth ? 'fixed' : 'auto', width: computedColumnWidths.tableWidth }}
        >
          {hasAnyWidth ? (
            <colgroup>
              {showCheckbox ? <col key="__select_col__" style={{ width: '40px' }} /> : null}
              {columns.map((c) => {
                const cw = computedColumnWidths.cols.find((x) => x.key === c.key)?.width;
                return <col key={c.key} style={cw ? { width: cw } : undefined} />;
              })}
            </colgroup>
          ) : null}

          <thead>
            <tr>
              {showCheckbox ? (
                <th
                  className={`beaver-table__select-col ${
                    effectiveLeftFixed > 0
                      ? 'beaver-table__cell--sticky beaver-table__cell--sticky--left beaver-table__cell--sticky-edge-left'
                      : ''
                  }`}
                  style={
                    fixedHeader
                      ? {
                          position: 'sticky',
                          top: headerOffset,
                          ...(effectiveLeftFixed > 0 ? { left: 0 } : {}),
                        }
                      : effectiveLeftFixed > 0
                        ? { position: 'sticky', left: 0 }
                        : undefined
                  }
                >
                  <span onClick={(e) => e.stopPropagation()}>
                    <Checkbox
                      aria-label="select-all"
                      checked={headerChecked}
                      indeterminate={headerIndeterminate}
                      onChange={(e) => toggleAll((e.target as HTMLInputElement).checked)}
                    />
                  </span>
                </th>
              ) : null}

              {columns.map((col, colIdx) => {
                const align = col.align ?? defaultAlign ?? 'left';
                const cw = computedColumnWidths.cols.find((x) => x.key === col.key)?.width;
                const isStickyLeft = effectiveLeftFixed > 0 && colIdx < effectiveLeftFixed;
                const isStickyRight = effectiveRightFixed > 0 && colIdx >= columns.length - effectiveRightFixed;
                const stickyStyle: React.CSSProperties = {};
                const stickyClasses: string[] = [];
                if (isStickyLeft) {
                  stickyStyle.position = 'sticky';
                  stickyStyle.left = columnPxOffsets.leftOffsets[colIdx];
                  stickyClasses.push('beaver-table__cell--sticky', 'beaver-table__cell--sticky--left');
                  if (colIdx === effectiveLeftFixed - 1) stickyClasses.push('beaver-table__cell--sticky-edge-left');
                }
                if (isStickyRight) {
                  stickyStyle.position = 'sticky';
                  stickyStyle.right = columnPxOffsets.rightOffsets[colIdx];
                  stickyClasses.push('beaver-table__cell--sticky', 'beaver-table__cell--sticky--right');
                  if (colIdx === columns.length - effectiveRightFixed)
                    stickyClasses.push('beaver-table__cell--sticky-edge-right');
                }
                return (
                  <th
                    key={col.key}
                    style={{
                      width: cw ?? col.width,
                      textAlign: align,
                      ...(fixedHeader ? { top: headerOffset } : {}),
                      ...stickyStyle,
                    }}
                    className={`beaver-table__th beaver-table__th--${align} ${stickyClasses.join(' ')}`}
                  >
                    {col.title}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {
              // 使用占位映射来处理跨行/跨列：当某个单元格被上/左侧的合并覆盖时跳过渲染
            }
            {(() => {
              const occupied: Record<string, boolean> = {};
              // 空数据占位：在表体内渲染一行占位单元格，保持表头可见
              if (!data || data.length === 0) {
                const colspan = columns.length + (showCheckbox ? 1 : 0);
                // 优先使用传入的 empty 节点，否则使用 emptyText 或默认文案
                const content = empty ?? <Empty text={emptyText ?? '暂无数据'} />;
                return [
                  <tr key="__empty__" className="beaver-table__empty-row">
                    <td className="beaver-table__empty-cell" colSpan={colspan}>
                      {content}
                    </td>
                  </tr>,
                ];
              }

              return data.map((row, idx) => {
                const key = String(row[rowKey] ?? idx);
                const isSelected = !!selectedMap[key];
                const rowClass = [
                  isSelected ? 'beaver-table__row--selected' : '',
                  showCheckbox ? 'beaver-table__row--clickable' : '',
                ]
                  .filter(Boolean)
                  .join(' ');

                const cells: React.ReactNode[] = [];

                // 处理复选框列（固定存在于每一行的首列）
                if (showCheckbox) {
                  cells.push(
                    <td
                      key={`__select_${key}`}
                      className={`beaver-table__select-col ${
                        effectiveLeftFixed > 0
                          ? 'beaver-table__cell--sticky beaver-table__cell--sticky--left beaver-table__cell--sticky-edge-left'
                          : ''
                      }`}
                      style={effectiveLeftFixed > 0 ? { position: 'sticky', left: 0 } : undefined}
                    >
                      <span onClick={(e) => e.stopPropagation()}>
                        <Checkbox
                          checked={isSelected}
                          onChange={(e) => toggle(key, (e.target as HTMLInputElement).checked)}
                        />
                      </span>
                    </td>
                  );
                }

                for (let colIdx = 0; colIdx < columns.length; colIdx++) {
                  const occKey = `${idx}-${colIdx}`;
                  if (occupied[occKey]) continue; // 被合并的格子，跳过

                  const col = columns[colIdx];
                  const align = col.align ?? defaultAlign ?? 'left';

                  // 支持两种方式提供 span：
                  // 1) 行数据在对应字段处以对象形式提供 { value, colSpan, rowSpan }
                  // 2) 列定义提供 span 函数 column.span(row, rowIndex, column)
                  let rawCell = row[col.key];
                  let cellValue: any = rawCell;
                  let colSpan = 1;
                  let rowSpan = 1;

                  if (
                    rawCell &&
                    typeof rawCell === 'object' &&
                    ('colSpan' in rawCell || 'rowSpan' in rawCell || 'value' in rawCell)
                  ) {
                    if ('value' in rawCell) cellValue = (rawCell as any).value;
                    if ('colSpan' in rawCell) colSpan = Math.max(1, Number((rawCell as any).colSpan) || 1);
                    if ('rowSpan' in rawCell) rowSpan = Math.max(1, Number((rawCell as any).rowSpan) || 1);
                  }

                  if (typeof col.span === 'function') {
                    try {
                      const s = col.span(row, idx, col);
                      if (s) {
                        if (s.colSpan != null) colSpan = Math.max(1, Number(s.colSpan) || 1);
                        if (s.rowSpan != null) rowSpan = Math.max(1, Number(s.rowSpan) || 1);
                      }
                    } catch (e) {
                      // 如果调用自定义 span 出错，不阻塞渲染，保持默认 1
                      if (process.env.NODE_ENV !== 'production')
                        console.warn('[Beaver-UI-Table] span function error', e);
                    }
                  }

                  // 边界保护：不要跨出列或行范围
                  colSpan = Math.min(colSpan, columns.length - colIdx);
                  rowSpan = Math.min(rowSpan, data.length - idx);

                  // 标记被当前合并覆盖的格子（除了锚点自身）
                  for (let r = idx; r < idx + rowSpan; r++) {
                    for (let c = colIdx; c < colIdx + colSpan; c++) {
                      const k = `${r}-${c}`;
                      if (r === idx && c === colIdx) continue; // 锚点自身由当前渲染
                      occupied[k] = true;
                    }
                  }

                  // 计算渲染内容：优先列 render，其次全局 renderCell，最后回退到 cellValue
                  const renderedByColumn =
                    typeof col.render === 'function' ? col.render(cellValue, row, idx, col) : undefined;
                  const renderedByGlobal =
                    renderedByColumn == null && typeof renderCell === 'function'
                      ? renderCell(row, col, idx)
                      : undefined;

                  cells.push(
                    <td
                      key={`${col.key}_${colIdx}`}
                      className={`beaver-table__td beaver-table__td--${align} ${
                        effectiveLeftFixed > 0 && colIdx < effectiveLeftFixed
                          ? 'beaver-table__cell--sticky beaver-table__cell--sticky--left' +
                            (colIdx === effectiveLeftFixed - 1 ? ' beaver-table__cell--sticky-edge-left' : '')
                          : effectiveRightFixed > 0 && colIdx >= columns.length - effectiveRightFixed
                            ? 'beaver-table__cell--sticky beaver-table__cell--sticky--right' +
                              (colIdx === columns.length - effectiveRightFixed
                                ? ' beaver-table__cell--sticky-edge-right'
                                : '')
                            : ''
                      }`}
                      style={{
                        textAlign: align,
                        ...(effectiveLeftFixed > 0 && colIdx < effectiveLeftFixed
                          ? { position: 'sticky', left: columnPxOffsets.leftOffsets[colIdx] }
                          : {}),
                        ...(effectiveRightFixed > 0 && colIdx >= columns.length - effectiveRightFixed
                          ? { position: 'sticky', right: columnPxOffsets.rightOffsets[colIdx] }
                          : {}),
                      }}
                      {...(colSpan > 1 ? { colSpan } : {})}
                      {...(rowSpan > 1 ? { rowSpan } : {})}
                    >
                      {renderedByColumn != null
                        ? renderedByColumn
                        : renderedByGlobal != null
                          ? renderedByGlobal
                          : cellValue}
                    </td>
                  );
                }

                return (
                  <tr
                    key={key}
                    className={rowClass}
                    onClick={(e) => {
                      const target = e.target as HTMLElement;
                      const skip = !!target.closest(
                        'input,button,a,textarea,select,.beaver-checkbox,.beaver-checkbox-wrapper,.beaver-checkbox-input'
                      );
                      if (skip) return;
                      if (showCheckbox) toggle(key, !isSelected);
                    }}
                  >
                    {cells}
                  </tr>
                );
              });
            })()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
