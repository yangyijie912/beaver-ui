import React from 'react';
import './Upload.css';
import type { UploadProps } from './types';
import { useUploadFiles, useDragAndDrop } from './hooks';
import { formatFileSize } from './utils';

/**
 * Upload 组件
 * 
 * 用于文件上传，支持以下功能：
 * - 单文件或多文件上传
 * - 拖拽上传
 * - 自定义上传端点
 * - 进度显示
 * - 文件列表展示
 * - 文件验证（大小、类型等）
 * 
 * @example
 * ```tsx
 * <Upload
 *   action="/api/upload"
 *   multiple
 *   onChange={(files) => console.log(files)}
 * />
 * ```
 */
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
    // 输入框引用
    const inputRef = React.useRef<HTMLInputElement>(null);

    // 使用文件管理 Hook
    const { files, handleFileSelect: handleFileSelectBase, removeFile } = useUploadFiles(
      action,
      multiple,
      maxCount,
      maxSize,
      accept,
      sizeLimitMessage,
      fieldName,
      headers,
      data,
      customRequest,
      beforeUpload,
      onChange,
      onSuccess,
      onError,
      onProgress,
      onRemove
    );

    // 使用拖拽 Hook
    const { dragging, handleDragEnter, handleDragLeave, handleDragOver, handleDrop } = useDragAndDrop(
      drag,
      disabled,
      (fileList) => {
        handleFileSelectBase(fileList, autoUpload);
        // 重置输入框
        if (inputRef.current) {
          inputRef.current.value = '';
        }
      }
    );

    /**
     * 处理文件选择
     */
    const handleFileSelect = (fileList: FileList | null) => {
      handleFileSelectBase(fileList, autoUpload);
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
     * 触发文件选择
     */
    const triggerInput = () => {
      if (!disabled) {
        inputRef.current?.click();
      }
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
                  <div className="beaver-upload__item-size">
                    {formatFileSize(file.file.size)}
                  </div>
                  {file.error && (
                    <div className="beaver-upload__item-error">{file.error}</div>
                  )}
                  {file.status === 'uploading' && file.percent !== undefined && (
                    <div className="beaver-upload__progress">
                      <div
                        className="beaver-upload__progress-bar"
                        style={{ width: `${file.percent}%` }}
                      />
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
