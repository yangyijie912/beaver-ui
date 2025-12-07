import React, { useState, useEffect, forwardRef } from 'react';
import './Switch.css';

/** 可选尺寸类型：小、中、大 */
type Size = 'sm' | 'md' | 'lg';

export interface SwitchProps {
  /** 受控模式时传入的布尔值，控制开关状态 */
  checked?: boolean;
  /** 非受控模式下的初始值（只在首次渲染或当外部重置时使用） */
  defaultChecked?: boolean;
  /** 状态切换回调，参数为切换后的布尔值 */
  onChange?: (checked: boolean) => void;
  /** 禁用开关（不可交互且样式变灰） */
  disabled?: boolean;
  /** 加载状态，通常显示拇指中的 spinner 并阻止交互 */
  loading?: boolean;
  /** 尺寸变体，影响轨道与拇指大小（'sm' | 'md' | 'lg'） */
  size?: Size;
  /** 分别在打开/关闭时显示的标签节点 */
  checkedChildren?: React.ReactNode;
  /** 分别在打开/关闭时显示的标签节点 */
  unCheckedChildren?: React.ReactNode;
  /** 自定义类名，附加到最外层按钮 */
  className?: string;
  /** 自定义行内样式，附加到最外层按钮 */
  style?: React.CSSProperties;
}

/**
 * Switch 组件
 * - 使用场景：在两种状态之间切换（如开/关、启用/禁用）
 * - 支持自定义尺寸（小/中/大）
 * - 支持禁用和加载状态
 * - 支持受控和非受控模式
 * - 支持在开关上显示自定义标签
 */
const Switch = forwardRef<HTMLButtonElement, SwitchProps>((props, ref) => {
  const {
    checked,
    defaultChecked = false,
    onChange,
    disabled = false,
    loading = false,
    size = 'md',
    checkedChildren,
    unCheckedChildren,
    className = '',
    style,
  } = props;

  // 判断是否为受控组件：只要外部传入了 `checked`（布尔值），就视为受控模式
  const isControlled = typeof checked === 'boolean';

  // 非受控模式下的内部状态
  const [internalChecked, setInternalChecked] = useState<boolean>(defaultChecked);

  // 统一使用的当前状态：受控模式使用外部 `checked`，否则使用内部状态
  const mergedChecked = isControlled ? (checked as boolean) : internalChecked;

  // 当外部修改 defaultChecked（例如重置场景）时，同步到内部状态（仅在非受控时生效）
  useEffect(() => {
    if (isControlled) return; // 受控时忽略
    setInternalChecked(defaultChecked);
  }, [defaultChecked]);

  // 处理点击切换逻辑：考虑 disabled 与 loading 两种不可交互状态
  const handleToggle = () => {
    if (disabled || loading) return; // 禁用或加载时不响应
    const next = !mergedChecked;
    // 非受控模式更新内部状态
    if (!isControlled) setInternalChecked(next);
    // 始终触发 onChange 回调（如果有）以通知外部
    onChange && onChange(next);
  };

  // 组合 className，按条件添加状态类，便于 CSS 控制样式
  const classes = [
    'beaver-switch',
    `beaver-switch--${size}`,
    mergedChecked ? 'beaver-switch--checked' : '',
    disabled ? 'beaver-switch--disabled' : '',
    loading ? 'beaver-switch--loading' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // 返回可访问性的按钮结构：使用 role="switch" 与 aria-checked 标注当前状态
  // - 只在真正禁用（disabled=true）时设置原生 disabled 属性
  // - 加载状态通过 aria-disabled 和 CSS 类来控制交互和样式，避免浏览器默认禁用样式
  // - 轨道内部包含：打开标签、拇指（可能含 spinner）、关闭标签（根据状态条件渲染）
  return (
    <button
      type="button"
      role="switch"
      aria-checked={mergedChecked}
      aria-disabled={disabled || loading}
      disabled={disabled}
      className={classes}
      onClick={handleToggle}
      ref={ref}
      style={style}
    >
      <span className="beaver-switch__track">
        {/* 打开状态下的标签（若存在） */}
        {mergedChecked && checkedChildren ? (
          <span className="beaver-switch__label beaver-switch__label--on">{checkedChildren}</span>
        ) : null}

        {/* 拇指（thumb）：绝对定位在轨道上，loading 时在内部显示 spinner */}
        <span className="beaver-switch__thumb">{loading ? <span className="beaver-switch__spinner" /> : null}</span>

        {/* 关闭状态下的标签（若存在） */}
        {!mergedChecked && unCheckedChildren ? (
          <span className="beaver-switch__label beaver-switch__label--off">{unCheckedChildren}</span>
        ) : null}
      </span>
    </button>
  );
});

export default Switch;
