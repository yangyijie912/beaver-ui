import React, { useEffect, useRef } from 'react';
import { useDrawerAnimation } from './hooks/useDrawerAnimation';
import DrawerHeader from './components/DrawerHeader';
import DrawerFooter from './components/DrawerFooter';
import Portal from './components/Portal';
import type { DrawerProps } from './types';
import './Drawer.css';

/**
 * 尺寸映射表
 */
const sizeMap: Record<string, string> = {
  small: '240px',
  medium: '360px',
  large: '520px',
};

const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      open = false,
      onClose,
      title,
      width,
      placement = 'right',
      size = 'medium',
      closable = true,
      maskClosable = true,
      children,
      footer,
      className = '',
      maskClassName = '',
      contentClassName = '',
      offset = 0,
      mask = true,
      ...rest
    },
    ref
  ) => {
    const { mounted, animating } = useDrawerAnimation(open);
    const contentRef = useRef<HTMLDivElement>(null);

    /**
     * 处理遮罩点击事件
     * - 检查maskClosable标志
     * - 触发onClose回调
     */
    const handleMaskClick = (_e: React.MouseEvent<HTMLDivElement>) => {
      if (maskClosable && onClose) {
        onClose();
      }
    };

    /**
     * 处理Escape键事件
     * - 当Drawer打开时监听键盘事件
     * - 按下Escape键时关闭Drawer
     */
    useEffect(() => {
      if (!open) return;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && onClose) {
          onClose();
        }
      };

      // 添加事件监听器，监听键盘事件
      document.addEventListener('keydown', handleKeyDown);

      // 组件卸载时移除事件监听器
      return () => document.removeEventListener('keydown', handleKeyDown);
    }, [open, onClose]);

    /**
     * 防止body滚动
     * - 当Drawer打开时，禁用body滚动
     * - 考虑滚动条宽度，防止页面抖动
     */
    useEffect(() => {
      if (mounted) {
        // 计算滚动条宽度（用于防止页面抖动）
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollbarWidth}px`;

        // 清理函数：恢复body滚动
        return () => {
          document.body.style.overflow = '';
          document.body.style.paddingRight = '';
        };
      }
    }, [mounted]);

    // 如果Drawer尚未挂载，不渲染任何内容
    if (!mounted) return null;

    /**
     * 计算Drawer尺寸
     * - 如果指定了width，使用指定值
     * - 否则使用size预设
     */
    const drawerSize = width || sizeMap[size];

    /**
     * 计算样式
     * - 根据placement决定宽度或高度
     * - 应用offset间距
     */
    const drawerStyle: React.CSSProperties = {
      [placement === 'left' || placement === 'right' ? 'width' : 'height']: drawerSize,
    };

    // 如果指定了offset，应用对应方向的偏移
    if (offset && offset > 0) {
      if (placement === 'left') {
        drawerStyle.left = offset;
      } else if (placement === 'right') {
        drawerStyle.right = offset;
      } else if (placement === 'top') {
        drawerStyle.top = offset;
      } else if (placement === 'bottom') {
        drawerStyle.bottom = offset;
      }
    }

    // 组装CSS类名
    const maskClass = `beaver-drawer__mask ${animating ? 'beaver-drawer--active' : ''} ${maskClassName}`.trim();
    const wrapperClass =
      `beaver-drawer-wrapper beaver-drawer--${placement} ${animating ? 'beaver-drawer--active' : ''} ${className}`.trim();
    const contentClass = `beaver-drawer__content ${contentClassName}`.trim();

    /**
     * Drawer的主体内容
     * 包含遮罩层和抽屉容器
     */
    const drawerContent = (
      <div ref={ref} className={wrapperClass} {...rest}>
        {/* 遮罩层：点击可关闭Drawer */}
        {mask && <div className={maskClass} onClick={handleMaskClick} aria-hidden="true" />}

        {/* 抽屉容器：放置所有内容 */}
        <div
          ref={contentRef}
          className={contentClass}
          style={drawerStyle}
          role="complementary"
          aria-modal="true"
          aria-labelledby={title ? 'beaver-drawer-title' : undefined}
        >
          {/* 头部：包含标题和关闭按钮 */}
          {(title || closable) && (
            <DrawerHeader
              title={title}
              closable={closable}
              onClose={onClose}
              id={title ? 'beaver-drawer-title' : undefined}
            />
          )}

          {/* 主体内容 */}
          <div className="beaver-drawer__body">{children}</div>

          {/* 页脚：包含操作按钮等 */}
          {footer !== null && footer !== false ? <DrawerFooter>{footer}</DrawerFooter> : null}
        </div>
      </div>
    );

    /**
     * 通过Portal将内容挂载到body
     * 避免z-index和overflow属性的影响
     */
    return <Portal>{drawerContent}</Portal>;
  }
);

Drawer.displayName = 'Drawer';

export default Drawer;
export { DrawerHeader, DrawerFooter };
