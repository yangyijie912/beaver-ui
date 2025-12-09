/**
 * 面板渲染器组件
 * 根据 picker 类型动态渲染对应的面板
 */

import React from 'react';
import CalendarPanel from '../components/CalendarPanel';
import MonthPanel from '../components/MonthPanel';
import YearPanel from '../components/YearPanel';
import DateTimePanel from '../components/DateTimePanel';
import Header from '../components/Header';
import type { PickerType, DateRange } from '../types';

interface PanelRendererProps {
  picker: PickerType;
  currentMonth: Date;
  // 单选模式
  selectedDate?: Date | null;
  // 范围模式
  selectedRange?: DateRange | null;
  rangeStart?: Date | null;
  hoverDate?: Date | null;
  isRange: boolean;
  disabledDate?: (date: Date) => boolean;
  onDateClick: (date: Date) => void;
  onDateHover: (date: Date | null) => void;
  onMonthChange: (monthIndex: number, year: number) => void;
  onYearChange: (year: number) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onTimeChange?: (time: Date) => void;
  timeFormat?: '24h' | '12h';
  onDateTimeRangeConfirm?: () => void;
}

/**
 * 根据 picker 类型动态渲染面板
 */
export const PanelRenderer: React.FC<PanelRendererProps> = ({
  picker,
  currentMonth,
  selectedDate,
  selectedRange,
  rangeStart,
  hoverDate,
  isRange,
  disabledDate,
  onDateClick,
  onDateHover,
  onMonthChange,
  onYearChange,
  onPrevMonth,
  onNextMonth,
  onTimeChange,
  timeFormat = '24h',
  onDateTimeRangeConfirm,
}) => {
  // 日期和日期范围使用日历面板
  if (picker === 'date' || picker === 'datetime') {
    return (
      <>
        {/* 头部导航 */}
        {picker !== 'datetime' && (
          <Header currentMonth={currentMonth} onPrevMonth={onPrevMonth} onNextMonth={onNextMonth} />
        )}

        {/* 日期+时间面板 */}
        {picker === 'datetime' ? (
          <DateTimePanel
            currentMonth={currentMonth}
            selectedDate={selectedDate}
            rangeStart={rangeStart}
            disabledDate={disabledDate}
            onDateClick={onDateClick}
            onDateHover={onDateHover}
            onTimeChange={onTimeChange || (() => {})}
            onPrevMonth={onPrevMonth}
            onNextMonth={onNextMonth}
            onConfirm={onDateTimeRangeConfirm}
            isRange={isRange}
            timeFormat={timeFormat}
          />
        ) : (
          /* 纯日期日历面板 */
          <CalendarPanel
            currentMonth={currentMonth}
            selectedDate={selectedDate}
            selectedRange={selectedRange}
            rangeStart={rangeStart}
            hoverDate={hoverDate}
            disabledDate={disabledDate}
            onDateClick={onDateClick}
            onDateHover={onDateHover}
            isRange={isRange}
          />
        )}
      </>
    );
  }

  // 月份选择面板
  if (picker === 'month') {
    return (
      <MonthPanel
        currentMonth={currentMonth}
        selectedMonth={isRange ? rangeStart : selectedDate}
        onMonthClick={onMonthChange}
        onYearChange={onYearChange}
        disabledMonth={disabledDate}
      />
    );
  }

  // 年份选择面板
  if (picker === 'year') {
    return (
      <YearPanel
        currentMonth={currentMonth}
        selectedYear={isRange ? rangeStart : selectedDate}
        onYearClick={onYearChange}
        disabledYear={disabledDate}
      />
    );
  }

  return null;
};

export default PanelRenderer;
