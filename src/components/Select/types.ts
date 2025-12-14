export type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type SelectProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'size'> & {
  /** 下拉选项列表 */
  options?: SelectOption[];
  /** 占位符 */
  placeholder?: string;
  /** 单选时为 string，复选时为 string[] */
  value?: string | string[];
  /** 默认值 */
  defaultValue?: string | string[];
  /**
   * 事件回调，参数为 `(value, option, optionList)`：
   * - `value`: 单选为 `string`，复选为 `string[]`
   * - `option`: 单选时为 `SelectOption`，复选时为最近一次变更的 `SelectOption` 或 `SelectOption[]`（可选）
   * - `optionList`: 当前完整的选项数组（可选）
   */
  onChange?: (value: string | string[], option?: SelectOption | SelectOption[], optionList?: SelectOption[]) => void;
  /** 是否支持多选 */
  multiple?: boolean;
  /** 是否在下拉中显示搜索框 */
  searchable?: boolean;
  /** 是否允许在没有匹配项时创建自定义输入项（默认 false） */
  allowCreate?: boolean;
  /** 定制过滤函数：如果提供，将优先使用 */
  filterOption?: (input: string, option: SelectOption) => boolean;
  /** 搜索策略：'label' 只按 label 搜索，'value' 只按 value，'both' 按 label 与 value 搜索但优先 label 匹配 */
  searchBy?: 'label' | 'value' | 'both';
  /** 仅在 `multiple` 为 true 时生效：在下拉中隐藏已选项，并在每次多选后关闭下拉。 */
  filterSelected?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否加载中 */
  loading?: boolean;
  /** 自定义箭头/后缀图标（传入 ReactNode） */
  icon?: React.ReactNode;
  /** 自定义 loading 图标（传入 ReactNode），优先于默认 spinner */
  loadingIcon?: React.ReactNode;
  /** 直接设置组件宽度，支持 number(像素) 或 字符串(如 '50%','200px') */
  width?: number | string;
  /** 组件尺寸 */
  size?: 'small' | 'medium' | 'large';
  /** 外层容器 className（可用于自定义触发器样式） */
  className?: string;
  /**
   * 下拉菜单的额外 className（菜单通过 portal 渲染到 body，
   * 可用于在父组件上下文中添加特定样式，比如在分页中使用紧凑样式）
   */
  menuClassName?: string;
};
