/**
 * 月份选择面板
 * 支持年份切换，用户可以选择不同年份的月份
 */

import React, { useCallback, useState } from 'react';
import './MonthPanel.css';

interface MonthPanelProps {
  currentMonth: Date;
  selectedMonth?: Date | null;
  onMonthClick: (year: number, month: number) => void;
  onYearChange?: (year: number) => void;
  disabledMonth?: (date: Date) => boolean;
}

const MonthPanel: React.FC<MonthPanelProps> = ({
  currentMonth,
  selectedMonth,
  onMonthClick,
  onYearChange,
  disabledMonth,
}) => {
  // 如果有选中的月份，显示该月份所在的年份；否则显示当前月份所在的年份
  const initialYear = selectedMonth ? selectedMonth.getFullYear() : currentMonth.getFullYear();
  const [displayYear, setDisplayYear] = useState(initialYear);

  const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

  const handleMonthClick = useCallback(
    (monthIndex: number) => {
      const testDate = new Date(displayYear, monthIndex, 1);
      if (!disabledMonth?.(testDate)) {
        onMonthClick(monthIndex, displayYear);
      }
    },
    [displayYear, onMonthClick, disabledMonth]
  );

  const handlePrevYear = useCallback(() => {
    const newYear = displayYear - 1;
    setDisplayYear(newYear);
    onYearChange?.(newYear);
  }, [displayYear, onYearChange]);

  const handleNextYear = useCallback(() => {
    const newYear = displayYear + 1;
    setDisplayYear(newYear);
    onYearChange?.(newYear);
  }, [displayYear, onYearChange]);

  return (
    <div className="beaver-datepicker-month-panel">
      {/* 年份导航 - 使用统一的日期头部样式 */}
      <div className="beaver-datepicker-header">
        <button className="beaver-datepicker-nav-btn" onClick={handlePrevYear} type="button">
          ‹
        </button>
        <div className="beaver-datepicker-header-content">{displayYear}年</div>
        <button className="beaver-datepicker-nav-btn" onClick={handleNextYear} type="button">
          ›
        </button>
      </div>

      {/* 月份网格 */}
      <div className="beaver-datepicker-month-grid">
        {months.map((month, index) => {
          const testDate = new Date(displayYear, index, 1);
          const isSelected =
            selectedMonth && selectedMonth.getFullYear() === displayYear && selectedMonth.getMonth() === index;
          const isDisabled = disabledMonth?.(testDate);

          return (
            <button
              key={index}
              className={`beaver-datepicker-month-cell ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
              onClick={() => handleMonthClick(index)}
              disabled={isDisabled}
              type="button"
            >
              {month}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MonthPanel;
