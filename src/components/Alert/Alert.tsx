import React from 'react';
import { Check, Warning as WarningIcon, Close, Info } from '../../icons';

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
  /** 是否展示图标 */
  showIcon?: boolean;
  /** 自定义关闭按钮 */
  closeIcon?: React.ReactNode;
  /** 是否展示左边的颜色条 */
  showBorder?: boolean;
  /** 右侧的自定义操作区域（例如按钮组） */
  actions?: React.ReactNode;
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
      showIcon = true,
      closeIcon,
      showBorder = true,
      actions,
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
    // 隐藏图标时的修饰类
    if (!showIcon) classList.push('beaver-alert--no-icon');

    // 默认图标映射为 React 节点，使用统一图标组件
    const defaultIconMap: Record<AlertType, React.ReactNode> = {
      success: <Check width={20} height={20} aria-hidden />,
      warning: <WarningIcon width={20} height={20} aria-hidden />,
      error: <Close width={20} height={20} aria-hidden />,
      info: <Info width={20} height={20} aria-hidden />,
    };

    // 确定最终使用的图标（优先使用传入的 icon）
    const finalIcon = icon !== undefined ? icon : defaultIconMap[type];

    return (
      <div ref={ref} className={classList.join(' ')} role="alert" {...props}>
        {/* 左边的颜色指示条 */}
        {showBorder && <div className="beaver-alert__border" />}

        {/* 图标容器（可隐藏） */}
        {showIcon && <div className="beaver-alert__icon">{finalIcon}</div>}

        {/* 主要内容区域 */}
        <div className="beaver-alert__content">
          {/* 标题行（可选） */}
          {title && (
            <div className="beaver-alert__title">{typeof title === 'string' ? <span>{title}</span> : title}</div>
          )}
          {/* 描述/消息行（可选） */}
          {(message || children) && <div className="beaver-alert__message">{message || children}</div>}
        </div>

        {/* 可自定义的尾部操作区（例如操作按钮），位于内容右侧 */}
        {actions && <div className="beaver-alert__actions">{actions}</div>}

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
