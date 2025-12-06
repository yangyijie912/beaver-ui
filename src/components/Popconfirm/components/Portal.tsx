import React from 'react';
import { createPortal } from 'react-dom';

/**
 * Portal 组件 - 用于将内容渲染到 DOM 的指定位置
 * 通常用于将 popconfirm 渲染到 document.body，以避免父元素的 overflow 和 z-index 限制
 */
interface PortalProps {
  /** 要渲染的内容 */
  children: React.ReactNode;
}

const Portal: React.FC<PortalProps> = ({ children }) => {
  // 确保组件只在浏览器环境运行
  if (typeof document === 'undefined') {
    return null;
  }

  return createPortal(children, document.body);
};

export default Portal;
