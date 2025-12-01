import{j as a}from"./jsx-runtime-u17CrQMm.js";import{R as l}from"./iframe-DAXDzYD9.js";import{S as k}from"./Select-B91jBML_.js";import"./preload-helper-PPVm8Dsz.js";function w(n,o){const r=[];for(let m=n;m<=o;m++)r.push(m);return r}const x=({total:n,pageSize:o=10,current:r,onChange:m,pageSizeOptions:y=[10,20,50,100],showQuickJumper:N=!1,showSizeChanger:z=!1})=>{const[s,v]=l.useState(r??1),[u,_]=l.useState(o),c=Math.max(1,Math.ceil(n/u));l.useEffect(()=>{typeof r=="number"&&v(r)},[r]),l.useEffect(()=>{_(o)},[o]),l.useEffect(()=>{const e=Math.max(1,Math.ceil(n/u));s>e&&v(e)},[n,u]);const p=(e,t)=>{v(e),typeof m=="function"&&m(e,t??u)},C=()=>{if(c<=7)return w(1,c);const e=[],t=Math.max(2,s-2),i=Math.min(c-1,s+2);e.push(1),t>2&&e.push("...");for(let d=t;d<=i;d++)e.push(d);return i<c-1&&e.push("..."),e.push(c),e},j=l.useRef(null),S=()=>{const e=j.current;if(!e)return;const t=e.value.trim();if(t==="")return;const i=Number(t);if(Number.isFinite(i)){const d=Math.min(Math.max(1,Math.trunc(i)),Math.max(1,Math.ceil(n/u)));p(d)}e.value=""},M=C();return a.jsxs("div",{className:"beaver-pagination",children:[a.jsxs("div",{className:"beaver-pagination__controls",children:[a.jsx("button",{type:"button",className:"beaver-pagination__control",onClick:()=>p(Math.max(1,s-1)),disabled:s===1,"aria-label":"prev",children:"‹"}),a.jsx("ul",{className:"beaver-pagination__list",children:M.map((e,t)=>a.jsx("li",{children:e==="..."?a.jsx("span",{className:"beaver-pagination__dots",children:"…"}):a.jsx("button",{type:"button",className:["beaver-pagination__item",s===e?"beaver-pagination__item--active":""].filter(Boolean).join(" "),onClick:()=>p(e),"aria-current":s===e?"page":void 0,children:e})},String(e)+t))}),a.jsx("button",{type:"button",className:"beaver-pagination__control",onClick:()=>p(Math.min(c,s+1)),disabled:s===c,"aria-label":"next",children:"›"})]}),a.jsxs("div",{className:"beaver-pagination__extras",children:[z&&a.jsx("div",{className:"beaver-pagination__sizes",children:a.jsx(k,{options:y.map(e=>({label:`${e} / 页`,value:String(e)})),value:String(u),onChange:e=>{const t=Array.isArray(e)?e[0]:e,i=Number(t)||u;_(i),p(1,i)},size:"small",width:84,"aria-label":"page-size"})}),N&&a.jsx("div",{className:"beaver-pagination__jumper",children:a.jsxs("label",{children:["跳到",a.jsx("input",{name:"beaver-jump",ref:j,className:"beaver-pagination__jump-input",onKeyDown:e=>{e.key==="Enter"&&(e.preventDefault(),S())},onBlur:()=>{S()},"aria-label":"quick-jump"}),"页"]})})]})]})};x.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{total:{required:!0,tsType:{name:"number"},description:""},pageSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},current:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number, pageSize?: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"},{type:{name:"number"},name:"pageSize"}],return:{name:"void"}}},description:""},pageSizeOptions:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"",defaultValue:{value:"[10, 20, 50, 100]",computed:!1}},showQuickJumper:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showSizeChanger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const J={title:"Components/Pagination",component:x},g={args:{total:234}},h={args:{total:123,showSizeChanger:!0}},f={args:{total:78,showQuickJumper:!0}},b={render:()=>{const[n,o]=l.useState(3);return a.jsxs("div",{children:[a.jsx(x,{total:200,current:n,onChange:r=>o(r)}),a.jsxs("div",{style:{marginTop:8},children:["当前页: ",String(n)]})]})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    total: 234
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    total: 123,
    showSizeChanger: true
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    total: 78,
    showQuickJumper: true
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = React.useState(3);
    return <div>
        <Pagination total={200} current={page} onChange={p => setPage(p)} />
        <div style={{
        marginTop: 8
      }}>当前页: {String(page)}</div>
      </div>;
  }
}`,...b.parameters?.docs?.source}}};const R=["Default","WithSizeChanger","WithQuickJumper","Controlled"];export{b as Controlled,g as Default,f as WithQuickJumper,h as WithSizeChanger,R as __namedExportsOrder,J as default};
