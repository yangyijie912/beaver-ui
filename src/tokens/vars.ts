/**
 * UI 设计系统的基础变量
 * 这些变量会被注入为 CSS 变量，供组件使用，也可以直接在 JS/TS 中引用
 * 更新完这些变量后，运行 `pnpm gen:tokens` 来生成对应的 CSS 变量文件
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
    xxs: '4px',
    xs: '6px',
    sm: '8px',
    sm2: '10px',
    md: '12px',
    md2: '14px',
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
  focus: {
    ring: '4px',
  },
  zIndex: {
    modal: 9999, // Modal 层级
    drawer: 9998, // Drawer 层级
    tooltip: 6000, // Tooltip 层级
    selectMenu: 5000, // 选择框下拉菜单 层级
    tableHeader: 3000, // 表格头部层级
    tableSticky: 1000, // 表格粘性列层级
    datepicker: 5001, // 日期选择器层级
  },
  // 全局宽度/尺寸：尽量仅保留跨组件共享的值。组件专属尺寸将放到 `components.<name>` 下。
  components: {
    datepicker: {
      'picker-bg': '#ffffff', // 日期选择器面板背景色
      'picker-border-color': '#e8e8e8', // 日期选择器面板边框颜色
      'picker-border-radius': '6px', // 日期选择器面板圆角
      'picker-box-shadow': '0 6px 18px rgba(20, 30, 50, 0.2)', // 日期选择器面板阴影
      'picker-padding': '12px', // 日期选择器面板内边距
      'picker-z-index': '5001', // 日期选择器面板层级
      'header-height': '40px', // 日期选择器头部高度
      'header-bg': '#f8fafc', // 日期选择器头部背景色
      'header-color': '#333', // 日期选择器头部文字颜色
      'header-font-size': '14px', // 日期选择器头部字体大小
      'header-font-weight': '600', // 日期选择器头部字体粗细
      'nav-btn-size': '24px', // 日期选择器上下月份按钮尺寸
      'nav-btn-color': '#666', // 日期选择器上下月份按钮颜色
      'nav-btn-hover-bg': '#f0f0f0', // 日期选择器上下月份按钮hover背景色
      'weekday-height': '32px', // 星期行高度
      'weekday-color': '#666', // 星期文字颜色
      'weekday-font-size': '12px', // 星期字体大小
      'date-cell-size': '32px', // 日期单元格尺寸
      'date-cell-font-size': '14px', // 日期单元格字体大小
      'date-cell-color': '#333', // 日期单元格文字颜色
      'date-cell-hover-bg': '#ecf4fe', // 日期单元格hover背景色
      'date-cell-selected-bg': '#0eaae0', // 日期单元格选中背景色
      'date-cell-selected-color': '#ffffff', // 日期单元格选中文字颜色
      'date-cell-disabled-color': '#999', // 日期单元格禁用文字颜色
      'date-cell-disabled-bg': '#f5f5f5', // 日期单元格禁用背景色
      'range-cell-bg': '#e6f4ff', // 范围选择日期单元格背景色
      gap: '8px', // 日期选择器内部间距
    },
  },
};

export default vars;
