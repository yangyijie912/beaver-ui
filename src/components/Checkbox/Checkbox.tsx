import React from 'react';
import vars from '../../tokens';

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {};

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const style: React.CSSProperties = {
    width: 16,
    height: 16,
    border: '1px solid #9ca3af',
    borderRadius: 3,
    display: 'inline-block',
    verticalAlign: 'middle',
    background: 'white',
  };
  return <input type="checkbox" style={style} {...props} />;
};

export default Checkbox;
