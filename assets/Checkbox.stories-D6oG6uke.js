import{j as t}from"./jsx-runtime-u17CrQMm.js";import{R as y,r as d}from"./iframe-B0Kcly6u.js";import"./preload-helper-PPVm8Dsz.js";const p=y.forwardRef(({label:m,className:b,inputClassName:f,disabled:h,indeterminate:r=!1,...x},a)=>{const e=d.useRef(null),g=s=>{if(e.current=s,!!a)if(typeof a=="function")try{a(s)}catch{}else try{a.current=s}catch{}};d.useEffect(()=>{if(e.current&&"indeterminate"in e.current){e.current.indeterminate=!!r;try{r?e.current.setAttribute("data-indeterminate","true"):e.current.removeAttribute("data-indeterminate")}catch{}}},[r]);const C=f||"",k=["beaver-checkbox-wrapper",b].filter(Boolean).join(" "),N=["beaver-checkbox",C,r?"beaver-checkbox--indeterminate":""].filter(Boolean).join(" ").trim();return t.jsxs("label",{className:k,children:[t.jsx("input",{ref:g,type:"checkbox",className:"beaver-checkbox-input",disabled:h,"data-indeterminate":r?"true":void 0,...x}),t.jsx("span",{className:N,"aria-hidden":"true"}),m?t.jsx("span",{children:m}):null]})});p.displayName="Checkbox";p.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},indeterminate:{required:!1,tsType:{name:"boolean"},description:"控制三态（中间态）显示，不会被透传到 DOM 属性",defaultValue:{value:"false",computed:!1}},inputClassName:{required:!1,tsType:{name:"string"},description:"如果需要给 input 本身加额外 class，请使用该属性"}}};const S={title:"Components/Checkbox",component:p},c={args:{}},o={args:{defaultChecked:!0}},n={args:{label:"Accept terms"}},i={args:{indeterminate:!0}},u={args:{inputClassName:"custom-checkbox",label:"Custom input class"}},l={args:{disabled:!0,label:"Accept terms"}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    inputClassName: 'custom-checkbox',
    label: 'Custom input class'
  }
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Accept terms'
  }
}`,...l.parameters?.docs?.source}}};const D=["Default","Checked","WithLabel","Indeterminate","InputClassName","Disabled"];export{o as Checked,c as Default,l as Disabled,i as Indeterminate,u as InputClassName,n as WithLabel,D as __namedExportsOrder,S as default};
