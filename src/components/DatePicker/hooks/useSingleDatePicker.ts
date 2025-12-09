/**
 * 单选日期选择器 Hook
 * 用于 picker = 'year' | 'month' | 'date' | 'datetime' 且 range = 'single' 的情况
 */

import { useState, useCallback } from 'react';
import type { DatePickerProps } from '../types';

/**
 * 管理单选模式下的日期选择状态
 */
export const useSingleDatePicker = (
  value: DatePickerProps['value'],
  defaultValue: DatePickerProps['defaultValue'],
  onChange: DatePickerProps['onChange']
) => {
  // 判断是否为受控组件
  const isControlled = value !== undefined;

  // 内部状态
  const [internalDate, setInternalDate] = useState<Date | null>(defaultValue || null);

  // 当前日期（受控/非受控合并）
  const currentDate = isControlled ? value : internalDate;

  // 当前月份（用于面板展示）
  const [currentMonth, setCurrentMonth] = useState<Date>(defaultValue || new Date());

  /**
   * 处理日期变化
   */
  const handleDateChange = useCallback(
    (newDate: Date | null) => {
      if (!isControlled) {
        setInternalDate(newDate);
      }
      onChange?.(newDate);
    },
    [isControlled, onChange]
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

  return {
    currentDate,
    currentMonth,
    setCurrentMonth,
    handleDateChange,
    handleMonthChange,
  };
};

export default useSingleDatePicker;
