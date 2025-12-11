import React from 'react';
import type { UploadFile } from '../types';

type ThumbProps = {
  file: UploadFile;
  url?: string;
  onView: (file: UploadFile) => void;
  onRemove: (uid: string) => void;
  /** 是否是列表风格，会隐藏缩略图 overlay */
  isList?: boolean;
};

const Thumb: React.FC<ThumbProps> = ({ file, url, onView, onRemove, isList = false }) => {
  // 根据上传状态确定边框样式类
  let statusClass = '';
  if (file.status === 'error') {
    statusClass = 'beaver-upload__thumb-inner--error';
  } else if (file.status === 'success') {
    statusClass = 'beaver-upload__thumb-inner--success';
  } else if (file.status === 'uploading') {
    statusClass = 'beaver-upload__thumb-inner--uploading';
  }

  const fileType = file.file?.type || '';
  const name = file.file?.name || file.name || '';
  const urlStr = url || '';
  const imageExtRe = /\.(png|jpe?g|gif|webp|bmp|svg)$/i;
  const isImage = Boolean(
    (fileType && fileType.startsWith('image/')) || imageExtRe.test(name) || imageExtRe.test(urlStr)
  );

  const extMatch = name.match(/\.([^.]+)$/);
  const extLabel = extMatch ? extMatch[1].toUpperCase().slice(0, 4) : 'FILE';

  return (
    <div className="beaver-upload__thumb">
      <div className={`beaver-upload__thumb-inner ${statusClass}`} role="img" aria-label={file.name}>
        {isImage ? (
          <img src={url} alt={file.name} className="beaver-upload__thumb-img" />
        ) : (
          <div className="beaver-upload__file-icon" aria-hidden>
            <div className="beaver-upload__file-icon-label">{extLabel}</div>
          </div>
        )}

        {!isList && (
          <div className="beaver-upload__thumb-overlay">
            <button
              type="button"
              className="beaver-upload__avatar-btn beaver-upload__avatar-btn--view"
              onClick={(e) => {
                e.stopPropagation();
                onView(file);
              }}
              aria-label="查看"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden>
                <path
                  fill="currentColor"
                  d="M12 5c-7 0-11 7-11 7s4 7 11 7 11-7 11-7-4-7-11-7zm0 12a5 5 0 110-10 5 5 0 010 10z"
                />
                <circle fill="currentColor" cx="12" cy="12" r="2.5" />
              </svg>
            </button>

            <button
              type="button"
              className="beaver-upload__avatar-btn beaver-upload__avatar-btn--remove"
              onClick={(e) => {
                e.stopPropagation();
                onRemove(file.uid);
              }}
              aria-label="删除"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden>
                <path fill="currentColor" d="M6 7h12v13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7zm3-4h6l1 1h4v2H2V4h4l1-1z" />
              </svg>
            </button>
          </div>
        )}
      </div>

      <div className="beaver-upload__thumb-body">
        <div
          className={`beaver-upload__thumb-name ${file.status === 'error' ? 'beaver-upload__thumb-name--error' : ''}`}
        >
          {file.name}
        </div>
      </div>

      {isList && (
        <div className="beaver-upload__thumb-actions">
          <button
            type="button"
            className="beaver-upload__action-btn beaver-upload__action-btn--view"
            onClick={(e) => {
              e.stopPropagation();
              onView(file);
            }}
            aria-label="查看"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden>
              <path
                fill="currentColor"
                d="M12 5c-7 0-11 7-11 7s4 7 11 7 11-7 11-7-4-7-11-7zm0 12a5 5 0 110-10 5 5 0 010 10z"
              />
              <circle fill="currentColor" cx="12" cy="12" r="2.5" />
            </svg>
          </button>

          <button
            type="button"
            className="beaver-upload__action-btn beaver-upload__action-btn--remove"
            onClick={(e) => {
              e.stopPropagation();
              onRemove(file.uid);
            }}
            aria-label="删除"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden>
              <path fill="currentColor" d="M6 7h12v13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7zm3-4h6l1 1h4v2H2V4h4l1-1z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Thumb;
