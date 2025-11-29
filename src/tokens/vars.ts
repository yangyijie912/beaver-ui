/**
 * UI 设计系统的基础变量
 * 这些变量会被注入为 CSS 变量，供组件使用，也可以直接在 JS/TS 中引用
 * 更新完这些变量后，运行 `npm run gen:tokens` 来生成对应的 CSS 变量文件
 */
export const vars = {
  color: {
    primary: '#0eaae0',
    primaryRgb: '14 170 224',
    text: '#333',
    border: '#aaa',
    disabled: '#9ca3af',
    success: '#10b987',
    warning: '#f59e00',
    error: '#e44444',
  },
  radius: {
    sm: '4px',
    md: '6px',
    lg: '8px',
  },
  space: {
    sm: '8px',
    md: '12px',
    lg: '16px',
  },
  width: {
    checkbox: '16px',
    select: '200px',
  },
  select: {
    'icon-size': '18px',
    'arrow-size': '14px',
    'arrow-offset': '0px',
    'spinner-size': '18px',
    'spinner-border-width': '2px',
  },
};

export default vars;
