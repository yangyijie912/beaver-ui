import React from 'react';
import { Close } from '../../../icons';

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
          <Close width="1em" height="1em" aria-hidden />
        </button>
      )}
    </div>
  );
};

export default ModalHeader;
