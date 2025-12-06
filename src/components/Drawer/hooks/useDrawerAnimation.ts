import { useEffect, useState } from 'react';

/**
 * useDrawerAnimation hook
 * - 管理Drawer的打开/关闭动画状态
 * - 确保组件首次挂载时才触发动画
 * - 返回挂载状态和动画激活状态
 *
 * @param isOpen - Drawer是否应该打开
 * @returns { mounted: boolean, animating: boolean }
 */
export function useDrawerAnimation(isOpen: boolean) {
  // mounted: 组件是否已挂载到DOM
  const [mounted, setMounted] = useState(false);
  // animating: 是否正在执行打开动画
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    // 当Drawer要打开时
    if (isOpen) {
      // 如果还未挂载，先挂载
      if (!mounted) {
        setMounted(true);
        // 第一个setTimeout: 确保挂载完成
        // 第二个setTimeout: 触发CSS过渡
        const timer1 = setTimeout(() => {
          const timer2 = setTimeout(() => {
            setAnimating(true);
          }, 10);
          return () => clearTimeout(timer2);
        }, 0);
        return () => clearTimeout(timer1);
      } else if (!animating) {
        // 已挂载但未动画中，触发打开动画
        setAnimating(true);
      }
    }
    // 当Drawer要关闭时
    else {
      setAnimating(false);
      // 延迟卸载，以便动画完成后再从DOM中移除
      const timer = setTimeout(() => {
        if (!isOpen) {
          setMounted(false);
        }
      }, 250); // 关闭动画较快

      return () => clearTimeout(timer);
    }
  }, [isOpen, mounted, animating]);

  return { mounted, animating };
}
