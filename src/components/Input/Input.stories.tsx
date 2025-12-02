import React from 'react';
import Input from './Input';
import type { Meta, StoryFn } from '@storybook/react';

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

export const Default = {
  name: '默认',
  args: { placeholder: 'Type here' },
};

export const WithValue = {
  name: '有值',
  args: { defaultValue: 'Hello' },
};

export const Disabled = {
  name: '禁用',
  args: { placeholder: 'Disabled', disabled: true },
};

export const Error = {
  name: '错误',
  args: { placeholder: 'Error', validation: 'error' },
};

export const Textarea = {
  name: '多行',
  args: { textarea: true, placeholder: 'Type here...' },
};
