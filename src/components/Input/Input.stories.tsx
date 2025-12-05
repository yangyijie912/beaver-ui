import Input from './Input';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
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

export const Textarea: Story = {
  name: '多行',
  args: { textarea: true, placeholder: 'Type here...' },
};
