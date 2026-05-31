import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as g}from"./iframe-Didqz9sL.js";import{I as r}from"./Input-BE8bOm5J.js";import"./preload-helper-PPVm8Dsz.js";import"./Eye-OPWQ-oqv.js";const V={title:"表单（Form）/Input",component:r,tags:["autodocs"],decorators:[a=>e.jsx("div",{style:{width:300},children:e.jsx(a,{})})],parameters:{docs:{description:{component:`Input 组件
- 使用场景：接收用户的文本输入
- 支持多行文本输入（textarea）
- 支持输入校验状态（错误、成功）
- 支持禁用状态
- 支持自定义宽度
- 支持前置/后置内容插槽（如图标、清除按钮等）
- 支持多种尺寸（small、medium、large）`}}}},t={name:"默认",args:{placeholder:"Type here"}},d={name:"有值",args:{defaultValue:"Hello"}},c={name:"禁用",args:{placeholder:"Disabled",disabled:!0}},u={name:"校验状态（错误 / 成功 / 警告）",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#666",margin:"0 0 6px 0"},children:"错误"}),e.jsx(r,{placeholder:"Error",validation:"error"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#666",margin:"0 0 6px 0"},children:"成功"}),e.jsx(r,{placeholder:"Success",validation:"success",defaultValue:"Valid input"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#666",margin:"0 0 6px 0"},children:"警告"}),e.jsx(r,{placeholder:"Warning",validation:"warning"})]})]})},i={name:"文本域",args:{textarea:!0,rows:4,placeholder:"Type here..."}},n={name:"尺寸",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(r,{size:"small",placeholder:"Small"}),e.jsx(r,{size:"medium",placeholder:"Medium"}),e.jsx(r,{size:"large",placeholder:"Large"})]})},p={name:"带后置内容",args:{placeholder:"输入日期",suffix:"📅",defaultValue:"2024-01-15"}},m={name:"带前置内容",args:{placeholder:"输入价格",prefix:"¥"}},f={name:"前置和后置内容",args:{placeholder:"输入URL",prefix:"🔗",suffix:".com"}},x={name:"可清除输入框",args:{value:"hello",placeholder:"输入文本",allowClear:!0},render:a=>{const[o,s]=g.useState("hello");return g.useEffect(()=>{s(typeof a.value=="string"?a.value:"")},[a.value]),e.jsx(r,{value:o,onChange:l=>s(l.target.value),allowClear:a.allowClear,placeholder:a.placeholder})}},h={name:"密码框示例",args:{value:"beaver-ui",placeholder:"请输入密码",suffix:"KB"},render:a=>{const[o,s]=g.useState(typeof a.value=="string"?a.value:"");return g.useEffect(()=>{s(typeof a.value=="string"?a.value:"")},[a.value]),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#666",marginBottom:6},children:"带眼睛"}),e.jsx(r,{type:"password",value:o,onChange:l=>s(l.target.value),placeholder:a.placeholder,showPasswordToggle:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#666",marginBottom:6},children:"隐藏眼睛"}),e.jsx(r,{type:"password",value:o,onChange:l=>s(l.target.value),placeholder:a.placeholder,showPasswordToggle:!1})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#666",marginBottom:6},children:"眼睛 + 自定义后缀"}),e.jsx(r,{type:"password",value:o,onChange:l=>s(l.target.value),placeholder:a.placeholder,suffix:a.suffix,showPasswordToggle:!0})]})]})}},v={name:"后缀 + 成功状态",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"12px",color:"#666"},children:"Small"}),e.jsx(r,{size:"small",validation:"success",defaultValue:"example",placeholder:"输入用户名",suffix:"✓"})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"12px",color:"#666"},children:"Medium"}),e.jsx(r,{size:"medium",validation:"success",defaultValue:"example",placeholder:"输入用户名",suffix:"✓"})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"12px",color:"#666"},children:"Large"}),e.jsx(r,{size:"large",validation:"success",defaultValue:"example",placeholder:"输入用户名",suffix:"✓"})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: '默认',
  args: {
    placeholder: 'Type here'
  }
}`,...t.parameters?.docs?.source},description:{story:"基本使用，可以通过`width`直接控制输入框宽度",...t.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '有值',
  args: {
    defaultValue: 'Hello'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: '禁用',
  args: {
    placeholder: 'Disabled',
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '校验状态（错误 / 成功 / 警告）',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <div>
        <div style={{
        fontSize: 12,
        color: '#666',
        margin: '0 0 6px 0'
      }}>错误</div>
        <Input placeholder="Error" validation="error" />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#666',
        margin: '0 0 6px 0'
      }}>成功</div>
        <Input placeholder="Success" validation="success" defaultValue="Valid input" />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#666',
        margin: '0 0 6px 0'
      }}>警告</div>
        <Input placeholder="Warning" validation="warning" />
      </div>
    </div>
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: '文本域',
  args: {
    textarea: true,
    rows: 4,
    placeholder: 'Type here...'
  }
}`,...i.parameters?.docs?.source},description:{story:"可以通过更改rows属性来调整文本域的高度，默认是3行",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: '尺寸',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Input size="small" placeholder="Small" />
      <Input size="medium" placeholder="Medium" />
      <Input size="large" placeholder="Large" />
    </div>
}`,...n.parameters?.docs?.source},description:{story:"不同尺寸的输入框展示。\n- small、medium、large 三种尺寸\n- 如果需要设置原生 input 的 `size` 属性（可见字符数），使用 `htmlSize`。",...n.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '带后置内容',
  args: {
    placeholder: '输入日期',
    suffix: '📅',
    defaultValue: '2024-01-15'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '带前置内容',
  args: {
    placeholder: '输入价格',
    prefix: '¥'
  }
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: '前置和后置内容',
  args: {
    placeholder: '输入URL',
    prefix: '🔗',
    suffix: '.com'
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '可清除输入框',
  args: {
    value: 'hello',
    placeholder: '输入文本',
    allowClear: true
  },
  render: (args: InputStoryArgs) => {
    const [value, setValue] = React.useState('hello');
    React.useEffect(() => {
      setValue(typeof args.value === 'string' ? args.value : '');
    }, [args.value]);
    return <Input value={value} onChange={e => setValue((e as any).target.value)} allowClear={args.allowClear} placeholder={args.placeholder} />;
  }
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '密码框示例',
  args: {
    value: 'beaver-ui',
    placeholder: '请输入密码',
    suffix: 'KB'
  },
  render: (args: InputStoryArgs) => {
    const [value, setValue] = React.useState(typeof args.value === 'string' ? args.value : '');
    React.useEffect(() => {
      setValue(typeof args.value === 'string' ? args.value : '');
    }, [args.value]);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <div>
          <div style={{
          fontSize: 12,
          color: '#666',
          marginBottom: 6
        }}>带眼睛</div>
          <Input type="password" value={value} onChange={e => setValue((e as any).target.value)} placeholder={args.placeholder} showPasswordToggle />
        </div>
        <div>
          <div style={{
          fontSize: 12,
          color: '#666',
          marginBottom: 6
        }}>隐藏眼睛</div>
          <Input type="password" value={value} onChange={e => setValue((e as any).target.value)} placeholder={args.placeholder} showPasswordToggle={false} />
        </div>
        <div>
          <div style={{
          fontSize: 12,
          color: '#666',
          marginBottom: 6
        }}>眼睛 + 自定义后缀</div>
          <Input type="password" value={value} onChange={e => setValue((e as any).target.value)} placeholder={args.placeholder} suffix={args.suffix} showPasswordToggle />
        </div>
      </div>;
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '后缀 + 成功状态',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div>
        <h3 style={{
        margin: '0 0 8px 0',
        fontSize: '12px',
        color: '#666'
      }}>Small</h3>
        <Input size="small" validation="success" defaultValue="example" placeholder="输入用户名" suffix="✓" />
      </div>
      <div>
        <h3 style={{
        margin: '0 0 8px 0',
        fontSize: '12px',
        color: '#666'
      }}>Medium</h3>
        <Input size="medium" validation="success" defaultValue="example" placeholder="输入用户名" suffix="✓" />
      </div>
      <div>
        <h3 style={{
        margin: '0 0 8px 0',
        fontSize: '12px',
        color: '#666'
      }}>Large</h3>
        <Input size="large" validation="success" defaultValue="example" placeholder="输入用户名" suffix="✓" />
      </div>
    </div>
}`,...v.parameters?.docs?.source}}};const I=["Default","WithValue","Disabled","ValidationStates","Textarea","Sizes","WithSuffix","WithPrefix","WithPrefixAndSuffix","WithClearButton","PasswordVariants","SizesWithSuffixAndSuccess"];export{t as Default,c as Disabled,h as PasswordVariants,n as Sizes,v as SizesWithSuffixAndSuccess,i as Textarea,u as ValidationStates,x as WithClearButton,m as WithPrefix,f as WithPrefixAndSuffix,p as WithSuffix,d as WithValue,I as __namedExportsOrder,V as default};
