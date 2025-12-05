import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  name: '主按钮',
  args: { children: 'Primary', variant: 'primary' },
};

export const Ghost: Story = {
  name: '幽灵',
  args: { children: 'Ghost', variant: 'ghost' },
};

export const Disabled: Story = {
  name: '禁用',
  args: { children: 'Disabled', disabled: true },
};

export const Large: Story = {
  name: '大',
  args: { children: 'Large', size: 'large' },
};

export const Medium: Story = {
  name: '中',
  args: { children: 'Medium', size: 'medium' },
};

export const Small: Story = {
  name: '小',
  args: { children: 'Small', size: 'small' },
};
