import React from 'react';
import { createRoot } from 'react-dom/client';
import Toast, { ToastProvider } from '../components/Toast/Toast';
import Alert from '../components/Alert/Alert';
import Button from '../components/Button/Button';
import Checkbox from '../components/Checkbox/Checkbox';
import Input from '../components/Input/Input';
import Radio from '../components/Radio/Radio';
import RadioGroup from '../components/Radio/RadioGroup';
import Select from '../components/Select/Select';
import DatePicker from '../components/DatePicker/DatePicker';
import Switch from '../components/Switch/Switch';
import Modal from '../components/Modal/Modal';
import Drawer from '../components/Drawer/Drawer';
import Table, { Column } from '../components/Table/Table';
import Tooltip from '../components/Tooltip/Tooltip';
import Popconfirm from '../components/Popconfirm/Popconfirm';
import Upload from '../components/Upload/Upload';
import Form, { FormItem } from '../components/Form';
import Tag from '../components/Tag/Tag';
import { Check, Warning, Info, Trash } from '../icons';
import '../styles/index.ts';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 28 }}>
      <h3 style={{ margin: '8px 0' }}>{title}</h3>
      <div>{children}</div>
    </section>
  );
}

function App() {
  const [selectValue, setSelectValue] = React.useState('');
  const [checked, setChecked] = React.useState(true);
  const [text, setText] = React.useState('Hello');
  const [radioVal, setRadioVal] = React.useState<string | number>('a');
  const [switchChecked, setSwitchChecked] = React.useState(true);
  const [selectedKeys, setSelectedKeys] = React.useState<string[]>([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalSize, setModalSize] = React.useState<'small' | 'medium' | 'large'>('medium');
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [drawerPlacement, setDrawerPlacement] = React.useState<'left' | 'right' | 'top' | 'bottom'>('right');
  const [dateValue, setDateValue] = React.useState<Date | null>(null);
  const [dateRangeValue, setDateRangeValue] = React.useState<{ startDate: Date; endDate: Date } | null>(null);

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

      <Section title="Alert">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {/* 信息型提示 */}
          <div>
            <div style={{ fontSize: 12, color: '#666', marginBottom: 6 }}>信息提示</div>
            <Alert type="info" title="提示信息" message="这是一条信息提示，用于向用户显示重要信息。" closable />
          </div>

          {/* 成功型提示 */}
          <div>
            <div style={{ fontSize: 12, color: '#666', marginBottom: 6 }}>成功提示</div>
            <Alert type="success" title="操作成功" message="您的操作已完成，所有更改已保存。" closable />
          </div>

          {/* 警告型提示 */}
          <div>
            <div style={{ fontSize: 12, color: '#666', marginBottom: 6 }}>警告提示</div>
            <Alert type="warning" title="请注意" message="这个操作可能会影响您的数据，请谨慎处理。" closable />
          </div>

          {/* 错误型提示 */}
          <div>
            <div style={{ fontSize: 12, color: '#666', marginBottom: 6 }}>错误提示</div>
            <Alert
              type="error"
              title="操作失败"
              message="由于网络连接问题，操作无法完成。请检查网络后重试。"
              closable
            />
          </div>

          {/* 仅消息，无标题 */}
          <div>
            <div style={{ fontSize: 12, color: '#666', marginBottom: 6 }}>仅消息（无标题）</div>
            <Alert type="info" message="这是一条简短的提示信息" closable />
          </div>

          {/* 紧凑模式 */}
          <div>
            <div style={{ fontSize: 12, color: '#666', marginBottom: 6 }}>紧凑模式</div>
            <Alert type="success" message="紧凑模式的提示信息" closable compact />
          </div>

          {/* 无左侧边框 */}
          <div>
            <div style={{ fontSize: 12, color: '#666', marginBottom: 6 }}>无左侧颜色条</div>
            <Alert type="warning" message="这个提示没有左侧的颜色指示条" showBorder={false} closable />
          </div>

          {/* 自定义图标 */}
          <div>
            <div style={{ fontSize: 12, color: '#666', marginBottom: 6 }}>自定义图标</div>
            <Alert
              type="success"
              title="自定义图标示例"
              message="使用 Emoji 或其他内容替换默认图标"
              icon="🎉"
              closable
            />
          </div>
        </div>
      </Section>
      <Section title="Toast">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {/* 成功提示 */}
          <div>
            <div style={{ fontSize: 12, color: '#666', marginBottom: 6 }}>成功提示</div>
            <Button size="small" variant="primary" onClick={() => Toast.success('操作已完成')}>
              显示成功通知
            </Button>
          </div>

          {/* 错误提示 */}
          <div>
            <div style={{ fontSize: 12, color: '#666', marginBottom: 6 }}>错误提示</div>
            <Button
              size="small"
              color="danger"
              onClick={() => Toast.error('操作失败', { title: '错误提示', duration: 5000 })}
            >
              显示错误通知
            </Button>
          </div>

          {/* 警告提示 */}
          <div>
            <div style={{ fontSize: 12, color: '#666', marginBottom: 6 }}>警告提示</div>
            <Button size="small" onClick={() => Toast.warning('请确认此操作')}>
              显示警告通知
            </Button>
          </div>

          {/* 信息提示 */}
          <div>
            <div style={{ fontSize: 12, color: '#666', marginBottom: 6 }}>信息提示</div>
            <Button size="small" onClick={() => Toast.info('这是一条提示信息', { title: '提示' })}>
              显示信息通知
            </Button>
          </div>

          {/* 加载提示 */}
          <div>
            <div style={{ fontSize: 12, color: '#666', marginBottom: 6 }}>加载提示</div>
            <Button
              size="small"
              onClick={() => {
                const id = Toast.loading('加载中...');
                setTimeout(() => {
                  Toast.close(id);
                  Toast.success('加载完成');
                }, 3000);
              }}
            >
              显示加载通知
            </Button>
          </div>

          {/* 多个通知 */}
          <div>
            <div style={{ fontSize: 12, color: '#666', marginBottom: 6 }}>多个通知堆叠</div>
            <Button
              size="small"
              onClick={() => {
                Toast.success('第一条');
                setTimeout(() => Toast.info('第二条'), 300);
                setTimeout(() => Toast.warning('第三条'), 600);
              }}
            >
              显示多个通知
            </Button>
          </div>
        </div>
      </Section>

      <Section title="Button">
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Button onClick={() => Toast.info('Default clicked')}>Default</Button>
          <Button variant="ghost" onClick={() => Toast.info('Ghost clicked')}>
            Ghost
          </Button>
          <Button variant="primary" color="danger" size="small">
            Small
          </Button>
          <Button variant="primary" size="large">
            Large
          </Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
          <Button variant="primary" loading>
            loading
          </Button>
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
        <div>
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

      <Section title="DatePicker">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div>
            <h4>单选日期</h4>
            <div style={{ marginBottom: 8 }}>
              当前值: {dateValue ? dateValue.toLocaleDateString('zh-CN') : '未选择'}
            </div>
            <DatePicker value={dateValue} onChange={setDateValue} placeholder="请选择日期" allowClear />
          </div>
          <div>
            <h4>日期范围选择</h4>
            <div style={{ marginBottom: 8 }}>
              当前值:{' '}
              {dateRangeValue
                ? `${dateRangeValue.startDate.toLocaleDateString('zh-CN')} ~ ${dateRangeValue.endDate.toLocaleDateString('zh-CN')}`
                : '未选择'}
            </div>
            <DatePicker
              picker="date"
              range={true}
              valueRange={dateRangeValue}
              onRangeChange={setDateRangeValue}
              placeholder="请选择日期范围"
              allowClear
            />
          </div>
          <div>
            <h4>禁用周末</h4>
            <DatePicker
              placeholder="禁用周末"
              disabledDate={(date) => {
                const day = date.getDay();
                return day === 0 || day === 6;
              }}
            />
          </div>
        </div>
      </Section>

      <Section title="Modal">
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <div>
            <label style={{ marginRight: 8 }}>选择尺寸：</label>
            <Select
              options={[
                {
                  label: '小 (300px)',
                  value: 'small',
                },
                {
                  label: '中 (520px)',
                  value: 'medium',
                },
                {
                  label: '大 (800px)',
                  value: 'large',
                },
              ]}
              value={modalSize}
              onChange={(e) => setModalSize(e as string as 'small' | 'medium' | 'large')}
              placeholder="请选择"
            />
          </div>
          <Button variant="primary" onClick={() => setModalOpen(true)}>
            打开 Modal
          </Button>
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
              <Button variant="primary" onClick={() => setModalOpen(false)}>
                确定
              </Button>
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

      <Section title="Drawer">
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <div>
            <label style={{ marginRight: 8 }}>选择方向：</label>
            <Select
              options={[
                {
                  label: '左侧',
                  value: 'left',
                },
                {
                  label: '右侧',
                  value: 'right',
                },
                {
                  label: '顶部',
                  value: 'top',
                },
                {
                  label: '底部',
                  value: 'bottom',
                },
              ]}
              value={drawerPlacement}
              onChange={(e) => setDrawerPlacement(e as any)}
              placeholder="请选择"
            />
          </div>
          <Button variant="primary" onClick={() => setDrawerOpen(true)}>
            打开 Drawer
          </Button>
        </div>
        <Drawer
          open={drawerOpen}
          placement={drawerPlacement}
          title="Drawer 演示"
          onClose={() => setDrawerOpen(false)}
          footer={
            <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', width: '100%' }}>
              <Button variant="ghost" onClick={() => setDrawerOpen(false)}>
                取消
              </Button>
              <Button variant="primary" onClick={() => setDrawerOpen(false)}>
                确定
              </Button>
            </div>
          }
        >
          <p>这是一个Drawer组件演示：</p>
          <ul>
            <li>支持从四个方向弹出（左、右、上、下）</li>
            <li>半透明遮罩层阻挡背景交互</li>
            <li>平滑的滑入/滑出动画</li>
            <li>支持点击关闭按钮(X)关闭</li>
            <li>支持点击遮罩层关闭</li>
            <li>支持按Escape键关闭</li>
            <li>内容超过高度自动显示滚动条</li>
          </ul>
          <p>选择不同的方向试试看吧！</p>
        </Drawer>
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
              <Button variant="primary">Left</Button>
            </Tooltip>

            <Tooltip content="这是中间提示" placement="top">
              <Button variant="primary">Center</Button>
            </Tooltip>

            <Tooltip content="这是右侧提示" placement="right">
              <Button variant="primary">Right</Button>
            </Tooltip>
          </div>
        </div>
      </Section>

      {/* Popconfirm演示 */}
      <Section title="Popconfirm">
        <div>
          <Popconfirm title="确定要删除吗？" placement="top">
            <Button color="danger">删除</Button>
          </Popconfirm>
        </div>
      </Section>

      {/* Upload演示 */}
      <Section title="Upload">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <div style={{ marginBottom: 8 }}>基础上传（多文件）</div>
            <Upload
              action="/api/upload"
              multiple
              accept="*"
              dragText="拖拽文件到此处，或点击选择文件"
              buttonText="选择文件"
              showFileList
            />
          </div>

          <div>
            <div style={{ marginBottom: 8 }}>单文件上传</div>
            <Upload
              action="/api/upload"
              multiple={false}
              dragText="拖拽单个文件到此处上传"
              buttonText="选择单个文件"
              showFileList
            />
          </div>

          <div>
            <div style={{ marginBottom: 8 }}>限制文件大小（最大 2MB）</div>
            <Upload
              action="/api/upload"
              maxSize={2 * 1024 * 1024}
              maxCount={5}
              accept="*"
              dragText="拖拽文件到此处（最大 2MB，最多 5 个）"
              sizeLimitMessage="文件大小不超过 2MB"
              showFileList
            />
          </div>

          <div>
            <div style={{ marginBottom: 8 }}>限制文件类型（仅图片）</div>
            <Upload
              action="/api/upload"
              accept="image/*"
              dragText="仅支持图片文件"
              buttonText="选择图片"
              showFileList
            />
          </div>

          <div>
            <div style={{ marginBottom: 8 }}>禁用状态</div>
            <Upload disabled dragText="上传已禁用" buttonText="选择文件" />
          </div>
        </div>
      </Section>

      {/* Tag演示 */}
      <Section title="Tag">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* 基本类型 */}
          <div>
            <div style={{ fontSize: 12, color: '#666', marginBottom: 6 }}>基本类型</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <Tag type="default">默认</Tag>
              <Tag type="primary">主色调</Tag>
              <Tag type="success">成功</Tag>
              <Tag type="warning">警告</Tag>
              <Tag type="error">错误</Tag>
            </div>
          </div>

          {/* 不同尺寸 */}
          <div>
            <div style={{ fontSize: 12, color: '#666', marginBottom: 6 }}>不同尺寸</div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
              <Tag size="small" type="primary">
                小标签
              </Tag>
              <Tag size="medium" type="primary">
                中标签
              </Tag>
              <Tag size="large" type="primary">
                大标签
              </Tag>
            </div>
          </div>

          {/* 不同变体 */}
          <div>
            <div style={{ fontSize: 12, color: '#666', marginBottom: 6 }}>不同变体</div>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: 11, color: '#999', marginBottom: 4 }}>实心 (solid)</div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  <Tag variant="solid" type="primary">
                    主色
                  </Tag>
                  <Tag variant="solid" type="success">
                    成功
                  </Tag>
                  <Tag variant="solid" type="warning">
                    警告
                  </Tag>
                </div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: '#999', marginBottom: 4 }}>边框 (outline)</div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  <Tag variant="outline" type="primary">
                    主色
                  </Tag>
                  <Tag variant="outline" type="success">
                    成功
                  </Tag>
                  <Tag variant="outline" type="warning">
                    警告
                  </Tag>
                </div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: '#999', marginBottom: 4 }}>浅色 (light)</div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  <Tag variant="light" type="primary">
                    主色
                  </Tag>
                  <Tag variant="light" type="success">
                    成功
                  </Tag>
                  <Tag variant="light" type="warning">
                    警告
                  </Tag>
                </div>
              </div>
            </div>
          </div>

          {/* 可关闭的标签 */}
          <div>
            <div style={{ fontSize: 12, color: '#666', marginBottom: 6 }}>可关闭标签</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <Tag closable type="primary" onClose={() => console.log('关闭')}>
                可关闭 #1
              </Tag>
              <Tag closable type="success" onClose={() => console.log('关闭')}>
                可关闭 #2
              </Tag>
              <Tag closable type="warning" onClose={() => console.log('关闭')}>
                可关闭 #3
              </Tag>
            </div>
          </div>

          {/* 带图标的标签 */}
          <div>
            <div style={{ fontSize: 12, color: '#666', marginBottom: 6 }}>带图标的标签</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <Tag icon={<Check width={14} height={14} />} type="success">
                成功完成
              </Tag>
              <Tag icon={<Warning width={14} height={14} />} type="warning">
                需要注意
              </Tag>
              <Tag icon={<Trash width={14} height={14} />} type="error">
                操作失败
              </Tag>
              <Tag icon={<Info width={14} height={14} />} type="primary">
                信息提示
              </Tag>
            </div>
          </div>

          {/* 禁用状态 */}
          <div>
            <div style={{ fontSize: 12, color: '#666', marginBottom: 6 }}>禁用状态</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <Tag disabled>禁用标签</Tag>
              <Tag disabled type="primary">
                禁用主色
              </Tag>
              <Tag disabled closable>
                禁用可关闭
              </Tag>
            </div>
          </div>

          {/* 实际应用示例 - 标签云 */}
          <div>
            <div style={{ fontSize: 12, color: '#666', marginBottom: 6 }}>标签云示例</div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              <Tag size="small" type="primary">
                React
              </Tag>
              <Tag size="small" type="primary" variant="light">
                TypeScript
              </Tag>
              <Tag size="small" type="success">
                完成
              </Tag>
              <Tag size="small" type="warning">
                进行中
              </Tag>
              <Tag size="small" type="default" variant="outline">
                标签1
              </Tag>
              <Tag size="small" type="default" variant="outline">
                标签2
              </Tag>
              <Tag size="small" type="default" variant="outline">
                标签3
              </Tag>
            </div>
          </div>

          {/* 实际应用示例 - 状态指示 */}
          <div>
            <div style={{ fontSize: 12, color: '#666', marginBottom: 6 }}>状态指示示例</div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Tag icon={<Check width={14} height={14} />} type="success" variant="light">
                已发布
              </Tag>
              <Tag icon={<Info width={14} height={14} />} type="warning" variant="light">
                待审核
              </Tag>
              <Tag icon={<Trash width={14} height={14} />} type="error" variant="light">
                已拒绝
              </Tag>
              <Tag icon={<Info width={14} height={14} />} type="primary" variant="light">
                草稿
              </Tag>
            </div>
          </div>
        </div>
      </Section>

      {/* Form演示 */}
      <Section title="Form">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* 垂直布局示例 */}
          <div>
            <h4>垂直布局（Vertical）</h4>
            <Form
              initialValues={{ username: '', email: '', message: '' }}
              onSubmit={(values) => {
                console.log('表单提交数据:', values);
                Toast.info(`${JSON.stringify(values)}`, {
                  title: '表单数据',
                  duration: 0,
                });
              }}
              layout="vertical"
            >
              <FormItem
                name="username"
                label="用户名"
                required
                help="请输入 3-20 个字符"
                rules={[
                  {
                    validate: (value) => (!value ? '用户名不能为空' : undefined),
                  },
                  {
                    validate: (value) => (value?.length < 3 ? '用户名至少 3 个字符' : undefined),
                  },
                ]}
              >
                <Input placeholder="请输入用户名" />
              </FormItem>

              <FormItem
                name="email"
                label="邮箱"
                required
                rules={[
                  {
                    validate: (value) => (!value ? '邮箱不能为空' : undefined),
                  },
                  {
                    validate: (value) =>
                      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '请输入有效的邮箱地址' : undefined,
                  },
                ]}
              >
                <Input type="email" placeholder="请输入邮箱" />
              </FormItem>

              <FormItem
                name="message"
                label="留言"
                help="可选，最多 200 个字符"
                rules={[
                  {
                    validate: (value) => (value?.length > 200 ? '留言不超过 200 个字符' : undefined),
                  },
                ]}
              >
                <Input textarea rows={3} placeholder="请输入你的留言" />
              </FormItem>

              <div style={{ display: 'flex', gap: 8 }}>
                <button
                  type="submit"
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#0b66d1',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: 14,
                  }}
                >
                  提交
                </button>
                <button
                  type="reset"
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#f5f5f5',
                    color: '#333',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: 14,
                  }}
                >
                  重置
                </button>
              </div>
            </Form>
          </div>

          {/* 水平布局示例 */}
          <div>
            <h4>水平布局（Horizontal）</h4>
            <Form
              initialValues={{ name: '', age: '' }}
              onSubmit={(values) => {
                console.log('表单提交数据:', values);
                Toast.info(`${JSON.stringify(values)}`, {
                  title: '表单数据',
                  duration: 0,
                });
              }}
              layout="horizontal"
              labelWidth={80}
            >
              <FormItem
                name="name"
                label="姓名"
                required
                rules={[
                  {
                    validate: (value) => (!value ? '姓名不能为空' : undefined),
                  },
                ]}
              >
                <Input placeholder="请输入姓名" />
              </FormItem>

              <FormItem
                name="age"
                label="年龄"
                rules={[
                  {
                    validate: (value) => {
                      if (!value) return undefined;
                      const age = parseInt(value, 10);
                      return age < 0 || age > 150 ? '请输入有效的年龄' : undefined;
                    },
                  },
                ]}
              >
                <Input type="number" placeholder="请输入年龄" />
              </FormItem>

              <div style={{ marginLeft: 96 }}>
                <button
                  type="submit"
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#0b66d1',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: 14,
                  }}
                >
                  提交
                </button>
              </div>
            </Form>
          </div>

          {/* 行内布局示例 */}
          <div>
            <h4>行内布局（Inline）</h4>
            <Form
              initialValues={{ keyword: '', category: '' }}
              onSubmit={(values) => {
                console.log('表单提交数据:', values);
                Toast.success(`搜索：${JSON.stringify(values)}`);
              }}
              layout="inline"
            >
              <FormItem
                name="keyword"
                label="关键词"
                rules={[
                  {
                    validate: (value) => (!value ? '关键词不能为空' : undefined),
                  },
                ]}
              >
                <Input placeholder="输入搜索关键词" style={{ width: 180 }} />
              </FormItem>

              <FormItem name="category" label="分类">
                <select style={{ width: 120, padding: '6px', borderRadius: '4px', border: '1px solid #ddd' }}>
                  <option value="">全部</option>
                  <option value="news">新闻</option>
                  <option value="blog">博客</option>
                  <option value="docs">文档</option>
                </select>
              </FormItem>

              <button
                type="submit"
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#0b66d1',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: 14,
                }}
              >
                搜索
              </button>
            </Form>
          </div>
        </div>
      </Section>
    </div>
  );
}

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <ToastProvider>
    <App />
  </ToastProvider>
);
