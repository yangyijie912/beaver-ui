import React from 'react';
import { createRoot } from 'react-dom/client';
import Button from '../components/Button/Button';
import Checkbox from '../components/Checkbox/Checkbox';
import Input from '../components/Input/Input';
import Radio from '../components/Radio/Radio';
import RadioGroup from '../components/Radio/RadioGroup';
import Select from '../components/Select/Select';
import Switch from '../components/Switch/Switch';
import Modal from '../components/Modal/Modal';
import Table, { Column } from '../components/Table/Table';
import Tooltip from '../components/Tooltip/Tooltip';
import '../tokens/tokens.css';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 28 }}>
      <h3 style={{ margin: '8px 0' }}>{title}</h3>
      <div>{children}</div>
    </section>
  );
}

function App() {
  const [selectValue, setSelectValue] = React.useState('banana');
  const [checked, setChecked] = React.useState(true);
  const [text, setText] = React.useState('Hello');
  const [radioVal, setRadioVal] = React.useState<string | number>('a');
  const [switchChecked, setSwitchChecked] = React.useState(true);
  const [selectedKeys, setSelectedKeys] = React.useState<string[]>([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalSize, setModalSize] = React.useState<'small' | 'medium' | 'large'>('medium');

  const options = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Citrus', value: 'citrus' },
  ];

  const tableColumns: Column[] = [
    { key: 'id', title: 'ID编号', width: '80px' },
    { key: 'orderNumber', title: '订单号', width: '100px' },
    { key: 'quantityOrdered', title: '订购数量', width: '100px' },
    { key: 'priceEach', title: '单价', width: '100px', align: 'right' },
    { key: 'orderGoods', title: '订单货物', width: '300px' },
    { key: 'sales', title: '销售额', width: '120px', align: 'right' },
    { key: 'orderDate', title: '订单日期', width: '150px' },
    { key: 'statusName', title: '状态', width: '100px' },
  ];

  const tableData = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    orderNumber: 10107 + i * 10,
    quantityOrdered: 30 + i,
    priceEach: (95.7 + i * 5).toFixed(2),
    orderGoods: `货物${i * 2 + 1}, 货物${i * 2 + 2}`,
    sales: (2871 + i * 100).toFixed(2),
    orderDate: `2025-01-${15 + i}`,
    statusName: ['待处理', '已发货', '处理中'][i % 3],
  }));

  return (
    <div style={{ maxWidth: 900, margin: '24px auto', padding: 12, fontFamily: 'Arial, sans-serif' }}>
      <h2>Beaver UI — Playground (All Components)</h2>

      <Section title="Button">
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Button onClick={() => alert('Primary clicked')}>Primary</Button>
          <Button variant="ghost" onClick={() => alert('Ghost clicked')}>
            Ghost
          </Button>
          <Button size="small">Small</Button>
          <Button size="large">Large</Button>
          <Button disabled>Disabled</Button>
        </div>
      </Section>

      <Section title="Checkbox">
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} label="Accept terms" />
          <Checkbox checked={false} onChange={() => {}} label="Unchecked" />
          <Checkbox indeterminate label="Indeterminate (visual)" />
          <Checkbox disabled label="Disabled" />
        </div>
      </Section>

      <Section title="Input">
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <Input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type..." />
          <Input validation="error" placeholder="Error state" />
          <Input validation="success" placeholder="Success state" />
          <Input textarea rows={4} defaultValue={`多行示例\n第二行`} />
        </div>
      </Section>

      <Section title="Radio">
        <RadioGroup value={radioVal} onChange={(v) => setRadioVal(String(v))}>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Radio value="a" label="Option A" />
            <Radio value="b" label="Option B" />
            <Radio value="c" label="Option C" />
          </div>
        </RadioGroup>
        <div style={{ marginTop: 8 }}>当前值: {String(radioVal)}</div>
      </Section>

      <Section title="Switch">
        <Switch checked={switchChecked} onChange={(c: boolean) => setSwitchChecked(c)} />
      </Section>

      <Section title="Select">
        <div style={{ maxWidth: 360 }}>
          <div style={{ marginBottom: 8 }}>当前值: {selectValue}</div>
          <Select
            options={options}
            value={selectValue}
            onChange={(v) => setSelectValue(Array.isArray(v) ? v[0] : v)}
            placeholder="请选择"
            searchable
          />
        </div>
      </Section>

      <Section title="Modal">
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <div>
            <label style={{ marginRight: 8 }}>选择尺寸：</label>
            <select
              value={modalSize}
              onChange={(e) => setModalSize(e.target.value as any)}
              style={{ padding: '6px 8px', borderRadius: '4px', border: '1px solid #ccc' }}
            >
              <option value="small">小 (300px)</option>
              <option value="medium">中 (520px)</option>
              <option value="large">大 (800px)</option>
            </select>
          </div>
          <Button onClick={() => setModalOpen(true)}>打开 Modal</Button>
        </div>
        <Modal
          open={modalOpen}
          size={modalSize}
          title="这是一个Modal组件"
          onClose={() => setModalOpen(false)}
          footer={
            <>
              <Button variant="ghost" onClick={() => setModalOpen(false)}>
                取消
              </Button>
              <Button onClick={() => setModalOpen(false)}>确定</Button>
            </>
          }
        >
          <p>现在你可以看到Modal的完整效果：</p>
          <ul>
            <li>黑色半透明遮罩层阻挡背景交互</li>
            <li>Modal框有清晰的边框和阴影</li>
            <li>支持点击关闭按钮(X)关闭</li>
            <li>支持点击遮罩层关闭</li>
            <li>支持按Escape键关闭</li>
            <li>可选择不同的尺寸预设</li>
          </ul>
          <p>尝试点击遮罩层或按Escape键来关闭Modal。</p>
        </Modal>
      </Section>

      <Section title="Table — 固定表头与左右固定列示例">
        <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
          <div style={{ marginBottom: 8 }}>演示：固定表头、左侧固定选择列 + 第一列、右侧固定最后一列</div>
          <Table
            columns={tableColumns}
            data={tableData}
            rowKey="id"
            showCheckbox
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
            fixedHeader
            maxHeight={300}
            fixedColumnCount={1} // 除了选择列外，固定第一列
            fixedRightCount={1} // 固定最后一列
          />
          <div style={{ marginTop: 8 }}>已选择: {selectedKeys.join(', ') || '无'}</div>
        </div>
      </Section>

      <Section title="Tooltip">
        <div>
          <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            <Tooltip content="这是左侧提示" placement="left">
              <Button>Left</Button>
            </Tooltip>

            <Tooltip content="这是中间提示" placement="top">
              <Button>Center</Button>
            </Tooltip>

            <Tooltip content="这是右侧提示" placement="right">
              <Button>Right</Button>
            </Tooltip>
          </div>
        </div>
      </Section>
    </div>
  );
}

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />);
