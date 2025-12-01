import{j as a}from"./jsx-runtime-u17CrQMm.js";import{R as t}from"./iframe-vKEYNIo1.js";import{S as $}from"./Select-B8M-r7fa.js";import"./preload-helper-PPVm8Dsz.js";const D={prev:"上一页",next:"下一页",jumpTo:"跳到",page:"页",itemsPerPage:r=>`${r} / 页`},V={prev:"Previous",next:"Next",jumpTo:"Jump to",page:"",itemsPerPage:r=>`${r} / page`},B=D;function F(r,l){const s=[];for(let p=r;p<=l;p++)s.push(p);return s}const C=({total:r,pageSize:l=10,current:s,onChange:p,pageSizeOptions:J=[10,20,50,100],showQuickJumper:L=!1,showSizeChanger:Q=!1,locale:z,align:q="left",disabled:o=!1,width:k})=>{const W=e=>typeof e=="number"?`${e}px`:e,g=t.useMemo(()=>({...B,...z||{}}),[z]),[i,_]=t.useState(s??1),[c,P]=t.useState(l),m=Math.max(1,Math.ceil(r/c));t.useEffect(()=>{typeof s=="number"&&_(s)},[s]),t.useEffect(()=>{P(l)},[l]),t.useEffect(()=>{const e=Math.max(1,Math.ceil(r/c));i>e&&_(e)},[r,c]);const d=(e,n)=>{o||(_(e),typeof p=="function"&&p(e,n??c))},A=()=>{if(m<=7)return F(1,m);const e=[],n=Math.max(2,i-2),u=Math.min(m-1,i+2);e.push(1),n>2&&e.push("...");for(let h=n;h<=u;h++)e.push(h);return u<m-1&&e.push("..."),e.push(m),e},T=t.useRef(null),M=()=>{const e=T.current;if(!e)return;const n=e.value.trim();if(n==="")return;const u=Number(n);if(Number.isFinite(u)){const h=Math.min(Math.max(1,Math.trunc(u)),Math.max(1,Math.ceil(r/c)));d(h)}e.value=""},E=A(),N=t.useMemo(()=>`beaver-pagination beaver-pagination--align-${q}`,[q]),R=t.useMemo(()=>`${N}${o?" beaver-pagination--disabled":""}`,[N,o]);return a.jsxs("div",{className:R,children:[a.jsxs("div",{className:"beaver-pagination__controls",children:[a.jsx("button",{type:"button",className:"beaver-pagination__control",onClick:()=>d(Math.max(1,i-1)),disabled:o||i===1,"aria-label":g.prev,children:a.jsx("svg",{className:"beaver-pagination__icon",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:a.jsx("path",{d:"M10 3L5 8L10 13",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})})}),a.jsx("ul",{className:"beaver-pagination__list",children:E.map((e,n)=>a.jsx("li",{children:e==="..."?a.jsx("span",{className:"beaver-pagination__dots",children:"…"}):a.jsx("button",{type:"button",className:["beaver-pagination__item",i===e?"beaver-pagination__item--active":""].filter(Boolean).join(" "),onClick:()=>d(e),disabled:o,"aria-current":i===e?"page":void 0,children:e})},String(e)+n))}),a.jsx("button",{type:"button",className:"beaver-pagination__control",onClick:()=>d(Math.min(m,i+1)),disabled:o||i===m,"aria-label":g.next,children:a.jsx("svg",{className:"beaver-pagination__icon",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:a.jsx("path",{d:"M6 3L11 8L6 13",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})})})]}),a.jsxs("div",{className:"beaver-pagination__extras",children:[Q&&a.jsx("div",{className:"beaver-pagination__sizes",children:a.jsx($,{options:J.map(e=>({label:g.itemsPerPage?g.itemsPerPage(e):`${e}`,value:String(e)})),value:String(c),onChange:e=>{const n=Array.isArray(e)?e[0]:e,u=Number(n)||c;P(u),d(1,u)},disabled:o,size:"small",width:k?.sizeChanger??84,"aria-label":"page-size"})}),L&&a.jsx("div",{className:"beaver-pagination__jumper",children:a.jsxs("label",{children:[g.jumpTo,a.jsx("input",{name:"beaver-jump",ref:T,className:"beaver-pagination__jump-input",disabled:o,onKeyDown:e=>{e.key==="Enter"&&(e.preventDefault(),M())},onBlur:()=>{M()},"aria-label":"quick-jump",style:k?.quickJumper?{width:W(k.quickJumper)}:void 0}),g.page]})})]})]})};C.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{total:{required:!0,tsType:{name:"number"},description:"总条目数"},pageSize:{required:!1,tsType:{name:"number"},description:"初始每页数量（可选，默认 10）",defaultValue:{value:"10",computed:!1}},current:{required:!1,tsType:{name:"number"},description:"受控当前页（可选）"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number, pageSize?: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"},{type:{name:"number"},name:"pageSize"}],return:{name:"void"}}},description:"页码或 pageSize 变化回调"},pageSizeOptions:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"下拉可选的 pageSize 值",defaultValue:{value:"[10, 20, 50, 100]",computed:!1}},showQuickJumper:{required:!1,tsType:{name:"boolean"},description:"是否显示快速跳转输入框",defaultValue:{value:"false",computed:!1}},showSizeChanger:{required:!1,tsType:{name:"boolean"},description:"是否显示每页数量切换器",defaultValue:{value:"false",computed:!1}},locale:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  prev?: string;
  next?: string;
  jumpTo?: string;
  page?: string;
  itemsPerPage?: (n: number) => string;
}`,signature:{properties:[{key:"prev",value:{name:"string",required:!1}},{key:"next",value:{name:"string",required:!1}},{key:"jumpTo",value:{name:"string",required:!1}},{key:"page",value:{name:"string",required:!1}},{key:"itemsPerPage",value:{name:"signature",type:"function",raw:"(n: number) => string",signature:{arguments:[{type:{name:"number"},name:"n"}],return:{name:"string"}},required:!1}}]}}],raw:"Partial<PaginationLocale>"},description:"国际化配置，可覆盖默认文案"},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"对齐方向：'left' | 'center' | 'right'（默认 'left'）",defaultValue:{value:"'left'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用整个分页控件",defaultValue:{value:"false",computed:!1}},width:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  sizeChanger?: number | string;
  quickJumper?: number | string;
}`,signature:{properties:[{key:"sizeChanger",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"quickJumper",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}}]}},description:"可选的宽度配置"}}};const H={title:"Components/Pagination",component:C,argTypes:{align:{control:{type:"radio"},options:["left","center","right"],description:"Alignment of the pagination container"}}},f={args:{total:234}},v={args:{total:123,showSizeChanger:!0}},b={args:{total:78,showQuickJumper:!0}},x={args:{total:100,align:"center"}},y={args:{total:100,align:"right"}},j={args:{total:150,showQuickJumper:!0,showSizeChanger:!0,locale:V,width:{sizeChanger:94}}},w={args:{total:150,showQuickJumper:!0,showSizeChanger:!0,disabled:!0}},S={render:()=>{const[r,l]=t.useState(3);return a.jsxs("div",{children:[a.jsx(C,{total:200,current:r,onChange:s=>l(s)}),a.jsxs("div",{style:{marginTop:8},children:["当前页: ",String(r)]})]})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    total: 234
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    total: 123,
    showSizeChanger: true
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    total: 78,
    showQuickJumper: true
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    total: 100,
    align: 'center'
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    total: 100,
    align: 'right'
  }
}`,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    total: 150,
    showQuickJumper: true,
    showSizeChanger: true,
    locale: en,
    width: {
      sizeChanger: 94
    }
  }
}`,...j.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    total: 150,
    showQuickJumper: true,
    showSizeChanger: true,
    disabled: true
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = React.useState(3);
    return <div>
        <Pagination total={200} current={page} onChange={p => setPage(p)} />
        <div style={{
        marginTop: 8
      }}>当前页: {String(page)}</div>
      </div>;
  }
}`,...S.parameters?.docs?.source}}};const U=["Default","WithSizeChanger","WithQuickJumper","AlignCenter","AlignRight","WithEnglish","Disabled","Controlled"];export{x as AlignCenter,y as AlignRight,S as Controlled,f as Default,w as Disabled,j as WithEnglish,b as WithQuickJumper,v as WithSizeChanger,U as __namedExportsOrder,H as default};
