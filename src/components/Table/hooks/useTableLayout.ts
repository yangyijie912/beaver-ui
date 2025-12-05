import { useState, useRef, useLayoutEffect, useEffect } from 'react';

/**
 * useWrapSize
 *
 * 返回：
 * - `wrapRef`：应绑定到表格外层滚动容器的 ref
 * - `wrapWidth`：容器当前的 clientWidth（当 ResizeObserver 触发更新时同步）
 *
 * 说明：使用 ResizeObserver 监测容器宽度，便于将百分比列转换为 px 或重新计算粘性偏移。
 */
export function useWrapSize() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [wrapWidth, setWrapWidth] = useState<number | null>(null);

  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    setWrapWidth(el.clientWidth || null);
    const ro = new ResizeObserver(() => {
      setWrapWidth(el.clientWidth || null);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return { wrapRef, wrapWidth };
}

type ScrollStateInput = {
  wrapRef: React.MutableRefObject<HTMLDivElement | null> | null;
  effectiveLeftFixed: number;
  effectiveRightFixed: number;
  fixedHeader: boolean;
  computedTableWidth?: string | undefined | null;
};

/**
 * useScrollState
 *
 * 监测容器的滚动与尺寸变化，并返回一组 UI 状态，便于上层根据滚动位置显示阴影、计算滚动条尺寸，以及获取表头高度：
 * - `hasLeftShadow` / `hasRightShadow`：当存在固定列并发生水平滚动时，用于在左/右侧显示阴影提示
 * - `hasColumnEdgeShadow`：当存在粘性列且表格发生部分水平滚动时（非固定表头场景），用于边缘阴影样式
 * - `scrollbarHeight` / `scrollbarWidth`：容器当前滚动条的占位高度/宽度（通过 offset 与 client 差值计算）
 * - `headerHeight`：当 `fixedHeader` 为 true 时，从表头节点读取的高度（用于设置 top 偏移）
 *
 * 使用节流 via requestAnimationFrame 保证滚动时更新平滑。
 */
export function useScrollState({
  wrapRef,
  effectiveLeftFixed,
  effectiveRightFixed,
  fixedHeader,
  computedTableWidth,
}: ScrollStateInput) {
  const [hasLeftShadow, setHasLeftShadow] = useState(false);
  const [hasRightShadow, setHasRightShadow] = useState(false);
  const [hasColumnEdgeShadow, setHasColumnEdgeShadow] = useState(false);
  const [scrollbarHeight, setScrollbarHeight] = useState(0);
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const el = wrapRef ? wrapRef.current : null;
    if (!el) return;

    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const scrollLeft = el.scrollLeft || 0;
        const max = Math.max(0, el.scrollWidth - el.clientWidth);
        setHasLeftShadow(effectiveLeftFixed > 0 && scrollLeft > 0);
        setHasRightShadow(effectiveRightFixed > 0 && scrollLeft < max - 1);
        const hasFixedColumns = effectiveLeftFixed > 0 || effectiveRightFixed > 0;
        const isScrolled = scrollLeft > 0 && scrollLeft < max - 1;
        setHasColumnEdgeShadow(!fixedHeader && hasFixedColumns && isScrolled);
        const sbh = Math.max(0, el.offsetHeight - el.clientHeight);
        setScrollbarHeight(sbh);
        const sbw = Math.max(0, el.offsetWidth - el.clientWidth);
        setScrollbarWidth(sbw);
        try {
          const tbl = el.querySelector('table');
          const thead = tbl ? (tbl.querySelector('thead') as HTMLElement | null) : null;
          const hh = fixedHeader && thead ? thead.offsetHeight : 0;
          setHeaderHeight(hh);
        } catch (_e) {
          setHeaderHeight(0);
        }
      });
    };

    // initial
    const initialMax = Math.max(0, el.scrollWidth - el.clientWidth);
    setHasLeftShadow(false);
    setHasRightShadow(effectiveRightFixed > 0 && initialMax > 1);
    setHasColumnEdgeShadow(false);
    setScrollbarHeight(Math.max(0, el.offsetHeight - el.clientHeight));
    setScrollbarWidth(Math.max(0, el.offsetWidth - el.clientWidth));
    try {
      const tbl = el.querySelector('table');
      const thead = tbl ? (tbl.querySelector('thead') as HTMLElement | null) : null;
      const hh = fixedHeader && thead ? thead.offsetHeight : 0;
      setHeaderHeight(hh);
    } catch (_e) {
      setHeaderHeight(0);
    }

    el.addEventListener('scroll', update, { passive: true });
    const ro = new ResizeObserver(() => update());
    ro.observe(el);

    return () => {
      el.removeEventListener('scroll', update);
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [wrapRef, effectiveLeftFixed, effectiveRightFixed, fixedHeader, computedTableWidth]);

  return { hasLeftShadow, hasRightShadow, hasColumnEdgeShadow, scrollbarHeight, scrollbarWidth, headerHeight };
}
