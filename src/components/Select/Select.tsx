import React, { useEffect, useRef, useState } from 'react';
import './Select.css';

export type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type SelectProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'size'> & {
  /** 下拉选项列表 */
  options?: SelectOption[];
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
};

const Select: React.FC<SelectProps> = ({
  options = [],
  placeholder = '请选择',
  value: controlledValue,
  defaultValue,
  onChange,
  disabled = false,
  loading = false,
  className,
  size = 'medium',
  name,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState<number | null>(null);
  const [internalValue, setInternalValue] = useState<string | undefined>(controlledValue ?? defaultValue);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);

  // 同步受控值
  useEffect(() => {
    if (controlledValue !== undefined) setInternalValue(controlledValue);
  }, [controlledValue]);

  // 点击外部关闭下拉
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  // 打开下拉时，设置初始高亮项
  useEffect(() => {
    if (open && highlighted === null) {
      const idx = options.findIndex((o) => o.value === internalValue);
      setHighlighted(idx >= 0 ? idx : 0);
    }
  }, [open]);

  // 选中的选项
  const selectedOption = options.find((o) => o.value === internalValue);

  // 是否禁用
  const isDisabled = disabled || loading;

  // 切换下拉打开状态
  function toggleOpen() {
    if (isDisabled) return;
    setOpen((v) => !v);
  }

  // 处理选中项
  function handleSelect(idx: number) {
    const opt = options[idx];
    if (!opt || opt.disabled) return;
    if (controlledValue === undefined) setInternalValue(opt.value);
    onChange?.(opt.value);
    setOpen(false);
  }

  // 处理键盘事件
  function onKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (isDisabled) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!open) {
        setOpen(true);
        return;
      }
      setHighlighted((h) => {
        const next = h === null ? 0 : Math.min(options.length - 1, h + 1);
        return next;
      });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!open) {
        setOpen(true);
        return;
      }
      setHighlighted((h) => {
        const next = h === null ? options.length - 1 : Math.max(0, h - 1);
        return next;
      });
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!open) {
        setOpen(true);
      } else if (highlighted !== null) {
        handleSelect(highlighted);
      }
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  }

  return (
    <div
      className={['beaver-select-wrapper', `beaver-select--${size}`, className || ''].filter(Boolean).join(' ')}
      ref={rootRef}
    >
      <button
        type="button"
        className="beaver-select__control"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={toggleOpen}
        onKeyDown={onKeyDown}
        disabled={disabled}
        {...(rest as any)}
      >
        <span className={`beaver-select__value ${!selectedOption ? 'beaver-select__placeholder' : ''}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        {loading ? (
          <span className="beaver-select__spinner" aria-hidden />
        ) : (
          <span className={`beaver-select__arrow ${open ? 'is-open' : ''}`} aria-hidden>
            ▾
          </span>
        )}
      </button>

      {open && (
        <ul
          role="listbox"
          className="beaver-select__menu"
          ref={listRef}
          tabIndex={-1}
          aria-activedescendant={highlighted !== null ? `beaver-select-opt-${highlighted}` : undefined}
        >
          {options.map((opt, i) => (
            <li
              id={`beaver-select-opt-${i}`}
              role="option"
              aria-selected={opt.value === internalValue}
              key={opt.value}
              className={`beaver-select__option ${opt.value === internalValue ? 'is-selected' : ''} ${opt.disabled ? 'is-disabled' : ''} ${highlighted === i ? 'is-highlighted' : ''}`}
              onMouseEnter={() => setHighlighted(i)}
              onClick={() => handleSelect(i)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}

      {/* hidden native select to keep form compatibility */}
      <select
        name={name}
        value={internalValue ?? ''}
        onChange={(e) => {
          const idx = options.findIndex((o) => o.value === e.target.value);
          if (idx >= 0) handleSelect(idx);
        }}
        style={{ display: 'none' }}
        aria-hidden
      />
    </div>
  );
};

export default Select;
