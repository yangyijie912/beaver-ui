import { useEffect, useState } from 'react';

interface PositionResult {
  top: number;
  left: number;
  arrowOffset?: number;
  placement?: string;
}

export const usePopconfirmPosition = (
  triggerRef: React.RefObject<HTMLElement>,
  contentRef: React.RefObject<HTMLDivElement>,
  placement: string = 'top',
  gap: number = 8,
  _arrowSize: number = 8,
  _open: boolean = true
): PositionResult => {
  const [position, setPosition] = useState<PositionResult>({ top: 0, left: 0, arrowOffset: 0 });

  useEffect(() => {
    if (!_open) return;

    const trigger = triggerRef.current;
    const content = contentRef.current;

    if (!trigger || !content) return;

    const updatePosition = () => {
      const triggerRect = trigger.getBoundingClientRect();
      const contentWidth = content.offsetWidth || 250;
      const contentHeight = content.offsetHeight || 100;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const triggerWidth = triggerRect.width;
      const triggerHeight = triggerRect.height;

      // 基础位置计算
      let top = 0;
      let left = 0;
      let currentPlacement = placement.toLowerCase();

      const placements: Record<string, () => void> = {
        top: () => {
          top = triggerRect.top - contentHeight - gap;
          left = triggerRect.left + (triggerWidth - contentWidth) / 2;
        },
        bottom: () => {
          top = triggerRect.bottom + gap;
          left = triggerRect.left + (triggerWidth - contentWidth) / 2;
        },
        left: () => {
          left = triggerRect.left - contentWidth - gap;
          top = triggerRect.top + (triggerHeight - contentHeight) / 2;
        },
        right: () => {
          left = triggerRect.right + gap;
          top = triggerRect.top + (triggerHeight - contentHeight) / 2;
        },
      };

      placements[currentPlacement]?.();

      // 自动方向切换（flip）
      if (currentPlacement === 'top' && top < 0) {
        currentPlacement = 'bottom';
        top = triggerRect.bottom + gap;
      } else if (currentPlacement === 'bottom' && top + contentHeight > viewportHeight) {
        currentPlacement = 'top';
        top = triggerRect.top - contentHeight - gap;
      } else if (currentPlacement === 'left' && left < 0) {
        currentPlacement = 'right';
        left = triggerRect.right + gap;
      } else if (currentPlacement === 'right' && left + contentWidth > viewportWidth) {
        currentPlacement = 'left';
        left = triggerRect.left - contentWidth - gap;
      }

      // 贴边调整（shift）- 智能处理
      // 原则：
      // 1. 只在 trigger 还可见时进行贴边调整
      // 2. 当 trigger 开始离开屏幕时，Popconfirm 也跟着离开

      // 检查 trigger 是否仍在视口范围内（至少有一部分可见）
      const triggerVisible =
        triggerRect.bottom > 0 &&
        triggerRect.top < viewportHeight &&
        triggerRect.right > 0 &&
        triggerRect.left < viewportWidth;

      if (triggerVisible) {
        // trigger 可见，进行贴边调整

        // 水平方向
        const leftVisible = left + contentWidth > 0;
        const rightVisible = left < viewportWidth;

        if (leftVisible && rightVisible) {
          if (left < 8) {
            left = 8;
          } else if (left + contentWidth > viewportWidth - 8) {
            left = viewportWidth - contentWidth - 8;
          }
        }

        // 竖直方向
        const topVisible = top + contentHeight > 0;
        const bottomVisible = top < viewportHeight;

        if (topVisible && bottomVisible) {
          if (top < 8) {
            top = 8;
          } else if (top + contentHeight > viewportHeight - 8) {
            top = viewportHeight - contentHeight - 8;
          }
        }
      }
      // 否则 trigger 已离开屏幕，Popconfirm 跟着离开，不进行贴边调整

      // 箭头偏移
      const triggerCenterX = triggerRect.left + triggerWidth / 2;
      const triggerCenterY = triggerRect.top + triggerHeight / 2;
      const contentCenterX = left + contentWidth / 2;
      const contentCenterY = top + contentHeight / 2;

      let arrowOffset = 0;
      if (currentPlacement === 'top' || currentPlacement === 'bottom') {
        arrowOffset = triggerCenterX - contentCenterX;
        arrowOffset = Math.max(-contentWidth / 2 + 16, Math.min(contentWidth / 2 - 16, arrowOffset));
      } else if (currentPlacement === 'left' || currentPlacement === 'right') {
        arrowOffset = triggerCenterY - contentCenterY;
        arrowOffset = Math.max(-contentHeight / 2 + 16, Math.min(contentHeight / 2 - 16, arrowOffset));
      }

      setPosition({ top, left, arrowOffset, placement: currentPlacement });
    };

    updatePosition();
    const timerId = setInterval(updatePosition, 100);
    window.addEventListener('scroll', updatePosition);
    window.addEventListener('resize', updatePosition);

    return () => {
      clearInterval(timerId);
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, [triggerRef, contentRef, placement, gap, _open]);

  return position;
};

export default usePopconfirmPosition;
