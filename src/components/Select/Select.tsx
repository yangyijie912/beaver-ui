import React, { useEffect, useRef, useState } from 'react';
import useSelectState from './hooks/useSelectState';
import useFilteredOptions, { SelectOptionWithNew } from './hooks/useFilteredOptions';
import useKeyboardNavigation from './hooks/useKeyboardNavigation';
import useTypeahead from './hooks/useTypeahead';
import OptionList from './OptionList';
import SearchInput from './SearchInput';
import './Select.css';

export type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type SelectProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'size'> & {
  /** 下拉选项列表 */
  options?: SelectOption[];
  /** 占位符 */
  placeholder?: string;
  /** 单选时为 string，复选时为 string[] */
  value?: string | string[];
  /** 默认值 */
  defaultValue?: string | string[];
  /** 事件回调，参数为选中的值 */
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
  /** 仅在 `multiple` 为 true 时生效：在下拉中隐藏已选项，并在每次多选后关闭下拉。 */
  filterSelected?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否加载中 */
  loading?: boolean;
  /** 自定义箭头/后缀图标（传入 ReactNode） */
  icon?: React.ReactNode;
  /** 自定义 loading 图标（传入 ReactNode），优先于默认 spinner */
  loadingIcon?: React.ReactNode;
  /** 直接设置组件宽度，支持 number(像素) 或 字符串(如 '50%','200px') */
  width?: number | string;
  /** 组件尺寸 */
  size?: 'small' | 'medium' | 'large';
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
  filterSelected = false,
  ...rest
}) => {
  const [open, setOpen] = useState(false); // 下拉打开状态
  const [query, setQuery] = useState(''); // 当前输入的查询文本
  // 受控/非受控值同步逻辑由 hook 统一管理
  const { internalValue, setInternalValue } = useSelectState({
    controlledValue,
    defaultValue,
    multiple,
  });
  const rootRef = useRef<HTMLDivElement | null>(null); // 组件根节点 ref
  const listRef = useRef<HTMLUListElement | null>(null); // 下拉列表 ref
  const searchTimer = useRef<number | null>(null); // 搜索定时器 ref
  const searchRef = useRef<HTMLInputElement | null>(null); // 搜索框 ref
  const committedRef = useRef<boolean>(false); // 标记是否已由用户显式选择（用于区分 close/blur 时的自动提交行为）
  const userTypedRef = useRef<boolean>(false); // 标记用户是否有真实输入行为
  // 用于 typeahead 的输入缓冲与定时清除
  const { handleBackspace, handleChar, clear: clearTypeahead } = useTypeahead(700, userTypedRef);
  const [inputFocused, setInputFocused] = useState(false); // 输入框聚焦状态

  // 点击外部关闭下拉
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onDoc);
    // 注册外部点击关闭处理
    return () => {
      document.removeEventListener('mousedown', onDoc);
    };
  }, [open]);

  // 过滤 & 展示逻辑抽离到 hook
  const { filteredOptions, displayOptions } = useFilteredOptions({
    options,
    query,
    userTyped: userTypedRef.current,
    filterOption,
    searchBy,
    allowCreate,
    multiple,
    filterSelected,
    internalValue,
  });

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

  // 下拉关闭时清空查询并重置高亮
  useEffect(() => {
    if (!open) {
      // 如果之前是显式选择（由 handleSelectByValue 处理），则跳过 close 时的自动提交/清空行为
      if (committedRef.current) {
        // 已由用户显式选择，清除标记并重置高亮
        // 保留 query 以便在下次打开时回显选中项，但不把回显视为用户输入（见 handleSelectByValue）
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

  // 多选时的已选值数组
  const selectedValues: string[] = Array.isArray(internalValue) ? (internalValue as string[]) : [];

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
      // 多选时：默认保持下拉打开；如果启用了 filterSelected，则每次选完后关闭下拉（按需行为）
      if (filterSelected) {
        setOpen(false);
      }
      return;
    }
    if (controlledValue === undefined) setInternalValue(value);
    onChange?.(value);
    // 对单选可搜索场景，不把已选 label 写入 `query`（避免影响搜索）；
    // 改为保留 `query` 为空，并把已选项通过 placeholder 的方式展示。
    if (searchable) {
      userTypedRef.current = false;
      setQuery('');
    } else setQuery('');
    // 标记为已由用户显式选择，防止 close/blur effect 重复提交或清空
    committedRef.current = true;
    setOpen(false);
  }

  // 键盘导航由 hook 处理（高亮项/按键事件）
  const { highlighted, setHighlighted, onKeyDown } = useKeyboardNavigation({
    displayOptions: displayOptions as (SelectOption | SelectOptionWithNew)[],
    open,
    setOpen,
    handleSelectByValue,
    isDisabled,
    multiple,
    onBackspace: (e: React.KeyboardEvent) => {
      e.preventDefault();
      handleBackspace({ query, setQuery, options, setHighlighted });
    },
    onChar: (e: React.KeyboardEvent) => {
      e.preventDefault();
      handleChar({ key: e.key, query, setQuery, options, multiple, searchable, setHighlighted });
    },
  });

  // 打开下拉时，设置初始高亮项（基于过滤后的列表）
  useEffect(() => {
    if (open && highlighted === null) {
      const src = displayOptions as (SelectOption | SelectOptionWithNew)[];
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

  // 传入 OptionList 的菜单选项
  const menuOptions = displayOptions as (SelectOption | SelectOptionWithNew)[];

  // 从选中数组中移除某项（用于 tag 删除）
  function removeTag(value: string, e?: React.MouseEvent) {
    e?.stopPropagation();
    const prev = Array.isArray(internalValue) ? [...internalValue] : [];
    const idx = prev.indexOf(value);
    if (idx >= 0) prev.splice(idx, 1);
    if (controlledValue === undefined) setInternalValue(prev);
    onChange?.(prev);
  }

  /**
   * 处理多选tag删除事件
   * @param v 被删除的tag的值
   * @param e 触发事件
   */
  const handleTagsRemove = (v: string, e?: React.MouseEvent) => {
    removeTag(v, e);
  };

  // ---------- 输入区事件处理器（用于传入 SearchInput） ----------
  // multi / single 共用部分逻辑被抽出为函数以保持行为一致

  /**  处理多选输入变化事件
   *  多选时每次输入变化均视为用户输入，直接更新 query 并重置高亮
   */
  const handleMultiInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    userTypedRef.current = true;
    setQuery(e.target.value);
    setHighlighted(0);
  };

  /**  处理单选输入变化事件
   * @param e 输入变化事件
   */
  const handleSingleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    if (!userTypedRef.current && !multiple && searchable) {
      let added = raw.replace(query, '');
      if (added === '') added = raw;
      userTypedRef.current = true;
      setQuery(added);
      setHighlighted(0);
      return;
    }
    userTypedRef.current = true;
    setQuery(raw);
    setHighlighted(0);
  };

  /**  处理输入区聚焦事件  */
  const handleInputFocus = () => {
    setInputFocused(true);
    if (!userTypedRef.current && searchable && !multiple && query) {
      setTimeout(() => searchRef.current?.select(), 0);
    }
  };

  /**
   *  处理输入区失焦事件
   *  @param e 失焦事件
   */
  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (committedRef.current) {
      committedRef.current = false;
      setInputFocused(false);
      return;
    }
    const q = query.trim();
    if (allowCreate && q) {
      const match = options.find((o) => o.value === q || o.label === q);
      if (match && !match.disabled) {
        if (multiple) handleSelectByValue(match.value);
        else {
          if (controlledValue === undefined) setInternalValue(match.value);
          onChange?.(match.value);
        }
      } else {
        if (multiple) handleSelectByValue(q);
        else {
          if (controlledValue === undefined) setInternalValue(q);
          onChange?.(q);
        }
      }
    }
    setQuery('');
    setInputFocused(false);
  };

  /**
   * 处理输入区键盘事件
   * @param e 键盘事件
   */
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlighted((h) => {
        const src = displayOptions as (SelectOption | SelectOptionWithNew)[];
        const start = h === null ? -1 : h;
        for (let i = start + 1; i < src.length; i++) {
          if (!src[i].disabled) return i;
        }
        return h;
      });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlighted((h) => {
        const src = displayOptions as (SelectOption | SelectOptionWithNew)[];
        const start = h === null ? src.length : h;
        for (let i = start - 1; i >= 0; i--) {
          if (!src[i].disabled) return i;
        }
        return h;
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
      const src = displayOptions as (SelectOption | SelectOptionWithNew)[];
      const opt = src[highlighted ?? 0];
      if (opt && !opt.disabled) handleSelectByValue(opt.value);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

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
            <SearchInput
              multiple={multiple}
              query={query}
              onChangeEvent={multiple ? handleMultiInputChange : handleSingleInputChange}
              searchRef={searchRef}
              onKeyDown={handleInputKeyDown}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              placeholder={
                query
                  ? ''
                  : internalValue && !Array.isArray(internalValue)
                    ? (options.find((o) => o.value === (internalValue as string))?.label ?? String(internalValue))
                    : placeholder
              }
              selectedValues={selectedValues}
              options={options}
              removeTag={handleTagsRemove}
              onMouseDown={(e) => e.stopPropagation()}
              onClick={(e) => e.stopPropagation()}
            />
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
        {/* 图标区 */}
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
        <OptionList
          menuOptions={menuOptions}
          highlighted={highlighted}
          internalValue={internalValue}
          onHighlight={(i) => setHighlighted(i)}
          onSelectByValue={(v) => handleSelectByValue(v)}
          renderHighlightedLabel={renderHighlightedLabel}
          noDataLabel={
            options.length === 0
              ? '暂无数据'
              : searchable && userTypedRef.current && query.trim()
                ? '无匹配项'
                : '暂无数据'
          }
          listRef={listRef}
        />
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
