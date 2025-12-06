import React from 'react';
import './Input.css';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  validation?: 'error' | 'success' | 'none';
  textarea?: boolean;
  rows?: number;
  /** textarea 的 CSS resize，例如 'none' | 'both' | 'horizontal' | 'vertical' */
  resize?: React.CSSProperties['resize'];
  /** 直接设置宽度，支持 number(像素) 或 字符串(如 '100%','200px') */
  width?: number | string;
};

/**
 * Input 组件
 * - 使用场景：接收用户的文本输入
 * - 支持多行文本输入（textarea）
 * - 支持输入校验状态（错误、成功）
 * - 支持禁用状态
 * - 支持自定义宽度
 */
const Input = React.forwardRef<HTMLElement, InputProps>(
  ({ className, validation = 'none', textarea, rows = 3, resize = 'none', disabled, width, ...props }, ref) => {
    const classList = ['beaver-input'];
    if (validation === 'error') classList.push('beaver-input--error');
    if (validation === 'success') classList.push('beaver-input--success');
    if (textarea) classList.push('beaver-input--textarea');
    if (disabled) classList.push('beaver-input--disabled');
    if (className) classList.push(className);

    if (textarea) {
      const { style, ...rest } = props as React.TextareaHTMLAttributes<HTMLTextAreaElement>;
      const mergedStyle: React.CSSProperties = {
        ...(style as React.CSSProperties),
        resize,
        ...(width !== undefined ? { width: typeof width === 'number' ? `${width}px` : width } : {}),
      };

      return (
        <textarea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          className={classList.join(' ')}
          aria-invalid={validation === 'error'}
          rows={rows}
          style={mergedStyle}
          {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      );
    }

    const { style, ...restInput } = props as React.InputHTMLAttributes<HTMLInputElement>;
    const mergedStyle: React.CSSProperties = {
      ...(style as React.CSSProperties),
      ...(width !== undefined ? { width: typeof width === 'number' ? `${width}px` : width } : {}),
    };

    return (
      <input
        ref={ref as React.Ref<HTMLInputElement>}
        className={classList.join(' ')}
        aria-invalid={validation === 'error'}
        disabled={disabled}
        style={mergedStyle}
        {...(restInput as React.InputHTMLAttributes<HTMLInputElement>)}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
