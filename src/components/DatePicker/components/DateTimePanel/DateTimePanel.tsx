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
  /** 临时的结束日期（datetime 两步流程中点击的结束日期，尚未确认） */
  tempRangeEnd?: Date | null;
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
  /** datetime range 的第一步还是第二步 */
  selectingStart?: boolean;
  /** 仅在日历交互区域移出时触发（不含时间面板） */
  // (已移除) onInteractiveLeave 已由 DatePicker 的全局监听处理
}

const DateTimePanel: React.FC<DateTimePanelProps> = ({
  currentMonth,
  selectedDate,
  rangeStart,
  selectedRange,
  hoverDate,
  tempRangeEnd,
  disabledDate,
  onDateClick,
  onDateHover,
  onTimeChange,
  onPrevMonth,
  onNextMonth,
  isRange = false,
  timeFormat = '24h',
  onConfirm,
  selectingStart,
}) => {
  // 确定当前显示的时间
  // datetime range 模式下：
  //   - 第一步（selectingStart=true）：显示 rangeStart（tempDateTimeStart）
  //   - 第二步（selectingStart=false）：显示 tempRangeEnd（tempDateTimeEnd），但先显示初始值（null）直到用户选择日期
  // 单选模式下：显示 selectedDate 的时间
  let currentTime: Date | null = null;

  if (!isRange) {
    // 单选模式
    currentTime = selectedDate ?? null;
  } else if (selectingStart === true) {
    // 第一步：显示起始日期的时间
    currentTime = rangeStart ?? null;
  } else if (selectingStart === false) {
    // 第二步：显示结束日期的时间（或null让TimePanel显示初始状态）
    currentTime = tempRangeEnd ?? null;
  } else {
    // 非 datetime range 的范围模式（比如 date range）
    currentTime = rangeStart ?? null;
  }

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
            tempRangeEnd={tempRangeEnd}
            disabledDate={disabledDate}
            onDateClick={onDateClick}
            onDateHover={onDateHover}
            // 对于 datetime range 的两步流程：
            // - 第一步（selectingStart === true）：仅高亮起始日期，使用单选高亮
            // - 第二步（selectingStart === false）：恢复范围模式以显示起始/结束范围
            isRange={isRange && !selectingStart}
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
