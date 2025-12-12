import{j as o}from"./jsx-runtime-u17CrQMm.js";import{C as c}from"./Checkbox-Bmxxwa1Y.js";import"./iframe-CkYmOMph.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"Components/Checkbox",component:c,tags:["autodocs"],parameters:{docs:{description:{component:`Checkbox 组件
- 使用场景：在多个选项中进行多选
- 支持三态显示（选中、未选中、中间态）
- 支持禁用状态
- 支持自定义标签内容`}}}},e={name:"默认",args:{}},a={name:"选中",args:{defaultChecked:!0}},r={name:"带标签",args:{label:"Accept terms"}},s={name:"中间态",args:{indeterminate:!0}},p=`.custom-checkbox {
  border-color: #16a34a;
}`,d=m=>o.jsxs("div",{children:[o.jsx("style",{children:p}),o.jsx(c,{inputClassName:"custom-checkbox",label:"自定义样式",...m})]}),t={name:"自定义样式",render:d},n={name:"禁用",args:{disabled:!0,label:"Accept terms"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: '默认',
  args: {}
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: '选中',
  args: {
    defaultChecked: true
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: '带标签',
  args: {
    label: 'Accept terms'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: '中间态',
  args: {
    indeterminate: true
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: '自定义样式',
  render: InputClassNameTemplate
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: '禁用',
  args: {
    disabled: true,
    label: 'Accept terms'
  }
}`,...n.parameters?.docs?.source}}};const C=["Default","Checked","WithLabel","Indeterminate","InputClassName","Disabled"];export{a as Checked,e as Default,n as Disabled,s as Indeterminate,t as InputClassName,r as WithLabel,C as __namedExportsOrder,g as default};
