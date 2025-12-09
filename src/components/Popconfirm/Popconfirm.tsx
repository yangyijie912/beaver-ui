import React, { useEffect, useRef, useState, useCallback, cloneElement } from 'react';
import Button from '../Button/Button';
import Portal from './components/Portal';
import { usePopconfirmPosition } from './hooks/usePopconfirmPosition';
import type { PopconfirmProps } from './types';
import './Popconfirm.css';

const Popconfirm = React.forwardRef<HTMLDivElement, PopconfirmProps>(
  (
    {
      children,
      open: controlledOpen,
      onOpenChange,
      title,
      description,
      okText = '确定',
      cancelText = '取消',
      okVariant = 'primary',
      cancelVariant = 'ghost',
      onConfirm,
      onCancel,
      maskClosable = true,
      showMask = false,
      placement = 'top',
      contentClassName = '',
      maskClassName = '',
      okDisabled = false,
      okLoading = false,
      className = '',
      ...rest
    },
    _ref
  ) => {
    // 状态管理：内部 open 状态（非受控时使用）
    const [internalOpen, setInternalOpen] = useState(false);

    // 判断是否为受控组件
    const isControlled = controlledOpen !== undefined;
    const open = isControlled ? controlledOpen : internalOpen;

    // 位置计算状态
    const [isReady, setIsReady] = useState(false);

    // Refs
    const triggerRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // 获取 popconfirm 的位置
    const position = usePopconfirmPosition(
      triggerRef as React.RefObject<HTMLElement>,
      contentRef as React.RefObject<HTMLDivElement>,
      placement,
      8,
      8,
      open
    );

    /**
     * 切换 popconfirm 的打开/关闭状态
     * @param newOpen - 新的 open 状态
     */
    const handleOpenChange = useCallback(
      (newOpen: boolean) => {
        if (!isControlled) {
          setInternalOpen(newOpen);
        }
        onOpenChange?.(newOpen);
      },
      [isControlled, onOpenChange]
    );

    /**
     * 处理确认按钮点击
     * 支持异步操作和加载状态
     */
    const handleConfirm = useCallback(
      async (e: React.MouseEvent<HTMLButtonElement>) => {
        if (okLoading || okDisabled) {
          return;
        }

        try {
          // 调用确认回调
          if (onConfirm) {
            await Promise.resolve(onConfirm(e));
          }
          // 操作成功后关闭 popconfirm
          handleOpenChange(false);
        } catch (error) {
          // 错误时保持 popconfirm 打开，由调用者处理错误
          console.error('Popconfirm confirm error:', error);
        }
      },
      [okLoading, okDisabled, onConfirm, handleOpenChange]
    );

    /**
     * 处理取消按钮点击
     */
    const handleCancel = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        onCancel?.(e);
        handleOpenChange(false);
      },
      [onCancel, handleOpenChange]
    );

    /**
     * 处理遮罩点击
     * 如果 maskClosable 为 true，则关闭 popconfirm
     */
    const handleMaskClick = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (maskClosable && e.target === e.currentTarget) {
          handleOpenChange(false);
        }
      },
      [maskClosable, handleOpenChange]
    );

    /**
     * 处理外部点击
     * 点击触发元素外的元素时关闭 popconfirm
     */
    useEffect(() => {
      if (!open) {
        return;
      }

      const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as Node;
        if (
          triggerRef.current &&
          contentRef.current &&
          !triggerRef.current.contains(target) &&
          !contentRef.current.contains(target)
        ) {
          handleOpenChange(false);
        }
      };

      // 延迟监听，避免打开时立即关闭
      const timerId = setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 0);

      return () => {
        clearTimeout(timerId);
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [open, handleOpenChange]);

    /**
     * 处理键盘事件
     * - Escape: 关闭 popconfirm
     * - Enter: 确认
     */
    useEffect(() => {
      if (!open) {
        return;
      }

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          handleOpenChange(false);
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }, [open, handleOpenChange]);

    // 当 open 状态改变时，重新计算位置
    useEffect(() => {
      if (open) {
        // 使用 requestAnimationFrame 确保 Portal 已经渲染
        const frameId = requestAnimationFrame(() => {
          setIsReady(true);
        });
        return () => cancelAnimationFrame(frameId);
      } else {
        setIsReady(false);
      }
    }, [open]);

    /**
     * 当内容挂载时，确保位置已计算
     */
    useEffect(() => {
      if (open && contentRef.current) {
        // 触发一次位置重新计算，因为此时 contentRef 已经有实际值了
        const triggerRect = triggerRef.current?.getBoundingClientRect();
        if (triggerRect) {
          // 通过改变 placement（虽然没变）来触发 hook 的重新计算
          // 这会导致 hook 重新执行，使用真实的 contentHeight
        }
      }
    }, [open]);

    /**
     * 触发元素被克隆并添加事件处理器
     */
    const trigger = cloneElement(children as React.ReactElement<any>, {
      ref: triggerRef,
      onClick: (e: React.MouseEvent<HTMLElement>) => {
        // 调用原有的 onClick 处理器
        const originalOnClick = (children as React.ReactElement<any>).props?.onClick;
        if (originalOnClick) {
          originalOnClick(e);
        }
        // 切换 popconfirm 状态
        handleOpenChange(!open);
      },
    });

    return (
      <>
        {/* 触发元素 */}
        {trigger}

        {/* Popconfirm 内容（使用 Portal 渲染到 body） */}
        {open && isReady && (
          <Portal>
            {/* 遮罩 */}
            {showMask && (
              <div
                className={`beaver-popconfirm__mask ${showMask ? 'beaver-popconfirm--show-mask' : ''} ${maskClassName}`}
                onClick={handleMaskClick}
              />
            )}

            {/* Popconfirm 包装器（用于定位） */}
            <div
              ref={wrapperRef}
              className={`beaver-popconfirm-wrapper beaver-popconfirm--${placement} ${className}`}
              style={{
                top: `${position.top}px`,
                left: `${position.left}px`,
              }}
              {...rest}
            >
              {/* Popconfirm 内容 */}
              <div
                ref={contentRef}
                className={`beaver-popconfirm__content ${contentClassName}`}
                style={
                  {
                    '--arrow-offset': `${position.arrowOffset || 0}px`,
                  } as React.CSSProperties
                }
              >
                {/* 箭头指示器 */}
                <div className="beaver-popconfirm__arrow" />

                {/* 标题 */}
                <div className="beaver-popconfirm__title">{title}</div>

                {/* 描述文本 */}
                {description && <div className="beaver-popconfirm__description">{description}</div>}

                {/* 操作按钮 */}
                <div className="beaver-popconfirm__actions">
                  {/* 取消按钮 */}
                  <Button
                    className="beaver-popconfirm__cancel"
                    variant={cancelVariant}
                    size="small"
                    onClick={handleCancel}
                  >
                    {cancelText}
                  </Button>

                  {/* 确认按钮 */}
                  <Button
                    className={`beaver-popconfirm__ok ${okLoading ? 'beaver-popconfirm--ok-loading' : ''}`}
                    variant={okVariant}
                    size="small"
                    disabled={okDisabled || okLoading}
                    onClick={handleConfirm}
                  >
                    {okText}
                  </Button>
                </div>
              </div>
            </div>
          </Portal>
        )}
      </>
    );
  }
);

Popconfirm.displayName = 'Popconfirm';

export default Popconfirm;
export type { PopconfirmProps } from './types';
