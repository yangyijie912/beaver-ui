/**
 * Portal 组件
 * 用于在 DOM 树中的其他位置渲染组件内容
 */

import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  /** Portal 的子组件 */
  children: React.ReactNode;
  /** 用于定位的参考元素 */
  triggerRef?: React.RefObject<HTMLElement>;
}

/**
 * Portal 组件
 * 将内容渲染到 document.body 中，用于实现下拉菜单、气泡卡片等浮层组件
 */
const Portal: React.FC<PortalProps> = ({ children }) => {
  const portalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 创建或获取 portal 容器
    let container = document.getElementById('beaver-portals');
    if (!container) {
      container = document.createElement('div');
      container.id = 'beaver-portals';
      document.body.appendChild(container);
    }

    // 创建 portal 元素
    const portalDiv = document.createElement('div');
    container.appendChild(portalDiv);
    portalRef.current = portalDiv;

    return () => {
      // 清理 portal 元素
      if (portalDiv.parentNode) {
        portalDiv.parentNode.removeChild(portalDiv);
      }
    };
  }, []);

  if (!portalRef.current) {
    return null;
  }

  return createPortal(children, portalRef.current);
};

export default Portal;
