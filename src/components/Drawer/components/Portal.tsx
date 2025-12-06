import React from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  /**
   * Portal容器内的内容
   */
  children: React.ReactNode;

  /**
   * 容器元素，默认为document.body
   */
  container?: HTMLElement | null;
}

/**
 * Portal 组件
 * - 用于将组件内容挂载到 DOM 的其他位置（通常为 body）
 * - 用于Drawer、Modal等需要脱离文档流的组件
 * - 避免z-index和overflow属性的层级问题
 */
const Portal = React.forwardRef<HTMLDivElement, PortalProps>(({ children, container }, ref) => {
  // 确保在浏览器环境中运行
  if (typeof document === 'undefined') {
    return null;
  }

  const target = container || document.body;

  return createPortal(
    <div ref={ref} className="beaver-drawer-portal">
      {children}
    </div>,
    target
  );
});

Portal.displayName = 'Portal';

export default Portal;
