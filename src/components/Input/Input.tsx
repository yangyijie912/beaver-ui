import React from 'react';
import vars from '../../tokens';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {};

const Input: React.FC<InputProps> = (props) => {
  const style: React.CSSProperties = {
    padding: vars.space.md,
    border: '1px solid #d1d5db',
    borderRadius: 6,
    color: vars.color.text,
    outline: 'none',
  };
  return <input style={style} {...props} />;
};

export default Input;
