import{j as h}from"./jsx-runtime-u17CrQMm.js";import{R as f}from"./iframe-6JAbTId-.js";import"./preload-helper-PPVm8Dsz.js";const y={small:{padding:"6px 12px",fontSize:12},medium:{padding:"8px 16px",fontSize:14},large:{padding:"12px 20px",fontSize:16}},i=f.forwardRef(({children:d,className:m,variant:c="primary",size:u="medium",disabled:l,...p},g)=>{const e=["beaver-button"];return c==="ghost"&&e.push("beaver-button--ghost"),l&&e.push("beaver-button--disabled"),m&&e.push(m),h.jsx("button",{ref:g,className:e.join(" "),disabled:l,style:y[u],...p,children:d})});i.displayName="Button";i.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const x={title:"Components/Button",component:i},r={args:{children:"Primary",variant:"primary"}},a={args:{children:"Ghost",variant:"ghost"}},s={args:{children:"Disabled",disabled:!0}},t={args:{children:"Large",size:"large"}},n={args:{children:"Medium",size:"medium"}},o={args:{children:"Small",size:"small"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Primary',
    variant: 'primary'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Ghost',
    variant: 'ghost'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const z=["Primary","Ghost","Disabled","Large","Medium","Small"];export{s as Disabled,a as Ghost,t as Large,n as Medium,r as Primary,o as Small,z as __namedExportsOrder,x as default};
