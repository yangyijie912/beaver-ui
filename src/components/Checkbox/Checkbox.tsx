import React, { useEffect, useRef } from 'react';
import './Checkbox.css';

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: React.ReactNode;
};

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({ label, className, ...props }, ref) => {
  const localRef = useRef<HTMLInputElement | null>(null);
  const setRef = (el: HTMLInputElement | null) => {
    localRef.current = el;
    if (typeof ref === 'function') ref(el);
    else if (ref) (ref as React.MutableRefObject<HTMLInputElement | null>).current = el;
  };

  // support passing `indeterminate` via props
  useEffect(() => {
    const ind = (props as any).indeterminate;
    if (localRef.current && 'indeterminate' in localRef.current) {
      // @ts-ignore
      localRef.current.indeterminate = !!ind;
    }
  }, [(props as any).indeterminate]);

  const inputExtraClass = (props as any).className || '';
  return (
    <label className={className} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      <input
        ref={setRef}
        type="checkbox"
        className={['beaver-checkbox', inputExtraClass].join(' ').trim()}
        {...props}
      />
      {label ? <span>{label}</span> : null}
    </label>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
