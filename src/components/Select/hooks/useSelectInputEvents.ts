import React from 'react';
import type { SelectOption } from '../types';
import type { SelectUIState } from './useSelectUI';

interface UseSelectInputEventsParams {
  state: SelectUIState;
  setQuery: (query: string) => void;
  setHighlighted: (index: number | null | ((prev: number | null) => number | null)) => void;
  setOpen: (open: boolean) => void;
  setInputFocused: (focused: boolean) => void;
  internalValue: string | string[] | undefined;
  setInternalValue: (value: string | string[] | undefined) => void;
  controlledValue: string | string[] | undefined;
  options: SelectOption[];
  displayOptions: (SelectOption & { __isNew?: boolean })[];
  multiple: boolean;
  searchable: boolean;
  allowCreate: boolean;
  filterSelected: boolean;
  onChange?: (value: string | string[]) => void;
  committedRef: React.MutableRefObject<boolean>;
  userTypedRef: React.MutableRefObject<boolean>;
  searchRef: React.MutableRefObject<HTMLInputElement | null>;
}

/**
 * 统一处理 Select 输入框相关事件
 * 包括：输入变化、聚焦、失焦、键盘导航
 */
export function useSelectInputEvents({
  state,
  setQuery,
  setHighlighted,
  setOpen,
  setInputFocused,
  internalValue,
  setInternalValue,
  controlledValue,
  options,
  displayOptions,
  multiple,
  searchable,
  allowCreate,
  filterSelected,
  onChange,
  committedRef,
  userTypedRef,
  searchRef,
}: UseSelectInputEventsParams) {
  /**
   * 处理选中项（单选/多选通用逻辑）
   */
  const handleSelectByValue = (value: string) => {
    const opt = options.find((o) => o.value === value);
    if (opt && opt.disabled) return;

    if (multiple) {
      const prev = Array.isArray(internalValue) ? [...internalValue] : [];
      const foundIdx = prev.indexOf(value);
      if (foundIdx >= 0) prev.splice(foundIdx, 1);
      else prev.push(value);
      if (controlledValue === undefined) setInternalValue(prev);
      onChange?.(prev);
      setQuery('');
      committedRef.current = true;
      if (filterSelected) {
        setOpen(false);
      }
      return;
    }

    // 单选
    if (controlledValue === undefined) setInternalValue(value);
    onChange?.(value);
    if (searchable) {
      userTypedRef.current = false;
      setQuery('');
    } else {
      setQuery('');
    }
    committedRef.current = true;
    setOpen(false);
  };

  /**
   * 移除多选标签
   */
  const removeTag = (value: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    const prev = Array.isArray(internalValue) ? [...internalValue] : [];
    const idx = prev.indexOf(value);
    if (idx >= 0) prev.splice(idx, 1);
    if (controlledValue === undefined) setInternalValue(prev);
    onChange?.(prev);
  };

  /**
   * 统一的输入变化处理（单选/多选）
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;

    // 单选 + 可搜索：第一次输入时只获取增量
    if (!userTypedRef.current && !multiple && searchable) {
      let added = raw.replace(state.query, '');
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

  /**
   * 输入框获得焦点
   */
  const handleInputFocus = () => {
    setInputFocused(true);
    if (!userTypedRef.current && searchable && !multiple && state.query) {
      setTimeout(() => searchRef.current?.select(), 0);
    }
  };

  /**
   * 输入框失去焦点（处理创建项）
   */
  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (committedRef.current) {
      committedRef.current = false;
      setInputFocused(false);
      return;
    }

    const q = state.query.trim();
    if (allowCreate && q) {
      const match = options.find((o) => o.value === q || o.label === q);
      if (match && !match.disabled) {
        if (multiple) {
          handleSelectByValue(match.value);
        } else {
          if (controlledValue === undefined) setInternalValue(match.value);
          onChange?.(match.value);
        }
      } else {
        if (multiple) {
          handleSelectByValue(q);
        } else {
          if (controlledValue === undefined) setInternalValue(q);
          onChange?.(q);
        }
      }
    }
    setQuery('');
    setInputFocused(false);
  };

  /**
   * 输入框键盘事件（上下箭头、Enter、Escape）
   */
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlighted((h: number | null) => {
        const start = h === null ? -1 : h;
        for (let i = start + 1; i < displayOptions.length; i++) {
          if (!displayOptions[i].disabled) return i;
        }
        return h;
      });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlighted((h: number | null) => {
        const start = h === null ? displayOptions.length : h;
        for (let i = start - 1; i >= 0; i--) {
          if (!displayOptions[i].disabled) return i;
        }
        return h;
      });
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const q = state.query.trim();
      if (allowCreate && q) {
        const exact = options.find((o) => o.value === q || o.label === q);
        if (!exact) {
          handleSelectByValue(q);
          setQuery('');
          return;
        }
      }
      const opt = displayOptions[state.highlighted ?? 0];
      if (opt && !opt.disabled) {
        handleSelectByValue(opt.value);
      }
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  return {
    handleSelectByValue,
    removeTag,
    handleInputChange,
    handleInputFocus,
    handleInputBlur,
    handleInputKeyDown,
  };
}
