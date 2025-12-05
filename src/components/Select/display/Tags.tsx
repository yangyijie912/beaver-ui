import React from 'react';
import type { SelectOption } from '../types';

/**
 * Tags
 * 负责渲染多选模式下的已选标签（tag）列表。
 * 设计原则：纯渲染 + 回调上抛。组件不直接修改外部状态。
 *
 * Props:
 * - `values`: 已选值的数组
 * - `options`: 用于把 value 映射为 label（若找不到则回退显示 value）
 * - `onRemove`: 点击删除 tag 时的回调 (value) => void
 */
export type TagsProps = {
  values: string[];
  options: SelectOption[];
  onRemove: (value: string, e?: React.MouseEvent) => void;
};

const Tags: React.FC<TagsProps> = ({ values, options, onRemove }) => {
  return (
    <div className="beaver-select__tags">
      {values.map((v) => (
        <span className="beaver-select__tag" key={v} onClick={(e) => e.stopPropagation()}>
          <span className="beaver-select__tag-label">{options.find((o) => o.value === v)?.label ?? v}</span>
          <button
            type="button"
            aria-label={`remove ${v}`}
            className="beaver-select__tag-remove"
            onClick={(e) => {
              e.stopPropagation();
              onRemove(v, e);
            }}
          >
            ×
          </button>
        </span>
      ))}
    </div>
  );
};

export default Tags;
