import React from 'react';
import Table, { Column } from './Table';

export default {
  title: 'Components/Table',
  component: Table,
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

const columnsWithWidth: Column[] = [
  { key: 'unique_id', title: 'ID编号', width: '30%' },
  { key: 'orderNumber', title: '订单号', width: '30%' },
  { key: 'quantityOrdered', title: '订购数量' },
  { key: 'priceEach', title: '单价' },
  { key: 'orderGoods', title: '订单货物' },
  { key: 'sales', title: '销售额' },
  { key: 'orderDate', title: '订单日期', width: '50%' },
  { key: 'statusName', title: '状态' },
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

export const Default = () => {
  return <Table columns={columns} data={data} rowKey="id" />;
};

export const WithCheckboxes = () => <Table columns={columns} data={data} rowKey="id" showCheckbox />;

export const AlignDemo = () => <Table columns={columnsWithAlign} data={data} rowKey="id" />;

export const CustomWidths = () => <Table columns={columnsWithWidth} data={data} rowKey="id" showCheckbox />;

export const ControlledSelection = () => {
  const [selected, setSelected] = React.useState<string[]>(['1']);
  return (
    <div>
      <div style={{ marginBottom: 12 }}>Selected: {selected.join(', ') || '(none)'}</div>
      <Table
        columns={columns}
        data={data}
        rowKey="id"
        showCheckbox
        selectedKeys={selected}
        onSelectionChange={(keys) => setSelected(keys)}
      />
    </div>
  );
};

export const UserInjectedStyles = () => {
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
      />
    </div>
  );
};

export const ColumnLevelRender = () => {
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
      <Table columns={colsWithRender} data={data} rowKey="id" />
    </div>
  );
};
