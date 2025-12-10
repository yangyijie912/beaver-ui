/**
 * Upload 组件的类型定义
 */

/**
 * 上传的文件对象
 */
export type UploadFile = {
  /** 文件唯一标识符 */
  uid: string;
  /** 文件名 */
  name: string;
  /** 文件对象 */
  file: File;
  /** 上传状态：'ready' | 'uploading' | 'success' | 'error' */
  status: 'ready' | 'uploading' | 'success' | 'error';
  /** 上传进度百分比 (0-100) */
  percent?: number;
  /** 上传响应结果 */
  response?: any;
  /** 错误信息 */
  error?: string;
};

/**
 * Upload 组件的 Props
 */
export type UploadProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onError' | 'onProgress'> & {
  /** 上传的 URL 端点 */
  action?: string;

  /** 是否支持多个文件上传 */
  multiple?: boolean;

  /**
   * 接受的文件类型，遵循 HTML input[type="file"] accept 属性规范
   * - 不指定此属性：不做限制，接受所有文件类型
   * - 单一类型：'image/jpeg' | 'image/*' | '.pdf'
   * - 多个类型：用逗号分隔，如 'image/*,.pdf,.doc,.docx'
   *
   * @example
   * accept="image/*"                    // 所有图片
   * accept="image/jpeg,image/png"       // 仅 JPEG 和 PNG
   * accept=".pdf,.doc,.docx"            // 仅这些扩展名
   * accept="image/*,.pdf"               // 图片或 PDF
   */
  accept?: string;

  /** 是否显示已上传文件列表 */
  showFileList?: boolean;

  /** 是否禁用上传 */
  disabled?: boolean;

  /** 是否自动上传文件 */
  autoUpload?: boolean;

  /** 文件列表改变时的回调 */
  onChange?: (files: UploadFile[]) => void;

  /** 上传前的钩子，返回 false 则不上传 */
  beforeUpload?: (file: File) => boolean | Promise<boolean>;

  /** 上传成功的回调 */
  onSuccess?: (response: any, file: UploadFile) => void;

  /** 上传失败的回调 */
  onError?: (error: Error, file: UploadFile) => void;

  /** 上传中的回调（进度更新） */
  onProgress?: (event: ProgressEvent, file: UploadFile) => void;

  /** 移除文件时的回调 */
  onRemove?: (file: UploadFile) => void;

  /** 自定义上传函数，返回 Promise */
  customRequest?: (file: File) => Promise<any>;

  /** 拖拽上传的提示文本 */
  dragText?: string;

  /** 上传按钮的文本 */
  buttonText?: string;

  /** 最大上传文件数 */
  maxCount?: number;

  /** 最大文件大小（字节） */
  maxSize?: number;

  /** 文件大小超限的错误提示 */
  sizeLimitMessage?: string;

  /** 自定义 HTTP 请求头 */
  headers?: Record<string, string>;

  /** 自定义表单字段名称 */
  fieldName?: string;

  /** 其他自定义数据，会附加到请求中 */
  data?: Record<string, any>;

  /** 是否启用拖拽上传 */
  drag?: boolean;
};

export default UploadProps;
