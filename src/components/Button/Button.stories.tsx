import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  name: '默认按钮',
  args: { children: 'Default' },
};

export const Primary: Story = {
  name: '主按钮',
  args: { children: 'Primary', variant: 'primary', color: 'primary' },
};

export const Ghost: Story = {
  name: '幽灵',
  args: { children: 'Ghost', variant: 'ghost', color: 'primary' },
};

export const Link: Story = {
  name: '链接样式',
  args: { children: 'Link', variant: 'link', color: 'primary' },
};

export const Danger: Story = {
  name: '颜色：危险色',
  args: { children: 'Danger', variant: 'primary', color: 'danger' },
};

export const Disabled: Story = {
  name: '禁用',
  args: { children: 'Disabled', disabled: true },
};

export const CustomColor: Story = {
  name: '自定义颜色',
  args: { children: 'Custom Color', color: 'green' },
};

// 不同尺寸的组合演示
export const SizeVariants: Story = {
  name: '尺寸变体组合',
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
};
