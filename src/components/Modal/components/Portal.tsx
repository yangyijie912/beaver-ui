import { useEffect, useRef, useState, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

/**
 * Portal 组件，将内容渲染到 document.body
 */
const Portal: React.FC<PortalProps> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsClient(true);

    let container = document.getElementById('beaver-modal-portal') as HTMLDivElement | null;

    if (!container) {
      container = document.createElement('div');
      container.id = 'beaver-modal-portal';
      container.className = 'beaver-modal-portal';

      document.body.appendChild(container);
    }

    containerRef.current = container;

    return () => {
      // Portal 容器在卸载时保留，以便重复使用
    };
  }, []);

  if (!isClient || !containerRef.current) {
    return null;
  }

  return createPortal(children, containerRef.current);
};

export default Portal;
