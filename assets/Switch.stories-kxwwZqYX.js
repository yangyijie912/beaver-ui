import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as w,R as N}from"./iframe-DzAduImK.js";import"./preload-helper-PPVm8Dsz.js";const s=w.forwardRef((u,m)=>{const{checked:n,defaultChecked:r=!1,onChange:C,disabled:c=!1,loading:a=!1,size:y="md",checkedChildren:g,unCheckedChildren:f,className:b="",style:j}=u,k=typeof n=="boolean",[S,x]=w.useState(r),t=k?n:S;w.useEffect(()=>{k||x(r)},[r]);const _=()=>{if(c||a)return;const v=!t;k||x(v),C&&C(v)},R=["beaver-switch",`beaver-switch--${y}`,t?"beaver-switch--checked":"",c?"beaver-switch--disabled":"",a?"beaver-switch--loading":"",b].filter(Boolean).join(" ");return e.jsx("button",{type:"button",role:"switch","aria-checked":t,"aria-disabled":c||a,disabled:c||a,className:R,onClick:_,ref:m,style:j,children:e.jsxs("span",{className:"beaver-switch__track",children:[t&&g?e.jsx("span",{className:"beaver-switch__label beaver-switch__label--on",children:g}):null,e.jsx("span",{className:"beaver-switch__thumb",children:a?e.jsx("span",{className:"beaver-switch__spinner"}):null}),!t&&f?e.jsx("span",{className:"beaver-switch__label beaver-switch__label--off",children:f}):null]})})});s.__docgenInfo={description:"Switch 组件（支持受控与非受控两种用法）\n- 受控模式：传入 `checked`，组件不维护自己的状态，完全由外部控制；\n- 非受控模式：不传 `checked`，通过 `defaultChecked` 初始化内部状态并在内部维护。",methods:[],displayName:"Switch",props:{checked:{required:!1,tsType:{name:"boolean"},description:"受控模式时传入的布尔值，控制开关状态"},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"非受控模式下的初始值（只在首次渲染或当外部重置时使用）"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"状态切换回调，参数为切换后的布尔值"},disabled:{required:!1,tsType:{name:"boolean"},description:"禁用开关（不可交互且样式变灰）"},loading:{required:!1,tsType:{name:"boolean"},description:"加载状态，通常显示拇指中的 spinner 并阻止交互"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"尺寸变体，影响轨道与拇指大小（'sm' | 'md' | 'lg'）"},checkedChildren:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"分别在打开/关闭时显示的标签节点"},unCheckedChildren:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"分别在打开/关闭时显示的标签节点"},className:{required:!1,tsType:{name:"string"},description:"自定义类名，附加到最外层按钮"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"自定义行内样式，附加到最外层按钮"}}};const z={title:"Components/Switch",component:s,tags:["autodocs"]},d={name:"默认",args:{}},l={name:"受控",render:u=>{const[m,n]=N.useState(!0);return e.jsx(s,{...u,checked:m,onChange:r=>n(r)})}},o={name:"禁用",args:{disabled:!0}},i={name:"加载中",args:{loading:!0}},h={name:"尺寸",render:()=>e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx(s,{size:"sm",defaultChecked:!0}),e.jsx(s,{size:"md",defaultChecked:!0}),e.jsx(s,{size:"lg",defaultChecked:!0})]})},p={name:"带图标与文本",render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(s,{defaultChecked:!0,checkedChildren:e.jsx("span",{style:{color:"white"},children:"1"}),unCheckedChildren:e.jsx("span",{style:{color:"white"},children:"0"})}),e.jsx(s,{defaultChecked:!0,checkedChildren:e.jsx("span",{style:{color:"white"},children:"开启"}),unCheckedChildren:e.jsx("span",{style:{color:"white"},children:"关闭"})}),e.jsx(s,{defaultChecked:!0,checkedChildren:e.jsx("span",{style:{color:"white"},children:"true"}),unCheckedChildren:e.jsx("span",{style:{color:"white"},children:"false"})}),e.jsx(s,{defaultChecked:!1,checkedChildren:e.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.5 12.5l3.5 3.5L18.5 6.5",stroke:"currentColor",strokeWidth:2.4,strokeLinecap:"round",strokeLinejoin:"round"})}),unCheckedChildren:e.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6.5 6.5l11 11M17.5 6.5l-11 11",stroke:"currentColor",strokeWidth:2.4,strokeLinecap:"round",strokeLinejoin:"round"})})})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '默认',
  args: {}
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: '受控',
  render: (args: React.ComponentProps<typeof Switch>) => {
    const [val, setVal] = React.useState(true);
    return <Switch {...args} checked={val} onChange={(c: boolean) => setVal(c)} />;
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: '禁用',
  args: {
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: '加载中',
  args: {
    loading: true
  }
}`,...i.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '尺寸',
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>
      <Switch size="sm" defaultChecked />
      <Switch size="md" defaultChecked />
      <Switch size="lg" defaultChecked />
    </div>
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const I=["Default","Controlled","Disabled","Loading","Sizes","WithIconsAndText"];export{l as Controlled,d as Default,o as Disabled,i as Loading,h as Sizes,p as WithIconsAndText,I as __namedExportsOrder,z as default};
