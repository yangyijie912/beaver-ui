import React from 'react';
import type { SelectOption } from '../types';

interface SelectTagsProps {
  /** 已选值数组 */
  selectedValues: string[];
  /** 选项列表 */
  options: SelectOption[];
  /** 移除标签回调 */
  onRemove: (value: string, e?: React.MouseEvent) => void;
}

/**
 * 多选标签显示组件
 */
export const SelectTags: React.FC<SelectTagsProps> = ({ selectedValues, options, onRemove }) => {
  return (
    <div className="beaver-select__tags">
      {selectedValues.map((v: string) => (
        <span className="beaver-select__tag" key={v} onClick={(e) => e.stopPropagation()}>
          <span className="beaver-select__tag-label">{options.find((o) => o.value === v)?.label ?? v}</span>
          <button
            type="button"
            aria-label={`remove ${v}`}
            className="beaver-select__tag-remove"
            onClick={(e) => onRemove(v, e)}
          >
            ×
          </button>
        </span>
      ))}
    </div>
  );
};
