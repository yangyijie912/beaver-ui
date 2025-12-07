/**
 * DatePicker 日期选择器组件
 *
 * - 使用场景：用户输入或选择日期，支持单选和范围选择
 * - 支持多种日期格式
 * - 支持禁用特定日期
 * - 支持时间选择（可选）
 * - 支持键盘快捷键
 * - 支持日期范围选择
 */

import React, { useRef, useEffect, useState, useCallback } from 'react';
import Input from '../Input/Input';
import { useDatePickerState, useDatePickerUI } from './hooks/useDatePickerState';
import CalendarPanel from './components/CalendarPanel';
import Header from './components/Header';
import { formatDate, parseDate } from './utils';
import type { DatePickerProps } from './types';
import './DatePicker.css';

/**
 * DatePicker 组件
 * 提供日期选择功能，支持单选、范围选择等模式
 */
const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      picker = 'date',
      value,
      defaultValue,
      valueRange,
      defaultValueRange,
      onChange,
      onRangeChange,
      format = 'YYYY-MM-DD',
      placeholder = '请选择日期',
      disabled = false,
      readOnly = false,
      allowClear = true,
      disabledDate,
      size = 'medium',
      width,
      className = '',
      style = {},
      ...rest
    },
    ref
  ) => {
    // 判断是否为范围选择模式
    const isRange = picker === 'daterange' || picker === 'datetimerange';

    // 日期状态管理
    const {
      currentDate,
      currentRange,
      currentMonth,
      tempStartDate,
      setTempStartDate,
      setCurrentMonth,
      handleDateChange,
      handleRangeChange,
      handleMonthChange,
    } = useDatePickerState(value, defaultValue, valueRange, defaultValueRange, onChange, onRangeChange, isRange);

    // UI 状态管理
    const { isOpen, setIsFocused, open, close } = useDatePickerUI();

    // 输入框引用
    const inputRef = useRef<HTMLInputElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);

    // 输入框文本状态
    const [inputValue, setInputValue] = useState<string>(() => {
      if (isRange) {
        return currentRange
          ? `${formatDate(currentRange.startDate, format)} ~ ${formatDate(currentRange.endDate, format)}`
          : '';
      }
      return currentDate ? formatDate(currentDate, format) : '';
    });

    // 范围选择的第一个日期选择状态
    const [selectingStart, setSelectingStart] = useState(true);
    // 范围选择中的实际起始日期（在选择第一个日期后）
    const [rangeStartDate, setRangeStartDate] = useState<Date | null>(null);
    // 鼠标悬停的日期（用于显示临时范围）
    const [hoverDate, setHoverDate] = useState<Date | null>(null);

    /**
     * 处理输入框值变化
     */
    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setInputValue(val);

        // 单选模式下尝试解析日期
        if (!isRange && val.length === 10) {
          const parsed = parseDate(val, format);
          if (parsed && !disabledDate?.(parsed)) {
            setCurrentMonth(parsed);
          }
        }
      },
      [format, isRange, disabledDate, setCurrentMonth]
    );

    /**
     * 处理输入框失焦
     */
    const handleInputBlur = useCallback(() => {
      setIsFocused(false);

      // 单选模式下，验证输入的日期
      if (!isRange && inputValue) {
        const parsed = parseDate(inputValue, format);
        if (parsed) {
          handleDateChange(parsed);
          setInputValue(formatDate(parsed, format));
        }
      }
    }, [inputValue, format, isRange, setIsFocused, handleDateChange]);

    /**
     * 处理输入框获焦
     */
    const handleInputFocus = useCallback(() => {
      setIsFocused(true);
      setRangeStartDate(null);
      setHoverDate(null);
      setSelectingStart(true);
      open();
    }, [setIsFocused, open]);

    /**
     * 处理日期单元格点击
     */
    const handleDateClick = useCallback(
      (date: Date) => {
        if (isRange) {
          // 范围选择模式
          if (selectingStart) {
            // 选择范围开始日期
            setTempStartDate(date);
            setRangeStartDate(date);
            setHoverDate(date);
            setSelectingStart(false);
          } else {
            // 选择范围结束日期
            const start = tempStartDate!;
            const end = date;
            const [startDate, endDate] = start <= end ? [start, end] : [end, start];
            handleRangeChange(startDate, endDate);
            setInputValue(`${formatDate(startDate, format)} ~ ${formatDate(endDate, format)}`);
            setSelectingStart(true);
            setTempStartDate(null);
            setRangeStartDate(null);
            setHoverDate(null);
            close();
          }
        } else {
          // 单选模式
          handleDateChange(date);
          setInputValue(formatDate(date, format));
          setCurrentMonth(date);
          close();
        }
      },
      [
        isRange,
        selectingStart,
        tempStartDate,
        format,
        handleDateChange,
        handleRangeChange,
        close,
        setTempStartDate,
        setCurrentMonth,
        setRangeStartDate,
      ]
    );

    /**
     * 处理日期单元格鼠标悬停
     */
    const handleDateHover = useCallback(
      (date: Date | null) => {
        if (isRange && !selectingStart) {
          // 在选择范围的第二个日期时，设置悬停日期以显示临时范围
          setHoverDate(date);
        }
      },
      [isRange, selectingStart]
    );

    /**
     * 处理日期单元格鼠标悬停
     */
    const handleClear = useCallback(
      (e: React.MouseEvent) => {
        e.stopPropagation();

        if (isRange) {
          handleRangeChange(null, null);
          setRangeStartDate(null);
          setHoverDate(null);
        } else {
          handleDateChange(null);
        }

        setInputValue('');
        setTempStartDate(null);
        setSelectingStart(true);
        inputRef.current?.focus();
      },
      [isRange, handleDateChange, handleRangeChange, setTempStartDate]
    );

    /**
     * 处理上一月
     */
    const handlePrevMonth = useCallback(() => {
      handleMonthChange(-1);
    }, [handleMonthChange]);

    /**
     * 处理下一月
     */
    const handleNextMonth = useCallback(() => {
      handleMonthChange(1);
    }, [handleMonthChange]);

    /**
     * 处理键盘快捷键
     */
    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Escape') {
          close();
        } else if (e.key === 'Enter' && isOpen && inputValue && !isRange) {
          const parsed = parseDate(inputValue, format);
          if (parsed && !disabledDate?.(parsed)) {
            handleDateChange(parsed);
            setCurrentMonth(parsed);
            close();
          }
        }
      },
      [isOpen, inputValue, isRange, format, disabledDate, handleDateChange, close, setCurrentMonth]
    );

    /**
     * 处理点击外部关闭面板
     */
    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (
          wrapperRef.current &&
          !wrapperRef.current.contains(e.target as Node) &&
          panelRef.current &&
          !panelRef.current.contains(e.target as Node)
        ) {
          close();
        }
      };

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }
    }, [isOpen, close]);

    /**
     * 同步 inputValue 和当前日期
     */
    useEffect(() => {
      if (isRange) {
        setInputValue(
          currentRange
            ? `${formatDate(currentRange.startDate, format)} ~ ${formatDate(currentRange.endDate, format)}`
            : ''
        );
      } else {
        setInputValue(currentDate ? formatDate(currentDate, format) : '');
      }
    }, [currentDate, currentRange, format, isRange]);

    // 计算 wrapper 样式
    const wrapperStyle: React.CSSProperties = {
      ...style,
      width: width ? (typeof width === 'number' ? `${width}px` : width) : undefined,
    };

    // 计算 wrapper 类名
    const wrapperClassName = `beaver-datepicker-wrapper beaver-datepicker-${size} ${
      width === undefined ? '' : 'beaver-datepicker-fullwidth'
    } ${className}`;

    // 计算 panel 位置
    const [panelPosition, setPanelPosition] = useState<{ top?: number; left?: number }>({});

    useEffect(() => {
      if (isOpen && inputRef.current && panelRef.current) {
        const rect = inputRef.current.getBoundingClientRect();
        setPanelPosition({
          top: rect.height + 4,
          left: 0,
        });
      }
    }, [isOpen]);

    return (
      <>
        {/* 输入框包装容器 */}
        <div ref={wrapperRef} className={wrapperClassName} style={wrapperStyle}>
          {/* 使用 Input 组件替代原生 input */}
          <Input
            ref={inputRef || ref}
            type="text"
            placeholder={placeholder}
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            readOnly={readOnly}
            size={size}
            autoComplete="off"
            suffix={
              allowClear && inputValue && !disabled ? (
                <button
                  className="beaver-datepicker-clear-btn"
                  onClick={handleClear}
                  title="清除"
                  type="button"
                  aria-label="清除日期"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '20px',
                    height: '20px',
                    padding: 0,
                    margin: 0,
                    border: 'none',
                    background: 'transparent',
                    color: 'var(--beaver-color-disabled)',
                    cursor: 'pointer',
                    borderRadius: '50%',
                    fontSize: '14px',
                  }}
                >
                  ✕
                </button>
              ) : null
            }
            suffixClassName="beaver-datepicker-suffix"
            {...rest}
          />

          {/* 日期选择面板 */}
          {isOpen && (
            <div
              ref={panelRef}
              className="beaver-datepicker-panel"
              style={{
                position: 'absolute',
                top: `${panelPosition.top}px`,
                left: `${panelPosition.left}px`,
              }}
            >
              {/* 头部 */}
              <Header currentMonth={currentMonth} onPrevMonth={handlePrevMonth} onNextMonth={handleNextMonth} />

              {/* 日历面板 */}
              <CalendarPanel
                currentMonth={currentMonth}
                selectedDate={!isRange ? currentDate : undefined}
                selectedRange={isRange ? currentRange : undefined}
                rangeStart={isRange && !selectingStart ? rangeStartDate : undefined}
                hoverDate={isRange && !selectingStart ? hoverDate : undefined}
                disabledDate={disabledDate}
                onDateClick={handleDateClick}
                onDateHover={handleDateHover}
                isRange={isRange}
              />
            </div>
          )}
        </div>
      </>
    );
  }
);

DatePicker.displayName = 'DatePicker';

export default DatePicker;
