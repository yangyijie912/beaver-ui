import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Radio from './Radio';
import RadioGroup from './RadioGroup';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Radio>;

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
  args: { label: 'Option A' },
};

export const Disabled: Story = {
  name: '禁用',
  args: { disabled: true, label: 'Option (disabled)' },
};

export const InputClassName: Story = {
  name: '输入类名',
  args: { inputClassName: 'custom-radio', label: 'Custom input class' },
};

export const GroupUncontrolled: Story = {
  name: '分组（非受控）',
  render: () => (
    <RadioGroup defaultValue="b">
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
      <Radio value="c" label="Option C" />
    </RadioGroup>
  ),
};

export const GroupControlled: Story = {
  name: '分组（受控）',
  render: () => {
    const Example: React.FC = () => {
      const [val, setVal] = React.useState<string | number>('a');
      return (
        <RadioGroup value={val} onChange={(v) => setVal(v)}>
          <Radio value="a" label={`A (selected: ${val})`} />
          <Radio value="b" label="B" />
          <Radio value="c" label="C" />
        </RadioGroup>
      );
    };
    return <Example />;
  },
};

export const GroupDisabled: Story = {
  name: '分组（禁用）',
  render: () => (
    <RadioGroup defaultValue="a" disabled>
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
    </RadioGroup>
  ),
};

export const NameBased: Story = {
  name: '基于 name',
  render: () => (
    <div>
      <Radio name="plain" value="1" label="One" />
      <Radio name="plain" value="2" label="Two" />
    </div>
  ),
};

export const GroupVertical: Story = {
  name: '分组（垂直）',
  render: () => (
    <RadioGroup defaultValue="a" vertical>
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
      <Radio value="c" label="Option C" />
    </RadioGroup>
  ),
};

export const GroupVerticalControlled: Story = {
  name: '分组（垂直受控）',
  render: () => {
    const Example: React.FC = () => {
      const [val, setVal] = React.useState<string | number>('b');
      return (
        <RadioGroup value={val} onChange={(v) => setVal(v)} vertical>
          <Radio value="a" label="A" />
          <Radio value="b" label={`B (selected: ${val})`} />
          <Radio value="c" label="C" />
        </RadioGroup>
      );
    };
    return <Example />;
  },
};
