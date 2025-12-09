import React, { useRef, useEffect, useState, useCallback } from 'react';
import Input from '../Input/Input';
import { useDatePickerState, useDatePickerUI } from './hooks/useDatePickerState';
import CalendarPanel from './components/CalendarPanel';
import Header from './components/Header';
import MonthPanel from './components/MonthPanel';
import YearPanel from './components/YearPanel';
import TimePanel from './components/TimePanel';
import { formatDate, parseDate } from './utils';
import type { DatePickerProps } from './types';
import './DatePicker.css';

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
      if (picker === 'month' && currentDate) {
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        return `${year}-${month}`;
      }
      if (picker === 'year' && currentDate) {
        return `${currentDate.getFullYear()}`;
      }
      return currentDate ? formatDate(currentDate, format) : '';
    });

    // 范围选择的第一个日期选择状态
    const [selectingStart, setSelectingStart] = useState(true);
    // 范围选择中的实际起始日期（在选择第一个日期后）
    const [rangeStartDate, setRangeStartDate] = useState<Date | null>(null);
    // 鼠标悬停的日期（用于显示临时范围）
    const [hoverDate, setHoverDate] = useState<Date | null>(null);

    // 选择器类型状态
    const [panelType, setPanelType] = useState<'calendar' | 'month' | 'year' | 'time'>(
      picker === 'month' ? 'month' : picker === 'year' ? 'year' : 'calendar'
    );

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
        if (picker === 'month' && currentDate) {
          const year = currentDate.getFullYear();
          const month = String(currentDate.getMonth() + 1).padStart(2, '0');
          setInputValue(`${year}-${month}`);
        } else if (picker === 'year' && currentDate) {
          setInputValue(`${currentDate.getFullYear()}`);
        } else {
          setInputValue(currentDate ? formatDate(currentDate, format) : '');
        }
      }
    }, [currentDate, currentRange, format, isRange, picker]);

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
              {(picker === 'date' || picker === 'daterange') && (
                <Header currentMonth={currentMonth} onPrevMonth={handlePrevMonth} onNextMonth={handleNextMonth} />
              )}

              {/* 日期日历面板 */}
              {(picker === 'date' || picker === 'daterange') && panelType === 'calendar' && (
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
              )}

              {/* 月份选择面板 */}
              {picker === 'month' && (
                <MonthPanel
                  currentMonth={currentMonth}
                  selectedMonth={currentDate}
                  onMonthClick={(year, monthIndex) => {
                    const newDate = new Date(year, monthIndex, 1);
                    handleDateChange(newDate);
                    // 月份选择器只显示年-月，不显示日期
                    const monthStr = `${year}-${String(monthIndex + 1).padStart(2, '0')}`;
                    setInputValue(monthStr);
                    close();
                  }}
                  onYearChange={(year) => {
                    setCurrentMonth(new Date(year, 0, 1));
                  }}
                  disabledMonth={disabledDate}
                />
              )}

              {/* 年份选择面板 */}
              {picker === 'year' && (
                <YearPanel
                  currentMonth={currentMonth}
                  selectedYear={currentDate}
                  onYearClick={(year) => {
                    const newDate = new Date(year, 0, 1);
                    handleDateChange(newDate);
                    // 年份选择器只显示年份
                    setInputValue(`${year}`);
                    close();
                  }}
                  disabledYear={disabledDate}
                />
              )}

              {/* 日期+时间选择面板 */}
              {picker === 'datetime' && (
                <>
                  <Header currentMonth={currentMonth} onPrevMonth={handlePrevMonth} onNextMonth={handleNextMonth} />
                  {panelType === 'calendar' && (
                    <CalendarPanel
                      currentMonth={currentMonth}
                      selectedDate={currentDate}
                      disabledDate={disabledDate}
                      onDateClick={(date) => {
                        setCurrentMonth(date);
                        // 切换到时间选择面板
                        setPanelType('time');
                      }}
                      onDateHover={handleDateHover}
                      isRange={false}
                    />
                  )}
                  {panelType === 'time' && (
                    <>
                      <div style={{ padding: '8px 12px', borderBottom: '1px solid var(--beaver-color-border)' }}>
                        <button
                          onClick={() => setPanelType('calendar')}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--beaver-color-primary)',
                            cursor: 'pointer',
                            fontSize: '12px',
                          }}
                          type="button"
                        >
                          ← 返回日期选择
                        </button>
                      </div>
                      <TimePanel
                        selectedTime={currentDate}
                        onTimeChange={(time) => {
                          handleDateChange(time);
                          setInputValue(formatDate(time, format));
                        }}
                        timeFormat="24h"
                      />
                      <div style={{ padding: '8px 12px', borderTop: '1px solid var(--beaver-color-border)' }}>
                        <button
                          onClick={() => close()}
                          style={{
                            width: '100%',
                            padding: '6px 12px',
                            background: 'var(--beaver-color-primary)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '14px',
                          }}
                          type="button"
                        >
                          确定
                        </button>
                      </div>
                    </>
                  )}
                </>
              )}

              {/* 日期范围+时间选择面板 */}
              {picker === 'datetimerange' && (
                <>
                  <Header currentMonth={currentMonth} onPrevMonth={handlePrevMonth} onNextMonth={handleNextMonth} />
                  {panelType === 'calendar' && (
                    <CalendarPanel
                      currentMonth={currentMonth}
                      selectedRange={currentRange}
                      rangeStart={!selectingStart ? rangeStartDate : undefined}
                      hoverDate={!selectingStart ? hoverDate : undefined}
                      disabledDate={disabledDate}
                      onDateClick={handleDateClick}
                      onDateHover={handleDateHover}
                      isRange={true}
                    />
                  )}
                  {panelType === 'time' && currentRange && (
                    <>
                      <div style={{ padding: '8px 12px', borderBottom: '1px solid var(--beaver-color-border)' }}>
                        <button
                          onClick={() => setPanelType('calendar')}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--beaver-color-primary)',
                            cursor: 'pointer',
                            fontSize: '12px',
                          }}
                          type="button"
                        >
                          ← 返回日期选择
                        </button>
                      </div>
                      <TimePanel
                        selectedTime={currentRange.startDate}
                        onTimeChange={(time) => {
                          handleRangeChange(time, currentRange.endDate);
                        }}
                        timeFormat="24h"
                      />
                      <div style={{ padding: '8px 12px', borderTop: '1px solid var(--beaver-color-border)' }}>
                        <button
                          onClick={() => close()}
                          style={{
                            width: '100%',
                            padding: '6px 12px',
                            background: 'var(--beaver-color-primary)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '14px',
                          }}
                          type="button"
                        >
                          确定
                        </button>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </>
    );
  }
);

DatePicker.displayName = 'DatePicker';

export default DatePicker;
