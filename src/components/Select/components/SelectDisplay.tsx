import React from 'react';
import type { SelectOption } from '../types';

interface SelectDisplayProps {
  /** 是否可搜索 */
  searchable: boolean;
  /** 下拉是否打开 */
  open: boolean;
  /** 已选值 */
  internalValue: string | string[] | undefined;
  /** 占位符 */
  placeholder: string;
  /** 选项列表 */
  options: SelectOption[];
  /** 单选时的已选项 */
  selectedOption?: SelectOption;
  /** 多选时的已选值数组 */
  selectedValues: string[];
  /** 搜索框组件 */
  searchInput?: React.ReactNode;
  /** 多选标签组件 */
  tags?: React.ReactNode;
  /** 单选显示内容 */
  singleValue?: React.ReactNode;
}

/**
 * Select 组件的显示区域（左侧选中值展示）
 * 支持：单选模式、多选模式、搜索框
 */
export const SelectDisplay: React.FC<SelectDisplayProps> = ({
  searchable,
  open,
  internalValue,
  placeholder,
  options,
  selectedOption,
  selectedValues,
  searchInput,
  tags,
  singleValue,
}) => {
  // 搜索框打开时显示搜索输入框
  if (searchable && open) {
    return <>{searchInput}</>;
  }

  // 多选：显示标签或占位符
  if (Array.isArray(internalValue)) {
    return selectedValues.length === 0 ? (
      <span className={`beaver-select__value beaver-select__placeholder`}>{placeholder}</span>
    ) : (
      <>{tags}</>
    );
  }

  // 单选：显示已选项或占位符
  return (
    <span className={`beaver-select__value ${!(internalValue ?? selectedOption) ? 'beaver-select__placeholder' : ''}`}>
      {singleValue || (
        <>
          {internalValue
            ? (options.find((o) => o.value === internalValue)?.label ?? internalValue)
            : selectedOption
              ? selectedOption.label
              : placeholder}
        </>
      )}
    </span>
  );
};
