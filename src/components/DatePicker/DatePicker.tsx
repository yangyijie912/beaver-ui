import React, { useRef, useEffect, useState, useCallback } from 'react';
import Input from '../Input/Input';
import { useSingleDatePicker } from './hooks/useSingleDatePicker';
import { useRangeDatePicker } from './hooks/useRangeDatePicker';
import { useDatePickerUI } from './hooks/useDatePickerState';
import PanelRenderer from './components/PanelRenderer';
import { formatSingleDate, formatRangeDate, parseSingleDate } from './utils/inputFormatter';
import type { DatePickerProps } from './types';
import './DatePicker.css';

const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      picker = 'date',
      range = false,
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
      timeFormat = '24h',
      ...rest
    },
    ref
  ) => {
    const isRange = range === true;

    // 使用对应的 Hook 管理状态
    const singleState = useSingleDatePicker(value, defaultValue, onChange);
    const rangeState = useRangeDatePicker(valueRange, defaultValueRange, onRangeChange);

    // UI 状态管理
    const { isOpen, setIsFocused, open, close } = useDatePickerUI();

    // 选择 Hook 返回值（取决于模式）
    const currentMonth = isRange ? rangeState.currentMonth : singleState.currentMonth;
    const handleMonthChange = isRange ? rangeState.handleMonthChange : singleState.handleMonthChange;

    // 输入框引用
    const inputRef = useRef<HTMLInputElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);

    // 合并 ref（支持 forwardRef）
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

    // 输入框显示文本状态
    const [inputValue, setInputValue] = useState<string>('');

    // 引入一个全局指针监听器以判断指针是否在日历可交互区域内
    React.useEffect(() => {
      if (!isOpen) return;

      const handler = (e: PointerEvent) => {
        try {
          const panel = panelRef.current;
          if (!panel) return;
          // 日历根节点（左侧可交互区域）
          const calendarEl = panel.querySelector('.beaver-datepicker-calendar');
          if (!calendarEl) return;

          const target = e.target as Node | null;
          // 如果指针不在日历区域内，则清除 hover
          if (!target || !(calendarEl === target || calendarEl.contains(target))) {
            rangeState.setHoverDate(null);
          }
        } catch {
          // 忽略
        }
      };

      window.addEventListener('pointermove', handler);
      return () => window.removeEventListener('pointermove', handler);
    }, [isOpen, rangeState]);

    /**
     * 同步 inputValue 与当前选中的日期
     */
    useEffect(() => {
      if (isRange && rangeState.currentRange) {
        setInputValue(formatRangeDate(rangeState.currentRange, picker, format));
      } else if (!isRange && singleState.currentDate) {
        setInputValue(formatSingleDate(singleState.currentDate, picker, format));
      } else {
        setInputValue('');
      }
    }, [isRange, singleState.currentDate, rangeState.currentRange, picker, format]);

    /**
     * 处理输入框值变化
     */
    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setInputValue(val);

        if (!isRange) {
          const parsed = parseSingleDate(val, picker, format);
          if (parsed && !disabledDate?.(parsed)) {
            singleState.setCurrentMonth(parsed);
          }
        }
      },
      [isRange, picker, format, disabledDate, singleState]
    );

    /**
     * 处理输入框失焦
     */
    const handleInputBlur = useCallback(() => {
      setIsFocused(false);

      if (!isRange && inputValue) {
        const parsed = parseSingleDate(inputValue, picker, format);
        if (parsed) {
          singleState.handleDateChange(parsed);
        }
      }
    }, [inputValue, isRange, picker, format, setIsFocused, singleState]);

    /**
     * 处理输入框获焦 - 打开选择器
     */
    const handleInputFocus = useCallback(() => {
      setIsFocused(true);
      // 如果输入框已有已选日期，打开时应该定位到该日期所在的月份/年份
      if (!isRange) {
        if (singleState.currentDate) {
          singleState.setCurrentMonth(new Date(singleState.currentDate));
        }
      } else {
        // range 模式：优先使用 startDate，若无则使用 endDate
        const currentRange = rangeState.currentRange;
        if (currentRange && currentRange.startDate) {
          rangeState.setCurrentMonth(new Date(currentRange.startDate));
        } else if (currentRange && currentRange.endDate) {
          rangeState.setCurrentMonth(new Date(currentRange.endDate));
        }

        if (picker === 'datetime') {
          // datetime range 模式：初始化为第一步
          rangeState.setSelectingStart(true);
          rangeState.setTempDateTimeStart(null);
          rangeState.setTempDateTimeEnd(null);
          rangeState.setConfirmedStartDate(null);
        } else {
          rangeState.resetRangeState();
        }
      }

      open();
    }, [picker, isRange, setIsFocused, open, rangeState]);

    /**
     * 处理日期单元格点击
     */
    const handleDateClick = useCallback(
      (date: Date) => {
        if (isRange) {
          const { selectingStart, tempStartDate } = rangeState;

          if (picker === 'datetime') {
            // datetime range 模式：需要两步确认（日期+时间）
            // 重置时间为 00:00:00
            const dateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);

            if (selectingStart) {
              // 第一个日期选择：临时保存起始日期，等待时间调整后点击确定
              rangeState.setTempDateTimeStart(dateOnly);
              rangeState.setTempStartDate(dateOnly);
              // 不改变 selectingStart，保持在第一个日期的时间调整阶段
            } else {
              // 第二个日期选择：临时保存结束日期
              rangeState.setTempDateTimeEnd(dateOnly);
            }
          } else {
            // 普通日期/月份/年份范围选择模式：点击后立即确定
            if (selectingStart) {
              // 第一个日期
              rangeState.setTempStartDate(date);
              rangeState.setSelectingStart(false);
            } else {
              // 第二个日期 - 完成范围选择
              if (tempStartDate) {
                const [start, end] = tempStartDate <= date ? [tempStartDate, date] : [date, tempStartDate];
                rangeState.handleRangeChange(start, end);
                rangeState.resetRangeState();
                close();
              }
            }
          }
        } else {
          // 单选模式
          singleState.handleDateChange(date);
          singleState.setCurrentMonth(date);
          close();
        }
      },
      [isRange, picker, rangeState, singleState, close]
    );

    /**
     * 处理日期单元格悬停
     */
    const handleDateHover = useCallback(
      (date: Date | null) => {
        if (isRange && !rangeState.selectingStart) {
          rangeState.setHoverDate(date);
        }
      },
      [isRange, rangeState]
    );

    /**
     * 处理月份/年份选择
     */
    const handleMonthSelect = useCallback(
      (monthIndex: number, year: number) => {
        const date = new Date(year, monthIndex, 1);
        if (isRange) {
          if (rangeState.selectingStart) {
            rangeState.setTempStartDate(date);
            rangeState.setSelectingStart(false);
          } else {
            const startDate = rangeState.tempStartDate;
            if (startDate) {
              const [start, end] = startDate <= date ? [startDate, date] : [date, startDate];
              rangeState.handleRangeChange(start, end);
              setInputValue(formatRangeDate({ startDate: start, endDate: end }, picker, format));
              rangeState.resetRangeState();
              close();
            }
          }
        } else {
          singleState.handleDateChange(date);
          close();
        }
      },
      [isRange, rangeState, singleState, picker, format, close]
    );

    const handleYearSelect = useCallback(
      (year: number) => {
        handleMonthSelect(0, year);
      },
      [handleMonthSelect]
    );

    // 当在月份面板中点击年份导航（上一年/下一年）时，只改变展示年份，不应触发选择或关闭面板
    const handleYearNavigate = useCallback(
      (year: number) => {
        const newMonth = new Date(currentMonth);
        newMonth.setFullYear(year);
        if (isRange) {
          rangeState.setCurrentMonth(newMonth);
        } else {
          singleState.setCurrentMonth(newMonth);
        }
      },
      [currentMonth, isRange, rangeState, singleState]
    );

    const handleTimeChange = useCallback(
      (time: Date) => {
        if (isRange && picker === 'datetime') {
          // datetime range：更新临时的时间部分
          if (rangeState.selectingStart) {
            // 第一步：第一个日期的时间调整
            // 如果还没选日期，就用当天日期
            if (!rangeState.tempDateTimeStart) {
              const today = new Date();
              const dateWithTime = new Date(today.getFullYear(), today.getMonth(), today.getDate());
              dateWithTime.setHours(time.getHours(), time.getMinutes(), time.getSeconds());
              rangeState.setTempDateTimeStart(dateWithTime);
            } else {
              rangeState.setTempDateTimeStart(time);
            }
          } else {
            // 第二步：第二个日期的时间调整
            // 如果还没选日期，就用当天日期
            if (!rangeState.tempDateTimeEnd) {
              const today = new Date();
              const dateWithTime = new Date(today.getFullYear(), today.getMonth(), today.getDate());
              dateWithTime.setHours(time.getHours(), time.getMinutes(), time.getSeconds());
              rangeState.setTempDateTimeEnd(dateWithTime);
            } else {
              rangeState.setTempDateTimeEnd(time);
            }
          }
        } else if (!isRange) {
          // 单选 datetime
          singleState.handleDateChange(time);
        }
      },
      [isRange, picker, rangeState, singleState]
    );

    /**
     * 处理 datetime range 的确定按钮
     * 两步流程：
     * 第一步：确定起始日期+时间 → 进入第二步
     * 第二步：确定结束日期+时间 → 完成范围选择
     */
    const handleDateTimeRangeConfirm = useCallback(() => {
      if (rangeState.selectingStart) {
        // 第一步确定：保存起始日期+时间，进入第二步
        if (rangeState.tempDateTimeStart) {
          rangeState.setConfirmedStartDate(rangeState.tempDateTimeStart);
          rangeState.setTempDateTimeStart(null);
          rangeState.setSelectingStart(false);
        }
      } else {
        // 第二步确定：完成范围选择
        if (rangeState.confirmedStartDate && rangeState.tempDateTimeEnd) {
          const [startDate, endDate] =
            rangeState.confirmedStartDate <= rangeState.tempDateTimeEnd
              ? [rangeState.confirmedStartDate, rangeState.tempDateTimeEnd]
              : [rangeState.tempDateTimeEnd, rangeState.confirmedStartDate];

          rangeState.handleRangeChange(startDate, endDate);
          setInputValue(formatRangeDate({ startDate, endDate }, picker, format));

          // 重置所有状态
          rangeState.resetRangeState();
          rangeState.setConfirmedStartDate(null);
          close();
        }
      }
    }, [rangeState, picker, format, close]);

    /**
     * 处理清除
     */
    const handleClear = useCallback(
      (e: React.MouseEvent) => {
        e.stopPropagation();

        if (isRange) {
          rangeState.handleRangeChange(null, null);
          rangeState.resetRangeState();
        } else {
          singleState.handleDateChange(null);
        }

        setInputValue('');
        inputRef.current?.focus();
      },
      [isRange, rangeState, singleState]
    );

    /**
     * 处理键盘快捷键
     */
    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Escape') {
          close();
        } else if (e.key === 'Enter' && isOpen && inputValue && !isRange) {
          const parsed = parseSingleDate(inputValue, picker, format);
          if (parsed && !disabledDate?.(parsed)) {
            singleState.handleDateChange(parsed);
            singleState.setCurrentMonth(parsed);
            close();
          }
        }
      },
      [isOpen, inputValue, isRange, picker, format, disabledDate, singleState, close]
    );

    /**
     * 处理月份导航
     */
    const handlePrevMonth = useCallback(() => {
      handleMonthChange(-1);
    }, [handleMonthChange]);

    const handleNextMonth = useCallback(() => {
      handleMonthChange(1);
    }, [handleMonthChange]);

    /**
     * datetime range 模式下，同步临时输入框显示
     * 实时显示用户在两步流程中的选择
     */
    useEffect(() => {
      if (picker === 'datetime' && isRange && isOpen) {
        if (rangeState.selectingStart) {
          // 第一步：选择第一个日期，显示第一个日期
          if (rangeState.tempDateTimeStart) {
            setInputValue(formatSingleDate(rangeState.tempDateTimeStart, picker, format));
          } else {
            setInputValue('');
          }
        } else {
          // 第二步：选择第二个日期，显示范围
          if (rangeState.confirmedStartDate) {
            const startDisplay = formatSingleDate(rangeState.confirmedStartDate, picker, format);

            if (rangeState.tempDateTimeEnd) {
              // 已选择结束日期，显示完整范围
              const endDisplay = formatSingleDate(rangeState.tempDateTimeEnd, picker, format);
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
      isRange,
      rangeState.selectingStart,
      rangeState.tempDateTimeStart,
      rangeState.confirmedStartDate,
      rangeState.tempDateTimeEnd,
      isOpen,
      format,
    ]);

    /**
     * 点击外部关闭面板
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
     * 计算面板位置
     */
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

    // 计算 wrapper 样式
    const wrapperStyle: React.CSSProperties = {
      ...style,
      width: width ? (typeof width === 'number' ? `${width}px` : width) : undefined,
    };

    const wrapperClassName = `beaver-datepicker-wrapper beaver-datepicker-${size} ${
      width === undefined ? '' : 'beaver-datepicker-fullwidth'
    } ${className}`;

    return (
      <>
        <div ref={wrapperRef} className={wrapperClassName} style={wrapperStyle}>
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
              <PanelRenderer
                picker={picker}
                currentMonth={currentMonth}
                selectedDate={!isRange ? singleState.currentDate : undefined}
                selectedRange={isRange ? rangeState.currentRange : undefined}
                rangeStart={
                  picker === 'datetime' && isRange
                    ? rangeState.selectingStart
                      ? rangeState.tempDateTimeStart
                      : rangeState.confirmedStartDate
                    : isRange
                      ? rangeState.tempStartDate
                      : undefined
                }
                hoverDate={rangeState.hoverDate}
                tempRangeEnd={rangeState.tempDateTimeEnd}
                isRange={isRange}
                disabledDate={disabledDate}
                onDateClick={handleDateClick}
                onDateHover={handleDateHover}
                onMonthChange={handleMonthSelect}
                onYearChange={handleYearNavigate}
                onYearClick={handleYearSelect}
                onPrevMonth={handlePrevMonth}
                onNextMonth={handleNextMonth}
                onTimeChange={handleTimeChange}
                timeFormat={timeFormat}
                onDateTimeRangeConfirm={handleDateTimeRangeConfirm}
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
