import React, { useEffect, useRef, useState } from 'react';
import './Select.css';

export type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type SelectProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'size'> & {
  /** 下拉选项列表 */
  options?: SelectOption[];
  placeholder?: string;
  /** 单选时为 string，复选时为 string[] */
  value?: string | string[];
  defaultValue?: string | string[];
  onChange?: (value: string | string[]) => void;
  /** 是否支持多选 */
  multiple?: boolean;
  /** 是否在下拉中显示搜索框 */
  searchable?: boolean;
  /** 是否允许在没有匹配项时创建自定义输入项（默认 false） */
  allowCreate?: boolean;
  /** 定制过滤函数：如果提供，将优先使用 */
  filterOption?: (input: string, option: SelectOption) => boolean;
  /** 搜索策略：'label' 只按 label 搜索，'value' 只按 value，'both' 按 label 与 value 搜索但优先 label 匹配 */
  searchBy?: 'label' | 'value' | 'both';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  /** 自定义箭头/后缀图标（传入 ReactNode） */
  icon?: React.ReactNode;
  /** 自定义 loading 图标（传入 ReactNode），优先于默认 spinner */
  loadingIcon?: React.ReactNode;
  /** 直接设置组件宽度，支持 number(像素) 或 字符串(如 '50%','200px') */
  width?: number | string;
};

const Select: React.FC<SelectProps> = ({
  options = [],
  placeholder = '请选择',
  value: controlledValue,
  defaultValue,
  onChange,
  searchable = false,
  allowCreate = false,
  filterOption,
  searchBy = 'both',
  disabled = false,
  loading = false,
  icon,
  loadingIcon,
  className,
  size = 'medium',
  name,
  width,
  style,
  multiple = false,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState<number | null>(null);
  const [query, setQuery] = useState('');
  const [internalValue, setInternalValue] = useState<string | string[] | undefined>(controlledValue ?? defaultValue);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);
  const searchTimer = useRef<number | null>(null);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const committedRef = useRef<boolean>(false);
  const [inputFocused, setInputFocused] = useState(false);

  // 同步受控值
  useEffect(() => {
    if (controlledValue !== undefined) setInternalValue(controlledValue);
  }, [controlledValue]);

  // 点击外部关闭下拉
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  // 根据 query 过滤 options
  function filteredOptions() {
    if (!query) return options;
    const q = query.trim().toLowerCase();

    // 如果用户提供了自定义过滤函数，优先使用
    if (filterOption) {
      return options.filter((o) => filterOption(q, o));
    }
    const strategy = searchBy || 'both';
    if (strategy === 'label') {
      return options.filter((o) => o.label.toLowerCase().includes(q));
    }
    if (strategy === 'value') {
      return options.filter((o) => o.value.toLowerCase().includes(q));
    }
    // 'both'：优先把 label 匹配的项放前面，这样视觉上和输入更一致
    const labelMatches = options.filter((o) => o.label.toLowerCase().includes(q));
    const valueOnlyMatches = options.filter(
      (o) => !o.label.toLowerCase().includes(q) && o.value.toLowerCase().includes(q)
    );
    return [...labelMatches, ...valueOnlyMatches];
  }

  // 展示用的选项列表：当没有匹配项且有 query 时，提供一个用于创建自定义值的候选项
  function displayOptions() {
    const src = filteredOptions();
    const q = query.trim();
    if (allowCreate && q && src.length === 0) {
      return [
        {
          label: q,
          value: q,
          // 标记为新建项（用于渲染），类型上暂时忽略
          // @ts-ignore
          __isNew: true,
        } as SelectOption & { __isNew?: true },
      ];
    }
    return src;
  }

  // 高亮渲染 label 中匹配的子串
  function renderHighlightedLabel(label: string) {
    const q = query.trim();
    if (!q) return label;
    const lower = label.toLowerCase();
    const idx = lower.indexOf(q.toLowerCase());
    if (idx === -1) return label;
    const before = label.slice(0, idx);
    const match = label.slice(idx, idx + q.length);
    const after = label.slice(idx + q.length);
    return (
      <>
        {before}
        <span className="beaver-select__match">{match}</span>
        {after}
      </>
    );
  }

  // 打开下拉时，设置初始高亮项（基于过滤后的列表）
  useEffect(() => {
    if (open && highlighted === null) {
      const src = displayOptions();
      const idx = src.findIndex((o) => {
        if (Array.isArray(internalValue)) return internalValue.includes(o.value);
        return o.value === internalValue;
      });
      const firstIdx = src.findIndex((o) => !o.disabled);
      setHighlighted(idx >= 0 ? idx : firstIdx >= 0 ? firstIdx : 0);
    }
    if (open && searchable) {
      // 当下拉菜单打开时，聚焦内联输入框
      setTimeout(() => searchRef.current?.focus(), 0);
    }
  }, [open]);

  // 下拉关闭时清空查询并重置高亮
  useEffect(() => {
    if (!open) {
      // 如果之前是显式选择（由 handleSelectByValue 处理），则跳过 close 时的自动提交/清空行为
      if (committedRef.current) {
        committedRef.current = false;
        setHighlighted(null);
        return;
      }
      // 如果允许创建且有未提交的 query，则尝试提交（选中或创建）
      if (allowCreate && query.trim()) {
        const q = query.trim();
        const match = options.find((o) => o.value === q || o.label === q);
        if (match && !match.disabled) {
          if (controlledValue === undefined) setInternalValue(match.value);
          onChange?.(match.value);
        } else {
          if (controlledValue === undefined) setInternalValue(q);
          onChange?.(q);
        }
      }
      setQuery('');
      setHighlighted(null);
    }
  }, [open]);

  // 卸载时清除搜索定时器
  useEffect(() => {
    return () => {
      if (searchTimer.current) window.clearTimeout(searchTimer.current);
    };
  }, []);

  // 选中的选项
  const selectedOption = Array.isArray(internalValue)
    ? options.find((o) => o.value === (internalValue as string[])[0])
    : options.find((o) => o.value === internalValue);

  const selectedValues: string[] = Array.isArray(internalValue) ? (internalValue as string[]) : [];

  // 从选中数组中移除某项（用于 tag 删除）
  function removeTag(value: string, e?: React.MouseEvent) {
    e?.stopPropagation();
    const prev = Array.isArray(internalValue) ? [...internalValue] : [];
    const idx = prev.indexOf(value);
    if (idx >= 0) prev.splice(idx, 1);
    if (controlledValue === undefined) setInternalValue(prev);
    onChange?.(prev);
  }

  // 是否禁用
  const isDisabled = disabled || loading;

  // 切换下拉打开状态
  function toggleOpen() {
    if (isDisabled) return;
    setOpen((v) => !v);
  }

  // 处理选中项
  function handleSelectByValue(value: string) {
    const opt = options.find((o) => o.value === value);
    if (opt && opt.disabled) return;
    // 如果是多选，切换该项
    const isMultiple = multiple === true;
    if (isMultiple) {
      const prev = Array.isArray(internalValue) ? [...internalValue] : [];
      const foundIdx = prev.indexOf(value);
      if (foundIdx >= 0) prev.splice(foundIdx, 1);
      else prev.push(value);
      if (controlledValue === undefined) setInternalValue(prev);
      onChange?.(prev);
      setQuery('');
      committedRef.current = true;
      // 多选时保持下拉菜单打开
      return;
    }
    if (controlledValue === undefined) setInternalValue(value);
    onChange?.(value);
    // 仅当可搜索时预置 query（便于用户再次聚焦编辑）；非搜索模式不要保留 query，
    // 否则下次打开会按 query 过滤导致其它选项消失（单选场景的 bug）
    const displayText = opt ? (opt.label ?? value) : value;
    if (searchable) setQuery(displayText);
    else setQuery('');
    // 标记为已由用户显式选择，防止 close/blur effect 重复提交或清空
    committedRef.current = true;
    setOpen(false);
  }

  // 处理键盘事件
  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (isDisabled) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!open) {
        setOpen(true);
        return;
      }
      setHighlighted((h) => {
        const src = displayOptions();
        const next = h === null ? 0 : Math.min(src.length - 1, h + 1);
        return next;
      });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!open) {
        setOpen(true);
        return;
      }
      setHighlighted((h) => {
        const src = displayOptions();
        const next = h === null ? Math.max(0, src.length - 1) : Math.max(0, h - 1);
        return next;
      });
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!open) {
        setOpen(true);
      } else if (highlighted !== null) {
        const src = displayOptions();
        const opt = src[highlighted];
        if (opt) handleSelectByValue(opt.value);
      }
    } else if (open && e.key === 'Backspace') {
      e.preventDefault();
      const newQ = query.slice(0, -1);
      setQuery(newQ);
      if (searchTimer.current) window.clearTimeout(searchTimer.current);
      searchTimer.current = window.setTimeout(() => setQuery(''), 700) as unknown as number;
      const src = newQ
        ? options.filter(
            (o) =>
              o.label.toLowerCase().includes(newQ.trim().toLowerCase()) ||
              o.value.toLowerCase().includes(newQ.trim().toLowerCase())
          )
        : options;
      const firstIdx = src.findIndex((o) => !o.disabled);
      setHighlighted(firstIdx >= 0 ? firstIdx : 0);
    } else if (open && e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
      // 在下拉打开时输入字符进行类型搜索
      e.preventDefault();
      const newQ = query + e.key;
      setQuery(newQ);
      if (searchTimer.current) window.clearTimeout(searchTimer.current);
      searchTimer.current = window.setTimeout(() => setQuery(''), 700) as unknown as number;
      const q = newQ.trim().toLowerCase();
      const src = q
        ? options.filter((o) => o.label.toLowerCase().includes(q) || o.value.toLowerCase().includes(q))
        : options;
      const firstIdx = src.findIndex((o) => !o.disabled);
      setHighlighted(firstIdx >= 0 ? firstIdx : 0);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  }

  return (
    <div
      className={[
        'beaver-select-wrapper',
        `beaver-select--${size}`,
        isDisabled ? 'beaver-select--disabled' : '',
        open ? 'beaver-select--open' : '',
        className || '',
      ]
        .filter(Boolean)
        .join(' ')}
      ref={rootRef}
      aria-disabled={isDisabled}
      style={{
        ...(style as React.CSSProperties),
        ...(width !== undefined ? { width: typeof width === 'number' ? `${width}px` : width } : {}),
      }}
    >
      <div
        role="button"
        className={`beaver-select__control`}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={toggleOpen}
        onKeyDown={onKeyDown}
        tabIndex={isDisabled ? -1 : 0}
        {...(rest as any)}
      >
        {/* 展示区 */}
        <div className="beaver-select__display">
          {searchable && open ? (
            multiple ? (
              <div className={`beaver-select__tags-input`}>
                <div className="beaver-select__tags">
                  {selectedValues.length === 0
                    ? null
                    : selectedValues.map((v: string) => (
                        <span className="beaver-select__tag" key={v} onClick={(e) => e.stopPropagation()}>
                          <span className="beaver-select__tag-label">
                            {options.find((o) => o.value === v)?.label ?? v}
                          </span>
                          <button
                            type="button"
                            aria-label={`remove ${v}`}
                            className="beaver-select__tag-remove"
                            onClick={(e) => removeTag(v, e)}
                          >
                            ×
                          </button>
                        </span>
                      ))}
                </div>
                <input
                  ref={searchRef}
                  className="beaver-select__input"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setHighlighted(0);
                  }}
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={(e) => e.stopPropagation()}
                  onFocus={() => setInputFocused(true)}
                  onBlur={(e) => {
                    e.stopPropagation();
                    // 如果是在显式选择后触发的 blur（mousedown 先发生），则跳过 blur 的提交/清空逻辑
                    if (committedRef.current) {
                      committedRef.current = false;
                      setInputFocused(false);
                      return;
                    }
                    // 在失焦时，如果启用了 allowCreate，尝试提交输入（多选模式下把新值加入数组）
                    const q = query.trim();
                    if (allowCreate && q) {
                      const match = options.find((o) => o.value === q || o.label === q);
                      if (match && !match.disabled) {
                        handleSelectByValue(match.value);
                      } else {
                        handleSelectByValue(q);
                      }
                    }
                    // 清空查询以避免同一次交互被重复提交
                    setQuery('');
                    setInputFocused(false);
                  }}
                  onKeyDown={(e) => {
                    e.stopPropagation();
                    if (e.key === 'ArrowDown') {
                      e.preventDefault();
                      setHighlighted((h) => {
                        const src = displayOptions();
                        return h === null ? 0 : Math.min(src.length - 1, h + 1);
                      });
                    } else if (e.key === 'ArrowUp') {
                      e.preventDefault();
                      setHighlighted((h) => {
                        const src = displayOptions();
                        return h === null ? Math.max(0, src.length - 1) : Math.max(0, h - 1);
                      });
                    } else if (e.key === 'Enter') {
                      e.preventDefault();
                      const q = query.trim();
                      if (allowCreate && q) {
                        const exact = options.find((o) => o.value === q || o.label === q);
                        if (!exact) {
                          handleSelectByValue(q);
                          setQuery('');
                          return;
                        }
                      }
                      const src = displayOptions();
                      const opt = src[highlighted ?? 0];
                      if (opt) handleSelectByValue(opt.value);
                    } else if (e.key === 'Escape') {
                      setOpen(false);
                    }
                  }}
                  placeholder={selectedValues.length === 0 && !query ? placeholder : ''}
                />
              </div>
            ) : (
              <input
                ref={searchRef}
                className="beaver-select__input"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setHighlighted(0);
                }}
                onMouseDown={(e) => e.stopPropagation()}
                onClick={(e) => e.stopPropagation()}
                onFocus={() => setInputFocused(true)}
                onBlur={(e) => {
                  e.stopPropagation();
                  // 如果是在显式选择后触发的 blur（mousedown 先发生），则跳过 blur 的提交/清空逻辑
                  if (committedRef.current) {
                    committedRef.current = false;
                    setInputFocused(false);
                    return;
                  }
                  // 在失焦时，如果启用了 allowCreate，尝试提交输入
                  const q = query.trim();
                  if (allowCreate && q) {
                    const match = options.find((o) => o.value === q || o.label === q);
                    if (match && !match.disabled) {
                      if (controlledValue === undefined) setInternalValue(match.value);
                      onChange?.(match.value);
                    } else {
                      if (controlledValue === undefined) setInternalValue(q);
                      onChange?.(q);
                    }
                  }
                  // 清空查询以避免同一次交互被重复提交
                  setQuery('');
                  setInputFocused(false);
                }}
                onKeyDown={(e) => {
                  e.stopPropagation();
                  if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    setHighlighted((h) => {
                      const src = displayOptions();
                      return h === null ? 0 : Math.min(src.length - 1, h + 1);
                    });
                  } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    setHighlighted((h) => {
                      const src = displayOptions();
                      return h === null ? Math.max(0, src.length - 1) : Math.max(0, h - 1);
                    });
                  } else if (e.key === 'Enter') {
                    e.preventDefault();
                    const src = displayOptions();
                    const opt = src[highlighted ?? 0];
                    if (opt) handleSelectByValue(opt.value);
                  } else if (e.key === 'Escape') {
                    setOpen(false);
                  }
                }}
                placeholder={query ? '' : placeholder}
              />
            )
          ) : Array.isArray(internalValue) ? (
            // 关闭态（下拉未打开）时，在多选且无已选项时显示占位符
            selectedValues.length === 0 ? (
              <span className={`beaver-select__value beaver-select__placeholder`}>{placeholder}</span>
            ) : (
              <div className="beaver-select__tags">
                {selectedValues.map((v: string) => (
                  <span className="beaver-select__tag" key={v} onClick={(e) => e.stopPropagation()}>
                    <span className="beaver-select__tag-label">{options.find((o) => o.value === v)?.label ?? v}</span>
                    <button
                      type="button"
                      aria-label={`remove ${v}`}
                      className="beaver-select__tag-remove"
                      onClick={(e) => removeTag(v, e)}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )
          ) : (
            <span
              className={`beaver-select__value ${!(internalValue ?? selectedOption) ? 'beaver-select__placeholder' : ''}`}
            >
              {internalValue
                ? (options.find((o) => o.value === internalValue)?.label ?? internalValue)
                : selectedOption
                  ? selectedOption.label
                  : placeholder}
            </span>
          )}
        </div>
        <div className="beaver-select__icons">
          {loading ? (
            loadingIcon ? (
              <span className="beaver-select__loading-icon">{loadingIcon}</span>
            ) : (
              <span className="beaver-select__spinner" aria-hidden />
            )
          ) : icon ? (
            <span className="beaver-select__icon">{icon}</span>
          ) : (
            <span className="beaver-select__arrow" aria-hidden>
              <svg
                className="beaver-select__arrow-svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          )}
        </div>
      </div>

      {/* 下拉菜单 */}
      {open && (
        <ul
          role="listbox"
          className="beaver-select__menu"
          ref={listRef}
          tabIndex={-1}
          aria-activedescendant={highlighted !== null ? `beaver-select-opt-${highlighted}` : undefined}
        >
          {displayOptions().map((opt, i) => {
            const isNew = (opt as any).__isNew === true;
            const key = isNew ? `__create-${opt.value}` : opt.value;
            const isSelected = Array.isArray(internalValue)
              ? internalValue.includes(opt.value)
              : opt.value === internalValue;
            return (
              <li
                id={`beaver-select-opt-${i}`}
                role="option"
                aria-selected={isSelected}
                key={key}
                className={`beaver-select__option ${isSelected ? 'beaver-select__option--selected' : ''} ${'disabled' in opt && (opt as any).disabled ? 'beaver-select__option--disabled' : ''} ${highlighted === i ? 'beaver-select__option--highlighted' : ''} ${isNew ? 'beaver-select__option--new' : ''}`}
                onMouseEnter={() => setHighlighted(i)}
                onMouseDown={(e) => {
                  // 在 mousedown 时立即处理选择，避免 input 的 blur/close 逻辑覆盖选择行为
                  e.preventDefault();
                  e.stopPropagation();
                  if ((opt as any).disabled) return;
                  handleSelectByValue(opt.value);
                }}
                onClick={(e) => {
                  // 防止冒泡造成其它处理
                  e.stopPropagation();
                }}
              >
                {/* 在多选模式下显示选中勾选 */}
                <span className="beaver-select__opt-prefix">{isSelected ? '✔' : ''}</span>
                <span className="beaver-select__opt-label">
                  {isNew ? (
                    <span className="beaver-select__create-label">{`使用 "${opt.label}"`}</span>
                  ) : (
                    renderHighlightedLabel(opt.label)
                  )}
                </span>
              </li>
            );
          })}
          {/* 如果没有任何选项，且处于可搜索状态，显示无匹配项提示 */}
          {displayOptions().length === 0 && searchable && (
            <li className="beaver-select__option beaver-select__no-data" aria-disabled key="__no_matches">
              <span className="beaver-select__opt-label">无匹配项</span>
            </li>
          )}
        </ul>
      )}

      {/* 隐藏的原生 select，用于保持表单兼容性 */}
      {multiple === true ? (
        <select name={name} multiple style={{ display: 'none' }} aria-hidden>
          {options.map((o) => (
            <option
              key={o.value}
              value={o.value}
              selected={Array.isArray(internalValue) ? internalValue.includes(o.value) : false}
            >
              {o.label}
            </option>
          ))}
        </select>
      ) : (
        <select
          name={name}
          value={(Array.isArray(internalValue) ? (internalValue as string[])[0] : internalValue) ?? ''}
          onChange={(e) => {
            handleSelectByValue(e.target.value);
          }}
          style={{ display: 'none' }}
          aria-hidden
        />
      )}
    </div>
  );
};

export default Select;
