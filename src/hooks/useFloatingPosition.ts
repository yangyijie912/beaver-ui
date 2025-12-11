import { useEffect, useState } from 'react';
import { computePosition, offset, flip, shift, arrow, autoUpdate } from '@floating-ui/dom';

export type Placement =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'left-start'
  | 'left-end'
  | 'right-start'
  | 'right-end';

interface UseFloatingPositionOptions {
  placement: Placement;
  gap?: number;
  padding?: number;
  showArrow?: boolean;
}

interface FloatingPositionResult {
  x: number;
  y: number;
  placement: Placement;
  arrowStyle: React.CSSProperties;
}

/**
 * useFloatingPosition Hook - 使用 floating-ui 库计算浮动元素的位置
 * 支持自动贴边、flip（反向）、shift（平移）和箭头定位
 *
 * @param referenceRef - 参考元素的 ref（触发元素）
 * @param floatingRef - 浮动元素的 ref（弹窗/菜单）
 * @param options - 配置选项
 * @returns 位置结果和箭头样式
 */
export const useFloatingPosition = (
  referenceRef: React.RefObject<HTMLElement | null>,
  floatingRef: React.RefObject<HTMLElement | null>,
  options: UseFloatingPositionOptions,
  isVisible: boolean = true
): FloatingPositionResult => {
  const { placement, gap = 8, padding = 8, showArrow = true } = options;

  const [style, setStyle] = useState<FloatingPositionResult>({
    x: 0,
    y: 0,
    placement,
    arrowStyle: {},
  });

  useEffect(() => {
    if (!isVisible) return;

    const reference = referenceRef.current;
    const floating = floatingRef.current;

    if (!reference || !floating) return;

    const arrowEl = floating.querySelector('[data-floating-arrow]') as HTMLElement | null;

    const cleanup = autoUpdate(reference, floating, async () => {
      try {
        const middleware = [offset(gap), flip(), shift({ padding })];

        if (showArrow && arrowEl) {
          middleware.push(arrow({ element: arrowEl }));
        }

        const {
          x,
          y,
          placement: computedPlacement,
          middlewareData,
        } = await computePosition(reference, floating, {
          placement,
          strategy: 'fixed',
          middleware,
        });

        const arrowStyle: React.CSSProperties = {};

        // 处理箭头位置
        if (showArrow && arrowEl && middlewareData && middlewareData.arrow) {
          const arrowData = middlewareData.arrow;
          const arrowSize = arrowEl.offsetWidth || arrowEl.offsetHeight || 8;

          // 根据放置位置调整箭头
          if (computedPlacement.startsWith('top') || computedPlacement.startsWith('bottom')) {
            const arrowX = arrowData.x ?? 0;
            const offsetVal = arrowX - floating.offsetWidth / 2 + (arrowSize / 2 || 0);
            arrowStyle.left = `calc(50% + ${Math.round(offsetVal)}px)`;
          } else {
            const arrowY = arrowData.y ?? 0;
            const offsetVal = arrowY - floating.offsetHeight / 2 + (arrowSize / 2 || 0);
            arrowStyle.top = `calc(50% + ${Math.round(offsetVal)}px)`;
          }
        }

        setStyle({
          x: Math.round(x || 0),
          y: Math.round(y || 0),
          placement: computedPlacement as Placement,
          arrowStyle,
        });
      } catch {
        // ignore errors
      }
    });

    return () => cleanup && cleanup();
  }, [referenceRef, floatingRef, placement, gap, padding, showArrow, isVisible]);

  return style;
};

export default useFloatingPosition;
