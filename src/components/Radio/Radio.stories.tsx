import React from 'react';
import Radio from './Radio';
import RadioGroup from './RadioGroup';

export default {
  title: 'Components/Radio',
  component: Radio,
};

export const Default = {
  name: '默认',
  args: {},
};

export const Checked = {
  name: '选中',
  args: { defaultChecked: true },
};

export const WithLabel = {
  name: '带标签',
  args: { label: 'Option A' },
};

export const Disabled = {
  name: '禁用',
  args: { disabled: true, label: 'Option (disabled)' },
};

export const InputClassName = {
  name: '输入类名',
  args: { inputClassName: 'custom-radio', label: 'Custom input class' },
};

export const GroupUncontrolled = {
  name: '分组（非受控）',
  render: () => (
    <RadioGroup defaultValue="b">
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
      <Radio value="c" label="Option C" />
    </RadioGroup>
  ),
};

export const GroupControlled = {
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

export const GroupDisabled = {
  name: '分组（禁用）',
  render: () => (
    <RadioGroup defaultValue="a" disabled>
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
    </RadioGroup>
  ),
};

export const NameBased = {
  name: '基于 name',
  render: () => (
    <div>
      <Radio name="plain" value="1" label="One" />
      <Radio name="plain" value="2" label="Two" />
    </div>
  ),
};

export const GroupVertical = {
  name: '分组（垂直）',
  render: () => (
    <RadioGroup defaultValue="a" vertical>
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
      <Radio value="c" label="Option C" />
    </RadioGroup>
  ),
};

export const GroupVerticalControlled = {
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
