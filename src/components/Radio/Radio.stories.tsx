import React from 'react';
import Radio from './Radio';
import RadioGroup from './RadioGroup';

export default {
  title: 'Components/Radio',
  component: Radio,
};

export const Default = {
  args: {},
};

export const Checked = {
  args: { defaultChecked: true },
};

export const WithLabel = {
  args: { label: 'Option A' },
};

export const Disabled = {
  args: { disabled: true, label: 'Option (disabled)' },
};

export const InputClassName = {
  args: { inputClassName: 'custom-radio', label: 'Custom input class' },
};

export const GroupUncontrolled = {
  render: () => (
    <RadioGroup defaultValue="b">
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
      <Radio value="c" label="Option C" />
    </RadioGroup>
  ),
};

export const GroupControlled = {
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
  render: () => (
    <RadioGroup defaultValue="a" disabled>
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
    </RadioGroup>
  ),
};

export const NameBased = {
  render: () => (
    <div>
      <Radio name="plain" value="1" label="One" />
      <Radio name="plain" value="2" label="Two" />
    </div>
  ),
};

export const GroupVertical = {
  render: () => (
    <RadioGroup defaultValue="a" vertical>
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
      <Radio value="c" label="Option C" />
    </RadioGroup>
  ),
};

export const GroupVerticalControlled = {
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
