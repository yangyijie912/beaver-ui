import React from 'react';
import { Close } from '../../../icons';

interface DrawerHeaderProps {
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

  /**
   * 标题元素的id，用于关联aria-labelledby
   */
  id?: string;
}

/**
 * DrawerHeader 组件
 * - 用于展示Drawer的标题和关闭按钮
 * - 内部组件，通常由Drawer自动创建，也可独立使用
 */
const DrawerHeader = React.forwardRef<HTMLDivElement, DrawerHeaderProps>(({ title, closable, onClose, id }, ref) => {
  return (
    <div className="beaver-drawer__header" ref={ref}>
      {/* 标题 */}
      {title && (
        <h2 className="beaver-drawer__title" id={id}>
          {title}
        </h2>
      )}

      {/* 关闭按钮 */}
      {closable && (
        <button className="beaver-drawer__close" onClick={onClose} aria-label="关闭抽屉" type="button">
          <Close width="1em" height="1em" aria-hidden />
        </button>
      )}
    </div>
  );
});

DrawerHeader.displayName = 'DrawerHeader';

export default DrawerHeader;
