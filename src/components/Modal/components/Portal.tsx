import { useEffect, useRef, useState, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

/**
 * Portal 组件，将内容渲染到 document.body
 * 使用状态和useEffect确保在客户端初始化后渲染，避免hydration问题
 */
const Portal: React.FC<PortalProps> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsClient(true);

    // 获取或创建Portal容器
    let container = document.getElementById('beaver-portal-root') as HTMLDivElement | null;

    if (!container) {
      container = document.createElement('div');
      container.id = 'beaver-portal-root';
      container.style.position = 'fixed';
      container.style.top = '0';
      container.style.left = '0';
      container.style.width = '100%';
      container.style.height = '100%';
      container.style.zIndex = '9999';
      document.body.appendChild(container);
    }

    containerRef.current = container;

    return () => {
      // 清理空的容器
      if (containerRef.current?.childNodes.length === 0 && containerRef.current.parentNode) {
        containerRef.current.parentNode.removeChild(containerRef.current);
        containerRef.current = null;
      }
    };
  }, []);

  // 在客户端且容器已准备好时渲染
  if (!isClient || !containerRef.current) {
    return null;
  }

  return createPortal(children, containerRef.current);
};

export default Portal;
