import{j as d}from"./jsx-runtime-u17CrQMm.js";import{R as v}from"./iframe-B0Kcly6u.js";import"./preload-helper-PPVm8Dsz.js";const l=v.forwardRef(({className:c,validation:r="none",textarea:i,rows:m=3,resize:f="none",...p},u)=>{const e=["beaver-input"];if(r==="error"&&e.push("beaver-input--error"),r==="success"&&e.push("beaver-input--success"),i&&e.push("beaver-input--textarea"),c&&e.push(c),i){const{style:h,...g}=p,b={...h,resize:f};return d.jsx("textarea",{ref:u,className:e.join(" "),"aria-invalid":r==="error",rows:m,style:b,...g})}return d.jsx("input",{ref:u,className:e.join(" "),"aria-invalid":r==="error",...p})});l.displayName="Input";l.__docgenInfo={description:"",methods:[],displayName:"Input",props:{validation:{required:!1,tsType:{name:"union",raw:"'error' | 'success' | 'none'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'none'",computed:!1}},textarea:{required:!1,tsType:{name:"boolean"},description:""},rows:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},resize:{required:!1,tsType:{name:"ReactCSSProperties['resize']",raw:"React.CSSProperties['resize']"},description:"textarea 的 CSS resize，例如 'none' | 'both' | 'horizontal' | 'vertical'",defaultValue:{value:"'none'",computed:!1}}}};const T={title:"Components/Input",component:l},a={args:{placeholder:"Type here"}},s={args:{defaultValue:"Hello"}},o={args:{placeholder:"Disabled",disabled:!0}},t={args:{placeholder:"Error",validation:"error"}},n={args:{textarea:!0,placeholder:"Type here..."}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const V=["Default","WithValue","Disabled","Error","Textarea"];export{a as Default,o as Disabled,t as Error,n as Textarea,s as WithValue,V as __namedExportsOrder,T as default};
