import React, { useId, useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { computePosition, offset, flip, shift, arrow, autoUpdate } from '@floating-ui/dom';
import './Tooltip.css';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

export type TooltipProps = Omit<React.HTMLAttributes<HTMLSpanElement>, 'content' | 'children'> & {
  /** 要展示的内容，可以是字符串或 React 节点 */
  content: React.ReactNode;
  /** 显示位置，默认为 `top` */
  placement?: TooltipPlacement;
  /** 子元素：触发 Tooltip 的元素（通常是按钮或文本） */
  children: React.ReactElement;
  /** 是否通过 portal 渲染到 body（默认 true，避免被父容器裁剪） */
  portal?: boolean;
};

const Tooltip = React.forwardRef<HTMLSpanElement, TooltipProps>(
  ({ content, placement = 'top', children, portal = true }, ref) => {
    const id = useId();
    const triggerRef = useRef<HTMLSpanElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [internalVisible, setInternalVisible] = useState(false);
    const isVisible = internalVisible;
    const [style, setStyle] = useState<React.CSSProperties>({});
    const [arrowStyle, setArrowStyle] = useState<React.CSSProperties>({});
    const [computedPlacement, setComputedPlacement] = useState<string>(placement);

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

    // 使用 Floating UI 计算位置并自动更新（支持 flip/shift/arrow）
    useEffect(() => {
      if (!isVisible) return;

      const reference = triggerRef.current as Element | null;
      const floating = contentRef.current as HTMLElement | null;
      if (!reference || !floating) return;

      const arrowEl = floating.querySelector('.beaver-tooltip__arrow') as HTMLElement | null;

      const cleanup = autoUpdate(reference, floating, async () => {
        try {
          const middleware = [offset(gap), flip(), shift({ padding: 8 })];
          if (arrowEl) middleware.push(arrow({ element: arrowEl }));

          const {
            x,
            y,
            placement: newPlacement,
            middlewareData,
          } = await computePosition(reference, floating, {
            placement: placement as any,
            strategy: 'fixed',
            middleware,
          });

          setStyle({ left: Math.round(x || 0), top: Math.round(y || 0) });
          setComputedPlacement(newPlacement || placement);

          // 处理箭头偏移（将 arrow 的坐标转换为以 50% 为中心的偏移）
          if (arrowEl && middlewareData && middlewareData.arrow) {
            const arrowData = middlewareData.arrow;
            const cw = floating.offsetWidth;
            const ch = floating.offsetHeight;
            let offsetVal = 0;
            if ((newPlacement || placement).startsWith('top') || (newPlacement || placement).startsWith('bottom')) {
              const arrowX = arrowData.x ?? 0;
              offsetVal = arrowX - cw / 2 + (arrowEl.offsetWidth / 2 || 0);
              setArrowStyle({ left: `calc(50% + ${Math.round(offsetVal)}px)` });
            } else {
              const arrowY = arrowData.y ?? 0;
              offsetVal = arrowY - ch / 2 + (arrowEl.offsetHeight / 2 || 0);
              setArrowStyle({ top: `calc(50% + ${Math.round(offsetVal)}px)` });
            }
          }
        } catch {
          // ignore
        }
      });

      return () => cleanup && cleanup();
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
        data-placement={computedPlacement}
        data-state={isVisible ? 'visible' : 'hidden'}
        style={{ ...style }}
      >
        <div className="beaver-tooltip__inner">{content}</div>
        <div className="beaver-tooltip__arrow" data-placement={computedPlacement} style={arrowStyle} />
      </div>
    ) : null;

    return (
      <span className={`beaver-tooltip beaver-tooltip--placement-${placement}`} ref={ref as React.Ref<HTMLSpanElement>}>
        {wrapper}
        {portal && tooltipNode ? createPortal(tooltipNode, document.body) : tooltipNode}
      </span>
    );
  }
);

Tooltip.displayName = 'Tooltip';

export default Tooltip;
