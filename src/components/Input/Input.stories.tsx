import React from 'react';
import Input from './Input';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';

/**
 * Input 组件
 * - 使用场景：接收用户的文本输入
 * - 支持多行文本输入（textarea）
 * - 支持输入校验状态（错误、成功）
 * - 支持禁用状态
 * - 支持自定义宽度
 * - 支持前置/后置内容插槽（如图标、清除按钮等）
 * - 支持多种尺寸（small、medium、large）
 */
const meta: Meta<typeof Input> = {
  title: '表单（Form）/Input',
  component: Input,
  tags: ['autodocs'],
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
type InputStoryArgs = React.ComponentProps<typeof Input>;

/**
 * 基本使用，可以通过`width`直接控制输入框宽度
 */
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

export const ValidationStates: Story = {
  name: '校验状态（错误 / 成功 / 警告）',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div>
        <div style={{ fontSize: 12, color: '#666', margin: '0 0 6px 0' }}>错误</div>
        <Input placeholder="Error" validation="error" />
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#666', margin: '0 0 6px 0' }}>成功</div>
        <Input placeholder="Success" validation="success" defaultValue="Valid input" />
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#666', margin: '0 0 6px 0' }}>警告</div>
        <Input placeholder="Warning" validation="warning" />
      </div>
    </div>
  ),
};

/**
 * 可以通过更改rows属性来调整文本域的高度，默认是3行
 */
export const Textarea: Story = {
  name: '文本域',
  args: { textarea: true, rows: 4, placeholder: 'Type here...' },
};

/**
 * 不同尺寸的输入框展示。
 * - small、medium、large 三种尺寸
 * - 如果需要设置原生 input 的 `size` 属性（可见字符数），使用 `htmlSize`。
 */
export const Sizes: Story = {
  name: '尺寸',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Input size="small" placeholder="Small" />
      <Input size="medium" placeholder="Medium" />
      <Input size="large" placeholder="Large" />
    </div>
  ),
};

export const WithSuffix: Story = {
  name: '带后置内容',
  args: {
    placeholder: '输入日期',
    suffix: '📅',
    defaultValue: '2024-01-15',
  },
};

export const WithPrefix: Story = {
  name: '带前置内容',
  args: {
    placeholder: '输入价格',
    prefix: '¥',
  },
};

export const WithPrefixAndSuffix: Story = {
  name: '前置和后置内容',
  args: {
    placeholder: '输入URL',
    prefix: '🔗',
    suffix: '.com',
  },
};

export const WithClearButton: Story = {
  name: '可清除输入框',
  args: {
    value: 'hello',
    placeholder: '输入文本',
    allowClear: true,
  },
  render: (args: InputStoryArgs) => {
    const [value, setValue] = React.useState('hello');
    React.useEffect(() => {
      setValue(typeof args.value === 'string' ? args.value : '');
    }, [args.value]);

    return (
      <Input
        value={value}
        onChange={(e) => setValue((e as any).target.value)}
        allowClear={args.allowClear}
        placeholder={args.placeholder}
      />
    );
  },
};

export const PasswordVariants: Story = {
  name: '密码框示例',
  args: {
    value: 'beaver-ui',
    placeholder: '请输入密码',
    suffix: 'KB',
  },
  render: (args: InputStoryArgs) => {
    const [value, setValue] = React.useState(typeof args.value === 'string' ? args.value : '');

    React.useEffect(() => {
      setValue(typeof args.value === 'string' ? args.value : '');
    }, [args.value]);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div>
          <div style={{ fontSize: 12, color: '#666', marginBottom: 6 }}>带眼睛</div>
          <Input
            type="password"
            value={value}
            onChange={(e) => setValue((e as any).target.value)}
            placeholder={args.placeholder}
            showPasswordToggle
          />
        </div>
        <div>
          <div style={{ fontSize: 12, color: '#666', marginBottom: 6 }}>隐藏眼睛</div>
          <Input
            type="password"
            value={value}
            onChange={(e) => setValue((e as any).target.value)}
            placeholder={args.placeholder}
            showPasswordToggle={false}
          />
        </div>
        <div>
          <div style={{ fontSize: 12, color: '#666', marginBottom: 6 }}>眼睛 + 自定义后缀</div>
          <Input
            type="password"
            value={value}
            onChange={(e) => setValue((e as any).target.value)}
            placeholder={args.placeholder}
            suffix={args.suffix}
            showPasswordToggle
          />
        </div>
      </div>
    );
  },
};

export const SizesWithSuffixAndSuccess: Story = {
  name: '后缀 + 成功状态',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>Small</h3>
        <Input
          size="small"
          validation="success"
          defaultValue="example"
          placeholder="输入用户名"
          suffix="✓"
        />
      </div>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>Medium</h3>
        <Input
          size="medium"
          validation="success"
          defaultValue="example"
          placeholder="输入用户名"
          suffix="✓"
        />
      </div>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>Large</h3>
        <Input
          size="large"
          validation="success"
          defaultValue="example"
          placeholder="输入用户名"
          suffix="✓"
        />
      </div>
    </div>
  ),
};
