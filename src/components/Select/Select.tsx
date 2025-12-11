import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import useSelectState from './hooks/useSelectState';
import useFilteredOptions, { SelectOptionWithNew } from './hooks/useFilteredOptions';
import useKeyboardNavigation from './hooks/useKeyboardNavigation';
import useTypeahead from './hooks/useTypeahead';
import { useSelectUI } from './hooks/useSelectUI';
import { useMenuPosition } from '../../hooks/useMenuPosition';
import OptionList from './display/OptionList';
import SearchInput from './display/SearchInput';
import { SelectTags } from './components/SelectTags';
import { SelectIcons } from './components/SelectIcons';
import { renderHighlightedLabel, getWidthStyle, getContainerClassName, getNoDataLabel } from './utils';
import type { SelectOption, SelectProps } from './types';
import './Select.css';

const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  (
    {
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
      menuClassName,
      name,
      width,
      style,
      multiple = false,
      filterSelected = false,
      ...rest
    },
    ref
  ) => {
    // UI 状态管理（使用 useReducer 统一管理）
    const { state: uiState, setOpen, setQuery, setHighlighted, setInputFocused } = useSelectUI();
    const { open, query, highlighted } = uiState;

    // 值状态管理
    const { internalValue, setInternalValue } = useSelectState({
      controlledValue,
      defaultValue,
      multiple,
    });

    // Refs
    const rootRef = useRef<HTMLDivElement | null>(null);
    const attachRef = (el: HTMLDivElement | null) => {
      rootRef.current = el;
      if (ref) {
        if (typeof ref === 'function') (ref as any)(el);
        else (ref as unknown as { current: HTMLDivElement | null }).current = el;
      }
    };

    const searchRef = useRef<HTMLInputElement | null>(null);
    const committedRef = useRef<boolean>(false);
    const userTypedRef = useRef<boolean>(false);
    const searchTimer = useRef<number | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const ulRef = useRef<HTMLUListElement | null>(null);

    const { handleBackspace, handleChar } = useTypeahead(700, userTypedRef);

    // 下拉菜单宽度（与触发器保持一致）
    const [menuWidth, setMenuWidth] = useState<number | null>(null);

    // 使用 floating-ui 计算菜单位置
    const menuPosition = useMenuPosition(rootRef, menuRef, open, 6);

    // 菜单宽度在打开前测量（避免打开时内容撑开触发器）
    useEffect(() => {
      const el = rootRef.current;
      if (!el) return;
      if (open && menuWidth !== null && width === undefined) {
        el.style.setProperty('width', `${menuWidth}px`);
        el.style.setProperty('box-sizing', 'border-box');
      }
      if (!open && width === undefined) {
        el.style.removeProperty('width');
        el.style.removeProperty('box-sizing');
      }
      return () => {
        if (width === undefined) {
          el.style.removeProperty('width');
          el.style.removeProperty('box-sizing');
        }
      };
    }, [open, menuWidth, width]);

    // 使用 ResizeObserver 监听容器尺寸变化，实时更新菜单宽度
    useEffect(() => {
      if (!open || width !== undefined) return;
      const el = rootRef.current;
      if (!el) return;

      const resizeObserver = new ResizeObserver(() => {
        const newWidth = el.getBoundingClientRect().width;
        setMenuWidth(newWidth);
      });

      resizeObserver.observe(el);
      return () => {
        resizeObserver.disconnect();
      };
    }, [open, width]);

    // 强制重新计算菜单位置（当容器内容变化时）
    const [, setForceUpdate] = useState(0);
    useEffect(() => {
      if (!open) return;
      const el = rootRef.current;
      if (!el) return;

      // 监听容器内所有可能导致布局变化的事件
      const handleMutation = () => {
        setForceUpdate((prev) => prev + 1);
      };

      const mutationObserver = new MutationObserver(handleMutation);
      mutationObserver.observe(el, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true,
      });

      return () => {
        mutationObserver.disconnect();
      };
    }, [open]);

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

    // 当下拉打开时，在窗口 resize 时更新 menuWidth（初始值由 toggleOpen 在打开前设置）
    useEffect(() => {
      if (!open) return;
      function onResize() {
        const el = rootRef.current;
        if (!el) return;
        setMenuWidth(el.getBoundingClientRect().width);
      }
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }, [open]);

    // 过滤 & 展示逻辑抽离到 hook
    const { displayOptions } = useFilteredOptions({
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

    // 未使用的 renderLabel 函数已通过 utils 导入

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
      // 如果要打开，先测量当前触发器宽度（在未被 open 内容影响时测量），再打开
      if (!open) {
        const el = rootRef.current;
        if (el) {
          const beforeW = el.getBoundingClientRect().width;
          setMenuWidth(beforeW);
        }
        setOpen(true);
        // measure shortly after open to detect if something expands the trigger
        setTimeout(() => {
          const el2 = rootRef.current;
          if (el2) {
            // touchpoint for future diagnostics (no-op in production)
            void el2.getBoundingClientRect().width;
          }
        }, 0);
      } else {
        setOpen(false);
      }
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
    const { onKeyDown } = useKeyboardNavigation({
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
        setHighlighted((h: number | null) => {
          const src = displayOptions as (SelectOption | SelectOptionWithNew)[];
          const start = h === null ? -1 : h;
          for (let i = start + 1; i < src.length; i++) {
            if (!src[i].disabled) return i;
          }
          return h;
        });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setHighlighted((h: number | null) => {
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
        className={getContainerClassName(size, isDisabled, open, className)}
        ref={attachRef}
        aria-disabled={isDisabled}
        style={{
          ...(style as React.CSSProperties),
          ...getWidthStyle(width),
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
          {/* 展示区 - 内容包装（处理 padding 和对齐） */}
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
              selectedValues.length === 0 ? (
                <span className={`beaver-select__value beaver-select__placeholder`}>{placeholder}</span>
              ) : (
                <SelectTags selectedValues={selectedValues} options={options} onRemove={removeTag} />
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
          <SelectIcons loading={loading} loadingIcon={loadingIcon} icon={icon} />
        </div>

        {/* 下拉菜单 */}
        {open &&
          createPortal(
            <div
              ref={menuRef}
              style={{
                position: 'fixed',
                left: `${menuPosition.x}px`,
                top: `${menuPosition.y}px`,
                visibility: menuPosition.measured ? 'visible' : 'hidden',
                pointerEvents: menuPosition.measured ? undefined : 'none',
                zIndex: 'var(--beaver-select-z-index, 5000)',
                width: menuWidth ? `${menuWidth}px` : 'auto',
                boxSizing: 'border-box',
                minWidth: menuWidth ? `${menuWidth}px` : undefined,
              }}
            >
              <OptionList
                menuOptions={menuOptions}
                highlighted={highlighted}
                internalValue={internalValue}
                onHighlight={(i) => setHighlighted(i)}
                onSelectByValue={(v) => handleSelectByValue(v)}
                renderHighlightedLabel={(label) => renderHighlightedLabel(label, query)}
                noDataLabel={getNoDataLabel(options.length === 0, searchable, userTypedRef.current, query)}
                listRef={ulRef}
                menuStyle={{
                  width: menuWidth ? `${menuWidth}px` : 'auto',
                  boxSizing: 'border-box',
                  minWidth: menuWidth ? `${menuWidth}px` : undefined,
                }}
                menuClassName={menuClassName}
              />
            </div>,
            document.body
          )}

        {/* 隐藏的原生 select，用于保持表单兼容性 */}
        {multiple === true ? (
          <select
            name={name}
            multiple
            value={Array.isArray(internalValue) ? internalValue : []}
            onChange={(e) => {
              const selected = Array.from(e.target.selectedOptions, (option) => option.value);
              if (controlledValue === undefined) setInternalValue(selected);
              onChange?.(selected);
            }}
            style={{ display: 'none' }}
            aria-hidden
          >
            {options.map((o) => (
              <option key={o.value} value={o.value}>
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
  }
);

Select.displayName = 'Select';

export default Select;
