import React from 'react';
import Select from './Select';
import type { Meta, StoryObj } from '@storybook/react';
import type { SelectOption } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

const sampleOptions: SelectOption[] = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
];

export const Default: Story = {
  args: {
    options: sampleOptions,
    placeholder: '请选择一个水果',
  },
};

export const Disabled: Story = {
  args: {
    options: sampleOptions,
    disabled: true,
  },
};

export const WithDisabledOption: Story = {
  args: {
    options: [
      { label: '请选择', value: '', disabled: true },
      { label: '自定义项 X', value: 'x' },
      { label: '自定义项 Y', value: 'y' },
    ],
  },
};

export const Small: Story = {
  args: {
    options: sampleOptions,
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    options: sampleOptions,
    size: 'large',
  },
};

export const Loading: Story = {
  args: {
    options: sampleOptions,
    placeholder: '加载中...',
    loading: true,
  },
};

export const Controlled: Story = {
  render: (args: React.ComponentProps<typeof Select>) => {
    const [val, setVal] = React.useState<string | undefined>('banana');
    return (
      <div style={{ width: 320 }}>
        <Select {...args} value={val} onChange={(v) => setVal(v)} />
        <div style={{ marginTop: 12 }}>当前值: {val}</div>
      </div>
    );
  },
};
