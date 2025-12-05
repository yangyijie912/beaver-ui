import React from 'react';
import { Column, ComputedColumnWidthsResult } from './types';
import Checkbox from '../Checkbox/Checkbox';

/**
 * TableHeader 负责渲染表头行（<thead>）
 *
 * 说明：
 * - 支持可选的选择列（左侧 checkbox 列）
 * - 支持左/右侧粘性列，通过 `effectiveLeftFixed` / `effectiveRightFixed` 控制
 * - 使用 `computedColumnWidths` 提供的列宽在 <th> 上设置宽度
 * - 对粘性列会设置 `position: sticky` 及对应的 `left`/`right` 偏移，用于在滚动时固定列
 */

type Props = {
  columns: Column[];
  computedColumnWidths: ComputedColumnWidthsResult;
  showCheckbox: boolean;
  effectiveLeftFixed: number;
  effectiveRightFixed: number;
  columnPxOffsets: { leftOffsets: number[]; rightOffsets: number[] };
  headerOffset: number;
  fixedHeader: boolean;
  defaultAlign: 'left' | 'center' | 'right';
  headerChecked: boolean;
  headerIndeterminate: boolean;
  toggleAll: (checked: boolean) => void;
};

const TableHeader: React.FC<Props> = ({
  columns,
  computedColumnWidths,
  showCheckbox,
  effectiveLeftFixed,
  effectiveRightFixed,
  columnPxOffsets,
  headerOffset,
  fixedHeader,
  defaultAlign,
  headerChecked,
  headerIndeterminate,
  toggleAll,
}) => {
  return (
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

        {columns.map((col: Column, colIdx: number) => {
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
  );
};

export default TableHeader;
