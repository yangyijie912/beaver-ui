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
    lg2: '18px',
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
  // 全局宽度/尺寸：尽量仅保留跨组件共享的值。组件专属尺寸将放到 `components.<name>` 下。
  components: {
    button: {
      border: '#bdbdbd', // 按钮边框色
      'disabled-border': '#e0e0e0', // 按钮禁用态边框色，部分场景和beaver-color-disabled区分
      'disabled-bg': '#f5f5f5', // 按钮禁用态背景色，部分场景和beaver-color-disabled区分
    },
    select: {
      'icon-size': '18px', // 下拉箭头图标尺寸
      'arrow-size': '14px', // 下拉箭头尺寸
      'arrow-offset': '0px', // 下拉箭头偏移
      'spinner-size': '18px', // 加载中 spinner 尺寸
      'spinner-border-width': '2px', // 加载中 spinner 边框宽度
      'arrow-container-size': '20px', // 下拉箭头容器尺寸
      'max-height': '260px', // 下拉列表最大高度
      'z-index': '5000', // 下拉菜单层级，默认 5000，可被覆盖
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
    modal: {
      width: '520px', // modal 默认宽度
      'border-radius': '8px', // modal 圆角
      padding: '24px', // modal 内边距
      'header-margin-bottom': '16px', // 头部下边距
      'footer-margin-top': '16px', // 页脚上边距
      'overlay-bg': 'rgba(0, 0, 0, 0.55)', // 遮罩背景色（增强了透明度）
      bg: '#ffffff', // modal 背景色
      'z-index': '9999', // modal 层级（高于所有其他组件）
      'box-shadow': '0 10px 40px rgba(0, 0, 0, 0.15)', // modal 阴影
      border: '1px solid #e8e8e8', // modal 边框
      'title-font-size': '18px', // 标题字体大小
      'title-font-weight': '600', // 标题字体粗细
      'title-color': '#333', // 标题颜色
      'close-btn-size': '24px', // 关闭按钮大小
      'close-btn-color': '#666', // 关闭按钮颜色
    },
    tooltip: {
      bg: 'rgba(0, 0, 0, 0.85)', // tooltip 背景色
      color: '#ffffff', // tooltip 文字颜色
      padding: '6px 10px', // tooltip 内边距
      'font-size': '12px', // tooltip 字体大小
      'border-radius': '4px', // tooltip 圆角
      gap: '8px', // tooltip 箭头与触发元素的间距
      'z-index': '4000', // tooltip 层级
      'box-shadow': '0 6px 18px rgba(20,30,50,0.2)', // tooltip 阴影
      'max-width': '280px', // 最大宽度
    },
    popconfirm: {
      bg: '#ffffff', // popconfirm 背景色
      'border-color': '#e8e8e8', // popconfirm 边框颜色
      'border-radius': '6px', // popconfirm 圆角
      'box-shadow': '0 6px 18px rgba(20, 30, 50, 0.2)', // popconfirm 阴影
      padding: '12px 16px', // popconfirm 内边距
      gap: '8px', // popconfirm 箭头与触发元素的间距
      'z-index': '4001', // popconfirm 层级（高于 tooltip）
      'title-font-size': '14px', // popconfirm 标题字体大小
      'title-font-weight': '500', // popconfirm 标题字体粗细
      'title-color': '#333', // popconfirm 标题颜色
      'description-font-size': '12px', // popconfirm 描述文字字体大小
      'description-color': '#666', // popconfirm 描述文字颜色
      'button-gap': '8px', // popconfirm 按钮间距
    },
    drawer: {
      width: '360px', // 抽屉默认宽度
      'border-radius': '4px', // 抽屉圆角
      padding: '24px', // 抽屉内边距
      'header-margin-bottom': '16px', // 头部下边距
      'footer-margin-top': '16px', // 页脚上边距
      'overlay-bg': 'rgba(0, 0, 0, 0.45)', // 遮罩背景色
      bg: '#ffffff', // 抽屉背景色
      'z-index': '9998', // 抽屉层级（低于 modal）
      'box-shadow': '0 8px 32px rgba(0, 0, 0, 0.12)', // 抽屉阴影
      'title-font-size': '16px', // 标题字体大小
      'title-font-weight': '600', // 标题字体粗细
      'title-color': '#333', // 标题颜色
      'close-btn-size': '20px', // 关闭按钮大小
      'close-btn-color': '#666', // 关闭按钮颜色
      'animation-duration-open': '0.35s', // 打开动画时长
      'animation-duration-close': '0.25s', // 关闭动画时长
    },
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
      'date-cell-today-border-color': '#0eaae0', // 日期单元格当日边框颜色
      'range-cell-bg': '#e6f4ff', // 范围选择日期单元格背景色
      'time-input-height': '28px', // 时间输入框高度
      'time-input-font-size': '12px', // 时间输入框字体大小
      'time-separator-color': '#999', // 时间选择器中的分隔符颜色
      'footer-height': '40px', // 日期选择器页脚高度
      'footer-bg': '#f8fafc', // 日期选择器页脚背景色
      'footer-padding': '0 12px', // 日期选择器页脚内边距
      gap: '8px', // 日期选择器内部间距
    },
  },
};

export default vars;
