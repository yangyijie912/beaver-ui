# beaver-ui 组件 API 参考

完整的组件属性和方法定义。

---

## 目录

- [Button](#button)
- [Input](#input)
- [Select](#select)
- [Checkbox](#checkbox)
- [Radio](#radio)
- [DatePicker](#datepicker)
- [Switch](#switch)
- [Alert](#alert)
- [Modal](#modal)
- [Drawer](#drawer)
- [Tooltip](#tooltip)
- [Popconfirm](#popconfirm)
- [Toast](#toast)
- [Table](#table)
- [Pagination](#pagination)
- [Upload](#upload)
- [Form](#form)

---

## Button

```tsx
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'primary' | 'ghost' | 'link';
  color?: 'primary' | 'danger' | string;
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  children?: React.ReactNode;
};
```

### 属性

| 属性        | 类型                                          | 默认值      | 说明                              |
| ----------- | --------------------------------------------- | ----------- | --------------------------------- |
| `variant`   | `'default' \| 'primary' \| 'ghost' \| 'link'` | `'default'` | 按钮风格                          |
| `size`      | `'small' \| 'medium' \| 'large'`              | `'medium'`  | 按钮大小                          |
| `color`     | `'primary' \| 'danger' \| string`             | -           | 按钮颜色，可以是 CSS 颜色值       |
| `loading`   | `boolean`                                     | `false`     | 加载状态，显示 spinner 并禁用按钮 |
| `disabled`  | `boolean`                                     | `false`     | 禁用状态（继承自 HTMLButton）     |
| `onClick`   | `(e: React.MouseEvent) => void`               | -           | 点击回调                          |
| `type`      | `'button' \| 'submit' \| 'reset'`             | `'button'`  | 按钮类型                          |
| `className` | `string`                                      | -           | CSS 类名                          |

### 示例

```tsx
<Button variant="primary" size="medium" onClick={handleClick}>
  Submit
</Button>

<Button loading={isLoading}>
  Loading...
</Button>

<Button color="danger">Delete</Button>
```

---

## Input

```tsx
export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  validation?: 'error' | 'success' | 'warning' | 'none';
  textarea?: boolean;
  rows?: number;
  resize?: React.CSSProperties['resize'];
  width?: number | string;
  prefix?: React.ReactNode | (() => React.ReactNode);
  suffix?: React.ReactNode | (() => React.ReactNode);
  prefixClassName?: string;
  suffixClassName?: string;
  size?: 'small' | 'medium' | 'large';
  htmlSize?: number;
  allowClear?: boolean;
  onClear?: () => void;
};
```

### 属性

| 属性           | 类型                                          | 默认值     | 说明             |
| -------------- | --------------------------------------------- | ---------- | ---------------- |
| `textarea`     | `boolean`                                     | `false`    | 是否为多行文本域 |
| `size`         | `'small' \| 'medium' \| 'large'`              | `'medium'` | 输入框大小       |
| `validation`   | `'error' \| 'success' \| 'warning' \| 'none'` | `'none'`   | 验证状态         |
| `prefix`       | `ReactNode \| () => ReactNode`                | -          | 前置内容         |
| `suffix`       | `ReactNode \| () => ReactNode`                | -          | 后置内容         |
| `allowClear`   | `boolean`                                     | `false`    | 是否显示清除按钮 |
| `onClear`      | `() => void`                                  | -          | 清除时的回调     |
| `rows`         | `number`                                      | `3`        | 文本域的行数     |
| `width`        | `number \| string`                            | -          | 输入框宽度       |
| `placeholder`  | `string`                                      | -          | 占位符           |
| `disabled`     | `boolean`                                     | `false`    | 禁用状态         |
| `value`        | `string \| number`                            | -          | 输入框值（受控） |
| `defaultValue` | `string \| number`                            | -          | 默认值           |
| `onChange`     | `(e: React.ChangeEvent) => void`              | -          | 值改变回调       |

### 示例

```tsx
<Input placeholder="Basic input" />

<Input
  prefix="$"
  suffix=".00"
  placeholder="Price"
/>

<Input
  type="password"
  suffix={<Eye />}
  allowClear
/>

<Input
  textarea
  rows={4}
  placeholder="Enter description..."
/>

<Input
  validation="error"
  placeholder="Invalid input"
/>
```

---

## Select

```tsx
export type SelectOption = {
  label: React.ReactNode;
  value: string;
  disabled?: boolean;
};

export type SelectProps = {
  options?: SelectOption[];
  placeholder?: string;
  value?: string | string[] | undefined;
  defaultValue?: string | string[];
  onChange?: (value: string | string[] | undefined) => void;
  searchable?: boolean;
  allowCreate?: boolean;
  filterOption?: (input: string, option: SelectOption) => boolean;
  searchBy?: 'label' | 'value' | 'both';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  loadingIcon?: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  menuClassName?: string;
  width?: number | string;
  style?: React.CSSProperties;
  multiple?: boolean;
  filterSelected?: boolean;
};
```

### 属性

| 属性             | 类型                              | 默认值     | 说明                 |
| ---------------- | --------------------------------- | ---------- | -------------------- |
| `options`        | `SelectOption[]`                  | `[]`       | 选项列表             |
| `value`          | `string \| string[] \| undefined` | -          | 当前值               |
| `placeholder`    | `string`                          | `'请选择'` | 占位符               |
| `onChange`       | `(value) => void`                 | -          | 值改变回调           |
| `multiple`       | `boolean`                         | `false`    | 多选模式             |
| `searchable`     | `boolean`                         | `false`    | 是否可搜索           |
| `allowCreate`    | `boolean`                         | `false`    | 允许创建新选项       |
| `disabled`       | `boolean`                         | `false`    | 禁用状态             |
| `loading`        | `boolean`                         | `false`    | 加载状态             |
| `size`           | `'small' \| 'medium' \| 'large'`  | `'medium'` | 选择框大小           |
| `width`          | `number \| string`                | -          | 选择框宽度           |
| `searchBy`       | `'label' \| 'value' \| 'both'`    | `'both'`   | 搜索范围             |
| `filterSelected` | `boolean`                         | `false`    | 多选时是否隐藏已选项 |

### 示例

```tsx
const options = [
  { label: 'Option 1', value: 'opt1' },
  { label: 'Option 2', value: 'opt2' },
];

<Select options={options} />

<Select
  options={options}
  multiple
  searchable
  allowCreate
/>

<Select
  options={options}
  filterOption={(input, option) =>
    option.label.toLowerCase().includes(input)
  }
/>
```

---

## Checkbox

```tsx
export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: React.ReactNode;
  indeterminate?: boolean;
  inputClassName?: string;
};
```

### 属性

| 属性            | 类型                             | 默认值  | 说明         |
| --------------- | -------------------------------- | ------- | ------------ |
| `label`         | `ReactNode`                      | -       | 复选框标签   |
| `checked`       | `boolean`                        | -       | 选中状态     |
| `indeterminate` | `boolean`                        | `false` | 中间状态     |
| `disabled`      | `boolean`                        | `false` | 禁用状态     |
| `onChange`      | `(e: React.ChangeEvent) => void` | -       | 状态改变回调 |
| `name`          | `string`                         | -       | 表单字段名   |
| `value`         | `string`                         | -       | 字段值       |

### 示例

```tsx
<Checkbox label="I agree" />

<Checkbox
  checked={isSelected}
  onChange={handleChange}
  indeterminate={isPartialSelected}
/>
```

---

## Radio

```tsx
export type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: React.ReactNode;
};

export type RadioGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};
```

### 属性

#### Radio

| 属性       | 类型               | 默认值  | 说明       |
| ---------- | ------------------ | ------- | ---------- |
| `label`    | `ReactNode`        | -       | 单选框标签 |
| `value`    | `string \| number` | -       | 选项值     |
| `checked`  | `boolean`          | -       | 选中状态   |
| `disabled` | `boolean`          | `false` | 禁用状态   |

#### RadioGroup

| 属性       | 类型               | 默认值  | 说明       |
| ---------- | ------------------ | ------- | ---------- |
| `value`    | `string \| number` | -       | 当前值     |
| `onChange` | `(e) => void`      | -       | 值改变回调 |
| `disabled` | `boolean`          | `false` | 禁用整个组 |

### 示例

```tsx
<RadioGroup value={selected} onChange={handleChange}>
  <Radio value="opt1" label="Option 1" />
  <Radio value="opt2" label="Option 2" />
</RadioGroup>
```

---

## DatePicker

```tsx
export type DatePickerProps = React.HTMLAttributes<HTMLDivElement> & {
  value?: Date | [Date, Date] | undefined;
  defaultValue?: Date | [Date, Date];
  onChange?: (value: Date | [Date, Date] | undefined) => void;
  placeholder?: string;
  range?: boolean;
  disabled?: boolean;
  format?: string;
  disabledDate?: (date: Date) => boolean;
};
```

### 属性

| 属性           | 类型                                | 默认值  | 说明             |
| -------------- | ----------------------------------- | ------- | ---------------- |
| `value`        | `Date \| [Date, Date] \| undefined` | -       | 选中日期         |
| `onChange`     | `(value) => void`                   | -       | 日期改变回调     |
| `placeholder`  | `string`                            | -       | 占位符           |
| `range`        | `boolean`                           | `false` | 范围选择模式     |
| `disabled`     | `boolean`                           | `false` | 禁用状态         |
| `disabledDate` | `(date: Date) => boolean`           | -       | 禁用日期判断函数 |

### 示例

```tsx
<DatePicker
  value={date}
  onChange={setDate}
/>

<DatePicker
  range
  value={dateRange}
  onChange={setDateRange}
  disabledDate={(date) => date < new Date()}
/>
```

---

## Switch

```tsx
export type SwitchProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};
```

### 属性

| 属性             | 类型          | 默认值  | 说明         |
| ---------------- | ------------- | ------- | ------------ |
| `checked`        | `boolean`     | -       | 开关状态     |
| `defaultChecked` | `boolean`     | `false` | 默认状态     |
| `onChange`       | `(e) => void` | -       | 状态改变回调 |
| `disabled`       | `boolean`     | `false` | 禁用状态     |
| `label`          | `ReactNode`   | -       | 开关标签     |

### 示例

```tsx
<Switch
  checked={enabled}
  onChange={handleChange}
/>

<label>
  <Switch />
  <span>Enable feature</span>
</label>
```

---

## Alert

```tsx
export type AlertType = 'success' | 'warning' | 'error' | 'info';

export type AlertProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'type'> & {
  type?: AlertType;
  title?: React.ReactNode;
  message?: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
  compact?: boolean;
  icon?: React.ReactNode;
  showIcon?: boolean;
  closeIcon?: React.ReactNode;
  showBorder?: boolean;
};
```

### 属性

| 属性       | 类型                                          | 默认值   | 说明         |
| ---------- | --------------------------------------------- | -------- | ------------ |
| `type`     | `'success' \| 'warning' \| 'error' \| 'info'` | `'info'` | 提示类型     |
| `title`    | `ReactNode`                                   | -        | 标题         |
| `message`  | `ReactNode`                                   | -        | 内容         |
| `closable` | `boolean`                                     | `false`  | 是否可关闭   |
| `onClose`  | `() => void`                                  | -        | 关闭回调     |
| `showIcon` | `boolean`                                     | `true`   | 是否显示图标 |
| `compact`  | `boolean`                                     | `false`  | 紧凑模式     |

### 示例

```tsx
<Alert type="success" title="Success" message="Operation completed" closable onClose={handleClose} />
```

---

## Modal

```tsx
export type ModalProps = React.HTMLAttributes<HTMLDivElement> & {
  open?: boolean;
  onClose?: () => void;
  onOk?: () => void;
  title?: React.ReactNode;
  width?: number | string;
  size?: 'small' | 'medium' | 'large';
  closable?: boolean;
  maskClosable?: boolean;
  footer?: React.ReactNode;
  maskClassName?: string;
  contentClassName?: string;
  children?: React.ReactNode;
};
```

### 属性

| 属性           | 类型                             | 默认值     | 说明                          |
| -------------- | -------------------------------- | ---------- | ----------------------------- |
| `open`         | `boolean`                        | `false`    | 打开状态                      |
| `title`        | `ReactNode`                      | -          | 标题                          |
| `width`        | `number \| string`               | -          | 宽度                          |
| `size`         | `'small' \| 'medium' \| 'large'` | `'medium'` | 预设大小（300px/520px/800px） |
| `closable`     | `boolean`                        | `true`     | 显示关闭按钮                  |
| `maskClosable` | `boolean`                        | `true`     | 点击遮罩是否关闭              |
| `onClose`      | `() => void`                     | -          | 关闭回调                      |
| `onOk`         | `() => void`                     | -          | 确认回调                      |
| `footer`       | `ReactNode`                      | -          | 自定义页脚                    |

### 示例

```tsx
<Modal
  open={visible}
  title="Dialog"
  onClose={handleClose}
  onOk={handleConfirm}
>
  Content here
</Modal>

<Modal open={visible} footer={null}>
  Content without footer
</Modal>
```

---

## Drawer

```tsx
export type DrawerProps = React.HTMLAttributes<HTMLDivElement> & {
  open?: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  placement?: 'left' | 'right';
  width?: number | string;
  closable?: boolean;
  maskClosable?: boolean;
  footer?: React.ReactNode;
  maskClassName?: string;
  contentClassName?: string;
  children?: React.ReactNode;
};
```

### 属性

| 属性           | 类型                | 默认值    | 说明             |
| -------------- | ------------------- | --------- | ---------------- |
| `open`         | `boolean`           | `false`   | 打开状态         |
| `title`        | `ReactNode`         | -         | 标题             |
| `placement`    | `'left' \| 'right'` | `'right'` | 抽屉位置         |
| `width`        | `number \| string`  | -         | 抽屉宽度         |
| `closable`     | `boolean`           | `true`    | 显示关闭按钮     |
| `maskClosable` | `boolean`           | `true`    | 点击遮罩是否关闭 |
| `onClose`      | `() => void`        | -         | 关闭回调         |

### 示例

```tsx
<Drawer open={visible} title="Drawer" onClose={handleClose} placement="right">
  Content here
</Drawer>
```

---

## Tooltip

```tsx
export type TooltipProps = React.HTMLAttributes<HTMLDivElement> & {
  title: React.ReactNode;
  placement?: 'top' | 'right' | 'bottom' | 'left';
  children: React.ReactElement;
};
```

### 属性

| 属性        | 类型                                     | 默认值  | 说明     |
| ----------- | ---------------------------------------- | ------- | -------- |
| `title`     | `ReactNode`                              | -       | 提示内容 |
| `placement` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'top'` | 提示位置 |

### 示例

```tsx
<Tooltip title="Hint text" placement="top">
  <Button>Hover me</Button>
</Tooltip>
```

---

## Popconfirm

```tsx
export type PopconfirmProps = React.HTMLAttributes<HTMLDivElement> & {
  title?: React.ReactNode;
  message?: React.ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
  okText?: string;
  cancelText?: string;
  placement?: string;
  children: React.ReactElement;
};
```

### 属性

| 属性         | 类型         | 默认值     | 说明         |
| ------------ | ------------ | ---------- | ------------ |
| `title`      | `ReactNode`  | -          | 标题         |
| `message`    | `ReactNode`  | -          | 内容         |
| `onConfirm`  | `() => void` | -          | 确认回调     |
| `onCancel`   | `() => void` | -          | 取消回调     |
| `okText`     | `string`     | `'OK'`     | 确认按钮文字 |
| `cancelText` | `string`     | `'Cancel'` | 取消按钮文字 |

### 示例

```tsx
<Popconfirm title="Delete?" message="Are you sure?" onConfirm={handleDelete}>
  <Button color="danger">Delete</Button>
</Popconfirm>
```

---

## Toast

```tsx
export interface ToastOptions {
  type?: 'success' | 'warning' | 'error' | 'info' | 'loading';
  title?: React.ReactNode;
  message?: React.ReactNode;
  duration?: number;
  onClose?: () => void;
  icon?: React.ReactNode;
  closable?: boolean;
}

export interface Toast {
  success(message: string | React.ReactNode, options?: ToastOptions): void;
  warning(message: string | React.ReactNode, options?: ToastOptions): void;
  error(message: string | React.ReactNode, options?: ToastOptions): void;
  info(message: string | React.ReactNode, options?: ToastOptions): void;
  loading(message: string | React.ReactNode, options?: ToastOptions): void;
  close(id: string): void;
  closeAll(): void;
}
```

### 方法

| 方法                               | 说明         |
| ---------------------------------- | ------------ |
| `Toast.success(message, options?)` | 显示成功提示 |
| `Toast.warning(message, options?)` | 显示警告提示 |
| `Toast.error(message, options?)`   | 显示错误提示 |
| `Toast.info(message, options?)`    | 显示信息提示 |
| `Toast.loading(message, options?)` | 显示加载提示 |
| `Toast.close(id)`                  | 关闭指定提示 |
| `Toast.closeAll()`                 | 关闭所有提示 |

### 选项

| 选项       | 类型         | 默认值 | 说明                                   |
| ---------- | ------------ | ------ | -------------------------------------- |
| `type`     | `string`     | 自动   | 提示类型                               |
| `duration` | `number`     | `3000` | 自动关闭时间（毫秒），0 表示不自动关闭 |
| `closable` | `boolean`    | `true` | 是否显示关闭按钮                       |
| `onClose`  | `() => void` | -      | 关闭回调                               |

### 示例

```tsx
Toast.success('Success!');

Toast.error('Error!', { duration: 0 });

const id = Toast.loading('Loading...');
// 稍后关闭
Toast.close(id);
```

### 注意事项

[Toast 使用说明](./TOAST_USAGE.md)

---

## Table

```tsx
export type TableColumn = {
  key: string;
  label: React.ReactNode;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
  render?: (value: any, record: any, index: number) => React.ReactNode;
};

export type TableProps = {
  columns: TableColumn[];
  data: any[];
  bordered?: boolean;
  striped?: boolean;
  hover?: boolean;
  loading?: boolean;
  emptyText?: string;
  className?: string;
  style?: React.CSSProperties;
};
```

### 属性

| 属性        | 类型            | 默认值      | 说明               |
| ----------- | --------------- | ----------- | ------------------ |
| `columns`   | `TableColumn[]` | -           | 列定义             |
| `data`      | `any[]`         | -           | 表格数据           |
| `bordered`  | `boolean`       | `true`      | 是否显示边框       |
| `hover`     | `boolean`       | `true`      | 是否启用行悬停效果 |
| `loading`   | `boolean`       | `false`     | 加载状态           |
| `emptyText` | `string`        | `'No data'` | 空状态文字         |

### 示例

```tsx
<Table
  columns={[
    { key: 'name', label: 'Name', width: '150px' },
    { key: 'email', label: 'Email' },
    {
      key: 'actions',
      label: 'Actions',
      render: (_, record) => <Button size="small">Edit</Button>,
    },
  ]}
  data={data}
/>
```

---

## Pagination

```tsx
export type PaginationProps = React.HTMLAttributes<HTMLDivElement> & {
  current?: number;
  pageSize?: number;
  total?: number;
  onChange?: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  showSizeChanger?: boolean;
  pageSizeOptions?: number[];
  showQuickJumper?: boolean;
};
```

### 属性

| 属性               | 类型             | 默认值              | 说明                 |
| ------------------ | ---------------- | ------------------- | -------------------- |
| `current`          | `number`         | `1`                 | 当前页码             |
| `pageSize`         | `number`         | `10`                | 每页条数             |
| `total`            | `number`         | -                   | 总条数               |
| `onChange`         | `(page) => void` | -                   | 页码改变回调         |
| `onPageSizeChange` | `(size) => void` | -                   | 页大小改变回调       |
| `showSizeChanger`  | `boolean`        | `true`              | 是否显示页大小选择器 |
| `pageSizeOptions`  | `number[]`       | `[10, 20, 50, 100]` | 页大小选项           |

### 示例

```tsx
<Pagination current={current} total={100} pageSize={10} onChange={setCurrent} />
```

---

## Upload

```tsx
export type UploadProps = React.HTMLAttributes<HTMLDivElement> & {
  action?: string;
  method?: 'POST' | 'PUT';
  multiple?: boolean;
  accept?: string;
  onChange?: (files: File[]) => void;
  onUpload?: (files: File[]) => Promise<any>;
  disabled?: boolean;
  tip?: React.ReactNode;
};
```

### 属性

| 属性       | 类型              | 默认值  | 说明           |
| ---------- | ----------------- | ------- | -------------- |
| `action`   | `string`          | -       | 上传地址       |
| `multiple` | `boolean`         | `false` | 是否多选       |
| `accept`   | `string`          | -       | 接受的文件类型 |
| `disabled` | `boolean`         | `false` | 禁用状态       |
| `onChange` | `(files) => void` | -       | 文件改变回调   |

### 示例

```tsx
<Upload action="/upload" accept="image/*" multiple onChange={handleChange} />
```

---

## Form & FormItem

```tsx
export type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {
  layout?: 'horizontal' | 'vertical' | 'inline';
  colon?: boolean;
  size?: 'small' | 'medium' | 'large';
};

export type FormItemProps = React.HTMLAttributes<HTMLDivElement> & {
  label?: React.ReactNode;
  required?: boolean;
  help?: React.ReactNode;
  validateStatus?: 'success' | 'error' | 'warning' | 'validating';
  className?: string;
};
```

### 属性

#### Form

| 属性       | 类型                                     | 默认值       | 说明             |
| ---------- | ---------------------------------------- | ------------ | ---------------- |
| `layout`   | `'horizontal' \| 'vertical' \| 'inline'` | `'vertical'` | 表单布局         |
| `colon`    | `boolean`                                | `true`       | 是否显示标签冒号 |
| `size`     | `'small' \| 'medium' \| 'large'`         | `'medium'`   | 表单项大小       |
| `onSubmit` | `(e) => void`                            | -            | 提交回调         |

#### FormItem

| 属性             | 类型        | 默认值  | 说明     |
| ---------------- | ----------- | ------- | -------- |
| `label`          | `ReactNode` | -       | 标签     |
| `required`       | `boolean`   | `false` | 是否必填 |
| `help`           | `ReactNode` | -       | 帮助文字 |
| `validateStatus` | `string`    | -       | 验证状态 |

### 示例

```tsx
<Form layout="vertical" onSubmit={handleSubmit}>
  <FormItem label="Name" required>
    <Input />
  </FormItem>

  <FormItem label="Email" required>
    <Input type="email" />
  </FormItem>

  <FormItem>
    <Button type="submit">Submit</Button>
  </FormItem>
</Form>
```

---

## 通用属性

所有组件都继承以下通用属性：

| 属性        | 类型                  | 说明           |
| ----------- | --------------------- | -------------- |
| `className` | `string`              | CSS 类名       |
| `style`     | `React.CSSProperties` | 内联样式       |
| `disabled`  | `boolean`             | 禁用状态       |
| `ref`       | `React.Ref`           | React ref 转发 |

---

## TypeScript 支持

所有组件都提供完整的 TypeScript 定义，可直接导入使用：

```tsx
import type {
  ButtonProps,
  InputProps,
  SelectProps,
  ModalProps,
  // ... 其他组件类型
} from 'beaver-ui';
```
