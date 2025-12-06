import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Popconfirm from './Popconfirm';
import Button from '../Button/Button';

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
 * 显示标题和确认/取消按钮
 */
export const Basic: Story = {
  name: '基础用法',
  render: () => (
    <Popconfirm title="确定删除此项目吗？" okText="删除" cancelText="取消">
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
 * 位置示例 - 顶部
 */
export const PlacementTop: Story = {
  name: '位置-顶部',
  render: () => (
    <div style={{ paddingTop: '100px' }}>
      <Popconfirm title="确定要执行此操作吗？" placement="top">
        <Button>操作</Button>
      </Popconfirm>
    </div>
  ),
};

/**
 * 位置示例 - 底部
 */
export const PlacementBottom: Story = {
  name: '位置-底部',
  render: () => (
    <div style={{ paddingBottom: '100px' }}>
      <Popconfirm title="确定要执行此操作吗？" placement="bottom">
        <Button>操作</Button>
      </Popconfirm>
    </div>
  ),
};

/**
 * 位置示例 - 左侧
 */
export const PlacementLeft: Story = {
  name: '位置-左侧',
  render: () => (
    <div style={{ paddingLeft: '200px', paddingTop: '50px' }}>
      <Popconfirm title="确定要执行此操作吗？" placement="left">
        <Button>操作</Button>
      </Popconfirm>
    </div>
  ),
};

/**
 * 位置示例 - 右侧
 */
export const PlacementRight: Story = {
  name: '位置-右侧',
  render: () => (
    <div style={{ paddingRight: '200px', paddingTop: '50px' }}>
      <Popconfirm title="确定要执行此操作吗？" placement="right">
        <Button>操作</Button>
      </Popconfirm>
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
      <Button>操作</Button>
    </Popconfirm>
  ),
};

/**
 * 禁用箭头 - showArrow 为 false
 */
export const WithoutArrow: Story = {
  name: '禁用箭头',
  render: () => (
    <Popconfirm title="确定要执行此操作吗？" showArrow={false}>
      <Button>操作</Button>
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
      <Button>操作</Button>
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
        <Button onClick={() => setOpen(true)} style={{ marginBottom: '20px' }}>
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
          <Button>隐藏按钮</Button>
        </Popconfirm>
      </div>
    );
  },
};

/**
 * 最小化样式 - 只显示标题和按钮，无箭头
 */
export const MinimalStyle: Story = {
  name: '最小化样式',
  render: () => (
    <Popconfirm title="确定吗？" showArrow={false} okText="是" cancelText="否">
      <Button>操作</Button>
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
      <Button>执行操作</Button>
    </Popconfirm>
  ),
};

/**
 * 删除操作演示 - 列表项删除
 * 模拟删除列表中的一项
 */
export const DeleteOperation: Story = {
  name: '删除操作',
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
              }}
            >
              <span>{item.text}</span>
              <Popconfirm
                title="确定要删除此项吗？"
                description={`将删除: "${item.text}"`}
                okText="删除"
                cancelText="保留"
                placement="left"
                onConfirm={() => handleDelete(item.id)}
              >
                <Button color="danger" size="small">
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
