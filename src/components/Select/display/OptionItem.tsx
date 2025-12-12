import React from 'react';
import { Check } from '../../../icons';
import type { SelectOption } from '../types';

/**
 * OptionItem
 * 负责渲染单个下拉项。将原 `Select.tsx` 中每个 <li> 的渲染逻辑拆出，
 * 以便于单元测试与样式复用。
 *
 * Props 设计原则：保持无副作用（纯渲染），把事件回调从父组件传入。
 */
export type OptionItemProps = {
  id: string;
  option: SelectOption & { __isNew?: true };
  index: number;
  highlighted: number | null;
  isSelected: boolean;
  onMouseEnter: (index: number) => void;
  onMouseDown: (e: React.MouseEvent, value: string, disabled?: boolean) => void;
  renderHighlightedLabel: (label: string) => React.ReactNode;
};

const OptionItem: React.FC<OptionItemProps> = ({
  id,
  option,
  index,
  highlighted,
  isSelected,
  onMouseEnter,
  onMouseDown,
  renderHighlightedLabel,
}) => {
  const isNew = (option as any).__isNew === true;
  const disabled = (option as any).disabled;

  return (
    <li
      id={id}
      role="option"
      aria-disabled={disabled}
      aria-selected={isSelected}
      key={option.value}
      className={`beaver-select__option ${isSelected ? 'beaver-select__option--selected' : ''} ${disabled ? 'beaver-select__option--disabled' : ''} ${highlighted === index ? 'beaver-select__option--highlighted' : ''} ${isNew ? 'beaver-select__option--new' : ''}`}
      data-disabled={disabled ? 'true' : undefined}
      tabIndex={-1}
      onMouseEnter={() => {
        if (disabled) return;
        onMouseEnter(index);
      }}
      onMouseDown={(e) => {
        if (disabled) return; // 先检查 disabled，避免对手势/滚动造成影响
        // 在 mousedown 时立即处理选择，避免 input 的 blur/close 逻辑覆盖选择行为
        e.preventDefault();
        e.stopPropagation();
        onMouseDown(e, option.value, disabled);
      }}
      // 触摸/Pointer 设备上也要屏蔽交互，保证 disabled 状态下不会触发选择
      // keep pointer/touch handlers to support devices where mouse events differ
      onPointerDown={(e: React.PointerEvent) => {
        if ((option as any).disabled) return; // 再次保护
        e.preventDefault();
        e.stopPropagation();
        // @ts-ignore - 兼容传入函数签名
        onMouseDown(e as unknown as React.MouseEvent, option.value, disabled);
      }}
      onTouchStart={(e: React.TouchEvent) => {
        if ((option as any).disabled) return;
        e.preventDefault();
        e.stopPropagation();
        // @ts-ignore - 兼容传入函数签名
        onMouseDown(e as unknown as React.MouseEvent, option.value, disabled);
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <span className="beaver-select__opt-label">
        {isNew ? (
          <span className="beaver-select__create-label">{`使用 "${option.label}"`}</span>
        ) : (
          renderHighlightedLabel(option.label)
        )}
      </span>
      {isSelected && (
        <span className="beaver-select__opt-checkmark" aria-hidden>
          <Check width={16} height={16} aria-hidden />
        </span>
      )}
    </li>
  );
};

export default OptionItem;
