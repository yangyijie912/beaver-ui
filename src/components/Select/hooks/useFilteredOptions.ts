import { useMemo } from 'react';
import type { SelectOption } from '../types';

/**
 * useFilteredOptions
 *
 * 该 hook 负责根据输入 query、搜索策略和可选配置对下拉选项进行过滤与展示处理。
 * - 当用户没有实际输入（userTyped 为 false）时，返回原始 options（可选地去除已选项）。
 * - 支持自定义 filterOption 回调、按 label/value/both 搜索策略以及 allowCreate（无匹配时展示新建项）。
 * - 对于 `both` 策略，会先把 label 匹配的项放前面，再把只匹配 value 的项追加其后，以保持更友好的匹配顺序。
 *
 * 参数（UseFilteredOptionsParams）：
 * - options: 所有候选项
 * - query: 当前输入文本
 * - userTyped: 用户是否有真实输入（用于区分程序性回显与用户输入）
 * - filterOption: 自定义过滤器，若提供则优先使用
 * - searchBy: 搜索字段策略 ('label'|'value'|'both')
 * - allowCreate: 在无匹配时是否返回一个 __isNew 的新项
 * - multiple: 是否多选（用于配合 filterSelected）
 * - filterSelected: 多选时是否从下拉中隐藏已选项
 * - internalValue: 当前内部选中值（用于 filterSelected）
 *
 * 返回值：{ filteredOptions, displayOptions }
 * - filteredOptions: 基于 query/过滤策略的候选集合（不包含 __isNew）
 * - displayOptions: 最终展示集合；当 allowCreate 且无匹配时可能包含一个带 `__isNew: true` 的选项
 */

export type SelectOptionWithNew = SelectOption & { __isNew?: true };

export type UseFilteredOptionsParams = {
  options: SelectOption[];
  query: string;
  userTyped: boolean;
  filterOption?: (input: string, option: SelectOption) => boolean;
  searchBy?: 'label' | 'value' | 'both';
  allowCreate?: boolean;
  multiple?: boolean;
  filterSelected?: boolean;
  internalValue?: string | string[] | undefined;
};

export default function useFilteredOptions({
  options,
  query,
  userTyped,
  filterOption,
  searchBy = 'both',
  allowCreate = false,
  multiple = false,
  filterSelected = false,
  internalValue,
}: UseFilteredOptionsParams) {
  const selectedVals = Array.isArray(internalValue) ? (internalValue as string[]) : [];

  const filteredOptions = useMemo(() => {
    // 仅当用户实际输入过（而不是程序预置的回显）时才按 query 过滤
    if (!query || !userTyped) {
      const base = options;
      return multiple && filterSelected ? base.filter((o) => !selectedVals.includes(o.value)) : base;
    }
    const q = query.trim().toLowerCase();

    if (filterOption) {
      return options.filter((o) => filterOption(q, o));
    }

    if (searchBy === 'label') {
      return options.filter((o) => o.label.toLowerCase().includes(q));
    }
    if (searchBy === 'value') {
      return options.filter((o) => o.value.toLowerCase().includes(q));
    }

    // both
    const labelMatches = options.filter((o) => o.label.toLowerCase().includes(q));
    const valueOnlyMatches = options.filter(
      (o) => !o.label.toLowerCase().includes(q) && o.value.toLowerCase().includes(q)
    );
    const res = [...labelMatches, ...valueOnlyMatches];
    return multiple && filterSelected ? res.filter((o) => !selectedVals.includes(o.value)) : res;
  }, [options, query, userTyped, filterOption, searchBy, multiple, filterSelected, internalValue]);

  const displayOptions = useMemo(() => {
    const src = filteredOptions;
    const q = query.trim();
    if (allowCreate && q && src.length === 0) {
      return [
        {
          label: q,
          value: q,
          __isNew: true,
        } as SelectOptionWithNew,
      ];
    }
    return src as (SelectOption | SelectOptionWithNew)[];
  }, [filteredOptions, allowCreate, query]);

  return { filteredOptions, displayOptions } as const;
}
