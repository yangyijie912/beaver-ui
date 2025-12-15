import React from 'react';
import Table, { Column } from './Table';
import type { Meta, StoryObj } from '@storybook/react';

/**
 * Table 组件
 *
 * - 使用场景：展示和操作结构化数据的表格
 * - 支持可选的多选框列，便于选择多行数据
 * - 支持受控和非受控的行选择状态管理
 * - 支持固定表头和固定列，提升大数据量表格的可用性
 * - 支持自定义单元格渲染，满足复杂展示需求
 * - 支持边框样式和空状态展示
 */
const meta: Meta<typeof Table> = {
  title: '数据展示（Data Display）/Table',
  component: Table,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Table>;

const columns: Column[] = [
  { key: 'unique_id', title: 'ID编号' },
  { key: 'orderNumber', title: '订单号' },
  { key: 'quantityOrdered', title: '订购数量' },
  { key: 'priceEach', title: '单价' },
  { key: 'orderGoods', title: '订单货物' },
  { key: 'sales', title: '销售额' },
  { key: 'orderDate', title: '订单日期' },
  { key: 'statusName', title: '状态' },
];

const columnsWithAlign: Column[] = [
  { key: 'unique_id', title: 'ID编号' },
  { key: 'orderNumber', title: '订单号' },
  { key: 'quantityOrdered', title: '订购数量', align: 'center' },
  { key: 'priceEach', title: '单价', align: 'right' },
  { key: 'orderGoods', title: '订单货物', align: 'center' },
  { key: 'sales', title: '销售额', align: 'right' },
  { key: 'orderDate', title: '订单日期', align: 'center' },
  { key: 'statusName', title: '状态', align: 'center' },
];

const columnsWithPx: Column[] = [
  { key: 'unique_id', title: 'ID编号', width: '100px' },
  { key: 'orderNumber', title: '订单号', width: '100px' },
  { key: 'quantityOrdered', title: '订购数量', width: '100px' },
  { key: 'priceEach', title: '单价', width: '100px' },
  { key: 'orderGoods', title: '订单货物', width: '700px' },
  { key: 'sales', title: '销售额', width: '100px' },
  { key: 'orderDate', title: '订单日期', width: '150px' },
  { key: 'statusName', title: '状态', width: '100px' },
];

const columnsWithMix: Column[] = [
  { key: 'unique_id', title: 'ID编号', width: '100px' },
  { key: 'orderNumber', title: '订单号', width: '10%' },
  { key: 'quantityOrdered', title: '订购数量', width: '10%' },
  { key: 'priceEach', title: '单价', width: '10%' },
  { key: 'orderGoods', title: '订单货物', width: '50%' },
  { key: 'sales', title: '销售额', width: '10%' },
  { key: 'orderDate', title: '订单日期', width: '10%' },
  { key: 'statusName', title: '状态', width: '100px' },
];

const data = [
  {
    id: 1,
    unique_id: 1,
    orderNumber: 10107,
    quantityOrdered: 30,
    priceEach: 95.7,
    orderGoods: '货物1, 货物2',
    sales: 2871,
    orderDate: '2025-01-15',
    status: 'Disputed',
    statusName: '待处理',
  },
  {
    id: 2,
    unique_id: 2,
    orderNumber: 10121,
    quantityOrdered: 34,
    priceEach: 81.35,
    orderGoods: '货物3, 货物4',
    sales: 2765.9,
    orderDate: '2025-01-16',
    status: 'Shipped',
    statusName: '已发货',
  },
  {
    id: 3,
    unique_id: 3,
    orderNumber: 10134,
    quantityOrdered: 41,
    priceEach: 94.74,
    orderGoods: '货物5, 货物6',
    sales: 3884.34,
    orderDate: '2025-01-17',
    status: 'In Process',
    statusName: '处理中',
  },
  {
    id: 4,
    unique_id: 4,
    orderNumber: 10145,
    quantityOrdered: 45,
    priceEach: 83.26,
    orderGoods: '货物7, 货物8',
    sales: 3746.7,
    orderDate: '2025-01-18',
    status: 'In Process',
    statusName: '处理中',
  },
  {
    id: 5,
    unique_id: 5,
    orderNumber: 10159,
    quantityOrdered: 49,
    priceEach: 100,
    orderGoods: '货物9, 货物10',
    sales: 5205.27,
    orderDate: '2025-01-19',
    status: 'Disputed',
    statusName: '待处理',
  },
  {
    id: 6,
    unique_id: 6,
    orderNumber: 10168,
    quantityOrdered: 36,
    priceEach: 96.66,
    orderGoods: '货物11, 货物12',
    sales: 3479.76,
    orderDate: '2025-01-20',
    status: 'Shipped',
    statusName: '已发货',
  },
  {
    id: 7,
    unique_id: 7,
    orderNumber: 10180,
    quantityOrdered: 29,
    priceEach: 86.13,
    orderGoods: '货物17, 货物18',
    sales: 2497.77,
    orderDate: '2025-01-21',
    status: 'Disputed',
    statusName: '待处理',
  },
  {
    id: 8,
    unique_id: 8,
    orderNumber: 10188,
    quantityOrdered: 48,
    priceEach: 100,
    orderGoods: '货物19, 货物20',
    sales: 5512.32,
    orderDate: '2025-01-22',
    status: 'Disputed',
    statusName: '待处理',
  },
];

// 模拟自定义样式注入场景
const userCss = `
  .user-status {
    display: inline-block;
    padding: 6px 12px;
    border-radius: 14px;
    font-size: 13px;
    border: 1px solid rgba(0,0,0,0.06);
    background: #fff;
  }
  .user-status--disputed {
    color: #c0392b;
    border-color: rgba(192,57,43,0.15);
    background: rgba(192,57,43,0.04);
  }
  .user-status--shipped {
    color: #1e90ff;
    border-color: rgba(30,144,255,0.15);
    background: rgba(30,144,255,0.04);
  }
  .user-status--inprocess {
    color: #16a34a;
    border-color: rgba(22,163,74,0.12);
    background: rgba(22,163,74,0.04);
  }
  `;

type TableArgs = Omit<React.ComponentProps<typeof Table>, 'columns' | 'data' | 'rowKey'>;

const DefaultTemplate = (args: TableArgs) => <Table columns={columns} data={data} rowKey="id" {...args} />;
export const Default: Story = {
  name: '默认',
  render: DefaultTemplate,
  args: {},
};

const EmptyTemplate = (args: TableArgs) => <Table columns={columns} data={[]} rowKey="id" {...args} />;
export const EmptyState: Story = {
  name: '暂无数据',
  render: EmptyTemplate,
  args: {},
};

const WithCheckboxesTemplate = (args: TableArgs) => <Table columns={columns} data={data} rowKey="id" {...args} />;
export const WithCheckboxes: Story = {
  name: '带复选框',
  render: WithCheckboxesTemplate,
  args: { showCheckbox: true },
};

const AlignDemoTemplate = (args: TableArgs) => <Table columns={columnsWithAlign} data={data} rowKey="id" {...args} />;
export const AlignDemo: Story = {
  name: '对齐方式',
  render: AlignDemoTemplate,
  args: {},
};

const ControlledSelectionTemplate = (args: TableArgs) => {
  const [selected, setSelected] = React.useState<string[]>(['1']);
  return (
    <div>
      <div style={{ marginBottom: 12 }}>Selected: {selected.join(', ') || '(none)'}</div>
      <Table
        columns={columns}
        data={data}
        rowKey="id"
        selectedKeys={selected}
        onSelectionChange={(keys) => setSelected(keys)}
        {...args}
      />
    </div>
  );
};
export const ControlledSelection: Story = {
  name: '受控选择',
  render: ControlledSelectionTemplate,
  args: { showCheckbox: true },
};

const MixTemplate = (args: TableArgs) => (
  <div>
    <div style={{ marginBottom: 12 }}>
      <p>自定义宽度示例</p>
      <p>可以尝试更改 preservePxAsMin 参数查看</p>
      <p>preservePxAsMin = false：只要包含 px 列且总宽超出容器就触发横向滚动</p>
    </div>
    <Table columns={columnsWithMix} data={data} rowKey="id" showCheckbox {...args} />
  </div>
);

export const CustomWidths = {
  name: '自定义宽度',
  render: MixTemplate,
  args: {
    preservePxAsMin: true,
    minColumnPx: 80,
  },
};

// 固定表头示例：使用组件自身的滚动容器（通过 maxHeight），确保 sticky 生效
const FixedHeaderTemplate = (args: TableArgs) => {
  // 制造更多行以便出现纵向滚动（确保每条记录有唯一 id）
  const many = Array.from({ length: 20 }).flatMap((_, pageIdx) =>
    data.map((d) => ({ ...d, id: d.id + pageIdx * data.length, unique_id: d.unique_id + pageIdx * data.length }))
  );
  return <Table columns={columns} data={many} rowKey="id" fixedHeader maxHeight={240} {...args} />;
};

export const FixedHeader = {
  name: '固定表头',
  render: FixedHeaderTemplate,
  args: {},
};

// 同时固定左右两侧列示例
const FixedBothSidesTemplate = (args: TableArgs) => (
  <Table
    columns={columnsWithPx}
    data={data}
    rowKey="id"
    showCheckbox
    fixedColumnCount={2}
    fixedRightCount={2}
    {...args}
  />
);

export const FixedBothSides = {
  name: '左右固定列',
  render: FixedBothSidesTemplate,
  args: {},
};

// 固定表头与左右列
const FixedHeaderAndBothSidesTemplate = (args: TableArgs) => {
  const many = Array.from({ length: 20 }).flatMap((_, pageIdx) =>
    data.map((d) => ({ ...d, id: d.id + pageIdx * data.length, unique_id: d.unique_id + pageIdx * data.length }))
  );
  return (
    <Table
      columns={columnsWithPx}
      data={many}
      rowKey="id"
      showCheckbox
      fixedHeader
      fixedColumnCount={2}
      fixedRightCount={2}
      maxHeight={240}
      {...args}
    />
  );
};

export const FixedHeaderAndBothSides = {
  name: '固定表头 & 左右列',
  render: FixedHeaderAndBothSidesTemplate,
  args: {},
};

const BorderedTemplate = (args: TableArgs) => (
  <div>
    <p>
      通过 <code>border</code> 属性控制列之间的竖向分隔线和粘性列的分隔效果。
    </p>
    <Table columns={columns} data={data} rowKey="id" {...args} />
  </div>
);

export const Bordered: Story = {
  name: 'border 属性',
  render: BorderedTemplate,
  args: { border: true, showCheckbox: false },
};

const RenderCellInjectedStylesTemplate = (args: TableArgs) => {
  return (
    <div>
      <style>{userCss}</style>
      <Table
        columns={columns}
        data={data}
        rowKey="id"
        renderCell={(row, col) => {
          if (col.key === 'statusName') {
            const cls = String((row as any).status)
              .toLowerCase()
              .replace(/\s+/g, '');
            return <span className={`user-status user-status--${cls}`}>{(row as any).statusName}</span>;
          }
          if (col.key === 'orderDate') {
            const date = new Date((row as any).orderDate);
            return date.toLocaleDateString();
          }
          return (row as any)[col.key];
        }}
        {...args}
      />
    </div>
  );
};
export const RenderCellInjectedStyles: Story = {
  name: 'renderCell渲染',
  render: RenderCellInjectedStylesTemplate,
  args: {},
};

const ColumnLevelRenderTemplate = (args: TableArgs) => {
  const colsWithRender: Column[] = columns.map((c) =>
    c.key === 'statusName'
      ? {
          ...c,
          render: (value: unknown, row: unknown) => {
            const cls = String((row as any).status)
              .toLowerCase()
              .replace(/\s+/g, '');
            return <span className={`user-status user-status--${cls}`}>{value as React.ReactNode}</span>;
          },
        }
      : c
  );

  return (
    <div>
      <style>{userCss}</style>
      <Table columns={colsWithRender} data={data} rowKey="id" {...args} />
    </div>
  );
};
export const ColumnLevelRender: Story = {
  name: '列级渲染',
  render: ColumnLevelRenderTemplate,
  args: {},
};

// --- 分页示例：非受控（client-side） ---
const ClientSidePaginationTemplate = (args: TableArgs) => {
  const many = Array.from({ length: 20 }).flatMap((_, pageIdx) =>
    data.map((d) => ({ ...d, id: d.id + pageIdx * data.length, unique_id: d.unique_id + pageIdx * data.length }))
  );
  return (
    <div>
      <p>非受控分页：Table 内部处理分页（对传入的 data 做切片）。</p>
      <Table
        columns={columns}
        data={many}
        rowKey="id"
        pagination={{ pageSize: 5, pageSizeOptions: [5, 10, 20], showSizeChanger: true, showQuickJumper: true }}
        {...args}
      />
    </div>
  );
};

export const ClientSidePagination: Story = {
  name: '分页（非受控）',
  render: ClientSidePaginationTemplate,
  args: {},
};

// --- 分页示例：受控（父组件管理 current/total/onChange） ---
const ControlledPaginationTemplate = (args: TableArgs) => {
  // 模拟服务端数据集
  const serverData = React.useMemo(
    () =>
      Array.from({ length: 67 }).map((_, i) => ({
        id: i + 1,
        unique_id: i + 1,
        orderNumber: 10000 + i,
        quantityOrdered: Math.ceil(Math.random() * 100),
        priceEach: Number((Math.random() * 200).toFixed(2)),
        orderGoods: `货物 ${i + 1}`,
        sales: Math.floor(Math.random() * 10000),
        orderDate: '2025-01-01',
        statusName: i % 3 === 0 ? '待处理' : i % 3 === 1 ? '已发货' : '处理中',
      })),
    []
  );

  const [current, setCurrent] = React.useState<number>(1);
  const [pageSize, setPageSize] = React.useState<number>(10);

  const currentPageData = React.useMemo(() => {
    const start = (current - 1) * pageSize;
    return serverData.slice(start, start + pageSize);
  }, [serverData, current, pageSize]);

  return (
    <div>
      <p>受控分页：父组件负责提供当前页数据并处理 `onChange`。</p>
      <Table
        columns={columns}
        data={currentPageData}
        rowKey="id"
        pagination={{
          total: serverData.length,
          current,
          pageSize,
          onChange: (p, ps) => {
            setPageSize(ps ?? pageSize);
            setCurrent(p);
          },
          showSizeChanger: true,
          showQuickJumper: true,
        }}
        {...args}
      />
    </div>
  );
};

export const ControlledPagination: Story = {
  name: '分页（受控）',
  render: ControlledPaginationTemplate,
  args: {},
};

// 更明显的跨行/跨列示例，带可视化样式以便在 Storybook 中能一眼看出合并效果
const visibleSpanColumns: Column[] = [
  { key: 'a', title: '列 A' },
  { key: 'b', title: '列 B' },
  { key: 'c', title: '列 C' },
  { key: 'd', title: '列 D' },
  { key: 'e', title: '列 E' },
];

const visibleSpanData = [
  // 第一行：A 跨两行（rowSpan=2），B 跨三列（colSpan=3）
  {
    id: 'v1',
    a: { value: 'A: rowspan 2', rowSpan: 2 },
    b: { value: 'B: colspan 3', colSpan: 3 },
    c: '',
    d: '',
    e: 'E1',
  },
  // 第二行：A 被上一行占用，B/C/D 被上一行的 colspan 覆盖，只显示 E
  {
    id: 'v2',
    // a: 被覆盖
    b: 'should be covered',
    c: 'should be covered',
    d: 'should be covered',
    e: { value: 'E2', colSpan: 1 },
  },
  // 第三行：C 跨两列
  {
    id: 'v3',
    a: 'A3',
    b: 'B3',
    c: { value: 'C: colspan 2', colSpan: 2 },
    d: '',
    e: 'E3',
  },
  // 第四行：无合并
  {
    id: 'v4',
    a: 'A4',
    b: 'B4',
    c: 'C4',
    d: 'D4',
    e: 'E4',
  },
];

const VisibleSpanTemplate = (args: TableArgs) => (
  <div>
    <div style={{ marginBottom: 12 }}>
      更明显的跨行/跨列示例，使用 <code>{`{ value, colSpan, rowSpan }`}</code>，并通过 <code>renderCell</code>{' '}
      高亮合并单元格。
    </div>
    <Table
      columns={visibleSpanColumns}
      data={visibleSpanData}
      rowKey="id"
      renderCell={(row, col) => {
        const raw = (row as any)[col.key];
        const isObject = raw && typeof raw === 'object';
        if (isObject && ('colSpan' in raw || 'rowSpan' in raw || 'value' in raw)) {
          const r = raw as { value?: React.ReactNode; colSpan?: number; rowSpan?: number };
          return (
            <div style={{ background: 'rgba(14, 165, 233, 0.12)', padding: '10px 12px', borderRadius: 6 }}>
              {r.value ?? ''}
            </div>
          );
        }
        return (row as any)[col.key];
      }}
      {...args}
    />
  </div>
);

export const VisibleSpan = {
  name: '跨行/跨列',
  render: VisibleSpanTemplate,
  args: {},
};

// 示例：使用 column.span API 动态计算合并（按索引合并示例）
const columnSpanColumns: Column[] = [
  { key: 'name', title: '名称', span: (_row, rowIndex) => (rowIndex === 0 ? { rowSpan: 2 } : undefined) },
  { key: 'info', title: '信息' },
  { key: 'extra', title: '额外' },
];

const columnSpanData = [
  { id: 'c1', name: '合并的名称', info: 'info1', extra: 'extra1' },
  { id: 'c2', name: '被覆盖', info: 'info2', extra: 'extra2' },
  { id: 'c3', name: '正常', info: 'info3', extra: 'extra3' },
];

const ColumnSpanTemplate = (args: TableArgs) => (
  <div>
    <div style={{ marginBottom: 12 }}>
      演示如何在列定义中通过 <code>span</code> 回调控制 rowSpan/colSpan。
    </div>
    <Table columns={columnSpanColumns} data={columnSpanData} rowKey="id" {...args} />
  </div>
);

export const ColumnSpanAPI = {
  name: '列级 span 回调',
  render: ColumnSpanTemplate,
  args: {},
};
