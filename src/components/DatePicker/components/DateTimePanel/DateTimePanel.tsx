/**
 * 日期+时间组合选择面板
 * 在同一个面板中显示日期选择和时间选择
 */

import React from 'react';
import CalendarPanel from '../CalendarPanel';
import TimePanel from '../TimePanel';
import Header from '../Header';
import type { DateRange } from '../../types';
import './DateTimePanel.css';

interface DateTimePanelProps {
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
  /** 时间改变回调 */
  onTimeChange: (time: Date) => void;
  /** 上一月回调 */
  onPrevMonth: () => void;
  /** 下一月回调 */
  onNextMonth: () => void;
  /** 是否为范围选择模式 */
  isRange?: boolean;
  /** 时间格式 */
  timeFormat?: '24h' | '12h';
}

const DateTimePanel: React.FC<DateTimePanelProps> = ({
  currentMonth,
  selectedDate,
  selectedRange,
  rangeStart,
  hoverDate,
  disabledDate,
  onDateClick,
  onDateHover,
  onTimeChange,
  onPrevMonth,
  onNextMonth,
  isRange = false,
  timeFormat = '24h',
}) => {
  // 确定当前显示的时间（单选或范围选择的起始日期）
  const currentTime = isRange ? selectedRange?.startDate : selectedDate;

  return (
    <div className="beaver-datepicker-datetime-panel">
      {/* 头部 */}
      <Header currentMonth={currentMonth} onPrevMonth={onPrevMonth} onNextMonth={onNextMonth} />

      <div className="beaver-datepicker-datetime-container">
        {/* 左侧：日期选择 */}
        <div className="beaver-datepicker-datetime-calendar">
          <CalendarPanel
            currentMonth={currentMonth}
            selectedDate={!isRange ? selectedDate : undefined}
            selectedRange={isRange ? selectedRange : undefined}
            rangeStart={isRange && rangeStart ? rangeStart : undefined}
            hoverDate={isRange && hoverDate ? hoverDate : undefined}
            disabledDate={disabledDate}
            onDateClick={onDateClick}
            onDateHover={onDateHover}
            isRange={isRange}
          />
        </div>

        {/* 分隔线 */}
        <div className="beaver-datepicker-datetime-divider" />

        {/* 右侧：时间选择 */}
        <div className="beaver-datepicker-datetime-time">
          <div className="beaver-datepicker-datetime-time-title">时间</div>
          <TimePanel selectedTime={currentTime} onTimeChange={onTimeChange} timeFormat={timeFormat} />
        </div>
      </div>
    </div>
  );
};

export default DateTimePanel;
