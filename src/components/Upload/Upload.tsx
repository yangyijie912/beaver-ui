import React from 'react';
import './Upload.css';
import type { UploadProps, UploadFile } from './types';

const Upload = React.forwardRef<HTMLDivElement, UploadProps>(
  (
    {
      className = '',
      action,
      multiple = true,
      accept,
      showFileList = true,
      disabled = false,
      autoUpload = true,
      onChange,
      beforeUpload,
      onSuccess,
      onError,
      onProgress,
      onRemove,
      customRequest,
      dragText = '拖拽文件到此处，或点击选择文件',
      buttonText = '选择文件',
      maxCount,
      maxSize,
      sizeLimitMessage = '文件大小超出限制',
      headers = {},
      fieldName = 'file',
      data = {},
      drag = true,
      ...props
    },
    ref
  ) => {
    // 文件列表状态
    const [files, setFiles] = React.useState<UploadFile[]>([]);

    // 拖拽状态
    const [dragging, setDragging] = React.useState(false);

    // 输入框引用
    const inputRef = React.useRef<HTMLInputElement>(null);

    /**
     * 生成唯一的文件 ID
     */
    const generateUid = (): string => {
      return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    };

    /**
     * 验证文件
     * @param file 要验证的文件
     * @returns 验证是否通过
     */
    const validateFile = (file: File): { valid: boolean; error?: string } => {
      // 检查文件大小
      if (maxSize && file.size > maxSize) {
        return { valid: false, error: sizeLimitMessage };
      }

      return { valid: true };
    };

    /**
     * 上传单个文件
     * @param uploadFile 要上传的文件对象
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
     * 通过 HTTP 上传文件
     * @param uploadFile 要上传的文件
     * @returns 服务器响应
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
     * 更新文件状态
     * @param uid 文件 uid
     * @param status 新状态
     * @param updates 其他更新字段
     */
    const updateFileStatus = (uid: string, status: UploadFile['status'], updates: Partial<UploadFile> = {}) => {
      setFiles((prevFiles) => {
        const newFiles = prevFiles.map((f) => (f.uid === uid ? { ...f, status, ...updates } : f));
        onChange?.(newFiles);
        return newFiles;
      });
    };

    /**
     * 处理文件选择
     * @param fileList 选中的文件列表
     */
    const handleFileSelect = (fileList: FileList | null) => {
      if (!fileList) return;

      const newUploadFiles: UploadFile[] = [];

      // 遍历选中的文件
      for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];

        // 验证文件
        const { valid, error } = validateFile(file);
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

      // 重置输入框
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    };

    /**
     * 处理输入框变化
     */
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      handleFileSelect(e.target.files);
    };

    /**
     * 处理拖拽进入
     */
    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
      if (!drag || disabled) return;

      e.preventDefault();
      e.stopPropagation();
      setDragging(true);
    };

    /**
     * 处理拖拽离开
     */
    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
      if (!drag || disabled) return;

      e.preventDefault();
      e.stopPropagation();

      // 只在完全离开容器时设置为 false
      if (e.currentTarget === e.target) {
        setDragging(false);
      }
    };

    /**
     * 处理拖拽悬停
     */
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
      if (!drag || disabled) return;

      e.preventDefault();
      e.stopPropagation();
    };

    /**
     * 处理放下文件
     */
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      if (!drag || disabled) return;

      e.preventDefault();
      e.stopPropagation();
      setDragging(false);

      handleFileSelect(e.dataTransfer.files);
    };

    /**
     * 移除文件
     * @param uid 要移除的文件 uid
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

    /**
     * 触发文件选择
     */
    const triggerInput = () => {
      if (!disabled) {
        inputRef.current?.click();
      }
    };

    /**
     * 格式化文件大小
     * @param bytes 字节数
     * @returns 格式化后的文件大小字符串
     */
    const formatFileSize = (bytes: number): string => {
      if (bytes === 0) return '0 B';
      const k = 1024;
      const sizes = ['B', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
    };

    const classList = ['beaver-upload'];
    if (dragging) classList.push('beaver-upload--dragging');
    if (disabled) classList.push('beaver-upload--disabled');
    if (className) classList.push(className);

    return (
      <div
        ref={ref}
        className={classList.join(' ')}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        {...props}
      >
        {/* 隐藏的文件输入框 */}
        <input
          ref={inputRef}
          type="file"
          multiple={multiple}
          accept={accept}
          onChange={handleInputChange}
          className="beaver-upload__input"
          disabled={disabled}
          style={{ display: 'none' }}
        />

        {/* 上传区域 */}
        <div className="beaver-upload__area" onClick={triggerInput}>
          <div className="beaver-upload__icon">📁</div>
          <div className="beaver-upload__text">{dragText}</div>
          <button
            type="button"
            className="beaver-upload__button"
            disabled={disabled}
            onClick={(e) => {
              e.stopPropagation();
              triggerInput();
            }}
          >
            {buttonText}
          </button>
        </div>

        {/* 文件列表 */}
        {showFileList && files.length > 0 && (
          <div className="beaver-upload__list">
            {files.map((file) => (
              <div key={file.uid} className={`beaver-upload__item beaver-upload__item--${file.status}`}>
                <div className="beaver-upload__item-icon">
                  {file.status === 'uploading' && '⏳'}
                  {file.status === 'success' && '✓'}
                  {file.status === 'error' && '✕'}
                  {file.status === 'ready' && '📄'}
                </div>
                <div className="beaver-upload__item-info">
                  <div className="beaver-upload__item-name">{file.name}</div>
                  <div className="beaver-upload__item-size">{formatFileSize(file.file.size)}</div>
                  {file.error && <div className="beaver-upload__item-error">{file.error}</div>}
                  {file.status === 'uploading' && file.percent !== undefined && (
                    <div className="beaver-upload__progress">
                      <div className="beaver-upload__progress-bar" style={{ width: `${file.percent}%` }} />
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  className="beaver-upload__remove-btn"
                  onClick={() => removeFile(file.uid)}
                  title="移除"
                  disabled={disabled}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

Upload.displayName = 'Upload';

export default Upload;
