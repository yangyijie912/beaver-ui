import React from 'react';
import './Switch.css';

export type SwitchProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> & {
  /** 非受控模式下的初始值 */
  defaultChecked?: boolean;
  /** 受控模式时传入的布尔值，控制开关状态 */
  checked?: boolean;
  /** 状态切换回调，参数为切换后的布尔值 */
  onChange?: (checked: boolean) => void;
  /** button的原生事件onChange */
  onChangeEvent?: React.FormEventHandler<HTMLButtonElement>;
  /** 禁用开关 */
  disabled?: boolean;
  /** 加载状态 */
  loading?: boolean;
  /** 尺寸，影响开关轨道与拇指大小（'sm' | 'md' | 'lg'） */
  size?: 'sm' | 'md' | 'lg';
  /** 在打开时显示的标签节点 */
  checkedChildren?: React.ReactNode;
  /** 在关闭时显示的标签节点 */
  unCheckedChildren?: React.ReactNode;
};

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      checked,
      defaultChecked = false,
      onChange,
      onChangeEvent,
      disabled = false,
      loading = false,
      size = 'md',
      checkedChildren,
      unCheckedChildren,
      className,
      ...props
    },
    ref
  ) => {
    const isControlled = checked !== undefined;
    const [isChecked, setIsChecked] = React.useState<boolean>(() =>
      isControlled ? (checked as boolean) : !!defaultChecked
    );
    const textRef = React.useRef<HTMLSpanElement>(null);
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    React.useEffect(() => {
      if (isControlled) {
        setIsChecked(checked as boolean);
      }
    }, [checked, isControlled]);

    // 测量文字宽度并设置 CSS 变量
    React.useEffect(() => {
      if (buttonRef.current) {
        const textWidth = textRef.current?.offsetWidth || 0;
        const styles = getComputedStyle(buttonRef.current);
        const halfCircleWidth = parseFloat(styles.getPropertyValue('--beaver-switch-half-circle')) || 5;
        const minContentWidth = parseFloat(styles.getPropertyValue('--beaver-switch-min-content-width')) || 30;
        const actualContentWidth = Math.max(minContentWidth, halfCircleWidth + textWidth + 8); // 半圆 + 文字 + padding
        buttonRef.current.style.setProperty('--switch-actual-content-width', `${actualContentWidth}px`);
      }
    }, [checkedChildren, unCheckedChildren, size]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || loading) return;
      const newChecked = !isChecked;
      if (!isControlled) {
        setIsChecked(newChecked);
      }
      onChange?.(newChecked);
      onChangeEvent?.(e as any);
    };

    const classList = ['beaver-switch'];
    if (isChecked) classList.push('beaver-switch-checked');
    if (disabled) classList.push('beaver-switch-disabled');
    if (loading) classList.push('beaver-switch-loading');
    if (size && size !== 'md') classList.push(`beaver-switch-${size}`);
    if (className) classList.push(className);

    return (
      <button
        ref={(node) => {
          buttonRef.current = node;
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        role="switch"
        aria-checked={isChecked}
        className={classList.join(' ')}
        onClick={handleClick}
        disabled={disabled || loading}
        type="button"
        {...props}
      >
        <div className="beaver-switch-track">
          {(isChecked ? checkedChildren : unCheckedChildren) && (
            <span ref={textRef} className="beaver-switch-text">
              {isChecked ? checkedChildren : unCheckedChildren}
            </span>
          )}
        </div>
        <div className="beaver-switch-thumb"></div>
      </button>
    );
  }
);

Switch.displayName = 'Switch';

export default Switch;
