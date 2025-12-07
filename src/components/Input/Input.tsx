import React from 'react';
import './Input.css';

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  validation?: 'error' | 'success' | 'none';
  textarea?: boolean;
  rows?: number;
  /** textarea 的 CSS resize，例如 'none' | 'both' | 'horizontal' | 'vertical' */
  resize?: React.CSSProperties['resize'];
  /** 直接设置宽度，支持 number(像素) 或 字符串(如 '100%','200px') */
  width?: number | string;
  /** 输入框前置内容（图标、文本等） */
  prefix?: React.ReactNode;
  /** 输入框后置内容（图标、清除按钮等） */
  suffix?: React.ReactNode;
  /** 前置内容容器类名 */
  prefixClassName?: string;
  /** 后置内容容器类名 */
  suffixClassName?: string;
  /** 输入框大小 */
  size?: 'small' | 'medium' | 'large';
  /** 如果需要设置原生 input 的 `size` 属性（可见字符数），使用 `htmlSize`。*/
  htmlSize?: number;
};

/**
 * Input 组件
 * - 使用场景：接收用户的文本输入
 * - 支持多行文本输入（textarea）
 * - 支持输入校验状态（错误、成功）
 * - 支持禁用状态
 * - 支持自定义宽度
 * - 支持前置/后置内容插槽（如图标、清除按钮等）
 * - 支持多种尺寸（small、medium、large）
 */
const Input = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  (
    {
      className,
      validation = 'none',
      textarea,
      rows = 3,
      resize = 'none',
      disabled,
      width,
      prefix,
      suffix,
      prefixClassName,
      suffixClassName,
      size = 'medium',
      htmlSize,
      ...props
    },
    ref
  ) => {
    const classList = ['beaver-input'];
    if (validation === 'error') classList.push('beaver-input--error');
    if (validation === 'success') classList.push('beaver-input--success');
    if (textarea) classList.push('beaver-input--textarea');
    if (disabled) classList.push('beaver-input--disabled');
    if (size) classList.push(`beaver-input--${size}`);
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

    // 非 textarea 的 input
    const { style, ...restInput } = props as React.InputHTMLAttributes<HTMLInputElement>;
    const mergedStyle: React.CSSProperties = {
      ...(style as React.CSSProperties),
      ...(width !== undefined ? { width: typeof width === 'number' ? `${width}px` : width } : {}),
    };

    // 如果有前置或后置内容，需要包装在容器中
    if (prefix || suffix) {
      return (
        <div className={`beaver-input-wrapper beaver-input-wrapper--${size}`}>
          {prefix && <div className={`beaver-input-prefix ${prefixClassName || ''}`}>{prefix}</div>}
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            className={classList.join(' ')}
            aria-invalid={validation === 'error'}
            disabled={disabled}
            size={htmlSize}
            style={mergedStyle}
            {...(restInput as React.InputHTMLAttributes<HTMLInputElement>)}
          />
          {suffix && <div className={`beaver-input-suffix ${suffixClassName || ''}`}>{suffix}</div>}
        </div>
      );
    }

    return (
      <input
        ref={ref as React.Ref<HTMLInputElement>}
        className={classList.join(' ')}
        aria-invalid={validation === 'error'}
        disabled={disabled}
        size={htmlSize}
        style={mergedStyle}
        {...(restInput as React.InputHTMLAttributes<HTMLInputElement>)}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
