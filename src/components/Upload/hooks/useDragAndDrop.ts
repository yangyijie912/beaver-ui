/**
 * Upload 拖拽处理 Hook
 * 处理拖拽相关的事件和状态
 */

import React from 'react';

/**
 * 拖拽处理 Hook
 */
export const useDragAndDrop = (drag: boolean, disabled: boolean, onFileSelect: (fileList: FileList | null) => void) => {
  // 拖拽状态
  const [dragging, setDragging] = React.useState(false);

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

    onFileSelect(e.dataTransfer.files);
  };

  return {
    dragging,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
  };
};
