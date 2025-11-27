import React, { useEffect, useRef } from 'react';
import './Checkbox.css';

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: React.ReactNode;
  /** 控制三态（中间态）显示，不会被透传到 DOM 属性 */
  indeterminate?: boolean;
  /** 如果需要给 input 本身加额外 class，请使用该属性 */
  inputClassName?: string;
};

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, inputClassName, disabled, indeterminate = false, ...props }, ref) => {
    const localRef = useRef<HTMLInputElement | null>(null);
    const setRef = (el: HTMLInputElement | null) => {
      localRef.current = el;
      if (!ref) return;
      if (typeof ref === 'function') {
        try {
          ref(el);
        } catch (e) {
          // ignore
        }
      } else {
        try {
          // Avoid using the deprecated MutableRefObject type. Use a safe cast to assign
          // to the forwarded ref's `current` property when it's an object ref.
          (ref as unknown as { current: HTMLInputElement | null }).current = el;
        } catch (e) {
          // ignore
        }
      }
    };

    useEffect(() => {
      if (localRef.current && 'indeterminate' in localRef.current) {
        // Set the DOM property so the browser renders indeterminate state visually where supported.
        localRef.current.indeterminate = !!indeterminate;
        try {
          if (indeterminate) localRef.current.setAttribute('data-indeterminate', 'true');
          else localRef.current.removeAttribute('data-indeterminate');
        } catch (e) {
          // ignore
        }
      }
    }, [indeterminate]);

    const inputExtraClass = inputClassName || '';
    const wrapperClass = ['beaver-checkbox-wrapper', className].filter(Boolean).join(' ');
    const boxClass = ['beaver-checkbox', inputExtraClass, indeterminate ? 'beaver-checkbox--indeterminate' : '']
      .filter(Boolean)
      .join(' ')
      .trim();

    return (
      <label className={wrapperClass}>
        <input
          ref={setRef}
          type="checkbox"
          className="beaver-checkbox-input"
          disabled={disabled}
          data-indeterminate={indeterminate ? 'true' : undefined}
          {...props}
        />
        <span className={boxClass} aria-hidden="true" />
        {label ? <span className={disabled ? 'beaver-checkbox--disabled' : ''}>{label}</span> : null}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
