/**
 * DatePicker 日期处理工具函数
 */

import { format, parse, isValid, startOfMonth, endOfMonth, addMonths } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import type { DateFormat } from './types';

/**
 * 获取 date-fns 支持的格式字符串
 * @param format 自定义格式
 * @returns date-fns 格式字符串
 */
export const getDateFormatString = (fmt: DateFormat): string => {
  const formatMap: Record<DateFormat, string> = {
    'YYYY-MM-DD': 'yyyy-MM-dd',
    'DD/MM/YYYY': 'dd/MM/yyyy',
    'MM/DD/YYYY': 'MM/dd/yyyy',
    'YYYY/MM/DD': 'yyyy/MM/dd',
  };
  return formatMap[fmt] || 'yyyy-MM-dd';
};

/**
 * 格式化日期为字符串
 * @param date 日期对象
 * @param fmt 格式化格式
 * @returns 格式化后的日期字符串
 */
export const formatDate = (date: Date | null | undefined, fmt: DateFormat = 'YYYY-MM-DD'): string => {
  if (!date) return '';
  try {
    return format(new Date(date), getDateFormatString(fmt), { locale: zhCN });
  } catch {
    return '';
  }
};

/**
 * 解析日期字符串为 Date 对象
 * @param dateString 日期字符串
 * @param fmt 格式化格式
 * @returns Date 对象或 null
 */
export const parseDate = (dateString: string, fmt: DateFormat = 'YYYY-MM-DD'): Date | null => {
  if (!dateString) return null;
  try {
    const parsed = parse(dateString, getDateFormatString(fmt), new Date(), { locale: zhCN });
    return isValid(parsed) ? parsed : null;
  } catch {
    return null;
  }
};

/**
 * 获取月份的所有日期数组（包含前后月的填充日期）
 * @param date 指定月份的任意日期
 * @returns 包含 42 个日期的数组（6 行 × 7 列）
 */
export const getCalendarDays = (date: Date): (Date | null)[] => {
  const first = startOfMonth(date);
  // 获取当月的最后一天（暂不直接使用，但保留注释以便将来扩展）
  // const _last = endOfMonth(date);

  // 获取第一行的起始日期（前月的填充）
  const startDate = new Date(first);
  startDate.setDate(startDate.getDate() - first.getDay());

  // 生成 42 个日期（6 行 × 7 列）
  const days: (Date | null)[] = [];
  for (let i = 0; i < 42; i++) {
    const d = new Date(startDate);
    d.setDate(d.getDate() + i);
    days.push(d);
  }

  return days;
};

/**
 * 判断两个日期是否为同一天
 * @param date1 第一个日期
 * @param date2 第二个日期
 * @returns 是否为同一天
 */
export const isSameDay = (date1: Date | null | undefined, date2: Date | null | undefined): boolean => {
  if (!date1 || !date2) return false;
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

/**
 * 判断两个日期是否为同一月份
 * @param date1 第一个日期
 * @param date2 第二个日期
 * @returns 是否为同一月份
 */
export const isSameMonth = (date1: Date | null | undefined, date2: Date | null | undefined): boolean => {
  if (!date1 || !date2) return false;
  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth();
};

/**
 * 判断日期是否在指定范围内
 * @param date 日期
 * @param start 范围开始日期
 * @param end 范围结束日期
 * @returns 是否在范围内
 */
export const isDateInRange = (
  date: Date | null | undefined,
  start: Date | null | undefined,
  end: Date | null | undefined
): boolean => {
  if (!date || !start || !end) return false;
  return date >= start && date <= end;
};

/**
 * 获取月份的开始日期
 * @param date 任意日期
 * @returns 该月的第一天
 */
export const getMonthStart = (date: Date): Date => {
  return startOfMonth(date);
};

/**
 * 获取月份的结束日期
 * @param date 任意日期
 * @returns 该月的最后一天
 */
export const getMonthEnd = (date: Date): Date => {
  return endOfMonth(date);
};

/**
 * 添加月份
 * @param date 基准日期
 * @param months 要添加的月份数（可以为负数）
 * @returns 新日期
 */
export const addMonth = (date: Date, months: number): Date => {
  return addMonths(date, months);
};

/**
 * 获取周数组的显示名称
 * @returns 星期数组，从周一开始
 */
export const getWeekdays = (): string[] => {
  return ['一', '二', '三', '四', '五', '六', '日'];
};

/**
 * 获取月份的中文显示
 * @param date 日期
 * @returns 月份中文字符串（如 "1月" "12月"）
 */
export const getMonthCN = (date: Date): string => {
  return `${date.getMonth() + 1}月`;
};

/**
 * 获取年份的中文显示
 * @param date 日期
 * @returns 年份中文字符串（如 "2024年"）
 */
export const getYearCN = (date: Date): string => {
  return `${date.getFullYear()}年`;
};

/**
 * 格式化范围日期为显示字符串
 * @param startDate 范围开始日期
 * @param endDate 范围结束日期
 * @param fmt 格式化格式
 * @returns 格式化后的字符串（如 "2024-01-01 ~ 2024-01-31"）
 */
export const formatDateRange = (
  startDate: Date | null | undefined,
  endDate: Date | null | undefined,
  fmt: DateFormat = 'YYYY-MM-DD'
): string => {
  if (!startDate || !endDate) return '';
  return `${formatDate(startDate, fmt)} ~ ${formatDate(endDate, fmt)}`;
};

/**
 * 清除日期的时间部分（保留年月日）
 * @param date 日期对象
 * @returns 时间被清除为 00:00:00 的新日期对象
 */
export const clearTime = (date: Date | null | undefined): Date | null => {
  if (!date) return null;
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
};

/**
 * 判断日期是否为今天
 * @param date 日期
 * @returns 是否为今天
 */
export const isToday = (date: Date | null | undefined): boolean => {
  return isSameDay(date, new Date());
};

/**
 * 判断日期是否在过去
 * @param date 日期
 * @returns 是否在过去
 */
export const isPast = (date: Date | null | undefined): boolean => {
  if (!date) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const checkDate = clearTime(date);
  return checkDate ? checkDate < today : false;
};

/**
 * 判断日期是否在未来
 * @param date 日期
 * @returns 是否在未来
 */
export const isFuture = (date: Date | null | undefined): boolean => {
  if (!date) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const checkDate = clearTime(date);
  return checkDate ? checkDate > today : false;
};

/**
 * 获取两个日期之间的天数差
 * @param date1 第一个日期
 * @param date2 第二个日期
 * @returns 天数差（正数表示 date1 在 date2 之后）
 */
export const getDaysDifference = (date1: Date | null | undefined, date2: Date | null | undefined): number => {
  if (!date1 || !date2) return 0;
  const d1 = clearTime(date1);
  const d2 = clearTime(date2);
  if (!d1 || !d2) return 0;
  return Math.floor((d1.getTime() - d2.getTime()) / (1000 * 60 * 60 * 24));
};
