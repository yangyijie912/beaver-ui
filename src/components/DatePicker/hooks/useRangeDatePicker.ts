/**
 * 范围日期选择器 Hook
 * 用于 picker = 'year' | 'month' | 'date' | 'datetime' 且 range = 'range' 的情况
 */

import { useState, useCallback } from 'react';
import type { DatePickerProps, DateRange } from '../types';

/**
 * 管理范围选择模式下的日期选择状态
 */
export const useRangeDatePicker = (
  valueRange: DatePickerProps['valueRange'],
  defaultValueRange: DatePickerProps['defaultValueRange'],
  onRangeChange: DatePickerProps['onRangeChange']
) => {
  // 判断是否为受控组件
  const isControlled = valueRange !== undefined;

  // 内部状态
  const [internalRange, setInternalRange] = useState<DateRange | null>(defaultValueRange || null);

  // 当前范围（受控/非受控合并）
  const currentRange = isControlled ? valueRange : internalRange;

  // 当前月份（用于面板展示）
  const [currentMonth, setCurrentMonth] = useState<Date>(defaultValueRange?.startDate || new Date());

  // 范围选择状态：是否在选择起始日期
  const [selectingStart, setSelectingStart] = useState(true);

  // 临时起始日期（用于悬停显示范围）
  const [tempStartDate, setTempStartDate] = useState<Date | null>(null);

  // 悬停日期（用于显示临时范围）
  const [hoverDate, setHoverDate] = useState<Date | null>(null);

  // datetime range 专用状态：两步确认流程
  const [tempDateTimeStart, setTempDateTimeStart] = useState<Date | null>(null);
  const [tempDateTimeEnd, setTempDateTimeEnd] = useState<Date | null>(null);
  const [confirmedStartDate, setConfirmedStartDate] = useState<Date | null>(null);

  /**
   * 处理范围变化
   */
  const handleRangeChange = useCallback(
    (startDate: Date | null, endDate: Date | null) => {
      const newRange = startDate && endDate ? { startDate, endDate } : null;
      if (!isControlled) {
        setInternalRange(newRange);
      }
      onRangeChange?.(newRange);
    },
    [isControlled, onRangeChange]
  );

  /**
   * 改变月份显示
   */
  const handleMonthChange = useCallback((offset: number) => {
    setCurrentMonth((prev) => {
      const newMonth = new Date(prev);
      newMonth.setMonth(newMonth.getMonth() + offset);
      return newMonth;
    });
  }, []);

  /**
   * 重置范围选择状态
   */
  const resetRangeState = useCallback(() => {
    setSelectingStart(true);
    setTempStartDate(null);
    setHoverDate(null);
    setTempDateTimeStart(null);
    setTempDateTimeEnd(null);
    setConfirmedStartDate(null);
  }, []);

  return {
    currentRange,
    currentMonth,
    selectingStart,
    tempStartDate,
    hoverDate,
    tempDateTimeStart,
    tempDateTimeEnd,
    confirmedStartDate,
    setCurrentMonth,
    setSelectingStart,
    setTempStartDate,
    setHoverDate,
    setTempDateTimeStart,
    setTempDateTimeEnd,
    setConfirmedStartDate,
    handleRangeChange,
    handleMonthChange,
    resetRangeState,
  };
};

export default useRangeDatePicker;
