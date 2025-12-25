import{j as c}from"./jsx-runtime-u17CrQMm.js";import{R as l}from"./iframe-CIZpvQ1U.js";import{P as p,e as d}from"./Pagination-D6IpVG0i.js";import"./preload-helper-PPVm8Dsz.js";import"./Select-CqC-8JOr.js";import"./index-B1Xph6y5.js";import"./index-DlnrNmRV.js";import"./useMenuPosition-TViZUNcH.js";import"./floating-ui.dom-BnXNKGks.js";import"./Check-C9Lcua7d.js";import"./ArrowRight-BvBKt8CZ.js";const v={title:"导航（Navigation）/Pagination",component:p,tags:["autodocs"],argTypes:{align:{control:{type:"radio"},options:["left","center","right"],description:"Alignment of the pagination container"}},parameters:{docs:{description:{component:`Pagination 组件
- 使用场景：在数据量较大时，分割数据为多页进行展示和导航
- 支持自定义每页条目数
- 支持快速跳转到指定页码
- 支持禁用状态
- 支持国际化文案
- 支持对齐方式自定义（左、中、右）
- 支持受控和非受控用法`}}}},a={name:"默认",args:{total:234}},e={name:"带页数选择和快速跳转",args:{total:123,showSizeChanger:!0,showQuickJumper:!0}},r={name:"带总数显示",args:{total:123,showTotal:!0}},t={name:"居中对齐",args:{total:100,align:"center"}},n={name:"左对齐",args:{total:100,align:"left"}},o={name:"英文",args:{total:150,showQuickJumper:!0,showSizeChanger:!0,showTotal:!0,locale:d,width:{sizeChanger:102}}},s={name:"禁用",args:{total:150,showQuickJumper:!0,showSizeChanger:!0,disabled:!0}},i={name:"受控",render:()=>{const[m,u]=l.useState(3);return c.jsxs("div",{children:[c.jsxs("div",{style:{marginTop:8},children:["当前页: ",String(m)]}),c.jsx(p,{total:200,current:m,onChange:g=>u(g)})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: '默认',
  args: {
    total: 234
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: '带页数选择和快速跳转',
  args: {
    total: 123,
    showSizeChanger: true,
    showQuickJumper: true
  }
}`,...e.parameters?.docs?.source},description:{story:"展示页数选择器和快速跳转功能",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: '带总数显示',
  args: {
    total: 123,
    showTotal: true
  }
}`,...r.parameters?.docs?.source},description:{story:"展示总数",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: '居中对齐',
  args: {
    total: 100,
    align: 'center'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: '左对齐',
  args: {
    total: 100,
    align: 'left'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: '英文',
  args: {
    total: 150,
    showQuickJumper: true,
    showSizeChanger: true,
    showTotal: true,
    locale: en,
    width: {
      sizeChanger: 102
    }
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: '禁用',
  args: {
    total: 150,
    showQuickJumper: true,
    showSizeChanger: true,
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const x=["Default","WithSizeChangerAndQuickJumper","WithTotal","AlignCenter","AlignRight","WithEnglish","Disabled","Controlled"];export{t as AlignCenter,n as AlignRight,i as Controlled,a as Default,s as Disabled,o as WithEnglish,e as WithSizeChangerAndQuickJumper,r as WithTotal,x as __namedExportsOrder,v as default};
