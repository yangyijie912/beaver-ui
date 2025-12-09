import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from './Tooltip';
import Button from '../Button/Button';

/**
 * Tooltip 组件
 * - 使用场景：为元素提供简洁的文字提示信息
 * - 支持多种位置（上/下/左/右）
 * - 支持 React 节点内容
 * - 支持 portal 渲染，避免裁切问题
 * - 支持内容为空时不显示 Tooltip
 */
const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Top: Story = {
  name: '上方 (默认)',
  render: () => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: 40 }}>
      <Tooltip content="这是一个提示（上方）">
        <Button variant="primary">Hover me</Button>
      </Tooltip>
    </div>
  ),
};

export const DifferentPlacements: Story = {
  name: '不同位置示例',
  render: () => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: 40 }}>
      <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
        <Tooltip content="左侧提示" placement="left">
          <Button variant="primary">Left</Button>
        </Tooltip>
        <Tooltip content="下方提示" placement="bottom">
          <Button variant="primary">Center</Button>
        </Tooltip>
        <Tooltip content="右侧提示" placement="right">
          <Button variant="primary">Right</Button>
        </Tooltip>
      </div>
    </div>
  ),
};

export const WithReactNode: Story = {
  name: 'React节点内容',
  render: () => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: 40 }}>
      <Tooltip
        content={
          <div>
            <strong style={{ color: 'blue' }}>提示标题</strong>
            <p style={{ margin: 0 }}>这是提示的详细描述，可以包含多行文本和其他 React 节点。</p>
          </div>
        }
        placement="right"
      >
        <Button variant="primary">Hover me</Button>
      </Tooltip>
    </div>
  ),
};
export const PortalComparison: Story = {
  name: 'Portal 对比（裁切与局部样式继承）',
  render: () => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: 24 }}>
      <div
        style={{
          border: '1px dashed #cbd5e1',
          width: 360,
          height: 120,
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // 在容器上设置局部变量，portal=false 的 tooltip 可以继承到这个变量
          ['--beaver-tooltip-bg' as any]: 'orange',
        }}
      >
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: 8 }}>Portal（默认）</div>
            <Tooltip content="这是 portal=true（会渲染到 body，不继承局部变量，且不会被裁切）" placement="top">
              <Button variant="primary">Portal</Button>
            </Tooltip>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: 8 }}>No Portal（portal=false）</div>
            <Tooltip
              content="这是 portal=false（在父容器内渲染，会继承局部变量，并可能在某些场景被裁切而无法看到）"
              placement="top"
              portal={false}
            >
              <Button variant="primary">In-Place</Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  name: '禁用状态（无内容）',
  render: () => (
    <>
      <p>当content为null/undefined/空字符串时，Tooltip 不显示。</p>
      <div style={{ display: 'flex', justifyContent: 'center', padding: 40 }}>
        <Tooltip content="" placement="top">
          <Button variant="primary">Hover me</Button>
        </Tooltip>
      </div>
    </>
  ),
};
