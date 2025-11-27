import React from 'react';
import './Input.css';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  validation?: 'error' | 'success' | 'none';
  /** Render a textarea instead of input */
  textarea?: boolean;
  /** Default rows for textarea */
  rows?: number;
};

const Input = React.forwardRef<HTMLElement, InputProps>(
  ({ className, validation = 'none', textarea, rows = 3, ...props }, ref) => {
    const classList = ['beaver-input'];
    if (validation === 'error') classList.push('beaver-input--error');
    if (validation === 'success') classList.push('beaver-input--success');
    if (textarea) classList.push('beaver-input--textarea');
    if (className) classList.push(className);

    if (textarea) {
      return (
        <textarea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          className={classList.join(' ')}
          aria-invalid={validation === 'error'}
          rows={rows}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      );
    }

    return (
      <input
        ref={ref as React.Ref<HTMLInputElement>}
        className={classList.join(' ')}
        aria-invalid={validation === 'error'}
        {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
