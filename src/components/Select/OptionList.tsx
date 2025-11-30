import React from 'react';
import type { SelectOption } from './Select';
import OptionItem from './OptionItem';

/**
 * OptionList
 * 将 Select 的下拉列表渲染抽成独立组件：
 * - 接受已经计算好的 `menuOptions`（包含 allowCreate 的 __isNew 项）
 * - 接受高亮索引 `highlighted` 和选中判断 `isSelected` 的回调
 * - 只做渲染与必要事件委托，不直接修改 Select 的状态
 *
 * - 优点：更易测试、样式与交互复用、主组件更聚焦于状态管理与组合逻辑。
 */
export type OptionListProps = {
  menuOptions: (SelectOption & { __isNew?: true })[];
  highlighted: number | null;
  internalValue?: string | string[] | undefined;
  onHighlight: (i: number) => void;
  onSelectByValue: (value: string) => void;
  renderHighlightedLabel: (label: string) => React.ReactNode;
  /**
   * 空数据时显示的提示文字，外部负责根据上下文（searchable/userTyped/query/options.length）计算
   */
  noDataLabel?: string;
  /**
   * 可选的 ul ref，供父组件（Select）聚焦或滚动使用
   */
  listRef?: React.Ref<HTMLUListElement>;
};

const OptionList: React.FC<OptionListProps> = ({
  menuOptions,
  highlighted,
  internalValue,
  onHighlight,
  onSelectByValue,
  renderHighlightedLabel,
  noDataLabel,
  listRef,
}) => {
  return (
    <ul
      role="listbox"
      className="beaver-select__menu"
      ref={listRef}
      tabIndex={-1}
      aria-activedescendant={highlighted !== null ? `beaver-select-opt-${highlighted}` : undefined}
    >
      {menuOptions.map((opt, i) => {
        const isNew = (opt as any).__isNew === true;
        const key = isNew ? `__create-${opt.value}` : opt.value;
        const isSelected = Array.isArray(internalValue)
          ? internalValue.includes(opt.value)
          : opt.value === internalValue;
        return (
          <OptionItem
            id={`beaver-select-opt-${i}`}
            key={key}
            option={opt}
            index={i}
            highlighted={highlighted}
            isSelected={isSelected}
            onMouseEnter={(idx) => onHighlight(idx)}
            onMouseDown={() => onSelectByValue(opt.value)}
            renderHighlightedLabel={renderHighlightedLabel}
          />
        );
      })}
      {menuOptions.length === 0 && (
        <li className="beaver-select__option beaver-select__no-data" aria-disabled key="__no_data_or_match">
          <span className="beaver-select__opt-label">{noDataLabel ?? '暂无数据'}</span>
        </li>
      )}
    </ul>
  );
};

export default OptionList;
