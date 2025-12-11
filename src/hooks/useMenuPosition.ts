import { useEffect, useState } from 'react';
import { computePosition, offset, shift, flip, autoUpdate } from '@floating-ui/dom';

export interface MenuPositionResult {
  x: number;
  y: number;
  top?: number;
  left?: number;
  measured?: boolean;
}

/**
 * useMenuPosition Hook - 为 Select/DatePicker 等下拉菜单计算位置
 * 使用 floating-ui 自动处理视口碰撞和翻转
 *
 * @param triggerRef - 触发元素 ref
 * @param menuRef - 菜单元素 ref
 * @param isOpen - 菜单是否打开
 * @param gap - 菜单与触发元素的间距（默认 4）
 * @returns 菜单位置 { x, y, top, left }
 */
export const useMenuPosition = (
  triggerRef: React.RefObject<HTMLElement | null>,
  menuRef: React.RefObject<HTMLElement | null>,
  isOpen: boolean = false,
  gap: number = 4
): MenuPositionResult => {
  const [position, setPosition] = useState<MenuPositionResult>({ x: 0, y: 0, top: 0, left: 0, measured: false });

  useEffect(() => {
    if (!isOpen) return;

    // 每次打开前重置 measured 标志，避免使用上次打开时的旧坐标导致闪动
    setPosition((p) => ({ ...p, measured: false, x: 0, y: 0 }));

    const trigger = triggerRef.current;
    const menu = menuRef.current;

    if (!trigger || !menu) return;

    const calculatePosition = async () => {
      try {
        // 等待一帧，确保 portal 中的 menu DOM 已完成布局
        await new Promise((r) => requestAnimationFrame(r));

        // 计算基于视觉占位的最终 gap：解析 shadow/outline/border/padding 等真实样式
        function parseBoxShadowExtent(shadow: string | null): number {
          if (!shadow) return 0;
          try {
            const first = shadow.split(',')[0].trim();
            const pxMatches = first.match(/-?\d+\.?\d*px/g);
            if (!pxMatches || pxMatches.length === 0) return 0;
            const lastPx = pxMatches[pxMatches.length - 1];
            return Math.abs(parseFloat(lastPx)) || 0;
          } catch {
            return 0;
          }
        }

        const csTrigger = getComputedStyle(trigger);
        const csMenu = getComputedStyle(menu);
        const triggerShadow = parseBoxShadowExtent(csTrigger.boxShadow || null);
        const menuShadow = parseBoxShadowExtent(csMenu.boxShadow || null);
        const outline = Math.abs(parseFloat(csTrigger.outlineWidth || '0')) || 0;
        const borderTop = Math.abs(parseFloat(csTrigger.borderTopWidth || '0')) || 0;
        const menuPaddingTop = Math.abs(parseFloat(csMenu.paddingTop || '0')) || 0;

        const visualGap = Math.max(0, gap + triggerShadow + menuShadow + outline + borderTop + menuPaddingTop);

        const { x, y } = await computePosition(trigger, menu, {
          placement: 'bottom-start',
          // 使用 fixed 使坐标相对于视口一致（配合 portal 到 document.body）
          strategy: 'fixed',
          // 使用根据真实样式计算的 visualGap，保证上/下展示时视觉间距一致
          middleware: [offset(visualGap), flip({ fallbackPlacements: ['top-start'] }), shift({ padding: 8 })],
        });

        const roundedX = Math.round(x || 0);
        const roundedY = Math.round(y || 0);

        // 计算最终 placement（基于计算得到的 y 与触发器位置）并计算实际 DOM 间距
        // const triggerRect = trigger.getBoundingClientRect();
        // const menuRect = menu.getBoundingClientRect();
        // const isBelow = roundedY >= Math.round(triggerRect.bottom);
        // const placementUsed = isBelow ? 'bottom-start' : 'top-start';
        // let actualGap = 0;
        // if (placementUsed === 'bottom-start') {
        //   actualGap = roundedY - Math.round(triggerRect.bottom);
        // } else {
        //   actualGap = Math.round(triggerRect.top) - (roundedY + Math.round(menuRect.height));
        // }

        // 开发模式下输出必要的调试信息：placement、visualGap 与实际间距及其差值
        // if (process.env.NODE_ENV !== 'production') {
        //   console.debug('[useMenuPosition]', {
        //     placement: placementUsed,
        //     visualGap,
        //     actualGap,
        //     diff: visualGap - actualGap,
        //   });
        // }

        setPosition({
          x: roundedX,
          y: roundedY,
          top: roundedY,
          left: roundedX,
          measured: true,
        });
      } catch (_err) {}
    };

    // 初始计算
    calculatePosition();

    // 监听位置变化
    const cleanup = autoUpdate(trigger, menu, calculatePosition);

    return () => cleanup && cleanup();
  }, [triggerRef, menuRef, isOpen, gap]);

  return position;
};

export default useMenuPosition;
