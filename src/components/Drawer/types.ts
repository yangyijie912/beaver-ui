import React from 'react';

/**
 * 抽屉的展示方向类型
 * - left: 从左侧弹出
 * - right: 从右侧弹出
 * - top: 从顶部弹出
 * - bottom: 从底部弹出
 */
export type DrawerPlacement = 'left' | 'right' | 'top' | 'bottom';

/**
 * 抽屉的尺寸预设类型
 * - small: 小尺寸（240px/竖向）
 * - medium: 中等尺寸（360px/竖向）
 * - large: 大尺寸（520px/竖向）
 */
export type DrawerSize = 'small' | 'medium' | 'large';

export interface DrawerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** 控制Drawer是否打开  */
  open: boolean;

  /** 关闭Drawer时的回调 */
  onClose?: () => void;

  /** Drawer标题 */
  title?: React.ReactNode;

  /**
   * Drawer的宽度（水平方向）或高度（竖向方向），可以是px单位或百分比
   * 当placement为 'left' 或 'right' 时，此值作为宽度
   * 当placement为 'top' 或 'bottom' 时，此值作为高度
   */
  width?: number | string;

  /**
   * Drawer的展示方向
   * @default 'right'
   */
  placement?: DrawerPlacement;

  /**
   * Drawer的大小预设（仅在未指定 width 时生效）
   * - small: 240px
   * - medium: 360px
   * - large: 520px
   * @default 'medium'
   */
  size?: DrawerSize;

  /**
   * 是否显示关闭按钮
   * @default true
   */
  closable?: boolean;

  /**
   * 点击遮罩是否关闭Drawer
   * @default true
   */
  maskClosable?: boolean;

  /** Drawer的内容 */
  children?: React.ReactNode;

  /**
   * Drawer页脚，可以放置按钮等操作元素
   * 设为 null 或 false 时不显示页脚
   */
  footer?: React.ReactNode | null | false;

  /** 自定义className */
  className?: string;

  /** 自定义遮罩className */
  maskClassName?: string;

  /** 自定义内容className */
  contentClassName?: string;

  /**
   * Drawer距离视口边缘的间距（用于非全屏模式）
   * @default 0
   */
  offset?: number;

  /**
   * 遮罩是否可见
   * @default true
   */
  mask?: boolean;
}

/**
 * Drawer句柄接口，通过ref获取
 */
export type DrawerHandle = {
  /**
   * 打开Drawer
   */
  open: () => void;

  /**
   * 关闭Drawer
   */
  close: () => void;
};
