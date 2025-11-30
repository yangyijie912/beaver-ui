import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as w,R as re}from"./iframe-tE7EJGsz.js";import"./preload-helper-PPVm8Dsz.js";function ke({controlledValue:r,defaultValue:a}){const[i,l]=w.useState(r??a);return w.useEffect(()=>{r!==void 0&&l(r)},[r]),{internalValue:i,setInternalValue:l}}function Ne({options:r,query:a,userTyped:i,filterOption:l,searchBy:c="both",allowCreate:b=!1,multiple:h=!1,filterSelected:x=!1,internalValue:o}){const d=Array.isArray(o)?o:[],n=w.useMemo(()=>{if(!a||!i){const v=r;return h&&x?v.filter(V=>!d.includes(V.value)):v}const m=a.trim().toLowerCase();if(l)return r.filter(v=>l(m,v));if(c==="label")return r.filter(v=>v.label.toLowerCase().includes(m));if(c==="value")return r.filter(v=>v.value.toLowerCase().includes(m));const f=r.filter(v=>v.label.toLowerCase().includes(m)),_=r.filter(v=>!v.label.toLowerCase().includes(m)&&v.value.toLowerCase().includes(m)),R=[...f,..._];return h&&x?R.filter(v=>!d.includes(v.value)):R},[r,a,i,l,c,h,x,o]),u=w.useMemo(()=>{const m=n,f=a.trim();return b&&f&&m.length===0?[{label:f,value:f,__isNew:!0}]:m},[n,b,a]);return{filteredOptions:n,displayOptions:u}}function Me({displayOptions:r,open:a,setOpen:i,handleSelectByValue:l,isDisabled:c=!1,onBackspace:b,onChar:h}){const[x,o]=w.useState(null),d=w.useCallback(n=>{if(!c){if(a&&n.key==="Backspace"&&(n.preventDefault(),b)){b(n);return}if(a&&n.key.length===1&&!n.ctrlKey&&!n.metaKey&&!n.altKey&&h){n.preventDefault(),h(n);return}if(n.key==="ArrowDown"){if(n.preventDefault(),!a){i(!0);return}o(u=>{const m=r,f=u===null?-1:u;for(let _=f+1;_<m.length;_++)if(!m[_].disabled)return _;return u})}else if(n.key==="ArrowUp"){if(n.preventDefault(),!a){i(!0);return}o(u=>{const m=r,f=u===null?m.length:u;for(let _=f-1;_>=0;_--)if(!m[_].disabled)return _;return u})}else if(n.key==="Enter"||n.key===" "){if(n.preventDefault(),!a)i(!0);else if(x!==null){const u=r[x];u&&!u.disabled&&l(u.value)}}else if(n.key==="Escape")i(!1);else if(n.key==="Home"){n.preventDefault();const u=r.findIndex(m=>!m.disabled);o(u>=0?u:0)}else if(n.key==="End"){n.preventDefault();const u=r.map(m=>m.disabled?-1:1).lastIndexOf(1);o(u>=0?u:r.length-1)}}},[r,a,i,l,x,c,b,h]);return{highlighted:x,setHighlighted:o,onKeyDown:d}}function Ee(r=700,a){const i=w.useRef(null),l=a??w.useRef(!1);function c(){i.current&&(window.clearTimeout(i.current),i.current=null)}function b(o){c(),i.current=window.setTimeout(()=>o(""),r)}function h({query:o,setQuery:d,options:n,setHighlighted:u}){const f=l.current?o.slice(0,-1):"";l.current=!0,d(f),b(d);const R=(f?n.filter(v=>v.label.toLowerCase().includes(f.trim().toLowerCase())||v.value.toLowerCase().includes(f.trim().toLowerCase())):n).findIndex(v=>!v.disabled);u(R>=0?R:0)}function x({key:o,query:d,setQuery:n,options:u,multiple:m,searchable:f,setHighlighted:_}){const R=!l.current&&!m&&f?o:d+o;l.current=!0,n(R),b(n);const v=R.trim().toLowerCase(),C=(v?u.filter(E=>E.label.toLowerCase().includes(v)||E.value.toLowerCase().includes(v)):u).findIndex(E=>!E.disabled);_(C>=0?C:0)}return{handleBackspace:h,handleChar:x,clear:c,userTypedRef:l}}const de=({id:r,option:a,index:i,highlighted:l,isSelected:c,onMouseEnter:b,onMouseDown:h,renderHighlightedLabel:x})=>{const o=a.__isNew===!0,d=a.disabled;return t.jsxs("li",{id:r,role:"option","aria-disabled":d,"aria-selected":c,className:`beaver-select__option ${c?"beaver-select__option--selected":""} ${d?"beaver-select__option--disabled":""} ${l===i?"beaver-select__option--highlighted":""} ${o?"beaver-select__option--new":""}`,"data-disabled":d?"true":void 0,tabIndex:-1,onMouseEnter:()=>{d||b(i)},onMouseDown:n=>{d||(n.preventDefault(),n.stopPropagation(),h(n,a.value,d))},onPointerDown:n=>{a.disabled||(n.preventDefault(),n.stopPropagation(),h(n,a.value,d))},onTouchStart:n=>{a.disabled||(n.preventDefault(),n.stopPropagation(),h(n,a.value,d))},onClick:n=>n.stopPropagation(),children:[t.jsx("span",{className:"beaver-select__opt-prefix",children:c?"✔":""}),t.jsx("span",{className:"beaver-select__opt-label",children:o?t.jsx("span",{className:"beaver-select__create-label",children:`使用 "${a.label}"`}):x(a.label)})]},a.value)};de.__docgenInfo={description:"",methods:[],displayName:"OptionItem",props:{id:{required:!0,tsType:{name:"string"},description:""},option:{required:!0,tsType:{name:"intersection",raw:"SelectOption & { __isNew?: true }",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:"{ __isNew?: true }",signature:{properties:[{key:"__isNew",value:{name:"literal",value:"true",required:!1}}]}}]},description:""},index:{required:!0,tsType:{name:"number"},description:""},highlighted:{required:!0,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:""},isSelected:{required:!0,tsType:{name:"boolean"},description:""},onMouseEnter:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},onMouseDown:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent, value: string, disabled?: boolean) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"},{type:{name:"string"},name:"value"},{type:{name:"boolean"},name:"disabled"}],return:{name:"void"}}},description:""},renderHighlightedLabel:{required:!0,tsType:{name:"signature",type:"function",raw:"(label: string) => React.ReactNode",signature:{arguments:[{type:{name:"string"},name:"label"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""}}};const pe=({menuOptions:r,highlighted:a,internalValue:i,onHighlight:l,onSelectByValue:c,renderHighlightedLabel:b,noDataLabel:h,listRef:x})=>t.jsxs("ul",{role:"listbox",className:"beaver-select__menu",ref:x,tabIndex:-1,"aria-activedescendant":a!==null?`beaver-select-opt-${a}`:void 0,onPointerDownCapture:o=>{const d=o.composedPath?o.composedPath():o.composedPath?.();d&&Array.isArray(d)&&d.some(u=>u&&u.getAttribute&&u.getAttribute("data-disabled")==="true")&&(o.preventDefault(),o.stopPropagation())},onTouchStartCapture:o=>{const d=o.composedPath?o.composedPath():o.composedPath?.();d&&Array.isArray(d)&&d.some(u=>u&&u.getAttribute&&u.getAttribute("data-disabled")==="true")&&(o.preventDefault(),o.stopPropagation())},children:[r.map((o,d)=>{const u=o.__isNew===!0?`__create-${o.value}`:o.value,m=Array.isArray(i)?i.includes(o.value):o.value===i;return t.jsx(de,{id:`beaver-select-opt-${d}`,option:o,index:d,highlighted:a,isSelected:m,onMouseEnter:f=>l(f),onMouseDown:(f,_,R)=>{R||c(o.value)},renderHighlightedLabel:b},u)}),r.length===0&&t.jsx("li",{className:"beaver-select__option beaver-select__no-data","aria-disabled":!0,children:t.jsx("span",{className:"beaver-select__opt-label",children:h??"暂无数据"})},"__no_data_or_match")]});pe.__docgenInfo={description:"",methods:[],displayName:"OptionList",props:{menuOptions:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(SelectOption & { __isNew?: true })[]"},description:""},highlighted:{required:!0,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:""},internalValue:{required:!1,tsType:{name:"union",raw:"string | string[] | undefined",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"undefined"}]},description:""},onHighlight:{required:!0,tsType:{name:"signature",type:"function",raw:"(i: number) => void",signature:{arguments:[{type:{name:"number"},name:"i"}],return:{name:"void"}}},description:""},onSelectByValue:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},renderHighlightedLabel:{required:!0,tsType:{name:"signature",type:"function",raw:"(label: string) => React.ReactNode",signature:{arguments:[{type:{name:"string"},name:"label"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},noDataLabel:{required:!1,tsType:{name:"string"},description:"空数据时显示的提示文字，外部负责根据上下文（searchable/userTyped/query/options.length）计算"},listRef:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLUListElement>",elements:[{name:"HTMLUListElement"}]},description:"可选的 ul ref，供父组件（Select）聚焦或滚动使用"}}};const me=({values:r,options:a,onRemove:i})=>t.jsx("div",{className:"beaver-select__tags",children:r.map(l=>t.jsxs("span",{className:"beaver-select__tag",onClick:c=>c.stopPropagation(),children:[t.jsx("span",{className:"beaver-select__tag-label",children:a.find(c=>c.value===l)?.label??l}),t.jsx("button",{type:"button","aria-label":`remove ${l}`,className:"beaver-select__tag-remove",onClick:c=>{c.stopPropagation(),i(l,c)},children:"×"})]},l))});me.__docgenInfo={description:"",methods:[],displayName:"Tags",props:{values:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"SelectOption[]"},description:""},onRemove:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string, e?: React.MouseEvent) => void",signature:{arguments:[{type:{name:"string"},name:"value"},{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:""}}};const fe=({multiple:r,query:a,onChangeEvent:i,searchRef:l,onKeyDown:c,onFocus:b,onBlur:h,placeholder:x,selectedValues:o=[],options:d=[],removeTag:n,onMouseDown:u,onClick:m})=>r?t.jsxs("div",{className:"beaver-select__tags-input",onMouseDown:u,onClick:m,children:[t.jsx(me,{values:o,options:d,onRemove:n??(()=>{})}),t.jsx("input",{ref:l,className:"beaver-select__input",value:a,onChange:f=>i?i(f):void 0,onFocus:b,onBlur:h,onKeyDown:c,placeholder:o.length===0&&!a?x:""})]}):t.jsx("input",{ref:l,className:"beaver-select__input",value:a,onChange:f=>i?i(f):void 0,onFocus:b,onBlur:h,onKeyDown:c,onMouseDown:f=>f.stopPropagation(),onClick:f=>f.stopPropagation(),placeholder:x});fe.__docgenInfo={description:"",methods:[],displayName:"SearchInput",props:{multiple:{required:!1,tsType:{name:"boolean"},description:""},query:{required:!0,tsType:{name:"string"},description:""},onChangeEvent:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:"接收原生 input 的 ChangeEvent。父组件可通过事件对象读取 value 并决定如何处理（例如替换行为）"},searchRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLInputElement | null>",elements:[{name:"union",raw:"HTMLInputElement | null",elements:[{name:"HTMLInputElement"},{name:"null"}]}]},description:"允许传入可能为 null 的 ref（Select 中常用 RefObject<HTMLInputElement | null>）"},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},selectedValues:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"SelectOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},removeTag:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string, e?: React.MouseEvent) => void",signature:{arguments:[{type:{name:"string"},name:"value"},{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},onMouseDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:""}}};const M=({options:r=[],placeholder:a="请选择",value:i,defaultValue:l,onChange:c,searchable:b=!1,allowCreate:h=!1,filterOption:x,searchBy:o="both",disabled:d=!1,loading:n=!1,icon:u,loadingIcon:m,className:f,size:_="medium",name:R,width:v,style:V,multiple:C=!1,filterSelected:E=!1,...ve})=>{const[A,D]=w.useState(!1),[j,q]=w.useState(""),{internalValue:y,setInternalValue:L}=ke({controlledValue:i,defaultValue:l}),ae=w.useRef(null),ge=w.useRef(null),ue=w.useRef(null),ne=w.useRef(null),O=w.useRef(!1),N=w.useRef(!1),{handleBackspace:ye,handleChar:be}=Ee(700,N),[Le,se]=w.useState(!1);w.useEffect(()=>{function e(s){ae.current&&(ae.current.contains(s.target)||D(!1))}return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[A]);const{displayOptions:P}=Ne({options:r,query:j,userTyped:N.current,filterOption:x,searchBy:o,allowCreate:h,multiple:C,filterSelected:E,internalValue:y});function he(e){const s=j.trim();if(!s)return e;const p=e.toLowerCase().indexOf(s.toLowerCase());if(p===-1)return e;const T=e.slice(0,p),B=e.slice(p,p+s.length),qe=e.slice(p+s.length);return t.jsxs(t.Fragment,{children:[T,t.jsx("span",{className:"beaver-select__match",children:B}),qe]})}w.useEffect(()=>{if(!A){if(O.current){O.current=!1,k(null);return}if(h&&j.trim()){const e=j.trim(),s=r.find(g=>g.value===e||g.label===e);s&&!s.disabled?(i===void 0&&L(s.value),c?.(s.value)):(i===void 0&&L(e),c?.(e))}q(""),k(null)}},[A]),w.useEffect(()=>()=>{ue.current&&window.clearTimeout(ue.current)},[]);const le=Array.isArray(y)?r.find(e=>e.value===y[0]):r.find(e=>e.value===y),ie=Array.isArray(y)?y:[],H=d||n;function we(){H||D(e=>!e)}function I(e){const s=r.find(p=>p.value===e);if(s&&s.disabled)return;if(C===!0){const p=Array.isArray(y)?[...y]:[],T=p.indexOf(e);T>=0?p.splice(T,1):p.push(e),i===void 0&&L(p),c?.(p),q(""),O.current=!0,E&&D(!1);return}i===void 0&&L(e),c?.(e),b&&(N.current=!1),q(""),O.current=!0,D(!1)}const{highlighted:oe,setHighlighted:k,onKeyDown:xe}=Me({displayOptions:P,open:A,setOpen:D,handleSelectByValue:I,isDisabled:H,onBackspace:e=>{e.preventDefault(),ye({query:j,setQuery:q,options:r,setHighlighted:k})},onChar:e=>{e.preventDefault(),be({key:e.key,query:j,setQuery:q,options:r,multiple:C,searchable:b,setHighlighted:k})}});w.useEffect(()=>{if(A&&oe===null){const e=P,s=e.findIndex(p=>Array.isArray(y)?y.includes(p.value):p.value===y),g=e.findIndex(p=>!p.disabled);k(s>=0?s:g>=0?g:0)}A&&b&&setTimeout(()=>ne.current?.focus(),0)},[A]);const _e=P;function ce(e,s){s?.stopPropagation();const g=Array.isArray(y)?[...y]:[],p=g.indexOf(e);p>=0&&g.splice(p,1),i===void 0&&L(g),c?.(g)}const Te=(e,s)=>{ce(e,s)},Re=e=>{N.current=!0,q(e.target.value),k(0)},Ce=e=>{const s=e.target.value;if(!N.current&&!C&&b){let g=s.replace(j,"");g===""&&(g=s),N.current=!0,q(g),k(0);return}N.current=!0,q(s),k(0)},je=()=>{se(!0),!N.current&&b&&!C&&j&&setTimeout(()=>ne.current?.select(),0)},Se=e=>{if(e.stopPropagation(),O.current){O.current=!1,se(!1);return}const s=j.trim();if(h&&s){const g=r.find(p=>p.value===s||p.label===s);g&&!g.disabled?C?I(g.value):(i===void 0&&L(g.value),c?.(g.value)):C?I(s):(i===void 0&&L(s),c?.(s))}q(""),se(!1)},Ae=e=>{if(e.stopPropagation(),e.key==="ArrowDown")e.preventDefault(),k(s=>{const g=P,p=s===null?-1:s;for(let T=p+1;T<g.length;T++)if(!g[T].disabled)return T;return s});else if(e.key==="ArrowUp")e.preventDefault(),k(s=>{const g=P,p=s===null?g.length:s;for(let T=p-1;T>=0;T--)if(!g[T].disabled)return T;return s});else if(e.key==="Enter"){e.preventDefault();const s=j.trim();if(h&&s&&!r.find(B=>B.value===s||B.label===s)){I(s),q("");return}const p=P[oe??0];p&&!p.disabled&&I(p.value)}else e.key==="Escape"&&D(!1)};return t.jsxs("div",{className:["beaver-select-wrapper",`beaver-select--${_}`,H?"beaver-select--disabled":"",A?"beaver-select--open":"",f||""].filter(Boolean).join(" "),ref:ae,"aria-disabled":H,style:{...V,...v!==void 0?{width:typeof v=="number"?`${v}px`:v}:{}},children:[t.jsxs("div",{role:"button",className:"beaver-select__control","aria-haspopup":"listbox","aria-expanded":A,onClick:we,onKeyDown:xe,tabIndex:H?-1:0,...ve,children:[t.jsx("div",{className:"beaver-select__display",children:b&&A?t.jsx(fe,{multiple:C,query:j,onChangeEvent:C?Re:Ce,searchRef:ne,onKeyDown:Ae,onFocus:je,onBlur:Se,placeholder:j?"":y&&!Array.isArray(y)?r.find(e=>e.value===y)?.label??String(y):a,selectedValues:ie,options:r,removeTag:Te,onMouseDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation()}):Array.isArray(y)?ie.length===0?t.jsx("span",{className:"beaver-select__value beaver-select__placeholder",children:a}):t.jsx("div",{className:"beaver-select__tags",children:ie.map(e=>t.jsxs("span",{className:"beaver-select__tag",onClick:s=>s.stopPropagation(),children:[t.jsx("span",{className:"beaver-select__tag-label",children:r.find(s=>s.value===e)?.label??e}),t.jsx("button",{type:"button","aria-label":`remove ${e}`,className:"beaver-select__tag-remove",onClick:s=>ce(e,s),children:"×"})]},e))}):t.jsx("span",{className:`beaver-select__value ${y??le?"":"beaver-select__placeholder"}`,children:y?r.find(e=>e.value===y)?.label??y:le?le.label:a})}),t.jsx("div",{className:"beaver-select__icons",children:n?m?t.jsx("span",{className:"beaver-select__loading-icon",children:m}):t.jsx("span",{className:"beaver-select__spinner","aria-hidden":!0}):u?t.jsx("span",{className:"beaver-select__icon",children:u}):t.jsx("span",{className:"beaver-select__arrow","aria-hidden":!0,children:t.jsx("svg",{className:"beaver-select__arrow-svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:t.jsx("path",{d:"M6 9l6 6 6-6",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})})})]}),A&&t.jsx(pe,{menuOptions:_e,highlighted:oe,internalValue:y,onHighlight:e=>k(e),onSelectByValue:e=>I(e),renderHighlightedLabel:he,noDataLabel:r.length===0?"暂无数据":b&&N.current&&j.trim()?"无匹配项":"暂无数据",listRef:ge}),C===!0?t.jsx("select",{name:R,multiple:!0,style:{display:"none"},"aria-hidden":!0,children:r.map(e=>t.jsx("option",{value:e.value,selected:Array.isArray(y)?y.includes(e.value):!1,children:e.label},e.value))}):t.jsx("select",{name:R,value:(Array.isArray(y)?y[0]:y)??"",onChange:e=>{I(e.target.value)},style:{display:"none"},"aria-hidden":!0})]})};M.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"SelectOption[]"},description:"下拉选项列表",defaultValue:{value:"[]",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"占位符",defaultValue:{value:"'请选择'",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"单选时为 string，复选时为 string[]"},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"默认值"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:"事件回调，参数为选中的值"},multiple:{required:!1,tsType:{name:"boolean"},description:"是否支持多选",defaultValue:{value:"false",computed:!1}},searchable:{required:!1,tsType:{name:"boolean"},description:"是否在下拉中显示搜索框",defaultValue:{value:"false",computed:!1}},allowCreate:{required:!1,tsType:{name:"boolean"},description:"是否允许在没有匹配项时创建自定义输入项（默认 false）",defaultValue:{value:"false",computed:!1}},filterOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: string, option: SelectOption) => boolean",signature:{arguments:[{type:{name:"string"},name:"input"},{type:{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}},name:"option"}],return:{name:"boolean"}}},description:"定制过滤函数：如果提供，将优先使用"},searchBy:{required:!1,tsType:{name:"union",raw:"'label' | 'value' | 'both'",elements:[{name:"literal",value:"'label'"},{name:"literal",value:"'value'"},{name:"literal",value:"'both'"}]},description:"搜索策略：'label' 只按 label 搜索，'value' 只按 value，'both' 按 label 与 value 搜索但优先 label 匹配",defaultValue:{value:"'both'",computed:!1}},filterSelected:{required:!1,tsType:{name:"boolean"},description:"仅在 `multiple` 为 true 时生效：在下拉中隐藏已选项，并在每次多选后关闭下拉。",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"是否加载中",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"自定义箭头/后缀图标（传入 ReactNode）"},loadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"自定义 loading 图标（传入 ReactNode），优先于默认 spinner"},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"直接设置组件宽度，支持 number(像素) 或 字符串(如 '50%','200px')"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"组件尺寸",defaultValue:{value:"'medium'",computed:!1}}}};const Pe={title:"Components/Select",component:M,decorators:[r=>t.jsx("div",{style:{"--beaver-select-width":"200px"},children:t.jsx(r,{})})]},S=[{label:"Apple",value:"apple"},{label:"Apricot",value:"apricot"},{label:"Banana",value:"banana"},{label:"Blueberry",value:"blueberry"},{label:"Blackberry",value:"blackberry"},{label:"Cherry",value:"cherry"},{label:"Cantaloupe",value:"cantaloupe"},{label:"Date",value:"date"},{label:"Fig",value:"fig"}],$={args:{options:S,placeholder:"请选择一个水果"}},F={args:{options:S,disabled:!0}},K={args:{options:[{label:"请选择",value:"",disabled:!0},{label:"自定义项 X",value:"x"},{label:"自定义项 Y",value:"y"}]}},W={args:{options:S,size:"small"}},U={args:{options:S,size:"large"}},z={args:{options:S,placeholder:"加载中...",loading:!0}},J={args:{options:S,placeholder:"搜索并选择水果",searchable:!0}},X={args:{options:S,placeholder:"输入不存在的项并回车创建",searchable:!0,allowCreate:!0,width:420}},Y={args:{options:S,placeholder:"Controlled: 可以创建",searchable:!0,allowCreate:!0},render:r=>{const[a,i]=re.useState(void 0);return t.jsxs("div",{style:{width:360},children:[t.jsx(M,{...r,width:420,value:a,onChange:l=>i(Array.isArray(l)?l[0]:l)}),t.jsxs("div",{style:{marginTop:12},children:["当前值: ",String(a)]})]})}},Q={args:{options:S,placeholder:"请选择"},render:r=>{const[a,i]=re.useState("banana");return t.jsxs("div",{style:{width:320},children:[t.jsx(M,{...r,value:a,onChange:l=>i(Array.isArray(l)?l[0]:l)}),t.jsxs("div",{style:{marginTop:12},children:["当前值: ",a]})]})}},G={render:r=>{const a=t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[t.jsx("circle",{cx:"12",cy:"12",r:"10",fill:"none",stroke:"currentColor",strokeWidth:"1.5"}),t.jsx("path",{d:"M8 10.5l4 4 4-4",fill:"currentColor"})]});return t.jsx("div",{children:t.jsx(M,{...r,options:S,placeholder:"自定义图标",icon:a})})}},Z={render:r=>{const a=t.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"2",strokeOpacity:"0.2",fill:"none"}),t.jsx("path",{d:"M22 12a10 10 0 0 0-10-10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",fill:"none",children:t.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 12 12",to:"360 12 12",dur:"0.9s",repeatCount:"indefinite"})})]});return t.jsx("div",{style:{width:320,"--beaver-select-arrow-offset":"1px"},children:t.jsx(M,{...r,options:S,placeholder:"加载中（自定义）",loading:!0,loadingIcon:a})})}},ee={args:{options:S,placeholder:"请选择多个水果",multiple:!0,searchable:!1,allowCreate:!1},render:r=>{const[a,i]=re.useState(["apple","banana"]);return t.jsxs("div",{style:{width:420},children:[t.jsx(M,{...r,width:420,value:a,onChange:l=>i(Array.isArray(l)?l:l?[l]:[])}),t.jsxs("div",{style:{marginTop:12},children:["当前值: ",JSON.stringify(a)]})]})}},te={args:{options:S,placeholder:"多选并隐藏已选项，选中后关闭",multiple:!0,searchable:!1,allowCreate:!1,filterSelected:!0},render:r=>{const[a,i]=re.useState(["apple"]);return t.jsxs("div",{style:{width:420},children:[t.jsx(M,{...r,width:420,value:a,onChange:l=>i(Array.isArray(l)?l:l?[l]:[])}),t.jsxs("div",{style:{marginTop:12},children:["当前值: ",JSON.stringify(a)]})]})}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    placeholder: '请选择一个水果'
  }
}`,...$.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    disabled: true
  }
}`,...F.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    size: 'small'
  }
}`,...W.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    size: 'large'
  }
}`,...U.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    placeholder: '加载中...',
    loading: true
  }
}`,...z.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    placeholder: '搜索并选择水果',
    searchable: true
  }
}`,...J.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    placeholder: '输入不存在的项并回车创建',
    searchable: true,
    allowCreate: true,
    width: 420
  }
}`,...X.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
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
}`,...ee.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
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
}`,...te.parameters?.docs?.source}}};const He=["Default","Disabled","WithDisabledOption","Small","Large","Loading","Searchable","AllowCreate","AllowCreateControlled","Controlled","CustomIcon","CustomLoadingAndOffset","Multiple","MultipleFilterSelected"];export{X as AllowCreate,Y as AllowCreateControlled,Q as Controlled,G as CustomIcon,Z as CustomLoadingAndOffset,$ as Default,F as Disabled,U as Large,z as Loading,ee as Multiple,te as MultipleFilterSelected,J as Searchable,W as Small,K as WithDisabledOption,He as __namedExportsOrder,Pe as default};
