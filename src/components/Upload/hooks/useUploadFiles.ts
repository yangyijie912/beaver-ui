/**
 * Upload 文件管理 Hook
 * 处理文件列表状态、上传逻辑等
 */

import React from 'react';
import type { UploadFile } from '../types';
import { generateUid, validateFile } from '../utils';

/**
 * 文件管理 Hook
 */
export const useUploadFiles = (
  action: string | undefined,
  multiple: boolean,
  maxCount: number | undefined,
  maxSize: number | undefined,
  accept: string | undefined,
  sizeLimitMessage: string,
  fieldName: string,
  headers: Record<string, string>,
  data: Record<string, any>,
  customRequest: ((file: File) => Promise<any>) | undefined,
  beforeUpload: ((file: File) => boolean | Promise<boolean>) | undefined,
  onChange?: (files: UploadFile[]) => void,
  onSuccess?: (response: any, file: UploadFile) => void,
  onError?: (error: Error, file: UploadFile) => void,
  onProgress?: (event: ProgressEvent, file: UploadFile) => void,
  onRemove?: (file: UploadFile) => void
) => {
  // 文件列表状态
  const [files, setFiles] = React.useState<UploadFile[]>([]);

  /**
   * 更新文件状态
   */
  const updateFileStatus = (uid: string, status: UploadFile['status'], updates: Partial<UploadFile> = {}) => {
    setFiles((prevFiles) => {
      const newFiles = prevFiles.map((f) => (f.uid === uid ? { ...f, status, ...updates } : f));
      onChange?.(newFiles);
      return newFiles;
    });
  };

  /**
   * 通过 HTTP 上传文件
   */
  const uploadViaHttp = (uploadFile: UploadFile): Promise<any> => {
    return new Promise((resolve, reject) => {
      if (!action) {
        reject(new Error('未提供 action URL'));
        return;
      }

      const formData = new FormData();
      formData.append(fieldName, uploadFile.file);

      // 添加自定义数据
      Object.entries(data).forEach(([key, value]) => {
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
          formData.append(key, String(value));
        }
      });

      const xhr = new XMLHttpRequest();

      // 监听上传进度
      xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable) {
          const percent = Math.round((event.loaded / event.total) * 100);
          updateFileStatus(uploadFile.uid, 'uploading', { percent });
          onProgress?.(event, { ...uploadFile, percent });
        }
      });

      // 监听上传完成
      xhr.addEventListener('load', () => {
        if (xhr.status === 200 || xhr.status === 201) {
          try {
            const response = JSON.parse(xhr.responseText);
            resolve(response);
          } catch {
            resolve(xhr.responseText);
          }
        } else {
          reject(new Error(`上传失败，状态码：${xhr.status}`));
        }
      });

      // 监听错误
      xhr.addEventListener('error', () => {
        reject(new Error('网络错误'));
      });

      // 监听取消
      xhr.addEventListener('abort', () => {
        reject(new Error('上传已取消'));
      });

      // 设置请求头
      xhr.open('POST', action);
      Object.entries(headers).forEach(([key, value]) => {
        xhr.setRequestHeader(key, value);
      });

      // 发送请求
      xhr.send(formData);
    });
  };

  /**
   * 上传单个文件
   */
  const uploadFile = async (uploadFile: UploadFile) => {
    try {
      // 调用前置钩子
      if (beforeUpload) {
        const shouldUpload = await beforeUpload(uploadFile.file);
        if (!shouldUpload) {
          updateFileStatus(uploadFile.uid, 'error', { error: '上传已取消' });
          return;
        }
      }

      // 更新状态为上传中
      updateFileStatus(uploadFile.uid, 'uploading');

      let response;

      // 使用自定义上传函数或默认的 HTTP 上传
      if (customRequest) {
        response = await customRequest(uploadFile.file);
      } else if (action) {
        response = await uploadViaHttp(uploadFile);
      } else {
        throw new Error('未提供 action 或 customRequest');
      }

      // 上传成功
      updateFileStatus(uploadFile.uid, 'success', { response });
      onSuccess?.(response, { ...uploadFile, status: 'success', response });
    } catch (error) {
      // 上传失败
      const errorMsg = error instanceof Error ? error.message : '上传失败';
      updateFileStatus(uploadFile.uid, 'error', { error: errorMsg });
      onError?.(error as Error, { ...uploadFile, status: 'error', error: errorMsg });
    }
  };

  /**
   * 处理文件选择
   */
  const handleFileSelect = (fileList: FileList | null, autoUpload: boolean) => {
    if (!fileList) return;

    const newUploadFiles: UploadFile[] = [];

    // 遍历选中的文件
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];

      // 验证文件
      const { valid, error } = validateFile(file, accept, maxSize, sizeLimitMessage);
      if (!valid) {
        const uid = generateUid();
        const invalidFile: UploadFile = {
          uid,
          name: file.name,
          file,
          status: 'error',
          error,
        };
        newUploadFiles.push(invalidFile);
        continue;
      }

      // 检查文件数量是否超限
      if (maxCount && files.length + newUploadFiles.length >= maxCount) {
        break;
      }

      const uid = generateUid();
      const uploadFile: UploadFile = {
        uid,
        name: file.name,
        file,
        status: 'ready',
      };

      newUploadFiles.push(uploadFile);
    }

    // 如果是单文件上传，替换文件列表；否则追加
    const updatedFiles = multiple ? [...files, ...newUploadFiles] : newUploadFiles;
    setFiles(updatedFiles);
    onChange?.(updatedFiles);

    // 自动上传
    if (autoUpload) {
      newUploadFiles.forEach((f) => uploadFile(f));
    }
  };

  /**
   * 移除文件
   */
  const removeFile = (uid: string) => {
    setFiles((prevFiles) => {
      const fileToRemove = prevFiles.find((f) => f.uid === uid);
      if (fileToRemove) {
        onRemove?.(fileToRemove);
      }
      const newFiles = prevFiles.filter((f) => f.uid !== uid);
      onChange?.(newFiles);
      return newFiles;
    });
  };

  return {
    files,
    handleFileSelect,
    removeFile,
    uploadFile,
  };
};
