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

```css
:root {
  --beaver-color-primary: #ff6a00;
  --beaver-color-error: #ff4d4f;
  --beaver-color-success: #52c41a;
  --beaver-color-warning: #faad14;
  --beaver-color-info: #1890ff;
}
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
