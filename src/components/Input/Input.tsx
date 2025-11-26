import React from 'react';
import './Input.css';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  validation?: 'error' | 'success' | undefined;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, validation, ...props }, ref) => {
  const classList = ['beaver-input'];
  if (validation === 'error') classList.push('beaver-input--error');
  if (validation === 'success') classList.push('beaver-input--success');
  if (className) classList.push(className);

  return <input ref={ref} className={classList.join(' ')} aria-invalid={validation === 'error'} {...props} />;
});

Input.displayName = 'Input';

export default Input;
