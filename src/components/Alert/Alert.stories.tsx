import React from 'react';
import Alert from './Alert';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';

/**
 * Alert 全局提示组件
 *
 * - 使用场景：向用户展示重要的操作结果或反馈信息
 * - 显示系统级别的通知或警告
 * - 支持四种类型：success（成功）、warning（警告）、error（错误）、info（信息）
 * - 支持标题和描述两层信息结构
 * - 可以手动关闭提示
 */
const meta: Meta<typeof Alert> = {
  title: '反馈（Feedback）/Alert',
  component: Alert,
  tags: ['autodocs'],
  // 添加装饰器为 Alert 组件设置固定宽度，便于在 Storybook 中预览
  decorators: [
    (Story: StoryFn) => (
      <div style={{ width: '100%', maxWidth: 600 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Alert>;

/**
 * 基础使用 - 仅展示消息
 */
export const Default: Story = {
  name: '默认（信息）',
  args: {
    type: 'info',
    message: '这是一条信息提示',
  },
};

/**
 * 成功类型的提示
 * 常用于表示操作成功、数据保存成功等场景
 */
export const Success: Story = {
  name: '成功',
  args: {
    type: 'success',
    title: '操作成功',
    message: '您的操作已完成，数据已正确保存。',
    closable: true,
  },
};

/**
 * 警告类型的提示
 * 常用于提醒用户注意某些重要信息或潜在风险
 */
export const Warning: Story = {
  name: '警告',
  args: {
    type: 'warning',
    title: '请注意',
    message: '这个操作可能会影响您的数据，请确认后继续。',
    closable: true,
  },
};

/**
 * 错误类型的提示
 * 常用于显示操作失败、验证错误等错误信息
 */
export const Error: Story = {
  name: '错误',
  args: {
    type: 'error',
    title: '操作失败',
    message: '由于网络连接问题，您的操作无法完成。请检查网络设置后重试。',
    closable: true,
  },
};

/**
 * 信息类型的提示
 * 常用于显示一般性的信息、提示或说明
 */
export const Info: Story = {
  name: '信息',
  args: {
    type: 'info',
    title: '提示信息',
    message: '系统将在今晚 10 点进行定期维护，期间可能会影响您的使用。',
    closable: true,
  },
};

/**
 * 仅显示消息，不显示标题
 * 适合简短的提示信息
 */
export const MessageOnly: Story = {
  name: '仅消息（无标题）',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div>
        <div style={{ fontSize: 12, color: '#666', marginBottom: 8 }}>成功</div>
        <Alert type="success" message="操作成功" closable />
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#666', marginBottom: 8 }}>警告</div>
        <Alert type="warning" message="请确认您的操作" closable />
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#666', marginBottom: 8 }}>错误</div>
        <Alert type="error" message="发生了一个错误" closable />
      </div>
    </div>
  ),
};

/**
 * 标题和消息都显示
 * 用于显示更详细的信息结构
 */
export const WithTitleAndMessage: Story = {
  name: '标题和消息',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <div style={{ fontSize: 12, color: '#666', marginBottom: 8 }}>成功：两级信息</div>
        <Alert type="success" title="保存成功" message="您的个人资料已更新，更改将在下一次登录时生效。" closable />
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#666', marginBottom: 8 }}>错误：两级信息</div>
        <Alert type="error" title="验证失败" message="请确保邮箱地址正确，然后重新尝试提交表单。" closable />
      </div>
    </div>
  ),
};

/**
 * 紧凑模式
 * 减少内边距，适合空间受限的场景（如工具栏、表单旁注）
 */
export const Compact: Story = {
  name: '紧凑模式',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div>
        <div style={{ fontSize: 12, color: '#666', marginBottom: 8 }}>标准模式</div>
        <Alert type="info" message="这是标准模式的提示信息" closable />
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#666', marginBottom: 8 }}>紧凑模式</div>
        <Alert type="info" message="这是紧凑模式的提示信息" closable compact />
      </div>
    </div>
  ),
};

/**
 * 无左侧边框和图标
 * 当不需要左侧颜色条和图标时可以使用
 */
export const NoBorder: Story = {
  name: '无左侧边框和图标',
  args: {
    type: 'warning',
    title: '警告',
    message: '这个提示没有左侧的颜色条和图标',
    showBorder: false,
    closable: true,
    showIcon: false,
  },
};

/**
 * 可关闭状态演示
 * 点击关闭按钮将隐藏该提示
 */
export const Closable: Story = {
  name: '可关闭',
  render: () => {
    const [isVisible, setIsVisible] = React.useState(true);

    if (!isVisible) {
      return (
        <div style={{ padding: 12, background: '#f5f5f5', borderRadius: 6 }}>
          <p style={{ margin: 0, color: '#666', fontSize: 14 }}>提示已关闭。（刷新页面重置）</p>
        </div>
      );
    }

    return (
      <Alert
        type="success"
        title="成功提示"
        message="这是一个可以关闭的提示，点击右侧的 × 按钮可以关闭它"
        closable
        onClose={() => setIsVisible(false)}
      />
    );
  },
};

/**
 * 自定义图标
 * 可以使用任意内容替换默认图标
 */
export const CustomIcon: Story = {
  name: '自定义图标',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Alert type="success" title="自定义图标" message="使用 Emoji 作为自定义图标" icon="🎉" closable />
      <Alert type="warning" title="自定义图标" message="使用文本作为自定义图标" icon="!" closable />
      <Alert type="error" title="自定义图标" message="使用特殊符号作为自定义图标" icon="🚫" closable />
    </div>
  ),
};

/**
 * 自定义关闭按钮
 * 可以使用自定义的关闭按钮样式
 */
export const CustomCloseIcon: Story = {
  name: '自定义关闭按钮',
  render: () => {
    const [visible, setVisible] = React.useState(true);

    if (!visible) {
      return <p style={{ color: '#999' }}>已关闭</p>;
    }

    return (
      <Alert
        type="info"
        title="自定义关闭按钮"
        message="这个提示使用自定义的关闭按钮"
        closable
        closeIcon="✕"
        onClose={() => setVisible(false)}
      />
    );
  },
};

/**
 * 长内容处理
 * 演示 Alert 如何处理很长的文本内容
 */
export const LongContent: Story = {
  name: '长内容',
  args: {
    type: 'warning',
    title: '重要通知',
    message:
      '这是一个包含较长内容的提示消息。Alert 组件能够正确地处理多行文本，并确保内容的可读性。当内容超过容器宽度时，文本会自动换行。您可以点击关闭按钮来隐藏此提示。这对于向用户展示详细的操作反馈或系统通知非常有用。',
    closable: true,
  },
};

/**
 * 各类型对比
 * 同时展示所有四种类型的提示，便于对比
 */
export const AllTypes: Story = {
  name: '所有类型对比',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <div style={{ fontSize: 12, color: '#666', marginBottom: 8 }}>信息（info）</div>
        <Alert type="info" title="信息提示" message="这是一条普通的信息提示，用于向用户说明某些情况。" closable />
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#666', marginBottom: 8 }}>成功（success）</div>
        <Alert type="success" title="成功提示" message="操作已成功完成，所有更改都已保存。" closable />
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#666', marginBottom: 8 }}>警告（warning）</div>
        <Alert type="warning" title="警告提示" message="请谨慎处理，此操作可能会对数据造成影响。" closable />
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#666', marginBottom: 8 }}>错误（error）</div>
        <Alert type="error" title="错误提示" message="操作失败，请检查您的输入或网络连接后重试。" closable />
      </div>
    </div>
  ),
};
