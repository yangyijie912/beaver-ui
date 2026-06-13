import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as l}from"./iframe-BihDZwrr.js";import{S as o}from"./Select-l8ieC5Mt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B_xcmWvR.js";import"./index-Z1qDU-Vl.js";import"./useMenuPosition-Cx2MLDyg.js";import"./floating-ui.dom-BnXNKGks.js";import"./Check-C9Lcua7d.js";import"./Close-IiX-HAFp.js";const E={"--beaver-select-width":"200px"},B={title:"表单（Form）/Select",component:o,tags:["autodocs"],decorators:[n=>e.jsx("div",{style:E,children:e.jsx(n,{})})],parameters:{docs:{description:{component:`Select 组件
- 使用场景：在多个选项中进行选择，支持单选和多选
- 支持搜索和过滤选项
- 支持创建新选项
- 支持键盘导航
- 支持自定义样式和图标`}}}},t=[{label:"Apple",value:"apple"},{label:"Apricot",value:"apricot"},{label:"Banana",value:"banana"},{label:"Blueberry",value:"blueberry"},{label:"Blackberry",value:"blackberry"},{label:"Cherry",value:"cherry"},{label:"Cantaloupe",value:"cantaloupe"},{label:"Date",value:"date"},{label:"Fig",value:"fig"}],m={name:"默认",args:{options:t,placeholder:"请选择一个水果"}},g={name:"禁用",args:{options:t,disabled:!0}},h={name:"带不可选项",args:{options:[{label:"请选择",value:"",disabled:!0},{label:"自定义项 X",value:"x"},{label:"自定义项 Y",value:"y"}]}},c={name:"不同尺寸",render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(o,{options:t,size:"small",placeholder:"EEE"}),e.jsx(o,{options:t,size:"medium",placeholder:"EEE"}),e.jsx(o,{options:t,size:"large",placeholder:"EEE"})]})},d={name:"长文本选项（无宽度）",args:{options:[{label:"这是一个非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常长的选项",value:"long1"},{label:"另一个非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常长的选项",value:"long2"}],placeholder:"请选择请选择请选择请选择请选择请选择请选择请选择",width:"auto"}},p={name:"长文本选项",args:{options:[{label:"这是一个非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常长的选项",value:"long1"},{label:"另一个非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常长的选项",value:"long2"}],placeholder:"请选择请选择请选择请选择请选择请选择请选择请选择"}},u={name:"长文本选项（多选）",args:{options:[{label:"这是一个非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常长的选项",value:"long1"},{label:"另一个非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常长的选项",value:"long2"}],placeholder:"请选择请选择请选择请选择请选择请选择请选择请选择",multiple:!0}},v={name:"加载中",args:{options:t,placeholder:"加载中...",loading:!0}},y={name:"可搜索",args:{options:t,placeholder:"搜索并选择水果",searchable:!0}},S={name:"允许创建",args:{options:t,placeholder:"输入不存在的项并回车创建",searchable:!0,allowCreate:!0,width:420}},C={name:"允许创建（受控）",args:{options:t,placeholder:"Controlled: 可以创建",searchable:!0,allowCreate:!0},render:n=>{const[a,s]=l.useState(void 0);return e.jsxs("div",{style:{width:360},children:[e.jsx(o,{...n,width:420,value:a,onChange:r=>s(Array.isArray(r)?r[0]:r)}),e.jsxs("div",{style:{marginTop:12},children:["当前值: ",String(a)]})]})}},w={name:"受控",args:{options:t,placeholder:"请选择"},render:n=>{const[a,s]=l.useState("banana");return e.jsxs("div",{style:{width:320},children:[e.jsx(o,{...n,value:a,onChange:r=>s(Array.isArray(r)?r[0]:r)}),e.jsxs("div",{style:{marginTop:12},children:["当前值: ",a]})]})}},x={name:"单选可清除",args:{options:t,placeholder:"请选择一个水果",allowClear:!0},render:n=>{const[a,s]=l.useState("banana"),[r,O]=l.useState(0);return e.jsxs("div",{style:{width:320},children:[e.jsx(o,{...n,value:a,onChange:i=>s(Array.isArray(i)?i[0]:i),onClear:()=>O(i=>i+1)}),e.jsxs("div",{style:{marginTop:12},children:["当前值: ",a||"未选择"]}),e.jsxs("div",{style:{marginTop:4},children:["清除次数: ",r]})]})}},b={name:"自定义图标",render:n=>{const a=e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",fill:"none",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M8 10.5l4 4 4-4",fill:"currentColor"})]});return e.jsx("div",{children:e.jsx(o,{...n,options:t,placeholder:"自定义图标",icon:a})})}},f={name:"自定义加载与偏移",render:n=>{const a=e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"2",strokeOpacity:"0.2",fill:"none"}),e.jsx("path",{d:"M22 12a10 10 0 0 0-10-10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",fill:"none",children:e.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 12 12",to:"360 12 12",dur:"0.9s",repeatCount:"indefinite"})})]}),s={width:"320px"};return e.jsx("div",{style:s,children:e.jsx(o,{...n,options:t,placeholder:"加载中（自定义）",loading:!0,loadingIcon:a})})}},j={name:"多选",args:{options:t,placeholder:"请选择多个水果",multiple:!0,searchable:!1,allowCreate:!1},render:n=>{const[a,s]=l.useState(["apple","banana"]);return e.jsxs("div",{style:{width:420},children:[e.jsx(o,{...n,width:420,value:a,onChange:r=>s(Array.isArray(r)?r:r?[r]:[])}),e.jsxs("div",{style:{marginTop:12},children:["当前值: ",JSON.stringify(a)]})]})}},A={name:"多选（过滤已选）",args:{options:t,placeholder:"多选并隐藏已选项，选中后关闭",multiple:!0,searchable:!0,allowCreate:!0,filterSelected:!0},render:n=>{const[a,s]=l.useState(["apple"]);return e.jsxs("div",{style:{width:420},children:[e.jsx(o,{...n,width:420,value:a,onChange:r=>s(Array.isArray(r)?r:r?[r]:[])}),e.jsxs("div",{style:{marginTop:12},children:["当前值: ",JSON.stringify(a)]})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '默认',
  args: {
    options: sampleOptions,
    placeholder: '请选择一个水果'
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '禁用',
  args: {
    options: sampleOptions,
    disabled: true
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: '不同尺寸',
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Select options={sampleOptions} size="small" placeholder="EEE" />
      <Select options={sampleOptions} size="medium" placeholder="EEE" />
      <Select options={sampleOptions} size="large" placeholder="EEE" />
    </div>
}`,...c.parameters?.docs?.source},description:{story:"不同尺寸的 Select 组件展示",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '长文本选项（无宽度）',
  args: {
    options: [{
      label: '这是一个非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常长的选项',
      value: 'long1'
    }, {
      label: '另一个非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常长的选项',
      value: 'long2'
    }],
    placeholder: '请选择请选择请选择请选择请选择请选择请选择请选择',
    width: 'auto'
  }
}`,...d.parameters?.docs?.source},description:{story:"长文本选项：不设置宽度时的展示效果",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '长文本选项',
  args: {
    options: [{
      label: '这是一个非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常长的选项',
      value: 'long1'
    }, {
      label: '另一个非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常长的选项',
      value: 'long2'
    }],
    placeholder: '请选择请选择请选择请选择请选择请选择请选择请选择'
  }
}`,...p.parameters?.docs?.source},description:{story:"长文本选项展示",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '长文本选项（多选）',
  args: {
    options: [{
      label: '这是一个非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常长的选项',
      value: 'long1'
    }, {
      label: '另一个非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常长的选项',
      value: 'long2'
    }],
    placeholder: '请选择请选择请选择请选择请选择请选择请选择请选择',
    multiple: true
  }
}`,...u.parameters?.docs?.source},description:{story:"长文本选项展示（多选）",...u.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '加载中',
  args: {
    options: sampleOptions,
    placeholder: '加载中...',
    loading: true
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '可搜索',
  args: {
    options: sampleOptions,
    placeholder: '搜索并选择水果',
    searchable: true
  }
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '允许创建',
  args: {
    options: sampleOptions,
    placeholder: '输入不存在的项并回车创建',
    searchable: true,
    allowCreate: true,
    width: 420
  }
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '单选可清除',
  args: {
    options: sampleOptions,
    placeholder: '请选择一个水果',
    allowClear: true
  },
  render: (args: React.ComponentProps<typeof Select>) => {
    const [val, setVal] = React.useState<string | undefined>('banana');
    const [clearedCount, setClearedCount] = React.useState(0);
    return <div style={{
      width: 320
    }}>
        <Select {...args} value={val} onChange={v => setVal(Array.isArray(v) ? v[0] as string | undefined : v as string | undefined)} onClear={() => setClearedCount(count => count + 1)} />
        <div style={{
        marginTop: 12
      }}>当前值: {val || '未选择'}</div>
        <div style={{
        marginTop: 4
      }}>清除次数: {clearedCount}</div>
      </div>;
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: '自定义加载与偏移',
  render: (args: React.ComponentProps<typeof Select>) => {
    const MySpinner = <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" fill="none" />
        <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none">
          <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="0.9s" repeatCount="indefinite" />
        </path>
      </svg>;
    const styleVar: React.CSSProperties & Record<string, string> = {
      width: '320px'
    };
    return <div style={styleVar}>
        <Select {...args} options={sampleOptions} placeholder="加载中（自定义）" loading loadingIcon={MySpinner} />
      </div>;
  }
}`,...f.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: '多选（过滤已选）',
  args: {
    options: sampleOptions,
    placeholder: '多选并隐藏已选项，选中后关闭',
    multiple: true,
    searchable: true,
    allowCreate: true,
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
}`,...A.parameters?.docs?.source}}};const D=["Default","Disabled","WithDisabledOption","differentSizes","LongTextOptionsNoWidth","LongTextOptions","LongTextOptionsMultiple","Loading","Searchable","AllowCreate","AllowCreateControlled","Controlled","AllowClear","CustomIcon","CustomLoadingAndOffset","Multiple","MultipleFilterSelected"];export{x as AllowClear,S as AllowCreate,C as AllowCreateControlled,w as Controlled,b as CustomIcon,f as CustomLoadingAndOffset,m as Default,g as Disabled,v as Loading,p as LongTextOptions,u as LongTextOptionsMultiple,d as LongTextOptionsNoWidth,j as Multiple,A as MultipleFilterSelected,y as Searchable,h as WithDisabledOption,D as __namedExportsOrder,B as default,c as differentSizes};
