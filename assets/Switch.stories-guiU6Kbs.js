import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as u}from"./iframe-CUpoYAUB.js";import{S as r}from"./Switch-3-w0R4ai.js";import"./preload-helper-PPVm8Dsz.js";import"./Form-CaT9bRia.js";const w={title:"表单（Form）/Switch",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`Switch 组件
- 使用场景：在两种状态之间切换（如开/关、启用/禁用）
- 支持自定义尺寸（小/中/大）
- 支持禁用和加载状态
- 支持受控和非受控模式
- 支持在开关上显示自定义标签`}}}},s={name:"默认",args:{}},t={name:"受控",render:l=>{const[i,o]=u.useState(!0);return e.jsx(r,{...l,checked:i,onChange:h=>o(h)})}},n={name:"禁用",args:{disabled:!0}},d={name:"加载中",args:{loading:!0}},a={name:"尺寸",render:()=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",marginBottom:16},children:[e.jsx(r,{size:"small",defaultChecked:!0}),e.jsx(r,{size:"medium",defaultChecked:!0}),e.jsx(r,{size:"large",defaultChecked:!0})]}),e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx(r,{size:"small",defaultChecked:!0,checkedChildren:"开启",unCheckedChildren:"关闭"}),e.jsx(r,{size:"medium",defaultChecked:!0,checkedChildren:"开启",unCheckedChildren:"关闭"}),e.jsx(r,{size:"large",defaultChecked:!0,checkedChildren:"开启",unCheckedChildren:"关闭"})]})]})},c={name:"带图标与文本",render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(r,{defaultChecked:!0,checkedChildren:e.jsx("span",{style:{color:"white"},children:"1"}),unCheckedChildren:e.jsx("span",{style:{color:"white"},children:"0"})}),e.jsx(r,{defaultChecked:!0,checkedChildren:e.jsx("span",{style:{color:"white"},children:"开启"}),unCheckedChildren:e.jsx("span",{style:{color:"white"},children:"关闭"})}),e.jsx(r,{defaultChecked:!0,checkedChildren:e.jsx("span",{style:{color:"white"},children:"true"}),unCheckedChildren:e.jsx("span",{style:{color:"white"},children:"false"})}),e.jsx(r,{defaultChecked:!1,checkedChildren:e.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.5 12.5l3.5 3.5L18.5 6.5",stroke:"currentColor",strokeWidth:2.4,strokeLinecap:"round",strokeLinejoin:"round"})}),unCheckedChildren:e.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6.5 6.5l11 11M17.5 6.5l-11 11",stroke:"currentColor",strokeWidth:2.4,strokeLinecap:"round",strokeLinejoin:"round"})})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: '默认',
  args: {}
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: '受控',
  render: (args: React.ComponentProps<typeof Switch>) => {
    const [val, setVal] = React.useState(true);
    return <Switch {...args} checked={val} onChange={(c: boolean) => setVal(c)} />;
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: '禁用',
  args: {
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '加载中',
  args: {
    loading: true
  }
}`,...d.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: '尺寸',
  render: () => <>
      <div style={{
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      marginBottom: 16
    }}>
        <Switch size="small" defaultChecked />
        <Switch size="medium" defaultChecked />
        <Switch size="large" defaultChecked />
      </div>
      <div style={{
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }}>
        <Switch size="small" defaultChecked checkedChildren="开启" unCheckedChildren="关闭" />
        <Switch size="medium" defaultChecked checkedChildren="开启" unCheckedChildren="关闭" />
        <Switch size="large" defaultChecked checkedChildren="开启" unCheckedChildren="关闭" />
      </div>
    </>
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: '带图标与文本',
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      <Switch defaultChecked checkedChildren={<span style={{
      color: 'white'
    }}>1</span>} unCheckedChildren={<span style={{
      color: 'white'
    }}>0</span>} />

      <Switch defaultChecked checkedChildren={<span style={{
      color: 'white'
    }}>开启</span>} unCheckedChildren={<span style={{
      color: 'white'
    }}>关闭</span>} />

      <Switch defaultChecked checkedChildren={<span style={{
      color: 'white'
    }}>true</span>} unCheckedChildren={<span style={{
      color: 'white'
    }}>false</span>} />

      <Switch defaultChecked={false} checkedChildren={<svg viewBox="0 0 24 24" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 12.5l3.5 3.5L18.5 6.5" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />
          </svg>} unCheckedChildren={<svg viewBox="0 0 24 24" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />
          </svg>} />
    </div>
}`,...c.parameters?.docs?.source}}};const x=["Default","Controlled","Disabled","Loading","Sizes","WithIconsAndText"];export{t as Controlled,s as Default,n as Disabled,d as Loading,a as Sizes,c as WithIconsAndText,x as __namedExportsOrder,w as default};
