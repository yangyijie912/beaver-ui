import React from 'react';
import './Button.css';

const sizes: Record<string, React.CSSProperties> = {
  small: { padding: 'var(--beaver-space-xs) var(--beaver-space-md)', fontSize: 'var(--beaver-font-size-sm)' },
  medium: { padding: 'var(--beaver-space-sm) var(--beaver-space-lg)', fontSize: 'var(--beaver-font-size-md)' },
  large: { padding: 'var(--beaver-space-md) var(--beaver-space-xl)', fontSize: 'var(--beaver-font-size-lg)' },
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'primary' | 'ghost' | 'link';
  /** 颜色：'primary' | 'danger' 或任意 CSS 颜色字符串（如 'red' / '#333'） */
  color?: 'primary' | 'danger' | string;
  size?: 'small' | 'medium' | 'large';
  /** 加载状态，会显示 spinner 且自动禁用按钮 */
  loading?: boolean;
  children?: React.ReactNode;
};

/**
 * Button 组件
 * - 使用场景：触发用户操作或事件
 * - 支持样式变体（主要、幽灵、链接）
 * - 支持不同尺寸（小、中、大）
 * - 支持颜色变体（主色、危险色）
 * - 支持禁用状态和加载状态
 * - 支持自定义内容（文本、图标等）
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'default',
      color = undefined,
      size = 'medium',
      disabled,
      loading = false,
      ...props
    },
    ref
  ) => {
    const classList = ['beaver-button'];
    classList.push(`beaver-button--${variant}`);

    // 如果 color 是已知的设计token名称之一，则保留颜色类以保持兼容性。
    const isTokenColor = color === 'primary' || color === 'danger';
    if (isTokenColor) classList.push(`beaver-button--color-${color}`);

    // 当处于 loading 或 显式 disabled 时，视为不可交互（由 `disabled` 属性控制交互）
    const isDisabled = Boolean(disabled || loading);
    // 仅在显式传入 `disabled` 时应用禁用样式类；loading 保持变体/颜色不变，仅添加 loading 专属样式
    if (disabled) classList.push('beaver-button--disabled');
    if (loading) classList.push('beaver-button--loading');
    if (className) classList.push(className);

    // 合并样式：尺寸样式 -> 传入的 props.style -> 用于任意颜色的自定义 CSS 变量
    const { style: incomingStyle, ...restProps } = props as any;

    // 判断 color 字符串是否为有效的 CSS 颜色值，否则回退到 primary 颜色
    const isValidCssColor = (val: string) => {
      if (!val) return false;
      try {
        if (typeof document !== 'undefined') {
          const s = document.createElement('span').style;
          s.color = val;
          return s.color !== '';
        }
      } catch (_e) {
        // 在非 DOM 环境中回退到下面的正则表达式检查
      }
      // 常见颜色格式的基本正则表达式回退（十六进制、rgb/rgba、hsl/hsla）
      return /^(#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})\b|rgba?\(|hsla?\()/i.test(val);
    };

    let buttonColorVar: string | undefined;
    if (isTokenColor) {
      buttonColorVar = color === 'danger' ? 'var(--beaver-color-error)' : 'var(--beaver-color-primary)';
    } else if (typeof color === 'string') {
      // 只有在 color 是有效 CSS 颜色字符串时才应用；否则不设置自定义变量，保持组件默认样式
      if (isValidCssColor(color)) {
        buttonColorVar = color;
      } else {
        buttonColorVar = undefined;
      }
    }

    const finalStyle: React.CSSProperties = {
      ...sizes[size],
      ...(incomingStyle || {}),
      ...(buttonColorVar ? ({ ['--beaver-button-color']: buttonColorVar } as React.CSSProperties) : {}),
    };

    const buttonType = (restProps as any).type || 'button';

    return (
      <button
        ref={ref}
        type={buttonType}
        className={classList.join(' ')}
        disabled={isDisabled}
        aria-busy={loading}
        style={finalStyle}
        {...(restProps as any)}
      >
        {loading && <span className="beaver-button__spinner" aria-hidden="true" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
