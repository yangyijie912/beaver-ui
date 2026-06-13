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
    border: '#bdbdbd',
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
    toast: 99999, // Toast 层级（始终最高）
    tooltip: 11000, // Tooltip 层级（浮动提示，应在所有弹层之上）
    popconfirm: 10999, // Popconfirm 层级（确认弹窗）
    datepicker: 10050, // 日期选择器层级（日期面板为浮动层）
    selectMenu: 10000, // 选择框下拉菜单层级（下拉菜单为浮动层，需高于 Modal/Drawer）
    modal: 9999, // Modal 层级
    drawer: 9998, // Drawer 层级
    tableHeader: 3000, // 表格头部层级
    tableSticky: 1000, // 表格粘性列层级
  },
};

export default vars;
