import React from 'react';

export interface ModalHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * 标题内容
   */
  title?: React.ReactNode;
  /**
   * 是否显示关闭按钮
   */
  closable?: boolean;
  /**
   * 关闭按钮点击回调
   */
  onClose?: () => void;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ title, closable = true, onClose, className = '', ...rest }) => {
  return (
    <div className={`beaver-modal__header ${className}`} {...rest}>
      <div className="beaver-modal__title">{title}</div>
      {closable && (
        <button className="beaver-modal__close" onClick={onClose} aria-label="关闭" type="button">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ModalHeader;
