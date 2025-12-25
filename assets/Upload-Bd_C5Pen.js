import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as b}from"./iframe-B140BTaK.js";import{B as Q}from"./Button-CZP4zj4_.js";import{F as me}from"./Form-Do2C96hb.js";import{T as Y}from"./Trash-CEBRM02O.js";const G=r=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:[e.jsx("path",{fill:"currentColor",d:"M12 5c-7 0-11 7-11 7s4 7 11 7 11-7 11-7-4-7-11-7zm0 12a5 5 0 110-10 5 5 0 010 10z"}),e.jsx("circle",{fill:"currentColor",cx:"12",cy:"12",r:"2.5"})]});G.__docgenInfo={description:"",methods:[],displayName:"Eye"};const ee=r=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:[e.jsx("path",{d:"M12 16V8",stroke:"currentColor",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M8 12l4-4 4 4",stroke:"currentColor",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:1.2})]});ee.__docgenInfo={description:"",methods:[],displayName:"UploadCircle"};const re=r=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:[e.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",stroke:"currentColor",strokeWidth:1.2,strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M14 2v6h6",stroke:"currentColor",strokeWidth:1.2,strokeLinecap:"round",strokeLinejoin:"round"})]});re.__docgenInfo={description:"",methods:[],displayName:"File"};const Z=()=>`${Date.now()}-${Math.random().toString(36).substr(2,9)}`,ge=(r,d)=>{if(!d)return!0;const v=r.type,f=r.name,y=f.substring(f.lastIndexOf(".")).toLowerCase(),g=d.split(",").map(m=>m.trim());for(const m of g)if(m.startsWith(".")){if(y===m.toLowerCase())return!0}else if(m.endsWith("/*")){const q=m.substring(0,m.length-2);if(v.startsWith(q+"/"))return!0}else if(v===m)return!0;return!1},ve=(r,d,v,f)=>d&&!ge(r,d)?{valid:!1,error:`不支持的文件类型: ${r.name}`}:v&&r.size>v?{valid:!1,error:f||"文件大小超出限制"}:{valid:!0},fe=(r,d,v,f,y,g,m,q,E,l,C,x,P,_,B,O,$)=>{const[N,V]=b.useState($||[]),R=(t,n,i={})=>{V(k=>k.map(o=>o.uid===t?{...o,status:n,...i}:o))},H=t=>new Promise((n,i)=>{if(!r){i(new Error("未提供 action URL"));return}const k=new FormData;k.append(m,t.file),Object.entries(E).forEach(([o,p])=>{(typeof p=="string"||typeof p=="number"||typeof p=="boolean")&&k.append(o,String(p))});const s=new XMLHttpRequest;s.upload.addEventListener("progress",o=>{if(o.lengthComputable){const p=Math.round(o.loaded/o.total*100);R(t.uid,"uploading",{percent:p}),B?.(o,{...t,percent:p})}}),s.addEventListener("load",()=>{if(s.status===200||s.status===201)try{const o=JSON.parse(s.responseText);n(o)}catch{n(s.responseText)}else i(new Error(`上传失败，状态码：${s.status}`))}),s.addEventListener("error",()=>{i(new Error("网络错误"))}),s.addEventListener("abort",()=>{i(new Error("上传已取消"))}),s.open("POST",r),Object.entries(q).forEach(([o,p])=>{s.setRequestHeader(o,p)}),s.send(k)}),z=async t=>{try{if(C&&!await C(t.file)){R(t.uid,"error",{error:"上传已取消"});return}R(t.uid,"uploading");let n;if(l)n=await l(t.file);else if(r)n=await H(t);else throw new Error("未提供 action 或 customRequest");R(t.uid,"success",{response:n}),P?.(n,{...t,status:"success",response:n})}catch(n){const i=n instanceof Error?n.message:"上传失败";R(t.uid,"error",{error:i}),_?.(n,{...t,status:"error",error:i})}},j=(t,n)=>{if(!t)return;const i=[];for(let s=0;s<t.length;s++){const o=t[s],{valid:p,error:W}=ve(o,y,f,g);if(!p){const U={uid:Z(),name:o.name,file:o,status:"error",error:W};i.push(U);continue}if(v&&N.length+i.length>=v)break;const w={uid:Z(),name:o.name,file:o,status:"ready"};i.push(w)}const k=d?[...N,...i]:i;V(k),n&&i.forEach(s=>z(s))},D=t=>{V(n=>{const i=n.find(s=>s.uid===t);return i&&O?.(i),n.filter(s=>s.uid!==t)})},S=b.useRef(x);return b.useEffect(()=>{S.current=x},[x]),b.useEffect(()=>{try{S.current?.(N)}catch{}},[N]),{files:N,handleFileSelect:j,removeFile:D,uploadFile:z}},ye=(r,d,v)=>{const[f,y]=b.useState(!1);return{dragging:f,handleDragEnter:l=>{!r||d||(l.preventDefault(),l.stopPropagation(),y(!0))},handleDragLeave:l=>{!r||d||(l.preventDefault(),l.stopPropagation(),l.currentTarget===l.target&&y(!1))},handleDragOver:l=>{!r||d||(l.preventDefault(),l.stopPropagation())},handleDrop:l=>{!r||d||(l.preventDefault(),l.stopPropagation(),y(!1),v(l.dataTransfer.files))}}},M=({file:r,url:d,onView:v,onRemove:f,isList:y=!1})=>{let g="";r.status==="error"?g="beaver-upload__thumb-inner--error":r.status==="success"?g="beaver-upload__thumb-inner--success":r.status==="uploading"&&(g="beaver-upload__thumb-inner--uploading");const m=r.file?.type||"",q=r.file?.name||r.name||"",E=d||"",l=/\.(png|jpe?g|gif|webp|bmp|svg)$/i,C=!!(m&&m.startsWith("image/")||l.test(q)||l.test(E)),x=q.match(/\.([^.]+)$/),P=x?x[1].toUpperCase().slice(0,4):"FILE";return e.jsxs("div",{className:"beaver-upload__thumb",children:[e.jsxs("div",{className:`beaver-upload__thumb-inner ${g}`,role:"img","aria-label":r.name,children:[C?e.jsx("img",{src:d,alt:r.name,className:"beaver-upload__thumb-img"}):e.jsx("div",{className:"beaver-upload__file-icon","aria-hidden":!0,children:e.jsx("div",{className:"beaver-upload__file-icon-label",children:P})}),!y&&e.jsxs("div",{className:"beaver-upload__thumb-overlay",children:[e.jsx("button",{type:"button",className:"beaver-upload__avatar-btn beaver-upload__avatar-btn--view",onClick:_=>{_.stopPropagation(),v(r)},"aria-label":"查看",children:e.jsx(G,{width:16,height:16,"aria-hidden":!0})}),e.jsx("button",{type:"button",className:"beaver-upload__avatar-btn beaver-upload__avatar-btn--remove",onClick:_=>{_.stopPropagation(),f(r.uid)},"aria-label":"删除",children:e.jsx(Y,{width:16,height:16,"aria-hidden":!0})})]})]}),e.jsx("div",{className:"beaver-upload__thumb-body",children:e.jsx("div",{className:`beaver-upload__thumb-name ${r.status==="error"?"beaver-upload__thumb-name--error":""}`,children:r.name})}),y&&e.jsxs("div",{className:"beaver-upload__thumb-actions",children:[e.jsx("button",{type:"button",className:"beaver-upload__action-btn beaver-upload__action-btn--view",onClick:_=>{_.stopPropagation(),v(r)},"aria-label":"查看",children:e.jsx(G,{width:16,height:16,"aria-hidden":!0})}),e.jsx("button",{type:"button",className:"beaver-upload__action-btn beaver-upload__action-btn--remove",onClick:_=>{_.stopPropagation(),f(r.uid)},"aria-label":"删除",children:e.jsx(Y,{width:16,height:16,"aria-hidden":!0})})]})]})};M.__docgenInfo={description:"",methods:[],displayName:"Thumb",props:{file:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"uid",value:{name:"string",required:!0},description:"文件唯一标识符"},{key:"name",value:{name:"string",required:!0},description:"文件名"},{key:"file",value:{name:"File",required:!0},description:"文件对象"},{key:"status",value:{name:"union",raw:"'ready' | 'uploading' | 'success' | 'error'",elements:[{name:"literal",value:"'ready'"},{name:"literal",value:"'uploading'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"}],required:!0},description:"上传状态：'ready' | 'uploading' | 'success' | 'error'"},{key:"percent",value:{name:"number",required:!1},description:"上传进度百分比 (0-100)"},{key:"response",value:{name:"any",required:!1},description:"上传响应结果"},{key:"error",value:{name:"string",required:!1},description:"错误信息"}]}},name:"file"}],return:{name:"void"}}},description:""},onRemove:{required:!0,tsType:{name:"signature",type:"function",raw:"(uid: string) => void",signature:{arguments:[{type:{name:"string"},name:"uid"}],return:{name:"void"}}},description:""},isList:{required:!1,tsType:{name:"boolean"},description:"是否是列表风格，会隐藏缩略图 overlay",defaultValue:{value:"false",computed:!1}}}};const J=({onClick:r})=>e.jsx("div",{className:"beaver-upload__thumb",children:e.jsx("div",{className:"beaver-upload__thumb-inner beaver-upload__area--square",onClick:r,role:"button",tabIndex:0,onKeyDown:d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),r?.())},"aria-label":"上传",children:e.jsx(ee,{width:32,height:32,style:{color:"#999",opacity:.6},"aria-hidden":!0})})});J.__docgenInfo={description:"",methods:[],displayName:"TriggerSquare",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const ae=b.forwardRef(({className:r="",action:d,multiple:v=!0,accept:f,showFileList:y=!0,disabled:g=!1,autoUpload:m=!0,onChange:q,beforeUpload:E,onSuccess:l,onError:C,onProgress:x,onRemove:P,customRequest:_,dragText:B="拖拽文件到此处，或点击选择文件",buttonText:O="选择文件",maxCount:$,maxSize:N,sizeLimitMessage:V="文件大小超出限制",headers:R={},fieldName:H="file",data:z={},variant:j="default",listType:D=j==="avatar"?"picture":"list",renderTrigger:S,size:t,children:n,...i},k)=>{const s=b.useContext(me),o=t??s?.size,p=b.useRef(null),W=v,K=i?.defaultFileList,{files:w,handleFileSelect:A,removeFile:U}=fe(d,W,$,N,f,V,H,R,z,_,E,q,l,C,x,P,K),X=i?.drag,ne=X===void 0?j==="drag":!!X,{dragging:te,handleDragEnter:se,handleDragLeave:ie,handleDragOver:ue,handleDrop:oe}=ye(ne,g,a=>{A(a,m),p.current&&(p.current.value="")}),le=a=>{A(a,m),p.current&&(p.current.value="")},de=a=>{le(a.target.files)},F=()=>{g||p.current?.click()},L=["beaver-upload"];j==="avatar"&&L.push("beaver-upload--avatar"),j==="drag"&&L.push("beaver-upload--drag"),D==="picture"&&L.push("beaver-upload--picture-list"),te&&L.push("beaver-upload--dragging"),g&&L.push("beaver-upload--disabled"),r&&L.push(r);let h=null;n?b.isValidElement(n)?h=b.cloneElement(n,{onClick:a=>{const c=n.props?.onClick;if(typeof c=="function")try{c(a)}catch{}F()},tabIndex:n.props?.tabIndex??0}):h=e.jsx("div",{className:"beaver-upload__trigger",onClick:F,role:"button",tabIndex:0,children:n}):S&&(h=S({open:F}));const[T,ce]=b.useState({}),I=b.useRef([]);b.useEffect(()=>{I.current.forEach(c=>{try{URL.revokeObjectURL(c)}catch{}}),I.current=[];const a={};return w.forEach(c=>{if(c.response?.url)a[c.uid]=c.response.url;else if(c.file){const u=URL.createObjectURL(c.file);a[c.uid]=u,I.current.push(u)}}),ce(a),()=>{I.current.forEach(c=>{try{URL.revokeObjectURL(c)}catch{}}),I.current=[]}},[w]);const{drag:he,defaultFileList:be,...pe}=i;return e.jsxs("div",{ref:k,className:L.join(" "),onDragEnter:se,onDragOver:ue,onDragLeave:ie,onDrop:oe,...pe,children:[e.jsx("input",{ref:p,type:"file",multiple:W,accept:f,onChange:de,className:"beaver-upload__input",disabled:g,style:{display:"none"}}),e.jsx("div",{className:"beaver-upload__stack",children:j==="avatar"?e.jsx("div",{className:"beaver-upload__avatar-row",children:D==="picture"?e.jsxs("div",{className:"beaver-upload__thumb-grid",children:[w.length>0?w.map(a=>{const c=T[a.uid];return e.jsx(M,{file:a,url:c,onView:()=>{const u=T[a.uid];u&&window.open(u,"_blank")},onRemove:u=>U(u),isList:!1},a.uid)}):null,!h&&e.jsx(J,{onClick:F}),h&&e.jsx("div",{className:"beaver-upload__trigger-avatar",children:h})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"beaver-upload__trigger-avatar-container",children:[!h&&e.jsx(J,{onClick:F}),h&&e.jsx("div",{className:"beaver-upload__trigger-avatar",children:h})]}),y&&w.length>0&&e.jsx("div",{className:"beaver-upload__file-list",children:w.map(a=>{const c=T[a.uid];return e.jsx(M,{file:a,url:c,onView:()=>{const u=T[a.uid];u&&window.open(u,"_blank")},onRemove:u=>U(u),isList:!0},a.uid)})})]})}):j==="default"?e.jsxs(e.Fragment,{children:[h,!h&&e.jsx(Q,{size:o,className:"beaver-upload__button-default",disabled:g,onClick:F,children:O}),y&&w.length>0&&e.jsx("div",{className:"beaver-upload__file-list",children:w.map(a=>{const c=T[a.uid];return e.jsx(M,{file:a,url:c,onView:()=>{const u=T[a.uid];u&&window.open(u,"_blank")},onRemove:u=>U(u),isList:D!=="picture"},a.uid)})})]}):e.jsxs(e.Fragment,{children:[h,!h&&e.jsxs("div",{className:"beaver-upload__area",onClick:F,children:[e.jsx("div",{className:"beaver-upload__icon","aria-hidden":"true",children:e.jsx(re,{width:40,height:40,focusable:!1,"aria-hidden":!0})}),e.jsx("div",{className:"beaver-upload__text",children:B}),e.jsx(Q,{size:o,disabled:g,onClick:a=>{a.stopPropagation(),F()},children:O})]}),y&&w.length>0&&e.jsx("div",{className:"beaver-upload__file-list",children:w.map(a=>{const c=T[a.uid];return e.jsx(M,{file:a,url:c,onView:()=>{const u=T[a.uid];u&&window.open(u,"_blank")},onRemove:u=>U(u),isList:D!=="picture"},a.uid)})})]})})]})});ae.displayName="Upload";ae.__docgenInfo={description:"",methods:[],displayName:"Upload",props:{action:{required:!1,tsType:{name:"string"},description:"上传的 URL 端点"},multiple:{required:!1,tsType:{name:"boolean"},description:"是否支持多个文件上传",defaultValue:{value:"true",computed:!1}},accept:{required:!1,tsType:{name:"string"},description:`接受的文件类型，遵循 HTML input[type="file"] accept 属性规范
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
}`,signature:{properties:[{key:"uid",value:{name:"string",required:!0},description:"文件唯一标识符"},{key:"name",value:{name:"string",required:!0},description:"文件名"},{key:"file",value:{name:"File",required:!0},description:"文件对象"},{key:"status",value:{name:"union",raw:"'ready' | 'uploading' | 'success' | 'error'",elements:[{name:"literal",value:"'ready'"},{name:"literal",value:"'uploading'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"}],required:!0},description:"上传状态：'ready' | 'uploading' | 'success' | 'error'"},{key:"percent",value:{name:"number",required:!1},description:"上传进度百分比 (0-100)"},{key:"response",value:{name:"any",required:!1},description:"上传响应结果"},{key:"error",value:{name:"string",required:!1},description:"错误信息"}]}}],raw:"UploadFile[]"},description:"初始文件列表（用于示例或受控场景）"},renderTrigger:{required:!1,tsType:{name:"signature",type:"function",raw:"(controls: { open: () => void }) => React.ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ open: () => void }",signature:{properties:[{key:"open",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},name:"controls"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:"自定义触发渲染函数，接收 open 方法"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"自定义触发节点（优先于 variant 的内置触发）"},className:{defaultValue:{value:"''",computed:!1},required:!1}}};export{ae as U};
