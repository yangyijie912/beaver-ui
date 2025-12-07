/**
 * 日期选择器状态管理 Hook
 */

import { useState, useCallback } from 'react';
import type { DatePickerProps } from '../types';

/**
 * 管理 DatePicker 的内部状态
 */
export const useDatePickerState = (
  value: DatePickerProps['value'],
  defaultValue: DatePickerProps['defaultValue'],
  valueRange: DatePickerProps['valueRange'],
  defaultValueRange: DatePickerProps['defaultValueRange'],
  onChange: DatePickerProps['onChange'],
  onRangeChange: DatePickerProps['onRangeChange'],
  isRange: boolean
) => {
  // 判断是否为受控组件
  const isControlledDate = value !== undefined;
  const isControlledRange = valueRange !== undefined;

  // 单选日期状态
  const [internalDate, setInternalDate] = useState<Date | null>(defaultValue || null);
  // 范围选择日期状态
  const [internalRange, setInternalRange] = useState(defaultValueRange || null);
  // 日期选择器当前展示的月份
  const [currentMonth, setCurrentMonth] = useState<Date>(
    isRange ? defaultValueRange?.startDate || new Date() : defaultValue || new Date()
  );
  // 范围选择中的临时开始日期
  const [tempStartDate, setTempStartDate] = useState<Date | null>(null);

  // 获取当前活跃的日期
  const currentDate = isRange
    ? isControlledRange
      ? valueRange?.startDate
      : internalRange?.startDate
    : isControlledDate
      ? value
      : internalDate;

  // 获取当前活跃的范围
  const currentRange = isRange ? (isControlledRange ? valueRange : internalRange) : null;

  // 处理单选日期变化
  const handleDateChange = useCallback(
    (newDate: Date | null) => {
      if (!isRange) {
        if (!isControlledDate) {
          setInternalDate(newDate);
        }
        onChange?.(newDate);
      }
    },
    [isControlledDate, isRange, onChange]
  );

  // 处理范围选择日期变化
  const handleRangeChange = useCallback(
    (startDate: Date | null, endDate: Date | null) => {
      if (isRange) {
        const newRange = startDate && endDate ? { startDate, endDate } : null;
        if (!isControlledRange) {
          setInternalRange(newRange);
        }
        onRangeChange?.(newRange);
      }
    },
    [isControlledRange, isRange, onRangeChange]
  );

  // 改变月份显示
  const handleMonthChange = useCallback((offset: number) => {
    setCurrentMonth((prev) => {
      const newMonth = new Date(prev);
      newMonth.setMonth(newMonth.getMonth() + offset);
      return newMonth;
    });
  }, []);

  return {
    currentDate,
    currentRange,
    currentMonth,
    tempStartDate,
    setTempStartDate,
    setCurrentMonth,
    handleDateChange,
    handleRangeChange,
    handleMonthChange,
  };
};

/**
 * 管理 DatePicker 的 UI 状态（打开/关闭）
 */
export const useDatePickerUI = () => {
  // 日期选择器是否打开
  const [isOpen, setIsOpen] = useState(false);
  // 输入框是否获得焦点
  const [isFocused, setIsFocused] = useState(false);

  // 切换打开/关闭状态
  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // 打开选择器
  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  // 关闭选择器
  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    isFocused,
    setIsFocused,
    toggle,
    open,
    close,
  };
};

export default useDatePickerState;
