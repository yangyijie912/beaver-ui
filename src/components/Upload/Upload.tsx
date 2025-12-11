import React from 'react';
import './Upload.css';
import type { UploadProps } from './types';
import { useUploadFiles, useDragAndDrop } from './hooks';
import Thumb from './components/Thumb';
import TriggerSquare from './components/TriggerSquare';

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
      variant = 'default',
      listType = variant === 'avatar' ? 'picture' : 'list',
      renderTrigger,
      children,
      ...props
    },
    ref
  ) => {
    // 输入框引用
    const inputRef = React.useRef<HTMLInputElement>(null);

    // 不再强制 avatar 单文件：尊重用户传入的 multiple
    const effectiveMultiple = multiple;

    // 使用文件管理 Hook（支持 defaultFileList）
    const defaultFileList = (props as any)?.defaultFileList as any[] | undefined;

    const {
      files,
      handleFileSelect: handleFileSelectBase,
      removeFile,
    } = useUploadFiles(
      action,
      effectiveMultiple,
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
      onRemove,
      defaultFileList
    );

    // 如果用户显式传入 `drag`，则以用户为准；否则在 variant === 'drag' 时默认启用拖拽
    const propDrag = (props as any)?.drag;
    const effectiveDrag = propDrag === undefined ? variant === 'drag' : Boolean(propDrag);

    // 使用拖拽 Hook
    const { dragging, handleDragEnter, handleDragLeave, handleDragOver, handleDrop } = useDragAndDrop(
      effectiveDrag,
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
    const open = () => {
      if (!disabled) {
        inputRef.current?.click();
      }
    };

    const classList = ['beaver-upload'];
    if (variant === 'avatar') classList.push('beaver-upload--avatar');
    if (variant === 'drag') classList.push('beaver-upload--drag');
    if (listType === 'picture') classList.push('beaver-upload--picture-list');
    if (dragging) classList.push('beaver-upload--dragging');
    if (disabled) classList.push('beaver-upload--disabled');
    if (className) classList.push(className);

    // 构建触发节点（如果用户提供 children 或 renderTrigger，则不放入内部 stack）
    let triggerNode: React.ReactNode = null;

    if (children) {
      if (React.isValidElement(children)) {
        triggerNode = React.cloneElement(children as React.ReactElement<any>, {
          onClick: (e: any) => {
            const orig = (children as any).props?.onClick;
            if (typeof orig === 'function') {
              try {
                orig(e);
              } catch {
                // ignore
              }
            }
            open();
          },
          tabIndex: (children as any).props?.tabIndex ?? 0,
        });
      } else {
        triggerNode = (
          <div className="beaver-upload__trigger" onClick={open} role="button" tabIndex={0}>
            {children}
          </div>
        );
      }
    } else if (renderTrigger) {
      triggerNode = renderTrigger({ open });
    }

    // 生成每个文件的预览 URL（response.url 优先，其次为 createObjectURL）
    const [previews, setPreviews] = React.useState<Record<string, string>>({});
    const createdUrlsRef = React.useRef<string[]>([]);

    React.useEffect(() => {
      // 清理上一次 createObjectURL
      createdUrlsRef.current.forEach((u) => {
        try {
          URL.revokeObjectURL(u);
        } catch (_e) {
          /* ignore */
        }
      });
      createdUrlsRef.current = [];

      const next: Record<string, string> = {};
      files.forEach((f) => {
        if (f.response?.url) {
          next[f.uid] = f.response.url;
        } else if (f.file) {
          // 总是为本地文件创建预览 URL（即使上传失败也能看到图片）
          const u = URL.createObjectURL(f.file);
          next[f.uid] = u;
          createdUrlsRef.current.push(u);
        }
      });

      setPreviews(next);

      return () => {
        createdUrlsRef.current.forEach((u) => {
          try {
            URL.revokeObjectURL(u);
          } catch (_e) {
            /* ignore */
          }
        });
        createdUrlsRef.current = [];
      };
    }, [files]);

    const { drag: _drag, ...restProps } = props as any;

    return (
      <div
        ref={ref}
        className={classList.join(' ')}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        {...restProps}
      >
        {/* 隐藏的文件输入框 */}
        <input
          ref={inputRef}
          type="file"
          multiple={effectiveMultiple}
          accept={accept}
          onChange={handleInputChange}
          className="beaver-upload__input"
          disabled={disabled}
          style={{ display: 'none' }}
        />

        {/* 内部布局区（只包含组件自身的区域和文件缩略图） */}
        <div className="beaver-upload__stack">
          {variant === 'avatar' ? (
            <div className="beaver-upload__avatar-row">
              {/* avatar 变体：根据 listType 决定展示方式 */}
              {listType === 'picture' ? (
                /* 图片网格展示（原有行为） */
                <div className="beaver-upload__thumb-grid">
                  {files.length > 0
                    ? files.map((file) => {
                        const url = previews[file.uid];
                        return (
                          <Thumb
                            key={file.uid}
                            file={file}
                            url={url}
                            onView={() => {
                              const u = previews[file.uid];
                              if (u) window.open(u, '_blank');
                            }}
                            onRemove={(uid) => removeFile(uid)}
                            isList={false}
                          />
                        );
                      })
                    : null}

                  {/* 默认上传触发器（如果没有自定义 trigger） */}
                  {!triggerNode && <TriggerSquare onClick={open} />}

                  {/* 自定义 trigger（如果用户提供则渲染在行内） */}
                  {triggerNode && <div className="beaver-upload__trigger-avatar">{triggerNode}</div>}
                </div>
              ) : (
                /* list 模式：触发器保留在上方，文件列表在下方以列表样式展示 */
                <>
                  <div className="beaver-upload__trigger-avatar-container">
                    {!triggerNode && <TriggerSquare onClick={open} />}
                    {triggerNode && <div className="beaver-upload__trigger-avatar">{triggerNode}</div>}
                  </div>

                  {showFileList && files.length > 0 && (
                    <div className="beaver-upload__file-list">
                      {files.map((file) => {
                        const url = previews[file.uid];
                        return (
                          <Thumb
                            key={file.uid}
                            file={file}
                            url={url}
                            onView={() => {
                              const u = previews[file.uid];
                              if (u) window.open(u, '_blank');
                            }}
                            onRemove={(uid) => removeFile(uid)}
                            isList={true}
                          />
                        );
                      })}
                    </div>
                  )}
                </>
              )}
            </div>
          ) : variant === 'default' ? (
            /* default 变体：简易按钮风格 */
            <>
              {triggerNode}
              {!triggerNode && (
                <button type="button" className="beaver-upload__button-default" disabled={disabled} onClick={open}>
                  {buttonText}
                </button>
              )}
              {/* default 变体也展示文件列表（当启用 showFileList 时） */}
              {showFileList && files.length > 0 && (
                <div className="beaver-upload__file-list">
                  {files.map((file) => {
                    const url = previews[file.uid];
                    return (
                      <Thumb
                        key={file.uid}
                        file={file}
                        url={url}
                        onView={() => {
                          const u = previews[file.uid];
                          if (u) window.open(u, '_blank');
                        }}
                        onRemove={(uid) => removeFile(uid)}
                        isList={listType !== 'picture'}
                      />
                    );
                  })}
                </div>
              )}
            </>
          ) : (
            /* drag 变体：拖拽区域（虚线框） */
            <>
              {/* 如果用户传入 trigger（children 或 renderTrigger），将其渲染在外面，避免被内部 layout 影响 */}
              {triggerNode}

              {/* 默认上传区域（当没有 children/renderTrigger 时展示） */}
              {!triggerNode && (
                <div className="beaver-upload__area" onClick={open}>
                  <div className="beaver-upload__icon">📁</div>
                  <div className="beaver-upload__text">{dragText}</div>
                  <button
                    type="button"
                    className="beaver-upload__button"
                    disabled={disabled}
                    onClick={(e) => {
                      e.stopPropagation();
                      open();
                    }}
                  >
                    {buttonText}
                  </button>
                </div>
              )}

              {/* 文件列表 */}
              {showFileList && files.length > 0 && (
                <div className="beaver-upload__file-list">
                  {files.map((file) => {
                    const url = previews[file.uid];
                    return (
                      <Thumb
                        key={file.uid}
                        file={file}
                        url={url}
                        onView={() => {
                          const u = previews[file.uid];
                          if (u) window.open(u, '_blank');
                        }}
                        onRemove={(uid) => removeFile(uid)}
                        isList={listType !== 'picture'}
                      />
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    );
  }
);

Upload.displayName = 'Upload';

export default Upload;
