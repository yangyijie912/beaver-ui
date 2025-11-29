import React from 'react';
import './Radio.css';

export type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: React.ReactNode;
  /** 如果需要给 input 本身加额外 class，请使用该属性 */
  inputClassName?: string;
};

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ label, className, inputClassName, disabled, ...props }, ref) => {
    const inputExtraClass = inputClassName || '';
    const wrapperClass = ['beaver-radio-wrapper', className].filter(Boolean).join(' ');
    const radioClass = ['beaver-radio', inputExtraClass].filter(Boolean).join(' ').trim();

    return (
      <label className={wrapperClass}>
        <input
          ref={ref as React.Ref<HTMLInputElement>}
          type="radio"
          className="beaver-radio-input"
          disabled={disabled}
          {...props}
        />
        <span className={radioClass} aria-hidden="true" />
        {label ? <span>{label}</span> : null}
      </label>
    );
  }
);

Radio.displayName = 'Radio';

export default Radio;
