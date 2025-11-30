import React from 'react';
import './Button.css';

const sizes: Record<string, React.CSSProperties> = {
  small: { padding: 'var(--beaver-space-xs2) var(--beaver-space-md)', fontSize: 'var(--beaver-font-size-sm)' },
  medium: { padding: 'var(--beaver-space-sm) var(--beaver-space-lg)', fontSize: 'var(--beaver-font-size-md)' },
  large: { padding: 'var(--beaver-space-md) var(--beaver-space-xl)', fontSize: 'var(--beaver-font-size-lg)' },
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant = 'primary', size = 'medium', disabled, ...props }, ref) => {
    const classList = ['beaver-button'];
    if (variant === 'ghost') classList.push('beaver-button--ghost');
    if (disabled) classList.push('beaver-button--disabled');
    if (className) classList.push(className);

    return (
      <button ref={ref} className={classList.join(' ')} disabled={disabled} style={sizes[size]} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
