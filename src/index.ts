export { default as Toast, ToastProvider } from './components/Toast/Toast';
export { default as Button } from './components/Button/Button';
export { default as Radio } from './components/Radio/Radio';
export { default as RadioGroup } from './components/Radio/RadioGroup';
export { default as Checkbox } from './components/Checkbox/Checkbox';
export { default as Input } from './components/Input/Input';
export { default as Select } from './components/Select/Select';
export { default as DatePicker } from './components/DatePicker/DatePicker';
export { default as Switch } from './components/Switch/Switch';
export { default as Pagination } from './components/Pagination/Pagination';
export { default as Table } from './components/Table/Table';
export { default as Modal } from './components/Modal/Modal';
export { ModalHeader, ModalFooter } from './components/Modal/Modal';
export { default as Drawer } from './components/Drawer/Drawer';
export { DrawerHeader, DrawerFooter } from './components/Drawer/Drawer';
export { default as Tooltip } from './components/Tooltip/Tooltip';
export { default as Popconfirm } from './components/Popconfirm/Popconfirm';
export { default as Upload } from './components/Upload/Upload';
export { default as Form, FormItem } from './components/Form';
export { default as Alert } from './components/Alert/Alert';
export * from './tokens';

// 组件类型导出，方便从包根路径直接引用 TypeScript 类型
export type { ButtonProps } from './components/Button/Button';
export type { RadioProps } from './components/Radio/Radio';
export type { RadioGroupProps } from './components/Radio/RadioGroup';
export type { CheckboxProps } from './components/Checkbox/Checkbox';
export type { InputProps } from './components/Input/Input';
export type { SelectProps, SelectOption } from './components/Select/types';
export type { DatePickerProps } from './components/DatePicker/types';
export type { SwitchProps } from './components/Switch/Switch';
export type { PaginationProps } from './components/Pagination/Pagination';
export type { Column as TableColumn, Row as TableRow, Props as TableProps } from './components/Table/types';
export type { ModalProps, ModalSize } from './components/Modal/types';
export type { DrawerProps, DrawerPlacement, DrawerSize } from './components/Drawer/types';
export type { TooltipProps, TooltipPlacement } from './components/Tooltip/Tooltip';
export type { PopconfirmProps } from './components/Popconfirm/types';
export type { UploadProps, UploadFile } from './components/Upload/types';
export type { ToastType, ToastOptions } from './components/Toast/Toast';
export type { AlertProps, AlertType } from './components/Alert/Alert';
export type { FormProps, FormItemProps, ValidationRule, FieldValue, FieldError } from './components/Form';

// 导入生成的 tokens CSS（由 `npm run gen:tokens` 生成为 `src/tokens/tokens.css`）
// 这样 Vite 在构建时会把 tokens 放到最终的 CSS 中，保证主题变量可用。
// tokens CSS 已在 `src/styles/index.ts` 聚合，由 `pnpm run build:css` 负责构建并复制到 dist。

// 运行时注入已移除以避免 SSR hydration mismatch（hydration warning）。
// 请确保在构建/SSR 模板中包含生成的 tokens CSS：
// - 通过在入口或应用的 <head> 中引入 `src/tokens/tokens.css`（推荐将其内联到 SSR 模板），
// - 或在宿主应用中导入 `src/styles`（会包含 tokens CSS）。
// 如果需要在客户端动态切换主题，请在客户端生命周期（例如 React 的 useEffect）中调用 `applyTokens()`。
