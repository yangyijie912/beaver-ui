import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as w}from"./iframe-CkYmOMph.js";import{E as ge,T as ve,U as Fe,F as Se}from"./Spinner-Dq2vT7lv.js";import{B as fe}from"./Button-BcB96ueV.js";import"./preload-helper-PPVm8Dsz.js";const ye=()=>`${Date.now()}-${Math.random().toString(36).substr(2,9)}`,Ue=(r,n)=>{if(!n)return!0;const o=r.type,a=r.name,v=a.substring(a.lastIndexOf(".")).toLowerCase(),f=n.split(",").map(i=>i.trim());for(const i of f)if(i.startsWith(".")){if(v===i.toLowerCase())return!0}else if(i.endsWith("/*")){const h=i.substring(0,i.length-2);if(o.startsWith(h+"/"))return!0}else if(o===i)return!0;return!1},Le=(r,n,o,a)=>n&&!Ue(r,n)?{valid:!1,error:`不支持的文件类型: ${r.name}`}:o&&r.size>o?{valid:!1,error:a||"文件大小超出限制"}:{valid:!0},Re=(r,n,o,a,v,f,i,h,q,m,N,_,E,j,ie,te,oe)=>{const[D,P]=w.useState(oe||[]),U=(d,l,u={})=>{P(b=>{const s=b.map(p=>p.uid===d?{...p,status:l,...u}:p);return _?.(s),s})},le=d=>new Promise((l,u)=>{if(!r){u(new Error("未提供 action URL"));return}const b=new FormData;b.append(i,d.file),Object.entries(q).forEach(([p,x])=>{(typeof x=="string"||typeof x=="number"||typeof x=="boolean")&&b.append(p,String(x))});const s=new XMLHttpRequest;s.upload.addEventListener("progress",p=>{if(p.lengthComputable){const x=Math.round(p.loaded/p.total*100);U(d.uid,"uploading",{percent:x}),ie?.(p,{...d,percent:x})}}),s.addEventListener("load",()=>{if(s.status===200||s.status===201)try{const p=JSON.parse(s.responseText);l(p)}catch{l(s.responseText)}else u(new Error(`上传失败，状态码：${s.status}`))}),s.addEventListener("error",()=>{u(new Error("网络错误"))}),s.addEventListener("abort",()=>{u(new Error("上传已取消"))}),s.open("POST",r),Object.entries(h).forEach(([p,x])=>{s.setRequestHeader(p,x)}),s.send(b)}),se=async d=>{try{if(N&&!await N(d.file)){U(d.uid,"error",{error:"上传已取消"});return}U(d.uid,"uploading");let l;if(m)l=await m(d.file);else if(r)l=await le(d);else throw new Error("未提供 action 或 customRequest");U(d.uid,"success",{response:l}),E?.(l,{...d,status:"success",response:l})}catch(l){const u=l instanceof Error?l.message:"上传失败";U(d.uid,"error",{error:u}),j?.(l,{...d,status:"error",error:u})}};return{files:D,handleFileSelect:(d,l)=>{if(!d)return;const u=[];for(let s=0;s<d.length;s++){const p=d[s],{valid:x,error:k}=Le(p,v,a,f);if(!x){const ce={uid:ye(),name:p.name,file:p,status:"error",error:k};u.push(ce);continue}if(o&&D.length+u.length>=o)break;const C={uid:ye(),name:p.name,file:p,status:"ready"};u.push(C)}const b=n?[...D,...u]:u;P(b),_?.(b),l&&u.forEach(s=>se(s))},removeFile:d=>{P(l=>{const u=l.find(s=>s.uid===d);u&&te?.(u);const b=l.filter(s=>s.uid!==d);return _?.(b),b})},uploadFile:se}},Ne=(r,n,o)=>{const[a,v]=w.useState(!1);return{dragging:a,handleDragEnter:m=>{!r||n||(m.preventDefault(),m.stopPropagation(),v(!0))},handleDragLeave:m=>{!r||n||(m.preventDefault(),m.stopPropagation(),m.currentTarget===m.target&&v(!1))},handleDragOver:m=>{!r||n||(m.preventDefault(),m.stopPropagation())},handleDrop:m=>{!r||n||(m.preventDefault(),m.stopPropagation(),v(!1),o(m.dataTransfer.files))}}},ne=({file:r,url:n,onView:o,onRemove:a,isList:v=!1})=>{let f="";r.status==="error"?f="beaver-upload__thumb-inner--error":r.status==="success"?f="beaver-upload__thumb-inner--success":r.status==="uploading"&&(f="beaver-upload__thumb-inner--uploading");const i=r.file?.type||"",h=r.file?.name||r.name||"",q=n||"",m=/\.(png|jpe?g|gif|webp|bmp|svg)$/i,N=!!(i&&i.startsWith("image/")||m.test(h)||m.test(q)),_=h.match(/\.([^.]+)$/),E=_?_[1].toUpperCase().slice(0,4):"FILE";return e.jsxs("div",{className:"beaver-upload__thumb",children:[e.jsxs("div",{className:`beaver-upload__thumb-inner ${f}`,role:"img","aria-label":r.name,children:[N?e.jsx("img",{src:n,alt:r.name,className:"beaver-upload__thumb-img"}):e.jsx("div",{className:"beaver-upload__file-icon","aria-hidden":!0,children:e.jsx("div",{className:"beaver-upload__file-icon-label",children:E})}),!v&&e.jsxs("div",{className:"beaver-upload__thumb-overlay",children:[e.jsx("button",{type:"button",className:"beaver-upload__avatar-btn beaver-upload__avatar-btn--view",onClick:j=>{j.stopPropagation(),o(r)},"aria-label":"查看",children:e.jsx(ge,{width:16,height:16,"aria-hidden":!0})}),e.jsx("button",{type:"button",className:"beaver-upload__avatar-btn beaver-upload__avatar-btn--remove",onClick:j=>{j.stopPropagation(),a(r.uid)},"aria-label":"删除",children:e.jsx(ve,{width:16,height:16,"aria-hidden":!0})})]})]}),e.jsx("div",{className:"beaver-upload__thumb-body",children:e.jsx("div",{className:`beaver-upload__thumb-name ${r.status==="error"?"beaver-upload__thumb-name--error":""}`,children:r.name})}),v&&e.jsxs("div",{className:"beaver-upload__thumb-actions",children:[e.jsx("button",{type:"button",className:"beaver-upload__action-btn beaver-upload__action-btn--view",onClick:j=>{j.stopPropagation(),o(r)},"aria-label":"查看",children:e.jsx(ge,{width:16,height:16,"aria-hidden":!0})}),e.jsx("button",{type:"button",className:"beaver-upload__action-btn beaver-upload__action-btn--remove",onClick:j=>{j.stopPropagation(),a(r.uid)},"aria-label":"删除",children:e.jsx(ve,{width:16,height:16,"aria-hidden":!0})})]})]})};ne.__docgenInfo={description:"",methods:[],displayName:"Thumb",props:{file:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  /** 文件唯一标识符 */
  uid: string;
  /** 文件名 */
  name: string;
  /** 文件对象 */
  file: File;
  /** 上传状态：'ready' | 'uploading' | 'success' | 'error' */
  status: 'ready' | 'uploading' | 'success' | 'error';
  /** 上传进度百分比 (0-100) */
  percent?: number;
  /** 上传响应结果 */
  response?: any;
  /** 错误信息 */
  error?: string;
}`,signature:{properties:[{key:"uid",value:{name:"string",required:!0},description:"文件唯一标识符"},{key:"name",value:{name:"string",required:!0},description:"文件名"},{key:"file",value:{name:"File",required:!0},description:"文件对象"},{key:"status",value:{name:"union",raw:"'ready' | 'uploading' | 'success' | 'error'",elements:[{name:"literal",value:"'ready'"},{name:"literal",value:"'uploading'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"}],required:!0},description:"上传状态：'ready' | 'uploading' | 'success' | 'error'"},{key:"percent",value:{name:"number",required:!1},description:"上传进度百分比 (0-100)"},{key:"response",value:{name:"any",required:!1},description:"上传响应结果"},{key:"error",value:{name:"string",required:!1},description:"错误信息"}]}},description:""},url:{required:!1,tsType:{name:"string"},description:""},onView:{required:!0,tsType:{name:"signature",type:"function",raw:"(file: UploadFile) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  /** 文件唯一标识符 */
  uid: string;
  /** 文件名 */
  name: string;
  /** 文件对象 */
  file: File;
  /** 上传状态：'ready' | 'uploading' | 'success' | 'error' */
  status: 'ready' | 'uploading' | 'success' | 'error';
  /** 上传进度百分比 (0-100) */
  percent?: number;
  /** 上传响应结果 */
  response?: any;
  /** 错误信息 */
  error?: string;
}`,signature:{properties:[{key:"uid",value:{name:"string",required:!0},description:"文件唯一标识符"},{key:"name",value:{name:"string",required:!0},description:"文件名"},{key:"file",value:{name:"File",required:!0},description:"文件对象"},{key:"status",value:{name:"union",raw:"'ready' | 'uploading' | 'success' | 'error'",elements:[{name:"literal",value:"'ready'"},{name:"literal",value:"'uploading'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"}],required:!0},description:"上传状态：'ready' | 'uploading' | 'success' | 'error'"},{key:"percent",value:{name:"number",required:!1},description:"上传进度百分比 (0-100)"},{key:"response",value:{name:"any",required:!1},description:"上传响应结果"},{key:"error",value:{name:"string",required:!1},description:"错误信息"}]}},name:"file"}],return:{name:"void"}}},description:""},onRemove:{required:!0,tsType:{name:"signature",type:"function",raw:"(uid: string) => void",signature:{arguments:[{type:{name:"string"},name:"uid"}],return:{name:"void"}}},description:""},isList:{required:!1,tsType:{name:"boolean"},description:"是否是列表风格，会隐藏缩略图 overlay",defaultValue:{value:"false",computed:!1}}}};const pe=({onClick:r})=>e.jsx("div",{className:"beaver-upload__thumb",children:e.jsx("div",{className:"beaver-upload__thumb-inner beaver-upload__area--square",onClick:r,role:"button",tabIndex:0,onKeyDown:n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),r?.())},"aria-label":"上传",children:e.jsx(Fe,{width:32,height:32,style:{color:"#999",opacity:.6},"aria-hidden":!0})})});pe.__docgenInfo={description:"",methods:[],displayName:"TriggerSquare",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const y=w.forwardRef(({className:r="",action:n,multiple:o=!0,accept:a,showFileList:v=!0,disabled:f=!1,autoUpload:i=!0,onChange:h,beforeUpload:q,onSuccess:m,onError:N,onProgress:_,onRemove:E,customRequest:j,dragText:ie="拖拽文件到此处，或点击选择文件",buttonText:te="选择文件",maxCount:oe,maxSize:D,sizeLimitMessage:P="文件大小超出限制",headers:U={},fieldName:le="file",data:se={},variant:L="default",listType:M=L==="avatar"?"picture":"list",renderTrigger:d,children:l,...u},b)=>{const s=w.useRef(null),p=o,x=u?.defaultFileList,{files:k,handleFileSelect:de,removeFile:C}=Re(n,p,oe,D,a,P,le,U,se,j,q,h,m,N,_,E,x),ue=u?.drag,ce=ue===void 0?L==="drag":!!ue,{dragging:he,handleDragEnter:be,handleDragLeave:xe,handleDragOver:Te,handleDrop:ke}=Ne(ce,f,t=>{de(t,i),s.current&&(s.current.value="")}),we=t=>{de(t,i),s.current&&(s.current.value="")},je=t=>{we(t.target.files)},F=()=>{f||s.current?.click()},R=["beaver-upload"];L==="avatar"&&R.push("beaver-upload--avatar"),L==="drag"&&R.push("beaver-upload--drag"),M==="picture"&&R.push("beaver-upload--picture-list"),he&&R.push("beaver-upload--dragging"),f&&R.push("beaver-upload--disabled"),r&&R.push(r);let T=null;l?w.isValidElement(l)?T=w.cloneElement(l,{onClick:t=>{const g=l.props?.onClick;if(typeof g=="function")try{g(t)}catch{}F()},tabIndex:l.props?.tabIndex??0}):T=e.jsx("div",{className:"beaver-upload__trigger",onClick:F,role:"button",tabIndex:0,children:l}):d&&(T=d({open:F}));const[S,qe]=w.useState({}),V=w.useRef([]);w.useEffect(()=>{V.current.forEach(g=>{try{URL.revokeObjectURL(g)}catch{}}),V.current=[];const t={};return k.forEach(g=>{if(g.response?.url)t[g.uid]=g.response.url;else if(g.file){const c=URL.createObjectURL(g.file);t[g.uid]=c,V.current.push(c)}}),qe(t),()=>{V.current.forEach(g=>{try{URL.revokeObjectURL(g)}catch{}}),V.current=[]}},[k]);const{drag:Ce,..._e}=u;return e.jsxs("div",{ref:b,className:R.join(" "),onDragEnter:be,onDragOver:Te,onDragLeave:xe,onDrop:ke,..._e,children:[e.jsx("input",{ref:s,type:"file",multiple:p,accept:a,onChange:je,className:"beaver-upload__input",disabled:f,style:{display:"none"}}),e.jsx("div",{className:"beaver-upload__stack",children:L==="avatar"?e.jsx("div",{className:"beaver-upload__avatar-row",children:M==="picture"?e.jsxs("div",{className:"beaver-upload__thumb-grid",children:[k.length>0?k.map(t=>{const g=S[t.uid];return e.jsx(ne,{file:t,url:g,onView:()=>{const c=S[t.uid];c&&window.open(c,"_blank")},onRemove:c=>C(c),isList:!1},t.uid)}):null,!T&&e.jsx(pe,{onClick:F}),T&&e.jsx("div",{className:"beaver-upload__trigger-avatar",children:T})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"beaver-upload__trigger-avatar-container",children:[!T&&e.jsx(pe,{onClick:F}),T&&e.jsx("div",{className:"beaver-upload__trigger-avatar",children:T})]}),v&&k.length>0&&e.jsx("div",{className:"beaver-upload__file-list",children:k.map(t=>{const g=S[t.uid];return e.jsx(ne,{file:t,url:g,onView:()=>{const c=S[t.uid];c&&window.open(c,"_blank")},onRemove:c=>C(c),isList:!0},t.uid)})})]})}):L==="default"?e.jsxs(e.Fragment,{children:[T,!T&&e.jsx(fe,{className:"beaver-upload__button-default",disabled:f,onClick:F,children:te}),v&&k.length>0&&e.jsx("div",{className:"beaver-upload__file-list",children:k.map(t=>{const g=S[t.uid];return e.jsx(ne,{file:t,url:g,onView:()=>{const c=S[t.uid];c&&window.open(c,"_blank")},onRemove:c=>C(c),isList:M!=="picture"},t.uid)})})]}):e.jsxs(e.Fragment,{children:[T,!T&&e.jsxs("div",{className:"beaver-upload__area",onClick:F,children:[e.jsx("div",{className:"beaver-upload__icon","aria-hidden":"true",children:e.jsx(Se,{width:40,height:40,focusable:!1,"aria-hidden":!0})}),e.jsx("div",{className:"beaver-upload__text",children:ie}),e.jsx(fe,{disabled:f,onClick:t=>{t.stopPropagation(),F()},children:te})]}),v&&k.length>0&&e.jsx("div",{className:"beaver-upload__file-list",children:k.map(t=>{const g=S[t.uid];return e.jsx(ne,{file:t,url:g,onView:()=>{const c=S[t.uid];c&&window.open(c,"_blank")},onRemove:c=>C(c),isList:M!=="picture"},t.uid)})})]})})]})});y.displayName="Upload";y.__docgenInfo={description:"",methods:[],displayName:"Upload",props:{action:{required:!1,tsType:{name:"string"},description:"上传的 URL 端点"},multiple:{required:!1,tsType:{name:"boolean"},description:"是否支持多个文件上传",defaultValue:{value:"true",computed:!1}},accept:{required:!1,tsType:{name:"string"},description:`接受的文件类型，遵循 HTML input[type="file"] accept 属性规范
- 不指定此属性：不做限制，接受所有文件类型
- 单一类型：'image/jpeg' | 'image/*' | '.pdf'
- 多个类型：用逗号分隔，如 'image/*,.pdf,.doc,.docx'

@example
accept="image/*"                    // 所有图片
accept="image/jpeg,image/png"       // 仅 JPEG 和 PNG
accept=".pdf,.doc,.docx"            // 仅这些扩展名
accept="image/*,.pdf"               // 图片或 PDF`},showFileList:{required:!1,tsType:{name:"boolean"},description:"是否显示已上传文件列表",defaultValue:{value:"true",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用上传",defaultValue:{value:"false",computed:!1}},autoUpload:{required:!1,tsType:{name:"boolean"},description:"是否自动上传文件",defaultValue:{value:"true",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: UploadFile[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** 文件唯一标识符 */
  uid: string;
  /** 文件名 */
  name: string;
  /** 文件对象 */
  file: File;
  /** 上传状态：'ready' | 'uploading' | 'success' | 'error' */
  status: 'ready' | 'uploading' | 'success' | 'error';
  /** 上传进度百分比 (0-100) */
  percent?: number;
  /** 上传响应结果 */
  response?: any;
  /** 错误信息 */
  error?: string;
}`,signature:{properties:[{key:"uid",value:{name:"string",required:!0},description:"文件唯一标识符"},{key:"name",value:{name:"string",required:!0},description:"文件名"},{key:"file",value:{name:"File",required:!0},description:"文件对象"},{key:"status",value:{name:"union",raw:"'ready' | 'uploading' | 'success' | 'error'",elements:[{name:"literal",value:"'ready'"},{name:"literal",value:"'uploading'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"}],required:!0},description:"上传状态：'ready' | 'uploading' | 'success' | 'error'"},{key:"percent",value:{name:"number",required:!1},description:"上传进度百分比 (0-100)"},{key:"response",value:{name:"any",required:!1},description:"上传响应结果"},{key:"error",value:{name:"string",required:!1},description:"错误信息"}]}}],raw:"UploadFile[]"},name:"files"}],return:{name:"void"}}},description:"文件列表改变时的回调"},beforeUpload:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: File) => boolean | Promise<boolean>",signature:{arguments:[{type:{name:"File"},name:"file"}],return:{name:"union",raw:"boolean | Promise<boolean>",elements:[{name:"boolean"},{name:"Promise",elements:[{name:"boolean"}],raw:"Promise<boolean>"}]}}},description:"上传前的钩子，返回 false 则不上传"},onSuccess:{required:!1,tsType:{name:"signature",type:"function",raw:"(response: any, file: UploadFile) => void",signature:{arguments:[{type:{name:"any"},name:"response"},{type:{name:"signature",type:"object",raw:`{
  /** 文件唯一标识符 */
  uid: string;
  /** 文件名 */
  name: string;
  /** 文件对象 */
  file: File;
  /** 上传状态：'ready' | 'uploading' | 'success' | 'error' */
  status: 'ready' | 'uploading' | 'success' | 'error';
  /** 上传进度百分比 (0-100) */
  percent?: number;
  /** 上传响应结果 */
  response?: any;
  /** 错误信息 */
  error?: string;
}`,signature:{properties:[{key:"uid",value:{name:"string",required:!0},description:"文件唯一标识符"},{key:"name",value:{name:"string",required:!0},description:"文件名"},{key:"file",value:{name:"File",required:!0},description:"文件对象"},{key:"status",value:{name:"union",raw:"'ready' | 'uploading' | 'success' | 'error'",elements:[{name:"literal",value:"'ready'"},{name:"literal",value:"'uploading'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"}],required:!0},description:"上传状态：'ready' | 'uploading' | 'success' | 'error'"},{key:"percent",value:{name:"number",required:!1},description:"上传进度百分比 (0-100)"},{key:"response",value:{name:"any",required:!1},description:"上传响应结果"},{key:"error",value:{name:"string",required:!1},description:"错误信息"}]}},name:"file"}],return:{name:"void"}}},description:"上传成功的回调"},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"(error: Error, file: UploadFile) => void",signature:{arguments:[{type:{name:"Error"},name:"error"},{type:{name:"signature",type:"object",raw:`{
  /** 文件唯一标识符 */
  uid: string;
  /** 文件名 */
  name: string;
  /** 文件对象 */
  file: File;
  /** 上传状态：'ready' | 'uploading' | 'success' | 'error' */
  status: 'ready' | 'uploading' | 'success' | 'error';
  /** 上传进度百分比 (0-100) */
  percent?: number;
  /** 上传响应结果 */
  response?: any;
  /** 错误信息 */
  error?: string;
}`,signature:{properties:[{key:"uid",value:{name:"string",required:!0},description:"文件唯一标识符"},{key:"name",value:{name:"string",required:!0},description:"文件名"},{key:"file",value:{name:"File",required:!0},description:"文件对象"},{key:"status",value:{name:"union",raw:"'ready' | 'uploading' | 'success' | 'error'",elements:[{name:"literal",value:"'ready'"},{name:"literal",value:"'uploading'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"}],required:!0},description:"上传状态：'ready' | 'uploading' | 'success' | 'error'"},{key:"percent",value:{name:"number",required:!1},description:"上传进度百分比 (0-100)"},{key:"response",value:{name:"any",required:!1},description:"上传响应结果"},{key:"error",value:{name:"string",required:!1},description:"错误信息"}]}},name:"file"}],return:{name:"void"}}},description:"上传失败的回调"},onProgress:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ProgressEvent, file: UploadFile) => void",signature:{arguments:[{type:{name:"ProgressEvent"},name:"event"},{type:{name:"signature",type:"object",raw:`{
  /** 文件唯一标识符 */
  uid: string;
  /** 文件名 */
  name: string;
  /** 文件对象 */
  file: File;
  /** 上传状态：'ready' | 'uploading' | 'success' | 'error' */
  status: 'ready' | 'uploading' | 'success' | 'error';
  /** 上传进度百分比 (0-100) */
  percent?: number;
  /** 上传响应结果 */
  response?: any;
  /** 错误信息 */
  error?: string;
}`,signature:{properties:[{key:"uid",value:{name:"string",required:!0},description:"文件唯一标识符"},{key:"name",value:{name:"string",required:!0},description:"文件名"},{key:"file",value:{name:"File",required:!0},description:"文件对象"},{key:"status",value:{name:"union",raw:"'ready' | 'uploading' | 'success' | 'error'",elements:[{name:"literal",value:"'ready'"},{name:"literal",value:"'uploading'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"}],required:!0},description:"上传状态：'ready' | 'uploading' | 'success' | 'error'"},{key:"percent",value:{name:"number",required:!1},description:"上传进度百分比 (0-100)"},{key:"response",value:{name:"any",required:!1},description:"上传响应结果"},{key:"error",value:{name:"string",required:!1},description:"错误信息"}]}},name:"file"}],return:{name:"void"}}},description:"上传中的回调（进度更新）"},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: UploadFile) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  /** 文件唯一标识符 */
  uid: string;
  /** 文件名 */
  name: string;
  /** 文件对象 */
  file: File;
  /** 上传状态：'ready' | 'uploading' | 'success' | 'error' */
  status: 'ready' | 'uploading' | 'success' | 'error';
  /** 上传进度百分比 (0-100) */
  percent?: number;
  /** 上传响应结果 */
  response?: any;
  /** 错误信息 */
  error?: string;
}`,signature:{properties:[{key:"uid",value:{name:"string",required:!0},description:"文件唯一标识符"},{key:"name",value:{name:"string",required:!0},description:"文件名"},{key:"file",value:{name:"File",required:!0},description:"文件对象"},{key:"status",value:{name:"union",raw:"'ready' | 'uploading' | 'success' | 'error'",elements:[{name:"literal",value:"'ready'"},{name:"literal",value:"'uploading'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"}],required:!0},description:"上传状态：'ready' | 'uploading' | 'success' | 'error'"},{key:"percent",value:{name:"number",required:!1},description:"上传进度百分比 (0-100)"},{key:"response",value:{name:"any",required:!1},description:"上传响应结果"},{key:"error",value:{name:"string",required:!1},description:"错误信息"}]}},name:"file"}],return:{name:"void"}}},description:"移除文件时的回调"},customRequest:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: File) => Promise<any>",signature:{arguments:[{type:{name:"File"},name:"file"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:"自定义上传函数，返回 Promise"},dragText:{required:!1,tsType:{name:"string"},description:"拖拽上传的提示文本",defaultValue:{value:"'拖拽文件到此处，或点击选择文件'",computed:!1}},buttonText:{required:!1,tsType:{name:"string"},description:"上传按钮的文本",defaultValue:{value:"'选择文件'",computed:!1}},maxCount:{required:!1,tsType:{name:"number"},description:"最大上传文件数"},maxSize:{required:!1,tsType:{name:"number"},description:"最大文件大小（字节）"},sizeLimitMessage:{required:!1,tsType:{name:"string"},description:"文件大小超限的错误提示",defaultValue:{value:"'文件大小超出限制'",computed:!1}},headers:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:"自定义 HTTP 请求头",defaultValue:{value:"{}",computed:!1}},fieldName:{required:!1,tsType:{name:"string"},description:"自定义表单字段名称",defaultValue:{value:"'file'",computed:!1}},data:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"any"}],raw:"Record<string, any>"},description:"其他自定义数据，会附加到请求中",defaultValue:{value:"{}",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'avatar' | 'drag'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'avatar'"},{name:"literal",value:"'drag'"}]},description:"内置样式变体：'default' | 'avatar' | 'drag'",defaultValue:{value:"'default'",computed:!1}},listType:{required:!1,tsType:{name:"union",raw:"'list' | 'picture'",elements:[{name:"literal",value:"'list'"},{name:"literal",value:"'picture'"}]},description:"文件列表展示风格：'list' | 'picture'，默认为 'list'",defaultValue:{value:"variant === 'avatar' ? 'picture' : 'list'",computed:!1}},defaultFileList:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** 文件唯一标识符 */
  uid: string;
  /** 文件名 */
  name: string;
  /** 文件对象 */
  file: File;
  /** 上传状态：'ready' | 'uploading' | 'success' | 'error' */
  status: 'ready' | 'uploading' | 'success' | 'error';
  /** 上传进度百分比 (0-100) */
  percent?: number;
  /** 上传响应结果 */
  response?: any;
  /** 错误信息 */
  error?: string;
}`,signature:{properties:[{key:"uid",value:{name:"string",required:!0},description:"文件唯一标识符"},{key:"name",value:{name:"string",required:!0},description:"文件名"},{key:"file",value:{name:"File",required:!0},description:"文件对象"},{key:"status",value:{name:"union",raw:"'ready' | 'uploading' | 'success' | 'error'",elements:[{name:"literal",value:"'ready'"},{name:"literal",value:"'uploading'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"}],required:!0},description:"上传状态：'ready' | 'uploading' | 'success' | 'error'"},{key:"percent",value:{name:"number",required:!1},description:"上传进度百分比 (0-100)"},{key:"response",value:{name:"any",required:!1},description:"上传响应结果"},{key:"error",value:{name:"string",required:!1},description:"错误信息"}]}}],raw:"UploadFile[]"},description:"初始文件列表（用于示例或受控场景）"},renderTrigger:{required:!1,tsType:{name:"signature",type:"function",raw:"(controls: { open: () => void }) => React.ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ open: () => void }",signature:{properties:[{key:"open",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},name:"controls"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:"自定义触发渲染函数，接收 open 方法"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"自定义触发节点（优先于 variant 的内置触发）"},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const ze={title:"Components/Upload",component:y,tags:["autodocs"],parameters:{docs:{description:{component:`Upload 组件
- 使用场景：用于文件上传功能
- 支持单文件和多文件上传
- 支持拖拽上传
- 支持文件验证（大小、类型等）
- 支持自定义上传端点和上传函数
- 显示上传进度和文件列表
- 支持多种风格（按钮、拖拽区、头像上传等）
- 支持自定义触发节点渲染`}}}},me=[{uid:"demo-1",name:"landscape.png",status:"success",response:{url:"https://picsum.photos/300/300"}},{uid:"demo-2",name:"avatar.jpg",status:"uploading",percent:48,response:{url:"https://picsum.photos/300/300"}},{uid:"avatar-1",name:"report.pdf",status:"success",response:{url:""}},{uid:"avatar-2",name:"notes.txt",status:"error",error:"上传失败"}],z={name:"基础上传",args:{action:"/api/upload",buttonText:"上传"}},W={name:"拖拽风格",render:r=>e.jsx("div",{style:{width:500},children:e.jsx(y,{...r,variant:"drag"})}),args:{dragText:"拖拽文件到此处，或点击选择文件",buttonText:"选择文件"}},A={name:"头像风格",render:r=>e.jsx("div",{children:e.jsx(y,{...r,variant:"avatar"})})},B={name:"简易按钮风格+图片展示",render:r=>e.jsx("div",{style:{width:500},children:e.jsx(y,{...r,listType:"picture"})}),args:{buttonText:"选择文件",defaultFileList:me}},I={name:"拖拽风格+图片展示",render:r=>e.jsx("div",{style:{width:500},children:e.jsx(y,{...r,variant:"drag",listType:"picture"})}),args:{dragText:"拖拽文件到此处，或点击选择文件",buttonText:"选择文件",defaultFileList:me}},O={name:"头像风格+列表展示",render:r=>e.jsx("div",{children:e.jsx(y,{...r,variant:"avatar",listType:"list"})}),args:{defaultFileList:me}},H={name:"单文件上传",args:{action:"/api/upload",multiple:!1,buttonText:"选择单个文件"}},$={name:"限制文件数量",args:{action:"/api/upload",maxCount:3,buttonText:"最多上传 3 个文件"}},G={name:"限制文件类型",args:{action:"/api/upload",accept:"image/*",buttonText:"只支持图片文件"}},J={name:"限制文件大小",args:{action:"/api/upload",maxSize:1024*1024,sizeLimitMessage:"文件大小不超过 1MB",dragText:"拖拽文件到此处（最大 1MB）",variant:"drag"}},K={name:"禁用拖拽",args:{action:"/api/upload",drag:!1,dragText:"点击下方按钮选择文件",buttonText:"点击选择文件",variant:"drag"}},X={name:"禁用状态",render:r=>e.jsxs("div",{style:{display:"grid",gap:24,width:500},children:[e.jsx(y,{...r,variant:"default",buttonText:"默认风格（禁用）"}),e.jsx(y,{...r,variant:"avatar"}),e.jsx(y,{...r,variant:"drag",dragText:"拖拽风格（禁用）"})]}),args:{disabled:!0}},Q={name:"隐藏文件列表",args:{action:"/api/upload",showFileList:!1}},Y={name:"带回调事件",render:r=>{const n=i=>(console.log("上传前钩子:",i.name),!0),o=(i,h)=>{console.log("上传成功:",h.name,i)},a=(i,h)=>{console.log("上传失败:",h.name,i.message)},v=(i,h)=>{const q=Math.round(i.loaded/i.total*100);console.log(`${h.name} 上传进度: ${q}%`)},f=i=>{console.log("已移除:",i.name)};return e.jsx(y,{...r,beforeUpload:n,onSuccess:o,onError:a,onProgress:v,onRemove:f})},args:{action:"/api/upload",dragText:"拖拽文件到此处",buttonText:"选择文件"}},Z={name:"手动上传",render:r=>{const[n,o]=w.useState([]),a=()=>{console.log("手动上传",n)};return e.jsxs("div",{children:[e.jsx(y,{...r,autoUpload:!1,onChange:v=>o(v)}),e.jsx("button",{onClick:a,style:{marginTop:"12px",padding:"8px 16px",cursor:"pointer"},children:"提交上传"})]})},args:{dragText:'拖拽文件到此处，点击"提交上传"按钮手动上传'}},ee={name:"自定义上传函数",render:r=>{const n=async o=>new Promise(a=>{setTimeout(()=>{console.log("自定义上传完成:",o.name),a({success:!0,filename:o.name})},2e3)});return e.jsx(y,{...r,customRequest:n})},args:{dragText:"使用自定义上传函数",buttonText:"选择文件"}},re={name:"完全自定义样式",render:r=>{const[n,o]=w.useState([]);return e.jsxs("div",{style:{width:360},children:[e.jsx(y,{...r,onChange:a=>o(a),children:e.jsxs("div",{role:"button",tabIndex:0,onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&a.currentTarget.click()},style:{display:"flex",alignItems:"center",gap:12,padding:"14px 18px",borderRadius:12,background:"linear-gradient(90deg,#ffecd2,#fcb69f)",cursor:"pointer",boxShadow:"0 8px 20px rgba(0,0,0,0.08)",userSelect:"none"},children:[e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12 3v10",stroke:"#5b3bdb",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M8 7l4-4 4 4",stroke:"#5b3bdb",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M20 21H4a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2z",stroke:"#5b3bdb",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})]}),e.jsxs("div",{style:{lineHeight:1},children:[e.jsx("div",{style:{fontWeight:700,color:"#3b2f7a"},children:"上传你的创意文件"}),e.jsx("div",{style:{fontSize:12,color:"#4a4a4a"},children:"支持 PNG / JPG / PDF • 点击或拖拽上传"})]})]})}),e.jsxs("div",{style:{marginTop:12,fontSize:13,color:"#222"},children:[e.jsx("strong",{children:"已选文件："}),n.length?e.jsx("ul",{style:{margin:"6px 0 0",paddingLeft:18},children:n.map(a=>e.jsx("li",{style:{fontSize:13},children:a.name},a.uid||a.name))}):e.jsx("span",{style:{marginLeft:6,color:"#666"},children:"未选择任何文件"})]})]})},args:{action:"/api/upload"}},ae={name:"自定义触发",render:r=>{const[n,o]=w.useState([]);return e.jsxs("div",{style:{width:320},children:[e.jsx(y,{...r,onChange:a=>o(a),renderTrigger:({open:a})=>e.jsx("a",{onClick:a,style:{cursor:"pointer",color:"#0eaae0"},children:"自定义触发（renderTrigger）"})}),e.jsxs("div",{style:{marginTop:12,fontSize:13},children:[e.jsx("strong",{children:"已选文件："}),n.length?e.jsx("span",{style:{marginLeft:6},children:n.map(a=>a.name).join(", ")}):e.jsx("span",{style:{marginLeft:6,color:"#666"},children:"未选择任何文件"})]})]})},parameters:{docs:{source:{code:`import React from 'react';
import Upload from './Upload';

export const RenderTriggerExample = () => {
  const [files, setFiles] = React.useState([]);

  return (
    <div style={{ width: 320 }}>
      <Upload
        action="/api/upload"
        onChange={(list) => setFiles(list)}
        renderTrigger={({ open }) => (
          <a onClick={open} style={{ cursor: 'pointer', color: '#0eaae0' }}>
            自定义触发（renderTrigger）
          </a>
        )}
      />

      <div style={{ marginTop: 12 }}>
        <strong>已选文件：</strong>
        {files.length ? files.map((f) => f.name).join(', ') : '未选择任何文件'}
      </div>
    </div>
  );
};
`}}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: '基础上传',
  args: {
    action: '/api/upload',
    buttonText: '上传'
  }
}`,...z.parameters?.docs?.source},description:{story:`基础上传
- 通过 buttonText 设置按钮文本`,...z.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: '拖拽风格',
  render: (args: UploadArgs) => <div style={{
    width: 500
  }}>
      <Upload {...args} variant="drag" />
    </div>,
  args: {
    dragText: '拖拽文件到此处，或点击选择文件',
    buttonText: '选择文件'
  }
}`,...W.parameters?.docs?.source},description:{story:`拖拽风格
- 通过设置 variant="drag" 启用拖拽上传风格
- 通过 dragText 自定义提示文本`,...W.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: '头像风格',
  render: (args: UploadArgs) => <div>
      <Upload {...args} variant="avatar" />
    </div>
}`,...A.parameters?.docs?.source},description:{story:`头像风格
- 通过设置 variant="avatar" 启用头像上传风格`,...A.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: '简易按钮风格+图片展示',
  render: (args: UploadArgs) => <div style={{
    width: 500
  }}>
      <Upload {...args} listType="picture" />
    </div>,
  args: {
    buttonText: '选择文件',
    defaultFileList
  }
}`,...B.parameters?.docs?.source},description:{story:`简易按钮风格（默认） + 图片展示
- 通过设置 listType="picture" 启用图片展示风格`,...B.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: '拖拽风格+图片展示',
  render: (args: UploadArgs) => <div style={{
    width: 500
  }}>
      <Upload {...args} variant="drag" listType="picture" />
    </div>,
  args: {
    dragText: '拖拽文件到此处，或点击选择文件',
    buttonText: '选择文件',
    defaultFileList
  }
}`,...I.parameters?.docs?.source},description:{story:"拖拽风格 + 图片展示",...I.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: '头像风格+列表展示',
  render: (args: UploadArgs) => <div>
      <Upload {...args} variant="avatar" listType="list" />
    </div>,
  args: {
    defaultFileList
  }
}`,...O.parameters?.docs?.source},description:{story:`头像风格 + 列表展示
- 通过设置 listType="list" 启用列表展示风格`,...O.parameters?.docs?.description}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: '单文件上传',
  args: {
    action: '/api/upload',
    multiple: false,
    buttonText: '选择单个文件'
  }
}`,...H.parameters?.docs?.source},description:{story:`单文件上传
- 通过设置 multiple=false 限制为单文件上传，反复上传只会更新文件`,...H.parameters?.docs?.description}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: '限制文件数量',
  args: {
    action: '/api/upload',
    maxCount: 3,
    buttonText: '最多上传 3 个文件'
  }
}`,...$.parameters?.docs?.source},description:{story:`限制文件数量
- 通过设置 maxCount 限制最大上传文件数`,...$.parameters?.docs?.description}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: '限制文件类型',
  args: {
    action: '/api/upload',
    accept: 'image/*',
    buttonText: '只支持图片文件'
  }
}`,...G.parameters?.docs?.source},description:{story:`限制文件类型
- 通过设置 accept 限制可上传的文件类型`,...G.parameters?.docs?.description}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: '限制文件大小',
  args: {
    action: '/api/upload',
    maxSize: 1024 * 1024,
    // 1MB
    sizeLimitMessage: '文件大小不超过 1MB',
    dragText: '拖拽文件到此处（最大 1MB）',
    variant: 'drag'
  }
}`,...J.parameters?.docs?.source},description:{story:`限制文件大小
- 通过设置 maxSize 限制单个文件的最大大小
- 通过 sizeLimitMessage 自定义超限时的错误提示`,...J.parameters?.docs?.description}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: '禁用拖拽',
  args: {
    action: '/api/upload',
    drag: false,
    dragText: '点击下方按钮选择文件',
    buttonText: '点击选择文件',
    variant: 'drag'
  }
}`,...K.parameters?.docs?.source},description:{story:`无拖拽功能
- 通过设置 drag=false 禁用拖拽上传功能`,...K.parameters?.docs?.description}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: '禁用状态',
  render: (args: UploadArgs) => <div style={{
    display: 'grid',
    gap: 24,
    width: 500
  }}>
      <Upload {...args} variant="default" buttonText="默认风格（禁用）" />
      <Upload {...args} variant="avatar" />
      <Upload {...args} variant="drag" dragText="拖拽风格（禁用）" />
    </div>,
  args: {
    disabled: true
  }
}`,...X.parameters?.docs?.source},description:{story:"不同风格的禁用状态",...X.parameters?.docs?.description}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: '隐藏文件列表',
  args: {
    action: '/api/upload',
    showFileList: false
  }
}`,...Q.parameters?.docs?.source},description:{story:"隐藏文件列表",...Q.parameters?.docs?.description}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: '带回调事件',
  render: (args: UploadArgs) => {
    const handleBeforeUpload = (file: File) => {
      console.log('上传前钩子:', file.name);
      return true;
    };
    const handleSuccess = (response: any, file: any) => {
      console.log('上传成功:', file.name, response);
    };
    const handleError = (error: Error, file: any) => {
      console.log('上传失败:', file.name, error.message);
    };
    const handleProgress = (event: ProgressEvent, file: any) => {
      const percent = Math.round(event.loaded / event.total * 100);
      console.log(\`\${file.name} 上传进度: \${percent}%\`);
    };
    const handleRemove = (file: any) => {
      console.log('已移除:', file.name);
    };
    return <Upload {...args} beforeUpload={handleBeforeUpload} onSuccess={handleSuccess} onError={handleError} onProgress={handleProgress} onRemove={handleRemove} />;
  },
  args: {
    action: '/api/upload',
    dragText: '拖拽文件到此处',
    buttonText: '选择文件'
  }
}`,...Y.parameters?.docs?.source},description:{story:"带回调事件",...Y.parameters?.docs?.description}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: '手动上传',
  render: (args: UploadArgs) => {
    const [files, setFiles] = React.useState<any[]>([]);
    const handleUpload = () => {
      console.log('手动上传', files);
    };
    return <div>
        <Upload {...args} autoUpload={false} onChange={uploadFiles => setFiles(uploadFiles)} />
        <button onClick={handleUpload} style={{
        marginTop: '12px',
        padding: '8px 16px',
        cursor: 'pointer'
      }}>
          提交上传
        </button>
      </div>;
  },
  args: {
    dragText: '拖拽文件到此处，点击"提交上传"按钮手动上传'
  }
}`,...Z.parameters?.docs?.source},description:{story:`手动上传
- 设置 autoUpload={false}
- 通过 onChange 把选中的文件列表回调给父组件，但不会自动发起上传
- 适用场景：需要在父组件中做额外处理后再上传（例如先校验、预览、合并表单数据或用户确认）
- 组件只负责文件选择和列表管理，不负责实际发送请求，上传操作需手动控制`,...Z.parameters?.docs?.description}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  name: '自定义上传函数',
  render: (args: UploadArgs) => {
    const customRequest = async (file: File) => {
      // 模拟上传延迟
      return new Promise(resolve => {
        setTimeout(() => {
          console.log('自定义上传完成:', file.name);
          resolve({
            success: true,
            filename: file.name
          });
        }, 2000);
      });
    };
    return <Upload {...args} customRequest={customRequest} />;
  },
  args: {
    dragText: '使用自定义上传函数',
    buttonText: '选择文件'
  }
}`,...ee.parameters?.docs?.source},description:{story:`自定义上传函数
- 通过 customRequest 提供自定义上传逻辑，替代默认的网络上传逻辑
- 适用场景：需要使用特殊的上传协议或 SDK，用 fetch/axios、上传到第三方服务、分片上传、带特殊表单字段等，或需要在上传前后做额外处理`,...ee.parameters?.docs?.description}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
  name: '完全自定义样式',
  render: (args: UploadArgs) => {
    const [files, setFiles] = React.useState<any[]>([]);
    return <div style={{
      width: 360
    }}>
        <Upload {...args} onChange={f => setFiles(f)}>
          <div role="button" tabIndex={0} onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            (e.currentTarget as HTMLElement).click();
          }
        }} style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '14px 18px',
          borderRadius: 12,
          background: 'linear-gradient(90deg,#ffecd2,#fcb69f)',
          cursor: 'pointer',
          boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
          userSelect: 'none'
        }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3v10" stroke="#5b3bdb" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 7l4-4 4 4" stroke="#5b3bdb" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20 21H4a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2z" stroke="#5b3bdb" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div style={{
            lineHeight: 1
          }}>
              <div style={{
              fontWeight: 700,
              color: '#3b2f7a'
            }}>上传你的创意文件</div>
              <div style={{
              fontSize: 12,
              color: '#4a4a4a'
            }}>支持 PNG / JPG / PDF • 点击或拖拽上传</div>
            </div>
          </div>
        </Upload>

        <div style={{
        marginTop: 12,
        fontSize: 13,
        color: '#222'
      }}>
          <strong>已选文件：</strong>
          {files.length ? <ul style={{
          margin: '6px 0 0',
          paddingLeft: 18
        }}>
              {files.map(f => <li key={f.uid || f.name} style={{
            fontSize: 13
          }}>
                  {f.name}
                </li>)}
            </ul> : <span style={{
          marginLeft: 6,
          color: '#666'
        }}>未选择任何文件</span>}
        </div>
      </div>;
  },
  args: {
    action: '/api/upload'
  }
}`,...re.parameters?.docs?.source},description:{story:"children 完全自定义样式",...re.parameters?.docs?.description}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  name: '自定义触发',
  render: (args: UploadArgs) => {
    const [files, setFiles] = React.useState<any[]>([]);
    return <div style={{
      width: 320
    }}>
        <Upload {...args} onChange={list => setFiles(list)} renderTrigger={({
        open
      }) => <a onClick={open} style={{
        cursor: 'pointer',
        color: '#0eaae0'
      }}>
              自定义触发（renderTrigger）
            </a>} />

        <div style={{
        marginTop: 12,
        fontSize: 13
      }}>
          <strong>已选文件：</strong>
          {files.length ? <span style={{
          marginLeft: 6
        }}>{files.map(f => f.name).join(', ')}</span> : <span style={{
          marginLeft: 6,
          color: '#666'
        }}>未选择任何文件</span>}
        </div>
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`import React from 'react';
import Upload from './Upload';

export const RenderTriggerExample = () => {
  const [files, setFiles] = React.useState([]);

  return (
    <div style={{ width: 320 }}>
      <Upload
        action="/api/upload"
        onChange={(list) => setFiles(list)}
        renderTrigger={({ open }) => (
          <a onClick={open} style={{ cursor: 'pointer', color: '#0eaae0' }}>
            自定义触发（renderTrigger）
          </a>
        )}
      />

      <div style={{ marginTop: 12 }}>
        <strong>已选文件：</strong>
        {files.length ? files.map((f) => f.name).join(', ') : '未选择任何文件'}
      </div>
    </div>
  );
};
\`
      }
    }
  }
}`,...ae.parameters?.docs?.source},description:{story:`函数式插槽 renderTrigger 示例
- 通过 renderTrigger 自定义触发节点渲染
- 当想完全自定义触发器（外观、事件、样式）但仍希望复用 Upload 的文件选择/管理逻辑时使用
- 提供的 open 方法用于打开文件选择对话框`,...ae.parameters?.docs?.description}}};const We=["Basic","DragStyle","AvatarStyle","DefaultButtonWithPicture","DragStyleWithPicture","AvatarStyleWithList","SingleFile","LimitFileCount","LimitFileType","LimitFileSize","NoDrag","DisabledVariants","HideFileList","WithCallbacks","ManualUpload","CustomUpload","CustomTriggerChildrenStyled","RenderTrigger"];export{A as AvatarStyle,O as AvatarStyleWithList,z as Basic,re as CustomTriggerChildrenStyled,ee as CustomUpload,B as DefaultButtonWithPicture,X as DisabledVariants,W as DragStyle,I as DragStyleWithPicture,Q as HideFileList,$ as LimitFileCount,J as LimitFileSize,G as LimitFileType,Z as ManualUpload,K as NoDrag,ae as RenderTrigger,H as SingleFile,Y as WithCallbacks,We as __namedExportsOrder,ze as default};
