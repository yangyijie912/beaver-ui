import{j as p}from"./jsx-runtime-u17CrQMm.js";import{R as j}from"./iframe-DGn70Bde.js";import"./preload-helper-PPVm8Dsz.js";const u=j.forwardRef(({className:a,validation:s="none",textarea:c,rows:y=3,resize:g="none",disabled:m,width:e,...d},f)=>{const r=["beaver-input"];if(s==="error"&&r.push("beaver-input--error"),s==="success"&&r.push("beaver-input--success"),c&&r.push("beaver-input--textarea"),m&&r.push("beaver-input--disabled"),a&&r.push(a),c){const{style:v,...S}=d,T={...v,resize:g,...e!==void 0?{width:typeof e=="number"?`${e}px`:e}:{}};return p.jsx("textarea",{ref:f,className:r.join(" "),"aria-invalid":s==="error",rows:y,style:T,...S})}const{style:h,...b}=d,x={...h,...e!==void 0?{width:typeof e=="number"?`${e}px`:e}:{}};return p.jsx("input",{ref:f,className:r.join(" "),"aria-invalid":s==="error",disabled:m,style:x,...b})});u.displayName="Input";u.__docgenInfo={description:"",methods:[],displayName:"Input",props:{validation:{required:!1,tsType:{name:"union",raw:"'error' | 'success' | 'none'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'none'",computed:!1}},textarea:{required:!1,tsType:{name:"boolean"},description:""},rows:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},resize:{required:!1,tsType:{name:"ReactCSSProperties['resize']",raw:"React.CSSProperties['resize']"},description:"textarea 的 CSS resize，例如 'none' | 'both' | 'horizontal' | 'vertical'",defaultValue:{value:"'none'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"直接设置宽度，支持 number(像素) 或 字符串(如 '100%','200px')"}}};const I={title:"Components/Input",component:u,decorators:[a=>p.jsx("div",{style:{width:300},children:p.jsx(a,{})})]},n={name:"默认",args:{placeholder:"Type here"}},t={name:"有值",args:{defaultValue:"Hello"}},o={name:"禁用",args:{placeholder:"Disabled",disabled:!0}},l={name:"错误",args:{placeholder:"Error",validation:"error"}},i={name:"多行",args:{textarea:!0,placeholder:"Type here..."}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: '默认',
  args: {
    placeholder: 'Type here'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: '有值',
  args: {
    defaultValue: 'Hello'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: '禁用',
  args: {
    placeholder: 'Disabled',
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: '错误',
  args: {
    placeholder: 'Error',
    validation: 'error'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: '多行',
  args: {
    textarea: true,
    placeholder: 'Type here...'
  }
}`,...i.parameters?.docs?.source}}};const R=["Default","WithValue","Disabled","Error","Textarea"];export{n as Default,o as Disabled,l as Error,i as Textarea,t as WithValue,R as __namedExportsOrder,I as default};
