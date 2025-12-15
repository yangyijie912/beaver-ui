# beaver-ui

个人用的组件库，React + TypeScript + tsup + Storybook。

包含 17+ 个常用 UI 组件，提供完整的 TypeScript 类型定义和灵活的样式定制选项。

## 文档

| 文档                                                                          | 说明                    |
| ----------------------------------------------------------------------------- | ----------------------- |
| [API 参考](https://github.com/yangyijie912/beaver-ui/blob/master/docs/API.md) | 所有组件的完整 API 定义 |
| [UI演示(Storybook)](https://yangyijie912.github.io/beaver-ui)                 | 交互式组件演示          |

## 快速开始

### 1. 安装

```bash
npm install beaver-ui
# 或使用 pnpm
pnpm install beaver-ui
# 或使用 yarn
yarn add beaver-ui
```

### 2. 导入样式

在应用入口（如 `src/main.tsx` 或 `src/index.tsx`）引入样式：

```tsx
import 'beaver-ui/dist/index.css';
```

这样组件会使用库提供的 `tokens`（颜色、radius、focus 等）和基础样式，保证与 Storybook 中演示一致。

**注意（关于 SSR / hydration）:**

- 最新版本移除了库入口处的同步运行时 tokens 注入（`applyTokens()`）以避免在模块加载阶段修改 `document`，从而引发 SSR hydration mismatch。建议使用下面的方式引入样式以避免 hydration warning：

1. SPA：不变，在应用入口直接 `import 'beaver-ui/dist/index.css'`。
2. Next.js / SSR：
   - App Router（Next 13+）：在 `app/layout.tsx` 通过`import 'beaver-ui/dist/index.css'`引入样式。
   - Pages Router：在 `pages/_app.tsx` 导入 `dist/index.css`，或将 `dist/index.css` 的内容内联进 `pages/_document.tsx` 的 `<head>` 以完全避免首屏闪烁。

### 3. 使用组件

```tsx
import { Button, Input, Modal } from 'beaver-ui';

export default function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
    </div>
  );
}
```

## 样式自定义

可以通过覆盖 CSS 变量来自定义主题：

````css
:root {
  --beaver-color-primary: #ff6a00;
  --beaver-color-error: #ff4d4f;
  --beaver-color-success: #52c41a;
  --beaver-color-warning: #faad14;
  --beaver-color-info: #1890ff;
}

动态主题（运行时切换）:

- 如果你需要在客户端运行时切换主题，可以调用库中提供的客户端 helper（`applyTokens()`）。由于该调用会在客户端修改 CSS 变量，请在 React 的客户端生命周期中调用（例如 `useEffect`），以避免与 SSR hydration 冲突：

```tsx
import React, { useEffect } from 'react';
import { applyTokens } from 'beaver-ui/dist'; // 如果库导出此 helper（或从 src/tokens/applyTokens 导入）

function App() {
  useEffect(() => {
    applyTokens?.();
  }, []);

  return <YourApp />;
}
````

注意：推荐保留关键 tokens（影响首屏布局与色彩）在 `dist/index.css` 中静态提供，剩余可动态注入以减少闪烁。

```

## 组件列表

---

| 分类     | 组件              | 说明       |
| -------- | ----------------- | ---------- |
| **操作** | Button            | 按钮       |
| **表单** | Input             | 输入框     |
|          | Select            | 下拉选择框 |
|          | Checkbox          | 复选框     |
|          | Radio, RadioGroup | 单选框     |
|          | Switch            | 开关       |
|          | DatePicker        | 日期选择器 |
|          | Upload            | 文件上传   |
|          | Form, FormItem    | 表单容器   |
| **展示** | Table             | 表格       |
| **导航** | Pagination        | 分页器     |
| **反馈** | Alert             | 警告提示   |
|          | Toast             | 消息提示   |
| **浮层** | Tooltip           | 文字提示   |
|          | Popconfirm        | 气泡确认框 |
|          | Modal             | 对话框     |
|          | Drawer            | 抽屉       |

---

按需更新
```
