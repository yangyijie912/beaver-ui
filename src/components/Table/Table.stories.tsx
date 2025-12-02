import React from 'react';
import Table, { Column } from './Table';

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    columns: { table: { disable: true } },
    data: { table: { disable: true } },
    rowKey: { table: { disable: true } },
    renderCell: { table: { disable: true } },
    onSelectionChange: { table: { disable: true } },
    selectedKeys: { table: { disable: true } },
    showCheckbox: { control: 'boolean' },
    preservePxAsMin: { control: 'boolean' },
    minColumnPx: { control: 'number' },
  },
};

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

const columnsWithPercent: Column[] = [
  { key: 'unique_id', title: 'ID编号', width: '10%' },
  { key: 'orderNumber', title: '订单号', width: '10%' },
  { key: 'quantityOrdered', title: '订购数量', width: '10%' },
  { key: 'priceEach', title: '单价', width: '10%' },
  { key: 'orderGoods', title: '订单货物', width: '40%' },
  { key: 'sales', title: '销售额', width: '10%' },
  { key: 'orderDate', title: '订单日期', width: '10%' },
  { key: 'statusName', title: '状态', width: '10%' },
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

const DefaultTemplate = (args: any) => <Table columns={columns} data={data} rowKey="id" {...args} />;
export const Default = {
  name: '默认',
  render: DefaultTemplate,
  args: {},
};

const WithCheckboxesTemplate = (args: any) => <Table columns={columns} data={data} rowKey="id" {...args} />;
export const WithCheckboxes = {
  name: '带复选框',
  render: WithCheckboxesTemplate,
  args: { showCheckbox: true },
};

const AlignDemoTemplate = (args: any) => <Table columns={columnsWithAlign} data={data} rowKey="id" {...args} />;
export const AlignDemo = {
  name: '对齐演示',
  render: AlignDemoTemplate,
  args: {},
};

const PXTemplate = (args: any) => (
  <div>
    <div style={{ marginBottom: 12 }}>固定宽度示例（宽度和内容无关）</div>
    <Table columns={columnsWithPx} data={data} rowKey="id" {...args} />
  </div>
);
export const CustomWidths_PX = {
  name: '自定义宽度 - 像素',
  render: PXTemplate,
  args: {},
};

const PercentTemplate = (args: any) => (
  <div>
    <div style={{ marginBottom: 12 }}>百分比宽度示例（根据表格宽度自适应变化）</div>
    <Table columns={columnsWithPercent} data={data} rowKey="id" {...args} />
  </div>
);
export const CustomWidths_Percent = {
  name: '自定义宽度 - 百分比',
  render: PercentTemplate,
  args: {},
};

const MixTemplate = (args: any) => (
  <div>
    <div style={{ marginBottom: 12 }}>
      <p>混合宽度示例</p>
      <p>preservePxAsMin = false：只要包含 px 列且总宽超出容器就触发横向滚动</p>
    </div>
    <Table columns={columnsWithMix} data={data} rowKey="id" showCheckbox {...args} />
  </div>
);

export const CustomWidths_Mix = {
  name: '混合宽度',
  render: MixTemplate,
  args: {
    preservePxAsMin: false,
    minColumnPx: 80,
  },
};

const ControlledSelectionTemplate = (args: any) => {
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
export const ControlledSelection = {
  name: '受控选择',
  render: ControlledSelectionTemplate,
  args: { showCheckbox: true },
};

const UserInjectedStylesTemplate = (args: any) => {
  return (
    <div>
      <style>{userCss}</style>
      <Table
        columns={columns}
        data={data}
        rowKey="id"
        renderCell={(row, col) => {
          if (col.key === 'statusName') {
            const cls = String(row.status).toLowerCase().replace(/\s+/g, '');
            return <span className={`user-status user-status--${cls}`}>{row.statusName}</span>;
          }
          if (col.key === 'orderDate') {
            const date = new Date(row.orderDate);
            return date.toLocaleDateString();
          }
          return row[col.key];
        }}
        {...args}
      />
    </div>
  );
};
export const UserInjectedStyles = {
  name: '用户注入样式',
  render: UserInjectedStylesTemplate,
  args: {},
};

const ColumnLevelRenderTemplate = (args: any) => {
  const colsWithRender: Column[] = columns.map((c) =>
    c.key === 'statusName'
      ? {
          ...c,
          render: (value: any, row: any) => {
            const cls = String(row.status).toLowerCase().replace(/\s+/g, '');
            return <span className={`user-status user-status--${cls}`}>{value}</span>;
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
export const ColumnLevelRender = {
  name: '列级渲染',
  render: ColumnLevelRenderTemplate,
  args: {},
};

// 跨行/跨列示例
const spanColumns: Column[] = [
  { key: 'unique_id', title: 'ID编号' },
  { key: 'orderNumber', title: '订单号' },
  { key: 'quantityOrdered', title: '订购数量' },
  { key: 'priceEach', title: '单价' },
];

const dataWithSpans = [
  {
    id: 'r1',
    unique_id: { value: 1, rowSpan: 2 },
    orderNumber: { value: 'ORD-100', colSpan: 2 },
    quantityOrdered: 10,
    priceEach: 9.9,
  },
  {
    id: 'r2',
    // unique_id 被上行 rowSpan 覆盖，这里无需提供 unique_id
    orderNumber: 'ORD-101',
    quantityOrdered: 2,
    priceEach: 19.9,
  },
  {
    id: 'r3',
    unique_id: 3,
    orderNumber: { value: 'MULTI-COL', colSpan: 3 },
    quantityOrdered: 5,
    priceEach: 29.9,
  },
  {
    id: 'r4',
    unique_id: 4,
    orderNumber: 'ORD-200',
    quantityOrdered: 8,
    priceEach: 39.9,
  },
];

const SpanDemoTemplate = (args: any) => (
  <div>
    <div style={{ marginBottom: 12 }}>
      演示如何在数据中为单元格提供 <code>{`{ value, colSpan, rowSpan }`}</code> 来控制合并。
    </div>
    <Table columns={spanColumns} data={dataWithSpans} rowKey="id" {...args} />
  </div>
);

export const SpanDemo = {
  name: '跨行/跨列 演示',
  render: SpanDemoTemplate,
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

const VisibleSpanTemplate = (args: any) => (
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
        const raw = row[col.key];
        if (raw && typeof raw === 'object' && ('colSpan' in raw || 'rowSpan' in raw)) {
          return (
            <div style={{ background: 'rgba(14, 165, 233, 0.12)', padding: '10px 12px', borderRadius: 6 }}>
              {(raw as any).value ?? ''}
            </div>
          );
        }
        return row[col.key];
      }}
      {...args}
    />
  </div>
);

export const VisibleSpan = {
  name: '跨行/跨列 - 可视化示例',
  render: VisibleSpanTemplate,
  args: {},
};

// 示例：使用 column.span API 动态计算合并（按索引合并示例）
const columnSpanColumns: Column[] = [
  { key: 'name', title: '名称', span: (row, rowIndex) => (rowIndex === 0 ? { rowSpan: 2 } : undefined) },
  { key: 'info', title: '信息' },
  { key: 'extra', title: '额外' },
];

const columnSpanData = [
  { id: 'c1', name: '合并的名称', info: 'info1', extra: 'extra1' },
  { id: 'c2', name: '被覆盖', info: 'info2', extra: 'extra2' },
  { id: 'c3', name: '正常', info: 'info3', extra: 'extra3' },
];

const ColumnSpanTemplate = (args: any) => (
  <div>
    <div style={{ marginBottom: 12 }}>
      演示如何在列定义中通过 <code>span</code> 回调控制 rowSpan/colSpan。
    </div>
    <Table columns={columnSpanColumns} data={columnSpanData} rowKey="id" {...args} />
  </div>
);

export const ColumnSpanAPI = {
  name: '列级 span 回调 示例',
  render: ColumnSpanTemplate,
  args: {},
};
