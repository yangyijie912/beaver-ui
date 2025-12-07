import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as b}from"./iframe-BKpi8Zge.js";import{S as o}from"./Select-COQr7Zf6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DuoL47QS.js";import"./index-CuTHX-aT.js";const C={"--beaver-select-width":"200px"},V={title:"Components/Select",component:o,tags:["autodocs"],decorators:[n=>e.jsx("div",{style:C,children:e.jsx(n,{})})]},s=[{label:"Apple",value:"apple"},{label:"Apricot",value:"apricot"},{label:"Banana",value:"banana"},{label:"Blueberry",value:"blueberry"},{label:"Blackberry",value:"blackberry"},{label:"Cherry",value:"cherry"},{label:"Cantaloupe",value:"cantaloupe"},{label:"Date",value:"date"},{label:"Fig",value:"fig"}],l={name:"默认",args:{options:s,placeholder:"请选择一个水果"}},i={name:"禁用",args:{options:s,disabled:!0}},c={name:"带不可选项",args:{options:[{label:"请选择",value:"",disabled:!0},{label:"自定义项 X",value:"x"},{label:"自定义项 Y",value:"y"}]}},d={name:"小",args:{options:s,size:"small"}},p={name:"大",args:{options:s,size:"large"}},u={name:"加载中",args:{options:s,placeholder:"加载中...",loading:!0}},m={name:"可搜索",args:{options:s,placeholder:"搜索并选择水果",searchable:!0}},g={name:"允许创建",args:{options:s,placeholder:"输入不存在的项并回车创建",searchable:!0,allowCreate:!0,width:420}},h={name:"允许创建（受控）",args:{options:s,placeholder:"Controlled: 可以创建",searchable:!0,allowCreate:!0},render:n=>{const[a,t]=b.useState(void 0);return e.jsxs("div",{style:{width:360},children:[e.jsx(o,{...n,width:420,value:a,onChange:r=>t(Array.isArray(r)?r[0]:r)}),e.jsxs("div",{style:{marginTop:12},children:["当前值: ",String(a)]})]})}},v={name:"受控",args:{options:s,placeholder:"请选择"},render:n=>{const[a,t]=b.useState("banana");return e.jsxs("div",{style:{width:320},children:[e.jsx(o,{...n,value:a,onChange:r=>t(Array.isArray(r)?r[0]:r)}),e.jsxs("div",{style:{marginTop:12},children:["当前值: ",a]})]})}},y={name:"自定义图标",render:n=>{const a=e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",fill:"none",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M8 10.5l4 4 4-4",fill:"currentColor"})]});return e.jsx("div",{children:e.jsx(o,{...n,options:s,placeholder:"自定义图标",icon:a})})}},f={name:"自定义加载与偏移",render:n=>{const a=e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"2",strokeOpacity:"0.2",fill:"none"}),e.jsx("path",{d:"M22 12a10 10 0 0 0-10-10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",fill:"none",children:e.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 12 12",to:"360 12 12",dur:"0.9s",repeatCount:"indefinite"})})]}),t={width:"320px","--beaver-select-arrow-offset":"1px"};return e.jsx("div",{style:t,children:e.jsx(o,{...n,options:s,placeholder:"加载中（自定义）",loading:!0,loadingIcon:a})})}},w={name:"多选",args:{options:s,placeholder:"请选择多个水果",multiple:!0,searchable:!1,allowCreate:!1},render:n=>{const[a,t]=b.useState(["apple","banana"]);return e.jsxs("div",{style:{width:420},children:[e.jsx(o,{...n,width:420,value:a,onChange:r=>t(Array.isArray(r)?r:r?[r]:[])}),e.jsxs("div",{style:{marginTop:12},children:["当前值: ",JSON.stringify(a)]})]})}},S={name:"多选（过滤已选）",args:{options:s,placeholder:"多选并隐藏已选项，选中后关闭",multiple:!0,searchable:!1,allowCreate:!1,filterSelected:!0},render:n=>{const[a,t]=b.useState(["apple"]);return e.jsxs("div",{style:{width:420},children:[e.jsx(o,{...n,width:420,value:a,onChange:r=>t(Array.isArray(r)?r:r?[r]:[])}),e.jsxs("div",{style:{marginTop:12},children:["当前值: ",JSON.stringify(a)]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: '默认',
  args: {
    options: sampleOptions,
    placeholder: '请选择一个水果'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: '禁用',
  args: {
    options: sampleOptions,
    disabled: true
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: '带不可选项',
  args: {
    options: [{
      label: '请选择',
      value: '',
      disabled: true
    }, {
      label: '自定义项 X',
      value: 'x'
    }, {
      label: '自定义项 Y',
      value: 'y'
    }]
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '小',
  args: {
    options: sampleOptions,
    size: 'small'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '大',
  args: {
    options: sampleOptions,
    size: 'large'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '加载中',
  args: {
    options: sampleOptions,
    placeholder: '加载中...',
    loading: true
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '可搜索',
  args: {
    options: sampleOptions,
    placeholder: '搜索并选择水果',
    searchable: true
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '允许创建',
  args: {
    options: sampleOptions,
    placeholder: '输入不存在的项并回车创建',
    searchable: true,
    allowCreate: true,
    width: 420
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '允许创建（受控）',
  args: {
    options: sampleOptions,
    placeholder: 'Controlled: 可以创建',
    searchable: true,
    allowCreate: true
  },
  render: (args: React.ComponentProps<typeof Select>) => {
    const [val, setVal] = React.useState<string | undefined>(undefined);
    return <div style={{
      width: 360
    }}>
        <Select {...args} width={420} value={val} onChange={v => setVal(Array.isArray(v) ? v[0] as string | undefined : v as string | undefined)} />
        <div style={{
        marginTop: 12
      }}>当前值: {String(val)}</div>
      </div>;
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '受控',
  args: {
    options: sampleOptions,
    placeholder: '请选择'
  },
  render: (args: React.ComponentProps<typeof Select>) => {
    const [val, setVal] = React.useState<string | undefined>('banana');
    return <div style={{
      width: 320
    }}>
        <Select {...args} value={val} onChange={v => setVal(Array.isArray(v) ? v[0] as string | undefined : v as string | undefined)} />
        <div style={{
        marginTop: 12
      }}>当前值: {val}</div>
      </div>;
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '自定义图标',
  render: (args: React.ComponentProps<typeof Select>) => {
    // 更明显不同的图标：圆环外框 + 向下实心 caret，视觉上与默认 chevron 区分明显
    const MyArrow = <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 10.5l4 4 4-4" fill="currentColor" />
      </svg>;
    return <div>
        <Select {...args} options={sampleOptions} placeholder="自定义图标" icon={MyArrow} />
      </div>;
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: '自定义加载与偏移',
  render: (args: React.ComponentProps<typeof Select>) => {
    const MySpinner = <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" fill="none" />
        <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none">
          <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="0.9s" repeatCount="indefinite" />
        </path>
      </svg>;
    const styleVar: React.CSSProperties & Record<string, string> = {
      width: '320px',
      '--beaver-select-arrow-offset': '1px'
    };
    return <div style={styleVar}>
        <Select {...args} options={sampleOptions} placeholder="加载中（自定义）" loading loadingIcon={MySpinner} />
      </div>;
  }
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: '多选',
  args: {
    options: sampleOptions,
    placeholder: '请选择多个水果',
    multiple: true,
    searchable: false,
    allowCreate: false
  },
  render: (args: React.ComponentProps<typeof Select>) => {
    const [val, setVal] = React.useState<string[] | undefined>(['apple', 'banana']);
    return <div style={{
      width: 420
    }}>
        <Select {...args} width={420} value={val} onChange={v => setVal(Array.isArray(v) ? v : v ? [v] : [])} />
        <div style={{
        marginTop: 12
      }}>当前值: {JSON.stringify(val)}</div>
      </div>;
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '多选（过滤已选）',
  args: {
    options: sampleOptions,
    placeholder: '多选并隐藏已选项，选中后关闭',
    multiple: true,
    searchable: false,
    allowCreate: false,
    filterSelected: true
  },
  render: (args: React.ComponentProps<typeof Select>) => {
    const [val, setVal] = React.useState<string[] | undefined>(['apple']);
    return <div style={{
      width: 420
    }}>
        <Select {...args} width={420} value={val} onChange={v => setVal(Array.isArray(v) ? v : v ? [v] : [])} />
        <div style={{
        marginTop: 12
      }}>当前值: {JSON.stringify(val)}</div>
      </div>;
  }
}`,...S.parameters?.docs?.source}}};const M=["Default","Disabled","WithDisabledOption","Small","Large","Loading","Searchable","AllowCreate","AllowCreateControlled","Controlled","CustomIcon","CustomLoadingAndOffset","Multiple","MultipleFilterSelected"];export{g as AllowCreate,h as AllowCreateControlled,v as Controlled,y as CustomIcon,f as CustomLoadingAndOffset,l as Default,i as Disabled,p as Large,u as Loading,w as Multiple,S as MultipleFilterSelected,m as Searchable,d as Small,c as WithDisabledOption,M as __namedExportsOrder,V as default};
