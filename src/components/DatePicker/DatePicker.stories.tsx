/**
 * DatePicker 组件 Storybook 演示
 */

import React, { useState } from 'react';
import DatePicker from './DatePicker';
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
  title: 'Components/DatePicker',
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
    <>
      <DatePicker size="small" placeholder="小尺寸" />
      <DatePicker size="medium" placeholder="中等尺寸" />
      <DatePicker size="large" placeholder="大尺寸" />
    </>
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
 * 范围选择（日期范围）
 */
export const DateRange: Story = {
  name: '日期范围选择',
  render: () => {
    const [range, setRange] = useState<{ startDate: Date; endDate: Date } | null>(null);
    return (
      <div>
        <DatePicker picker="daterange" valueRange={range} onRangeChange={setRange} placeholder="选择日期范围" />
        <p style={{ marginTop: '10px' }}>
          {range
            ? `选中范围: ${range.startDate.toLocaleDateString('zh-CN')} ~ ${range.endDate.toLocaleDateString('zh-CN')}`
            : '未选择'}
        </p>
      </div>
    );
  },
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
    placeholder: '禁用2024年1月10日至20日',
    disabledDate: (date: Date) => {
      const startDisable = new Date('2024-01-10');
      const endDisable = new Date('2024-01-20');
      return date >= startDisable && date <= endDisable;
    },
  },
};

/**
 * 按类型选择（Picker Types）- 月份选择
 */
export const PickerMonth: Story = {
  name: '月份选择',
  args: {
    picker: 'month',
    placeholder: '选择月份',
  },
};

/**
 * 按类型选择（Picker Types）- 年份选择
 */
export const PickerYear: Story = {
  name: '年份选择',
  args: {
    picker: 'year',
    placeholder: '选择年份',
  },
};

/**
 * 按类型选择（Picker Types）- 日期+时间选择
 */
export const PickerDateTime: Story = {
  name: '日期和时间选择',
  args: {
    picker: 'datetime',
    placeholder: '选择日期和时间',
  },
};

/**
 * 按类型选择（Picker Types）- 日期范围+时间选择
 */
export const PickerDateTimeRange: Story = {
  name: '日期和时间范围选择',
  args: {
    picker: 'datetimerange',
    placeholder: '选择日期时间范围',
  },
};

/**
 * Picker 类型演示：所有选择器类型对比
 */
export const AllPickerTypes: Story = {
  name: '所有选择器类型',
  render: () => (
    <div style={{ display: 'flex', gap: '30px', width: '100%', flexWrap: 'wrap' }}>
      <div>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>日期选择 (date)</label>
        <DatePicker picker="date" placeholder="选择日期" width="100%" />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>月份选择 (month)</label>
        <DatePicker picker="month" placeholder="选择月份" width="100%" />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>年份选择 (year)</label>
        <DatePicker picker="year" placeholder="选择年份" width="100%" />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>日期时间选择 (datetime)</label>
        <DatePicker picker="datetime" placeholder="选择日期和时间" width="100%" />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>日期范围选择 (daterange)</label>
        <DatePicker picker="daterange" placeholder="选择日期范围" width="100%" />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          日期时间范围选择 (datetimerange)
        </label>
        <DatePicker picker="datetimerange" placeholder="选择日期时间范围" width="100%" />
      </div>
    </div>
  ),
};

/**
 * 完整演示：所有功能组合测试
 */
export const Complete: Story = {
  name: '完整演示',
  render: () => {
    const [singleDate, setSingleDate] = useState<Date | null>(null);
    const [rangeDate, setRangeDate] = useState<{ startDate: Date; endDate: Date } | null>(null);
    const [selectedMonth, setSelectedMonth] = useState<Date | null>(null);
    const [selectedYear, setSelectedYear] = useState<Date | null>(null);
    const [dateTime, setDateTime] = useState<Date | null>(null);
    const [dateTimeRange, setDateTimeRange] = useState<{ startDate: Date; endDate: Date } | null>(null);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <h3>单选日期 (date)</h3>
          <DatePicker
            value={singleDate}
            onChange={setSingleDate}
            format="YYYY-MM-DD"
            placeholder="选择单个日期"
            width="100%"
          />
          {singleDate && (
            <p style={{ marginTop: '10px', color: '#666' }}>选中: {singleDate.toLocaleDateString('zh-CN')}</p>
          )}
        </div>

        <div>
          <h3>月份选择 (month)</h3>
          <DatePicker
            picker="month"
            value={selectedMonth}
            onChange={setSelectedMonth}
            placeholder="选择月份"
            width="100%"
          />
          {selectedMonth && (
            <p style={{ marginTop: '10px', color: '#666' }}>
              选中: {selectedMonth.getFullYear()}年{selectedMonth.getMonth() + 1}月
            </p>
          )}
        </div>

        <div>
          <h3>年份选择 (year)</h3>
          <DatePicker
            picker="year"
            value={selectedYear}
            onChange={setSelectedYear}
            placeholder="选择年份"
            width="100%"
          />
          {selectedYear && <p style={{ marginTop: '10px', color: '#666' }}>选中: {selectedYear.getFullYear()}年</p>}
        </div>

        <div>
          <h3>日期+时间选择 (datetime)</h3>
          <DatePicker
            picker="datetime"
            value={dateTime}
            onChange={setDateTime}
            placeholder="选择日期和时间"
            width="100%"
          />
          {dateTime && (
            <p style={{ marginTop: '10px', color: '#666' }}>
              选中: {dateTime.toLocaleDateString('zh-CN')} {dateTime.toLocaleTimeString('zh-CN')}
            </p>
          )}
        </div>

        <div>
          <h3>日期范围选择 (daterange)</h3>
          <DatePicker
            picker="daterange"
            valueRange={rangeDate}
            onRangeChange={setRangeDate}
            format="YYYY-MM-DD"
            placeholder="选择日期范围"
            width="100%"
          />
          {rangeDate && (
            <p style={{ marginTop: '10px', color: '#666' }}>
              选中范围: {rangeDate.startDate.toLocaleDateString('zh-CN')} ~{' '}
              {rangeDate.endDate.toLocaleDateString('zh-CN')}
            </p>
          )}
        </div>

        <div>
          <h3>日期+时间范围选择 (datetimerange)</h3>
          <DatePicker
            picker="datetimerange"
            valueRange={dateTimeRange}
            onRangeChange={setDateTimeRange}
            placeholder="选择日期时间范围"
            width="100%"
          />
          {dateTimeRange && (
            <p style={{ marginTop: '10px', color: '#666' }}>
              选中范围: {dateTimeRange.startDate.toLocaleDateString('zh-CN')}{' '}
              {dateTimeRange.startDate.toLocaleTimeString('zh-CN')} ~{' '}
              {dateTimeRange.endDate.toLocaleDateString('zh-CN')} {dateTimeRange.endDate.toLocaleTimeString('zh-CN')}
            </p>
          )}
        </div>

        <div>
          <h3>禁用周末的选择</h3>
          <DatePicker
            placeholder="禁用周末"
            disabledDate={(date) => {
              const day = date.getDay();
              return day === 0 || day === 6;
            }}
            width="100%"
          />
        </div>

        <div>
          <h3>小尺寸禁用状态</h3>
          <DatePicker size="small" disabled placeholder="已禁用" defaultValue={new Date()} width="100%" />
        </div>

        <div>
          <h3>大尺寸自定义宽度</h3>
          <DatePicker size="large" placeholder="大尺寸选择器" width="100%" />
        </div>
      </div>
    );
  },
};
