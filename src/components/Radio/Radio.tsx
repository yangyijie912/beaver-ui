import React, { useContext } from 'react';
import './Radio.css';
import { RadioGroupContext } from './RadioGroup';
import { FormContext } from '../Form/components/Form';
import type { FormContextType } from '../Form/types';

export type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
  /** 标签文本，可以是其它ReactNode */
  label?: React.ReactNode;
  /** 如果需要给 input 本身加额外 class，请使用该属性 */
  inputClassName?: string;
};

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ label, className, inputClassName, disabled, onChange, ...props }, ref) => {
    // 获取单选按钮组上下文
    const ctx = useContext(RadioGroupContext);
    const formCtx = useContext(FormContext) as FormContextType | undefined;
    const size = formCtx?.size ?? 'medium';

    // 组合 classNames
    const inputExtraClass = inputClassName || '';
    const wrapperClass = [
      'beaver-radio-wrapper',
      `beaver-radio-wrapper--${size}`,
      className,
      (disabled ?? ctx?.disabled) ? 'beaver-radio-wrapper--disabled' : '',
    ]
      .filter(Boolean)
      .join(' ');
    const radioClass = ['beaver-radio', inputExtraClass, (disabled ?? ctx?.disabled) ? 'beaver-radio--disabled' : '']
      .filter(Boolean)
      .join(' ')
      .trim();

    // 首选prop，否则从上下文中获取
    const inputName = (props as any).name ?? ctx?.name;

    const propChecked = (props as any).checked;
    const hasPropChecked = propChecked !== undefined;

    // 如果没有传入 checked 属性，则从上下文中派生 checked 状态
    const derivedChecked =
      !hasPropChecked && ctx && props.value !== undefined ? String(ctx.value) === String(props.value) : undefined;

    // 最终的 checked 状态优先级： prop > context derived
    const finalChecked = hasPropChecked ? propChecked : derivedChecked;

    // 处理变化事件
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // 先调用单个 Radio 的 onChange
      onChange?.(e as any);
      // 然后调用组的 onChange
      if (ctx?.onChange) {
        const val = (props as any).value;
        if (val !== undefined) ctx.onChange(val, e);
      }
    };

    // 组合 inputProps
    const inputProps: any = {
      ref: ref as React.Ref<HTMLInputElement>,
      type: 'radio',
      className: 'beaver-radio-input',
      disabled: disabled ?? ctx?.disabled,
      name: inputName,
      onChange: handleChange,
      // only pass checked when it's determined (controlled by prop or group)
      ...(finalChecked !== undefined ? { checked: finalChecked } : {}),
      ...props,
    };

    return (
      <label className={wrapperClass} aria-disabled={disabled ?? ctx?.disabled}>
        <input {...inputProps} />
        <span className={radioClass} aria-hidden="true" />
        {label ? <span>{label}</span> : null}
      </label>
    );
  }
);

Radio.displayName = 'Radio';

export default Radio;
