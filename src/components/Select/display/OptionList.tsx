import React, { useMemo } from 'react';
import type { SelectOption } from '../types';
import OptionItem from './OptionItem';

import VirtualList from '../../_internal/VirtualList';

// ListChildComponentProps 的本地类型定义
type ListChildComponentProps = {
  index: number;
  style: React.CSSProperties;
  data?: any;
};

export type OptionListProps = {
  menuOptions: (SelectOption & { __isNew?: true })[];
  highlighted: number | null;
  internalValue?: string | string[] | undefined;
  onHighlight: (i: number) => void;
  onSelectByValue: (value: string) => void;
  renderHighlightedLabel: (label: string) => React.ReactNode;
  noDataLabel?: string;
  listRef?: React.Ref<HTMLUListElement>;
  menuStyle?: React.CSSProperties;
  menuClassName?: string;
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
  menuStyle,
  menuClassName,
}) => {
  const useVirtual = menuOptions.length > 100;
  const itemHeight = 40;

  const Row = useMemo(() => {
    return ({ index, style }: ListChildComponentProps) => {
      const opt = menuOptions[index];
      const isNew = (opt as any).__isNew === true;
      const key = isNew ? `__create-${opt.value}` : opt.value;
      const isSelected = Array.isArray(internalValue) ? internalValue.includes(opt.value) : opt.value === internalValue;

      return (
        <div style={style} key={key}>
          <OptionItem
            id={`beaver-select-opt-${index}`}
            option={opt}
            index={index}
            highlighted={highlighted}
            isSelected={isSelected}
            onMouseEnter={(idx) => onHighlight(idx)}
            onMouseDown={(_e, _value, disabled) => {
              if (disabled) return;
              onSelectByValue(opt.value);
            }}
            renderHighlightedLabel={renderHighlightedLabel}
          />
        </div>
      );
    };
  }, [menuOptions, highlighted, internalValue, onHighlight, onSelectByValue, renderHighlightedLabel]);

  const handlePointerDownCapture = (e: React.PointerEvent) => {
    const path = (e as any).composedPath ? (e as any).composedPath() : (e as unknown as Event).composedPath?.();
    if (path && Array.isArray(path)) {
      const hasDisabled = path.some((n: any) => n && n.getAttribute && n.getAttribute('data-disabled') === 'true');
      if (hasDisabled) {
        e.preventDefault();
        e.stopPropagation();
      }
    }
  };

  const handleTouchStartCapture = (e: React.TouchEvent) => {
    const path = (e as any).composedPath ? (e as any).composedPath() : (e as unknown as Event).composedPath?.();
    if (path && Array.isArray(path)) {
      const hasDisabled = path.some((n: any) => n && n.getAttribute && n.getAttribute('data-disabled') === 'true');
      if (hasDisabled) {
        e.preventDefault();
        e.stopPropagation();
      }
    }
  };

  if (menuOptions.length === 0) {
    return (
      <ul
        role="listbox"
        className={`beaver-select__menu ${menuClassName ?? ''}`}
        style={menuStyle}
        ref={listRef}
        tabIndex={-1}
        aria-activedescendant={undefined}
        onPointerDownCapture={handlePointerDownCapture}
        onTouchStartCapture={handleTouchStartCapture}
      >
        <li className="beaver-select__option beaver-select__no-data" aria-disabled key="__no_data_or_match">
          <span className="beaver-select__opt-label">{noDataLabel ?? '暂无数据'}</span>
        </li>
      </ul>
    );
  }

  if (useVirtual) {
    return (
      <div
        role="listbox"
        className={`beaver-select__menu ${menuClassName ?? ''}`}
        style={menuStyle}
        ref={listRef as any}
        tabIndex={-1}
        aria-activedescendant={highlighted !== null ? `beaver-select-opt-${highlighted}` : undefined}
        onPointerDownCapture={handlePointerDownCapture}
        onTouchStartCapture={handleTouchStartCapture}
      >
        <VirtualList
          height={Math.min(8, menuOptions.length) * itemHeight}
          itemCount={menuOptions.length}
          itemSize={itemHeight}
          width="100%"
        >
          {Row}
        </VirtualList>
      </div>
    );
  }

  return (
    <ul
      role="listbox"
      className={`beaver-select__menu ${menuClassName ?? ''}`}
      style={menuStyle}
      ref={listRef}
      tabIndex={-1}
      aria-activedescendant={highlighted !== null ? `beaver-select-opt-${highlighted}` : undefined}
      onPointerDownCapture={handlePointerDownCapture}
      onTouchStartCapture={handleTouchStartCapture}
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
            onMouseDown={(_e, _value, disabled) => {
              if (disabled) return;
              onSelectByValue(opt.value);
            }}
            renderHighlightedLabel={renderHighlightedLabel}
          />
        );
      })}
    </ul>
  );
};

export default OptionList;
