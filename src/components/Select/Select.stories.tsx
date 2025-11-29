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
  { label: 'Apricot', value: 'apricot' },
  { label: 'Banana', value: 'banana' },
  { label: 'Blueberry', value: 'blueberry' },
  { label: 'Blackberry', value: 'blackberry' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Cantaloupe', value: 'cantaloupe' },
  { label: 'Date', value: 'date' },
  { label: 'Fig', value: 'fig' },
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

export const Searchable: Story = {
  args: {
    options: sampleOptions,
    placeholder: '搜索并选择水果',
    searchable: true,
  },
};

export const AllowCreateDisabledByDefault: Story = {
  args: {
    options: sampleOptions,
    placeholder: '默认不允许创建',
    searchable: true,
  },
};

export const AllowCreate: Story = {
  args: {
    options: sampleOptions,
    placeholder: '输入不存在的项并回车创建',
    searchable: true,
    allowCreate: true,
  },
};

export const AllowCreateControlled: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Controlled: 可以创建',
    searchable: true,
    allowCreate: true,
  },
  render: (args: React.ComponentProps<typeof Select>) => {
    const [val, setVal] = React.useState<string | undefined>(undefined);
    return (
      <div style={{ width: 360 }}>
        <Select
          {...args}
          value={val}
          onChange={(v) => setVal(Array.isArray(v) ? (v[0] as string | undefined) : (v as string | undefined))}
        />
        <div style={{ marginTop: 12 }}>当前值: {String(val)}</div>
      </div>
    );
  },
};

export const Controlled: Story = {
  args: {
    options: sampleOptions,
    placeholder: '请选择',
  },
  render: (args: React.ComponentProps<typeof Select>) => {
    const [val, setVal] = React.useState<string | undefined>('banana');
    return (
      <div style={{ width: 320 }}>
        <Select
          {...args}
          value={val}
          onChange={(v) => setVal(Array.isArray(v) ? (v[0] as string | undefined) : (v as string | undefined))}
        />
        <div style={{ marginTop: 12 }}>当前值: {val}</div>
      </div>
    );
  },
};

export const CustomIcon: Story = {
  render: (args: React.ComponentProps<typeof Select>) => {
    // 更明显不同的图标：圆环外框 + 向下实心 caret，视觉上与默认 chevron 区分明显
    const MyArrow = (
      <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 10.5l4 4 4-4" fill="currentColor" />
      </svg>
    );
    return (
      <div style={{ width: 320 }}>
        <Select {...args} options={sampleOptions} placeholder="自定义图标" icon={MyArrow} />
      </div>
    );
  },
};

export const CustomLoadingAndOffset: Story = {
  render: (args: React.ComponentProps<typeof Select>) => {
    const MySpinner = (
      <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" fill="none" />
        <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 12 12"
            to="360 12 12"
            dur="0.9s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    );

    return (
      <div
        style={{
          width: 320,
          ['--beaver-select-arrow-offset' as any]: '1px',
        }}
      >
        <Select {...args} options={sampleOptions} placeholder="加载中（自定义）" loading loadingIcon={MySpinner} />
      </div>
    );
  },
};

export const Multiple: Story = {
  args: {
    options: sampleOptions,
    placeholder: '请选择多个水果',
    multiple: true,
    searchable: false,
    allowCreate: false
  },
  render: (args: React.ComponentProps<typeof Select>) => {
    const [val, setVal] = React.useState<string[] | undefined>(['apple', 'banana']);
    return (
      <div style={{ width: 420 }}>
        <Select {...args} value={val} onChange={(v) => setVal(Array.isArray(v) ? v : v ? [v] : [])} />
        <div style={{ marginTop: 12 }}>当前值: {JSON.stringify(val)}</div>
      </div>
    );
  },
};
