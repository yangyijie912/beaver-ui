import React from 'react';
import Empty from './Empty';
import Checkbox from '../Checkbox/Checkbox';
import { Column, Row } from './types';

/**
 * TableBody 负责渲染 <tbody> 区域
 *
 * 主要职责：
 * - 空数据时渲染占位行（`empty` / `emptyText`）
 * - 渲染每一行的数据，并处理：
 *   - 行选择（左侧 checkbox）
 *   - 单元格合并（支持列级 `span` 回调或单元格对象形式的 colSpan/rowSpan）
 *   - 单元格渲染优先级：列的 `render` > 全局 `renderCell` > 原始值
 * - 对于粘性列，计算并设置 `position: sticky` 以及 `left`/`right` 偏移
 *
 * 注意：合并逻辑使用 `occupied` map 标记已经占用的位置，避免重复渲染被合并的单元格。
 */

type Props = {
  columns: Column[];
  data: Row[];
  rowKey: string;
  selectedMap: Record<string, boolean>;
  showCheckbox: boolean;
  toggle: (key: string, checked?: boolean) => void;
  effectiveLeftFixed: number;
  effectiveRightFixed: number;
  columnPxOffsets: { leftOffsets: number[]; rightOffsets: number[] };
  renderCell?: (row: Row, column: Column, rowIndex: number) => React.ReactNode | null | undefined;
  defaultAlign: 'left' | 'center' | 'right';
  empty?: React.ReactNode;
  emptyText?: React.ReactNode;
};

const TableBody: React.FC<Props> = ({
  columns,
  data,
  rowKey,
  selectedMap,
  showCheckbox,
  toggle,
  effectiveLeftFixed,
  effectiveRightFixed,
  columnPxOffsets,
  renderCell,
  defaultAlign,
  empty,
  emptyText,
}) => {
  if (!data || data.length === 0) {
    const colspan = columns.length + (showCheckbox ? 1 : 0);
    const content = empty ?? <Empty text={emptyText ?? '暂无数据'} />;
    return (
      <tbody>
        <tr key="__empty__" className="beaver-table__empty-row">
          <td className="beaver-table__empty-cell" colSpan={colspan}>
            {content}
          </td>
        </tr>
      </tbody>
    );
  }

  // 全局 rowspan 追踪：记录每一列被哪些行的 rowspan 覆盖
  const rowSpanTracking: Array<{ startRow: number; endRow: number; startCol: number; endCol: number }> = [];

  // 第一遍：计算所有行的 rowspan 影响
  for (let idx = 0; idx < data.length; idx++) {
    const row = data[idx];
    for (let colIdx = 0; colIdx < columns.length; colIdx++) {
      const col = columns[colIdx];
      let rawCell = row[col.key];
      let rowSpan = 1;

      if (
        rawCell &&
        typeof rawCell === 'object' &&
        ('colSpan' in rawCell || 'rowSpan' in rawCell || 'value' in rawCell)
      ) {
        if ('rowSpan' in rawCell) rowSpan = Math.max(1, Number((rawCell as any).rowSpan) || 1);
      }

      if (typeof col.span === 'function') {
        try {
          const s = col.span(row, idx, col);
          if (s && s.rowSpan != null) {
            rowSpan = Math.max(1, Number(s.rowSpan) || 1);
          }
        } catch (_e) {
          // ignore
        }
      }

      if (rowSpan > 1) {
        let colSpan = 1;
        if (
          rawCell &&
          typeof rawCell === 'object' &&
          ('colSpan' in rawCell || 'rowSpan' in rawCell || 'value' in rawCell)
        ) {
          if ('colSpan' in rawCell) colSpan = Math.max(1, Number((rawCell as any).colSpan) || 1);
        }

        if (typeof col.span === 'function') {
          try {
            const s = col.span(row, idx, col);
            if (s && s.colSpan != null) {
              colSpan = Math.max(1, Number(s.colSpan) || 1);
            }
          } catch (_e) {
            // ignore
          }
        }

        colSpan = Math.min(colSpan, columns.length - colIdx);
        rowSpan = Math.min(rowSpan, data.length - idx);

        rowSpanTracking.push({
          startRow: idx,
          endRow: idx + rowSpan - 1,
          startCol: colIdx,
          endCol: colIdx + colSpan - 1,
        });
      }
    }
  }

  return (
    <tbody>
      {data.map((row: Row, idx: number) => {
        const key = String(row[rowKey] ?? idx);
        const isSelected = !!selectedMap[key];
        const rowClass = [
          isSelected ? 'beaver-table__row--selected' : '',
          showCheckbox ? 'beaver-table__row--clickable' : '',
        ]
          .filter(Boolean)
          .join(' ');

        const cells: React.ReactNode[] = [];

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
                <Checkbox checked={isSelected} onChange={(e) => toggle(key, (e.target as HTMLInputElement).checked)} />
              </span>
            </td>
          );
        }

        const occupied: Record<string, boolean> = {};

        // 检查当前行是否被前面行的 rowspan 覆盖
        for (const span of rowSpanTracking) {
          if (span.startRow < idx && idx <= span.endRow) {
            for (let c = span.startCol; c <= span.endCol; c++) {
              occupied[`${idx}-${c}`] = true;
            }
          }
        }

        for (let colIdx = 0; colIdx < columns.length; colIdx++) {
          const occKey = `${idx}-${colIdx}`;
          if (occupied[occKey]) continue;

          const col = columns[colIdx];
          const align = col.align ?? defaultAlign ?? 'left';

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
              if (process.env.NODE_ENV !== 'production') console.warn('[Beaver-Table] span function error', e);
            }
          }

          colSpan = Math.min(colSpan, columns.length - colIdx);
          rowSpan = Math.min(rowSpan, data.length - idx);

          for (let r = idx; r < idx + rowSpan; r++) {
            for (let c = colIdx; c < colIdx + colSpan; c++) {
              const k = `${r}-${c}`;
              if (r === idx && c === colIdx) continue;
              occupied[k] = true;
            }
          }

          const renderedByColumn = typeof col.render === 'function' ? col.render(cellValue, row, idx, col) : undefined;
          const renderedByGlobal =
            renderedByColumn == null && typeof renderCell === 'function' ? renderCell(row, col, idx) : undefined;

          cells.push(
            <td
              key={`${col.key}_${colIdx}`}
              className={`beaver-table__td beaver-table__td--${align} ${
                effectiveLeftFixed > 0 && colIdx < effectiveLeftFixed
                  ? 'beaver-table__cell--sticky beaver-table__cell--sticky--left' +
                    (colIdx === effectiveLeftFixed - 1 ? ' beaver-table__cell--sticky-edge-left' : '')
                  : effectiveRightFixed > 0 && colIdx >= columns.length - effectiveRightFixed
                    ? 'beaver-table__cell--sticky beaver-table__cell--sticky--right' +
                      (colIdx === columns.length - effectiveRightFixed ? ' beaver-table__cell--sticky-edge-right' : '')
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
              {renderedByColumn != null ? renderedByColumn : renderedByGlobal != null ? renderedByGlobal : cellValue}
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
      })}
    </tbody>
  );
};

export default TableBody;
