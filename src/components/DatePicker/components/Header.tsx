/**
 * 日期选择器头部组件
 * 显示当前选择的年月和月份导航按钮
 */

import React from 'react';
import { getMonthCN, getYearCN } from '../utils';

interface HeaderProps {
  /** 当前展示的月份 */
  currentMonth: Date;
  /** 上一月按钮点击回调 */
  onPrevMonth: () => void;
  /** 下一月按钮点击回调 */
  onNextMonth: () => void;
}

/**
 * 头部组件
 * 显示年月信息和导航按钮
 */
const Header: React.FC<HeaderProps> = ({ currentMonth, onPrevMonth, onNextMonth }) => {
  // 获取年月显示文本
  const monthText = getMonthCN(currentMonth);
  const yearText = getYearCN(currentMonth);

  return (
    <div className="beaver-datepicker-header">
      {/* 上一月按钮 */}
      <button
        className="beaver-datepicker-nav-btn beaver-datepicker-nav-prev"
        onClick={onPrevMonth}
        title="上一月"
        type="button"
        aria-label="上一月"
      >
        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>

      {/* 年月显示 */}
      <div className="beaver-datepicker-header-content">
        <span className="beaver-datepicker-header-year">{yearText}</span>
        <span className="beaver-datepicker-header-month">{monthText}</span>
      </div>

      {/* 下一月按钮 */}
      <button
        className="beaver-datepicker-nav-btn beaver-datepicker-nav-next"
        onClick={onNextMonth}
        title="下一月"
        type="button"
        aria-label="下一月"
      >
        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </button>
    </div>
  );
};

export default Header;
