import React from 'react';
import Tags from './Tags';
import type { SelectOption } from './Select';

/**
 * SearchInput
 * 把 Select 中的 input / tags 输入区拆成独立组件，负责：
 * - 在 `searchable` 且 `open` 时渲染单输入或多输入（带 tags）
 * - 接收 value / onChange / onKeyDown / onFocus / onBlur 等回调
 * - 不处理过滤或选中行为，只把事件和输入值反馈给父组件
 *
 * Props 里包含尽量少的行为实现，复杂逻辑仍留在 `Select.tsx`（比如 allowCreate、handleSelectByValue 等）
 */
export type SearchInputProps = {
  multiple?: boolean;
  query: string;
  /**
   * 接收原生 input 的 ChangeEvent。父组件可通过事件对象读取 value 并决定如何处理（例如替换行为）
   */
  onChangeEvent?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * 允许传入可能为 null 的 ref（Select 中常用 RefObject<HTMLInputElement | null>）
   */
  searchRef?: React.RefObject<HTMLInputElement | null>;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  selectedValues?: string[];
  options?: SelectOption[];
  removeTag?: (value: string, e?: React.MouseEvent) => void;
  onMouseDown?: (e: React.MouseEvent) => void;
  onClick?: (e: React.MouseEvent) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({
  multiple,
  query,
  onChangeEvent,
  searchRef,
  onKeyDown,
  onFocus,
  onBlur,
  placeholder,
  selectedValues = [],
  options = [],
  removeTag,
  onMouseDown,
  onClick,
}) => {
  if (multiple) {
    return (
      <div className={`beaver-select__tags-input`} onMouseDown={onMouseDown} onClick={onClick}>
        <Tags values={selectedValues} options={options} onRemove={removeTag ?? (() => {})} />
        <input
          ref={searchRef}
          className="beaver-select__input"
          value={query}
          onChange={(e) => (onChangeEvent ? onChangeEvent(e) : undefined)}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          placeholder={selectedValues.length === 0 && !query ? placeholder : ''}
        />
      </div>
    );
  }

  return (
    <input
      ref={searchRef}
      className="beaver-select__input"
      value={query}
      onChange={(e) => (onChangeEvent ? onChangeEvent(e) : undefined)}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      onMouseDown={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
      placeholder={placeholder}
    />
  );
};

export default SearchInput;
