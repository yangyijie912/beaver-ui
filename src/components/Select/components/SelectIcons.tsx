import React from 'react';
import { ChevronDown } from '../../../icons';

interface SelectIconsProps {
  /** 是否加载中 */
  loading: boolean;
  /** 自定义 loading 图标 */
  loadingIcon?: React.ReactNode;
  /** 自定义图标 */
  icon?: React.ReactNode;
}

/**
 * Select 组件的图标区（右侧）
 * 支持：loading 状态、自定义图标
 */
export const SelectIcons: React.FC<SelectIconsProps> = ({ loading, loadingIcon, icon }) => {
  return (
    <div className="beaver-select__icons">
      {loading ? (
        loadingIcon ? (
          <span className="beaver-select__loading-icon">{loadingIcon}</span>
        ) : (
          <span className="beaver-select__spinner" aria-hidden />
        )
      ) : icon ? (
        <span className="beaver-select__icon">{icon}</span>
      ) : (
        <span className="beaver-select__arrow" aria-hidden>
          <ChevronDown className="beaver-select__arrow-svg" width={14} height={14} aria-hidden />
        </span>
      )}
    </div>
  );
};
