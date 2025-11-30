import{j as f}from"./jsx-runtime-u17CrQMm.js";import{R as I}from"./iframe-9oBnMDtl.js";import"./preload-helper-PPVm8Dsz.js";const p=I.forwardRef(({className:u,validation:a="none",textarea:i,rows:g=3,resize:y="none",disabled:c,width:e,...d},m)=>{const r=["beaver-input"];if(a==="error"&&r.push("beaver-input--error"),a==="success"&&r.push("beaver-input--success"),i&&r.push("beaver-input--textarea"),c&&r.push("beaver-input--disabled"),u&&r.push(u),i){const{style:x,...S}=d,T={...x,resize:y,...e!==void 0?{width:typeof e=="number"?`${e}px`:e}:{}};return f.jsx("textarea",{ref:m,className:r.join(" "),"aria-invalid":a==="error",rows:g,style:T,...S})}const{style:b,...h}=d,v={...b,...e!==void 0?{width:typeof e=="number"?`${e}px`:e}:{}};return f.jsx("input",{ref:m,className:r.join(" "),"aria-invalid":a==="error",disabled:c,style:v,...h})});p.displayName="Input";p.__docgenInfo={description:"",methods:[],displayName:"Input",props:{validation:{required:!1,tsType:{name:"union",raw:"'error' | 'success' | 'none'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'none'",computed:!1}},textarea:{required:!1,tsType:{name:"boolean"},description:""},rows:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},resize:{required:!1,tsType:{name:"ReactCSSProperties['resize']",raw:"React.CSSProperties['resize']"},description:"textarea 的 CSS resize，例如 'none' | 'both' | 'horizontal' | 'vertical'",defaultValue:{value:"'none'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"直接设置宽度，支持 number(像素) 或 字符串(如 '100%','200px')"}}};const E={title:"Components/Input",component:p},s={args:{placeholder:"Type here"}},t={args:{defaultValue:"Hello"}},o={args:{placeholder:"Disabled",disabled:!0}},n={args:{placeholder:"Error",validation:"error"}},l={args:{textarea:!0,placeholder:"Type here..."}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type here'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Hello'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled',
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Error',
    validation: 'error'
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    textarea: true,
    placeholder: 'Type here...'
  }
}`,...l.parameters?.docs?.source}}};const R=["Default","WithValue","Disabled","Error","Textarea"];export{s as Default,o as Disabled,n as Error,l as Textarea,t as WithValue,R as __namedExportsOrder,E as default};
