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
  /** 临时的结束日期（datetime 两步流程中点击的结束日期，尚未确认） */
  tempRangeEnd?: Date | null;
  /** 禁用日期判断函数 */
  disabledDate?: (date: Date) => boolean;
  /** 日期点击回调 */
  onDateClick: (date: Date) => void;
  /** 鼠标悬停回调 */
  onDateHover?: (date: Date | null) => void;
  /** （已移除）onInteractiveLeave 已由全局监听器处理 */
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
  tempRangeEnd,
  disabledDate,
  onDateClick,
  onDateHover,
  isRange = false,
}) => {
  React.useEffect(() => {
    // debug logs removed
  }, [isRange, selectedRange]);

  // 验证 currentMonth 的有效性，如果无效则使用今天
  const validCurrentMonth = isNaN(currentMonth.getTime()) ? new Date() : currentMonth;

  // 判断是否为已点击但未确认的临时结束日期（仅在 datetime 两步流程中出现）
  const isTempClickedEnd = (date: Date): boolean => {
    if (!isRange || !tempRangeEnd) return false;
    return isSameDay(date, tempRangeEnd);
  };
  // 获取日历的所有日期（包括前后月的填充日期）
  const calendarDays = getCalendarDays(validCurrentMonth);

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
    return date ? isSameMonth(date, validCurrentMonth) : false;
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

    // 临时范围的边界（悬停过程中或仅选中起始日期）
    if (rangeStart) {
      const effectiveEnd = hoverDate ?? tempRangeEnd ?? null;
      if (effectiveEnd) {
        return isSameDay(date, rangeStart) || isSameDay(date, effectiveEnd);
      }
      // 没有任何结束日期时也要把起始日期标记为边界（选中起点后立即显示）
      return isSameDay(date, rangeStart);
    }

    return false;
  };

  // 判断日期是否在临时范围内（鼠标悬停时显示的范围）
  const isInHoverRange = (date: Date): boolean => {
    if (!isRange || !rangeStart) return false;
    const effectiveEnd = hoverDate ?? tempRangeEnd ?? null;
    if (!effectiveEnd) return false;
    const d = clearTime(date);
    const start = clearTime(rangeStart);
    const end = clearTime(effectiveEnd);
    if (!d || !start || !end) return false;
    const minTime = Math.min(start.getTime(), end.getTime());
    const maxTime = Math.max(start.getTime(), end.getTime());
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
            const isTempEnd = isTempClickedEnd(date);

            return (
              <div
                key={dayIndex}
                className={`beaver-datepicker-cell ${isSelected ? 'beaver-datepicker-selected' : ''} ${
                  isDisabledDate ? 'beaver-datepicker-disabled' : ''
                } ${isOtherMonth ? 'beaver-datepicker-other-month' : ''} ${
                  inRange ? 'beaver-datepicker-in-range' : ''
                } ${isEdge ? 'beaver-datepicker-range-edge' : ''} ${isTempEnd ? 'beaver-datepicker-temp-end' : ''}`}
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
