/**
 * 日期选择器面板组件
 * 显示日期选择的日历表格
 */

import React from 'react';
import { getCalendarDays, isSameDay, isSameMonth, getWeekdays, clearTime } from '../utils';
import type { DateRange } from '../types';

interface CalendarPanelProps {
  /** 当前展示的月份 */
  currentMonth: Date;
  /** 选中的日期（单选模式） */
  selectedDate?: Date | null;
  /** 选中的日期范围（范围选择模式） */
  selectedRange?: DateRange | null;
  /** 范围选择时的起始日期 */
  rangeStart?: Date | null;
  /** 鼠标悬停的日期 */
  hoverDate?: Date | null;
  /** 禁用日期判断函数 */
  disabledDate?: (date: Date) => boolean;
  /** 日期点击回调 */
  onDateClick: (date: Date) => void;
  /** 鼠标悬停回调 */
  onDateHover?: (date: Date | null) => void;
  /** 是否为范围选择模式 */
  isRange?: boolean;
}

/**
 * 日历面板组件
 * 显示指定月份的日期选择表格
 */
const CalendarPanel: React.FC<CalendarPanelProps> = ({
  currentMonth,
  selectedDate,
  selectedRange,
  rangeStart,
  hoverDate,
  disabledDate,
  onDateClick,
  onDateHover,
  isRange = false,
}) => {
  React.useEffect(() => {
    if (isRange) {
      console.log('[CalendarPanel] Received props:', {
        isRange,
        hasSelectedRange: !!selectedRange,
        selectedRange: selectedRange
          ? {
              start: selectedRange.startDate.toISOString().split('T')[0],
              end: selectedRange.endDate.toISOString().split('T')[0],
            }
          : null,
      });
    }
  }, [isRange, selectedRange]);
  // 获取日历的所有日期（包括前后月的填充日期）
  const calendarDays = getCalendarDays(currentMonth);

  // 分组成 6 行
  const weeks: (Date | null)[][] = [];
  for (let i = 0; i < 6; i++) {
    weeks.push(calendarDays.slice(i * 7, (i + 1) * 7));
  }

  // 获取星期名称
  const weekdays = getWeekdays();

  // 判断日期是否被禁用
  const isDisabled = (date: Date): boolean => {
    if (disabledDate) {
      return disabledDate(date);
    }
    return false;
  };

  // 判断日期是否为当前月份
  const isCurrentMonth = (date: Date | null): boolean => {
    return date ? isSameMonth(date, currentMonth) : false;
  };

  // 判断日期是否在范围内（包含起始和结束日期）
  const isDateInRange = (date: Date): boolean => {
    if (!isRange || !selectedRange) return false;
    const { startDate, endDate } = selectedRange;
    const d = clearTime(date);
    const start = clearTime(startDate);
    const end = clearTime(endDate);
    if (!d || !start || !end) {
      console.warn('[isDateInRange] clearTime failed:', { d, start, end });
      return false;
    }
    const result = d.getTime() >= start.getTime() && d.getTime() <= end.getTime();
    return result;
  };

  // 判断日期是否为范围的起始或结束日期
  const isRangeEdge = (date: Date): boolean => {
    if (!isRange) return false;

    // 已确认的范围边界
    if (selectedRange) {
      return isSameDay(date, selectedRange.startDate) || isSameDay(date, selectedRange.endDate);
    }

    // 临时范围的边界（悬停过程中）
    if (rangeStart && hoverDate) {
      return isSameDay(date, rangeStart) || isSameDay(date, hoverDate);
    }

    return false;
  };

  // 判断日期是否在临时范围内（鼠标悬停时显示的范围）
  const isInHoverRange = (date: Date): boolean => {
    if (!isRange || !rangeStart || !hoverDate) return false;
    const d = clearTime(date);
    const start = clearTime(rangeStart);
    const hover = clearTime(hoverDate);
    if (!d || !start || !hover) return false;
    // 临时范围是从 rangeStart 到 hoverDate
    const minTime = Math.min(start.getTime(), hover.getTime());
    const maxTime = Math.max(start.getTime(), hover.getTime());
    return d.getTime() >= minTime && d.getTime() <= maxTime;
  };

  return (
    <div className="beaver-datepicker-calendar">
      {/* 星期行 */}
      <div className="beaver-datepicker-weekdays">
        {weekdays.map((day) => (
          <div key={day} className="beaver-datepicker-weekday">
            {day}
          </div>
        ))}
      </div>

      {/* 日期行 */}
      {weeks.map((week, weekIndex) => (
        <div key={weekIndex} className="beaver-datepicker-week">
          {week.map((date, dayIndex) => {
            if (!date) {
              return <div key={dayIndex} className="beaver-datepicker-cell beaver-datepicker-cell-empty" />;
            }

            const isSelected = !isRange && isSameDay(date, selectedDate);
            const isDisabledDate = isDisabled(date);
            const isOtherMonth = !isCurrentMonth(date);
            // 范围高亮：已确认范围 或 鼠标悬停时的临时范围
            const inRange = (isDateInRange(date) || isInHoverRange(date)) && !isOtherMonth;
            const isEdge = isRangeEdge(date);

            return (
              <div
                key={dayIndex}
                className={`beaver-datepicker-cell ${isSelected ? 'beaver-datepicker-selected' : ''} ${
                  isDisabledDate ? 'beaver-datepicker-disabled' : ''
                } ${isOtherMonth ? 'beaver-datepicker-other-month' : ''} ${
                  inRange ? 'beaver-datepicker-in-range' : ''
                } ${isEdge ? 'beaver-datepicker-range-edge' : ''}`}
                onClick={() => {
                  if (!isDisabledDate) {
                    onDateClick(date);
                  }
                }}
                onMouseEnter={() => {
                  if (isRange && !isDisabledDate && !isOtherMonth) {
                    onDateHover?.(date);
                  }
                }}
                title={date.toLocaleDateString()}
              >
                {date.getDate()}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default CalendarPanel;
