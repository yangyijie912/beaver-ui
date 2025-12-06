import { useState } from 'react';
import Modal from './Modal';
import Button from '../Button/Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Modal>;

/**
 * 基础Modal演示
 */
export const Default: Story = {
  name: '默认',
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Modal
        </Button>
        <Modal open={open} title="Modal标题" onClose={() => setOpen(false)}>
          <p>这是一个基础的Modal组件演示。</p>
          <p>点击关闭按钮或遮罩层可以关闭Modal。</p>
        </Modal>
      </>
    );
  },
};

/**
 * 无标题Modal
 */
export const NoTitle: Story = {
  name: '无标题',
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Modal
        </Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <h3>内容标题</h3>
          <p>这是一个没有顶部标题的Modal组件。</p>
          <p>关闭按钮仍然显示在右上角。</p>
        </Modal>
      </>
    );
  },
};

/**
 * 无关闭按钮Modal
 */
export const NoClosable: Story = {
  name: '无关闭按钮',
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Modal
        </Button>
        <Modal open={open} title="确认操作" onClose={() => setOpen(false)} closable={false}>
          <p>这个Modal没有关闭按钮，必须通过底部按钮来操作。</p>
        </Modal>
      </>
    );
  },
};

/**
 * 不可通过点击遮罩关闭
 */
export const MaskNotClosable: Story = {
  name: '不可通过遮罩关闭',
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Modal
        </Button>
        <Modal open={open} title="重要操作" onClose={() => setOpen(false)} maskClosable={false}>
          <p>这个Modal无法通过点击遮罩层关闭，用户必须使用关闭按钮或页脚按钮。</p>
        </Modal>
      </>
    );
  },
};

/**
 * 小尺寸
 */
export const Small: Story = {
  name: '小 (300px)',
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Modal
        </Button>
        <Modal open={open} title="小Modal" size="small" onClose={() => setOpen(false)}>
          <p>这是一个小尺寸的Modal，宽度为300px。</p>
        </Modal>
      </>
    );
  },
};

/**
 * 中尺寸（默认）
 */
export const Medium: Story = {
  name: '中 (520px)',
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Modal
        </Button>
        <Modal open={open} title="中等Modal" size="medium" onClose={() => setOpen(false)}>
          <p>这是一个中等尺寸的Modal，宽度为520px。</p>
          <p>这是默认尺寸，也是推荐使用的尺寸。</p>
        </Modal>
      </>
    );
  },
};

/**
 * 大尺寸
 */
export const Large: Story = {
  name: '大 (800px)',
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Modal
        </Button>
        <Modal open={open} title="大Modal" size="large" onClose={() => setOpen(false)}>
          <p>这是一个大尺寸的Modal，宽度为800px。</p>
          <p>适合用来展示大量的内容或表单。</p>
        </Modal>
      </>
    );
  },
};

/**
 * 自定义宽度
 */
export const CustomWidth: Story = {
  name: '自定义宽度',
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Modal
        </Button>
        <Modal open={open} title="自定义宽度" width="600px" onClose={() => setOpen(false)}>
          <p>这个Modal的宽度被设置为600px。</p>
        </Modal>
      </>
    );
  },
};

/**
 * 长内容示例
 */
export const LongContent: Story = {
  name: '长内容',
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Modal
        </Button>
        <Modal open={open} title="长内容Modal" onClose={() => setOpen(false)}>
          {Array.from({ length: 20 }).map((_, i) => (
            <p key={i}>
              这是第 {i + 1} 段内容。Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          ))}
        </Modal>
      </>
    );
  },
};

/**
 * 自定义页脚
 */
export const CustomFooter: Story = {
  name: '自定义页脚',
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Modal
        </Button>
        <Modal
          open={open}
          title="自定义页脚"
          onClose={() => setOpen(false)}
          footer={
            <div style={{ width: '100%', display: 'flex', gap: '8px', justifyContent: 'space-between' }}>
              <Button variant="ghost">返回</Button>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Button variant="ghost" onClick={() => setOpen(false)}>
                  取消
                </Button>
                <Button variant="primary" onClick={() => setOpen(false)}>
                  下一步
                </Button>
              </div>
            </div>
          }
        >
          <p>这个Modal有一个自定义的页脚布局。</p>
          <p>页脚中有返回按钮和操作按钮。</p>
        </Modal>
      </>
    );
  },
};

/**
 * 无页脚
 */
export const NoFooter: Story = {
  name: '无页脚',
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Modal
        </Button>
        <Modal open={open} title="无页脚Modal" onClose={() => setOpen(false)} footer={null}>
          <p>这是一个没有页脚的Modal。</p>
          <p>必须通过关闭按钮或Escape键来关闭它。</p>
        </Modal>
      </>
    );
  },
};

/**
 * 无页头
 */
export const NoHeader: Story = {
  name: '无页头',
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Modal
        </Button>
        <Modal closable={false} open={open} onClose={() => setOpen(false)}>
          <p>这是一个没有页头的Modal。</p>
          <p>可以自己写一个页头</p>
        </Modal>
      </>
    );
  },
};

/**
 * 交互示例
 */
export const Interactive: Story = {
  name: '交互示例',
  render: () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleConfirm = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setOpen(false);
      }, 1500);
    };

    return (
      <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Modal
        </Button>
        <Modal
          open={open}
          title="确认删除"
          onClose={() => setOpen(false)}
          footer={
            <>
              <Button variant="ghost" onClick={() => setOpen(false)} disabled={loading}>
                取消
              </Button>
              <Button variant="primary" onClick={handleConfirm} disabled={loading}>
                {loading ? '处理中...' : '确定删除'}
              </Button>
            </>
          }
        >
          <p>确定要删除这项内容吗？此操作无法撤销。</p>
        </Modal>
      </>
    );
  },
};
