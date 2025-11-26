import React from 'react';
import vars from '../../tokens';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
};

const Button: React.FC<ButtonProps> = ({ children, style, ...props }) => {
  const baseStyle: React.CSSProperties = {
    backgroundColor: vars.color.primary,
    color: 'white',
    padding: vars.space.md,
    borderRadius: 6,
    border: 'none',
    cursor: 'pointer',
  };
  return (
    <button style={{ ...baseStyle, ...style }} {...props}>
      {children}
    </button>
  );
};

export default Button;
