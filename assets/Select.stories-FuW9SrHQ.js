import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as i,R as te}from"./iframe-6JAbTId-.js";import"./preload-helper-PPVm8Dsz.js";const C=({options:n=[],placeholder:u="请选择",value:v,defaultValue:M,onChange:P,searchable:B=!1,filterOption:A,searchBy:Q="both",disabled:H=!1,loading:V=!1,icon:W,loadingIcon:$,className:U,size:X="medium",name:Y,...G})=>{const[o,p]=i.useState(!1),[g,c]=i.useState(null),[h,b]=i.useState(""),[y,z]=i.useState(v??M),I=i.useRef(null),J=i.useRef(null),m=i.useRef(null),F=i.useRef(null),[se,K]=i.useState(!1);i.useEffect(()=>{v!==void 0&&z(v)},[v]),i.useEffect(()=>{function e(a){I.current&&(I.current.contains(a.target)||p(!1))}return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);function f(){if(!h)return n;const e=h.trim().toLowerCase();if(A)return n.filter(s=>A(e,s));const a=Q||"both";if(a==="label")return n.filter(s=>s.label.toLowerCase().includes(e));if(a==="value")return n.filter(s=>s.value.toLowerCase().includes(e));const t=n.filter(s=>s.label.toLowerCase().includes(e)),l=n.filter(s=>!s.label.toLowerCase().includes(e)&&s.value.toLowerCase().includes(e));return[...t,...l]}function Z(e){const a=h.trim();if(!a)return e;const l=e.toLowerCase().indexOf(a.toLowerCase());if(l===-1)return e;const s=e.slice(0,l),w=e.slice(l,l+a.length),re=e.slice(l+a.length);return r.jsxs(r.Fragment,{children:[s,r.jsx("span",{className:"beaver-select__match",children:w}),re]})}i.useEffect(()=>{if(o&&g===null){const e=f(),a=e.findIndex(l=>l.value===y),t=e.findIndex(l=>!l.disabled);c(a>=0?a:t>=0?t:0)}o&&B&&setTimeout(()=>F.current?.focus(),0)},[o]),i.useEffect(()=>{o||(b(""),c(null))},[o]),i.useEffect(()=>()=>{m.current&&window.clearTimeout(m.current)},[]);const E=n.find(e=>e.value===y),x=H||V;function ee(){x||p(e=>!e)}function k(e){const a=n.find(t=>t.value===e);!a||a.disabled||(v===void 0&&z(a.value),P?.(a.value),p(!1))}function ae(e){if(!x)if(e.key==="ArrowDown"){if(e.preventDefault(),!o){p(!0);return}c(a=>{const t=f();return a===null?0:Math.min(t.length-1,a+1)})}else if(e.key==="ArrowUp"){if(e.preventDefault(),!o){p(!0);return}c(a=>{const t=f();return a===null?Math.max(0,t.length-1):Math.max(0,a-1)})}else if(e.key==="Enter"||e.key===" "){if(e.preventDefault(),!o)p(!0);else if(g!==null){const t=f()[g];t&&k(t.value)}}else if(o&&e.key==="Backspace"){e.preventDefault();const a=h.slice(0,-1);b(a),m.current&&window.clearTimeout(m.current),m.current=window.setTimeout(()=>b(""),700);const l=(a?n.filter(s=>s.label.toLowerCase().includes(a.trim().toLowerCase())||s.value.toLowerCase().includes(a.trim().toLowerCase())):n).findIndex(s=>!s.disabled);c(l>=0?l:0)}else if(o&&e.key.length===1&&!e.ctrlKey&&!e.metaKey&&!e.altKey){e.preventDefault();const a=h+e.key;b(a),m.current&&window.clearTimeout(m.current),m.current=window.setTimeout(()=>b(""),700);const t=a.trim().toLowerCase(),s=(t?n.filter(w=>w.label.toLowerCase().includes(t)||w.value.toLowerCase().includes(t)):n).findIndex(w=>!w.disabled);c(s>=0?s:0)}else e.key==="Escape"&&p(!1)}return r.jsxs("div",{className:["beaver-select-wrapper",`beaver-select--${X}`,x?"beaver-select--disabled":"",o?"beaver-select--open":"",U||""].filter(Boolean).join(" "),ref:I,"aria-disabled":x,children:[r.jsxs("div",{role:"button",className:"beaver-select__control","aria-haspopup":"listbox","aria-expanded":o,onClick:ee,onKeyDown:ae,tabIndex:x?-1:0,...G,children:[r.jsx("div",{className:"beaver-select__display",children:o&&B?r.jsx("input",{ref:F,className:"beaver-select__input",value:h,onChange:e=>{b(e.target.value),c(0)},onFocus:()=>K(!0),onBlur:()=>K(!1),onKeyDown:e=>{if(e.stopPropagation(),e.key==="ArrowDown")e.preventDefault(),c(a=>{const t=f();return a===null?0:Math.min(t.length-1,a+1)});else if(e.key==="ArrowUp")e.preventDefault(),c(a=>{const t=f();return a===null?Math.max(0,t.length-1):Math.max(0,a-1)});else if(e.key==="Enter"){e.preventDefault();const t=f()[g??0];t&&k(t.value)}else e.key==="Escape"&&p(!1)},placeholder:u}):r.jsx("span",{className:`beaver-select__value ${E?"":"beaver-select__placeholder"}`,children:E?E.label:u})}),r.jsx("div",{className:"beaver-select__icons",children:V?$?r.jsx("span",{className:"beaver-select__loading-icon",children:$}):r.jsx("span",{className:"beaver-select__spinner","aria-hidden":!0}):W?r.jsx("span",{className:"beaver-select__icon",children:W}):r.jsx("span",{className:"beaver-select__arrow","aria-hidden":!0,children:r.jsx("svg",{className:"beaver-select__arrow-svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:r.jsx("path",{d:"M6 9l6 6 6-6",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})})})]}),o&&r.jsx("ul",{role:"listbox",className:"beaver-select__menu",ref:J,tabIndex:-1,"aria-activedescendant":g!==null?`beaver-select-opt-${g}`:void 0,children:f().map((e,a)=>r.jsx("li",{id:`beaver-select-opt-${a}`,role:"option","aria-selected":e.value===y,className:`beaver-select__option ${e.value===y?"beaver-select__option--selected":""} ${e.disabled?"beaver-select__option--disabled":""} ${g===a?"beaver-select__option--highlighted":""}`,onMouseEnter:()=>c(a),onClick:()=>!e.disabled&&k(e.value),children:r.jsx("span",{className:"beaver-select__opt-label",children:Z(e.label)})},e.value))}),r.jsx("select",{name:Y,value:y??"",onChange:e=>{k(e.target.value)},style:{display:"none"},"aria-hidden":!0})]})};C.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"SelectOption[]"},description:"下拉选项列表",defaultValue:{value:"[]",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'请选择'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},searchable:{required:!1,tsType:{name:"boolean"},description:"是否在下拉中显示搜索框",defaultValue:{value:"false",computed:!1}},filterOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: string, option: SelectOption) => boolean",signature:{arguments:[{type:{name:"string"},name:"input"},{type:{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}},name:"option"}],return:{name:"boolean"}}},description:"定制过滤函数：如果提供，将优先使用"},searchBy:{required:!1,tsType:{name:"union",raw:"'label' | 'value' | 'both'",elements:[{name:"literal",value:"'label'"},{name:"literal",value:"'value'"},{name:"literal",value:"'both'"}]},description:"搜索策略：'label' 只按 label 搜索，'value' 只按 value，'both' 按 label 与 value 搜索但优先 label 匹配",defaultValue:{value:"'both'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"自定义箭头/后缀图标（传入 ReactNode）"},loadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"自定义 loading 图标（传入 ReactNode），优先于默认 spinner"},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const ie={title:"Components/Select",component:C},d=[{label:"Apple",value:"apple"},{label:"Apricot",value:"apricot"},{label:"Banana",value:"banana"},{label:"Blueberry",value:"blueberry"},{label:"Blackberry",value:"blackberry"},{label:"Cherry",value:"cherry"},{label:"Cantaloupe",value:"cantaloupe"},{label:"Date",value:"date"},{label:"Fig",value:"fig"}],_={args:{options:d,placeholder:"请选择一个水果"}},j={args:{options:d,disabled:!0}},S={args:{options:[{label:"请选择",value:"",disabled:!0},{label:"自定义项 X",value:"x"},{label:"自定义项 Y",value:"y"}]}},L={args:{options:d,size:"small"}},O={args:{options:d,size:"large"}},N={args:{options:d,placeholder:"加载中...",loading:!0}},R={args:{options:d,placeholder:"搜索并选择水果",searchable:!0}},q={args:{options:d,placeholder:"请选择"},render:n=>{const[u,v]=te.useState("banana");return r.jsxs("div",{style:{width:320},children:[r.jsx(C,{...n,value:u,onChange:M=>v(M)}),r.jsxs("div",{style:{marginTop:12},children:["当前值: ",u]})]})}},T={render:n=>{const u=r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[r.jsx("circle",{cx:"12",cy:"12",r:"10",fill:"none",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("path",{d:"M8 10.5l4 4 4-4",fill:"currentColor"})]});return r.jsx("div",{style:{width:320},children:r.jsx(C,{...n,options:d,placeholder:"自定义图标",icon:u})})}},D={render:n=>{const u=r.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"2",strokeOpacity:"0.2",fill:"none"}),r.jsx("path",{d:"M22 12a10 10 0 0 0-10-10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",fill:"none",children:r.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 12 12",to:"360 12 12",dur:"0.9s",repeatCount:"indefinite"})})]});return r.jsx("div",{style:{width:320,"--beaver-select-arrow-offset":"1px"},children:r.jsx(C,{...n,options:d,placeholder:"加载中（自定义）",loading:!0,loadingIcon:u})})}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    placeholder: '请选择一个水果'
  }
}`,..._.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    disabled: true
  }
}`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    size: 'small'
  }
}`,...L.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    size: 'large'
  }
}`,...O.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    placeholder: '加载中...',
    loading: true
  }
}`,...N.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    placeholder: '搜索并选择水果',
    searchable: true
  }
}`,...R.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    placeholder: '请选择'
  },
  render: (args: React.ComponentProps<typeof Select>) => {
    const [val, setVal] = React.useState<string | undefined>('banana');
    return <div style={{
      width: 320
    }}>
        <Select {...args} value={val} onChange={v => setVal(v)} />
        <div style={{
        marginTop: 12
      }}>当前值: {val}</div>
      </div>;
  }
}`,...q.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: (args: React.ComponentProps<typeof Select>) => {
    // 更明显不同的图标：圆环外框 + 向下实心 caret，视觉上与默认 chevron 区分明显
    const MyArrow = <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 10.5l4 4 4-4" fill="currentColor" />
      </svg>;
    return <div style={{
      width: 320
    }}>
        <Select {...args} options={sampleOptions} placeholder="自定义图标" icon={MyArrow} />
      </div>;
  }
}`,...T.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: (args: React.ComponentProps<typeof Select>) => {
    const MySpinner = <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" fill="none" />
        <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none">
          <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="0.9s" repeatCount="indefinite" />
        </path>
      </svg>;
    return <div style={{
      width: 320,
      ['--beaver-select-arrow-offset' as any]: '1px'
    }}>
        <Select {...args} options={sampleOptions} placeholder="加载中（自定义）" loading loadingIcon={MySpinner} />
      </div>;
  }
}`,...D.parameters?.docs?.source}}};const ce=["Default","Disabled","WithDisabledOption","Small","Large","Loading","Searchable","Controlled","CustomIcon","CustomLoadingAndOffset"];export{q as Controlled,T as CustomIcon,D as CustomLoadingAndOffset,_ as Default,j as Disabled,O as Large,N as Loading,R as Searchable,L as Small,S as WithDisabledOption,ce as __namedExportsOrder,ie as default};
