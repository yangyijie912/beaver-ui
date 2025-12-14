/**
 * 表单字段验证规则类型定义
 */
export type ValidationRule = {
  /** 验证方法，返回 undefined 表示验证通过，返回错误信息表示验证失败。支持同步或异步（Promise）返回 */
  validate: (value: any) => string | undefined | Promise<string | undefined>;
  /** 验证触发时机：'onChange' 或 'onBlur' */
  trigger?: 'onChange' | 'onBlur';
};

/**
 * 表单字段数据类型定义
 */
export type FieldValue = {
  [key: string]: any;
};

/**
 * 表单字段错误信息类型定义
 */
export type FieldError = {
  [key: string]: string | undefined;
};

/**
 * Form 上下文接口
 */
export type FormContextType = {
  /** 表单数据对象 */
  values: FieldValue;
  /** 表单错误信息对象 */
  errors: FieldError;
  /** 更新单个字段值 */
  setFieldValue: (name: string, value: any) => void;
  /** 验证单个字段 */
  validateField: (name: string) => Promise<boolean>;
  /** 设置字段错误 */
  setFieldError: (name: string, error: string | undefined) => void;
  /** 获取字段验证规则 */
  getFieldRules: (name: string) => ValidationRule[];
  /** 是否为禁用状态 */
  disabled?: boolean;
  /** 表单的 size */
  size?: 'small' | 'medium' | 'large';
  /** 注册字段的验证规则 */
  registerField?: (name: string, rules: ValidationRule[]) => void;
  /** 取消注册字段的验证规则 */
  unregisterField?: (name: string) => void;
};

/**
 * Form 组件的属性类型定义
 */
export type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {
  /** 初始表单数据 */
  initialValues?: FieldValue;
  /** 提交时的回调函数 */
  onSubmit?: (values: FieldValue) => void | Promise<void>;
  /** 表单布局方式 */
  layout?: 'vertical' | 'horizontal' | 'inline';
  /** 标签宽度（仅在 horizontal 布局时生效），例如 '100px' 或 120 */
  labelWidth?: number | string;
  /** 表单全局禁用 */
  disabled?: boolean;
  /** 表单尺寸 */
  size?: 'small' | 'medium' | 'large';
  /** 子元素 */
  children?: React.ReactNode;
};

/**
 * FormItem 组件的属性类型定义
 */
export type FormItemProps = React.HTMLAttributes<HTMLDivElement> & {
  /** 字段名 */
  name?: string;
  /** 标签文本 */
  label?: React.ReactNode;
  /** 是否必填（会显示红色 * 标记）*/
  required?: boolean;
  /** 字段的验证规则数组 */
  rules?: ValidationRule[];
  /** 辅助说明文本 */
  help?: React.ReactNode;
  /** 是否展示冒号 */
  colon?: boolean;
  /** 子元素 */
  children?: React.ReactNode;
};
