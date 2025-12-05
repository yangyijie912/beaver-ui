import React, { useEffect, useRef } from 'react';
import { useModalAnimation } from './hooks/useModalAnimation';
import ModalHeader from './components/ModalHeader';
import ModalFooter from './components/ModalFooter';
import Portal from './components/Portal';
import Button from '../Button/Button';
import type { ModalProps } from './types';
import './Modal.css';

const sizeMap: Record<string, string> = {
  small: '300px',
  medium: '520px',
  large: '800px',
};

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      open = false,
      onClose,
      title,
      width,
      size = 'medium',
      closable = true,
      maskClosable = true,
      children,
      footer,
      className = '',
      maskClassName = '',
      contentClassName = '',
      animated = true,
      ...rest
    },
    ref
  ) => {
    const { mounted, animating } = useModalAnimation(open, { animated });
    const contentRef = useRef<HTMLDivElement>(null);

    // 处理遮罩点击
    const handleMaskClick = (_e: React.MouseEvent<HTMLDivElement>) => {
      if (maskClosable && onClose) {
        onClose();
      }
    };

    // 处理Escape键关闭
    useEffect(() => {
      if (!open) return;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && onClose) {
          onClose();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }, [open, onClose]);

    // 防止body滚动
    useEffect(() => {
      if (mounted) {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        return () => {
          document.body.style.overflow = '';
          document.body.style.paddingRight = '';
        };
      }
    }, [mounted]);

    if (!mounted) return null;

    const modalWidth = width || sizeMap[size];
    const maskClass = `beaver-modal__mask ${animating ? 'beaver-modal--active' : ''} ${maskClassName}`.trim();
    const wrapperClass = `beaver-modal-wrapper ${animating ? 'beaver-modal--active' : ''} ${className}`.trim();
    const contentClass = `beaver-modal__content ${contentClassName}`.trim();

    // Modal 内容（包括遮罩）
    const modalContent = (
      <div ref={ref} className={wrapperClass} {...rest}>
        {/* 遮罩层 */}
        <div className={maskClass} onClick={handleMaskClick} aria-hidden="true" />
        {/* 内容容器 */}
        <div
          ref={contentRef}
          className={contentClass}
          style={{ width: modalWidth }}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? 'beaver-modal-title' : undefined}
        >
          {/* 标题 */}
          {(title || closable) && (
            <ModalHeader
              title={title}
              closable={closable}
              onClose={onClose}
              id={title ? 'beaver-modal-title' : undefined}
            />
          )}

          {/* 内容 */}
          <div className="beaver-modal__body">{children}</div>

          {/* 页脚 */}
          {footer !== null && footer !== false ? (
            <ModalFooter>
              {footer ? (
                footer
              ) : (
                <Button variant="primary" onClick={onClose}>
                  关闭
                </Button>
              )}
            </ModalFooter>
          ) : null}
        </div>
      </div>
    );

    return <Portal>{modalContent}</Portal>;
  }
);

Modal.displayName = 'Modal';

export default Modal;
export { ModalHeader, ModalFooter };
export type { ModalProps } from './types';
