import { useState, useEffect } from 'react';

export interface UseModalAnimationOptions {
  /**
   * 是否启用动画
   */
  animated?: boolean;
  /**
   * 动画进入时长（毫秒）
   */
  enterDuration?: number;
  /**
   * 动画退出时长（毫秒）
   */
  exitDuration?: number;
}

/**
 * 处理Modal的打开/关闭动画逻辑
 * 为了避免闪屏，需要管理动画类名的应用时机
 */
export const useModalAnimation = (open: boolean, options: UseModalAnimationOptions = {}) => {
  const { animated = true, exitDuration = 300 } = options;
  const [mounted, setMounted] = useState(open);
  const [animating, setAnimating] = useState(open);

  useEffect(() => {
    if (open) {
      // 打开时：立即挂载，然后应用动画类
      setMounted(true);
      // 让浏览器完成重排
      requestAnimationFrame(() => {
        setAnimating(true);
      });
    } else {
      // 关闭时：先移除动画类，然后在延迟后卸载
      setAnimating(false);
      if (animated) {
        const timer = setTimeout(() => {
          setMounted(false);
        }, exitDuration);
        return () => clearTimeout(timer);
      } else {
        setMounted(false);
      }
    }
  }, [open, animated, exitDuration]);

  return {
    /**
     * Modal是否需要挂载到DOM中
     */
    mounted,
    /**
     * 是否应用动画类
     */
    animating: animated && animating,
  };
};
