import React from 'react';

/**
 * 高亮渲染 label 中匹配的子串
 */
export function renderHighlightedLabel(label: string, query: string): React.ReactNode {
  const q = query.trim();
  if (!q) return label;
  const lower = label.toLowerCase();
  const idx = lower.indexOf(q.toLowerCase());
  if (idx === -1) return label;
  const before = label.slice(0, idx);
  const match = label.slice(idx, idx + q.length);
  const after = label.slice(idx + q.length);
  return (
    <>
      {before}
      <span className="beaver-select__match">{match}</span>
      {after}
    </>
  );
}

/**
 * 获取容器宽度样式
 */
export function getWidthStyle(width?: number | string): React.CSSProperties | {} {
  if (width === undefined) return {};
  return { width: typeof width === 'number' ? `${width}px` : width };
}

/**
 * 获取容器 className 列表
 */
export function getContainerClassName(
  size: 'small' | 'medium' | 'large',
  isDisabled: boolean,
  open: boolean,
  className?: string
): string {
  return [
    'beaver-select-wrapper',
    `beaver-select--${size}`,
    isDisabled ? 'beaver-select--disabled' : '',
    open ? 'beaver-select--open' : '',
    className || '',
  ]
    .filter(Boolean)
    .join(' ');
}

/**
 * 查找选项是否为禁用状态
 */
export function isOptionDisabled(value: string, options: any[]): boolean {
  const opt = options.find((o) => o.value === value);
  return !!(opt && opt.disabled);
}

/**
 * 生成无数据提示文本
 */
export function getNoDataLabel(optionsEmpty: boolean, searchable: boolean, userTyped: boolean, query: string): string {
  if (optionsEmpty) return '暂无数据';
  if (searchable && userTyped && query.trim()) return '无匹配项';
  return '暂无数据';
}
