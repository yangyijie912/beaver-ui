/**
 * Upload 组件的工具函数
 */

/**
 * 生成唯一的文件 ID
 * @returns 唯一 ID
 */
export const generateUid = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * 验证文件类型是否符合 accept 规则
 * @param file 文件对象
 * @param acceptStr accept 字符串（逗号分隔）
 * @returns 是否符合规则
 */
export const isFileTypeAccepted = (file: File, acceptStr?: string): boolean => {
  // 如果没有指定 accept，则接受所有文件
  if (!acceptStr) {
    return true;
  }

  const mimeType = file.type;
  const fileName = file.name;
  const ext = fileName.substring(fileName.lastIndexOf('.')).toLowerCase();

  // 解析 accept 字符串（逗号分隔）
  const acceptedTypes = acceptStr.split(',').map((s) => s.trim());

  // 检查是否符合任一种类型
  for (const type of acceptedTypes) {
    // 处理扩展名（如 .pdf, .doc）
    if (type.startsWith('.')) {
      if (ext === type.toLowerCase()) {
        return true;
      }
    }
    // 处理 MIME 类型通配符（如 image/*, application/*)
    else if (type.endsWith('/*')) {
      const baseType = type.substring(0, type.length - 2);
      if (mimeType.startsWith(baseType + '/')) {
        return true;
      }
    }
    // 处理精确 MIME 类型（如 image/jpeg）
    else if (mimeType === type) {
      return true;
    }
  }

  return false;
};

/**
 * 验证单个文件
 * @param file 要验证的文件
 * @param accept 接受的文件类型
 * @param maxSize 最大文件大小（字节）
 * @param sizeLimitMessage 文件大小超限的错误提示
 * @returns 验证结果
 */
export const validateFile = (
  file: File,
  accept?: string,
  maxSize?: number,
  sizeLimitMessage?: string
): { valid: boolean; error?: string } => {
  // 检查文件类型
  if (accept && !isFileTypeAccepted(file, accept)) {
    return { valid: false, error: `不支持的文件类型: ${file.name}` };
  }

  // 检查文件大小
  if (maxSize && file.size > maxSize) {
    return { valid: false, error: sizeLimitMessage || '文件大小超出限制' };
  }

  return { valid: true };
};

/**
 * 格式化文件大小
 * @param bytes 字节数
 * @returns 格式化后的文件大小字符串
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
};
