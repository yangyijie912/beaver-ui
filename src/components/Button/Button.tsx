import React from 'react';
import './Button.css';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
  children?: React.ReactNode;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant = 'primary', disabled, ...props }, ref) => {
    const classList = ['beaver-button'];
    if (variant === 'ghost') classList.push('beaver-button--ghost');
    if (disabled) classList.push('beaver-button--disabled');
    if (className) classList.push(className);

    return (
      <button ref={ref} className={classList.join(' ')} disabled={disabled} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
