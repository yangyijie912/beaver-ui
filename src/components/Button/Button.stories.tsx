import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

/**
 * Button 组件
 * - 使用场景：触发用户操作或事件
 * - 支持样式变体（主要、幽灵、链接）
 * - 支持不同尺寸（小、中、大）
 * - 支持颜色变体（主色、危险色）
 * - 支持禁用状态和加载状态
 * - 支持自定义内容（文本、图标等）
 */
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'text',
      description: "按钮颜色，支持 'primary'、'danger' 或任意 CSS 颜色值",
    },
  },
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
 * - 粉色背景用于突出幽灵按钮
 */
export const Variants: Story = {
  name: '变体',
  render: (args: ButtonArgs) => (
    <>
      <p>不同背景色下的按钮展示</p>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', width: 400, height: 100 }}>
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
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', width: 400, height: 100, background: 'pink' }}>
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
    </>
  ),
};

/**
 * 提供了默认的颜色选项：primary、danger
 */
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

export const Loading: Story = {
  name: '加载中',
  args: { children: 'Loading', loading: true, variant: 'primary' },
};
