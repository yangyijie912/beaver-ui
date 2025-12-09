/**
 * DatePicker 组件类型定义
 */

/**
 * 支持的日期格式
 */
export type DateFormat = 'YYYY-MM-DD' | 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'YYYY/MM/DD';

/**
 * 日期选择的粒度类型
 * - year: 年份选择
 * - month: 月份选择
 * - date: 日期选择
 * - datetime: 日期+时间选择
 */
export type PickerType = 'year' | 'month' | 'date' | 'datetime';

/**
 * 日期范围对象
 */
export interface DateRange {
  startDate: Date;
  endDate: Date;
}

/**
 * DatePicker 组件的 Props
 */
export type DatePickerProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value' | 'defaultValue' | 'type' | 'size'
> & {
  /** 日期选择的粒度类型 */
  picker?: PickerType;

  /** 是否为范围选择模式 (默认为 false，即单选模式) */
  range?: boolean;

  /** 当前选中的日期（单选模式） */
  value?: Date | null;

  /** 默认选中的日期 */
  defaultValue?: Date | null;

  /** 当前选中的日期范围（范围选择模式） */
  valueRange?: DateRange | null;

  /** 默认选中的日期范围 */
  defaultValueRange?: DateRange | null;

  /** 日期改变时的回调（单选模式） */
  onChange?: (date: Date | null) => void;

  /** 日期改变时的回调（范围选择模式） */
  onRangeChange?: (range: DateRange | null) => void;

  /** 日期格式化字符串 */
  format?: DateFormat;

  /** 占位符 */
  placeholder?: string;

  /** 是否禁用 */
  disabled?: boolean;

  /** 是否为只读 */
  readOnly?: boolean;

  /** 是否清除按钮，仅在非空时显示 */
  allowClear?: boolean;

  /** 禁用的日期判断函数 */
  disabledDate?: (date: Date) => boolean;

  /** 时间格式（24小时制或12小时制）*/
  timeFormat?: '24h' | '12h';

  /** 组件尺寸 */
  size?: 'small' | 'medium' | 'large';

  /** 自定义宽度，支持数字（像素）或字符串（如 '50%', '200px'） */
  width?: number | string;

  /** 自定义类名 */
  className?: string;

  /** 自定义样式 */
  style?: React.CSSProperties;
};
