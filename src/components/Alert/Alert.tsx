import React from 'react';
import './Alert.css';

/**
 * Alert 组件的类型定义
 */
export type AlertType = 'success' | 'warning' | 'error' | 'info';

/**
 * Alert 组件的 Props 类型
 */
export type AlertProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'type'> & {
  /** 提示类型，用于控制颜色和图标 */
  type?: AlertType;
  /** 提示标题 */
  title?: React.ReactNode;
  /** 提示内容/描述 */
  message?: React.ReactNode;
  /** 是否展示关闭按钮 */
  closable?: boolean;
  /** 关闭按钮点击回调 */
  onClose?: () => void;
  /** 是否为紧凑模式（减少内边距） */
  compact?: boolean;
  /** 自定义图标 */
  icon?: React.ReactNode;
  /** 自定义关闭按钮 */
  closeIcon?: React.ReactNode;
  /** 是否展示左边的颜色条 */
  showBorder?: boolean;
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      type = 'info',
      title,
      message,
      closable = false,
      onClose,
      compact = false,
      icon,
      closeIcon,
      showBorder = true,
      children,
      ...props
    },
    ref
  ) => {
    // 管理组件的显示/隐藏状态
    const [visible, setVisible] = React.useState(true);

    const handleClose = () => {
      setVisible(false);
      onClose?.();
    };

    // 如果不可见，返回空
    if (!visible) {
      return null;
    }

    // 构建类名列表
    const classList = ['beaver-alert'];
    // 根据类型添加对应的修饰符类
    if (type) classList.push(`beaver-alert--${type}`);
    // 添加紧凑模式修饰符
    if (compact) classList.push('beaver-alert--compact');
    // 添加边框修饰符（控制左侧颜色条的显示）
    if (!showBorder) classList.push('beaver-alert--no-border');
    // 添加用户传入的自定义类名
    if (className) classList.push(className);

    // 默认图标映射（根据类型自动选择）
    const defaultIconMap: Record<AlertType, string> = {
      success: '✓',
      warning: '⚠',
      error: '✕',
      info: 'ℹ',
    };

    // 确定最终使用的图标
    const finalIcon = icon !== undefined ? icon : defaultIconMap[type];

    return (
      <div ref={ref} className={classList.join(' ')} role="alert" {...props}>
        {/* 左边的颜色指示条 */}
        {showBorder && <div className="beaver-alert__border" />}

        {/* 图标容器 */}
        <div className="beaver-alert__icon">{finalIcon}</div>

        {/* 主要内容区域 */}
        <div className="beaver-alert__content">
          {/* 标题行（可选） */}
          {title && (
            <div className="beaver-alert__title">{typeof title === 'string' ? <span>{title}</span> : title}</div>
          )}
          {/* 描述/消息行（可选） */}
          {(message || children) && <div className="beaver-alert__message">{message || children}</div>}
        </div>

        {/* 关闭按钮（可选） */}
        {closable && (
          <button type="button" className="beaver-alert__close" aria-label="关闭提示" onClick={handleClose}>
            {closeIcon !== undefined ? closeIcon : '×'}
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = 'Alert';

export default Alert;
