import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as h}from"./iframe-DVSZfAXH.js";import{I as a}from"./Input-H529l0c_.js";import"./preload-helper-PPVm8Dsz.js";const z={title:"Components/Input",component:a,tags:["autodocs"],decorators:[m=>e.jsx("div",{style:{width:300},children:e.jsx(m,{})})],parameters:{docs:{description:{component:`Input 组件
- 使用场景：接收用户的文本输入
- 支持多行文本输入（textarea）
- 支持输入校验状态（错误、成功）
- 支持禁用状态
- 支持自定义宽度
- 支持前置/后置内容插槽（如图标、清除按钮等）
- 支持多种尺寸（small、medium、large）`}}}},r={name:"默认",args:{placeholder:"Type here"}},i={name:"有值",args:{defaultValue:"Hello"}},o={name:"禁用",args:{placeholder:"Disabled",disabled:!0}},n={name:"校验状态（错误 / 成功 / 警告）",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#666",margin:"0 0 6px 0"},children:"错误"}),e.jsx(a,{placeholder:"Error",validation:"error"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#666",margin:"0 0 6px 0"},children:"成功"}),e.jsx(a,{placeholder:"Success",validation:"success",defaultValue:"Valid input"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#666",margin:"0 0 6px 0"},children:"警告"}),e.jsx(a,{placeholder:"Warning",validation:"warning"})]})]})},s={name:"文本域",args:{textarea:!0,rows:4,placeholder:"Type here..."}},l={name:"尺寸",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(a,{size:"small",placeholder:"Small"}),e.jsx(a,{size:"medium",placeholder:"Medium"}),e.jsx(a,{size:"large",placeholder:"Large"})]})},t={name:"带后置内容",args:{placeholder:"输入日期",suffix:"📅",defaultValue:"2024-01-15"}},d={name:"带前置内容",args:{placeholder:"输入价格",prefix:"¥"}},c={name:"前置和后置内容",args:{placeholder:"输入URL",prefix:"🔗",suffix:".com"}},p={name:"可清除输入框",render:()=>{const[m,x]=h.useState("hello");return e.jsx(a,{value:m,onChange:f=>x(f.target.value),allowClear:!0,placeholder:"输入文本"})}},u={name:"后缀 + 成功状态",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"12px",color:"#666"},children:"Small"}),e.jsx(a,{size:"small",validation:"success",defaultValue:"example",placeholder:"输入用户名",suffix:"✓"})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"12px",color:"#666"},children:"Medium"}),e.jsx(a,{size:"medium",validation:"success",defaultValue:"example",placeholder:"输入用户名",suffix:"✓"})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"12px",color:"#666"},children:"Large"}),e.jsx(a,{size:"large",validation:"success",defaultValue:"example",placeholder:"输入用户名",suffix:"✓"})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: '默认',
  args: {
    placeholder: 'Type here'
  }
}`,...r.parameters?.docs?.source},description:{story:"基本使用，可以通过`width`直接控制输入框宽度",...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: '有值',
  args: {
    defaultValue: 'Hello'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: '禁用',
  args: {
    placeholder: 'Disabled',
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: '文本域',
  args: {
    textarea: true,
    rows: 4,
    placeholder: 'Type here...'
  }
}`,...s.parameters?.docs?.source},description:{story:"可以通过更改rows属性来调整文本域的高度，默认是3行",...s.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source},description:{story:"不同尺寸的输入框展示。\n- small、medium、large 三种尺寸\n- 如果需要设置原生 input 的 `size` 属性（可见字符数），使用 `htmlSize`。",...l.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: '带后置内容',
  args: {
    placeholder: '输入日期',
    suffix: '📅',
    defaultValue: '2024-01-15'
  }
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '带前置内容',
  args: {
    placeholder: '输入价格',
    prefix: '¥'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: '前置和后置内容',
  args: {
    placeholder: '输入URL',
    prefix: '🔗',
    suffix: '.com'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '可清除输入框',
  render: () => {
    const [value, setValue] = React.useState('hello');
    return <Input value={value} onChange={e => setValue((e as any).target.value)} allowClear placeholder="输入文本" />;
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const j=["Default","WithValue","Disabled","ValidationStates","Textarea","Sizes","WithSuffix","WithPrefix","WithPrefixAndSuffix","WithClearButton","SizesWithSuffixAndSuccess"];export{r as Default,o as Disabled,l as Sizes,u as SizesWithSuffixAndSuccess,s as Textarea,n as ValidationStates,p as WithClearButton,d as WithPrefix,c as WithPrefixAndSuffix,t as WithSuffix,i as WithValue,j as __namedExportsOrder,z as default};
