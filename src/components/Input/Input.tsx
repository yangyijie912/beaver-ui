import React from 'react';

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  /** 输入校验状态 */
  validation?: 'error' | 'success' | 'warning' | 'none';
  /** 是否为多行文本域 */
  textarea?: boolean;
  /** 多行文本域时的行数，默认3行 */
  rows?: number;
  /** textarea 的 CSS resize，例如 'none' | 'both' | 'horizontal' | 'vertical' */
  resize?: React.CSSProperties['resize'];
  /** 直接设置宽度，支持 number(像素) 或 字符串(如 '100%','200px') */
  width?: number | string;
  /** 输入框前置内容（图标、文本等）。支持直接传入 ReactNode 或 返回 ReactNode 的函数 */
  prefix?: React.ReactNode | (() => React.ReactNode);
  /** 输入框后置内容（图标、清除按钮等）。支持直接传入 ReactNode 或 返回 ReactNode 的函数 */
  suffix?: React.ReactNode | (() => React.ReactNode);
  /** 前置内容容器类名 */
  prefixClassName?: string;
  /** 后置内容容器类名 */
  suffixClassName?: string;
  /** 输入框大小 */
  size?: 'small' | 'medium' | 'large';
  /** 如果需要设置原生 input 的 `size` 属性（可见字符数），使用 `htmlSize`。*/
  htmlSize?: number;
  /** 是否展示清除按钮（点击会清空输入）*/
  allowClear?: boolean;
  /** 清除时触发的回调 */
  onClear?: () => void;
};

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
    const inputRef = React.useRef<HTMLInputElement | null>(null);
    // 支持转发 ref 的合并
    const setRefs = (node: HTMLInputElement | null) => {
      inputRef.current = node;
      if (!ref) return;
      if (typeof ref === 'function') {
        try {
          ref(node as any);
        } catch (_e) {
          // ignore
        }
      } else {
        try {
          (ref as unknown as { current: HTMLInputElement | null }).current = node;
        } catch (_e) {
          // ignore
        }
      }
    };
    const classList = ['beaver-input'];
    if (validation && validation !== 'none') classList.push(`beaver-input--${validation}`);
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
    const { style, allowClear, onClear, ...restInput } = props as React.InputHTMLAttributes<HTMLInputElement> & {
      allowClear?: boolean;
      onClear?: () => void;
    };
    const mergedStyle: React.CSSProperties = {
      ...(style as React.CSSProperties),
      ...(width !== undefined ? { width: typeof width === 'number' ? `${width}px` : width } : {}),
    };

    const handleClear = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      // 先尝试触发受控 onChange
      const maybeOnChange = (props as any).onChange as ((e: any) => void) | undefined;
      if (maybeOnChange) {
        // 构造一个简易的合成事件对象，包含 target.value = ''
        maybeOnChange({ target: { value: '' }, currentTarget: { value: '' } } as any);
      } else if (inputRef.current) {
        inputRef.current.value = '';
        // 触发原生 input 事件，方便某些监听器
        try {
          inputRef.current.dispatchEvent(new Event('input', { bubbles: true }));
        } catch (_err) {
          // ignore in environments that disallow Event
        }
      }
      try {
        onClear && onClear();
      } catch (_err) {
        // ignore
      }
    };

    const handleClearMouseDown = (e: React.MouseEvent) => {
      // 阻止在按下清除按钮时让输入框获得焦点（会触发打开面板）
      e.preventDefault();
      e.stopPropagation();
    };

    // 支持 prefix/suffix 为函数的情况（eg. suffix={() => <span/>}）
    // 并改为显式的 null/undefined 检查，避免像 0 或 '' 等合法的 falsy 值被忽略
    const prefixNode = typeof prefix === 'function' ? (prefix as () => React.ReactNode)() : prefix;
    const suffixNode = typeof suffix === 'function' ? (suffix as () => React.ReactNode)() : suffix;
    const hasPrefix = prefixNode !== null && prefixNode !== undefined;
    const hasSuffix = suffixNode !== null && suffixNode !== undefined;
    // 如果有前置或后置内容，或启用了 allowClear，需要包装在容器中
    // 关键：始终返回 wrapper 结构，以保持 DOM 节点稳定（防止焦点丢失）
    const shouldRenderWrapper = hasPrefix || hasSuffix || allowClear;

    const inputElement = (
      <input
        ref={setRefs as any}
        className={classList.join(' ')}
        aria-invalid={validation === 'error'}
        disabled={disabled}
        size={htmlSize}
        style={mergedStyle}
        {...(restInput as React.InputHTMLAttributes<HTMLInputElement>)}
      />
    );

    if (shouldRenderWrapper) {
      return (
        <div className={`beaver-input-wrapper beaver-input-wrapper--${size}`}>
          {hasPrefix && <div className={`beaver-input-prefix ${prefixClassName || ''}`}>{prefixNode}</div>}
          {inputElement}
          {/* 如果传入 suffix，优先渲染；否则当 allowClear 为 true 时渲染清除按钮 */}
          {hasSuffix ? (
            <div className={`beaver-input-suffix ${suffixClassName || ''}`}>{suffixNode}</div>
          ) : (
            allowClear && (
              <div className={`beaver-input-suffix ${suffixClassName || ''}`}>
                <button
                  type="button"
                  className="beaver-input-clear"
                  onMouseDown={handleClearMouseDown}
                  onClick={handleClear}
                  aria-label="clear"
                  style={{
                    // 根据输入值的内容，控制清除按钮的可见性
                    visibility: (restInput as any).value ? 'visible' : 'hidden',
                    opacity: (restInput as any).value ? 1 : 0,
                    transition: 'opacity 0.2s ease, visibility 0.2s ease',
                  }}
                >
                  ✕
                </button>
              </div>
            )
          )}
        </div>
      );
    }

    return (
      <input
        ref={setRefs as any}
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
