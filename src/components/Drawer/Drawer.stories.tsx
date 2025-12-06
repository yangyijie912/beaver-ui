import { useState } from 'react';
import Drawer from './Drawer';
import Button from '../Button/Button';
import Input from '../Input/Input';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Drawer>;

/**
 * 基础Drawer演示
 */
export const Default: Story = {
  name: '默认（右侧）',
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Drawer
        </Button>
        <Drawer open={open} title="Drawer标题" onClose={() => setOpen(false)}>
          <p>这是一个基础的Drawer组件演示。</p>
          <p>点击关闭按钮或遮罩层可以关闭Drawer。</p>
          <p>也可以按Escape键关闭。</p>
        </Drawer>
      </>
    );
  },
};

/**
 * 位置演示（选择器）
 */
export const Placements: Story = {
  name: '位置演示',
  render: () => {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState<'left' | 'right' | 'top' | 'bottom'>('right');

    const placementDescriptions: Record<string, string> = {
      left: '从左侧弹出的菜单导航',
      right: '从右侧弹出的侧边栏',
      top: '从顶部弹出的操作面板',
      bottom: '从底部弹出的信息展示',
    };

    return (
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {(['left', 'right', 'top', 'bottom'] as const).map((p) => (
            <Button
              key={p}
              variant={placement === p ? 'primary' : 'default'}
              onClick={() => {
                setPlacement(p);
                setOpen(true);
              }}
            >
              {p === 'left' ? '左侧' : p === 'right' ? '右侧' : p === 'top' ? '顶部' : '底部'}
            </Button>
          ))}
        </div>

        <Drawer
          open={open}
          title={`${placement === 'left' ? '左侧' : placement === 'right' ? '右侧' : placement === 'top' ? '顶部' : '底部'}抽屉`}
          placement={placement}
          onClose={() => setOpen(false)}
        >
          {placement === 'left' && (
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
                <Button variant="link">菜单1</Button>
              </li>
              <li style={{ padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
                <Button variant="link">菜单2</Button>
              </li>
              <li style={{ padding: '12px 0' }}>
                <Button variant="link">菜单3</Button>
              </li>
            </ul>
          )}
          {(placement === 'right' || placement === 'top' || placement === 'bottom') && (
            <p>{placementDescriptions[placement]}</p>
          )}
        </Drawer>
      </div>
    );
  },
};

/**
 * 尺寸演示（选择器）
 */
export const Sizes: Story = {
  name: '尺寸演示',
  render: () => {
    const [open, setOpen] = useState(false);
    const [size, setSize] = useState<'small' | 'medium' | 'large'>('medium');

    const sizeDescriptions: Record<string, string> = {
      small: '小型Drawer，适合简单内容展示',
      medium: '中等Drawer，适合常见操作',
      large: '大型Drawer，适合复杂表单和多个内容',
    };

    return (
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {(['small', 'medium', 'large'] as const).map((s) => (
            <Button
              key={s}
              variant={size === s ? 'primary' : 'default'}
              onClick={() => {
                setSize(s);
                setOpen(true);
              }}
            >
              {s === 'small' ? '小' : s === 'medium' ? '中' : '大'}
            </Button>
          ))}
        </div>

        <Drawer
          open={open}
          title={`${size === 'small' ? '小' : size === 'medium' ? '中' : '大'}型Drawer`}
          size={size}
          onClose={() => setOpen(false)}
        >
          <p>{sizeDescriptions[size]}</p>
          <p style={{ marginTop: '16px', color: '#999', fontSize: '12px' }}>
            {size === 'small' && '宽度: 300px'}
            {size === 'medium' && '宽度: 500px'}
            {size === 'large' && '宽度: 800px'}
          </p>
        </Drawer>
      </div>
    );
  },
};

/**
 * 带页脚的Drawer
 */
export const WithFooter: Story = {
  name: '带页脚',
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开表单Drawer
        </Button>
        <Drawer
          open={open}
          title="编辑信息"
          onClose={() => setOpen(false)}
          footer={
            <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', width: '100%' }}>
              <Button onClick={() => setOpen(false)}>取消</Button>
              <Button variant="primary" onClick={() => setOpen(false)}>
                保存
              </Button>
            </div>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Input placeholder="姓名" />
            <Input placeholder="邮箱" />
          </div>
        </Drawer>
      </>
    );
  },
};

/**
 * 长内容滚动
 */
export const LongContent: Story = {
  name: '长内容滚动',
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Drawer
        </Button>
        <Drawer open={open} title="长内容" onClose={() => setOpen(false)}>
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} style={{ marginBottom: 16 }}>
              <h4 style={{ margin: '0 0 8px 0' }}>段落 {i + 1}</h4>
              <p style={{ margin: 0 }}>内容...</p>
            </div>
          ))}
        </Drawer>
      </>
    );
  },
};

/**
 * 无遮罩Drawer
 */
export const NoMask: Story = {
  name: '无遮罩',
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Drawer
        </Button>
        <Drawer open={open} title="无遮罩" mask={false} onClose={() => setOpen(false)}>
          <p>这个Drawer没有遮罩。</p>
        </Drawer>
      </>
    );
  },
};

/**
 * 无标题Drawer
 */
export const NoTitle: Story = {
  name: '无标题',
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Drawer
        </Button>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <p>这是无标题Drawer</p>
        </Drawer>
      </>
    );
  },
};

/**
 * 无关闭按钮Drawer
 */
export const NoCloseButton: Story = {
  name: '无关闭按钮',
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Drawer
        </Button>
        <Drawer open={open} title="无关闭按钮" closable={false} onClose={() => setOpen(false)}>
          <p>这个Drawer没有关闭按钮</p>
        </Drawer>
      </>
    );
  },
};

/**
 * 自定义宽度Drawer
 */
export const CustomWidth: Story = {
  name: '自定义宽度',
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开自定义宽度Drawer
        </Button>
        <Drawer open={open} title="自定义宽度" width="70%" onClose={() => setOpen(false)}>
          <p>这个Drawer的宽度是视口宽度的70%</p>
        </Drawer>
      </>
    );
  },
};
