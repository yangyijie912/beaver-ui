/**
 * DatePicker 组件 Storybook 演示
 */

import DatePicker from './DatePicker';
import { useState } from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';

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
const meta: Meta<typeof DatePicker> = {
  title: '表单（Form）/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  decorators: [
    (Story: StoryFn) => (
      <div style={{ padding: '20px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

/**
 * 基础使用：单选日期
 */
export const Default: Story = {
  name: '默认',
  args: {
    placeholder: '请选择日期',
  },
};

/**
 * 预设日期
 */
export const WithDefaultValue: Story = {
  name: '预设日期',
  args: {
    defaultValue: new Date('2024-01-15'),
    placeholder: '请选择日期',
  },
};

// 不同尺寸
export const Sizes: Story = {
  name: '不同尺寸',
  render: () => (
    <div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
      <DatePicker size="small" placeholder="小尺寸" />
      <DatePicker size="medium" placeholder="中等尺寸" />
      <DatePicker size="large" placeholder="大尺寸" />
    </div>
  ),
};

/**
 * 禁用状态
 */
export const Disabled: Story = {
  name: '禁用',
  args: {
    disabled: true,
    placeholder: '已禁用',
    defaultValue: new Date('2024-01-15'),
  },
};

/**
 * 只读模式
 */
export const ReadOnly: Story = {
  name: '只读',
  args: {
    readOnly: true,
    defaultValue: new Date('2024-01-15'),
    placeholder: '只读模式',
  },
};

/**
 * 不显示清除按钮
 */
export const NoClear: Story = {
  name: '不显示清除按钮',
  args: {
    defaultValue: new Date('2024-01-15'),
    allowClear: false,
    placeholder: '不可清除',
  },
};

/**
 * 受控组件
 */
export const Controlled: Story = {
  name: '受控组件',
  render: () => {
    const [date, setDate] = useState<Date | null>(null);
    return (
      <div>
        <DatePicker value={date} onChange={setDate} placeholder="选择日期" />
        <p style={{ marginTop: '10px' }}>选中日期: {date ? date.toLocaleDateString('zh-CN') : '未选择'}</p>
      </div>
    );
  },
};

/**
 * 不同的日期格式
 */
export const Formats: Story = {
  name: '不同日期格式',
  render: () => (
    <>
      <div style={{ marginBottom: '10px' }}>
        <label>YYYY-MM-DD</label>
        <DatePicker format="YYYY-MM-DD" placeholder="2024-01-15" />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>DD/MM/YYYY</label>
        <DatePicker format="DD/MM/YYYY" placeholder="15/01/2024" />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>MM/DD/YYYY</label>
        <DatePicker format="MM/DD/YYYY" placeholder="01/15/2024" />
      </div>
      <div>
        <label>YYYY/MM/DD</label>
        <DatePicker format="YYYY/MM/DD" placeholder="2024/01/15" />
      </div>
    </>
  ),
};

/**
 * 自定义宽度
 */
export const CustomWidth: Story = {
  name: '自定义宽度',
  render: () => (
    <>
      <div style={{ marginBottom: '10px' }}>
        <DatePicker width={200} placeholder="宽度 200px" />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <DatePicker width="50%" placeholder="宽度 50%" />
      </div>
      <div>
        <DatePicker width="100%" placeholder="宽度 100%" />
      </div>
    </>
  ),
};

/**
 * 禁用特定日期
 */
export const DisabledDates: Story = {
  name: '禁用特定日期',
  args: {
    placeholder: '已禁用周末',
    disabledDate: (date: Date) => {
      // 禁用周末
      const day = date.getDay();
      return day === 0 || day === 6;
    },
  },
};

/**
 * 禁用过去日期
 */
export const NoFutureDates: Story = {
  name: '只能选择今天及以后',
  args: {
    placeholder: '禁用过去日期',
    disabledDate: (date: Date) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return date < today;
    },
  },
};

/**
 * 禁用未来日期
 */
export const NoPastDates: Story = {
  name: '只能选择今天及以前',
  args: {
    placeholder: '禁用未来日期',
    disabledDate: (date: Date) => {
      const today = new Date();
      today.setHours(23, 59, 59, 999);
      return date > today;
    },
  },
};

/**
 * 禁用日期范围
 */
export const DisabledDateRange: Story = {
  name: '禁用指定日期范围',
  args: {
    placeholder: '禁用2025年11月10日至20日',
    disabledDate: (date: Date) => {
      const startDisable = new Date('2025-11-10');
      const endDisable = new Date('2025-11-20');
      return date >= startDisable && date <= endDisable;
    },
  },
};

/**
 * 日期 + 时间选择范围
 */
export const DateTimeRange: Story = {
  name: '日期时间范围选择',
  render: () => {
    const [range, setRange] = useState<{ startDate: Date; endDate: Date } | null>(null);
    return (
      <div>
        <DatePicker
          picker="datetime"
          range={true}
          valueRange={range}
          onRangeChange={setRange}
          placeholder="选择日期时间范围"
          timeFormat="24h"
          width={400}
        />
        <p style={{ marginTop: '10px' }}>
          {range
            ? `选中范围: ${range.startDate.toLocaleDateString('zh-CN')} ${range.startDate.toLocaleTimeString('zh-CN')} ~ ${range.endDate.toLocaleDateString('zh-CN')} ${range.endDate.toLocaleTimeString('zh-CN')}`
            : '未选择'}
        </p>
      </div>
    );
  },
};

/**
 * 8 种不同的组合
 * picker: year | month | date | datetime
 * range: true | false
 */
export const AllEightCases: Story = {
  name: '8种模式组合演示',
  render: () => {
    const [year, setYear] = useState<Date | null>(null);
    const [yearRange, setYearRange] = useState<{ startDate: Date; endDate: Date } | null>(null);
    const [month, setMonth] = useState<Date | null>(null);
    const [monthRange, setMonthRange] = useState<{ startDate: Date; endDate: Date } | null>(null);
    const [date, setDate] = useState<Date | null>(null);
    const [dateRange, setDateRange] = useState<{ startDate: Date; endDate: Date } | null>(null);
    const [dateTime, setDateTime] = useState<Date | null>(null);
    const [dateTimeRange, setDateTimeRange] = useState<{ startDate: Date; endDate: Date } | null>(null);

    return (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
        {/* 第一列：单选模式 */}
        <div>
          <h2 style={{ borderBottom: '2px solid #0066cc', paddingBottom: '10px', color: '#0066cc' }}>
            单选模式 (默认)
          </h2>

          <div style={{ marginBottom: '20px' }}>
            <h4>年份选择</h4>
            <DatePicker picker="year" value={year} onChange={setYear} placeholder="选择年份" width="100%" />
            {year && <p style={{ color: '#666', fontSize: '12px' }}>✓ {year.getFullYear()}</p>}
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h4>月份选择</h4>
            <DatePicker picker="month" value={month} onChange={setMonth} placeholder="选择月份" width="100%" />
            {month && (
              <p style={{ color: '#666', fontSize: '12px' }}>
                ✓ {month.getFullYear()}年{month.getMonth() + 1}月
              </p>
            )}
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h4>日期选择</h4>
            <DatePicker picker="date" value={date} onChange={setDate} placeholder="选择日期" width="100%" />
            {date && <p style={{ color: '#666', fontSize: '12px' }}>✓ {date.toLocaleDateString('zh-CN')}</p>}
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h4>日期+时间选择</h4>
            <DatePicker
              picker="datetime"
              value={dateTime}
              onChange={setDateTime}
              placeholder="选择日期和时间"
              width="100%"
              timeFormat="24h"
            />
            {dateTime && (
              <p style={{ color: '#666', fontSize: '12px' }}>
                ✓ {dateTime.toLocaleDateString('zh-CN')} {dateTime.toLocaleTimeString('zh-CN')}
              </p>
            )}
          </div>
        </div>

        {/* 第二列：范围选择模式 */}
        <div>
          <h2 style={{ borderBottom: '2px solid #ff6600', paddingBottom: '10px', color: '#ff6600' }}>
            范围模式 (range)
          </h2>

          <div style={{ marginBottom: '20px' }}>
            <h4>年份范围选择</h4>
            <DatePicker
              picker="year"
              range
              valueRange={yearRange}
              onRangeChange={setYearRange}
              placeholder="选择年份范围"
              width="100%"
            />
            {yearRange && (
              <p style={{ color: '#666', fontSize: '12px' }}>
                ✓ {yearRange.startDate.getFullYear()} ~ {yearRange.endDate.getFullYear()}
              </p>
            )}
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h4>月份范围选择</h4>
            <DatePicker
              picker="month"
              range
              valueRange={monthRange}
              onRangeChange={setMonthRange}
              placeholder="选择月份范围"
              width="100%"
            />
            {monthRange && (
              <p style={{ color: '#666', fontSize: '12px' }}>
                ✓ {monthRange.startDate.getFullYear()}年{monthRange.startDate.getMonth() + 1}月 ~{' '}
                {monthRange.endDate.getFullYear()}年{monthRange.endDate.getMonth() + 1}月
              </p>
            )}
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h4>日期范围选择</h4>
            <DatePicker
              picker="date"
              range
              valueRange={dateRange}
              onRangeChange={setDateRange}
              placeholder="选择日期范围"
              width="100%"
            />
            {dateRange && (
              <p style={{ color: '#666', fontSize: '12px' }}>
                ✓ {dateRange.startDate.toLocaleDateString('zh-CN')} ~ {dateRange.endDate.toLocaleDateString('zh-CN')}
              </p>
            )}
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h4>日期+时间范围选择</h4>
            <DatePicker
              picker="datetime"
              range
              valueRange={dateTimeRange}
              onRangeChange={setDateTimeRange}
              placeholder="选择日期时间范围"
              width="100%"
              timeFormat="24h"
            />
            {dateTimeRange && (
              <p style={{ color: '#666', fontSize: '12px' }}>
                ✓ {dateTimeRange.startDate.toLocaleDateString('zh-CN')}{' '}
                {dateTimeRange.startDate.toLocaleTimeString('zh-CN')} ~{' '}
                {dateTimeRange.endDate.toLocaleDateString('zh-CN')} {dateTimeRange.endDate.toLocaleTimeString('zh-CN')}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  },
};
