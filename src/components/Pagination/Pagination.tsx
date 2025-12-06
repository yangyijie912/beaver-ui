import React from 'react';
import './Pagination.css';
import Select from '../Select/Select';
import { defaultLocale, PaginationLocale } from './locales';

export type PaginationProps = {
  /** 总条目数 */
  total: number;
  /** 初始每页数量（可选，默认 10） */
  pageSize?: number;
  /** 受控当前页（可选） */
  current?: number;
  /** 页码或 pageSize 变化回调 */
  onChange?: (page: number, pageSize?: number) => void;
  /** 下拉可选的 pageSize 值 */
  pageSizeOptions?: number[];
  /** 是否显示快速跳转输入框 */
  showQuickJumper?: boolean;
  /** 是否显示每页数量切换器 */
  showSizeChanger?: boolean;
  /** 国际化配置，可覆盖默认文案 */
  locale?: Partial<PaginationLocale>;
  /** 对齐方向：'left' | 'center' | 'right'（默认 'left'） */
  align?: 'left' | 'center' | 'right';
  /** 是否禁用整个分页控件 */
  disabled?: boolean;
  /** 可选的宽度配置 */
  width?: {
    sizeChanger?: number | string;
    quickJumper?: number | string;
  };
};

// 创建一个闭区间的数字数组，例如 range(2,4) -> [2,3,4]
function range(start: number, end: number) {
  const arr = [] as number[];
  for (let i = start; i <= end; i++) arr.push(i);
  return arr;
}

/**
 * Pagination 组件
 * - 使用场景：在数据量较大时，分割数据为多页进行展示和导航
 * - 支持自定义每页条目数
 * - 支持快速跳转到指定页码
 * - 支持禁用状态
 * - 支持国际化文案
 * - 支持对齐方式自定义（左、中、右）
 * - 支持受控和非受控用法
 */
const Pagination: React.FC<PaginationProps> = ({
  total,
  pageSize: propPageSize = 10,
  current: propCurrent,
  onChange,
  pageSizeOptions = [10, 20, 50, 100],
  showQuickJumper = false,
  showSizeChanger = false,
  locale: localeProp,
  align = 'left',
  disabled = false,
  width,
}) => {
  // 将 number -> "NNpx"，string 原样返回
  const normalizeWidth = (w?: number | string) => (typeof w === 'number' ? `${w}px` : w);
  const locale = React.useMemo(() => ({ ...defaultLocale, ...(localeProp || {}) }), [localeProp]);
  // current: 当前页（组件内部状态，可被受控 prop 覆盖）
  const [current, setCurrent] = React.useState<number>(propCurrent ?? 1);
  // pageSize: 当前每页条目数（内部状态，以 prop 为初始值）
  const [pageSize, setPageSize] = React.useState<number>(propPageSize);

  // pages：根据当前 pageSize 计算的总页数，至少为 1
  const pages = Math.max(1, Math.ceil(total / pageSize));

  // 当外部 current 变化时，更新内部 current（支持受控用法）
  React.useEffect(() => {
    if (typeof propCurrent === 'number') setCurrent(propCurrent);
  }, [propCurrent]);

  // 当 propPageSize 变更时，更新内部 pageSize（保持与外部一致）
  React.useEffect(() => {
    setPageSize(propPageSize);
  }, [propPageSize]);

  // 当 total 或 pageSize 变化时，保证 current 不会超过最大页数
  React.useEffect(() => {
    const pages = Math.max(1, Math.ceil(total / pageSize));
    if (current > pages) setCurrent(pages);
  }, [total, pageSize]);

  // 触发页码变化的统一方法：更新内部 state 并回调 onChange
  const triggerChange = (page: number, size?: number) => {
    if (disabled) return;
    setCurrent(page);
    if (typeof onChange === 'function') onChange(page, size ?? pageSize);
  };

  // 根据当前页和总页数生成展示的页码列表，超出范围时使用 "..." 折叠
  const makePageList = () => {
    if (pages <= 7) return range(1, pages);
    const list: Array<number | '...'> = [];
    // 左边界和右边界，用于在当前页两侧显示最多 2 个页码
    const left = Math.max(2, current - 2);
    const right = Math.min(pages - 1, current + 2);

    list.push(1);
    if (left > 2) list.push('...');
    for (let i = left; i <= right; i++) list.push(i);
    if (right < pages - 1) list.push('...');
    list.push(pages);
    return list;
  };

  // 用于快速跳页的输入引用
  const jumpRef = React.useRef<HTMLInputElement | null>(null);

  // 处理从输入框触发的跳页（按 Enter 或失焦时）
  const handleJumpFromInput = () => {
    const input = jumpRef.current;
    if (!input) return;
    const raw = input.value.trim();
    if (raw === '') return;
    const val = Number(raw);
    if (Number.isFinite(val)) {
      const page = Math.min(Math.max(1, Math.trunc(val)), Math.max(1, Math.ceil(total / pageSize)));
      triggerChange(page);
    }
    input.value = '';
  };

  const pagesList = makePageList();

  const rootClass = React.useMemo(() => `beaver-pagination beaver-pagination--align-${align}`, [align]);

  // 根 class 包含禁用状态
  const rootClassFinal = React.useMemo(
    () => `${rootClass}${disabled ? ' beaver-pagination--disabled' : ''}`,
    [rootClass, disabled]
  );
  return (
    <div className={rootClassFinal}>
      <div className="beaver-pagination__controls">
        {/* 上一页 */}
        <button
          type="button"
          className="beaver-pagination__control"
          onClick={() => triggerChange(Math.max(1, current - 1))}
          disabled={disabled || current === 1}
          aria-label={locale.prev}
        >
          <svg
            className="beaver-pagination__icon"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M10 3L5 8L10 13"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* 页码列表（包含省略号） */}
        <ul className="beaver-pagination__list">
          {pagesList.map((p, idx) => (
            <li key={String(p) + idx}>
              {p === '...' ? (
                <span className="beaver-pagination__dots">…</span>
              ) : (
                <button
                  type="button"
                  className={['beaver-pagination__item', current === p ? 'beaver-pagination__item--active' : '']
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => triggerChange(p as number)}
                  disabled={disabled}
                  aria-current={current === p ? 'page' : undefined}
                >
                  {p}
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* 下一页 */}
        <button
          type="button"
          className="beaver-pagination__control"
          onClick={() => triggerChange(Math.min(pages, current + 1))}
          disabled={disabled || current === pages}
          aria-label={locale.next}
        >
          <svg
            className="beaver-pagination__icon"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M6 3L11 8L6 13"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* 可选的额外控件：pageSize 切换与快速跳页 */}
      <div className="beaver-pagination__extras">
        {showSizeChanger && (
          <div className="beaver-pagination__sizes">
            {/*
              Select 的 onChange 使用内联处理器：
              当选中新 pageSize 时，更新状态并重置到第一页（triggerChange(1, sz)）。
            */}
            <Select
              options={pageSizeOptions.map((s) => ({
                label: locale.itemsPerPage ? locale.itemsPerPage(s) : `${s}`,
                value: String(s),
              }))}
              value={String(pageSize)}
              onChange={(v) => {
                const val = Array.isArray(v) ? v[0] : (v as string);
                const sz = Number(val) || pageSize;
                setPageSize(sz);
                // 切换每页数量后回到第 1 页
                triggerChange(1, sz);
              }}
              disabled={disabled}
              size="small"
              width={width?.sizeChanger ?? 84}
              aria-label="page-size"
            />
          </div>
        )}

        {showQuickJumper && (
          <div className="beaver-pagination__jumper">
            <label>
              {locale.jumpTo}
              <input
                name="beaver-jump"
                ref={jumpRef}
                className="beaver-pagination__jump-input"
                disabled={disabled}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleJumpFromInput();
                    // 按下回车后失焦
                    // (e.target as HTMLInputElement).blur();
                  }
                }}
                onBlur={() => {
                  handleJumpFromInput();
                }}
                aria-label="quick-jump"
                style={width?.quickJumper ? { width: normalizeWidth(width.quickJumper) } : undefined}
              />
              {locale.page}
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pagination;
