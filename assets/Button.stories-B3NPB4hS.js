import{j as v}from"./jsx-runtime-u17CrQMm.js";import{R as h}from"./iframe-DGn70Bde.js";import"./preload-helper-PPVm8Dsz.js";const b={small:{padding:"var(--beaver-space-xs2) var(--beaver-space-md)",fontSize:"var(--beaver-font-size-sm)"},medium:{padding:"var(--beaver-space-sm) var(--beaver-space-lg)",fontSize:"var(--beaver-font-size-md)"},large:{padding:"var(--beaver-space-md) var(--beaver-space-xl)",fontSize:"var(--beaver-font-size-lg)"}},i=h.forwardRef(({children:c,className:m,variant:d="primary",size:u="medium",disabled:l,...p},g)=>{const e=["beaver-button"];return d==="ghost"&&e.push("beaver-button--ghost"),l&&e.push("beaver-button--disabled"),m&&e.push(m),v.jsx("button",{ref:g,className:e.join(" "),disabled:l,style:b[u],...p,children:c})});i.displayName="Button";i.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const S={title:"Components/Button",component:i},a={name:"主按钮",args:{children:"Primary",variant:"primary"}},r={name:"幽灵",args:{children:"Ghost",variant:"ghost"}},s={name:"禁用",args:{children:"Disabled",disabled:!0}},n={name:"大",args:{children:"Large",size:"large"}},t={name:"中",args:{children:"Medium",size:"medium"}},o={name:"小",args:{children:"Small",size:"small"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: '主按钮',
  args: {
    children: 'Primary',
    variant: 'primary'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: '幽灵',
  args: {
    children: 'Ghost',
    variant: 'ghost'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: '禁用',
  args: {
    children: 'Disabled',
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: '大',
  args: {
    children: 'Large',
    size: 'large'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: '中',
  args: {
    children: 'Medium',
    size: 'medium'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: '小',
  args: {
    children: 'Small',
    size: 'small'
  }
}`,...o.parameters?.docs?.source}}};const R=["Primary","Ghost","Disabled","Large","Medium","Small"];export{s as Disabled,r as Ghost,n as Large,t as Medium,a as Primary,o as Small,R as __namedExportsOrder,S as default};
