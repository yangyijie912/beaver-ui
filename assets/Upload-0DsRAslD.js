import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as h}from"./iframe-BkaH1BFQ.js";import{E as X,T as Q,U as ce,F as pe}from"./Spinner-_R1lyHu7.js";import{B as Y}from"./Button-BXcjrA2h.js";import{F as me}from"./Form-BsckqH4G.js";const Z=()=>`${Date.now()}-${Math.random().toString(36).substr(2,9)}`,ge=(r,d)=>{if(!d)return!0;const v=r.type,f=r.name,y=f.substring(f.lastIndexOf(".")).toLowerCase(),g=d.split(",").map(m=>m.trim());for(const m of g)if(m.startsWith(".")){if(y===m.toLowerCase())return!0}else if(m.endsWith("/*")){const k=m.substring(0,m.length-2);if(v.startsWith(k+"/"))return!0}else if(v===m)return!0;return!1},ve=(r,d,v,f)=>d&&!ge(r,d)?{valid:!1,error:`不支持的文件类型: ${r.name}`}:v&&r.size>v?{valid:!1,error:f||"文件大小超出限制"}:{valid:!0},fe=(r,d,v,f,y,g,m,k,D,o,L,x,C,_,B,z,H)=>{const[N,V]=h.useState(H||[]),R=(t,n,i={})=>{V(w=>w.map(l=>l.uid===t?{...l,status:n,...i}:l))},A=t=>new Promise((n,i)=>{if(!r){i(new Error("未提供 action URL"));return}const w=new FormData;w.append(m,t.file),Object.entries(D).forEach(([l,p])=>{(typeof p=="string"||typeof p=="number"||typeof p=="boolean")&&w.append(l,String(p))});const s=new XMLHttpRequest;s.upload.addEventListener("progress",l=>{if(l.lengthComputable){const p=Math.round(l.loaded/l.total*100);R(t.uid,"uploading",{percent:p}),B?.(l,{...t,percent:p})}}),s.addEventListener("load",()=>{if(s.status===200||s.status===201)try{const l=JSON.parse(s.responseText);n(l)}catch{n(s.responseText)}else i(new Error(`上传失败，状态码：${s.status}`))}),s.addEventListener("error",()=>{i(new Error("网络错误"))}),s.addEventListener("abort",()=>{i(new Error("上传已取消"))}),s.open("POST",r),Object.entries(k).forEach(([l,p])=>{s.setRequestHeader(l,p)}),s.send(w)}),M=async t=>{try{if(L&&!await L(t.file)){R(t.uid,"error",{error:"上传已取消"});return}R(t.uid,"uploading");let n;if(o)n=await o(t.file);else if(r)n=await A(t);else throw new Error("未提供 action 或 customRequest");R(t.uid,"success",{response:n}),C?.(n,{...t,status:"success",response:n})}catch(n){const i=n instanceof Error?n.message:"上传失败";R(t.uid,"error",{error:i}),_?.(n,{...t,status:"error",error:i})}},j=(t,n)=>{if(!t)return;const i=[];for(let s=0;s<t.length;s++){const l=t[s],{valid:p,error:$}=ve(l,y,f,g);if(!p){const P={uid:Z(),name:l.name,file:l,status:"error",error:$};i.push(P);continue}if(v&&N.length+i.length>=v)break;const q={uid:Z(),name:l.name,file:l,status:"ready"};i.push(q)}const w=d?[...N,...i]:i;V(w),n&&i.forEach(s=>M(s))},U=t=>{V(n=>{const i=n.find(s=>s.uid===t);return i&&z?.(i),n.filter(s=>s.uid!==t)})},S=h.useRef(x);return h.useEffect(()=>{S.current=x},[x]),h.useEffect(()=>{try{S.current?.(N)}catch{}},[N]),{files:N,handleFileSelect:j,removeFile:U,uploadFile:M}},ye=(r,d,v)=>{const[f,y]=h.useState(!1);return{dragging:f,handleDragEnter:o=>{!r||d||(o.preventDefault(),o.stopPropagation(),y(!0))},handleDragLeave:o=>{!r||d||(o.preventDefault(),o.stopPropagation(),o.currentTarget===o.target&&y(!1))},handleDragOver:o=>{!r||d||(o.preventDefault(),o.stopPropagation())},handleDrop:o=>{!r||d||(o.preventDefault(),o.stopPropagation(),y(!1),v(o.dataTransfer.files))}}},I=({file:r,url:d,onView:v,onRemove:f,isList:y=!1})=>{let g="";r.status==="error"?g="beaver-upload__thumb-inner--error":r.status==="success"?g="beaver-upload__thumb-inner--success":r.status==="uploading"&&(g="beaver-upload__thumb-inner--uploading");const m=r.file?.type||"",k=r.file?.name||r.name||"",D=d||"",o=/\.(png|jpe?g|gif|webp|bmp|svg)$/i,L=!!(m&&m.startsWith("image/")||o.test(k)||o.test(D)),x=k.match(/\.([^.]+)$/),C=x?x[1].toUpperCase().slice(0,4):"FILE";return e.jsxs("div",{className:"beaver-upload__thumb",children:[e.jsxs("div",{className:`beaver-upload__thumb-inner ${g}`,role:"img","aria-label":r.name,children:[L?e.jsx("img",{src:d,alt:r.name,className:"beaver-upload__thumb-img"}):e.jsx("div",{className:"beaver-upload__file-icon","aria-hidden":!0,children:e.jsx("div",{className:"beaver-upload__file-icon-label",children:C})}),!y&&e.jsxs("div",{className:"beaver-upload__thumb-overlay",children:[e.jsx("button",{type:"button",className:"beaver-upload__avatar-btn beaver-upload__avatar-btn--view",onClick:_=>{_.stopPropagation(),v(r)},"aria-label":"查看",children:e.jsx(X,{width:16,height:16,"aria-hidden":!0})}),e.jsx("button",{type:"button",className:"beaver-upload__avatar-btn beaver-upload__avatar-btn--remove",onClick:_=>{_.stopPropagation(),f(r.uid)},"aria-label":"删除",children:e.jsx(Q,{width:16,height:16,"aria-hidden":!0})})]})]}),e.jsx("div",{className:"beaver-upload__thumb-body",children:e.jsx("div",{className:`beaver-upload__thumb-name ${r.status==="error"?"beaver-upload__thumb-name--error":""}`,children:r.name})}),y&&e.jsxs("div",{className:"beaver-upload__thumb-actions",children:[e.jsx("button",{type:"button",className:"beaver-upload__action-btn beaver-upload__action-btn--view",onClick:_=>{_.stopPropagation(),v(r)},"aria-label":"查看",children:e.jsx(X,{width:16,height:16,"aria-hidden":!0})}),e.jsx("button",{type:"button",className:"beaver-upload__action-btn beaver-upload__action-btn--remove",onClick:_=>{_.stopPropagation(),f(r.uid)},"aria-label":"删除",children:e.jsx(Q,{width:16,height:16,"aria-hidden":!0})})]})]})};I.__docgenInfo={description:"",methods:[],displayName:"Thumb",props:{file:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"uid",value:{name:"string",required:!0},description:"文件唯一标识符"},{key:"name",value:{name:"string",required:!0},description:"文件名"},{key:"file",value:{name:"File",required:!0},description:"文件对象"},{key:"status",value:{name:"union",raw:"'ready' | 'uploading' | 'success' | 'error'",elements:[{name:"literal",value:"'ready'"},{name:"literal",value:"'uploading'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"}],required:!0},description:"上传状态：'ready' | 'uploading' | 'success' | 'error'"},{key:"percent",value:{name:"number",required:!1},description:"上传进度百分比 (0-100)"},{key:"response",value:{name:"any",required:!1},description:"上传响应结果"},{key:"error",value:{name:"string",required:!1},description:"错误信息"}]}},name:"file"}],return:{name:"void"}}},description:""},onRemove:{required:!0,tsType:{name:"signature",type:"function",raw:"(uid: string) => void",signature:{arguments:[{type:{name:"string"},name:"uid"}],return:{name:"void"}}},description:""},isList:{required:!1,tsType:{name:"boolean"},description:"是否是列表风格，会隐藏缩略图 overlay",defaultValue:{value:"false",computed:!1}}}};const G=({onClick:r})=>e.jsx("div",{className:"beaver-upload__thumb",children:e.jsx("div",{className:"beaver-upload__thumb-inner beaver-upload__area--square",onClick:r,role:"button",tabIndex:0,onKeyDown:d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),r?.())},"aria-label":"上传",children:e.jsx(ce,{width:32,height:32,style:{color:"#999",opacity:.6},"aria-hidden":!0})})});G.__docgenInfo={description:"",methods:[],displayName:"TriggerSquare",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const ee=h.forwardRef(({className:r="",action:d,multiple:v=!0,accept:f,showFileList:y=!0,disabled:g=!1,autoUpload:m=!0,onChange:k,beforeUpload:D,onSuccess:o,onError:L,onProgress:x,onRemove:C,customRequest:_,dragText:B="拖拽文件到此处，或点击选择文件",buttonText:z="选择文件",maxCount:H,maxSize:N,sizeLimitMessage:V="文件大小超出限制",headers:R={},fieldName:A="file",data:M={},variant:j="default",listType:U=j==="avatar"?"picture":"list",renderTrigger:S,size:t,children:n,...i},w)=>{const s=h.useContext(me),l=t??s?.size,p=h.useRef(null),$=v,J=i?.defaultFileList,{files:q,handleFileSelect:W,removeFile:P}=fe(d,$,H,N,f,V,A,R,M,_,D,k,o,L,x,C,J),K=i?.drag,re=K===void 0?j==="drag":!!K,{dragging:ae,handleDragEnter:ne,handleDragLeave:te,handleDragOver:se,handleDrop:ie}=ye(re,g,a=>{W(a,m),p.current&&(p.current.value="")}),ue=a=>{W(a,m),p.current&&(p.current.value="")},le=a=>{ue(a.target.files)},F=()=>{g||p.current?.click()},E=["beaver-upload"];j==="avatar"&&E.push("beaver-upload--avatar"),j==="drag"&&E.push("beaver-upload--drag"),U==="picture"&&E.push("beaver-upload--picture-list"),ae&&E.push("beaver-upload--dragging"),g&&E.push("beaver-upload--disabled"),r&&E.push(r);let b=null;n?h.isValidElement(n)?b=h.cloneElement(n,{onClick:a=>{const c=n.props?.onClick;if(typeof c=="function")try{c(a)}catch{}F()},tabIndex:n.props?.tabIndex??0}):b=e.jsx("div",{className:"beaver-upload__trigger",onClick:F,role:"button",tabIndex:0,children:n}):S&&(b=S({open:F}));const[T,oe]=h.useState({}),O=h.useRef([]);h.useEffect(()=>{O.current.forEach(c=>{try{URL.revokeObjectURL(c)}catch{}}),O.current=[];const a={};return q.forEach(c=>{if(c.response?.url)a[c.uid]=c.response.url;else if(c.file){const u=URL.createObjectURL(c.file);a[c.uid]=u,O.current.push(u)}}),oe(a),()=>{O.current.forEach(c=>{try{URL.revokeObjectURL(c)}catch{}}),O.current=[]}},[q]);const{drag:be,defaultFileList:he,...de}=i;return e.jsxs("div",{ref:w,className:E.join(" "),onDragEnter:ne,onDragOver:se,onDragLeave:te,onDrop:ie,...de,children:[e.jsx("input",{ref:p,type:"file",multiple:$,accept:f,onChange:le,className:"beaver-upload__input",disabled:g,style:{display:"none"}}),e.jsx("div",{className:"beaver-upload__stack",children:j==="avatar"?e.jsx("div",{className:"beaver-upload__avatar-row",children:U==="picture"?e.jsxs("div",{className:"beaver-upload__thumb-grid",children:[q.length>0?q.map(a=>{const c=T[a.uid];return e.jsx(I,{file:a,url:c,onView:()=>{const u=T[a.uid];u&&window.open(u,"_blank")},onRemove:u=>P(u),isList:!1},a.uid)}):null,!b&&e.jsx(G,{onClick:F}),b&&e.jsx("div",{className:"beaver-upload__trigger-avatar",children:b})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"beaver-upload__trigger-avatar-container",children:[!b&&e.jsx(G,{onClick:F}),b&&e.jsx("div",{className:"beaver-upload__trigger-avatar",children:b})]}),y&&q.length>0&&e.jsx("div",{className:"beaver-upload__file-list",children:q.map(a=>{const c=T[a.uid];return e.jsx(I,{file:a,url:c,onView:()=>{const u=T[a.uid];u&&window.open(u,"_blank")},onRemove:u=>P(u),isList:!0},a.uid)})})]})}):j==="default"?e.jsxs(e.Fragment,{children:[b,!b&&e.jsx(Y,{size:l,className:"beaver-upload__button-default",disabled:g,onClick:F,children:z}),y&&q.length>0&&e.jsx("div",{className:"beaver-upload__file-list",children:q.map(a=>{const c=T[a.uid];return e.jsx(I,{file:a,url:c,onView:()=>{const u=T[a.uid];u&&window.open(u,"_blank")},onRemove:u=>P(u),isList:U!=="picture"},a.uid)})})]}):e.jsxs(e.Fragment,{children:[b,!b&&e.jsxs("div",{className:"beaver-upload__area",onClick:F,children:[e.jsx("div",{className:"beaver-upload__icon","aria-hidden":"true",children:e.jsx(pe,{width:40,height:40,focusable:!1,"aria-hidden":!0})}),e.jsx("div",{className:"beaver-upload__text",children:B}),e.jsx(Y,{size:l,disabled:g,onClick:a=>{a.stopPropagation(),F()},children:z})]}),y&&q.length>0&&e.jsx("div",{className:"beaver-upload__file-list",children:q.map(a=>{const c=T[a.uid];return e.jsx(I,{file:a,url:c,onView:()=>{const u=T[a.uid];u&&window.open(u,"_blank")},onRemove:u=>P(u),isList:U!=="picture"},a.uid)})})]})})]})});ee.displayName="Upload";ee.__docgenInfo={description:"",methods:[],displayName:"Upload",props:{action:{required:!1,tsType:{name:"string"},description:"上传的 URL 端点"},multiple:{required:!1,tsType:{name:"boolean"},description:"是否支持多个文件上传",defaultValue:{value:"true",computed:!1}},accept:{required:!1,tsType:{name:"string"},description:`接受的文件类型，遵循 HTML input[type="file"] accept 属性规范
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
}`,signature:{properties:[{key:"uid",value:{name:"string",required:!0},description:"文件唯一标识符"},{key:"name",value:{name:"string",required:!0},description:"文件名"},{key:"file",value:{name:"File",required:!0},description:"文件对象"},{key:"status",value:{name:"union",raw:"'ready' | 'uploading' | 'success' | 'error'",elements:[{name:"literal",value:"'ready'"},{name:"literal",value:"'uploading'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"}],required:!0},description:"上传状态：'ready' | 'uploading' | 'success' | 'error'"},{key:"percent",value:{name:"number",required:!1},description:"上传进度百分比 (0-100)"},{key:"response",value:{name:"any",required:!1},description:"上传响应结果"},{key:"error",value:{name:"string",required:!1},description:"错误信息"}]}},name:"file"}],return:{name:"void"}}},description:"移除文件时的回调"},customRequest:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: File) => Promise<any>",signature:{arguments:[{type:{name:"File"},name:"file"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:"自定义上传函数，返回 Promise"},dragText:{required:!1,tsType:{name:"string"},description:"拖拽上传的提示文本",defaultValue:{value:"'拖拽文件到此处，或点击选择文件'",computed:!1}},buttonText:{required:!1,tsType:{name:"string"},description:"上传按钮的文本",defaultValue:{value:"'选择文件'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"尺寸：'small' | 'medium' | 'large'（优先级：props > Form 上下文）"},maxCount:{required:!1,tsType:{name:"number"},description:"最大上传文件数"},maxSize:{required:!1,tsType:{name:"number"},description:"最大文件大小（字节）"},sizeLimitMessage:{required:!1,tsType:{name:"string"},description:"文件大小超限的错误提示",defaultValue:{value:"'文件大小超出限制'",computed:!1}},headers:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:"自定义 HTTP 请求头",defaultValue:{value:"{}",computed:!1}},fieldName:{required:!1,tsType:{name:"string"},description:"自定义表单字段名称",defaultValue:{value:"'file'",computed:!1}},data:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"any"}],raw:"Record<string, any>"},description:"其他自定义数据，会附加到请求中",defaultValue:{value:"{}",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'avatar' | 'drag'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'avatar'"},{name:"literal",value:"'drag'"}]},description:"内置样式变体：'default' | 'avatar' | 'drag'",defaultValue:{value:"'default'",computed:!1}},listType:{required:!1,tsType:{name:"union",raw:"'list' | 'picture'",elements:[{name:"literal",value:"'list'"},{name:"literal",value:"'picture'"}]},description:"文件列表展示风格：'list' | 'picture'，默认为 'list'",defaultValue:{value:"variant === 'avatar' ? 'picture' : 'list'",computed:!1}},defaultFileList:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"uid",value:{name:"string",required:!0},description:"文件唯一标识符"},{key:"name",value:{name:"string",required:!0},description:"文件名"},{key:"file",value:{name:"File",required:!0},description:"文件对象"},{key:"status",value:{name:"union",raw:"'ready' | 'uploading' | 'success' | 'error'",elements:[{name:"literal",value:"'ready'"},{name:"literal",value:"'uploading'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"}],required:!0},description:"上传状态：'ready' | 'uploading' | 'success' | 'error'"},{key:"percent",value:{name:"number",required:!1},description:"上传进度百分比 (0-100)"},{key:"response",value:{name:"any",required:!1},description:"上传响应结果"},{key:"error",value:{name:"string",required:!1},description:"错误信息"}]}}],raw:"UploadFile[]"},description:"初始文件列表（用于示例或受控场景）"},renderTrigger:{required:!1,tsType:{name:"signature",type:"function",raw:"(controls: { open: () => void }) => React.ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ open: () => void }",signature:{properties:[{key:"open",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},name:"controls"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:"自定义触发渲染函数，接收 open 方法"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"自定义触发节点（优先于 variant 的内置触发）"},className:{defaultValue:{value:"''",computed:!1},required:!1}}};export{ee as U};
