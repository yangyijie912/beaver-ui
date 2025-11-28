import{j as d}from"./jsx-runtime-u17CrQMm.js";import{R as f}from"./iframe-DqaRPQpw.js";import"./preload-helper-PPVm8Dsz.js";const l=f.forwardRef(({className:u,validation:r="none",textarea:c,rows:m=3,...p},i)=>{const e=["beaver-input"];return r==="error"&&e.push("beaver-input--error"),r==="success"&&e.push("beaver-input--success"),c&&e.push("beaver-input--textarea"),u&&e.push(u),c?d.jsx("textarea",{ref:i,className:e.join(" "),"aria-invalid":r==="error",rows:m,...p}):d.jsx("input",{ref:i,className:e.join(" "),"aria-invalid":r==="error",...p})});l.displayName="Input";l.__docgenInfo={description:"",methods:[],displayName:"Input",props:{validation:{required:!1,tsType:{name:"union",raw:"'error' | 'success' | 'none'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'none'",computed:!1}},textarea:{required:!1,tsType:{name:"boolean"},description:"Render a textarea instead of input"},rows:{required:!1,tsType:{name:"number"},description:"Default rows for textarea",defaultValue:{value:"3",computed:!1}}}};const b={title:"Components/Input",component:l},a={args:{placeholder:"Type here"}},s={args:{defaultValue:"Hello"}},o={args:{placeholder:"Disabled",disabled:!0}},t={args:{placeholder:"Error",validation:"error"}},n={args:{textarea:!0,placeholder:"Type here..."}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type here'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Hello'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled',
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Error',
    validation: 'error'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    textarea: true,
    placeholder: 'Type here...'
  }
}`,...n.parameters?.docs?.source}}};const v=["Default","WithValue","Disabled","Error","Textarea"];export{a as Default,o as Disabled,t as Error,n as Textarea,s as WithValue,v as __namedExportsOrder,b as default};
