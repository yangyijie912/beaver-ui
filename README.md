# beaver-ui

个人用的组件库，React + TypeScript + tsup + Storybook。

**文档**

[UI演示(Docs/Storybook)](https://yangyijie912.github.io/beaver-ui)

**如何使用**

1. **下载**

   ```
   npm install beaver-ui
   ```

2. **引入样式**

- 显式引入全局样式（推荐）：

  在应用入口（例如 `src/main.tsx` 或 `src/index.tsx`）中只需引入一次合并后的样式：

  ```javascript
  import 'beaver-ui/dist/index.css';
  ```

  这样组件会使用库提供的 `tokens`（颜色、radius、focus 等）和基础样式，保证与 Storybook 中演示一致。

- 按需或自定义：

  如果使用 CSS 按需加载或希望自定义主题，也可以只引入需要的组件 CSS 或自行覆盖 CSS 变量：

  ```css
  :root {
    --beaver-color-primary: #ff6a00;
  }
  ```

  不过为了避免样式不一致（例如浏览器默认焦点环），建议至少包含 `tokens.css`（或合并后的 `dist/index.css`）。

**当前已实现组件：**

---

**操作（Actions）**

`Button` - 按钮

**表单（Form）**

`Input` - 输入框  
`Select` - 下拉选择框  
`Checkbox` - 复选框  
`Radio` - 单选框  
`Switch` - 开关  
`DatePicker` - 日期选择器  
`Upload` - 文件上传  
`Form` - 表单

**数据展示（Data Display）**

`Table` - 表格

**浮层（Overlays）**

`Tooltip` - 文字提示组件  
`Popconfirm` - 弹出式确认框  
`Modal` - 模态框  
`Drawer` - 抽屉组件

**导航（Navigation）**

`Pagination` - 分页

**反馈（Feedback）**

`Alert` - 警告提示  
`Toast` - 全局通知

---

按需更新
