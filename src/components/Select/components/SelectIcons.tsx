import React from 'react';
import { ChevronDown, Close } from '../../../icons';

interface SelectIconsProps {
  /** 是否加载中 */
  loading: boolean;
  /** 自定义 loading 图标 */
  loadingIcon?: React.ReactNode;
  /** 自定义图标 */
  icon?: React.ReactNode;
  /** 是否显示清除按钮 */
  allowClear?: boolean;
  /** 是否有选中值 */
  hasValue?: boolean;
  /** 清除回调 */
  onClear?: (e: React.MouseEvent) => void;
}

/**
 * Select 组件的图标区（右侧）
 * 支持：loading 状态、自定义图标、清除按钮
 */
export const SelectIcons: React.FC<SelectIconsProps> = ({ loading, loadingIcon, icon, allowClear, hasValue, onClear }) => {
  return (
    <div className="beaver-select__icons">
      {/* 清除按钮：在非加载且有值时显示 */}
      {!loading && allowClear && hasValue && (
        <span
          className="beaver-select__clear"
          role="button"
          tabIndex={-1}
          onClick={onClear}
          onMouseDown={(e) => e.preventDefault()}
          aria-label="清除"
        >
          <Close width={14} height={14} />
        </span>
      )}
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
