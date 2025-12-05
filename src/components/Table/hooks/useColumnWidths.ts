import { useMemo } from 'react';
import { Column, ComputedColumnWidthsResult } from '../types';
import { computeColumnWidths, computeColumnPxOffsets, computeStickyWidths } from '../utils';

/**
 * useColumnWidths 钩子
 *
 * 该钩子将纯计算逻辑封装为 memoized 值，避免在渲染过程中重复计算：
 * - `computedColumnWidths`：使用 `computeColumnWidths` 得到的列宽与 table 宽度信息
 * - `columnPxOffsets`：每列的像素左/右偏移（用于设置 sticky left/right）
 * - `leftStickyWidth` / `rightStickyWidth`：左/右粘性区域的像素宽度（用于 CSS 变量）
 * - `hasAnyWidth`：标记是否有任何列声明了 width，用于决定 `tableLayout: fixed` 与否
 *
 * 依赖项（传入参数）变化时会重新计算。
 */

type Input = {
  columns: Column[];
  wrapWidth: number | null;
  showCheckbox: boolean;
  preservePxAsMin: boolean;
  minColumnPx: number;
  leftFixedCount: number;
  rightFixedCount: number;
};

export function useColumnWidths({
  columns,
  wrapWidth,
  showCheckbox,
  preservePxAsMin,
  minColumnPx,
  leftFixedCount,
  rightFixedCount,
}: Input) {
  const computedColumnWidths = useMemo(() => {
    return computeColumnWidths(columns, wrapWidth, showCheckbox, preservePxAsMin, minColumnPx);
  }, [columns, wrapWidth, showCheckbox, preservePxAsMin, minColumnPx]);

  const columnPxOffsets = useMemo(() => {
    return computeColumnPxOffsets(columns, computedColumnWidths, wrapWidth, showCheckbox, minColumnPx);
  }, [columns, computedColumnWidths, wrapWidth, showCheckbox, minColumnPx]);

  const { leftStickyWidth, rightStickyWidth } = useMemo(() => {
    return computeStickyWidths(
      columns,
      computedColumnWidths,
      wrapWidth,
      showCheckbox,
      leftFixedCount,
      rightFixedCount,
      minColumnPx
    );
  }, [columns, computedColumnWidths, wrapWidth, showCheckbox, leftFixedCount, rightFixedCount, minColumnPx]);

  const hasAnyWidth = columns.some((c) => !!c.width);

  return { computedColumnWidths, columnPxOffsets, leftStickyWidth, rightStickyWidth, hasAnyWidth };
}

export default useColumnWidths;
