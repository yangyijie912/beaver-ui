/**
 * 年份选择面板
 */

import React, { useCallback, useState } from 'react';
import './YearPanel.css';

interface YearPanelProps {
  currentMonth: Date;
  selectedYear?: Date | null;
  selectedRange?: import('../../types').DateRange | null;
  rangeStart?: Date | null;
  hoverDate?: Date | null;
  isRange?: boolean;
  onYearClick: (year: number) => void;
  onDecadeChange?: (startYear: number) => void;
  disabledYear?: (date: Date) => boolean;
}

const YearPanel: React.FC<YearPanelProps> = ({
  currentMonth,
  selectedYear,
  selectedRange,
  rangeStart,
  hoverDate,
  isRange = false,
  onYearClick,
  onDecadeChange,
  disabledYear,
}) => {
  const currentYear = currentMonth.getFullYear();
  const [startYear, setStartYear] = useState(Math.floor(currentYear / 10) * 10);
  const years = Array.from({ length: 12 }, (_, i) => startYear + i);

  const handleYearClick = useCallback(
    (year: number) => {
      const testDate = new Date(year, 0, 1);
      if (!disabledYear?.(testDate)) {
        onYearClick(year);
      }
    },
    [onYearClick, disabledYear]
  );

  const handlePrevDecade = useCallback(() => {
    const newStart = startYear - 10;
    setStartYear(newStart);
    onDecadeChange?.(newStart);
  }, [startYear, onDecadeChange]);

  const handleNextDecade = useCallback(() => {
    const newStart = startYear + 10;
    setStartYear(newStart);
    onDecadeChange?.(newStart);
  }, [startYear, onDecadeChange]);

  const isYearInRange = (year: number) => {
    if (!isRange) return false;
    if (selectedRange) {
      const start = selectedRange.startDate.getFullYear();
      const end = selectedRange.endDate.getFullYear();
      const min = Math.min(start, end);
      const max = Math.max(start, end);
      return year >= min && year <= max;
    }
    if (rangeStart && hoverDate) {
      const s = rangeStart.getFullYear();
      const h = hoverDate.getFullYear();
      const min = Math.min(s, h);
      const max = Math.max(s, h);
      return year >= min && year <= max;
    }
    return false;
  };

  const isYearEdge = (year: number) => {
    if (!isRange) return false;
    if (selectedRange) {
      return year === selectedRange.startDate.getFullYear() || year === selectedRange.endDate.getFullYear();
    }
    if (rangeStart) {
      if (hoverDate) {
        return year === rangeStart.getFullYear() || year === hoverDate.getFullYear();
      }
      return year === rangeStart.getFullYear();
    }
    return false;
  };

  return (
    <div className="beaver-datepicker-year-panel">
      {/* 十年期导航 - 使用统一的日期头部样式 */}
      <div className="beaver-datepicker-header">
        <button className="beaver-datepicker-nav-btn" onClick={handlePrevDecade} type="button">
          ‹
        </button>
        <div className="beaver-datepicker-header-content">
          {startYear}年 - {startYear + 9}年
        </div>
        <button className="beaver-datepicker-nav-btn" onClick={handleNextDecade} type="button">
          ›
        </button>
      </div>

      {/* 年份网格 */}
      <div className="beaver-datepicker-year-grid">
        {years.map((year) => {
          const testDate = new Date(year, 0, 1);
          const isSelected = selectedYear && selectedYear.getFullYear() === year;
          const isDisabled = disabledYear?.(testDate);
          const isGhost = year < startYear || year > startYear + 9;
          const inRange = isYearInRange(year) && !isDisabled;
          const isEdge = isYearEdge(year);

          return (
            <button
              key={year}
              className={`beaver-datepicker-year-cell ${isSelected ? 'selected' : ''} ${
                isDisabled ? 'disabled' : ''
              } ${isGhost ? 'ghost' : ''} ${inRange ? 'beaver-datepicker-in-range' : ''} ${isEdge ? 'beaver-datepicker-range-edge' : ''}`}
              onClick={() => handleYearClick(year)}
              disabled={isDisabled}
              type="button"
            >
              {year}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default YearPanel;
