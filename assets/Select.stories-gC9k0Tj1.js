import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as h,R as ae}from"./iframe-9oBnMDtl.js";import"./preload-helper-PPVm8Dsz.js";function ke({controlledValue:a,defaultValue:t}){const[l,s]=h.useState(a??t);return h.useEffect(()=>{a!==void 0&&s(a)},[a]),{internalValue:l,setInternalValue:s}}function Ne({options:a,query:t,userTyped:l,filterOption:s,searchBy:o="both",allowCreate:g=!1,multiple:b=!1,filterSelected:x=!1,internalValue:u}){const w=Array.isArray(u)?u:[],i=h.useMemo(()=>{if(!t||!l){const c=a;return b&&x?c.filter(P=>!w.includes(P.value)):c}const y=t.trim().toLowerCase();if(s)return a.filter(c=>s(y,c));if(o==="label")return a.filter(c=>c.label.toLowerCase().includes(y));if(o==="value")return a.filter(c=>c.value.toLowerCase().includes(y));const m=a.filter(c=>c.label.toLowerCase().includes(y)),L=a.filter(c=>!c.label.toLowerCase().includes(y)&&c.value.toLowerCase().includes(y)),C=[...m,...L];return b&&x?C.filter(c=>!w.includes(c.value)):C},[a,t,l,s,o,b,x,u]),f=h.useMemo(()=>{const y=i,m=t.trim();return g&&m&&y.length===0?[{label:m,value:m,__isNew:!0}]:y},[i,g,t]);return{filteredOptions:i,displayOptions:f}}function Ae({displayOptions:a,open:t,setOpen:l,handleSelectByValue:s,isDisabled:o=!1,onBackspace:g,onChar:b}){const[x,u]=h.useState(null),w=h.useCallback(i=>{if(!o){if(t&&i.key==="Backspace"&&(i.preventDefault(),g)){g(i);return}if(t&&i.key.length===1&&!i.ctrlKey&&!i.metaKey&&!i.altKey&&b){i.preventDefault(),b(i);return}if(i.key==="ArrowDown"){if(i.preventDefault(),!t){l(!0);return}u(f=>f===null?0:Math.min(a.length-1,f+1))}else if(i.key==="ArrowUp"){if(i.preventDefault(),!t){l(!0);return}u(f=>f===null?Math.max(0,a.length-1):Math.max(0,f-1))}else if(i.key==="Enter"||i.key===" "){if(i.preventDefault(),!t)l(!0);else if(x!==null){const f=a[x];f&&s(f.value)}}else if(i.key==="Escape")l(!1);else if(i.key==="Home"){i.preventDefault();const f=a.findIndex(y=>!y.disabled);u(f>=0?f:0)}else i.key==="End"&&(i.preventDefault(),u(a.length-1))}},[a,t,l,s,x,o,g,b]);return{highlighted:x,setHighlighted:u,onKeyDown:w}}function Ee(a=700,t){const l=h.useRef(null),s=t??h.useRef(!1);function o(){l.current&&(window.clearTimeout(l.current),l.current=null)}function g(u){o(),l.current=window.setTimeout(()=>u(""),a)}function b({query:u,setQuery:w,options:i,setHighlighted:f}){const m=s.current?u.slice(0,-1):"";s.current=!0,w(m),g(w);const C=(m?i.filter(c=>c.label.toLowerCase().includes(m.trim().toLowerCase())||c.value.toLowerCase().includes(m.trim().toLowerCase())):i).findIndex(c=>!c.disabled);f(C>=0?C:0)}function x({key:u,query:w,setQuery:i,options:f,multiple:y,searchable:m,setHighlighted:L}){const C=!s.current&&!y&&m?u:w+u;s.current=!0,i(C),g(i);const c=C.trim().toLowerCase(),_=(c?f.filter(N=>N.label.toLowerCase().includes(c)||N.value.toLowerCase().includes(c)):f).findIndex(N=>!N.disabled);L(_>=0?_:0)}return{handleBackspace:b,handleChar:x,clear:o,userTypedRef:s}}const de=({id:a,option:t,index:l,highlighted:s,isSelected:o,onMouseEnter:g,onMouseDown:b,renderHighlightedLabel:x})=>{const u=t.__isNew===!0,w=t.disabled;return r.jsxs("li",{id:a,role:"option","aria-selected":o,className:`beaver-select__option ${o?"beaver-select__option--selected":""} ${w?"beaver-select__option--disabled":""} ${s===l?"beaver-select__option--highlighted":""} ${u?"beaver-select__option--new":""}`,onMouseEnter:()=>g(l),onMouseDown:i=>{i.preventDefault(),i.stopPropagation(),!w&&b(i,t.value,w)},onClick:i=>i.stopPropagation(),children:[r.jsx("span",{className:"beaver-select__opt-prefix",children:o?"✔":""}),r.jsx("span",{className:"beaver-select__opt-label",children:u?r.jsx("span",{className:"beaver-select__create-label",children:`使用 "${t.label}"`}):x(t.label)})]},t.value)};de.__docgenInfo={description:"",methods:[],displayName:"OptionItem",props:{id:{required:!0,tsType:{name:"string"},description:""},option:{required:!0,tsType:{name:"intersection",raw:"SelectOption & { __isNew?: true }",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:"{ __isNew?: true }",signature:{properties:[{key:"__isNew",value:{name:"literal",value:"true",required:!1}}]}}]},description:""},index:{required:!0,tsType:{name:"number"},description:""},highlighted:{required:!0,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:""},isSelected:{required:!0,tsType:{name:"boolean"},description:""},onMouseEnter:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},onMouseDown:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent, value: string, disabled?: boolean) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"},{type:{name:"string"},name:"value"},{type:{name:"boolean"},name:"disabled"}],return:{name:"void"}}},description:""},renderHighlightedLabel:{required:!0,tsType:{name:"signature",type:"function",raw:"(label: string) => React.ReactNode",signature:{arguments:[{type:{name:"string"},name:"label"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""}}};const pe=({menuOptions:a,highlighted:t,internalValue:l,onHighlight:s,onSelectByValue:o,renderHighlightedLabel:g,noDataLabel:b,listRef:x})=>r.jsxs("ul",{role:"listbox",className:"beaver-select__menu",ref:x,tabIndex:-1,"aria-activedescendant":t!==null?`beaver-select-opt-${t}`:void 0,children:[a.map((u,w)=>{const f=u.__isNew===!0?`__create-${u.value}`:u.value,y=Array.isArray(l)?l.includes(u.value):u.value===l;return r.jsx(de,{id:`beaver-select-opt-${w}`,option:u,index:w,highlighted:t,isSelected:y,onMouseEnter:m=>s(m),onMouseDown:()=>o(u.value),renderHighlightedLabel:g},f)}),a.length===0&&r.jsx("li",{className:"beaver-select__option beaver-select__no-data","aria-disabled":!0,children:r.jsx("span",{className:"beaver-select__opt-label",children:b??"暂无数据"})},"__no_data_or_match")]});pe.__docgenInfo={description:"",methods:[],displayName:"OptionList",props:{menuOptions:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(SelectOption & { __isNew?: true })[]"},description:""},highlighted:{required:!0,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:""},internalValue:{required:!1,tsType:{name:"union",raw:"string | string[] | undefined",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"undefined"}]},description:""},onHighlight:{required:!0,tsType:{name:"signature",type:"function",raw:"(i: number) => void",signature:{arguments:[{type:{name:"number"},name:"i"}],return:{name:"void"}}},description:""},onSelectByValue:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},renderHighlightedLabel:{required:!0,tsType:{name:"signature",type:"function",raw:"(label: string) => React.ReactNode",signature:{arguments:[{type:{name:"string"},name:"label"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},noDataLabel:{required:!1,tsType:{name:"string"},description:"空数据时显示的提示文字，外部负责根据上下文（searchable/userTyped/query/options.length）计算"},listRef:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLUListElement>",elements:[{name:"HTMLUListElement"}]},description:"可选的 ul ref，供父组件（Select）聚焦或滚动使用"}}};const me=({values:a,options:t,onRemove:l})=>r.jsx("div",{className:"beaver-select__tags",children:a.map(s=>r.jsxs("span",{className:"beaver-select__tag",onClick:o=>o.stopPropagation(),children:[r.jsx("span",{className:"beaver-select__tag-label",children:t.find(o=>o.value===s)?.label??s}),r.jsx("button",{type:"button","aria-label":`remove ${s}`,className:"beaver-select__tag-remove",onClick:o=>{o.stopPropagation(),l(s,o)},children:"×"})]},s))});me.__docgenInfo={description:"",methods:[],displayName:"Tags",props:{values:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"SelectOption[]"},description:""},onRemove:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string, e?: React.MouseEvent) => void",signature:{arguments:[{type:{name:"string"},name:"value"},{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:""}}};const fe=({multiple:a,query:t,onChangeEvent:l,searchRef:s,onKeyDown:o,onFocus:g,onBlur:b,placeholder:x,selectedValues:u=[],options:w=[],removeTag:i,onMouseDown:f,onClick:y})=>a?r.jsxs("div",{className:"beaver-select__tags-input",onMouseDown:f,onClick:y,children:[r.jsx(me,{values:u,options:w,onRemove:i??(()=>{})}),r.jsx("input",{ref:s,className:"beaver-select__input",value:t,onChange:m=>l?l(m):void 0,onFocus:g,onBlur:b,onKeyDown:o,placeholder:u.length===0&&!t?x:""})]}):r.jsx("input",{ref:s,className:"beaver-select__input",value:t,onChange:m=>l?l(m):void 0,onFocus:g,onBlur:b,onKeyDown:o,onMouseDown:m=>m.stopPropagation(),onClick:m=>m.stopPropagation(),placeholder:x});fe.__docgenInfo={description:"",methods:[],displayName:"SearchInput",props:{multiple:{required:!1,tsType:{name:"boolean"},description:""},query:{required:!0,tsType:{name:"string"},description:""},onChangeEvent:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:"接收原生 input 的 ChangeEvent。父组件可通过事件对象读取 value 并决定如何处理（例如替换行为）"},searchRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLInputElement | null>",elements:[{name:"union",raw:"HTMLInputElement | null",elements:[{name:"HTMLInputElement"},{name:"null"}]}]},description:"允许传入可能为 null 的 ref（Select 中常用 RefObject<HTMLInputElement | null>）"},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},selectedValues:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"SelectOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},removeTag:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string, e?: React.MouseEvent) => void",signature:{arguments:[{type:{name:"string"},name:"value"},{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},onMouseDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:""}}};const k=({options:a=[],placeholder:t="请选择",value:l,defaultValue:s,onChange:o,searchable:g=!1,allowCreate:b=!1,filterOption:x,searchBy:u="both",disabled:w=!1,loading:i=!1,icon:f,loadingIcon:y,className:m,size:L="medium",name:C,width:c,style:P,multiple:_=!1,filterSelected:N=!1,...ve})=>{const[q,I]=h.useState(!1),[T,j]=h.useState(""),{internalValue:d,setInternalValue:A}=ke({controlledValue:l,defaultValue:s}),te=h.useRef(null),ge=h.useRef(null),ue=h.useRef(null),ne=h.useRef(null),O=h.useRef(!1),M=h.useRef(!1),{handleBackspace:ye,handleChar:be}=Ee(700,M),[Le,se]=h.useState(!1);h.useEffect(()=>{function e(n){te.current&&(te.current.contains(n.target)||I(!1))}return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const{displayOptions:D}=Ne({options:a,query:T,userTyped:M.current,filterOption:x,searchBy:u,allowCreate:b,multiple:_,filterSelected:N,internalValue:d});function he(e){const n=T.trim();if(!n)return e;const p=e.toLowerCase().indexOf(n.toLowerCase());if(p===-1)return e;const V=e.slice(0,p),B=e.slice(p,p+n.length),Me=e.slice(p+n.length);return r.jsxs(r.Fragment,{children:[V,r.jsx("span",{className:"beaver-select__match",children:B}),Me]})}h.useEffect(()=>{if(!q){if(O.current){O.current=!1,S(null);return}if(b&&T.trim()){const e=T.trim(),n=a.find(v=>v.value===e||v.label===e);n&&!n.disabled?(l===void 0&&A(n.value),o?.(n.value)):(l===void 0&&A(e),o?.(e))}j(""),S(null)}},[q]),h.useEffect(()=>()=>{ue.current&&window.clearTimeout(ue.current)},[]);const le=Array.isArray(d)?a.find(e=>e.value===d[0]):a.find(e=>e.value===d),ie=Array.isArray(d)?d:[],H=w||i;function we(){H||I(e=>!e)}function E(e){const n=a.find(p=>p.value===e);if(n&&n.disabled)return;if(_===!0){const p=Array.isArray(d)?[...d]:[],V=p.indexOf(e);V>=0?p.splice(V,1):p.push(e),l===void 0&&A(p),o?.(p),j(""),O.current=!0,N&&I(!1);return}l===void 0&&A(e),o?.(e),g&&(M.current=!1),j(""),O.current=!0,I(!1)}const{highlighted:oe,setHighlighted:S,onKeyDown:xe}=Ae({displayOptions:D,open:q,setOpen:I,handleSelectByValue:E,isDisabled:H,onBackspace:e=>{e.preventDefault(),ye({query:T,setQuery:j,options:a,setHighlighted:S})},onChar:e=>{e.preventDefault(),be({key:e.key,query:T,setQuery:j,options:a,multiple:_,searchable:g,setHighlighted:S})}});h.useEffect(()=>{if(q&&oe===null){const e=D,n=e.findIndex(p=>Array.isArray(d)?d.includes(p.value):p.value===d),v=e.findIndex(p=>!p.disabled);S(n>=0?n:v>=0?v:0)}q&&g&&setTimeout(()=>ne.current?.focus(),0)},[q]);const _e=D;function ce(e,n){n?.stopPropagation();const v=Array.isArray(d)?[...d]:[],p=v.indexOf(e);p>=0&&v.splice(p,1),l===void 0&&A(v),o?.(v)}const Te=(e,n)=>{ce(e,n)},Re=e=>{M.current=!0,j(e.target.value),S(0)},Ce=e=>{const n=e.target.value;if(!M.current&&!_&&g){let v=n.replace(T,"");v===""&&(v=n),M.current=!0,j(v),S(0);return}M.current=!0,j(n),S(0)},je=()=>{se(!0),!M.current&&g&&!_&&T&&setTimeout(()=>ne.current?.select(),0)},Se=e=>{if(e.stopPropagation(),O.current){O.current=!1,se(!1);return}const n=T.trim();if(b&&n){const v=a.find(p=>p.value===n||p.label===n);v&&!v.disabled?_?E(v.value):(l===void 0&&A(v.value),o?.(v.value)):_?E(n):(l===void 0&&A(n),o?.(n))}j(""),se(!1)},qe=e=>{if(e.stopPropagation(),e.key==="ArrowDown")e.preventDefault(),S(n=>n===null?0:Math.min(D.length-1,n+1));else if(e.key==="ArrowUp")e.preventDefault(),S(n=>n===null?Math.max(0,D.length-1):Math.max(0,n-1));else if(e.key==="Enter"){e.preventDefault();const n=T.trim();if(b&&n&&!a.find(B=>B.value===n||B.label===n)){E(n),j("");return}const p=D[oe??0];p&&E(p.value)}else e.key==="Escape"&&I(!1)};return r.jsxs("div",{className:["beaver-select-wrapper",`beaver-select--${L}`,H?"beaver-select--disabled":"",q?"beaver-select--open":"",m||""].filter(Boolean).join(" "),ref:te,"aria-disabled":H,style:{...P,...c!==void 0?{width:typeof c=="number"?`${c}px`:c}:{}},children:[r.jsxs("div",{role:"button",className:"beaver-select__control","aria-haspopup":"listbox","aria-expanded":q,onClick:we,onKeyDown:xe,tabIndex:H?-1:0,...ve,children:[r.jsx("div",{className:"beaver-select__display",children:g&&q?r.jsx(fe,{multiple:_,query:T,onChangeEvent:_?Re:Ce,searchRef:ne,onKeyDown:qe,onFocus:je,onBlur:Se,placeholder:T?"":d&&!Array.isArray(d)?a.find(e=>e.value===d)?.label??String(d):t,selectedValues:ie,options:a,removeTag:Te,onMouseDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation()}):Array.isArray(d)?ie.length===0?r.jsx("span",{className:"beaver-select__value beaver-select__placeholder",children:t}):r.jsx("div",{className:"beaver-select__tags",children:ie.map(e=>r.jsxs("span",{className:"beaver-select__tag",onClick:n=>n.stopPropagation(),children:[r.jsx("span",{className:"beaver-select__tag-label",children:a.find(n=>n.value===e)?.label??e}),r.jsx("button",{type:"button","aria-label":`remove ${e}`,className:"beaver-select__tag-remove",onClick:n=>ce(e,n),children:"×"})]},e))}):r.jsx("span",{className:`beaver-select__value ${d??le?"":"beaver-select__placeholder"}`,children:d?a.find(e=>e.value===d)?.label??d:le?le.label:t})}),r.jsx("div",{className:"beaver-select__icons",children:i?y?r.jsx("span",{className:"beaver-select__loading-icon",children:y}):r.jsx("span",{className:"beaver-select__spinner","aria-hidden":!0}):f?r.jsx("span",{className:"beaver-select__icon",children:f}):r.jsx("span",{className:"beaver-select__arrow","aria-hidden":!0,children:r.jsx("svg",{className:"beaver-select__arrow-svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:r.jsx("path",{d:"M6 9l6 6 6-6",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})})})]}),q&&r.jsx(pe,{menuOptions:_e,highlighted:oe,internalValue:d,onHighlight:e=>S(e),onSelectByValue:e=>E(e),renderHighlightedLabel:he,noDataLabel:a.length===0?"暂无数据":g&&M.current&&T.trim()?"无匹配项":"暂无数据",listRef:ge}),_===!0?r.jsx("select",{name:C,multiple:!0,style:{display:"none"},"aria-hidden":!0,children:a.map(e=>r.jsx("option",{value:e.value,selected:Array.isArray(d)?d.includes(e.value):!1,children:e.label},e.value))}):r.jsx("select",{name:C,value:(Array.isArray(d)?d[0]:d)??"",onChange:e=>{E(e.target.value)},style:{display:"none"},"aria-hidden":!0})]})};k.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"SelectOption[]"},description:"下拉选项列表",defaultValue:{value:"[]",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"占位符",defaultValue:{value:"'请选择'",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"单选时为 string，复选时为 string[]"},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"默认值"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:"事件回调，参数为选中的值"},multiple:{required:!1,tsType:{name:"boolean"},description:"是否支持多选",defaultValue:{value:"false",computed:!1}},searchable:{required:!1,tsType:{name:"boolean"},description:"是否在下拉中显示搜索框",defaultValue:{value:"false",computed:!1}},allowCreate:{required:!1,tsType:{name:"boolean"},description:"是否允许在没有匹配项时创建自定义输入项（默认 false）",defaultValue:{value:"false",computed:!1}},filterOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: string, option: SelectOption) => boolean",signature:{arguments:[{type:{name:"string"},name:"input"},{type:{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}},name:"option"}],return:{name:"boolean"}}},description:"定制过滤函数：如果提供，将优先使用"},searchBy:{required:!1,tsType:{name:"union",raw:"'label' | 'value' | 'both'",elements:[{name:"literal",value:"'label'"},{name:"literal",value:"'value'"},{name:"literal",value:"'both'"}]},description:"搜索策略：'label' 只按 label 搜索，'value' 只按 value，'both' 按 label 与 value 搜索但优先 label 匹配",defaultValue:{value:"'both'",computed:!1}},filterSelected:{required:!1,tsType:{name:"boolean"},description:"仅在 `multiple` 为 true 时生效：在下拉中隐藏已选项，并在每次多选后关闭下拉。",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"是否加载中",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"自定义箭头/后缀图标（传入 ReactNode）"},loadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"自定义 loading 图标（传入 ReactNode），优先于默认 spinner"},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"直接设置组件宽度，支持 number(像素) 或 字符串(如 '50%','200px')"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"组件尺寸",defaultValue:{value:"'medium'",computed:!1}}}};const He={title:"Components/Select",component:k},R=[{label:"Apple",value:"apple"},{label:"Apricot",value:"apricot"},{label:"Banana",value:"banana"},{label:"Blueberry",value:"blueberry"},{label:"Blackberry",value:"blackberry"},{label:"Cherry",value:"cherry"},{label:"Cantaloupe",value:"cantaloupe"},{label:"Date",value:"date"},{label:"Fig",value:"fig"}],$={args:{options:R,placeholder:"请选择一个水果"}},F={args:{options:R,disabled:!0}},K={args:{options:[{label:"请选择",value:"",disabled:!0},{label:"自定义项 X",value:"x"},{label:"自定义项 Y",value:"y"}]}},W={args:{options:R,size:"small"}},U={args:{options:R,size:"large"}},z={args:{options:R,placeholder:"加载中...",loading:!0}},J={args:{options:R,placeholder:"搜索并选择水果",searchable:!0}},X={args:{options:R,placeholder:"输入不存在的项并回车创建",searchable:!0,allowCreate:!0,width:420}},Y={args:{options:R,placeholder:"Controlled: 可以创建",searchable:!0,allowCreate:!0},render:a=>{const[t,l]=ae.useState(void 0);return r.jsxs("div",{style:{width:360},children:[r.jsx(k,{...a,width:420,value:t,onChange:s=>l(Array.isArray(s)?s[0]:s)}),r.jsxs("div",{style:{marginTop:12},children:["当前值: ",String(t)]})]})}},Q={args:{options:R,placeholder:"请选择"},render:a=>{const[t,l]=ae.useState("banana");return r.jsxs("div",{style:{width:320},children:[r.jsx(k,{...a,value:t,onChange:s=>l(Array.isArray(s)?s[0]:s)}),r.jsxs("div",{style:{marginTop:12},children:["当前值: ",t]})]})}},G={render:a=>{const t=r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[r.jsx("circle",{cx:"12",cy:"12",r:"10",fill:"none",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("path",{d:"M8 10.5l4 4 4-4",fill:"currentColor"})]});return r.jsx("div",{children:r.jsx(k,{...a,options:R,placeholder:"自定义图标",icon:t})})}},Z={render:a=>{const t=r.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"2",strokeOpacity:"0.2",fill:"none"}),r.jsx("path",{d:"M22 12a10 10 0 0 0-10-10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",fill:"none",children:r.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 12 12",to:"360 12 12",dur:"0.9s",repeatCount:"indefinite"})})]});return r.jsx("div",{style:{width:320,"--beaver-select-arrow-offset":"1px"},children:r.jsx(k,{...a,options:R,placeholder:"加载中（自定义）",loading:!0,loadingIcon:t})})}},ee={args:{options:R,placeholder:"请选择多个水果",multiple:!0,searchable:!1,allowCreate:!1},render:a=>{const[t,l]=ae.useState(["apple","banana"]);return r.jsxs("div",{style:{width:420},children:[r.jsx(k,{...a,width:420,value:t,onChange:s=>l(Array.isArray(s)?s:s?[s]:[])}),r.jsxs("div",{style:{marginTop:12},children:["当前值: ",JSON.stringify(t)]})]})}},re={args:{options:R,placeholder:"多选并隐藏已选项，选中后关闭",multiple:!0,searchable:!1,allowCreate:!1,filterSelected:!0},render:a=>{const[t,l]=ae.useState(["apple"]);return r.jsxs("div",{style:{width:420},children:[r.jsx(k,{...a,width:420,value:t,onChange:s=>l(Array.isArray(s)?s:s?[s]:[])}),r.jsxs("div",{style:{marginTop:12},children:["当前值: ",JSON.stringify(t)]})]})}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...ee.parameters?.docs?.source}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
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
}`,...re.parameters?.docs?.source}}};const Ve=["Default","Disabled","WithDisabledOption","Small","Large","Loading","Searchable","AllowCreate","AllowCreateControlled","Controlled","CustomIcon","CustomLoadingAndOffset","Multiple","MultipleFilterSelected"];export{X as AllowCreate,Y as AllowCreateControlled,Q as Controlled,G as CustomIcon,Z as CustomLoadingAndOffset,$ as Default,F as Disabled,U as Large,z as Loading,ee as Multiple,re as MultipleFilterSelected,J as Searchable,W as Small,K as WithDisabledOption,Ve as __namedExportsOrder,He as default};
