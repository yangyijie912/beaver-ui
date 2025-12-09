import React, { useRef, useEffect, useState, useCallback } from 'react';
import Input from '../Input/Input';
import { useDatePickerState, useDatePickerUI } from './hooks/useDatePickerState';
import CalendarPanel from './components/CalendarPanel';
import Header from './components/Header';
import MonthPanel from './components/MonthPanel';
import YearPanel from './components/YearPanel';
import DateTimePanel from './components/DateTimePanel';
import { formatDate, parseDate, formatWithPattern, parseWithPattern } from './utils';
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
    // 合并内部 ref 与外部 forwarded ref，确保外部能够拿到 input 节点
    const setInputRefs = useCallback(
      (node: HTMLInputElement | null) => {
        inputRef.current = node;
        if (!ref) return;
        if (typeof ref === 'function') {
          ref(node);
        } else {
          try {
            (ref as { current: HTMLInputElement | null }).current = node;
          } catch (_) {}
        }
      },
      [ref]
    );
    const wrapperRef = useRef<HTMLDivElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);

    // 计算最终使用的显示/解析模式：
    // - 如果是 datetime/datetimerange 且用户未传入带时间的自定义 format（仍为默认 'YYYY-MM-DD'），
    //   我们在内部使用一个带时分秒的 pattern 展示（不改变 prop 的类型定义）。
    const useTimePattern = (picker === 'datetime' || picker === 'datetimerange') && format === 'YYYY-MM-DD';
    const internalPattern = useTimePattern ? 'YYYY-MM-DD HH:mm:ss' : format;

    // 输入框文本状态
    const [inputValue, setInputValue] = useState<string>(() => {
      if (isRange) {
        return currentRange
          ? useTimePattern
            ? `${formatWithPattern(currentRange.startDate, internalPattern)} ~ ${formatWithPattern(
                currentRange.endDate,
                internalPattern
              )}`
            : `${formatDate(currentRange.startDate, format)} ~ ${formatDate(currentRange.endDate, format)}`
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
      return currentDate
        ? useTimePattern
          ? formatWithPattern(currentDate, internalPattern)
          : formatDate(currentDate, format)
        : '';
    });

    // 范围选择的第一个日期选择状态
    const [selectingStart, setSelectingStart] = useState(true);
    // 范围选择中的实际起始日期（在选择第一个日期后）
    const [rangeStartDate, setRangeStartDate] = useState<Date | null>(null);
    // 鼠标悬停的日期（用于显示临时范围）
    const [hoverDate, setHoverDate] = useState<Date | null>(null);

    // datetimerange 模式下的临时日期选择（点击确定前）
    const [tempDateTimeStart, setTempDateTimeStart] = useState<Date | null>(null);
    const [tempDateTimeEnd, setTempDateTimeEnd] = useState<Date | null>(null);
    // datetimerange 已确定的第一个日期（在第一步确定后）
    const [confirmedStartDate, setConfirmedStartDate] = useState<Date | null>(null);

    // 选择器类型状态（用于月份和年份选择）
    const [panelType] = useState<'calendar' | 'month' | 'year'>(
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
        if (!isRange) {
          const parsed = useTimePattern ? parseWithPattern(val, internalPattern) : parseDate(val, format);
          if (parsed && !disabledDate?.(parsed)) {
            setCurrentMonth(parsed);
          }
        }
      },
      [format, isRange, disabledDate, setCurrentMonth, useTimePattern, internalPattern]
    );

    /**
     * 处理输入框失焦
     */
    const handleInputBlur = useCallback(() => {
      setIsFocused(false);

      // 单选模式下，验证输入的日期
      if (!isRange && inputValue) {
        const parsed = useTimePattern ? parseWithPattern(inputValue, internalPattern) : parseDate(inputValue, format);
        if (parsed) {
          handleDateChange(parsed);
          setInputValue(useTimePattern ? formatWithPattern(parsed, internalPattern) : formatDate(parsed, format));
        }
      }
    }, [inputValue, format, isRange, setIsFocused, handleDateChange, useTimePattern, internalPattern]);

    /**
     * 处理输入框获焦
     */
    const handleInputFocus = useCallback(() => {
      setIsFocused(true);
      if (picker === 'datetimerange') {
        // datetimerange 模式：初始化为第一步
        setSelectingStart(true);
        setTempDateTimeStart(null);
        setTempDateTimeEnd(null);
        setConfirmedStartDate(null);
      } else {
        // 其他范围模式
        setRangeStartDate(null);
        setHoverDate(null);
        setSelectingStart(true);
      }
      open();
    }, [picker, open]);

    /**
     * 处理日期单元格点击
     */
    const handleDateClick = useCallback(
      (date: Date) => {
        if (isRange) {
          // 范围选择模式
          if (picker === 'datetimerange') {
            // 日期范围+时间选择模式：临时保存日期，等待时间调整后点击确定
            // 重置时间为 00:00:00
            const dateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
            if (selectingStart) {
              // 第一个日期选择：临时保存起始日期，但保持 selectingStart=true，不进入第二阶段
              setTempDateTimeStart(dateOnly);
              setRangeStartDate(dateOnly);
              // 不改变 selectingStart，保持在第一个日期的调整阶段
            } else {
              // 第二个日期选择：临时保存结束日期
              setTempDateTimeEnd(dateOnly);
              setRangeStartDate(dateOnly);
            }
          } else {
            // 普通日期范围选择模式：点击后立即确定
            if (selectingStart) {
              // 选择范围开始日期
              setTempStartDate(date);
              setRangeStartDate(date);
              setHoverDate(date);
              setSelectingStart(false);
            } else {
              // 选择范围结束日期
              // 避免使用非空断言，显式保护 tempStartDate
              if (!tempStartDate) {
                // 如果没有起始日期，直接设置为当前选择并继续等待结束日期
                setTempStartDate(date);
                setRangeStartDate(date);
                setHoverDate(date);
                setSelectingStart(false);
                return;
              }
              const start = tempStartDate;
              const end = date;
              const [startDate, endDate] = start <= end ? [start, end] : [end, start];
              handleRangeChange(startDate, endDate);
              setInputValue(
                useTimePattern
                  ? `${formatWithPattern(startDate, internalPattern)} ~ ${formatWithPattern(endDate, internalPattern)}`
                  : `${formatDate(startDate, format)} ~ ${formatDate(endDate, format)}`
              );
              setSelectingStart(true);
              setTempStartDate(null);
              setRangeStartDate(null);
              setHoverDate(null);
              close();
            }
          }
        } else {
          // 单选模式
          handleDateChange(date);
          setInputValue(useTimePattern ? formatWithPattern(date, internalPattern) : formatDate(date, format));
          setCurrentMonth(date);
          close();
        }
      },
      [
        isRange,
        picker,
        selectingStart,
        tempStartDate,
        handleDateChange,
        handleRangeChange,
        close,
        setTempStartDate,
        setCurrentMonth,
        setRangeStartDate,
        useTimePattern,
        internalPattern,
      ]
    );

    /**
     * 处理 datetimerange 的确定按钮
     */
    const handleDateTimeRangeConfirm = useCallback(() => {
      if (selectingStart) {
        // 第一步确定：保存第一个日期，进入第二步
        if (tempDateTimeStart) {
          // 保存已确定的第一个日期
          setConfirmedStartDate(tempDateTimeStart);
          // 清空临时第一个日期，为第二步做准备
          setTempDateTimeStart(null);
          // 进入第二步
          setSelectingStart(false);
        }
      } else {
        // 第二步确定：提交整个范围
        if (confirmedStartDate && tempDateTimeEnd) {
          const [startDate, endDate] =
            confirmedStartDate <= tempDateTimeEnd
              ? [confirmedStartDate, tempDateTimeEnd]
              : [tempDateTimeEnd, confirmedStartDate];
          handleRangeChange(startDate, endDate);
          setInputValue(
            useTimePattern
              ? `${formatWithPattern(startDate, internalPattern)} ~ ${formatWithPattern(endDate, internalPattern)}`
              : `${formatDate(startDate, format)} ~ ${formatDate(endDate, format)}`
          );
        }
        // 重置所有状态
        setSelectingStart(true);
        setTempDateTimeStart(null);
        setTempDateTimeEnd(null);
        setConfirmedStartDate(null);
        setRangeStartDate(null);
        close();
      }
    }, [
      selectingStart,
      tempDateTimeStart,
      confirmedStartDate,
      tempDateTimeEnd,
      handleRangeChange,
      close,
      useTimePattern,
      internalPattern,
    ]);

    /**
     * 处理日期单元格鼠标悬停
     */
    const handleDateHover = useCallback(
      (date: Date | null) => {
        // 仅在普通范围选择模式下显示悬停效果
        if (isRange && !selectingStart && picker === 'daterange') {
          // 在选择范围的第二个日期时，设置悬停日期以显示临时范围
          setHoverDate(date);
        }
      },
      [isRange, selectingStart, picker]
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
          const parsed = useTimePattern ? parseWithPattern(inputValue, internalPattern) : parseDate(inputValue, format);
          if (parsed && !disabledDate?.(parsed)) {
            handleDateChange(parsed);
            setCurrentMonth(parsed);
            close();
          }
        }
      },
      [
        isOpen,
        inputValue,
        isRange,
        format,
        disabledDate,
        handleDateChange,
        close,
        setCurrentMonth,
        useTimePattern,
        internalPattern,
      ]
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
     * datetimerange 面板关闭时清空临时状态
     */
    useEffect(() => {
      if (picker === 'datetimerange' && !isOpen) {
        // 如果只选了起始日期但没选结束日期就关闭面板，说明输入无效
        // 需要清空暂存的日期和输入框
        if (confirmedStartDate && !tempDateTimeEnd) {
          setInputValue('');
        }
        setTempDateTimeStart(null);
        setTempDateTimeEnd(null);
        setConfirmedStartDate(null);
        setSelectingStart(true);
        setRangeStartDate(null);
      }
    }, [picker, isOpen, confirmedStartDate, tempDateTimeEnd]);

    /**
     * 同步 inputValue 和当前日期
     */
    useEffect(() => {
      // datetimerange 模式由专门的 effect 处理，这里跳过
      if (picker === 'datetimerange') {
        return;
      }

      if (isRange) {
        setInputValue(
          currentRange
            ? useTimePattern
              ? `${formatWithPattern(currentRange.startDate, internalPattern)} ~ ${formatWithPattern(
                  currentRange.endDate,
                  internalPattern
                )}`
              : `${formatDate(currentRange.startDate, format)} ~ ${formatDate(currentRange.endDate, format)}`
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
          setInputValue(
            currentDate
              ? useTimePattern
                ? formatWithPattern(currentDate, internalPattern)
                : formatDate(currentDate, format)
              : ''
          );
        }
      }
    }, [currentDate, currentRange, format, isRange, picker, useTimePattern, internalPattern]);

    /**
     * datetimerange 第一个日期确定后，初始化第二个日期
     */
    useEffect(() => {
      if (picker === 'datetimerange' && !selectingStart && !tempDateTimeEnd && confirmedStartDate) {
        // 从第一步进入第二步，初始化结束日期为起始日期（用于时间选择器显示）
        // 但不能立即赋值，因为这会让输入框显示范围
        // 只在用户选择第二个日期时才显示范围
        // 这里只是为了让时间选择器有一个初始值
        // 实际上应该让 handleDateClick 处理
      }
    }, [picker, selectingStart, tempDateTimeEnd, confirmedStartDate]);

    /**
     * datetimerange 模式下，同步临时输入框显示
     */
    useEffect(() => {
      if (picker === 'datetimerange' && isOpen) {
        if (selectingStart) {
          // 第一步：选择第一个日期，显示第一个日期
          if (tempDateTimeStart) {
            const tempDisplay = useTimePattern
              ? formatWithPattern(tempDateTimeStart, internalPattern)
              : formatDate(tempDateTimeStart, format);
            setInputValue(tempDisplay);
          } else {
            setInputValue('');
          }
        } else {
          // 第二步：选择第二个日期，显示范围
          if (confirmedStartDate) {
            const startDisplay = useTimePattern
              ? formatWithPattern(confirmedStartDate, internalPattern)
              : formatDate(confirmedStartDate, format);

            if (tempDateTimeEnd) {
              // 已选择结束日期，显示完整范围
              const endDisplay = useTimePattern
                ? formatWithPattern(tempDateTimeEnd, internalPattern)
                : formatDate(tempDateTimeEnd, format);
              setInputValue(`${startDisplay} ~ ${endDisplay}`);
            } else {
              // 还没选结束日期，显示起始日期 + 波浪符号，等待用户输入
              setInputValue(`${startDisplay} ~ `);
            }
          }
        }
      }
    }, [
      picker,
      selectingStart,
      tempDateTimeStart,
      confirmedStartDate,
      tempDateTimeEnd,
      isOpen,
      useTimePattern,
      internalPattern,
      format,
    ]);

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
            ref={setInputRefs}
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
                <DateTimePanel
                  currentMonth={currentMonth}
                  selectedDate={currentDate}
                  disabledDate={disabledDate}
                  onDateClick={(date) => {
                    handleDateChange(date);
                    setCurrentMonth(date);
                  }}
                  onDateHover={handleDateHover}
                  onTimeChange={(time) => {
                    handleDateChange(time);
                    setInputValue(useTimePattern ? formatWithPattern(time, internalPattern) : formatDate(time, format));
                  }}
                  onPrevMonth={handlePrevMonth}
                  onNextMonth={handleNextMonth}
                  isRange={false}
                  timeFormat="24h"
                />
              )}

              {/* 日期范围+时间选择面板 */}
              {picker === 'datetimerange' && (
                <DateTimePanel
                  currentMonth={currentMonth}
                  selectedDate={undefined}
                  rangeStart={selectingStart ? tempDateTimeStart : tempDateTimeEnd}
                  disabledDate={disabledDate}
                  onDateClick={handleDateClick}
                  onDateHover={handleDateHover}
                  onTimeChange={(time) => {
                    // 在范围模式下只更新临时状态
                    if (selectingStart) {
                      // 第一步：第一个日期的时间调整
                      // 如果还没选日期，就用当天日期
                      if (!tempDateTimeStart) {
                        const today = new Date();
                        const dateWithTime = new Date(today.getFullYear(), today.getMonth(), today.getDate());
                        dateWithTime.setHours(time.getHours(), time.getMinutes(), time.getSeconds());
                        setTempDateTimeStart(dateWithTime);
                      } else {
                        setTempDateTimeStart(time);
                      }
                    } else {
                      // 第二步：第二个日期的时间调整
                      // 如果还没选日期，就用当天日期
                      if (!tempDateTimeEnd) {
                        const today = new Date();
                        const dateWithTime = new Date(today.getFullYear(), today.getMonth(), today.getDate());
                        dateWithTime.setHours(time.getHours(), time.getMinutes(), time.getSeconds());
                        setTempDateTimeEnd(dateWithTime);
                      } else {
                        setTempDateTimeEnd(time);
                      }
                    }
                  }}
                  onPrevMonth={handlePrevMonth}
                  onNextMonth={handleNextMonth}
                  onConfirm={handleDateTimeRangeConfirm}
                  isRange={true}
                  timeFormat="24h"
                />
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
