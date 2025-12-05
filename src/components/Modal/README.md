# Modal 组件

## 概述

Modal（模态框）是一个用于展示关键内容或获取用户交互的组件。它通过遮罩层阻止用户与底层内容交互，直到Modal被关闭。

## 特性

- ✅ 完整的键盘支持（Escape 键关闭）
- ✅ 可访问性（ARIA 属性）
- ✅ 流畅的动画效果
- ✅ 自动处理 body 滚动锁定
- ✅ 灵活的尺寸设置（预设和自定义）
- ✅ 可配置的页脚和关闭按钮
- ✅ 响应式设计

## 基础用法

```tsx
import { Modal, Button } from 'beaver-ui';
import { useState } from 'react';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>打开 Modal</Button>
      <Modal
        open={open}
        title="确认操作"
        onClose={() => setOpen(false)}
        footer={
          <>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              取消
            </Button>
            <Button onClick={() => setOpen(false)}>确定</Button>
          </>
        }
      >
        <p>您确定要执行此操作吗？</p>
      </Modal>
    </>
  );
}
```

## 属性

### ModalProps

| 属性               | 类型                             | 默认值     | 说明                                 |
| ------------------ | -------------------------------- | ---------- | ------------------------------------ |
| `open`             | `boolean`                        | -          | **必需**。控制 Modal 是否打开        |
| `onClose`          | `() => void`                     | -          | 关闭 Modal 时的回调函数              |
| `title`            | `React.ReactNode`                | -          | Modal 的标题                         |
| `width`            | `number \| string`               | -          | Modal 的宽度，默认按 `size` 属性设置 |
| `size`             | `'small' \| 'medium' \| 'large'` | `'medium'` | Modal 的预设尺寸                     |
| `closable`         | `boolean`                        | `true`     | 是否显示关闭按钮                     |
| `maskClosable`     | `boolean`                        | `true`     | 点击遮罩是否关闭 Modal               |
| `children`         | `React.ReactNode`                | -          | Modal 的主体内容                     |
| `footer`           | `React.ReactNode`                | -          | Modal 的页脚内容（通常放置按钮）     |
| `className`        | `string`                         | -          | Modal 根元素的自定义类名             |
| `maskClassName`    | `string`                         | -          | 遮罩层的自定义类名                   |
| `contentClassName` | `string`                         | -          | Modal 内容区域的自定义类名           |
| `animated`         | `boolean`                        | `true`     | 是否启用打开/关闭动画                |

## 尺寸预设

### Small (300px)

```tsx
<Modal open={open} size="small" title="小 Modal">
  内容
</Modal>
```

### Medium (520px) - 默认

```tsx
<Modal open={open} size="medium" title="中等 Modal">
  内容
</Modal>
```

### Large (800px)

```tsx
<Modal open={open} size="large" title="大 Modal">
  内容
</Modal>
```

### 自定义宽度

```tsx
<Modal open={open} width="600px" title="自定义宽度">
  内容
</Modal>
```

## 子组件

### ModalHeader

可单独使用 ModalHeader，或在 Modal 中自动包含（当 `title` 或 `closable` 为真时）。

```tsx
import { Modal, ModalHeader } from 'beaver-ui';

<Modal open={open}>
  <ModalHeader title="自定义头部" closable={true} onClose={() => setOpen(false)} />
  {/* 内容 */}
</Modal>;
```

### ModalFooter

可单独使用 ModalFooter 组织页脚内容。

```tsx
import { Modal, ModalFooter } from 'beaver-ui';

<Modal
  open={open}
  footer={
    <ModalFooter>
      <Button>确定</Button>
    </ModalFooter>
  }
>
  内容
</Modal>;
```

## 常见场景

### 确认对话框

```tsx
<Modal
  open={open}
  title="删除确认"
  closable={false}
  maskClosable={false}
  footer={
    <>
      <Button variant="ghost" onClick={() => setOpen(false)}>
        取消
      </Button>
      <Button onClick={handleDelete}>删除</Button>
    </>
  }
>
  <p>确定要删除此项吗？此操作无法撤销。</p>
</Modal>
```

### 表单 Modal

```tsx
<Modal
  open={open}
  title="编辑信息"
  width="600px"
  footer={
    <>
      <Button variant="ghost" onClick={() => setOpen(false)}>
        取消
      </Button>
      <Button onClick={handleSubmit}>保存</Button>
    </>
  }
>
  {/* 表单内容 */}
</Modal>
```

### 无页脚 Modal

```tsx
<Modal open={open} title="提示" onClose={() => setOpen(false)}>
  <p>这是一条提示信息。点击关闭按钮或 Escape 键来关闭。</p>
</Modal>
```

## CSS 变量主题定制

Modal 使用 CSS 变量来支持主题化：

```css
:root {
  /* 宽度和尺寸 */
  --beaver-modal-width: 520px;
  --beaver-modal-border-radius: 8px;
  --beaver-modal-padding: 24px;

  /* 间距 */
  --beaver-modal-header-margin-bottom: 16px;
  --beaver-modal-footer-margin-top: 16px;

  /* 颜色 */
  --beaver-modal-overlay-bg: rgba(0, 0, 0, 0.45);
  --beaver-modal-bg: #ffffff;
  --beaver-modal-z-index: 2000;

  /* 阴影 */
  --beaver-modal-box-shadow: 0 8px 24px rgba(20, 30, 50, 0.12);

  /* 标题样式 */
  --beaver-modal-title-font-size: 18px;
  --beaver-modal-title-font-weight: 600;
  --beaver-modal-title-color: #333;

  /* 关闭按钮 */
  --beaver-modal-close-btn-size: 24px;
  --beaver-modal-close-btn-color: #666;
}
```

## 可访问性

- Modal 使用 `role="dialog"` 和 `aria-modal="true"`
- 支持 Escape 键关闭
- 关闭按钮有正确的 ARIA 标签
- 自动管理焦点和键盘导航

## 动画

Modal 支持平滑的进入和退出动画：

```tsx
// 禁用动画
<Modal open={open} animated={false}>
  内容
</Modal>
```

## 最佳实践

1. **总是提供 `onClose` 回调** - 让用户能够关闭 Modal
2. **使用有意义的标题** - 帮助用户理解 Modal 的目的
3. **保持内容简洁** - Modal 应该专注于单一任务
4. **提供明确的操作** - 使用清晰的按钮标签
5. **考虑响应式** - Modal 会自动适应小屏幕

## 文件结构

```
src/components/Modal/
├── Modal.tsx                 # 主组件
├── Modal.css                 # 样式
├── Modal.stories.tsx         # Storybook 演示
├── types.ts                  # TypeScript 类型
├── hooks/
│   └── useModalAnimation.ts  # 动画逻辑 hook
└── components/
    ├── ModalHeader.tsx       # 头部子组件
    └── ModalFooter.tsx       # 页脚子组件
```

## 更新于

- **vars.ts**: 添加了 Modal 组件相关的 CSS 变量
- **tokens.css**: 自动生成的 CSS 变量文件
- **src/index.ts**: 导出 Modal、ModalHeader 和 ModalFooter
