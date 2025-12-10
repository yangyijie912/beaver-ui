import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as r}from"./iframe-DVSZfAXH.js";import"./preload-helper-PPVm8Dsz.js";const t=r.forwardRef(({checked:n,defaultChecked:k=!1,onChange:g,onChangeEvent:x,disabled:v=!1,loading:y=!1,size:l="md",checkedChildren:j,unCheckedChildren:S,className:b,...T},i)=>{const o=n!==void 0,[c,R]=r.useState(()=>o?n:!!k),L=r.useRef(null),h=r.useRef(null);r.useEffect(()=>{o&&R(n)},[n,o]),r.useEffect(()=>{if(h.current){const s=L.current?.offsetWidth||0,d=getComputedStyle(h.current),W=parseFloat(d.getPropertyValue("--beaver-switch-half-circle"))||5,I=parseFloat(d.getPropertyValue("--beaver-switch-min-content-width"))||30,q=Math.max(I,W+s+8);h.current.style.setProperty("--switch-actual-content-width",`${q}px`)}},[j,S,l]);const z=s=>{if(v||y)return;const d=!c;o||R(d),g?.(d),x?.(s)},a=["beaver-switch"];return c&&a.push("beaver-switch-checked"),v&&a.push("beaver-switch-disabled"),y&&a.push("beaver-switch-loading"),l&&l!=="md"&&a.push(`beaver-switch-${l}`),b&&a.push(b),e.jsxs("button",{ref:s=>{h.current=s,typeof i=="function"?i(s):i&&(i.current=s)},role:"switch","aria-checked":c,className:a.join(" "),onClick:z,disabled:v||y,type:"button",...T,children:[e.jsx("div",{className:"beaver-switch-track",children:(c?j:S)&&e.jsx("span",{ref:L,className:"beaver-switch-text",children:c?j:S})}),e.jsx("div",{className:"beaver-switch-thumb"})]})});t.displayName="Switch";t.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{defaultChecked:{required:!1,tsType:{name:"boolean"},description:"非受控模式下的初始值",defaultValue:{value:"false",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"受控模式时传入的布尔值，控制开关状态"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"状态切换回调，参数为切换后的布尔值"},onChangeEvent:{required:!1,tsType:{name:"ReactFormEventHandler",raw:"React.FormEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:"button的原生事件onChange"},disabled:{required:!1,tsType:{name:"boolean"},description:"禁用开关",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"加载状态",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"尺寸，影响开关轨道与拇指大小（'sm' | 'md' | 'lg'）",defaultValue:{value:"'md'",computed:!1}},checkedChildren:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"在打开时显示的标签节点"},unCheckedChildren:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"在关闭时显示的标签节点"}}};const V={title:"Components/Switch",component:t,tags:["autodocs"],parameters:{docs:{description:{component:`Switch 组件
- 使用场景：在两种状态之间切换（如开/关、启用/禁用）
- 支持自定义尺寸（小/中/大）
- 支持禁用和加载状态
- 支持受控和非受控模式
- 支持在开关上显示自定义标签`}}}},u={name:"默认",args:{}},p={name:"受控",render:n=>{const[k,g]=r.useState(!0);return e.jsx(t,{...n,checked:k,onChange:x=>g(x)})}},m={name:"禁用",args:{disabled:!0}},f={name:"加载中",args:{loading:!0}},C={name:"尺寸",render:()=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",marginBottom:16},children:[e.jsx(t,{size:"sm",defaultChecked:!0}),e.jsx(t,{size:"md",defaultChecked:!0}),e.jsx(t,{size:"lg",defaultChecked:!0})]}),e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx(t,{size:"sm",defaultChecked:!0,checkedChildren:"开启",unCheckedChildren:"关闭"}),e.jsx(t,{size:"md",defaultChecked:!0,checkedChildren:"开启",unCheckedChildren:"关闭"}),e.jsx(t,{size:"lg",defaultChecked:!0,checkedChildren:"开启",unCheckedChildren:"关闭"})]})]})},w={name:"带图标与文本",render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(t,{defaultChecked:!0,checkedChildren:e.jsx("span",{style:{color:"white"},children:"1"}),unCheckedChildren:e.jsx("span",{style:{color:"white"},children:"0"})}),e.jsx(t,{defaultChecked:!0,checkedChildren:e.jsx("span",{style:{color:"white"},children:"开启"}),unCheckedChildren:e.jsx("span",{style:{color:"white"},children:"关闭"})}),e.jsx(t,{defaultChecked:!0,checkedChildren:e.jsx("span",{style:{color:"white"},children:"true"}),unCheckedChildren:e.jsx("span",{style:{color:"white"},children:"false"})}),e.jsx(t,{defaultChecked:!1,checkedChildren:e.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.5 12.5l3.5 3.5L18.5 6.5",stroke:"currentColor",strokeWidth:2.4,strokeLinecap:"round",strokeLinejoin:"round"})}),unCheckedChildren:e.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6.5 6.5l11 11M17.5 6.5l-11 11",stroke:"currentColor",strokeWidth:2.4,strokeLinecap:"round",strokeLinejoin:"round"})})})]})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '默认',
  args: {}
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '受控',
  render: (args: React.ComponentProps<typeof Switch>) => {
    const [val, setVal] = React.useState(true);
    return <Switch {...args} checked={val} onChange={(c: boolean) => setVal(c)} />;
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '禁用',
  args: {
    disabled: true
  }
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: '加载中',
  args: {
    loading: true
  }
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '尺寸',
  render: () => <>
      <div style={{
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      marginBottom: 16
    }}>
        <Switch size="sm" defaultChecked />
        <Switch size="md" defaultChecked />
        <Switch size="lg" defaultChecked />
      </div>
      <div style={{
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }}>
        <Switch size="sm" defaultChecked checkedChildren="开启" unCheckedChildren="关闭" />
        <Switch size="md" defaultChecked checkedChildren="开启" unCheckedChildren="关闭" />
        <Switch size="lg" defaultChecked checkedChildren="开启" unCheckedChildren="关闭" />
      </div>
    </>
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};const B=["Default","Controlled","Disabled","Loading","Sizes","WithIconsAndText"];export{p as Controlled,u as Default,m as Disabled,f as Loading,C as Sizes,w as WithIconsAndText,B as __namedExportsOrder,V as default};
