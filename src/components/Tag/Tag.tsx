import React from 'react';
import { Close } from '../../icons';

/**
 * Tag 组件属性接口
 * Tag 组件用于标记和分类，常用于显示标签、徽章等场景
 */
export type TagProps = React.HTMLAttributes<HTMLSpanElement> & {
  /**
   * Tag 的显示文本内容
   */
  children?: React.ReactNode;

  /**
   * Tag 的尺寸
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Tag 的类型/颜色方案
   * - primary: 主色调
   * - success: 成功色
   * - warning: 警告色
   * - error: 错误色
   * - default: 默认色
   * @default 'default'
   */
  type?: 'primary' | 'success' | 'warning' | 'error' | 'default';

  /**
   * Tag 的变体样式
   * - solid: 实心填充（默认）
   * - outline: 边框样式
   * - light: 浅色背景
   * @default 'solid'
   */
  variant?: 'solid' | 'outline' | 'light';

  /**
   * 是否为禁用状态
   * @default false
   */
  disabled?: boolean;

  /**
   * 是否显示关闭按钮
   * @default false
   */
  closable?: boolean;

  /**
   * 关闭按钮的点击回调
   */
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * 自定义图标内容，支持传入 React 组件或 ReactNode
   * 示例：<Tag icon={<Check width={14} height={14} />}>已完成</Tag>
   */
  icon?: React.ReactNode;

  /**
   * 自定义关闭按钮内容，默认为 × 图标
   * 示例：<Tag closable closeIcon={<Trash />}>删除</Tag>
   */
  closeIcon?: React.ReactNode;

  /**
   * 自定义背景颜色（会覆盖 type 定义的背景色）
   * 示例：<Tag customColor={{ bg: '#ff6b6b', text: '#fff', border: '#ff6b6b' }}>自定义</Tag>
   */
  customColor?: {
    /**
     * 背景色
     */
    bg?: string;
    /**
     * 文字色
     */
    text?: string;
    /**
     * 边框色
     */
    border?: string;
  };
};

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      children,
      className,
      size = 'medium',
      type = 'default',
      variant = 'solid',
      disabled = false,
      closable = false,
      onClose,
      icon,
      closeIcon,
      onClick,
      style,
      customColor,
      ...props
    },
    ref
  ) => {
    // 构建类名数组
    const classList = ['beaver-tag'];

    // 添加尺寸类名
    if (size) {
      classList.push(`beaver-tag--${size}`);
    }

    // 添加类型类名
    if (type && !customColor) {
      classList.push(`beaver-tag--${type}`);
    }

    // 添加变体类名
    if (variant && !customColor) {
      classList.push(`beaver-tag--${variant}`);
    }

    // 如果禁用，添加禁用类名
    if (disabled) {
      classList.push('beaver-tag--disabled');
    }

    // 用户自定义类名
    if (className) {
      classList.push(className);
    }

    // 处理关闭按钮点击
    const handleCloseClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      // 阻止事件冒泡到 Tag 容器
      e.stopPropagation();
      // 调用用户提供的关闭回调
      onClose?.(e);
    };

    // 合并自定义颜色样式
    const customStyle: React.CSSProperties = {
      ...style,
      ...(customColor && {
        backgroundColor: customColor.bg,
        color: customColor.text,
        borderColor: customColor.border,
      }),
    };

    return (
      <span
        ref={ref}
        className={classList.join(' ')}
        style={customStyle}
        onClick={disabled ? undefined : onClick}
        role="img"
        aria-disabled={disabled}
        {...props}
      >
        {/* 图标内容 */}
        {icon && <span className="beaver-tag__icon">{icon}</span>}

        {/* 文本内容 */}
        <span className="beaver-tag__content">{children}</span>

        {/* 关闭按钮 */}
        {closable && !disabled && (
          <button type="button" className="beaver-tag__close" aria-label="关闭标签" onClick={handleCloseClick}>
            {closeIcon ? closeIcon : <Close width="1em" height="1em" />}
          </button>
        )}
      </span>
    );
  }
);

// 显示调试时的组件名
Tag.displayName = 'Tag';

export default Tag;
