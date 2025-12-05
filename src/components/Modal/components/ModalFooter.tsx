import React from 'react';

export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * 页脚内容
   */
  children?: React.ReactNode;
}

const ModalFooter: React.FC<ModalFooterProps> = ({ children, className = '', ...rest }) => {
  return (
    <div className={`beaver-modal__footer ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default ModalFooter;
