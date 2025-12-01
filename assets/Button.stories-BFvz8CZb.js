import{j as v}from"./jsx-runtime-u17CrQMm.js";import{R as h}from"./iframe-DAXDzYD9.js";import"./preload-helper-PPVm8Dsz.js";const b={small:{padding:"var(--beaver-space-xs2) var(--beaver-space-md)",fontSize:"var(--beaver-font-size-sm)"},medium:{padding:"var(--beaver-space-sm) var(--beaver-space-lg)",fontSize:"var(--beaver-font-size-md)"},large:{padding:"var(--beaver-space-md) var(--beaver-space-xl)",fontSize:"var(--beaver-font-size-lg)"}},i=h.forwardRef(({children:c,className:m,variant:d="primary",size:u="medium",disabled:l,...p},g)=>{const e=["beaver-button"];return d==="ghost"&&e.push("beaver-button--ghost"),l&&e.push("beaver-button--disabled"),m&&e.push(m),v.jsx("button",{ref:g,className:e.join(" "),disabled:l,style:b[u],...p,children:c})});i.displayName="Button";i.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const S={title:"Components/Button",component:i},a={args:{children:"Primary",variant:"primary"}},r={args:{children:"Ghost",variant:"ghost"}},s={args:{children:"Disabled",disabled:!0}},t={args:{children:"Large",size:"large"}},n={args:{children:"Medium",size:"medium"}},o={args:{children:"Small",size:"small"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Primary',
    variant: 'primary'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Ghost',
    variant: 'ghost'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled',
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Large',
    size: 'large'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Medium',
    size: 'medium'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Small',
    size: 'small'
  }
}`,...o.parameters?.docs?.source}}};const R=["Primary","Ghost","Disabled","Large","Medium","Small"];export{s as Disabled,r as Ghost,t as Large,n as Medium,a as Primary,o as Small,R as __namedExportsOrder,S as default};
