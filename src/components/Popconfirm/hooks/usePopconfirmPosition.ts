import { useEffect, useState } from 'react';

/**
 * 位置计算的结果类型
 */
interface PositionResult {
  top: number;
  left: number;
  arrowOffset?: number; // 箭头相对于 content 中心的偏移
}

/**
 * usePopconfirmPosition Hook - 计算 popconfirm 相对于触发元素的位置
 * 自动调整位置以避免超出视口边界
 */
export const usePopconfirmPosition = (
  triggerRef: React.RefObject<HTMLElement>,
  contentRef: React.RefObject<HTMLDivElement>,
  placement: string = 'top',
  gap: number = 8,
  arrowSize: number = 8
): PositionResult => {
  const [position, setPosition] = useState<PositionResult>({ top: 0, left: 0, arrowOffset: 0 });

  useEffect(() => {
    if (!triggerRef.current) {
      return;
    }

    const calculatePosition = () => {
      const triggerRect = triggerRef.current!.getBoundingClientRect();

      // 如果内容还未挂载，使用默认尺寸进行初步计算
      const contentWidth = contentRef.current?.offsetWidth || 250;
      const contentHeight = contentRef.current?.offsetHeight || 100;

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let top = 0;
      let left = 0;
      const triggerWidth = triggerRect.width;
      const triggerHeight = triggerRect.height;

      // 计算基础位置
      const placementLower = placement.toLowerCase();

      if (placementLower === 'top') {
        top = triggerRect.top - contentHeight - gap;
        // top (center)
        left = triggerRect.left + (triggerWidth - contentWidth) / 2;
      } else if (placementLower === 'bottom') {
        top = triggerRect.bottom + gap;
        // bottom (center)
        left = triggerRect.left + (triggerWidth - contentWidth) / 2;
      } else if (placementLower === 'left') {
        left = triggerRect.left - contentWidth - gap;
        top = triggerRect.top + (triggerHeight - contentHeight) / 2;
      } else if (placementLower === 'right') {
        left = triggerRect.right + gap;
        top = triggerRect.top + (triggerHeight - contentHeight) / 2;
      }

      // 保存初始位置用于箭头计算
      let adjustedLeft = left;
      let adjustedTop = top;

      // 调整位置以避免超出视口
      if (left < 0) {
        adjustedLeft = 8;
      } else if (left + contentWidth > viewportWidth) {
        adjustedLeft = viewportWidth - contentWidth - 8;
      }

      if (top < 0) {
        adjustedTop = 8;
      } else if (top + contentHeight > viewportHeight) {
        adjustedTop = viewportHeight - contentHeight - 8;
      }

      // 计算滚动偏移
      const scrollX = window.scrollX || document.documentElement.scrollLeft;
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      // 计算箭头偏移 - 对于上下方向，计算水平偏移；对于左右方向，计算垂直偏移
      let arrowOffset = 0;
      const triggerCenterX = triggerRect.left + triggerWidth / 2;
      const triggerCenterY = triggerRect.top + triggerHeight / 2;
      const contentCenterX = adjustedLeft + contentWidth / 2;
      const contentCenterY = adjustedTop + contentHeight / 2;

      if (placementLower.startsWith('top') || placementLower.startsWith('bottom')) {
        // 对于上下方向，箭头应该水平对准触发元素中心
        arrowOffset = triggerCenterX - contentCenterX;
        // 限制箭头偏移不超出内容框范围（留出一些边距）
        arrowOffset = Math.max(-contentWidth / 2 + 16, Math.min(contentWidth / 2 - 16, arrowOffset));
      } else if (placementLower === 'left' || placementLower === 'right') {
        // 对于左右方向，箭头应该垂直对准触发元素中心
        arrowOffset = triggerCenterY - contentCenterY;
        // 限制箭头偏移不超出内容框范围（留出一些边距）
        arrowOffset = Math.max(-contentHeight / 2 + 16, Math.min(contentHeight / 2 - 16, arrowOffset));
      }

      setPosition({
        top: adjustedTop + scrollY,
        left: adjustedLeft + scrollX,
        arrowOffset,
      });
    };

    // 立即计算一次
    calculatePosition();

    // 监听窗口调整大小事件
    const resizeListener = calculatePosition;
    const scrollListener = calculatePosition;

    window.addEventListener('resize', resizeListener);
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
      window.removeEventListener('scroll', scrollListener);
    };
  }, [triggerRef, contentRef, placement, gap, arrowSize]);

  return position;
};

export default usePopconfirmPosition;
