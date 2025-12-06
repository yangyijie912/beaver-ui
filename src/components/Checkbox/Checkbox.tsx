import React, { useLayoutEffect, useRef } from 'react';
import './Checkbox.css';

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: React.ReactNode;
  /** 控制三态（中间态）显示，不会被透传到 DOM 属性 */
  indeterminate?: boolean;
  /** 如果需要给 input 本身加额外 class，请使用该属性 */
  inputClassName?: string;
};

/**
 * Checkbox 组件
 * - 使用场景：在多个选项中进行多选
 * - 支持三态显示（选中、未选中、中间态）
 * - 支持禁用状态
 * - 支持自定义标签内容
 */
const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, inputClassName, disabled, indeterminate = false, ...props }, ref) => {
    const localRef = useRef<HTMLInputElement | null>(null);
    const setRef = (el: HTMLInputElement | null) => {
      localRef.current = el;
      if (!ref) return;
      if (typeof ref === 'function') {
        try {
          ref(el);
        } catch (_e) {
          // ignore
        }
      } else {
        try {
          // MutableRefObject 已经弃用，当对象 ref 时，使用安全类型转换赋值给转发 ref 的 `current` 属性。
          (ref as unknown as { current: HTMLInputElement | null }).current = el;
        } catch (_e) {
          // ignore
        }
      }
    };

    useLayoutEffect(() => {
      if (localRef.current && 'indeterminate' in localRef.current) {
        // 设置 DOM 属性，以便浏览器在支持的情况下视觉上渲染中间态
        localRef.current.indeterminate = !!indeterminate;
        try {
          if (indeterminate) localRef.current.setAttribute('data-indeterminate', 'true');
          else localRef.current.removeAttribute('data-indeterminate');
        } catch (_e) {
          // ignore
        }
      }
    }, [indeterminate]);

    const inputExtraClass = inputClassName || '';
    const wrapperClass = ['beaver-checkbox-wrapper', className, disabled ? 'beaver-checkbox-wrapper--disabled' : '']
      .filter(Boolean)
      .join(' ');
    const boxClass = [
      'beaver-checkbox',
      inputExtraClass,
      indeterminate ? 'beaver-checkbox--indeterminate' : '',
      disabled ? 'beaver-checkbox--disabled' : '',
    ]
      .filter(Boolean)
      .join(' ')
      .trim();

    return (
      <label className={wrapperClass} aria-disabled={disabled}>
        <input
          ref={setRef}
          type="checkbox"
          className="beaver-checkbox-input"
          disabled={disabled}
          data-indeterminate={indeterminate ? 'true' : undefined}
          {...props}
        />
        <span className={boxClass} aria-hidden="true" />
        {label ? <span>{label}</span> : null}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
