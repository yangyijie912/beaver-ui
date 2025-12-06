import React, { useId, useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Tooltip.css';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  /** 要展示的内容，可以是字符串或 React 节点 */
  content: React.ReactNode;
  /** 显示位置，默认为 `top` */
  placement?: TooltipPlacement;
  /** 子元素：触发 Tooltip 的元素（通常是按钮或文本） */
  children: React.ReactElement;
  /** 是否通过 portal 渲染到 body（默认 true，避免被父容器裁剪） */
  portal?: boolean;
}

/**
 * Tooltip 组件（改进版）
 *
 * - 使用 JS 事件（mouseenter/focus）控制可见性，并用 `createPortal` 将提示渲染到 `document.body`，
 *   避免在 Storybook 或其他有 overflow:hidden 的容器中被裁切。
 * - 简单实现四个方向定位（top/bottom/left/right），通过读取触发元素的 bounding rect
 *   计算固定定位（position: fixed）的坐标；这可作为轻量替代 Popper/Floating
 * - 有详细中文注释，便于后续扩展（如添加 offset、delay、自动翻转）
 */
const Tooltip: React.FC<TooltipProps> = ({ content, placement = 'top', children, portal = true }) => {
  const id = useId();
  const triggerRef = useRef<HTMLSpanElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [internalVisible, setInternalVisible] = useState(false);
  const isVisible = internalVisible;
  const [style, setStyle] = useState<React.CSSProperties>({});

  // 判定 content 是否为有效内容（null / undefined / 空字符串 都视为无内容）
  const hasContent = !(
    content === null ||
    content === undefined ||
    (typeof content === 'string' && content.trim() === '')
  );

  // gap 与箭头偏移，使用 CSS 变量回退值
  const gap = 8; // 与 CSS 中变量一致，后续可从计算的 CSS 变量读取

  // 事件处理：鼠标/键盘聚焦显示 tooltip
  useEffect(() => {
    // 如果没有有效内容，则不注册任何事件，也不响应显示逻辑
    if (!hasContent) return;
    const el = triggerRef.current;
    if (!el) return;
    const onEnter = () => setInternalVisible(true);
    const onLeave = () => setInternalVisible(false);
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    el.addEventListener('focus', onEnter);
    el.addEventListener('blur', onLeave);
    return () => {
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
      el.removeEventListener('focus', onEnter);
      el.removeEventListener('blur', onLeave);
    };
  }, [hasContent]);

  // 计算位置：当可见时或窗口变化时重新计算
  useEffect(() => {
    if (!isVisible) return;
    const update = () => {
      const trigger = triggerRef.current;
      const contentEl = contentRef.current;
      if (!trigger || !contentEl) return;
      const rect = trigger.getBoundingClientRect();
      const cw = contentEl.offsetWidth;
      const ch = contentEl.offsetHeight;
      let top = 0;
      let left = 0;
      if (placement === 'top') {
        top = rect.top - gap - ch;
        left = rect.left + rect.width / 2 - cw / 2;
      } else if (placement === 'bottom') {
        top = rect.bottom + gap;
        left = rect.left + rect.width / 2 - cw / 2;
      } else if (placement === 'left') {
        top = rect.top + rect.height / 2 - ch / 2;
        left = rect.left - gap - cw;
      } else {
        // right
        top = rect.top + rect.height / 2 - ch / 2;
        left = rect.right + gap;
      }
      // 简单的视窗边界修正（避免完全超出视窗）
      const pad = 8;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      if (left < pad) left = pad;
      if (left + cw > vw - pad) left = vw - pad - cw;
      if (top < pad) top = pad;
      if (top + ch > vh - pad) top = vh - pad - ch;

      setStyle({ left: Math.round(left), top: Math.round(top) });
    };
    update();
    window.addEventListener('scroll', update, true);
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update, true);
      window.removeEventListener('resize', update);
    };
  }, [isVisible, placement]);

  // wrapper：在一个可聚焦/可监听的 span 上挂载事件与 ref，避免针对子元素 clone 出现类型问题
  // 只有在有内容时才添加 aria-describedby，否则避免空的描述符
  const wrapper = (
    <span
      className={`beaver-tooltip__trigger`}
      ref={triggerRef}
      aria-describedby={hasContent ? id : undefined}
      tabIndex={0}
    >
      {children}
    </span>
  );

  const tooltipNode = hasContent ? (
    <div
      ref={contentRef}
      role="tooltip"
      id={id}
      className={`beaver-tooltip__content`}
      data-placement={placement}
      data-state={isVisible ? 'visible' : 'hidden'}
      style={style}
    >
      <div className="beaver-tooltip__inner">{content}</div>
      <div className="beaver-tooltip__arrow" data-placement={placement} />
    </div>
  ) : null;

  return (
    <span className={`beaver-tooltip beaver-tooltip--placement-${placement}`}>
      {wrapper}
      {portal && tooltipNode ? createPortal(tooltipNode, document.body) : tooltipNode}
    </span>
  );
};

export default Tooltip;
