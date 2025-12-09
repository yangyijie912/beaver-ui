import React from 'react';

/**
 * Popconfirm 组件的 Props 类型定义
 */
export type PopconfirmProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> & {
  /**  用于触发 popconfirm 显示的子元素 */
  children: React.ReactElement;

  /**  控制 Popconfirm 是否打开  */
  open?: boolean;

  /** Popconfirm 打开时的回调 */
  onOpenChange?: (open: boolean) => void;

  /** * Popconfirm 的标题文本 */
  title: React.ReactNode;

  /**  Popconfirm 的描述文本，位于标题下方 */
  description?: React.ReactNode;

  /**  确认按钮文本，默认为 "确定" */
  okText?: React.ReactNode;

  /**  取消按钮文本，默认为 "取消" */
  cancelText?: React.ReactNode;

  /**  确认按钮的样式变体，默认为 'primary' */
  okVariant?: 'primary' | 'ghost';

  /**  取消按钮的样式变体，默认为 'ghost' */
  cancelVariant?: 'primary' | 'ghost';

  /**  点击确认按钮时的回调 */
  onConfirm?: (e?: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;

  /**  点击取消按钮时的回调 */
  onCancel?: (e?: React.MouseEvent<HTMLButtonElement>) => void;

  /**  是否在点击遮罩时关闭 popconfirm，默认为 true */
  maskClosable?: boolean;

  /**  是否显示遮罩，默认为 false */
  showMask?: boolean;

  /**
   * Popconfirm 出现的位置，默认为 'top'
   * top: 顶部
   * bottom: 底部
   * left: 左侧
   * right: 右侧
   */
  placement?: 'top' | 'bottom' | 'left' | 'right';

  /**  自定义 popconfirm 内容区域的 className */
  contentClassName?: string;

  /**  自定义遮罩的 className */
  maskClassName?: string;

  /**  禁用确认按钮，默认为 false */
  okDisabled?: boolean;

  /**  是否显示加载状态（确认按钮会显示加载中），默认为 false */
  okLoading?: boolean;
};
