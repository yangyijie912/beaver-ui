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

| 属性              | 类型                                          | 默认值     | 说明             |
| ----------------- | --------------------------------------------- | ---------- | ---------------- |
| `textarea`        | `boolean`                                     | `false`    | 是否为多行文本域 |
| `size`            | `'small' \| 'medium' \| 'large'`              | `'medium'` | 输入框大小       |
| `validation`      | `'error' \| 'success' \| 'warning' \| 'none'` | `'none'`   | 验证状态         |
| `prefix`          | `ReactNode \| () => ReactNode`                | -          | 前置内容         |
| `suffix`          | `ReactNode \| () => ReactNode`                | -          | 后置内容         |
| `allowClear`      | `boolean`                                     | `false`    | 是否显示清除按钮 |
| `onClear`         | `() => void`                                  | -          | 清除时的回调     |
| `rows`            | `number`                                      | `3`        | 文本域的行数     |
| `width`           | `number \| string`                            | -          | 输入框宽度       |
| `placeholder`     | `string`                                      | -          | 占位符           |
| `prefixClassName` | `string`                                      | -          | 前置内容的类名   |
| `suffixClassName` | `string`                                      | -          | 后置内容的类名   |
| `disabled`        | `boolean`                                     | `false`    | 禁用状态         |
| `value`           | `string \| number`                            | -          | 输入框值（受控） |
| `defaultValue`    | `string \| number`                            | -          | 默认值           |
| `onChange`        | `(e: React.ChangeEvent) => void`              | -          | 值改变回调       |

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

```typescript
export type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type SelectProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'size'> & {
  options?: SelectOption[];
  placeholder?: string;
  value?: string | string[];
  defaultValue?: string | string[];
  /**
   * 事件回调，参数为 `(value, option, optionList)`：
   * - `value`: 单选为 `string`，复选为 `string[]`
   * - `option`: 单选时为 `SelectOption`，复选时为最近一次变更的 `SelectOption` 或 `SelectOption[]`（可选）
   * - `optionList`: 当前完整的选项数组（可选）
   */
  onChange?: (value: string | string[], option?: SelectOption | SelectOption[], optionList?: SelectOption[]) => void;
  multiple?: boolean;
  searchable?: boolean;
  allowCreate?: boolean;
  filterOption?: (input: string, option: SelectOption) => boolean;
  searchBy?: 'label' | 'value' | 'both';
  filterSelected?: boolean;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  loadingIcon?: React.ReactNode;
  width?: number | string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  /**
   * 下拉菜单的额外 className（菜单通过 portal 渲染到 body，
   * 可用于在父组件上下文中添加特定样式，比如在分页中使用紧凑样式）
   */
  menuClassName?: string;
};
```

### 属性

| 属性             | 类型                             | 默认值     | 说明                     |
| ---------------- | -------------------------------- | ---------- | ------------------------ |
| `options`        | `SelectOption[]`                 | `[]`       | 选项列表                 |
| `value`          | `string \| string[]`             | -          | 当前值                   |
| `placeholder`    | `string`                         | `'请选择'` | 占位符                   |
| `onChange`       | `(value, option?, optionList?)`  | -          | 值改变回调（见签名说明） |
| `multiple`       | `boolean`                        | `false`    | 多选模式                 |
| `searchable`     | `boolean`                        | `false`    | 是否可搜索               |
| `allowCreate`    | `boolean`                        | `false`    | 允许创建新选项           |
| `disabled`       | `boolean`                        | `false`    | 禁用状态                 |
| `loading`        | `boolean`                        | `false`    | 加载状态                 |
| `size`           | `'small' \| 'medium' \| 'large'` | `'medium'` | 选择框大小               |
| `width`          | `number \| string`               | -          | 选择框宽度               |
| `searchBy`       | `'label' \| 'value' \| 'both'`   | `'both'`   | 搜索范围                 |
| `filterSelected` | `boolean`                        | `false`    | 多选时是否隐藏已选项     |
| `menuClassName`  | `string`                         | -          | 下拉菜单额外类名         |

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
  /** 控制三态（中间态）显示，不会被透传到 DOM 属性 */
  indeterminate?: boolean;
  /** 如果需要给 input 本身加额外 class，请使用该属性 */
  inputClassName?: string;
};
```

### 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `label` | `ReactNode` | - | 复选框标签 |
| `checked` | `boolean` | - | 选中状态 |
| `indeterminate` | `boolean` | `false` | 中间状态（受 `indeterminate` 控制，组件会在内部将其设置到 DOM 上，但该 prop 不会作为原生属性直接透传） |
| `inputClassName` | `string` | - | 应用于实际 `input` 元素的类名 |
| `disabled` | `boolean` | `false` | 禁用状态 |
| `onChange` | `(e: React.ChangeEvent) => void` | - | 状态改变回调 |
| `name` | `string` | - | 表单字段名 |
| `value` | `string` | - | 字段值 |

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
  /** 如果需要给 input 本身加额外 class，请使用该属性 */
  inputClassName?: string;
};

export type RadioGroupProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  name?: string;
  value?: string | number;
  defaultValue?: string | number;
  disabled?: boolean;
  vertical?: boolean;
  onChange?: (value: string | number, event?: React.ChangeEvent<HTMLInputElement>) => void;
};
```

### 属性

#### Radio

| 属性             | 类型               | 默认值  | 说明                          |
| ---------------- | ------------------ | ------- | ----------------------------- |
| `label`          | `ReactNode`        | -       | 单选框标签                    |
| `value`          | `string \| number` | -       | 选项值                        |
| `checked`        | `boolean`          | -       | 选中状态                      |
| `disabled`       | `boolean`          | `false` | 禁用状态                      |
| `inputClassName` | `string`           | -       | 应用于实际 `input` 元素的类名 |

#### RadioGroup

| 属性           | 类型                      | 默认值  | 说明                                   |
| -------------- | ------------------------- | ------- | -------------------------------------- |
| `name`         | `string`                  | -       | 表单字段名                             |
| `value`        | `string \| number`        | -       | 当前值（受控）                         |
| `defaultValue` | `string \| number`        | -       | 非受控初始值                           |
| `onChange`     | `(value, event?) => void` | -       | 值改变回调，返回选中值和可选的事件对象 |
| `disabled`     | `boolean`                 | `false` | 禁用整个组                             |
| `vertical`     | `boolean`                 | `false` | 是否垂直排列（默认水平）               |

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
export type DatePickerProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value' | 'defaultValue' | 'type' | 'size'
> & {
  picker?: 'year' | 'month' | 'date' | 'datetime';
  range?: boolean;
  value?: Date | null;
  defaultValue?: Date | null;
  valueRange?: { startDate: Date; endDate: Date } | null;
  defaultValueRange?: { startDate: Date; endDate: Date } | null;
  onChange?: (date: Date | null) => void;
  onRangeChange?: (range: { startDate: Date; endDate: Date } | null) => void;
  format?: 'YYYY' | 'YYYY-MM' | 'MM/YYYY' | 'YYYY-MM-DD' | 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'YYYY/MM/DD';
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  allowClear?: boolean;
  disabledDate?: (date: Date) => boolean;
  timeFormat?: '24h' | '12h';
  size?: 'small' | 'medium' | 'large';
  width?: number | string;
  className?: string;
  style?: React.CSSProperties;
};
```

### 属性

| 属性                | 类型                                                          | 默认值  | 说明               |
| ------------------- | ------------------------------------------------------------- | ------- | ------------------ |
| `picker`            | `'year' \| 'month' \| 'date' \| 'datetime'`                   | -       | 选择粒度           |
| `range`             | `boolean`                                                     | `false` | 是否为范围选择     |
| `value`             | `Date \| null`                                                | -       | 单选模式下选中日期 |
| `defaultValue`      | `Date \| null`                                                | -       | 单选模式下默认日期 |
| `valueRange`        | `{ startDate: Date; endDate: Date } \| null`                  | -       | 范围模式下选中范围 |
| `defaultValueRange` | `{ startDate: Date; endDate: Date } \| null`                  | -       | 范围模式下默认范围 |
| `onChange`          | `(date: Date \| null) => void`                                | -       | 单选模式下的回调   |
| `onRangeChange`     | `(range: { startDate: Date; endDate: Date } \| null) => void` | -       | 范围模式下的回调   |
| `format`            | `DateFormat`（见类型定义）                                    | -       | 日期显示/解析格式  |
| `placeholder`       | `string`                                                      | -       | 占位符             |
| `disabled`          | `boolean`                                                     | `false` | 禁用状态           |
| `readOnly`          | `boolean`                                                     | `false` | 只读状态           |
| `allowClear`        | `boolean`                                                     | -       | 是否显示清除按钮   |
| `disabledDate`      | `(date: Date) => boolean`                                     | -       | 禁用日期判断函数   |
| `timeFormat`        | `'24h' \| '12h'`                                              | -       | 时间格式           |
| `size`              | `'small' \| 'medium' \| 'large'`                              | -       | 组件尺寸           |
| `width`             | `number \| string`                                            | -       | 宽度配置           |
| `className`         | `string`                                                      | -       | 自定义类名         |
| `style`             | `React.CSSProperties`                                         | -       | 自定义样式         |

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
export type SwitchProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> & {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  onChangeEvent?: React.FormEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  loading?: boolean;
  size?: 'small' | 'medium' | 'large';
  checkedChildren?: React.ReactNode;
  unCheckedChildren?: React.ReactNode;
};
```

### 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `checked` | `boolean` | - | 受控开关状态 |
| `defaultChecked` | `boolean` | `false` | 非受控初始状态 |
| `onChange` | `(checked: boolean) => void` | - | 状态切换回调（返回变更后的布尔值） |
| `onChangeEvent` | `React.FormEventHandler<HTMLButtonElement>` | - | 原生事件回调（如果需要原始事件对象） |
| `disabled` | `boolean` | `false` | 禁用状态 |
| `loading` | `boolean` | `false` | 加载状态（显示 loading 样式并禁用交互） |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | 组件尺寸 |
| `checkedChildren` | `ReactNode` | - | 打开时显示的内容 |
| `unCheckedChildren` | `ReactNode` | - | 关闭时显示的内容 |

### 示例

```tsx
<Switch checked={enabled} onChange={(v) => setEnabled(v)} />

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

| 属性         | 类型                                          | 默认值   | 说明                           |
| ------------ | --------------------------------------------- | -------- | ------------------------------ |
| `type`       | `'success' \| 'warning' \| 'error' \| 'info'` | `'info'` | 提示类型                       |
| `title`      | `ReactNode`                                   | -        | 标题                           |
| `message`    | `ReactNode`                                   | -        | 内容                           |
| `closable`   | `boolean`                                     | `false`  | 是否可关闭                     |
| `onClose`    | `() => void`                                  | -        | 关闭回调                       |
| `showIcon`   | `boolean`                                     | `true`   | 是否显示图标                   |
| `compact`    | `boolean`                                     | `false`  | 紧凑模式                       |
| `showBorder` | `boolean`                                     | `true`   | 是否展示左侧颜色条（默认显示） |

### 示例

```tsx
<Alert type="success" title="Success" message="Operation completed" closable onClose={handleClose} />
```

---

## Modal

```tsx
export type ModalSize = 'small' | 'medium' | 'large';

export type ModalProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> & {
  open: boolean;
  onClose?: () => void;
  onOk?: () => void;
  title?: React.ReactNode;
  width?: number | string;
  size?: ModalSize;
  closable?: boolean;
  maskClosable?: boolean;
  children?: React.ReactNode;
  footer?: React.ReactNode | null | false;
  className?: string;
  maskClassName?: string;
  contentClassName?: string;
};
```

### 属性

| 属性           | 类型                             | 默认值     | 说明                                |
| -------------- | -------------------------------- | ---------- | ----------------------------------- |
| `open`         | `boolean`                        | -          | 控制 Modal 是否打开（该字段为必填） |
| `title`        | `ReactNode`                      | -          | 标题                                |
| `width`        | `number \| string`               | `520px`    | 宽度（默认 520px）                  |
| `size`         | `'small' \| 'medium' \| 'large'` | `'medium'` | 预设大小（300px/520px/800px）       |
| `closable`     | `boolean`                        | `true`     | 显示关闭按钮                        |
| `maskClosable` | `boolean`                        | `true`     | 点击遮罩是否关闭                    |
| `onClose`      | `() => void`                     | -          | 关闭回调                            |
| `onOk`         | `() => void`                     | -          | 确认回调                            |
| `footer`       | `ReactNode \| null \| false`     | -          | 自定义页脚（设为 null/false 隐藏）  |

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

```typescript
export type DrawerPlacement = 'left' | 'right' | 'top' | 'bottom';

export type DrawerSize = 'small' | 'medium' | 'large';

export type DrawerProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> & {
  open: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  /**
   * Drawer的宽度（水平方向）或高度（竖向方向），可以是px单位或百分比
   * 当placement为 'left' 或 'right' 时，此值作为宽度
   * 当placement为 'top' 或 'bottom' 时，此值作为高度
   */
  width?: number | string;
  placement?: DrawerPlacement;
  size?: DrawerSize;
  closable?: boolean;
  maskClosable?: boolean;
  children?: React.ReactNode;
  footer?: React.ReactNode | null | false;
  className?: string;
  maskClassName?: string;
  contentClassName?: string;
  offset?: number;
  mask?: boolean;
};
```

### 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `open` | `boolean` | - | 控制 Drawer 是否打开（必填） |
| `title` | `ReactNode` | - | 标题 |
| `placement` | `'left' \| 'right' \| 'top' \| 'bottom'` | `'right'` | 抽屉位置 |
| `width` | `number \| string` | - | 宽度（横向）或高度（纵向），可为 px 或 % |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | 预设尺寸（当未指定 `width` 时生效，small/medium/large） |
| `closable` | `boolean` | `true` | 是否显示关闭按钮 |
| `maskClosable` | `boolean` | `true` | 点击遮罩是否关闭 |
| `onClose` | `() => void` | - | 关闭回调 |
| `footer` | `ReactNode \| null \| false` | - | 自定义页脚（设为 null/false 隐藏） |
| `offset` | `number` | `0` | 抽屉与视口边缘间距 |
| `mask` | `boolean` | `true` | 是否展示遮罩 |

### 示例

```tsx
<Drawer open={visible} title="Drawer" onClose={handleClose} placement="right">
  Content here
</Drawer>
```

---

## Tooltip

```tsx
export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

export type TooltipProps = Omit<React.HTMLAttributes<HTMLSpanElement>, 'content' | 'children'> & {
  content: React.ReactNode;
  placement?: TooltipPlacement;
  children: React.ReactElement;
  portal?: boolean;
};
```

### 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `content` | `ReactNode` | - | tooltip 要显示的内容 |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | 显示位置 |
| `portal` | `boolean` | `true` | 是否通过 portal 渲染到 `document.body`（避免被裁剪） |

### 示例

```tsx
<Tooltip title="Hint text" placement="top">
  <Button>Hover me</Button>
</Tooltip>
```

---

## Popconfirm

```typescript
export type PopconfirmProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> & {
  children: React.ReactElement;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title: React.ReactNode;
  description?: React.ReactNode;
  okText?: React.ReactNode;
  cancelText?: React.ReactNode;
  okVariant?: 'primary' | 'ghost';
  cancelVariant?: 'primary' | 'ghost';
  onConfirm?: (e?: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
  onCancel?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  maskClosable?: boolean;
  showMask?: boolean;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  contentClassName?: string;
  maskClassName?: string;
  okDisabled?: boolean;
  okLoading?: boolean;
};
```

### 属性

| 属性           | 类型                                     | 默认值  | 说明                     |
| -------------- | ---------------------------------------- | ------- | ------------------------ |
| `children`     | `ReactElement`                           | -       | 触发 Popconfirm 的子元素 |
| `open`         | `boolean`                                | -       | 控制显示（可受控）       |
| `onOpenChange` | `(open: boolean) => void`                | -       | 打开状态变化回调         |
| `title`        | `ReactNode`                              | -       | 标题（必填）             |
| `description`  | `ReactNode`                              | -       | 标题下方的描述           |
| `okText`       | `ReactNode`                              | `确定`  | 确认按钮文本             |
| `cancelText`   | `ReactNode`                              | `取消`  | 取消按钮文本             |
| `onConfirm`    | `(e?) => void \| Promise<void>`          | -       | 点击确认回调             |
| `onCancel`     | `(e?) => void`                           | -       | 点击取消回调             |
| `placement`    | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Popconfirm 出现位置      |
| `maskClosable` | `boolean`                                | `true`  | 点击遮罩是否关闭         |
| `showMask`     | `boolean`                                | `false` | 是否显示遮罩             |
| `okDisabled`   | `boolean`                                | `false` | 禁用确认按钮             |
| `okLoading`    | `boolean`                                | `false` | 确认按钮加载中状态       |

### 示例

```tsx
<Popconfirm title="Delete?" message="Are you sure?" onConfirm={handleDelete}>
  <Button color="danger">Delete</Button>
</Popconfirm>
```

---

## Toast

```tsx
export type ToastType = 'success' | 'warning' | 'error' | 'info' | 'loading';

export interface ToastOptions {
  type?: ToastType;
  title?: React.ReactNode;
  message?: React.ReactNode;
  duration?: number;
  onClose?: () => void;
  icon?: React.ReactNode;
  closable?: boolean;
}

export interface Toast {
  success(message: React.ReactNode, options?: Omit<ToastOptions, 'type' | 'message'>): string;
  warning(message: React.ReactNode, options?: Omit<ToastOptions, 'type' | 'message'>): string;
  error(message: React.ReactNode, options?: Omit<ToastOptions, 'type' | 'message'>): string;
  info(message: React.ReactNode, options?: Omit<ToastOptions, 'type' | 'message'>): string;
  loading(message: React.ReactNode, options?: Omit<ToastOptions, 'type' | 'message'>): string;
  show(options: ToastOptions): string;
  close(id: string): void;
  clear(): void;
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
| `Toast.clear()`                    | 清空所有提示 |

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

```typescript
import type { ReactNode } from 'react';
import type { PaginationProps } from '../Pagination/Pagination';

export type Column = {
  key: string;
  title: string;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
  render?: (value: any, row: Row, rowIndex: number, column: Column) => ReactNode | null | undefined;
  span?: (row: Row, rowIndex: number, column: Column) => { colSpan?: number; rowSpan?: number } | undefined;
};

export type Row = Record<string, any>;

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  columns: Column[];
  data: Row[];
  rowKey?: string;
  defaultAlign?: 'left' | 'center' | 'right';
  showCheckbox?: boolean;
  selectedKeys?: string[];
  onSelectionChange?: (keys: string[]) => void;
  renderCell?: (row: Row, column: Column, rowIndex: number) => ReactNode | null | undefined;
  preservePxAsMin?: boolean;
  minColumnPx?: number;
  fixedHeader?: boolean;
  headerOffset?: number;
  maxHeight?: number | string;
  fixedColumnCount?: number;
  fixedRightCount?: number;
  border?: boolean;
  empty?: ReactNode;
  emptyText?: ReactNode;
  loading?: boolean;
  pagination?: false | Partial<PaginationProps>;
};
```

### 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `columns` | `Column[]` | - | 列定义（每列使用 `key` 与 `title`） |
| `data` | `Row[]` | - | 表格数据 |
| `rowKey` | `string` | - | 行唯一标识字段 |
| `defaultAlign` | `'left' \| 'center' \| 'right'` | - | 默认列对齐方式 |
| `showCheckbox` | `boolean` | `false` | 是否展示行前复选框 |
| `selectedKeys` | `string[]` | - | 受控选中 keys |
| `onSelectionChange` | `(keys: string[]) => void` | - | 选中变化回调 |
| `renderCell` | `(row, column, rowIndex) => ReactNode \| null` | - | 自定义单元格渲染器 |
| `preservePxAsMin` | `boolean` | `true` | 混合宽度时是否把 px 列作为最小宽度（避免不必要横向滚动） |
| `minColumnPx` | `number` | `80` | 默认最小列宽（当未指定或无法换算宽度时） |
| `fixedHeader` | `boolean` | `false` | 是否固定表头 |
| `headerOffset` | `number` | `0` | 表头距离容器顶部的偏移 |
| `maxHeight` | `number \| string` | - | 表格容器最大高度（启用纵向滚动配合粘性表头） |
| `fixedColumnCount` | `number` | `0` | 固定左侧列数量（不含复选框列） |
| `fixedRightCount` | `number` | `0` | 固定右侧列数量 |
| `border` | `boolean` | `false` | 是否展示边框 |
| `empty` | `ReactNode` | - | 自定义空状态节点 |
| `emptyText` | `ReactNode` | `'No data'` | 空状态默认文案（当未提供 `empty` 时使用） |
| `loading` | `boolean` | `false` | 是否显示加载状态 |
| `pagination` | `false \| Partial<PaginationProps>` | - | 分页配置，传入 `false` 可禁用分页，或传入部分 `PaginationProps` 启用分页 |

### 示例

```tsx
<Table
  columns={[
    { key: 'name', title: 'Name', width: '150px' },
    { key: 'email', title: 'Email' },
    {
      key: 'actions',
      title: 'Actions',
      render: (_, record) => <Button size="small">Edit</Button>,
    },
  ]}
  data={data}
/>
```

---

## Pagination

```tsx
export type PaginationProps = {
  total: number;
  pageSize?: number;
  current?: number;
  onChange?: (page: number, pageSize?: number) => void;
  pageSizeOptions?: number[];
  showQuickJumper?: boolean;
  showTotal?: boolean;
  showSizeChanger?: boolean;
  locale?: Partial<PaginationLocale>;
  align?: 'left' | 'center' | 'right';
  disabled?: boolean;
  width?: {
    sizeChanger?: number | string;
    quickJumper?: number | string;
  };
};
```

### 属性

| 属性              | 类型                            | 默认值           | 说明                                      |
| ----------------- | ------------------------------- | ---------------- | ----------------------------------------- |
| `total`           | `number`                        | -                | 总条数（必填）                            |
| `pageSize`        | `number`                        | `10`             | 每页条数（初始）                          |
| `current`         | `number`                        | `1`              | 当前页码（受控）                          |
| `onChange`        | `(page, pageSize?) => void`     | -                | 页码或每页数量变化回调                    |
| `pageSizeOptions` | `number[]`                      | `[10,20,50,100]` | 可选的每页数量下拉选项                    |
| `showQuickJumper` | `boolean`                       | `false`          | 是否显示快速跳转输入框                    |
| `showTotal`       | `boolean`                       | `false`          | 是否显示总数                              |
| `showSizeChanger` | `boolean`                       | `false`          | 是否显示页大小切换器                      |
| `locale`          | `Partial<PaginationLocale>`     | -                | 国际化配置（覆盖默认文案）                |
| `align`           | `'left' \| 'center' \| 'right'` | `'right'`        | 对齐方式                                  |
| `disabled`        | `boolean`                       | `false`          | 是否禁用分页控件                          |
| `width`           | `object`                        | -                | 宽度配置（`sizeChanger` / `quickJumper`） |

### 示例

```tsx
<Pagination current={current} total={100} pageSize={10} onChange={setCurrent} />
```

---

## Upload

```tsx
export type UploadFile = {
  uid: string;
  name: string;
  file: File;
  status: 'ready' | 'uploading' | 'success' | 'error';
  percent?: number;
  response?: any;
  error?: string;
};

export type UploadProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onError' | 'onProgress'> & {
  action?: string;
  multiple?: boolean;
  accept?: string;
  showFileList?: boolean;
  disabled?: boolean;
  autoUpload?: boolean;
  onChange?: (files: UploadFile[]) => void;
  beforeUpload?: (file: File) => boolean | Promise<boolean>;
  onSuccess?: (response: any, file: UploadFile) => void;
  onError?: (error: Error, file: UploadFile) => void;
  onProgress?: (event: ProgressEvent, file: UploadFile) => void;
  onRemove?: (file: UploadFile) => void;
  customRequest?: (file: File) => Promise<any>;
  dragText?: string;
  buttonText?: string;
  size?: 'small' | 'medium' | 'large';
  maxCount?: number;
  maxSize?: number;
  sizeLimitMessage?: string;
  headers?: Record<string, string>;
  fieldName?: string;
  data?: Record<string, any>;
  variant?: 'default' | 'avatar' | 'drag';
  listType?: 'list' | 'picture';
  defaultFileList?: UploadFile[];
  renderTrigger?: (controls: { open: () => void }) => React.ReactNode;
  children?: React.ReactNode;
};
```

### 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `action` | `string` | - | 上传地址 |
| `multiple` | `boolean` | `true` | 是否支持多选 |
| `accept` | `string` | - | 接受的文件类型（input accept） |
| `showFileList` | `boolean` | `true` | 是否显示文件列表 |
| `disabled` | `boolean` | `false` | 禁用状态 |
| `autoUpload` | `boolean` | `true` | 是否自动上传 |
| `onChange` | `(files: UploadFile[]) => void` | - | 文件列表变化回调 |
| `beforeUpload` | `(file: File) => boolean \u007f Promise<boolean>` | - | 上传前钩子，返回 false 则取消上传 |
| `onSuccess` | `(response: any, file: UploadFile) => void` | - | 单文件上传成功回调 |
| `onError` | `(error: Error, file: UploadFile) => void` | - | 单文件上传失败回调 |
| `onProgress` | `(event: ProgressEvent, file: UploadFile) => void` | - | 上传进度回调 |
| `onRemove` | `(file: UploadFile) => void` | - | 移除文件回调 |
| `customRequest` | `(file: File) => Promise<any>` | - | 自定义上传实现 |
| `dragText` | `string` | `'拖拽文件到此处，或点击选择文件'` | 拖拽区域文字 |
| `buttonText` | `string` | `'选择文件'` | 上传按钮文本 |
| `size` | `'small' \u007f 'medium' \u007f 'large'` | - | 尺寸（优先级：props > Form 上下文） |
| `maxCount` | `number` | - | 最大文件数 |
| `maxSize` | `number` | - | 最大文件大小（字节） |
| `sizeLimitMessage` | `string` | `'文件大小超出限制'` | 超出大小提示 |
| `headers` | `Record<string,string>` | `{}` | 自定义请求头 |
| `fieldName` | `string` | `'file'` | 表单字段名 |
| `data` | `Record<string, any>` | `{}` | 附加到请求的数据 |
| `variant` | `'default' \u007f 'avatar' \u007f 'drag'` | `'default'` | 内置样式变体 |
| `listType` | `'list' \u007f 'picture'` | `variant === 'avatar' ? 'picture' : 'list'` | 文件列表展示风格 |
| `defaultFileList` | `UploadFile[]` | - | 初始文件列表（受控场景） |
| `renderTrigger` | `(controls: { open: () => void }) => ReactNode` | - | 自定义触发渲染 |
| `children` | `ReactNode` | - | 自定义触发节点（优先于内置触发） |

### 示例

```tsx
<Upload action="/upload" accept="image/*" multiple onChange={handleChange} />
```

---

## Form & FormItem

```tsx
export type FormContextType = {
  values: { [key: string]: any };
  errors: { [key: string]: string | undefined };
  setFieldValue: (name: string, value: any) => void;
  setFieldsValue?: (newValues: { [key: string]: any }) => void;
  setValues?: (newValues: { [key: string]: any }) => void;
  getValues?: () => { [key: string]: any };
  validateField: (name: string) => Promise<boolean>;
  validate?: () => Promise<boolean>;
  setFieldError: (name: string, error: string | undefined) => void;
  getFieldRules: (name: string) => any[];
  disabled?: boolean;
  layout?: 'vertical' | 'horizontal' | 'inline';
  size?: 'small' | 'medium' | 'large';
  registerField?: (name: string, rules: any[], meta?: { disabled?: boolean }) => void;
  unregisterField?: (name: string) => void;
  submitAttempted?: boolean;
  reset?: () => void;
  clear?: () => void;
};

export type FormProps = Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> & {
  initialValues?: { [key: string]: any };
  beforeSubmit?: (values: { [key: string]: any }) => boolean | Promise<boolean>;
  onSubmit?: (values: { [key: string]: any }) => void | Promise<void> | boolean | Promise<boolean>;
  layout?: 'vertical' | 'horizontal' | 'inline';
  labelWidth?: number | string;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
};

export type FormItemProps = React.HTMLAttributes<HTMLDivElement> & {
  name?: string;
  label?: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
  rules?: any[];
  help?: React.ReactNode;
  colon?: boolean;
  children?: React.ReactNode;
};
```

### 属性

#### Form

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `initialValues` | `Record<string, any>` | `{}` | 初始表单数据 |
| `beforeSubmit` | `(values) => boolean  Promise<boolean>` | - | 提交前拦截函数，返回 false 则取消提交 |
| `onSubmit` | `(values) => void  Promise<void>  boolean  Promise<boolean>` | - | 提交回调（返回 false 可取消提交） |
| `layout` | `'vertical'  'horizontal'  'inline'` | `'vertical'` | 表单布局 |
| `labelWidth` | `number  string` | - | 标签宽度（horizontal 布局时生效） |
| `disabled` | `boolean` | `false` | 整体禁用 |
| `size` | `'small'  'medium'  'large'` | `'medium'` | 表单尺寸 |
| `children` | `ReactNode` | - | 子元素 |

#### FormItem

| 属性       | 类型               | 默认值  | 说明                           |
| ---------- | ------------------ | ------- | ------------------------------ |
| `name`     | `string`           | -       | 字段名，用于与 Form 值绑定     |
| `label`    | `ReactNode`        | -       | 标签文本                       |
| `required` | `boolean`          | `false` | 是否必填（会注入默认必填规则） |
| `disabled` | `boolean`          | -       | 字段禁用（可影响验证注册）     |
| `rules`    | `ValidationRule[]` | `[]`    | 验证规则数组                   |
| `help`     | `ReactNode`        | -       | 辅助说明文本                   |
| `colon`    | `boolean`          | `true`  | 是否显示标签冒号               |
| `children` | `ReactNode`        | -       | 表单控件                       |

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
