import React, { useRef, useState, useCallback } from 'react';

type RowRenderer = (props: { index: number; style: React.CSSProperties; data?: any }) => React.ReactNode;

type VirtualListProps = {
  height: number;
  itemCount: number;
  itemSize: number;
  width?: number | string;
  children: RowRenderer;
};

const VirtualList: React.FC<VirtualListProps> = ({ height, itemCount, itemSize, width = '100%', children }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = useCallback((e: React.UIEvent) => {
    setScrollTop((e.target as HTMLElement).scrollTop || 0);
  }, []);

  const totalHeight = itemCount * itemSize;
  const startIndex = Math.max(0, Math.floor(scrollTop / itemSize));
  const visibleCount = Math.min(itemCount, Math.ceil(height / itemSize) + 1);
  const endIndex = Math.min(itemCount - 1, startIndex + visibleCount - 1);

  const items: React.ReactNode[] = [];
  for (let i = startIndex; i <= endIndex; i++) {
    const style: React.CSSProperties = {
      position: 'absolute',
      top: i * itemSize,
      height: itemSize,
      width: '100%',
    };
    items.push(children({ index: i, style }));
  }

  return (
    <div ref={containerRef} onScroll={onScroll} style={{ height, width, overflow: 'auto', position: 'relative' }}>
      <div style={{ height: totalHeight, position: 'relative' }}>{items}</div>
    </div>
  );
};

export default VirtualList;
