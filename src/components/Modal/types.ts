import React from 'react';

export type ModalSize = 'small' | 'medium' | 'large';

export type ModalProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> & {
  /**  控制Modal是否打开 */
  open: boolean;
  /**  关闭Modal时的回调 */
  onClose?: () => void;
  /** 点击确认按钮时的回调 */
  onOk?: () => void;
  /** Modal标题 */
  title?: React.ReactNode;
  /**  Modal的宽度，默认520px  */
  width?: number | string;
  /**  Modal的大小预设：small(300px) / medium(520px) / large(800px) */
  size?: ModalSize;
  /** 是否显示关闭按钮 */
  closable?: boolean;
  /**  点击遮罩是否关闭Modal  */
  maskClosable?: boolean;
  /** Modal的内容 */
  children?: React.ReactNode;
  /**
   * Modal页脚，可以放置按钮等操作元素
   * 设为 null 或 false 时不显示页脚
   * 默认显示带关闭按钮的页脚（仅当 open=true 且 footer 未被明确设置为 false/null 时）
   */
  footer?: React.ReactNode | null | false;
  /** 自定义className */
  className?: string;
  /** 自定义遮罩className  */
  maskClassName?: string;
  /** 自定义内容className */
  contentClassName?: string;
  /** 是否禁用动画 */
  /** `animated` prop 已移除：组件默认启用动画。如需修改动画，请覆盖 CSS 类。 */
};

export type ModalHandle = {
  /**
   * 打开Modal
   */
  open: () => void;
  /**
   * 关闭Modal
   */
  close: () => void;
};
