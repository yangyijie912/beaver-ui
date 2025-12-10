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
  tempRangeEnd?: Date | null;
  isRange: boolean;
  disabledDate?: (date: Date) => boolean;
  onDateClick: (date: Date) => void;
  onDateHover: (date: Date | null) => void;
  onMonthChange: (monthIndex: number, year: number) => void;
  // 用于 月份面板 的年份导航（不触发选择，仅改变显示年份）
  onYearChange: (year: number) => void;
  // 用于 年份面板 的年份选择（用户点击某年以选择）
  onYearClick?: (year: number) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onTimeChange?: (time: Date) => void;
  timeFormat?: '24h' | '12h';
  onDateTimeRangeConfirm?: () => void;
  /** datetime range 的第一步还是第二步 */
  selectingStart?: boolean;
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
  tempRangeEnd,
  isRange,
  disabledDate,
  onDateClick,
  onDateHover,
  onMonthChange,
  onYearChange,
  onYearClick,
  onPrevMonth,
  onNextMonth,
  onTimeChange,
  timeFormat = '24h',
  onDateTimeRangeConfirm,
  selectingStart,
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
            selectedRange={selectedRange}
            hoverDate={hoverDate}
            tempRangeEnd={tempRangeEnd}
            disabledDate={disabledDate}
            onDateClick={onDateClick}
            onDateHover={onDateHover}
            onTimeChange={onTimeChange || (() => {})}
            onPrevMonth={onPrevMonth}
            onNextMonth={onNextMonth}
            onConfirm={onDateTimeRangeConfirm}
            isRange={isRange}
            timeFormat={timeFormat}
            selectingStart={selectingStart}
          />
        ) : (
          /* 纯日期日历面板 */
          <CalendarPanel
            currentMonth={currentMonth}
            selectedDate={selectedDate}
            selectedRange={selectedRange}
            rangeStart={rangeStart}
            hoverDate={hoverDate}
            tempRangeEnd={tempRangeEnd}
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
        selectedRange={selectedRange}
        rangeStart={rangeStart}
        hoverDate={hoverDate}
        tempRangeEnd={tempRangeEnd}
        isRange={isRange}
        onMonthClick={onMonthChange}
        onMonthHover={onDateHover}
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
        selectedRange={selectedRange}
        rangeStart={rangeStart}
        hoverDate={hoverDate}
        tempRangeEnd={tempRangeEnd}
        isRange={isRange}
        onYearClick={onYearClick || (() => {})}
        onYearHover={onDateHover}
        disabledYear={disabledDate}
      />
    );
  }

  return null;
};

export default PanelRenderer;
