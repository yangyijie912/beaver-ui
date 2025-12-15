/**
 * 月份选择面板
 * 支持年份切换，用户可以选择不同年份的月份
 */

import React, { useCallback, useState } from 'react';
// import './MonthPanel.css';

interface MonthPanelProps {
  currentMonth: Date;
  selectedMonth?: Date | null;
  selectedRange?: import('../../types').DateRange | null;
  rangeStart?: Date | null;
  hoverDate?: Date | null;
  tempRangeEnd?: Date | null;
  isRange?: boolean;
  onMonthClick: (year: number, month: number) => void;
  onMonthHover?: (date: Date | null) => void;
  onYearChange?: (year: number) => void;
  disabledMonth?: (date: Date) => boolean;
}

const MonthPanel: React.FC<MonthPanelProps> = ({
  currentMonth,
  selectedMonth,
  selectedRange,
  rangeStart,
  hoverDate,
  tempRangeEnd,
  isRange = false,
  onMonthClick,
  onMonthHover,
  onYearChange,
  disabledMonth,
}) => {
  // 如果有选中的月份，显示该月份所在的年份；否则显示当前月份所在的年份
  // 验证 currentMonth 和 selectedMonth 的有效性
  const validCurrentMonth = isNaN(currentMonth.getTime()) ? new Date() : currentMonth;
  const validSelectedMonth = selectedMonth && !isNaN(selectedMonth.getTime()) ? selectedMonth : null;
  const initialYear = validSelectedMonth ? validSelectedMonth.getFullYear() : validCurrentMonth.getFullYear();
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

    // 优先处理 datetime range 两步流程的情况：需要 tempRangeEnd 来展示范围
    if (rangeStart && tempRangeEnd) {
      const sVal = rangeStart.getFullYear() * 12 + rangeStart.getMonth();
      const eVal = tempRangeEnd.getFullYear() * 12 + tempRangeEnd.getMonth();
      const curVal = year * 12 + monthIndex;
      const min = Math.min(sVal, eVal);
      const max = Math.max(sVal, eVal);
      return curVal > min && curVal < max;
    }

    if (rangeStart && hoverDate) {
      const sVal = rangeStart.getFullYear() * 12 + rangeStart.getMonth();
      const hVal = hoverDate.getFullYear() * 12 + hoverDate.getMonth();
      const curVal = year * 12 + monthIndex;
      const min = Math.min(sVal, hVal);
      const max = Math.max(sVal, hVal);
      return curVal > min && curVal < max;
    }

    if (selectedRange) {
      const start = selectedRange.startDate;
      const end = selectedRange.endDate;
      const startVal = start.getFullYear() * 12 + start.getMonth();
      const endVal = end.getFullYear() * 12 + end.getMonth();
      const curVal = year * 12 + monthIndex;
      const min = Math.min(startVal, endVal);
      const max = Math.max(startVal, endVal);
      return curVal > min && curVal < max;
    }

    return false;
  };

  // 判断是否为临时点击的结束月份（datetime 两步流程中点击的结束项）
  const isMonthTempEnd = (year: number, monthIndex: number) => {
    if (!isRange || !tempRangeEnd) return false;
    return tempRangeEnd.getFullYear() === year && tempRangeEnd.getMonth() === monthIndex;
  };

  // 判断是否在临时范围内（只有在没有 hoverDate 且存在 tempRangeEnd 时使用临时样式）
  const isMonthInTempRange = (year: number, monthIndex: number) => {
    if (!isRange || !rangeStart || !tempRangeEnd || hoverDate) return false;
    const sVal = rangeStart.getFullYear() * 12 + rangeStart.getMonth();
    const eVal = tempRangeEnd.getFullYear() * 12 + tempRangeEnd.getMonth();
    const curVal = year * 12 + monthIndex;
    const min = Math.min(sVal, eVal);
    const max = Math.max(sVal, eVal);
    return curVal >= min && curVal <= max;
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
      // datetime range 两步流程中，也要把 tempRangeEnd 视为范围边界
      if (tempRangeEnd) {
        return (
          (rangeStart.getFullYear() === cur.getFullYear() && rangeStart.getMonth() === cur.getMonth()) ||
          (tempRangeEnd.getFullYear() === cur.getFullYear() && tempRangeEnd.getMonth() === cur.getMonth())
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
          const isEdge = isMonthEdge(displayYear, index);
          const inRange = isMonthInRange(displayYear, index) && !isDisabled;
          const isTempEnd = isMonthTempEnd(displayYear, index);
          const inTempRange = isMonthInTempRange(displayYear, index) && !isDisabled;

          return (
            <button
              key={index}
              className={`beaver-datepicker-month-cell ${isRange && isEdge ? 'beaver-datepicker-range-edge' : isSelected ? 'selected' : ''} ${inRange && !isEdge ? 'beaver-datepicker-in-range' : ''} ${inTempRange ? 'beaver-datepicker-temp-range' : ''} ${isTempEnd ? 'beaver-datepicker-temp-end' : ''} ${isDisabled ? 'disabled' : ''}`}
              onClick={() => handleMonthClick(index)}
              onMouseEnter={() => onMonthHover?.(testDate)}
              onMouseLeave={() => onMonthHover?.(null)}
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
