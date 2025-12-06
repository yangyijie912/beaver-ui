import React from 'react';

interface DrawerFooterProps {
  /**
   * 页脚内容，通常为按钮等操作元素
   */
  children?: React.ReactNode;
}

/**
 * DrawerFooter 组件
 * - 用于放置Drawer底部的操作按钮
 * - 内部组件，通常由Drawer自动创建，也可独立使用
 */
const DrawerFooter = React.forwardRef<HTMLDivElement, DrawerFooterProps>(({ children }, ref) => {
  return (
    <div className="beaver-drawer__footer" ref={ref}>
      {children}
    </div>
  );
});

DrawerFooter.displayName = 'DrawerFooter';

export default DrawerFooter;
