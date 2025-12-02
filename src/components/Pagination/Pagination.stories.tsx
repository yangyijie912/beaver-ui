import React from 'react';
import Pagination from './Pagination';
import { en } from './locales';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
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

export const WithSizeChanger: Story = {
  name: '带尺寸切换',
  args: {
    total: 123,
    showSizeChanger: true,
  },
};

export const WithQuickJumper: Story = {
  name: '带跳转',
  args: {
    total: 78,
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
      sizeChanger: 94,
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
