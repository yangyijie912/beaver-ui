/**
 * UI 设计系统的基础变量
 * 这些变量会被注入为 CSS 变量，供组件使用，也可以直接在 JS/TS 中引用
 * 更新完这些变量后，运行 `npm run gen:tokens` 来生成对应的 CSS 变量文件
 */
export const vars = {
  color: {
    primary: '#0eaae0',
    'primary-rgb': '14 170 224',
    text: '#333',
    border: '#aaa',
    disabled: '#9ca3af',
    success: '#10b987',
    warning: '#f59e00',
    error: '#e44444',
    bg: '#ffffff',
    'on-primary': '#ffffff',
  },
  radius: {
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '10px',
  },
  space: {
    xs: '4px',
    xs2: '6px',
    xs3: '10px',
    sm: '8px',
    sm2: '14px',
    md: '12px',
    lg: '16px',
    xl: '20px',
  },
  font: {
    size: {
      sm: '12px',
      md: '14px',
      lg: '16px',
    },
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.2)',
    lg: '0 8px 24px rgba(20, 30, 50, 0.12)',
  },
  focus: {
    ring: '4px',
  },
  // 全局宽度/尺寸：尽量仅保留跨组件共享的值。组件专属尺寸将放到 `components.<name>` 下。
  components: {
    select: {
      'icon-size': '18px',
      'arrow-size': '14px',
      'arrow-offset': '0px',
      'spinner-size': '18px',
      'spinner-border-width': '2px',
      'arrow-container-size': '20px',
      'max-height': '260px',
    },
    checkbox: {
      // checkbox 专属宽度
      width: '16px',
    },
    radio: {
      // radio 专属宽度
      width: '16px',
    },
    switch: {
      'thumb-offset': '2px',
      'thumb-size-sm': '14px',
      'thumb-size-md': '22px',
      'thumb-size-lg': '30px',
      'track-min-width-sm': '36px',
      'track-min-width-md': '48px',
      'track-min-width-lg': '60px',
      'track-height-sm': '18px',
      'track-height-md': '28px',
      'track-height-lg': '32px',
      'thumb-gap-sm': '1px',
      'thumb-gap-md': '2px',
      'thumb-gap-lg': '3px',
    },
    pagination: {
      'item-size': '32px',
      gap: '8px',
      'control-size': '32px',
      'font-size': '14px',
      'input-width': '48px',
      // 分页专属边框色（优先于全局 border）
      border: '#d1d5db',
    },
    table: {
      'header-bg': '#f8fafc', // 表头背景
      'header-color': '#6e6f6f', // 表头文字颜色
      'hover-bg': '#ecf4fe', // 表格行 hover 背景
      'selected-bg': '#f7fcfe', // 表格行 选中 背景
      'border-color': '#f0f0f0', // 表格边框颜色
      'fixed-bg': '#ffffff', // 表格固定（粘性）列的背景
      // 层级：表头与粘性列的 z-index
      'z-index-header': '3000',
      'z-index-sticky': '1000',
    },
  },
};

export default vars;
