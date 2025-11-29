import{j as m}from"./jsx-runtime-u17CrQMm.js";import{R as x}from"./iframe-6JAbTId-.js";import"./preload-helper-PPVm8Dsz.js";const l=x.forwardRef(({className:c,validation:r="none",textarea:i,rows:f=3,resize:h="none",disabled:p,...u},d)=>{const e=["beaver-input"];if(r==="error"&&e.push("beaver-input--error"),r==="success"&&e.push("beaver-input--success"),i&&e.push("beaver-input--textarea"),p&&e.push("beaver-input--disabled"),c&&e.push(c),i){const{style:g,...b}=u,v={...g,resize:h};return m.jsx("textarea",{ref:d,className:e.join(" "),"aria-invalid":r==="error",rows:f,style:v,...b})}return m.jsx("input",{ref:d,className:e.join(" "),"aria-invalid":r==="error",disabled:p,...u})});l.displayName="Input";l.__docgenInfo={description:"",methods:[],displayName:"Input",props:{validation:{required:!1,tsType:{name:"union",raw:"'error' | 'success' | 'none'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'none'",computed:!1}},textarea:{required:!1,tsType:{name:"boolean"},description:""},rows:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},resize:{required:!1,tsType:{name:"ReactCSSProperties['resize']",raw:"React.CSSProperties['resize']"},description:"textarea 的 CSS resize，例如 'none' | 'both' | 'horizontal' | 'vertical'",defaultValue:{value:"'none'",computed:!1}}}};const V={title:"Components/Input",component:l},a={args:{placeholder:"Type here"}},s={args:{defaultValue:"Hello"}},t={args:{placeholder:"Disabled",disabled:!0}},o={args:{placeholder:"Error",validation:"error"}},n={args:{textarea:!0,placeholder:"Type here..."}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type here'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Hello'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled',
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Error',
    validation: 'error'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    textarea: true,
    placeholder: 'Type here...'
  }
}`,...n.parameters?.docs?.source}}};const j=["Default","WithValue","Disabled","Error","Textarea"];export{a as Default,t as Disabled,o as Error,n as Textarea,s as WithValue,j as __namedExportsOrder,V as default};
