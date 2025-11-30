import{j as c}from"./jsx-runtime-u17CrQMm.js";import{R as y,r as b}from"./iframe-tE7EJGsz.js";import"./preload-helper-PPVm8Dsz.js";const m=y.forwardRef(({label:d,className:f,inputClassName:h,disabled:a,indeterminate:r=!1,...x},s)=>{const e=b.useRef(null),g=t=>{if(e.current=t,!!s)if(typeof s=="function")try{s(t)}catch{}else try{s.current=t}catch{}};b.useEffect(()=>{if(e.current&&"indeterminate"in e.current){e.current.indeterminate=!!r;try{r?e.current.setAttribute("data-indeterminate","true"):e.current.removeAttribute("data-indeterminate")}catch{}}},[r]);const C=h||"",k=["beaver-checkbox-wrapper",f,a?"beaver-checkbox-wrapper--disabled":""].filter(Boolean).join(" "),N=["beaver-checkbox",C,r?"beaver-checkbox--indeterminate":"",a?"beaver-checkbox--disabled":""].filter(Boolean).join(" ").trim();return c.jsxs("label",{className:k,"aria-disabled":a,children:[c.jsx("input",{ref:g,type:"checkbox",className:"beaver-checkbox-input",disabled:a,"data-indeterminate":r?"true":void 0,...x}),c.jsx("span",{className:N,"aria-hidden":"true"}),d?c.jsx("span",{children:d}):null]})});m.displayName="Checkbox";m.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},indeterminate:{required:!1,tsType:{name:"boolean"},description:"控制三态（中间态）显示，不会被透传到 DOM 属性",defaultValue:{value:"false",computed:!1}},inputClassName:{required:!1,tsType:{name:"string"},description:"如果需要给 input 本身加额外 class，请使用该属性"}}};const S={title:"Components/Checkbox",component:m},o={args:{}},n={args:{defaultChecked:!0}},i={args:{label:"Accept terms"}},u={args:{indeterminate:!0}},l={args:{inputClassName:"custom-checkbox",label:"Custom input class"}},p={args:{disabled:!0,label:"Accept terms"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms'
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  }
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    inputClassName: 'custom-checkbox',
    label: 'Custom input class'
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Accept terms'
  }
}`,...p.parameters?.docs?.source}}};const w=["Default","Checked","WithLabel","Indeterminate","InputClassName","Disabled"];export{n as Checked,o as Default,p as Disabled,u as Indeterminate,l as InputClassName,i as WithLabel,w as __namedExportsOrder,S as default};
