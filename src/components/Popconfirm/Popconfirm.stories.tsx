import type { Meta, StoryObj } from '@storybook/react';
import Popconfirm from './Popconfirm';
import { useState } from 'react';
import Button from '../Button/Button';

/**
 * Popconfirm 组件 - 弹出式确认框
 *
 * - 使用场景： 在执行重要或不可逆操作前，要求用户进行确认，避免误操作
 * - 支持自定义标题和描述文本
 * - 支持确认和取消按钮的文本、样式和禁用状态
 * - 支持异步确认操作，显示加载状态
 * - 支持多种位置（上/下/左/右）
 * - 支持遮罩层和点击遮罩关闭
 */
const meta: Meta<typeof Popconfirm> = {
  title: 'Components/Popconfirm',
  component: Popconfirm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 基础演示 - 最简单的用法
 */
export const Basic: Story = {
  name: '基础用法',
  render: () => (
    <Popconfirm title="确定删除此项目吗？">
      <Button color="danger">删除</Button>
    </Popconfirm>
  ),
};

/**
 * 带描述文本 - 提供更详细的确认信息
 */
export const WithDescription: Story = {
  name: '带描述文本',
  render: () => (
    <Popconfirm title="确定删除此项目吗？" description="此操作无法撤销，请谨慎操作" okText="确定删除" cancelText="取消">
      <Button color="danger">删除</Button>
    </Popconfirm>
  ),
};

/**
 * 自定义按钮文本 - 显示不同的按钮标签
 */
export const CustomButtonText: Story = {
  name: '自定义按钮文本',
  render: () => (
    <Popconfirm title="请确认您的操作" okText="立即执行" cancelText="我再想想">
      <Button variant="primary">执行操作</Button>
    </Popconfirm>
  ),
};

/**
 * 位置
 */
export const PlacementVariants: Story = {
  name: '位置',
  render: () => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 40,
        padding: '40px 20px',
        minHeight: 260,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Popconfirm title="向上位置示例" placement="top">
          <Button variant="primary">上</Button>
        </Popconfirm>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Popconfirm title="向下位置示例" placement="bottom">
          <Button variant="primary">下</Button>
        </Popconfirm>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Popconfirm title="向左位置示例" placement="left">
          <Button variant="primary">左</Button>
        </Popconfirm>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Popconfirm title="向右位置示例" placement="right">
          <Button variant="primary">右</Button>
        </Popconfirm>
      </div>
    </div>
  ),
};

/**
 * 显示遮罩 - showMask 为 true
 */
export const WithMask: Story = {
  name: '显示遮罩',
  render: () => (
    <Popconfirm title="确定要执行此操作吗？" description="点击遮罩可关闭" showMask={true}>
      <Button variant="primary">操作</Button>
    </Popconfirm>
  ),
};

/**
 * 禁用确认按钮
 */
export const OkDisabled: Story = {
  name: '禁用确认按钮',
  render: () => (
    <Popconfirm title="确定要执行此操作吗？" description="确认按钮已禁用" okDisabled={true}>
      <Button variant="primary">操作</Button>
    </Popconfirm>
  ),
};

/**
 * 加载状态 - 显示确认按钮的加载动画
 */
export const OkLoading: Story = {
  name: '加载状态',
  render: () => (
    <Popconfirm title="确定要执行此操作吗？" okLoading={true}>
      <Button color="danger">删除</Button>
    </Popconfirm>
  ),
};

/**
 * 异步操作 - 模拟异步确认操作
 */
export const AsyncConfirm: Story = {
  name: '异步操作',
  render: () => {
    const [loading, setLoading] = useState(false);

    const handleConfirm = async () => {
      setLoading(true);
      // 模拟 API 调用
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
      alert('删除成功！');
    };

    return (
      <Popconfirm
        title="确定删除此项目吗？"
        description="此操作无法撤销"
        okLoading={loading}
        onConfirm={handleConfirm}
        onCancel={() => console.log('已取消')}
      >
        <Button color="danger">删除</Button>
      </Popconfirm>
    );
  },
};

/**
 * 受控组件 - 通过 open 和 onOpenChange 完全控制状态
 */
export const Controlled: Story = {
  name: '受控组件',
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button variant="primary" onClick={() => setOpen(true)} style={{ marginRight: '20px' }}>
          点击打开 Popconfirm
        </Button>

        <Popconfirm
          open={open}
          onOpenChange={setOpen}
          title="确定要执行此操作吗？"
          description="受控组件演示"
          onConfirm={() => {
            alert('已确认！');
          }}
        >
          <Button variant="primary">按钮</Button>
        </Popconfirm>
      </div>
    );
  },
};

/**
 * 删除操作演示 - 列表项删除
 * 模拟删除列表中的一项
 */
export const DeleteOperation: Story = {
  name: '交互演示',
  render: () => {
    const [items, setItems] = useState([
      { id: 1, text: '学习 React' },
      { id: 2, text: '完成项目文档' },
      { id: 3, text: '代码审查' },
    ]);

    const handleDelete = (id: number) => {
      // 删除对应的项
      setItems(items.filter((item) => item.id !== id));
    };

    return (
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <h3>待办事项</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {items.map((item) => (
            <li
              key={item.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px',
                marginBottom: '8px',
                backgroundColor: '#f5f5f5',
                borderRadius: '4px',
                border: '1px solid #ddd',
                fontSize: '14px',
              }}
            >
              <span>{item.text}</span>
              <Popconfirm
                title="确定要删除此项吗？"
                description={`将删除: "${item.text}"`}
                okText="删除"
                cancelText="保留"
                placement="right"
                onConfirm={() => handleDelete(item.id)}
              >
                <Button color="danger" size="small" style={{ marginLeft: 20 }}>
                  删除
                </Button>
              </Popconfirm>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: '16px', fontSize: '12px', color: '#666' }}>共 {items.length} 项待办</div>
      </div>
    );
  },
};

/**
 * 纵向滚动贴边 - 演示纵向滚动时的自动贴边和跟随行为
 */
export const VerticalScrolling: Story = {
  name: '纵向滚动贴边演示',
  render: () => (
    <div
      style={{
        height: '400px',
        overflow: 'auto',
        border: '1px solid #ccc',
        padding: '20px',
        backgroundColor: '#fafafa',
      }}
    >
      <div style={{ minHeight: '100px' }}>
        <p>向下滚动查看更多内容...</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '40px', margin: '100px 0' }}>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <p style={{ marginBottom: '10px' }}>顶部贴边 - placement=top</p>
          <Popconfirm title="这会自动切换到 bottom" placement="top" description="空间不足时自动转换">
            <Button variant="primary">按钮</Button>
          </Popconfirm>
        </div>

        <div style={{ flex: 1, textAlign: 'center' }}>
          <p style={{ marginBottom: '10px' }}>底部贴边 - placement=bottom</p>
          <Popconfirm title="这会自动切换到 top" placement="bottom" description="空间不足时自动转换">
            <Button variant="primary">按钮</Button>
          </Popconfirm>
        </div>
      </div>

      <div style={{ margin: '100px 0', textAlign: 'center' }}>
        <p style={{ marginBottom: '10px' }}>页面顶部 - 向上滚动时跟随离开</p>
        <Popconfirm title="向上滚动时我会跟着离开屏幕" placement="top">
          <Button variant="primary">向上滚动试试</Button>
        </Popconfirm>
      </div>

      <div style={{ minHeight: '200px' }}>
        <p>继续向下滚动...</p>
      </div>
    </div>
  ),
};

/**
 * 横向滚动贴边（左侧）- 演示左侧的贴边情况
 */
export const HorizontalScrollingLeft: Story = {
  name: '横向滚动贴边（左侧）',
  render: () => (
    <div
      style={{
        width: '100%',
        height: '300px',
        overflowX: 'auto',
        overflowY: 'hidden',
        border: '1px solid #ccc',
        backgroundColor: '#fafafa',
        display: 'flex',
        alignItems: 'center',
        padding: '20px',
        gap: '100px',
      }}
    >
      <div style={{ minWidth: '100px', textAlign: 'center' }}>
        <p style={{ marginBottom: '10px', fontSize: '12px' }}>最左侧</p>
        <Popconfirm title="贴边示例" description="向左滑动时跟随离开" placement="left">
          <Button variant="primary">按钮</Button>
        </Popconfirm>
      </div>

      <div style={{ minWidth: '100px', textAlign: 'center' }}>
        <p style={{ marginBottom: '10px', fontSize: '12px' }}>左侧贴边</p>
        <Popconfirm title="左侧贴边" description="自动向内偏移" placement="left">
          <Button variant="primary">按钮</Button>
        </Popconfirm>
      </div>

      <div style={{ minWidth: '100px', textAlign: 'center' }}>
        <p style={{ marginBottom: '10px', fontSize: '12px' }}>中间</p>
        <Popconfirm title="中间位置" description="正常展示" placement="left">
          <Button variant="primary">按钮</Button>
        </Popconfirm>
      </div>

      <div style={{ minWidth: '200px' }}>
        <p style={{ fontSize: '12px', color: '#666' }}>继续向右滚动...</p>
      </div>
    </div>
  ),
};

/**
 * 横向滚动贴边（右侧）- 演示右侧的贴边情况
 */
export const HorizontalScrollingRight: Story = {
  name: '横向滚动贴边（右侧）',
  render: () => (
    <div
      style={{
        width: '100%',
        height: '300px',
        overflowX: 'auto',
        overflowY: 'hidden',
        border: '1px solid #ccc',
        backgroundColor: '#fafafa',
        display: 'flex',
        alignItems: 'center',
        padding: '20px',
        gap: '100px',
      }}
    >
      <div style={{ minWidth: '200px' }}>
        <p style={{ fontSize: '12px', color: '#666' }}>向右滚动查看...</p>
      </div>

      <div style={{ minWidth: '100px', textAlign: 'center' }}>
        <p style={{ marginBottom: '10px', fontSize: '12px' }}>中间</p>
        <Popconfirm title="中间位置" description="正常展示" placement="right">
          <Button variant="primary">按钮</Button>
        </Popconfirm>
      </div>

      <div style={{ minWidth: '100px', textAlign: 'center' }}>
        <p style={{ marginBottom: '10px', fontSize: '12px' }}>右侧贴边</p>
        <Popconfirm title="右侧贴边" description="自动向内偏移" placement="right">
          <Button variant="primary">按钮</Button>
        </Popconfirm>
      </div>

      <div style={{ minWidth: '100px', textAlign: 'center' }}>
        <p style={{ marginBottom: '10px', fontSize: '12px' }}>最右侧</p>
        <Popconfirm title="贴边示例" description="向右滑动时跟随离开" placement="right">
          <Button variant="primary">按钮</Button>
        </Popconfirm>
      </div>
    </div>
  ),
};
