import React from 'react';
import Input from './Input';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  // 加一个装饰器设置全局默认宽度为 300px，方便在 Storybook 中预览
  decorators: [
    (Story: StoryFn) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  name: '默认',
  args: { placeholder: 'Type here' },
};

export const WithValue: Story = {
  name: '有值',
  args: { defaultValue: 'Hello' },
};

export const Disabled: Story = {
  name: '禁用',
  args: { placeholder: 'Disabled', disabled: true },
};

export const Error: Story = {
  name: '错误',
  args: { placeholder: 'Error', validation: 'error' },
};

export const Success: Story = {
  name: '成功',
  args: { placeholder: 'Success', validation: 'success', defaultValue: 'Valid input' },
};

export const Textarea: Story = {
  name: '多行',
  args: { textarea: true, placeholder: 'Type here...' },
};

export const Sizes: Story = {
  name: '尺寸',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Input size="small" placeholder="Small" />
      <Input size="medium" placeholder="Medium" />
      <Input size="large" placeholder="Large" />
    </div>
  ),
};

export const WithSuffix: Story = {
  name: '带后置内容',
  args: {
    placeholder: '输入日期',
    suffix: '📅',
    defaultValue: '2024-01-15',
  },
};

export const WithPrefix: Story = {
  name: '带前置内容',
  args: {
    placeholder: '输入价格',
    prefix: '¥',
  },
};

export const WithPrefixAndSuffix: Story = {
  name: '前置和后置内容',
  args: {
    placeholder: '输入URL',
    prefix: '🔗',
    suffix: '.com',
  },
};

export const WithClearButton: Story = {
  name: '可清除输入框',
  render: () => {
    const [value, setValue] = React.useState('hello');
    return (
      <Input value={value} onChange={(e) => setValue((e as any).target.value)} allowClear placeholder="输入文本" />
    );
  },
};
