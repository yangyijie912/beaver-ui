import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';

/**
 * Checkbox 组件
 * - 使用场景：在多个选项中进行多选
 * - 支持三态显示（选中、未选中、中间态）
 * - 支持禁用状态
 * - 支持自定义标签内容
 */
const meta: Meta<typeof Checkbox> = {
  title: '表单（Form）/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  name: '默认',
  args: {},
};

export const Checked: Story = {
  name: '选中',
  args: { defaultChecked: true },
};

export const WithLabel: Story = {
  name: '带标签',
  args: { label: 'Accept terms' },
};

export const Indeterminate: Story = {
  name: '中间态',
  args: { indeterminate: true },
};

/* 自定义样式示例 */
const customCss = `.custom-checkbox {
  border-color: #16a34a;
}`;

const InputClassNameTemplate = (args: React.ComponentProps<typeof Checkbox>) => (
  <div>
    <style>{customCss}</style>
    <Checkbox inputClassName="custom-checkbox" label="自定义样式" {...args} />
  </div>
);

export const InputClassName: Story = {
  name: '自定义样式',
  render: InputClassNameTemplate,
};

export const Disabled: Story = {
  name: '禁用',
  args: { disabled: true, label: 'Accept terms' },
};
