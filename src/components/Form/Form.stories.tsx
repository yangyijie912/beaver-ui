import React from 'react';
import Form, { FormItem } from './index';
import { useFormContext } from './components/Form';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Select from '../Select/Select';
import Checkbox from '../Checkbox/Checkbox';
import Radio from '../Radio/Radio';
import RadioGroup from '../Radio/RadioGroup';
import Switch from '../Switch/Switch';
import DatePicker from '../DatePicker/DatePicker';
import Upload from '../Upload/Upload';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';

/**
 * Form 组件
 * - 使用场景：用于收集和验证用户输入的表单数据
 * - 支持多种布局方式（vertical、horizontal、inline）
 * - 支持灵活的字段验证规则
 * - 支持自定义标签宽度和表单尺寸
 * - 支持错误提示和辅助说明
 * - 与 Input、Select 等表单控件配合
 */
const meta: Meta<typeof Form> = {
  title: '表单（Form）/Form',
  component: Form,
  tags: ['autodocs'],
  // 装饰器：为演示增加容器宽度
  decorators: [
    (Story: StoryFn) => (
      <div style={{ width: 600, maxWidth: '100%', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Form>;

/**
 * 基本使用
 */
export const Default: Story = {
  name: '默认',
  render: () => {
    const formRef = React.useRef<any>(null);

    const handleSubmit = (values: any) => {
      console.log('提交的数据:', values);
      alert(`表单数据: ${JSON.stringify(values)}`);
    };

    return (
      <div>
        <Form
          ref={formRef}
          initialValues={{ username: '', email: '', message: '' }}
          onSubmit={handleSubmit}
          layout="vertical"
        >
          <FormItem
            name="username"
            label="用户名"
            help="请输入 3-20 个字符"
            required
            rules={[
              {
                validate: (value) => (value?.length < 3 ? '用户名至少 3 个字符' : undefined),
              },
              {
                validate: (value) => (value?.length > 20 ? '用户名不超过 20 个字符' : undefined),
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
                validate: (value) => (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '请输入有效的邮箱地址' : undefined),
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
            <Input textarea rows={4} placeholder="请输入你的留言" />
          </FormItem>

          <div style={{ display: 'flex', gap: 8 }}>
            <Button variant="primary" type="submit">
              提交
            </Button>
            <Button type="button" variant="ghost" onClick={() => formRef.current?.reset()}>
              重置
            </Button>
          </div>
        </Form>
      </div>
    );
  },
};

/**
 * 水平布局（标签在左，输入框在右）
 */
export const HorizontalLayout: Story = {
  name: '水平布局',
  render: () => {
    const handleSubmit = (values: any) => {
      console.log('提交的数据:', values);
    };

    return (
      <Form initialValues={{ name: '', age: '' }} onSubmit={handleSubmit} layout="horizontal" labelWidth={100}>
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

        <div style={{ marginLeft: 116 }}>
          <Button variant="primary" type="submit">
            提交
          </Button>
        </div>
      </Form>
    );
  },
};

/**
 * 行内布局（所有字段在一行）
 */
export const InlineLayout: Story = {
  name: '行内布局',
  render: () => {
    const handleSubmit = (values: any) => {
      console.log('提交的数据:', values);
    };

    return (
      <Form initialValues={{ keyword: '', category: '' }} onSubmit={handleSubmit} layout="inline">
        <FormItem
          name="keyword"
          label="关键词"
          rules={[
            {
              validate: (value) => (!value ? '关键词不能为空' : undefined),
            },
          ]}
        >
          <Input placeholder="输入搜索关键词" width={150} />
        </FormItem>

        <FormItem name="category" label="分类">
          <Select
            options={[
              { label: '全部', value: '' },
              { label: '新闻', value: 'news' },
              { label: '博客', value: 'blog' },
              { label: '文档', value: 'docs' },
            ]}
            placeholder="请选择"
            style={{ width: 150 }}
          />
        </FormItem>

        <Button variant="primary" type="submit">
          搜索
        </Button>
      </Form>
    );
  },
};

/**
 * 不同尺寸
 */
export const Sizes: Story = {
  name: '不同尺寸',
  render: () => {
    const sizes: Array<'small' | 'medium' | 'large'> = ['small', 'medium', 'large'];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        {sizes.map((size) => (
          <div key={size}>
            <h4 style={{ marginTop: 0, marginBottom: 16 }}>
              {size === 'small' ? '小 (Small)' : size === 'medium' ? '中 (Medium)' : '大 (Large)'}
            </h4>
            <Form
              initialValues={{ username: '', email: '', userType: 'individual', newsletter: false }}
              layout="horizontal"
              size={size}
              style={{ maxWidth: 720 }}
            >
              <FormItem
                name={`username-${size}`}
                label="用户名"
                rules={[{ validate: (value) => (!value ? '用户名不能为空' : undefined) }]}
              >
                <Input placeholder="请输入用户名" width={200} />
              </FormItem>

              <FormItem name={`email-${size}`} label="邮箱">
                <Input type="email" placeholder="请输入邮箱" width={200} />
              </FormItem>

              <FormItem name={`category-${size}`} label="分类">
                <Select
                  options={[
                    { label: '全部', value: '' },
                    { label: '新闻', value: 'news' },
                    { label: '博客', value: 'blog' },
                    { label: '文档', value: 'docs' },
                  ]}
                  placeholder="请选择"
                  width={200}
                />
              </FormItem>

              <FormItem name={`newsletter-${size}`} label="订阅">
                <Checkbox label="订阅每周新闻" />
              </FormItem>

              <FormItem name={`userType-${size}`} label="用户类型">
                <RadioGroup name={`userType-${size}`}>
                  <Radio value="individual" label="个人" />
                  <Radio value="enterprise" label="企业" />
                </RadioGroup>
              </FormItem>

              <FormItem name={`notifications-${size}`} label="通知">
                <Switch checkedChildren="开" unCheckedChildren="关" />
              </FormItem>

              <FormItem name={`birthday-${size}`} label="出生日期">
                <DatePicker placeholder="选择日期" width={200} />
              </FormItem>

              <FormItem name={`attachments-${size}`} label="上传">
                <Upload />
              </FormItem>

              <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 8 }}>
                <Button variant="primary" type="submit" size={size}>
                  提交
                </Button>
                <Button type="button" variant="ghost" size={size}>
                  重置
                </Button>
              </div>
            </Form>
          </div>
        ))}
      </div>
    );
  },
};

/**
 * 禁用状态
 */
export const Disabled: Story = {
  name: '禁用状态',
  render: () => {
    return (
      <div>
        <div style={{ margin: '20px 0' }}>整个表单禁用</div>
        <Form initialValues={{ username: 'John Doe', email: 'john@example.com' }} layout="vertical" disabled>
          <FormItem name="username" label="用户名">
            <Input />
          </FormItem>

          <FormItem name="email" label="邮箱">
            <Input />
          </FormItem>

          <Button variant="primary" type="submit">
            提交
          </Button>
        </Form>
        <hr style={{ margin: '32px 0' }} />
        <div style={{ margin: '20px 0' }}>单个字段禁用</div>
        <Form initialValues={{ username: '', category: '' }} layout="horizontal" style={{ maxWidth: 720 }}>
          <FormItem
            name={`username`}
            label="用户名"
            rules={[{ validate: (value) => (!value ? '用户名不能为空' : undefined) }]}
          >
            <Input placeholder="请输入用户名" width={200} disabled />
          </FormItem>

          <FormItem name={`category`} label="分类" disabled>
            <Select
              options={[
                { label: '全部', value: '' },
                { label: '新闻', value: 'news' },
                { label: '博客', value: 'blog' },
                { label: '文档', value: 'docs' },
              ]}
              placeholder="请选择"
              width={200}
            />
          </FormItem>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 8 }}>
            <Button variant="primary" type="submit">
              提交
            </Button>
            <Button type="button" variant="ghost">
              重置
            </Button>
          </div>
        </Form>
      </div>
    );
  },
};

/**
 * 自定义验证规则示例
 * - validateWhenDisabled: true 表示即使字段被禁用也执行该验证规则
 * - trigger: 'onChange' | 'onBlur' 指定验证触发时机
 */
export const ValidateWhenDisabled: Story = {
  name: '自定义验证',
  render: () => {
    const handleSubmit = (values: any) => {
      console.log('validateWhenDisabled 提交的数据:', values);
      alert(`提交的数据: ${JSON.stringify(values)}`);
    };

    return (
      <Form initialValues={{ username: 'bc', description: '' }} onSubmit={handleSubmit} layout="vertical">
        <FormItem
          name="username"
          label="用户名"
          required
          rules={[{ validate: (val) => (val !== 'abc' ? '必须为 abc' : undefined), validateWhenDisabled: true }]}
        >
          <Input disabled />
        </FormItem>

        <FormItem
          name="description"
          label="简介"
          required
          rules={[
            { validate: (v) => (!v ? 'onChange 必填' : undefined), trigger: 'onChange' },
            { validate: (v) => (v && v.length < 3 ? 'onBlur: 至少 3 个字符' : undefined), trigger: 'onBlur' },
          ]}
        >
          <Input placeholder="输入时触发 onChange 规则，失焦时触发 onBlur 规则" />
        </FormItem>

        <div style={{ display: 'flex', gap: 8 }}>
          <Button variant="primary" type="submit">
            提交
          </Button>
        </div>
      </Form>
    );
  },
};

/**
 * 异步校验示例
 */
export const AsyncValidation: Story = {
  name: '异步校验',
  render: () => {
    const handleSubmit = (values: any) => {
      alert('提交数据：' + JSON.stringify(values, null, 2));
    };

    return (
      <Form initialValues={{ username: '' }} onSubmit={handleSubmit} layout="vertical">
        <FormItem
          name="username"
          label="用户名"
          required
          help="输入 taken 会触发占用提示（模拟异步校验）"
          rules={[
            {
              validate: async (value) => {
                if (!value) return '用户名不能为空';
                await new Promise((r) => setTimeout(r, 600));
                if (value === 'taken') return '用户名已被占用';
                return undefined;
              },
            },
          ]}
        >
          <Input placeholder="请输入用户名（试试输入 taken）" />
        </FormItem>

        <div style={{ display: 'flex', gap: 8 }}>
          <Button variant="primary" type="submit">
            提交
          </Button>
          <Button type="button" variant="ghost" onClick={() => window.alert('取消')}>
            取消
          </Button>
        </div>
      </Form>
    );
  },
};

/**
 * 动态字段示例：演示增删字段并校验
 */
export const DynamicFields: Story = {
  name: '动态字段（增/删）',
  render: () => {
    const formRef = React.useRef<any>(null);
    const [keys, setKeys] = React.useState<number[]>([0]);
    const idRef = React.useRef(1);

    const add = () => setKeys((k) => [...k, idRef.current++]);
    const remove = (key: number) => setKeys((k) => k.filter((x) => x !== key));

    const handleSubmit = (values: any) => {
      const activeNames = new Set(keys.map((k) => `item-${k + 1}`));
      const filtered = Object.fromEntries(Object.entries(values).filter(([name]) => activeNames.has(name)));
      alert('提交数据：' + JSON.stringify(filtered, null, 2));
    };

    return (
      <Form ref={formRef} onSubmit={handleSubmit} layout="horizontal">
        <div style={{ display: 'flex', flexDirection: 'row-reverse', marginBottom: 8 }}>
          <Button type="button" onClick={add}>
            添加字段
          </Button>
        </div>
        {keys.map((k) => (
          <div key={k}>
            <FormItem
              name={`item-${k + 1}`}
              label={`项 ${k + 1}`}
              rules={[{ validate: (v) => (!v ? '不能为空' : undefined) }]}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Input placeholder="输入值" style={{ width: '100%' }} />
                <Button type="button" style={{ width: 80 }} color="danger" onClick={() => remove(k)}>
                  删除
                </Button>
              </div>
            </FormItem>
          </div>
        ))}

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
          <Button variant="primary" type="submit">
            提交
          </Button>
        </div>
      </Form>
    );
  },
};

/**
 * 字段依赖示例：根据一个字段值调整另一个字段的校验规则
 */
export const DependentFields: Story = {
  name: '字段依赖',
  render: () => {
    const handleSubmit = (values: any) => {
      alert('提交数据：' + JSON.stringify(values, null, 2));
    };

    const PhoneField = () => {
      const form = useFormContext();
      return (
        <FormItem
          name="phone"
          label="联系电话"
          required
          help={(form.values.country ?? 'cn') === 'cn' ? '中国手机号建议以 +86 或区号开头' : '请输入国际/本地号码'}
          rules={[
            {
              validate: (v, allValues) =>
                (allValues?.country ?? 'cn') === 'cn' && v && !/^\+?86/.test(v)
                  ? '中国手机号请以 +86 或区号开头'
                  : undefined,
            },
            {
              validate: (v, allValues) =>
                (allValues?.country ?? 'cn') === 'us' && v && !/^\+?1/.test(v) ? '美国手机号请以 +1 开头' : undefined,
            },
          ]}
        >
          <Input placeholder="根据国家不同校验规则不同" />
        </FormItem>
      );
    };

    return (
      <Form onSubmit={handleSubmit} initialValues={{ country: 'cn', phone: '' }} layout="vertical">
        <FormItem name="country" label="国家">
          <Select
            options={[
              { label: '中国', value: 'cn' },
              { label: '美国', value: 'us' },
            ]}
          />
        </FormItem>

        <PhoneField />

        <Button variant="primary" type="submit">
          提交
        </Button>
      </Form>
    );
  },
};

/**
 * 使用 ref 进行程序化控制（reset / setFieldsValue）
 */
export const ProgrammaticControls: Story = {
  name: '使用ref控制',
  render: () => {
    const formRef = React.useRef<any>(null);

    const handleSubmit = (values: any) => {
      alert('提交数据：' + JSON.stringify(values, null, 2));
    };

    return (
      <Form ref={formRef} onSubmit={handleSubmit} initialValues={{ name: '', email: '' }} layout="vertical">
        <FormItem name="name" label="姓名">
          <Input placeholder="请输入姓名" />
        </FormItem>

        <FormItem name="email" label="邮箱">
          <Input type="email" placeholder="请输入邮箱" />
        </FormItem>

        <div style={{ display: 'flex', gap: 8 }}>
          <Button type="button" onClick={() => formRef.current?.reset()}>
            重置（ref.reset）
          </Button>

          <Button
            type="button"
            onClick={() => formRef.current?.setFieldsValue?.({ name: '示例用户', email: 'demo@example.com' })}
          >
            填充示例数据（ref.setFieldsValue）
          </Button>

          <Button variant="primary" type="submit">
            提交
          </Button>
        </div>
      </Form>
    );
  },
};

/**
 * 复杂表单示例（包含多种验证规则和组件）
 */
export const ComplexForm: Story = {
  name: '复杂表单示例',
  render: () => {
    const formRef = React.useRef<any>(null);

    const handleSubmit = (values: any) => {
      console.log('提交成功:', values);
      alert('表单提交成功！');
    };

    return (
      <Form
        ref={formRef}
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          category: '',
          phone: '',
          address: '',
          agreed: false,
        }}
        onSubmit={handleSubmit}
        layout="vertical"
      >
        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ flex: 1 }}>
            <FormItem
              name="firstName"
              label="名字"
              required
              rules={[
                {
                  validate: (value) => (!value ? '名字不能为空' : undefined),
                },
              ]}
            >
              <Input placeholder="请输入名字" />
            </FormItem>
          </div>
          <div style={{ flex: 1 }}>
            <FormItem
              name="lastName"
              label="姓氏"
              required
              rules={[
                {
                  validate: (value) => (!value ? '姓氏不能为空' : undefined),
                },
              ]}
            >
              <Input placeholder="请输入姓氏" />
            </FormItem>
          </div>
        </div>

        <FormItem
          name="email"
          label="邮箱"
          required
          help="我们不会将您的邮箱分享给第三方"
          rules={[
            {
              validate: (value) => (!value ? '邮箱不能为空' : undefined),
            },
            {
              validate: (value) => (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '请输入有效的邮箱地址' : undefined),
            },
          ]}
        >
          <Input type="email" placeholder="example@domain.com" />
        </FormItem>

        <FormItem name="category" label="分类" required rules={[{ validate: (v) => (!v ? '请选择分类' : undefined) }]}>
          <Select
            options={[
              { label: '个人', value: 'personal' },
              { label: '企业', value: 'enterprise' },
              { label: '其他', value: 'other' },
            ]}
            placeholder="请选择分类"
          />
        </FormItem>

        <FormItem name="phone" label="电话" help="可选，格式如：+86 10 12345678">
          <Input placeholder="请输入电话号码" />
        </FormItem>

        <FormItem name="address" label="地址">
          <Input textarea rows={3} placeholder="请输入完整地址" />
        </FormItem>

        <FormItem name="agreed" label="协议">
          <Checkbox label="我已阅读并同意服务条款和隐私政策" />
        </FormItem>

        <div style={{ display: 'flex', gap: 8 }}>
          <Button variant="primary" type="submit">
            提交
          </Button>
          <Button type="button" variant="ghost" onClick={() => formRef.current?.reset()}>
            重置
          </Button>
        </div>
      </Form>
    );
  },
};

/**
 * 完整的综合表单 - 包含库里所有主要表单组件
 */
export const ComprehensiveForm: Story = {
  name: '完整综合表单',
  render: () => {
    const formRef = React.useRef<any>(null);

    const handleSubmit = (values: any) => {
      console.log('完整表单提交数据:', values);
      alert('表单提交成功！\n\n' + JSON.stringify(values, null, 2));
    };

    return (
      <Form
        ref={formRef}
        initialValues={{
          // 基础信息
          fullName: '',
          email: '',
          phone: '',
          birthday: '',

          // 用户选择
          userType: 'individual',
          industryCategory: '',

          // 偏好设置
          newsletter: false,
          notifications: true,

          // 其他
          department: '',
          jobTitle: '',
          description: '',
          agreement: false,
        }}
        onSubmit={handleSubmit}
        layout="vertical"
      >
        <h3 style={{ marginTop: 0, marginBottom: 16 }}>📋 基础信息</h3>

        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ flex: 1 }}>
            <FormItem
              name="fullName"
              label="全名"
              required
              rules={[
                { validate: (v) => (!v ? '全名不能为空' : undefined) },
                { validate: (v) => (v?.length < 2 ? '至少 2 个字符' : undefined) },
              ]}
            >
              <Input placeholder="请输入您的全名" />
            </FormItem>
          </div>
          <div style={{ flex: 1 }}>
            <FormItem name="birthday" label="出生年月">
              <DatePicker picker="month" placeholder="选择出生年月" format="YYYY-MM" />
            </FormItem>
          </div>
        </div>

        <FormItem
          name="email"
          label="电子邮箱"
          required
          rules={[
            { validate: (v) => (!v ? '邮箱不能为空' : undefined) },
            { validate: (v) => (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '请输入有效的邮箱' : undefined) },
          ]}
        >
          <Input type="email" placeholder="example@domain.com" />
        </FormItem>

        <FormItem name="phone" label="电话号码" help="格式：+86 10 12345678 或 010-12345678">
          <Input placeholder="请输入电话号码" />
        </FormItem>

        <h3 style={{ marginTop: 24, marginBottom: 16 }}>👤 用户类型与分类</h3>

        <FormItem name="userType" label="用户类型" required>
          <RadioGroup name="userType">
            <Radio value="individual" label="个人用户" />
            <Radio value="enterprise" label="企业用户" />
            <Radio value="developer" label="开发者" />
          </RadioGroup>
        </FormItem>

        <FormItem
          name="industryCategory"
          label="行业分类"
          required
          rules={[{ validate: (v) => (!v ? '请选择行业分类' : undefined) }]}
        >
          <Select
            options={[
              { label: '信息技术', value: 'it' },
              { label: '金融服务', value: 'finance' },
              { label: '教育培训', value: 'education' },
              { label: '医疗健康', value: 'healthcare' },
              { label: '零售电商', value: 'retail' },
              { label: '其他', value: 'other' },
            ]}
            placeholder="请选择所属行业"
          />
        </FormItem>

        <h3 style={{ marginTop: 24, marginBottom: 16 }}>⚙️ 偏好设置</h3>

        <FormItem name="notifications" label="通知偏好">
          <Switch checkedChildren="启用推送" unCheckedChildren="关闭推送" />
        </FormItem>

        <FormItem name="newsletter" label="订阅">
          <Checkbox label="订阅每周新闻通讯" />
        </FormItem>

        <h3 style={{ marginTop: 24, marginBottom: 16 }}>🏢 工作信息</h3>

        <FormItem name="department" label="部门">
          <Select
            options={[
              { label: '产品部', value: 'product' },
              { label: '技术部', value: 'tech' },
              { label: '设计部', value: 'design' },
              { label: '市场部', value: 'marketing' },
              { label: '运营部', value: 'ops' },
              { label: '人力资源', value: 'hr' },
            ]}
            placeholder="选择部门"
          />
        </FormItem>

        <FormItem name="jobTitle" label="职位">
          <Input placeholder="请输入职位名称" />
        </FormItem>

        <FormItem name="description" label="个人描述" help="简要介绍您自己和您的专业背景">
          <Input textarea rows={4} placeholder="请输入您的个人描述或专业背景" />
        </FormItem>

        <h3 style={{ marginTop: 24, marginBottom: 16 }}>📎 附件上传</h3>

        <FormItem name="attachments" label="上传文件" help="支持 PDF、Word、Excel 等常见文件格式，单个文件不超过 10MB">
          <Upload multiple accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx" />
        </FormItem>

        <h3 style={{ marginTop: 24, marginBottom: 16 }}>✅ 协议与确认</h3>

        <FormItem
          name="agreement"
          label="协议"
          required
          rules={[{ validate: (v) => (!v ? '必须同意协议才能提交' : undefined) }]}
        >
          <Checkbox label="我已阅读并同意服务条款、隐私政策和数据处理协议" />
        </FormItem>

        <div style={{ display: 'flex', gap: 8, marginTop: 32 }}>
          <Button variant="primary" type="submit" size="medium">
            提交申请
          </Button>
          <Button type="button" variant="ghost" onClick={() => formRef.current?.reset()}>
            重置表单
          </Button>
        </div>
      </Form>
    );
  },
};
