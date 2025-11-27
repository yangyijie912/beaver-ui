import React from 'react';
import './Button.css';

const sizes: Record<string, React.CSSProperties> = {
  small: { padding: '6px 12px', fontSize: 12 },
  medium: { padding: '8px 16px', fontSize: 14 },
  large: { padding: '12px 20px', fontSize: 16 },
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
  onClick?: () => void;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant = 'primary', size = 'medium', disabled, ...props }, ref) => {
    const classList = ['beaver-button'];
    if (variant === 'ghost') classList.push('beaver-button--ghost');
    if (disabled) classList.push('beaver-button--disabled');
    if (className) classList.push(className);

    return (
      <button
        ref={ref}
        className={classList.join(' ')}
        disabled={disabled}
        {...props}
        onClick={props.onClick}
        style={sizes[size]}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
