/**
 * 年份选择面板
 */

import React, { useCallback, useState } from 'react';
import './YearPanel.css';

interface YearPanelProps {
  currentMonth: Date;
  selectedYear?: Date | null;
  onYearClick: (year: number) => void;
  onDecadeChange?: (startYear: number) => void;
  disabledYear?: (date: Date) => boolean;
}

const YearPanel: React.FC<YearPanelProps> = ({
  currentMonth,
  selectedYear,
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

          return (
            <button
              key={year}
              className={`beaver-datepicker-year-cell ${isSelected ? 'selected' : ''} ${
                isDisabled ? 'disabled' : ''
              } ${isGhost ? 'ghost' : ''}`}
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
