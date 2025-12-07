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

/* ===== 前后缀对齐检查 ===== */
/* 检查前后缀与输入框的对齐情况 */

export const SizesWithPrefixAndSuffix: Story = {
  name: '前后缀 - 尺寸对比',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>Small 尺寸</h3>
        <Input size="small" placeholder="输入用户名" prefix="👤" suffix="✓" defaultValue="example" />
      </div>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>Medium 尺寸</h3>
        <Input size="medium" placeholder="输入邮箱" prefix="📧" suffix="@example.com" defaultValue="user" />
      </div>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>Large 尺寸</h3>
        <Input size="large" placeholder="输入电话号码" prefix="📱" suffix="+86" defaultValue="138-xxxx-xxxx" />
      </div>
    </div>
  ),
};

export const SizesWithClearButton: Story = {
  name: '清除按钮 - 尺寸对比',
  render: () => {
    const [smallValue, setSmallValue] = React.useState('small');
    const [mediumValue, setMediumValue] = React.useState('medium');
    const [largeValue, setLargeValue] = React.useState('large');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>Small 清除按钮</h3>
          <Input
            size="small"
            value={smallValue}
            onChange={(e) => setSmallValue((e as any).target.value)}
            allowClear
            placeholder="输入内容"
          />
        </div>
        <div>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>Medium 清除按钮</h3>
          <Input
            size="medium"
            value={mediumValue}
            onChange={(e) => setMediumValue((e as any).target.value)}
            allowClear
            placeholder="输入内容"
          />
        </div>
        <div>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>Large 清除按钮</h3>
          <Input
            size="large"
            value={largeValue}
            onChange={(e) => setLargeValue((e as any).target.value)}
            allowClear
            placeholder="输入内容"
          />
        </div>
      </div>
    );
  },
};

export const SizesWithPrefixAndError: Story = {
  name: '前缀 + 错误状态',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>Small</h3>
        <Input size="small" validation="error" placeholder="输入金额" prefix="¥" />
      </div>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>Medium</h3>
        <Input size="medium" validation="error" placeholder="输入金额" prefix="¥" />
      </div>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>Large</h3>
        <Input size="large" validation="error" placeholder="输入金额" prefix="¥" />
      </div>
    </div>
  ),
};

export const SizesWithSuffixAndSuccess: Story = {
  name: '后缀 + 成功状态',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>Small</h3>
        <Input size="small" validation="success" defaultValue="example" placeholder="输入用户名" suffix="✓" />
      </div>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>Medium</h3>
        <Input size="medium" validation="success" defaultValue="example" placeholder="输入用户名" suffix="✓" />
      </div>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>Large</h3>
        <Input size="large" validation="success" defaultValue="example" placeholder="输入用户名" suffix="✓" />
      </div>
    </div>
  ),
};
