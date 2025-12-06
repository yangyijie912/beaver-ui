import{j as r}from"./jsx-runtime-u17CrQMm.js";import{B as e}from"./Button-BgQ7eR79.js";import"./iframe-DSaReAAK.js";import"./preload-helper-PPVm8Dsz.js";const u={title:"Components/Button",component:e,tags:["autodocs"]},o={name:"默认按钮",args:{children:"Default"}},n={name:"变体",render:a=>r.jsxs(r.Fragment,{children:[r.jsx("p",{children:"不同背景色下的按钮展示"}),r.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",width:400,height:100},children:[r.jsx(e,{variant:"primary",...a,children:"Primary"}),r.jsx(e,{variant:"ghost",...a,children:"Ghost"}),r.jsx(e,{variant:"link",...a,children:"Link"})]}),r.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",width:400,height:100,background:"pink"},children:[r.jsx(e,{variant:"primary",...a,children:"Primary"}),r.jsx(e,{variant:"ghost",...a,children:"Ghost"}),r.jsx(e,{variant:"link",...a,children:"Link"})]})]})},s={name:"颜色：危险色",args:{children:"Danger",variant:"primary",color:"danger"}},d={name:"自定义颜色",args:{children:"Custom Color",variant:"primary",color:"green"}},t={args:{variant:"primary"},name:"尺寸",render:a=>r.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[r.jsx(e,{size:"small",...a,children:"Small"}),r.jsx(e,{size:"medium",...a,children:"Medium"}),r.jsx(e,{size:"large",...a,children:"Large"})]})},i={name:"禁用",args:{children:"Disabled",disabled:!0}},c={name:"加载中",args:{children:"Loading",loading:!0,variant:"primary"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: '默认按钮',
  args: {
    children: 'Default'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: '变体',
  render: (args: ButtonArgs) => <>
      <p>不同背景色下的按钮展示</p>
      <div style={{
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      width: 400,
      height: 100
    }}>
        <Button variant="primary" {...args}>
          Primary
        </Button>
        <Button variant="ghost" {...args}>
          Ghost
        </Button>
        <Button variant="link" {...args}>
          Link
        </Button>
      </div>
      <div style={{
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      width: 400,
      height: 100,
      background: 'pink'
    }}>
        <Button variant="primary" {...args}>
          Primary
        </Button>
        <Button variant="ghost" {...args}>
          Ghost
        </Button>
        <Button variant="link" {...args}>
          Link
        </Button>
      </div>
    </>
}`,...n.parameters?.docs?.source},description:{story:`* 按钮的变体
- 粉色背景用于突出幽灵按钮`,...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: '颜色：危险色',
  args: {
    children: 'Danger',
    variant: 'primary',
    color: 'danger'
  }
}`,...s.parameters?.docs?.source},description:{story:"提供了默认的颜色选项：primary、danger",...s.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '自定义颜色',
  args: {
    children: 'Custom Color',
    variant: 'primary',
    color: 'green'
  }
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  },
  name: '尺寸',
  render: (args: ButtonArgs) => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>
      <Button size="small" {...args}>
        Small
      </Button>
      <Button size="medium" {...args}>
        Medium
      </Button>
      <Button size="large" {...args}>
        Large
      </Button>
    </div>
}`,...t.parameters?.docs?.source},description:{story:"按钮的不同尺寸",...t.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: '禁用',
  args: {
    children: 'Disabled',
    disabled: true
  }
}`,...i.parameters?.docs?.source},description:{story:"按钮的禁用状态",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: '加载中',
  args: {
    children: 'Loading',
    loading: true,
    variant: 'primary'
  }
}`,...c.parameters?.docs?.source}}};const h=["Default","Variants","Danger","CustomColor","SizeVariants","Disabled","Loading"];export{d as CustomColor,s as Danger,o as Default,i as Disabled,c as Loading,t as SizeVariants,n as Variants,h as __namedExportsOrder,u as default};
