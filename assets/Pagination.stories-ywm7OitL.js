import{j as i}from"./jsx-runtime-u17CrQMm.js";import{R as u}from"./iframe-CUpoYAUB.js";import{P as m,e as l}from"./Pagination-Co7EeTgx.js";import"./preload-helper-PPVm8Dsz.js";import"./Select-BsKh4Z4t.js";import"./index-AMS0wgWQ.js";import"./index-DyggLJFx.js";import"./useMenuPosition-DdalfS9r.js";import"./floating-ui.dom-BnXNKGks.js";import"./Check-C9Lcua7d.js";import"./ArrowRight-BvBKt8CZ.js";const v={title:"导航（Navigation）/Pagination",component:m,tags:["autodocs"],argTypes:{align:{control:{type:"radio"},options:["left","center","right"],description:"Alignment of the pagination container"}},parameters:{docs:{description:{component:`Pagination 组件
- 使用场景：在数据量较大时，分割数据为多页进行展示和导航
- 支持自定义每页条目数
- 支持快速跳转到指定页码
- 支持禁用状态
- 支持国际化文案
- 支持对齐方式自定义（左、中、右）
- 支持受控和非受控用法`}}}},r={name:"默认",args:{total:234}},e={name:"带页数选择和快速跳转",args:{total:123,showSizeChanger:!0,showQuickJumper:!0}},a={name:"居中对齐",args:{total:100,align:"center"}},n={name:"左对齐",args:{total:100,align:"left"}},t={name:"英文",args:{total:150,showQuickJumper:!0,showSizeChanger:!0,locale:l,width:{sizeChanger:102}}},o={name:"禁用",args:{total:150,showQuickJumper:!0,showSizeChanger:!0,disabled:!0}},s={name:"受控",render:()=>{const[c,p]=u.useState(3);return i.jsxs("div",{children:[i.jsxs("div",{style:{marginTop:8},children:["当前页: ",String(c)]}),i.jsx(m,{total:200,current:c,onChange:g=>p(g)})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: '默认',
  args: {
    total: 234
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: '带页数选择和快速跳转',
  args: {
    total: 123,
    showSizeChanger: true,
    showQuickJumper: true
  }
}`,...e.parameters?.docs?.source},description:{story:"展示页数选择器和快速跳转功能",...e.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: '居中对齐',
  args: {
    total: 100,
    align: 'center'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: '左对齐',
  args: {
    total: 100,
    align: 'left'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: '英文',
  args: {
    total: 150,
    showQuickJumper: true,
    showSizeChanger: true,
    locale: en,
    width: {
      sizeChanger: 102
    }
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: '禁用',
  args: {
    total: 150,
    showQuickJumper: true,
    showSizeChanger: true,
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: '受控',
  render: () => {
    const [page, setPage] = React.useState(3);
    return <div>
        <div style={{
        marginTop: 8
      }}>当前页: {String(page)}</div>
        <Pagination total={200} current={page} onChange={p => setPage(p)} />
      </div>;
  }
}`,...s.parameters?.docs?.source}}};const x=["Default","WithSizeChangerAndQuickJumper","AlignCenter","AlignRight","WithEnglish","Disabled","Controlled"];export{a as AlignCenter,n as AlignRight,s as Controlled,r as Default,o as Disabled,t as WithEnglish,e as WithSizeChangerAndQuickJumper,x as __namedExportsOrder,v as default};
