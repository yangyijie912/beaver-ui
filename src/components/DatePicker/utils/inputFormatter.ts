/**
 * 输入框格式化模块
 * 统一处理单选和范围两种模式下的显示和解析逻辑
 */

import { formatDate, parseDate, formatWithPattern, parseWithPattern } from '../utils';
import type { DateFormat, DateRange, PickerType } from '../types';

/**
 * 获取内部使用的时间模式
 * 如果是 datetime 类型且使用默认格式，则启用带时间的模式
 */
export const getInternalPattern = (picker: PickerType, format: DateFormat): string => {
  if (picker === 'datetime' && format === 'YYYY-MM-DD') {
    return 'YYYY-MM-DD HH:mm:ss';
  }
  return format;
};

/**
 * 判断是否应该使用时间模式
 */
export const shouldUseTimePattern = (picker: PickerType, format: DateFormat): boolean => {
  return picker === 'datetime' && format === 'YYYY-MM-DD';
};

/**
 * 格式化单个日期
 */
export const formatSingleDate = (date: Date | null | undefined, picker: PickerType, format: DateFormat): string => {
  if (!date) return '';

  const useTimePattern = shouldUseTimePattern(picker, format);
  const pattern = getInternalPattern(picker, format);

  // 根据选择粒度返回对应的格式
  if (picker === 'year') {
    return `${date.getFullYear()}`;
  }

  if (picker === 'month') {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${year}-${month}`;
  }

  if (picker === 'datetime' && useTimePattern) {
    return formatWithPattern(date, pattern);
  }

  return formatDate(date, format);
};

/**
 * 格式化日期范围
 */
export const formatRangeDate = (
  range: DateRange | null | undefined,
  picker: PickerType,
  format: DateFormat
): string => {
  if (!range) return '';

  const { startDate, endDate } = range;
  const startStr = formatSingleDate(startDate, picker, format);
  const endStr = formatSingleDate(endDate, picker, format);

  return `${startStr} ~ ${endStr}`;
};

/**
 * 解析单个日期字符串
 */
export const parseSingleDate = (dateString: string, picker: PickerType, format: DateFormat): Date | null => {
  if (!dateString) return null;

  const useTimePattern = shouldUseTimePattern(picker, format);
  const pattern = getInternalPattern(picker, format);

  if (picker === 'year') {
    const year = parseInt(dateString, 10);
    return !isNaN(year) ? new Date(year, 0, 1) : null;
  }

  if (picker === 'month') {
    const parts = dateString.split('-');
    if (parts.length === 2) {
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      return !isNaN(year) && !isNaN(month) ? new Date(year, month, 1) : null;
    }
    return null;
  }

  if (picker === 'datetime' && useTimePattern) {
    return parseWithPattern(dateString, pattern);
  }

  return parseDate(dateString, format);
};

/**
 * 解析日期范围字符串
 */
export const parseRangeDate = (rangeString: string, picker: PickerType, format: DateFormat): DateRange | null => {
  if (!rangeString) return null;

  const parts = rangeString.split('~').map((p) => p.trim());
  if (parts.length !== 2) return null;

  const startDate = parseSingleDate(parts[0], picker, format);
  const endDate = parseSingleDate(parts[1], picker, format);

  if (startDate && endDate) {
    return {
      startDate,
      endDate,
    };
  }

  return null;
};
