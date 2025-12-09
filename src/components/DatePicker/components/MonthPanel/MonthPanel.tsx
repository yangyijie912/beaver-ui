/**
 * 月份选择面板
 * 支持年份切换，用户可以选择不同年份的月份
 */

import React, { useCallback, useState } from 'react';
import './MonthPanel.css';

interface MonthPanelProps {
  currentMonth: Date;
  selectedMonth?: Date | null;
  selectedRange?: import('../../types').DateRange | null;
  rangeStart?: Date | null;
  hoverDate?: Date | null;
  isRange?: boolean;
  onMonthClick: (year: number, month: number) => void;
  onYearChange?: (year: number) => void;
  disabledMonth?: (date: Date) => boolean;
}

const MonthPanel: React.FC<MonthPanelProps> = ({
  currentMonth,
  selectedMonth,
  selectedRange,
  rangeStart,
  hoverDate,
  isRange = false,
  onMonthClick,
  onYearChange,
  disabledMonth,
}) => {
  // 调试输出，便于确认 props 是否正确传入
  React.useEffect(() => {}, [selectedRange, rangeStart, hoverDate, isRange, selectedMonth]);
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

  // 判断某个月是否在选中范围或临时悬停范围内
  const isMonthInRange = (year: number, monthIndex: number) => {
    if (!isRange) return false;
    if (selectedRange) {
      const start = selectedRange.startDate;
      const end = selectedRange.endDate;
      const startVal = start.getFullYear() * 12 + start.getMonth();
      const endVal = end.getFullYear() * 12 + end.getMonth();
      const curVal = year * 12 + monthIndex;
      const min = Math.min(startVal, endVal);
      const max = Math.max(startVal, endVal);
      return curVal >= min && curVal <= max;
    }

    if (rangeStart && hoverDate) {
      const sVal = rangeStart.getFullYear() * 12 + rangeStart.getMonth();
      const hVal = hoverDate.getFullYear() * 12 + hoverDate.getMonth();
      const curVal = year * 12 + monthIndex;
      const min = Math.min(sVal, hVal);
      const max = Math.max(sVal, hVal);
      return curVal >= min && curVal <= max;
    }

    return false;
  };

  const isMonthEdge = (year: number, monthIndex: number) => {
    if (!isRange) return false;
    const cur = new Date(year, monthIndex, 1);
    if (selectedRange) {
      const start = selectedRange.startDate;
      const end = selectedRange.endDate;
      return (
        (start.getFullYear() === cur.getFullYear() && start.getMonth() === cur.getMonth()) ||
        (end.getFullYear() === cur.getFullYear() && end.getMonth() === cur.getMonth())
      );
    }
    if (rangeStart) {
      if (hoverDate) {
        return (
          (rangeStart.getFullYear() === cur.getFullYear() && rangeStart.getMonth() === cur.getMonth()) ||
          (hoverDate.getFullYear() === cur.getFullYear() && hoverDate.getMonth() === cur.getMonth())
        );
      }
      return rangeStart.getFullYear() === cur.getFullYear() && rangeStart.getMonth() === cur.getMonth();
    }
    return false;
  };

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
          const inRange = isMonthInRange(displayYear, index) && !isDisabled;
          const isEdge = isMonthEdge(displayYear, index);

          return (
            <button
              key={index}
              className={`beaver-datepicker-month-cell ${isSelected ? 'selected' : ''} ${inRange ? 'beaver-datepicker-in-range' : ''} ${isEdge ? 'beaver-datepicker-range-edge' : ''} ${isDisabled ? 'disabled' : ''}`}
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
