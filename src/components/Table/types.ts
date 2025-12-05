import React from 'react';

/**
 * 表格列类型定义
 *
 * - `key`: 列的唯一标识，用于渲染和列宽/偏移计算
 * - `title`: 列头显示文本
 * - `width`: 可选宽度字符串（支持 'px' 与 '%'），用于固定或按比例布局
 * - `align`: 单元格文本对齐方式
 * - `render`: 自定义单元格渲染函数（优先于全局 `renderCell`）
 * - `span`: 返回单元格的合并信息（colSpan / rowSpan），用于合并单元格
 */
export type Column = {
  key: string;
  title: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
  render?: (value: any, row: Row, rowIndex: number, column: Column) => React.ReactNode | null | undefined;
  span?: (row: Row, rowIndex: number, column: Column) => { colSpan?: number; rowSpan?: number } | undefined;
};

/**
 * 行数据的最通用表示：键值对（列 key -> 值）
 */
export type Row = Record<string, any>;

/**
 * Table 组件的 props 定义
 */
export type Props = {
  /** 列定义 */
  columns: Column[];
  /** 行数据 */
  data: Row[];
  /** 行唯一标识字段 */
  rowKey?: string;
  /** 默认列对齐方式，列自身未配置 align 时使用 */
  defaultAlign?: 'left' | 'center' | 'right';
  /** 是否展示行前的复选框（默认 false） */
  showCheckbox?: boolean;
  /** 受控选中 keys（可选） */
  selectedKeys?: string[];
  /** 选中变化回调（受控或非受控时都会触发） */
  onSelectionChange?: (keys: string[]) => void;
  /** 可选的单元格渲染器：如果返回非 null/undefined，则使用其结果作为单元格内容 */
  renderCell?: (row: Row, column: Column, rowIndex: number) => React.ReactNode | null | undefined;
  /**
   * 当混合使用 px 与 百分比/未设置宽度时，是否保证 px 列的最小宽度，且尽量避免滚动（默认 true）。
   * 为 true 时，只有当 px 列总宽超过容器时才触发横向滚动，否则 px 列作为最小宽保留，百分比列保持弹性分配。
   * 为 false 时，则按常规逻辑：只要包含 px 列且总宽超出容器就触发横向滚动。
   */
  preservePxAsMin?: boolean;
  /** 未指定或无法换算宽度时的保守最小像素（默认 80） */
  minColumnPx?: number;
  /** 是否固定表头，默认 false */
  fixedHeader?: boolean;
  /** 表头距离容器顶部的偏移（例如有上方工具栏时），默认 0 */
  headerOffset?: number;
  /** 表格容器最大高度，设置后启用纵向滚动以配合粘性表头。示例：300 或 '50vh' */
  maxHeight?: number | string;
  /** 固定左侧的列数量（不含复选框列），默认 0。
   * 注意：固定列数量之和要小于总列数，否则为了避免重叠，超出时会自动禁用固定列；
   * 且当固定列宽度之和超过容器宽度时也会自动禁用固定列并打印警告。
   */
  fixedColumnCount?: number;
  /** 固定右侧的列数量，默认 0。
   * 注意：固定列数量之和要小于总列数，否则为了避免重叠，超出时会自动禁用固定列；
   * 且当固定列宽度之和超过容器宽度时也会自动禁用固定列并打印警告。
   */
  fixedRightCount?: number;
  /** 是否展示边框线，默认不展示 */
  border?: boolean;
  /** 自定义空状态：优先使用该 prop（ReactNode） */
  empty?: React.ReactNode;
  /** 空状态默认文案（当未提供 `empty` 时使用） */
  emptyText?: React.ReactNode;
};

/**
 * 计算后列宽表示：仅携带 key 与计算出的 width（如果有）
 */
export type ComputedColumnWidth = { key: string; width?: string };

/**
 * 列宽计算结果
 * - `cols`: 每列的计算宽度（可能包含 '%' 或 'px' 字符串）
 * - `needsHScroll`: 是否需要水平滚动（当固定 px 宽度导致内容超出容器时）
 * - `tableWidth`: 当需要水平滚动时，为表格设置的宽度字符串（例如 '1200px'），否则 undefined
 */
export type ComputedColumnWidthsResult = {
  cols: ComputedColumnWidth[];
  needsHScroll: boolean;
  tableWidth?: string | undefined;
};
