/**
 * 日期+时间组合选择面板
 * 在同一个面板中显示日期选择和时间选择
 */

import React from 'react';
import CalendarPanel from '../CalendarPanel';
import TimePanel from '../TimePanel';
import Header from '../Header';
import './DateTimePanel.css';

interface DateTimePanelProps {
  /** 当前展示的月份 */
  currentMonth: Date;
  /** 选中的日期（单选模式） */
  selectedDate?: Date | null;
  /** 范围选择时的起始日期 */
  rangeStart?: Date | null;
  /** 选中的日期范围（范围选择模式） */
  selectedRange?: import('../../types').DateRange | null;
  /** 鼠标悬停日期（用于临时范围） */
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
  /** 确定回调（仅在范围模式下使用） */
  onConfirm?: () => void;
}

const DateTimePanel: React.FC<DateTimePanelProps> = ({
  currentMonth,
  selectedDate,
  rangeStart,
  selectedRange,
  hoverDate,
  disabledDate,
  onDateClick,
  onDateHover,
  onTimeChange,
  onPrevMonth,
  onNextMonth,
  isRange = false,
  timeFormat = '24h',
  onConfirm,
}) => {
  // 确定当前显示的时间
  // 范围模式下：显示当前选择的日期（rangeStart）
  // 单选模式下：显示 selectedDate 的时间
  const currentTime = isRange ? rangeStart : selectedDate;

  return (
    <div className="beaver-datepicker-datetime-panel">
      {/* 头部 */}
      <Header currentMonth={currentMonth} onPrevMonth={onPrevMonth} onNextMonth={onNextMonth} />

      <div className="beaver-datepicker-datetime-container">
        {/* 左侧：日期选择 */}
        <div className="beaver-datepicker-datetime-calendar">
          <CalendarPanel
            currentMonth={currentMonth}
            selectedDate={rangeStart || selectedDate}
            selectedRange={selectedRange}
            rangeStart={rangeStart}
            hoverDate={hoverDate}
            disabledDate={disabledDate}
            onDateClick={onDateClick}
            onDateHover={onDateHover}
            isRange={true}
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

      {/* 底部操作按钮 */}
      {isRange && (
        <div className="beaver-datepicker-datetime-footer">
          <button className="beaver-datepicker-datetime-confirm-btn" onClick={onConfirm} type="button">
            确定
          </button>
        </div>
      )}
    </div>
  );
};

export default DateTimePanel;
