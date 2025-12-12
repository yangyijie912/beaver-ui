import React from 'react';
import Pagination from './Pagination';
import { en } from './locales';
import type { Meta, StoryObj } from '@storybook/react';

/**
 * Pagination 组件
 * - 使用场景：在数据量较大时，分割数据为多页进行展示和导航
 * - 支持自定义每页条目数
 * - 支持快速跳转到指定页码
 * - 支持禁用状态
 * - 支持国际化文案
 * - 支持对齐方式自定义（左、中、右）
 * - 支持受控和非受控用法
 */
const meta: Meta<typeof Pagination> = {
  title: '导航（Navigation）/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    align: {
      control: { type: 'radio' },
      options: ['left', 'center', 'right'],
      description: 'Alignment of the pagination container',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  name: '默认',
  args: {
    total: 234,
  },
};

/**
 * 展示页数选择器和快速跳转功能
 */
export const WithSizeChangerAndQuickJumper: Story = {
  name: '带页数选择和快速跳转',
  args: {
    total: 123,
    showSizeChanger: true,
    showQuickJumper: true,
  },
};

export const AlignCenter: Story = {
  name: '居中对齐',
  args: {
    total: 100,
    align: 'center',
  },
};

export const AlignRight: Story = {
  name: '右对齐',
  args: {
    total: 100,
    align: 'right',
  },
};

export const WithEnglish: Story = {
  name: '英文',
  args: {
    total: 150,
    showQuickJumper: true,
    showSizeChanger: true,
    locale: en,
    width: {
      sizeChanger: 102,
    },
  },
};

export const Disabled: Story = {
  name: '禁用',
  args: {
    total: 150,
    showQuickJumper: true,
    showSizeChanger: true,
    disabled: true,
  },
};

export const Controlled: Story = {
  name: '受控',
  render: () => {
    const [page, setPage] = React.useState(3);
    return (
      <div>
        <Pagination total={200} current={page} onChange={(p) => setPage(p)} />
        <div style={{ marginTop: 8 }}>当前页: {String(page)}</div>
      </div>
    );
  },
};
