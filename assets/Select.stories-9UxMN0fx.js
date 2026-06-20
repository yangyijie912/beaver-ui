import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as l}from"./iframe-CibP1z5c.js";import{S as o}from"./Select-ca_ykfd6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-UsbkH3Xd.js";import"./index-DPK2decG.js";import"./useMenuPosition-DTkuj8Di.js";import"./floating-ui.dom-BnXNKGks.js";import"./Check-C9Lcua7d.js";import"./Close-IiX-HAFp.js";const W={"--beaver-select-width":"200px"},_={title:"表单（Form）/Select",component:o,tags:["autodocs"],decorators:[n=>e.jsx("div",{style:W,children:e.jsx(n,{})})],parameters:{docs:{description:{component:`Select 组件
- 使用场景：在多个选项中进行选择，支持单选和多选
- 支持搜索和过滤选项
- 支持创建新选项
- 支持键盘导航
- 支持自定义样式和图标`}}}},t=[{label:"Apple",value:"apple"},{label:"Apricot",value:"apricot"},{label:"Banana",value:"banana"},{label:"Blueberry",value:"blueberry"},{label:"Blackberry",value:"blackberry"},{label:"Cherry",value:"cherry"},{label:"Cantaloupe",value:"cantaloupe"},{label:"Date",value:"date"},{label:"Fig",value:"fig"}],g={name:"默认",args:{options:t,placeholder:"请选择一个水果"}},h={name:"禁用",args:{options:t,disabled:!0}},v={name:"带不可选项",args:{options:[{label:"请选择",value:"",disabled:!0},{label:"自定义项 X",value:"x"},{label:"自定义项 Y",value:"y"}]}},d={name:"不同尺寸",render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(o,{options:t,size:"small",placeholder:"EEE"}),e.jsx(o,{options:t,size:"medium",placeholder:"EEE"}),e.jsx(o,{options:t,size:"large",placeholder:"EEE"})]})},p={name:"长文本选项（无宽度）",args:{options:[{label:"这是一个非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常长的选项",value:"long1"},{label:"另一个非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常长的选项",value:"long2"}],placeholder:"请选择请选择请选择请选择请选择请选择请选择请选择",width:"auto"}},u={name:"长文本选项",args:{options:[{label:"这是一个非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常长的选项",value:"long1"},{label:"另一个非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常长的选项",value:"long2"}],placeholder:"请选择请选择请选择请选择请选择请选择请选择请选择"}},m={name:"长文本选项（多选）",args:{options:[{label:"这是一个非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常长的选项",value:"long1"},{label:"另一个非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常长的选项",value:"long2"}],placeholder:"请选择请选择请选择请选择请选择请选择请选择请选择",multiple:!0}},y={name:"加载中",args:{options:t,placeholder:"加载中...",loading:!0}},w={name:"可搜索",args:{options:t,placeholder:"搜索并选择水果",searchable:!0}},S={name:"异步搜索",render:n=>{const a=[{label:"张三（zhangsan@example.com / 13800000001）",value:"user-1"},{label:"李四（lisi@example.com / 13800000002）",value:"user-2"},{label:"王五（wangwu@example.com / 13800000003）",value:"user-3"},{label:"赵六（zhaoliu@example.com / 13800000004）",value:"user-4"}],[s,r]=l.useState(""),[T,i]=l.useState([]),[M,k]=l.useState(!1),V=l.useRef(0),I=c=>{const E=V.current+1;V.current=E,k(!0),window.setTimeout(()=>{if(V.current!==E)return;const L=c.trim().toLowerCase();i(L?a.filter(z=>z.label.toLowerCase().includes(L)||z.value.toLowerCase().includes(L)):[]),k(!1)},500)};return e.jsxs("div",{style:{width:420},children:[e.jsx(o,{...n,value:s,width:"100%",options:T,searchable:!0,remoteSearch:!0,loading:M,placeholder:"输入用户名 / 邮箱 / 手机号",onSearch:I,onChange:c=>r(Array.isArray(c)?c[0]:c)}),e.jsxs("div",{style:{marginTop:12},children:["当前值：",s||"未选择"]})]})}},f={name:"允许创建",args:{options:t,placeholder:"输入不存在的项并回车创建",searchable:!0,allowCreate:!0,width:420}},x={name:"允许创建（受控）",args:{options:t,placeholder:"Controlled: 可以创建",searchable:!0,allowCreate:!0},render:n=>{const[a,s]=l.useState(void 0);return e.jsxs("div",{style:{width:360},children:[e.jsx(o,{...n,width:420,value:a,onChange:r=>s(Array.isArray(r)?r[0]:r)}),e.jsxs("div",{style:{marginTop:12},children:["当前值: ",String(a)]})]})}},C={name:"受控",args:{options:t,placeholder:"请选择"},render:n=>{const[a,s]=l.useState("banana");return e.jsxs("div",{style:{width:320},children:[e.jsx(o,{...n,value:a,onChange:r=>s(Array.isArray(r)?r[0]:r)}),e.jsxs("div",{style:{marginTop:12},children:["当前值: ",a]})]})}},b={name:"单选可清除",args:{options:t,placeholder:"请选择一个水果",allowClear:!0},render:n=>{const[a,s]=l.useState("banana"),[r,T]=l.useState(0);return e.jsxs("div",{style:{width:320},children:[e.jsx(o,{...n,value:a,onChange:i=>s(Array.isArray(i)?i[0]:i),onClear:()=>T(i=>i+1)}),e.jsxs("div",{style:{marginTop:12},children:["当前值: ",a||"未选择"]}),e.jsxs("div",{style:{marginTop:4},children:["清除次数: ",r]})]})}},O={name:"自定义图标",render:n=>{const a=e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",fill:"none",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M8 10.5l4 4 4-4",fill:"currentColor"})]});return e.jsx("div",{children:e.jsx(o,{...n,options:t,placeholder:"自定义图标",icon:a})})}},j={name:"自定义加载与偏移",render:n=>{const a=e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"2",strokeOpacity:"0.2",fill:"none"}),e.jsx("path",{d:"M22 12a10 10 0 0 0-10-10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",fill:"none",children:e.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 12 12",to:"360 12 12",dur:"0.9s",repeatCount:"indefinite"})})]}),s={width:"320px"};return e.jsx("div",{style:s,children:e.jsx(o,{...n,options:t,placeholder:"加载中（自定义）",loading:!0,loadingIcon:a})})}},A={name:"多选",args:{options:t,placeholder:"请选择多个水果",multiple:!0,searchable:!1,allowCreate:!1},render:n=>{const[a,s]=l.useState(["apple","banana"]);return e.jsxs("div",{style:{width:420},children:[e.jsx(o,{...n,width:420,value:a,onChange:r=>s(Array.isArray(r)?r:r?[r]:[])}),e.jsxs("div",{style:{marginTop:12},children:["当前值: ",JSON.stringify(a)]})]})}},R={name:"多选（过滤已选）",args:{options:t,placeholder:"多选并隐藏已选项，选中后关闭",multiple:!0,searchable:!0,allowCreate:!0,filterSelected:!0},render:n=>{const[a,s]=l.useState(["apple"]);return e.jsxs("div",{style:{width:420},children:[e.jsx(o,{...n,width:420,value:a,onChange:r=>s(Array.isArray(r)?r:r?[r]:[])}),e.jsxs("div",{style:{marginTop:12},children:["当前值: ",JSON.stringify(a)]})]})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '默认',
  args: {
    options: sampleOptions,
    placeholder: '请选择一个水果'
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '禁用',
  args: {
    options: sampleOptions,
    disabled: true
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:"不同尺寸的 Select 组件展示",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:"长文本选项：不设置宽度时的展示效果",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:"长文本选项展示",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:"长文本选项展示（多选）",...m.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '加载中',
  args: {
    options: sampleOptions,
    placeholder: '加载中...',
    loading: true
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: '可搜索',
  args: {
    options: sampleOptions,
    placeholder: '搜索并选择水果',
    searchable: true
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '异步搜索',
  render: (args: React.ComponentProps<typeof Select>) => {
    const remoteOptions: SelectOption[] = [{
      label: '张三（zhangsan@example.com / 13800000001）',
      value: 'user-1'
    }, {
      label: '李四（lisi@example.com / 13800000002）',
      value: 'user-2'
    }, {
      label: '王五（wangwu@example.com / 13800000003）',
      value: 'user-3'
    }, {
      label: '赵六（zhaoliu@example.com / 13800000004）',
      value: 'user-4'
    }];
    const [value, setValue] = React.useState('');
    const [options, setOptions] = React.useState<SelectOption[]>([]);
    const [loading, setLoading] = React.useState(false);
    const requestIdRef = React.useRef(0);
    const handleSearch = (keyword: string) => {
      const requestId = requestIdRef.current + 1;
      requestIdRef.current = requestId;
      setLoading(true);
      window.setTimeout(() => {
        if (requestIdRef.current !== requestId) return;
        const normalizedKeyword = keyword.trim().toLowerCase();
        setOptions(normalizedKeyword ? remoteOptions.filter(option => option.label.toLowerCase().includes(normalizedKeyword) || option.value.toLowerCase().includes(normalizedKeyword)) : []);
        setLoading(false);
      }, 500);
    };
    return <div style={{
      width: 420
    }}>
        <Select {...args} value={value} width="100%" options={options} searchable remoteSearch loading={loading} placeholder="输入用户名 / 邮箱 / 手机号" onSearch={handleSearch} onChange={nextValue => setValue(Array.isArray(nextValue) ? nextValue[0] : nextValue)} />
        <div style={{
        marginTop: 12
      }}>当前值：{value || '未选择'}</div>
      </div>;
  }
}`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: '允许创建',
  args: {
    options: sampleOptions,
    placeholder: '输入不存在的项并回车创建',
    searchable: true,
    allowCreate: true,
    width: 420
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};const G=["Default","Disabled","WithDisabledOption","differentSizes","LongTextOptionsNoWidth","LongTextOptions","LongTextOptionsMultiple","Loading","Searchable","RemoteSearch","AllowCreate","AllowCreateControlled","Controlled","AllowClear","CustomIcon","CustomLoadingAndOffset","Multiple","MultipleFilterSelected"];export{b as AllowClear,f as AllowCreate,x as AllowCreateControlled,C as Controlled,O as CustomIcon,j as CustomLoadingAndOffset,g as Default,h as Disabled,y as Loading,u as LongTextOptions,m as LongTextOptionsMultiple,p as LongTextOptionsNoWidth,A as Multiple,R as MultipleFilterSelected,S as RemoteSearch,w as Searchable,v as WithDisabledOption,G as __namedExportsOrder,_ as default,d as differentSizes};
