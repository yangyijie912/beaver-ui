import React from 'react';
import Pagination from './Pagination';
import { en } from './locales';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    total: 234,
  },
};

export const WithSizeChanger: Story = {
  args: {
    total: 123,
    showSizeChanger: true,
  },
};

export const WithQuickJumper: Story = {
  args: {
    total: 78,
    showQuickJumper: true,
  },
};

export const WithEnglish: Story = {
  args: {
    total: 150,
    showQuickJumper: true,
    showSizeChanger: true,
    locale: en,
  },
};

export const Controlled: Story = {
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
