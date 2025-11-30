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
  args: { placeholder: 'Type here' },
};

export const WithValue = {
  args: { defaultValue: 'Hello' },
};

export const Disabled = {
  args: { placeholder: 'Disabled', disabled: true },
};

export const Error = {
  args: { placeholder: 'Error', validation: 'error' },
};

export const Textarea = {
  args: { textarea: true, placeholder: 'Type here...' },
};
