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
      'icon-size': '18px', // 下拉箭头图标尺寸
      'arrow-size': '14px', // 下拉箭头尺寸
      'arrow-offset': '0px', // 下拉箭头偏移
      'spinner-size': '18px', // 加载中 spinner 尺寸
      'spinner-border-width': '2px', // 加载中 spinner 边框宽度
      'arrow-container-size': '20px', // 下拉箭头容器尺寸
      'max-height': '260px', // 下拉列表最大高度
    },
    checkbox: {
      width: '16px',
    },
    radio: {
      width: '16px',
    },
    switch: {
      'thumb-offset': '2px', // switch 拇指偏移量
      'thumb-size-sm': '14px', // switch 拇指尺寸
      'thumb-size-md': '22px',
      'thumb-size-lg': '30px',
      'track-min-width-sm': '36px', // switch 背景轨道最小宽度
      'track-min-width-md': '48px',
      'track-min-width-lg': '60px',
      'track-height-sm': '18px', // switch 背景轨道高度
      'track-height-md': '28px',
      'track-height-lg': '32px',
      'thumb-gap-sm': '1px', // thumb 与 track 边缘的间隙
      'thumb-gap-md': '2px',
      'thumb-gap-lg': '3px',
    },
    pagination: {
      'item-size': '32px', // 页码尺寸
      gap: '8px', // 页码间距
      'control-size': '32px', // 上一页/下一页按钮尺寸
      'font-size': '14px', // 页码字体大小
      'input-width': '48px', // 页码输入框宽度
      border: '#d1d5db', // 分页专属边框色（优先于全局 border）
    },
    table: {
      'header-bg': '#f8fafc', // 表头背景
      'header-color': '#6e6f6f', // 表头文字颜色
      'hover-bg': '#ecf4fe', // 表格行 hover 背景
      'selected-bg': '#f7fcfe', // 表格行 选中 背景
      'border-color': '#f0f0f0', // 表格边框颜色
      'fixed-bg': '#ffffff', // 表格固定（粘性）列的背景
      'vertical-border-color': '#f0f0f0', // 列间竖向分隔线颜色
      'sticky-border-color': '#f0f0f0', // 粘性列专用的分隔线颜色
      'empty-icon-color': '#dce0e6', // 空状态图标颜色
      'empty-height': '200px', // 空状态（暂无数据）占位高度：如果不存在则通过内容自适应
      'empty-color': '#909399', // 空状态文字颜色
      'empty-bg': '#ffffff', // 空状态背景色
      'empty-box-width': 'min(360px, 60%)', // 空占位内层 box 宽度
      'select-col-width': '40px', // 选择列宽度
      'shadow-width': '8px', // 滚动阴影宽度
      'scrollbar-height': '16px', // 滚动条高度回退值
      'scrollbar-width': '0px', // 当没有滚动条时的回退宽度
      'left-sticky-width': '0px', // 左侧粘性列总宽度回退值
      'right-sticky-width': '0px', // 右侧粘性列总宽度回退值
      'header-height': '0px', // 表头高度回退值
      // 层级：表头与粘性列的 z-index
      'z-index-header': '3000',
      'z-index-sticky': '1000',
    },
  },
};

export default vars;
