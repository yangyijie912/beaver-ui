import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;
type ButtonArgs = Omit<React.ComponentProps<typeof Button>, 'ref'>;

export const Default: Story = {
  name: '默认按钮',
  args: { children: 'Default' },
};

/**
 * * 按钮的变体
 */
export const Variants: Story = {
  name: '变体演示',
  render: (args: ButtonArgs) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button variant="primary" {...args}>
        Primary
      </Button>
      <Button variant="ghost" {...args}>
        Ghost
      </Button>
      <Button variant="link" {...args}>
        Link
      </Button>
    </div>
  ),
};

export const Danger: Story = {
  name: '颜色：危险色',
  args: { children: 'Danger', variant: 'primary', color: 'danger' },
};

export const CustomColor: Story = {
  name: '自定义颜色',
  args: { children: 'Custom Color', variant: 'primary', color: 'green' },
};

/**
 * 按钮的不同尺寸
 */
export const SizeVariants: Story = {
  args: {
    variant: 'primary',
  },
  name: '尺寸',

  render: (args: ButtonArgs) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button size="small" {...args}>
        Small
      </Button>
      <Button size="medium" {...args}>
        Medium
      </Button>
      <Button size="large" {...args}>
        Large
      </Button>
    </div>
  ),
};

/**
 * 按钮的禁用状态
 */
export const Disabled: Story = {
  name: '禁用',
  args: { children: 'Disabled', disabled: true },
};
