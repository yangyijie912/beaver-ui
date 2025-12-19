import React from 'react';
import Tag from './Tag';
import { Check, Warning, Info, Trash } from '../../icons';
import type { Meta, StoryObj } from '@storybook/react';

/**
 * Tag 组件
 * - 使用场景：标记和分类内容
 * - 支持多种类型（主色、成功、警告、错误、默认）
 * - 支持多种变体（实心、边框、浅色）
 * - 支持多种尺寸（小、中、大）
 * - 支持可关闭标签
 * - 支持禁用状态
 * - 支持自定义图标
 */
const meta: Meta<typeof Tag> = {
  title: '数据展示（Data Display）/Tag',
  component: Tag,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tag>;

/**
 * 基本使用
 */
export const Default: Story = {
  name: '默认',
  args: { children: '标签' },
};

/**
 * 不同类型展示
 * - primary: 主色调，用于突出重要信息
 * - success: 成功状态，通常用于标记已完成项目
 * - warning: 警告状态，用于标记需要注意的项目
 * - error: 错误状态，用于标记失败或有问题的项目
 * - default: 默认类型，用于普通分类
 */
export const Types: Story = {
  name: '类型',
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Tag type="default">默认</Tag>
      <Tag type="primary">主色调</Tag>
      <Tag type="success">成功</Tag>
      <Tag type="warning">警告</Tag>
      <Tag type="error">错误</Tag>
    </div>
  ),
};

/**
 * 不同变体展示
 * - solid: 实心填充，最常用
 * - outline: 边框样式，适合浅色背景
 * - light: 浅色背景，柔和的表现形式
 */
export const Variants: Story = {
  name: '变体',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>实心 (solid)</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Tag variant="solid" type="default">
            默认
          </Tag>
          <Tag variant="solid" type="primary">
            主色调
          </Tag>
          <Tag variant="solid" type="success">
            成功
          </Tag>
          <Tag variant="solid" type="warning">
            警告
          </Tag>
          <Tag variant="solid" type="error">
            错误
          </Tag>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>边框 (outline)</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Tag variant="outline" type="default">
            默认
          </Tag>
          <Tag variant="outline" type="primary">
            主色调
          </Tag>
          <Tag variant="outline" type="success">
            成功
          </Tag>
          <Tag variant="outline" type="warning">
            警告
          </Tag>
          <Tag variant="outline" type="error">
            错误
          </Tag>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>浅色 (light)</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Tag variant="light" type="default">
            默认
          </Tag>
          <Tag variant="light" type="primary">
            主色调
          </Tag>
          <Tag variant="light" type="success">
            成功
          </Tag>
          <Tag variant="light" type="warning">
            警告
          </Tag>
          <Tag variant="light" type="error">
            错误
          </Tag>
        </div>
      </div>
    </div>
  ),
};

/**
 * 不同尺寸展示
 * - small: 紧凑型，用于标签列表等空间受限的场景
 * - medium: 标准型（默认），最常用的尺寸
 * - large: 宽松型，用于突出的标签
 */
export const Sizes: Story = {
  name: '尺寸',
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ fontSize: '12px', color: '#666' }}>小 (small)</div>
        <Tag size="small">小标签</Tag>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ fontSize: '12px', color: '#666' }}>中 (medium)</div>
        <Tag size="medium">中标签</Tag>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ fontSize: '12px', color: '#666' }}>大 (large)</div>
        <Tag size="large">大标签</Tag>
      </div>
    </div>
  ),
};

/**
 * 可关闭的标签
 * 通过设置 closable=true 和 onClose 回调来实现关闭功能
 */
export const Closable: Story = {
  name: '可关闭',
  render: () => {
    const [visible, setVisible] = React.useState(true);
    const handleClose = () => setVisible(false);

    if (!visible) {
      return (
        <button
          onClick={() => setVisible(true)}
          style={{
            padding: '4px 12px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          显示标签
        </button>
      );
    }

    return (
      <Tag closable onClose={handleClose} type="primary">
        {'\t'}可关闭的标签
      </Tag>
    );
  },
};

/**
 * 带图标的标签
 * 使用库中的 Icon 组件，图标和文字会自动垂直居中
 */
export const WithIcon: Story = {
  name: '带图标',
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Tag icon={<Check width={14} height={14} />} type="success">
        成功完成
      </Tag>
      <Tag icon={<Warning width={14} height={14} />} type="warning">
        需要注意
      </Tag>
      <Tag icon={<Info width={14} height={14} />} type="primary">
        信息提示
      </Tag>
      <Tag icon={<Trash width={14} height={14} />} type="error">
        删除
      </Tag>
    </div>
  ),
};

/**
 * 禁用状态
 */
export const Disabled: Story = {
  name: '禁用',
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Tag disabled>禁用标签</Tag>
      <Tag disabled type="primary">
        禁用主色
      </Tag>
      <Tag disabled closable>
        禁用可关闭
      </Tag>
    </div>
  ),
};

/**
 * 组合示例：不同大小和类型的组合
 */
export const Combined: Story = {
  name: '组合示例',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>标签云示例</h3>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          <Tag size="small" type="primary">
            React
          </Tag>
          <Tag size="small" type="primary" variant="light">
            TypeScript
          </Tag>
          <Tag size="small" type="success">
            完成
          </Tag>
          <Tag size="small" type="warning">
            进行中
          </Tag>
          <Tag size="small" type="default" variant="outline">
            标签1
          </Tag>
          <Tag size="small" type="default" variant="outline">
            标签2
          </Tag>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>状态指示示例</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Tag icon={<Check width={14} height={14} />} type="success" variant="light">
            已发布
          </Tag>
          <Tag icon={<Info width={14} height={14} />} type="warning" variant="light">
            待审核
          </Tag>
          <Tag icon={<Trash width={14} height={14} />} type="error" variant="light">
            已拒绝
          </Tag>
          <Tag icon={<Info width={14} height={14} />} type="primary" variant="light">
            草稿
          </Tag>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>可删除列表示例</h3>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          <Tag closable type="primary">
            热门话题 #1
          </Tag>
          <Tag closable type="primary">
            热门话题 #2
          </Tag>
          <Tag closable type="primary">
            热门话题 #3
          </Tag>
        </div>
      </div>
    </div>
  ),
};

/**
 * 边框样式的不同大小
 */
export const OutlineSizes: Story = {
  name: '边框样式各尺寸',
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Tag size="small" variant="outline" type="primary">
        小
      </Tag>
      <Tag size="medium" variant="outline" type="primary">
        中
      </Tag>
      <Tag size="large" variant="outline" type="primary">
        大
      </Tag>
    </div>
  ),
};

/**
 * 浅色样式的不同大小
 */
export const LightSizes: Story = {
  name: '浅色样式各尺寸',
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Tag size="small" variant="light" type="success">
        小
      </Tag>
      <Tag size="medium" variant="light" type="success">
        中
      </Tag>
      <Tag size="large" variant="light" type="success">
        大
      </Tag>
    </div>
  ),
};

/**
 * 自定义颜色
 * 通过 customColor 属性可以完全自定义标签的背景色、文字色和边框色
 */
export const CustomColor: Story = {
  name: '自定义颜色',
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Tag customColor={{ bg: '#ff6b6b', text: '#fff', border: '#ff6b6b' }}>自定义红色</Tag>
      <Tag customColor={{ bg: '#4ecdc4', text: '#fff', border: '#4ecdc4' }}>自定义青色</Tag>
      <Tag customColor={{ bg: '#ffe66d', text: '#333', border: '#ffd700' }}>自定义黄色</Tag>
      <Tag customColor={{ bg: '#c7ceea', text: '#333', border: '#b0a7db' }}>自定义紫色</Tag>
      <Tag icon={<Check width={14} height={14} />} customColor={{ bg: '#95e1d3', text: '#333', border: '#76cfc0' }}>
        带图标自定义
      </Tag>
    </div>
  ),
};

/**
 * 自定义颜色 + 可关闭
 */
export const CustomColorClosable: Story = {
  name: '自定义颜色可关闭',
  render: () => {
    const [visible, setVisible] = React.useState(true);

    if (!visible) {
      return (
        <button
          onClick={() => setVisible(true)}
          style={{
            padding: '4px 12px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          显示标签
        </button>
      );
    }

    return (
      <Tag closable onClose={() => setVisible(false)} customColor={{ bg: '#667eea', text: '#fff', border: '#667eea' }}>
        自定义可关闭标签
      </Tag>
    );
  },
};
