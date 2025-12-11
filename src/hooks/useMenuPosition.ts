import { useEffect, useState } from 'react';
import { computePosition, offset, flip, shift, autoUpdate } from '@floating-ui/dom';

export interface MenuPositionResult {
  x: number;
  y: number;
  top?: number;
  left?: number;
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
  const [position, setPosition] = useState<MenuPositionResult>({ x: 0, y: 0, top: 0, left: 0 });

  useEffect(() => {
    if (!isOpen) return;

    const trigger = triggerRef.current;
    const menu = menuRef.current;

    if (!trigger || !menu) return;

    const calculatePosition = async () => {
      try {
        const { x, y } = await computePosition(trigger, menu, {
          placement: 'bottom-start',
          strategy: 'fixed',
          middleware: [offset(gap), flip(), shift({ padding: 8 })],
        });

        const roundedX = Math.round(x || 0);
        const roundedY = Math.round(y || 0);

        setPosition({
          x: roundedX,
          y: roundedY,
          top: roundedY,
          left: roundedX,
        });
      } catch {
        // fallback
      }
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
