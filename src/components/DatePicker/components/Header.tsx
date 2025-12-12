/**
 * 日期选择器头部组件
 * 显示当前选择的年月和月份导航按钮
 */

import React from 'react';
import { ArrowLeft, ArrowRight } from '../../../icons';
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
        <ArrowLeft width="1em" height="1em" aria-hidden />
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
        <ArrowRight width="1em" height="1em" aria-hidden />
      </button>
    </div>
  );
};

export default Header;
