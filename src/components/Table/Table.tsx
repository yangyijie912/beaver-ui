import React, { useState, useRef, useMemo, useLayoutEffect } from 'react';
import './Table.css';
import Checkbox from '../Checkbox/Checkbox';

export type Column = {
  key: string;
  title: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
  /** 可选的列级渲染器：接收当前单元格值、整行数据、行索引和列定义，返回自定义渲染内容 */
  render?: (value: any, row: Row, rowIndex: number, column: Column) => React.ReactNode | null | undefined;
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
}) => {
  const [internalSelected, setInternalSelected] = useState<Record<string, boolean>>({});
  const isControlled = Array.isArray(selectedKeys);

  // 包装器引用和宽度测量（用于为未指定宽度的列保留最小像素）
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [wrapWidth, setWrapWidth] = useState<number | null>(null);

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

  // 归一化百分比宽度，并为未指定宽度的列保留最小像素以保持可见
  const computedColumnWidths = React.useMemo(() => {
    type ColWithWidth = { key: string; raw?: string; kind: 'percent' | 'other'; value?: number };
    const cols: ColWithWidth[] = columns.map((c) => {
      const raw = c.width?.trim();
      if (raw && raw.endsWith('%')) {
        const n = parseFloat(raw.slice(0, -1));
        if (!Number.isNaN(n)) return { key: c.key, raw, kind: 'percent', value: n };
      }
      return { key: c.key, raw: raw ?? undefined, kind: 'other' };
    });

    const totalPercent = cols.reduce((s, c) => s + (c.kind === 'percent' && c.value ? c.value : 0), 0);
    const unspecifiedCount = cols.filter((c) => c.kind === 'other' && !c.raw).length;
    const MIN_PX_PER_UNSPECIFIED = 80;
    const minTotalPercentReserved =
      wrapWidth && wrapWidth > 0 ? (unspecifiedCount * MIN_PX_PER_UNSPECIFIED * 100) / wrapWidth : unspecifiedCount * 3;
    const maxPercentBudget = Math.max(0, 100 - minTotalPercentReserved);

    if (totalPercent > 0 && totalPercent > maxPercentBudget) {
      const scale = maxPercentBudget / totalPercent;
      return cols.map((c) => {
        if (c.kind === 'percent' && c.value) {
          return { key: c.key, width: `${(c.value * scale).toFixed(4).replace(/\.0+$/, '')}%` };
        }
        return { key: c.key, width: c.raw };
      });
    }

    return cols.map((c) => ({ key: c.key, width: c.raw }));
  }, [columns, wrapWidth]);

  return (
    <div className="beaver-table__wrap" ref={wrapRef}>
      <table className="beaver-table" style={{ tableLayout: hasAnyWidth ? 'fixed' : 'auto' }}>
        {hasAnyWidth ? (
          <colgroup>
            {showCheckbox ? <col key="__select_col__" style={{ width: '40px' }} /> : null}
            {columns.map((c) => {
              const cw = computedColumnWidths.find((x) => x.key === c.key)?.width;
              return <col key={c.key} style={cw ? { width: cw } : undefined} />;
            })}
          </colgroup>
        ) : null}

        <thead>
          <tr>
            {showCheckbox ? (
              <th className="beaver-table__select-col">
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

            {columns.map((col) => {
              const align = col.align ?? defaultAlign ?? 'left';
              if (process.env.NODE_ENV !== 'production') {
                console.debug('[Table] column align:', col.key, align);
              }
              const cw = computedColumnWidths.find((x) => x.key === col.key)?.width;
              return (
                <th
                  key={col.key}
                  style={{ width: cw ?? col.width, textAlign: align }}
                  className={`beaver-table__th beaver-table__th--${align}`}
                >
                  {col.title}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {data.map((row, idx) => {
            const key = String(row[rowKey] ?? idx);
            const isSelected = !!selectedMap[key];
            const rowClass = [
              isSelected ? 'beaver-table__row--selected' : '',
              showCheckbox ? 'beaver-table__row--clickable' : '',
            ]
              .filter(Boolean)
              .join(' ');
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
                {showCheckbox ? (
                  <td className="beaver-table__select-col">
                    <span onClick={(e) => e.stopPropagation()}>
                      <Checkbox
                        checked={isSelected}
                        onChange={(e) => toggle(key, (e.target as HTMLInputElement).checked)}
                      />
                    </span>
                  </td>
                ) : null}
                {columns.map((col) => {
                  const align = col.align ?? defaultAlign ?? 'left';
                  // 优先使用列级 render，再使用全局 renderCell，最后回退到原始值
                  const renderedByColumn =
                    typeof col.render === 'function' ? col.render(row[col.key], row, idx, col) : undefined;
                  const renderedByGlobal =
                    renderedByColumn == null && typeof renderCell === 'function'
                      ? renderCell(row, col, idx)
                      : undefined;
                  return (
                    <td
                      key={col.key}
                      className={`beaver-table__td beaver-table__td--${align}`}
                      style={{ textAlign: align }}
                    >
                      {renderedByColumn != null
                        ? renderedByColumn
                        : renderedByGlobal != null
                          ? renderedByGlobal
                          : row[col.key]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
