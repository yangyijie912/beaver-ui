import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as d,r as D}from"./iframe-Didqz9sL.js";import{u as se,a as v}from"./Form-BUU22z01.js";import{I as s}from"./Input-BE8bOm5J.js";import{B as n}from"./Button-B33DpJKc.js";import{a as h}from"./Toast-JjY6JzLe.js";import{S as C}from"./Select-CPVmxCX_.js";import{C as ne}from"./Checkbox-CiTZlNsD.js";import{a as ye,R as K}from"./Radio-DoQh68vd.js";import{S as be}from"./Switch-BKJuXThh.js";import{D as ge}from"./DatePicker-DI9CKFPc.js";import{U as fe}from"./Upload-LMEFkm5P.js";import"./preload-helper-PPVm8Dsz.js";import"./Eye-OPWQ-oqv.js";import"./client-D0MSIQCZ.js";import"./index-D64ukKpq.js";import"./index-Blat0ZZq.js";import"./Spinner-CKAoCXB_.js";import"./Info-BYSQShoX.js";import"./Close-IiX-HAFp.js";import"./Check-C9Lcua7d.js";import"./useMenuPosition-2uMFw1B6.js";import"./floating-ui.dom-BnXNKGks.js";import"./ArrowRight-BvBKt8CZ.js";import"./Trash-CEBRM02O.js";const Te=new Set(["Input","Select","DatePicker","Checkbox","Radio"]);function ke(r){if(r.type==="input"||r.type==="textarea"||r.type==="select")return!0;const t=r.type?.displayName||"";return Te.has(t)}const l=d.forwardRef(({className:r,name:t,label:a,htmlFor:u,required:m,rules:j=[],help:F,colon:y=!0,children:f,disabled:c,...I},xe)=>{const p=se(),[oe,je]=D.useState(!1),Fe=d.useId().replace(/:/g,""),N=d.isValidElement(f)?f:null,de=d.isValidElement(N)&&ke(N),Se=d.isValidElement(N)?N.props.id:void 0,Q=u??(de?Se??`beaver-form-control-${Fe}`:void 0),X=t&&p.errors[t],b=t?p.values[t]:void 0,w=(oe||!!p.submitAttempted)&&X,me=d.Children.toArray(f).some(o=>d.isValidElement(o)&&o.props?.disabled),ee=d.useMemo(()=>{const o=a&&(typeof a=="string"||typeof a=="number")?String(a):t?String(t):"该字段",i={validate:S=>S==null||typeof S=="string"&&S.trim()===""||Array.isArray(S)&&S.length===0?`${o}不能为空`:void 0,__isRequired:!0};return m?j&&j.length>0?[i,...j]:[i]:j},[j,m,a,t]);D.useEffect(()=>()=>{t&&p.unregisterField?.(t)},[t,p.unregisterField]),D.useEffect(()=>{if(t&&ee.length>0){const o=!!(me||c||p.disabled);p.registerField?.(t,ee,{disabled:o})}},[t,ee,me,c,p.disabled,p.registerField]);const ue=D.useCallback(o=>{if(t){let i;if(o&&typeof o=="object"&&"target"in o){const g=o.target,V=g.tagName,ae=V==="INPUT"&&(g.type==="checkbox"||g.type==="radio"),T=V==="SELECT"&&g.multiple;ae?i=g.checked:T?i=Array.from(g.selectedOptions,k=>k.value):i=g.value}else i=o;const S={...p.values,[t]:i};p.setFieldValue(t,i),p.getFieldRules(t).some(g=>g.trigger!=="onBlur")&&p.validateField(t,S)}},[t,p]),ce=D.useCallback(o=>{je(!0),t&&p.validateField(t)},[t,p]),Z=["beaver-form-item"];m&&Z.push("beaver-form-item--required"),w&&Z.push("beaver-form-item--error"),r&&Z.push(r);const pe=d.Children.map(f,o=>{if(d.isValidElement(o)){const i=o.props,S=o.type==="input"||o.type==="textarea"||o.type==="select",te=o===N&&de?{...i.id===void 0&&Q?{id:Q}:{},...i.name===void 0&&t?{name:t}:{}}:{},g=o.type?.displayName||"",V=g==="Checkbox",ae=g==="Switch",le=g==="DatePicker";if(S){const T=B=>{i.onChange&&i.onChange(B),ue(B)},re=B=>{i.onBlur&&i.onBlur(B),ce(B)},k=o.type==="input"&&(i.type==="checkbox"||i.type==="radio"),he=k&&i.checked===void 0,R=o.type==="select"&&!!i.multiple,ie=!k&&i.value===void 0,x=(()=>{if(ie)return R?b??[]:b!=null?String(b):""})();return d.cloneElement(o,{...i,...te,...he?{checked:!!b}:{},...x!==void 0?{value:x}:{},onChange:T,onBlur:re,disabled:i.disabled||c||p.disabled})}else{let T="none";const k=i.style?.width;w?T="error":oe&&!X&&b&&(T="none");const R={onChange:x=>{i.onChange&&i.onChange(x),ue(x)},onBlur:x=>{i.onBlur&&i.onBlur(x),ce(x)},disabled:i.disabled||c||p.disabled,validation:i.validation||T,...te,...k!==void 0&&i.width===void 0?{width:k}:{}};if(!V&&!le&&(R.size=i.size||p.size),V||ae){const x=i.checked===void 0;return d.cloneElement(o,{...i,...R,...x?{checked:!!b}:{}})}if(le){const x=b instanceof Date||b===null?b:void 0,B=i.value===void 0;return d.cloneElement(o,{...i,...R,...B?{value:x}:{}})}const ie=i.value===void 0;return d.cloneElement(o,{...i,...R,...ie?{value:b??""}:{}})}}return o}),Ie=p.layout==="inline";return e.jsxs("div",{ref:xe,className:Z.join(" "),...I,children:[a&&(Q?e.jsxs("label",{className:"beaver-form-item__label",htmlFor:Q,children:[m&&e.jsx("span",{className:"beaver-form-item__required-mark",children:"*"}),e.jsx("span",{children:a}),y&&e.jsx("span",{className:"beaver-form-item__colon",children:":"})]}):e.jsxs("div",{className:"beaver-form-item__label",children:[m&&e.jsx("span",{className:"beaver-form-item__required-mark",children:"*"}),e.jsx("span",{children:a}),y&&e.jsx("span",{className:"beaver-form-item__colon",children:":"})]})),Ie?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"beaver-form-item__control",children:pe}),e.jsx("div",{className:"beaver-form-item__error-message",children:w?X:""}),e.jsx("div",{className:"beaver-form-item__help",children:F&&!w?F:""})]}):e.jsxs("div",{className:"beaver-form-item__control",children:[pe,e.jsx("div",{className:"beaver-form-item__error-message",children:w?X:""}),e.jsx("div",{className:"beaver-form-item__help",children:F&&!w?F:""})]})]})});l.displayName="FormItem";l.__docgenInfo={description:"",methods:[],displayName:"FormItem",props:{name:{required:!1,tsType:{name:"string"},description:"字段名"},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"标签文本"},htmlFor:{required:!1,tsType:{name:"string"},description:"标签关联的表单控件 id。复杂结构或陌生组件需要由调用方显式指定"},required:{required:!1,tsType:{name:"boolean"},description:"是否必填（会显示红色 * 标记）"},disabled:{required:!1,tsType:{name:"boolean"},description:"字段禁用（可用于在 FormItem 中标记字段为 disabled）"},rules:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** 验证方法，返回 undefined 表示验证通过，返回错误信息表示验证失败。支持同步或异步（Promise）返回
   *  第二个参数为表单的所有字段值，方便实现字段间依赖校验 */
  validate: (value: any, allValues?: FieldValue) => string | undefined | Promise<string | undefined>;
  /** 验证触发时机：'onChange' 或 'onBlur' */
  trigger?: 'onChange' | 'onBlur';
  /** 当字段处于 disabled 时，是否仍然执行该规则（默认 false） */
  validateWhenDisabled?: boolean;
}`,signature:{properties:[{key:"validate",value:{name:"signature",type:"function",raw:"(value: any, allValues?: FieldValue) => string | undefined | Promise<string | undefined>",signature:{arguments:[{type:{name:"any"},name:"value"},{type:{name:"signature",type:"object",raw:`{
  [key: string]: any;
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}}]}},name:"allValues"}],return:{name:"union",raw:"string | undefined | Promise<string | undefined>",elements:[{name:"string"},{name:"undefined"},{name:"Promise",elements:[{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]}],raw:"Promise<string | undefined>"}]}},required:!0},description:`验证方法，返回 undefined 表示验证通过，返回错误信息表示验证失败。支持同步或异步（Promise）返回
 第二个参数为表单的所有字段值，方便实现字段间依赖校验`},{key:"trigger",value:{name:"union",raw:"'onChange' | 'onBlur'",elements:[{name:"literal",value:"'onChange'"},{name:"literal",value:"'onBlur'"}],required:!1},description:"验证触发时机：'onChange' 或 'onBlur'"},{key:"validateWhenDisabled",value:{name:"boolean",required:!1},description:"当字段处于 disabled 时，是否仍然执行该规则（默认 false）"}]}}],raw:"ValidationRule[]"},description:"字段的验证规则数组",defaultValue:{value:"[]",computed:!1}},help:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"辅助说明文本"},colon:{required:!1,tsType:{name:"boolean"},description:"是否展示冒号",defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"子元素"}}};const Ze={title:"表单（Form）/Form",component:v,tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{width:600,maxWidth:"100%",margin:"0 auto"},children:e.jsx(r,{})})],parameters:{docs:{description:{component:`Form 组件
- 使用场景：用于收集和验证用户输入的表单数据
- 支持多种布局方式（vertical、horizontal、inline）
- 支持灵活的字段验证规则
- 支持自定义标签宽度和表单尺寸
- 支持错误提示和辅助说明
- 与 Input、Select 等表单控件配合`}}}},q={name:"默认",render:()=>{const r=d.useRef(null),t=a=>{console.log("提交的数据:",a),h.info(` ${JSON.stringify(a)}`,{duration:0,title:"表单数据"})};return e.jsx("div",{children:e.jsxs(v,{ref:r,initialValues:{username:"",email:"",message:""},onSubmit:t,layout:"vertical",children:[e.jsx(l,{name:"username",label:"用户名",help:"请输入 3-20 个字符",required:!0,rules:[{validate:a=>a?.length<3?"用户名至少 3 个字符":void 0},{validate:a=>a?.length>20?"用户名不超过 20 个字符":void 0}],children:e.jsx(s,{placeholder:"请输入用户名"})}),e.jsx(l,{name:"email",label:"邮箱",required:!0,rules:[{validate:a=>a?void 0:"邮箱不能为空"},{validate:a=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)?void 0:"请输入有效的邮箱地址"}],children:e.jsx(s,{type:"email",placeholder:"请输入邮箱"})}),e.jsx(l,{name:"message",label:"留言",help:"可选，最多 200 个字符",rules:[{validate:a=>a?.length>200?"留言不超过 200 个字符":void 0}],children:e.jsx(s,{textarea:!0,rows:4,placeholder:"请输入你的留言"})}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(n,{variant:"primary",type:"submit",children:"提交"}),e.jsx(n,{type:"button",variant:"ghost",onClick:()=>r.current?.reset(),children:"重置"})]})]})})}},O={name:"水平布局",render:()=>{const r=t=>{console.log("提交的数据:",t)};return e.jsxs(v,{initialValues:{name:"",age:"",password:""},onSubmit:r,layout:"horizontal",labelWidth:100,children:[e.jsx(l,{name:"name",label:"姓名",required:!0,rules:[{validate:t=>t?void 0:"姓名不能为空"}],children:e.jsx(s,{placeholder:"请输入姓名"})}),e.jsx(l,{name:"age",label:"年龄",rules:[{validate:t=>{if(!t)return;const a=parseInt(t,10);return a<0||a>150?"请输入有效的年龄":void 0}}],children:e.jsx(s,{type:"number",placeholder:"请输入年龄"})}),e.jsx(l,{name:"password",label:"密码",rules:[{validate:t=>t?void 0:"密码不能为空"}],children:e.jsx(s,{type:"password",placeholder:"请输入密码",showPasswordToggle:!0})}),e.jsx("div",{style:{marginLeft:116},children:e.jsx(n,{variant:"primary",type:"submit",children:"提交"})})]})}},$={name:"行内布局",render:()=>{const r=t=>{console.log("提交的数据:",t)};return e.jsxs(v,{initialValues:{keyword:"",category:""},onSubmit:r,layout:"inline",children:[e.jsx(l,{name:"keyword",label:"关键词",rules:[{validate:t=>t?void 0:"关键词不能为空"}],children:e.jsx(s,{placeholder:"输入搜索关键词",width:150})}),e.jsx(l,{name:"category",label:"分类",children:e.jsx(C,{options:[{label:"全部",value:""},{label:"新闻",value:"news"},{label:"博客",value:"blog"},{label:"文档",value:"docs"}],placeholder:"请选择",style:{width:150}})}),e.jsx(n,{variant:"primary",type:"submit",children:"搜索"})]})}},_={name:"不同尺寸",render:()=>{const r=["small","medium","large"];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32},children:r.map(t=>e.jsxs("div",{children:[e.jsx("h4",{style:{marginTop:0,marginBottom:16},children:t==="small"?"小 (Small)":t==="medium"?"中 (Medium)":"大 (Large)"}),e.jsxs(v,{initialValues:{username:"",email:"",userType:"individual",newsletter:!1},layout:"horizontal",size:t,style:{maxWidth:720},children:[e.jsx(l,{name:`username-${t}`,label:"用户名",rules:[{validate:a=>a?void 0:"用户名不能为空"}],children:e.jsx(s,{placeholder:"请输入用户名",width:200})}),e.jsx(l,{name:`email-${t}`,label:"邮箱",children:e.jsx(s,{type:"email",placeholder:"请输入邮箱",width:200})}),e.jsx(l,{name:`category-${t}`,label:"分类",children:e.jsx(C,{options:[{label:"全部",value:""},{label:"新闻",value:"news"},{label:"博客",value:"blog"},{label:"文档",value:"docs"}],placeholder:"请选择",width:200})}),e.jsx(l,{name:`newsletter-${t}`,label:"订阅",children:e.jsx(ne,{label:"订阅每周新闻"})}),e.jsx(l,{name:`userType-${t}`,label:"用户类型",children:e.jsxs(ye,{name:`userType-${t}`,children:[e.jsx(K,{value:"individual",label:"个人"}),e.jsx(K,{value:"enterprise",label:"企业"})]})}),e.jsx(l,{name:`notifications-${t}`,label:"通知",children:e.jsx(be,{checkedChildren:"开",unCheckedChildren:"关"})}),e.jsx(l,{name:`birthday-${t}`,label:"出生日期",children:e.jsx(ge,{placeholder:"选择日期",width:200})}),e.jsx(l,{name:`attachments-${t}`,label:"上传",children:e.jsx(fe,{})}),e.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:8,marginTop:8},children:[e.jsx(n,{variant:"primary",type:"submit",size:t,children:"提交"}),e.jsx(n,{type:"button",variant:"ghost",size:t,children:"重置"})]})]})]},t))})}},E={name:"禁用状态",render:()=>e.jsxs("div",{children:[e.jsx("div",{style:{margin:"20px 0"},children:"整个表单禁用"}),e.jsxs(v,{initialValues:{username:"John Doe",email:"john@example.com"},layout:"vertical",disabled:!0,children:[e.jsx(l,{name:"username",label:"用户名",children:e.jsx(s,{})}),e.jsx(l,{name:"email",label:"邮箱",children:e.jsx(s,{})}),e.jsx(n,{variant:"primary",type:"submit",children:"提交"})]}),e.jsx("hr",{style:{margin:"32px 0"}}),e.jsx("div",{style:{margin:"20px 0"},children:"单个字段禁用"}),e.jsxs(v,{initialValues:{username:"",category:""},layout:"horizontal",style:{maxWidth:720},children:[e.jsx(l,{name:"username",label:"用户名",rules:[{validate:r=>r?void 0:"用户名不能为空"}],children:e.jsx(s,{placeholder:"请输入用户名",width:200,disabled:!0})}),e.jsx(l,{name:"category",label:"分类",disabled:!0,children:e.jsx(C,{options:[{label:"全部",value:""},{label:"新闻",value:"news"},{label:"博客",value:"blog"},{label:"文档",value:"docs"}],placeholder:"请选择",width:200})}),e.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:8,marginTop:8},children:[e.jsx(n,{variant:"primary",type:"submit",children:"提交"}),e.jsx(n,{type:"button",variant:"ghost",children:"重置"})]})]})]})},P={name:"自定义验证",render:()=>{const r=t=>{console.log("validateWhenDisabled 提交的数据:",t),h.info(` ${JSON.stringify(t)}`,{duration:0,title:"表单数据"})};return e.jsxs(v,{initialValues:{username:"bc",description:""},onSubmit:r,layout:"vertical",children:[e.jsx(l,{name:"username",label:"用户名",required:!0,rules:[{validate:t=>t!=="abc"?"必须为 abc":void 0,validateWhenDisabled:!0}],children:e.jsx(s,{disabled:!0})}),e.jsx(l,{name:"description",label:"简介",required:!0,rules:[{validate:t=>t?void 0:"onChange 必填",trigger:"onChange"},{validate:t=>t&&t.length<3?"onBlur: 至少 3 个字符":void 0,trigger:"onBlur"}],children:e.jsx(s,{placeholder:"输入时触发 onChange 规则，失焦时触发 onBlur 规则"})}),e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(n,{variant:"primary",type:"submit",children:"提交"})})]})}},z={name:"异步校验",render:()=>{const r=t=>{h.success(JSON.stringify(t,null,2),{duration:0,title:"表单数据"})};return e.jsxs(v,{initialValues:{username:""},onSubmit:r,layout:"vertical",children:[e.jsx(l,{name:"username",label:"用户名",required:!0,help:"输入 taken 会触发占用提示（模拟异步校验）",rules:[{validate:async t=>{if(!t)return"用户名不能为空";if(await new Promise(a=>setTimeout(a,600)),t==="taken")return"用户名已被占用"}}],children:e.jsx(s,{placeholder:"请输入用户名（试试输入 taken）"})}),e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(n,{variant:"primary",type:"submit",children:"提交"})})]})}},A={name:"动态字段（增/删）",render:()=>{const r=d.useRef(null),[t,a]=d.useState([0]),u=d.useRef(1),m=()=>a(y=>[...y,u.current++]),j=y=>a(f=>f.filter(c=>c!==y)),F=y=>{const f=new Set(t.map(I=>`item-${I+1}`)),c=Object.fromEntries(Object.entries(y).filter(([I])=>f.has(I)));h.info(JSON.stringify(c,null,2),{duration:0,title:"表单数据"})};return e.jsxs(v,{ref:r,onSubmit:F,layout:"horizontal",children:[e.jsx("div",{style:{display:"flex",flexDirection:"row-reverse",marginBottom:8},children:e.jsx(n,{type:"button",onClick:m,children:"添加字段"})}),t.map(y=>e.jsx("div",{children:e.jsx(l,{name:`item-${y+1}`,label:`项 ${y+1}`,rules:[{validate:f=>f?void 0:"不能为空"}],children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx(s,{placeholder:"输入值",style:{width:"100%"}}),e.jsx(n,{type:"button",style:{width:80},color:"danger",onClick:()=>j(y),children:"删除"})]})})},y)),e.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:8},children:e.jsx(n,{variant:"primary",type:"submit",children:"提交"})})]})}},J={name:"字段依赖",render:()=>{const r=a=>{h.info(JSON.stringify(a,null,2),{duration:0,title:"表单数据"})},t=()=>{const a=se();return e.jsx(l,{name:"phone",label:"联系电话",required:!0,help:(a.values.country??"cn")==="cn"?"中国手机号建议以 +86 或区号开头":"请输入国际/本地号码",rules:[{validate:(u,m)=>(m?.country??"cn")==="cn"&&u&&!/^\+?86/.test(u)?"中国手机号请以 +86 或区号开头":void 0},{validate:(u,m)=>(m?.country??"cn")==="us"&&u&&!/^\+?1/.test(u)?"美国手机号请以 +1 开头":void 0}],children:e.jsx(s,{placeholder:"根据国家不同校验规则不同"})})};return e.jsxs(v,{onSubmit:r,initialValues:{country:"cn",phone:""},layout:"vertical",children:[e.jsx(l,{name:"country",label:"国家",children:e.jsx(C,{options:[{label:"中国",value:"cn"},{label:"美国",value:"us"}]})}),e.jsx(t,{}),e.jsx(n,{variant:"primary",type:"submit",children:"提交"})]})}},W={name:"useFormContext 用法",render:()=>{const r=a=>{h.info(JSON.stringify(a,null,2),{duration:0,title:"表单数据"})},t=()=>{const a=se(),[u,m]=d.useState(!1),[j,F]=d.useState("");d.useEffect(()=>{if(u){const c=a?.values?.dynamicField;F(c??"")}},[u]);const y=()=>{a?.registerField?.("dynamicField",[{validate:c=>c?void 0:"动态字段不能为空"}]),m(!0)},f=()=>{a?.unregisterField?.("dynamicField"),m(!1),F("")};return e.jsxs("div",{style:{marginTop:12,border:"1px dashed #e6e6e6",padding:12},children:[e.jsxs("div",{style:{marginBottom:8},children:[e.jsx("strong",{children:"当前表单值："}),e.jsx("pre",{style:{whiteSpace:"pre-wrap",margin:0},children:JSON.stringify(a?.values??{},null,2)})]}),e.jsxs("div",{style:{marginBottom:8},children:[e.jsx("strong",{children:"校验信息："}),e.jsx("pre",{style:{whiteSpace:"pre-wrap",margin:0},children:JSON.stringify(a?.errors??{},null,2)})]}),e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:8},children:[e.jsx(n,{type:"button",onClick:()=>a?.setFieldsValue?.({name:"hook-user",email:"hook@example.com"}),children:"设置示例值"}),e.jsx(n,{type:"button",onClick:()=>a?.reset?.(),children:"重置"}),e.jsx(n,{type:"button",onClick:()=>a?.validate?.()?.then(c=>{c?h.success("表单校验通过"):h.error("表单校验未通过，请检查错误")}),children:"校验整个表单 (validate)"}),e.jsx(n,{type:"button",onClick:()=>a?.validateField?.("email")?.then(c=>h.info(c?"email 字段校验通过":"email 字段校验未通过")),children:"校验 email 字段 (validateField)"}),e.jsx(n,{type:"button",onClick:()=>console.log("form (from useFormContext):",a),children:"打印 form 对象"})]}),e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",marginBottom:8},children:[u?e.jsx(n,{type:"button",onClick:f,color:"danger",children:"注销动态字段 `dynamicField`"}):e.jsx(n,{type:"button",onClick:y,children:"注册动态字段 `dynamicField`"}),u&&e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(s,{placeholder:"动态字段输入",value:j,onChange:c=>{const I=c?.target?.value;F(I),a?.setFieldValue?.("dynamicField",I),a?.setFieldsValue?.({dynamicField:I})},style:{width:220}}),e.jsx(n,{type:"button",onClick:()=>a?.validateField?.("dynamicField")?.then(c=>h.info(c?"动态字段校验通过":"动态字段校验未通过")),children:"校验动态字段"})]})]})]})};return e.jsxs(v,{initialValues:{name:"",email:""},onSubmit:r,layout:"vertical",children:[e.jsx(l,{name:"name",label:"姓名",required:!0,rules:[{validate:a=>a?void 0:"姓名不能为空"}],children:e.jsx(s,{placeholder:"请输入姓名"})}),e.jsx(l,{name:"email",label:"邮箱",required:!0,rules:[{validate:a=>a&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)?"邮箱格式不正确":void 0}],children:e.jsx(s,{placeholder:"请输入邮箱"})}),e.jsx(t,{}),e.jsx("div",{style:{marginTop:8},children:e.jsx(n,{variant:"primary",type:"submit",children:"提交"})})]})}},M={name:"使用ref控制",render:()=>{const r=d.useRef(null),t=a=>{h.info(JSON.stringify(a,null,2),{duration:0,title:"表单数据"})};return e.jsxs(v,{ref:r,onSubmit:t,initialValues:{name:"",email:""},layout:"vertical",children:[e.jsx(l,{name:"name",label:"姓名",children:e.jsx(s,{placeholder:"请输入姓名"})}),e.jsx(l,{name:"email",label:"邮箱",children:e.jsx(s,{type:"email",placeholder:"请输入邮箱"})}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(n,{type:"button",onClick:()=>r.current?.reset(),children:"重置（ref.reset）"}),e.jsx(n,{type:"button",onClick:()=>r.current?.setFieldsValue?.({name:"示例用户",email:"demo@example.com"}),children:"填充示例数据（ref.setFieldsValue）"}),e.jsx(n,{variant:"primary",type:"submit",children:"提交"})]})]})}},L={name:"提交前拦截（同步）",render:()=>{const r=a=>{h.success(JSON.stringify(a,null,2),{duration:0,title:"提交成功"})},t=a=>a?.name?!0:(h.error("姓名不能为空，已阻止提交"),!1);return e.jsxs(v,{initialValues:{name:""},beforeSubmit:t,onSubmit:r,layout:"vertical",children:[e.jsx(l,{name:"name",label:"姓名",children:e.jsx(s,{placeholder:"尝试不填并提交，会被拦截"})}),e.jsx("div",{style:{marginTop:8},children:e.jsx(n,{variant:"primary",type:"submit",children:"提交"})})]})}},U={name:"提交前拦截（异步）",render:()=>{const r=a=>{h.success(JSON.stringify(a,null,2),{duration:0,title:"提交成功"})},t=async a=>(await new Promise(u=>setTimeout(u,800)),a?.email&&a.email.includes("block")?(h.error("该邮箱被拦截，无法提交"),!1):!0);return e.jsxs(v,{initialValues:{email:""},beforeSubmit:t,onSubmit:r,layout:"vertical",children:[e.jsx(l,{name:"email",label:"邮箱",children:e.jsx(s,{placeholder:"输入包含 block 的邮箱会被异步拦截"})}),e.jsx("div",{style:{marginTop:8},children:e.jsx(n,{variant:"primary",type:"submit",children:"提交"})})]})}},Y={name:"完整综合表单",render:()=>{const r=d.useRef(null),t=a=>{console.log("完整表单提交数据:",a),h.info(JSON.stringify(a,null,2),{duration:0,title:"表单数据"})};return e.jsxs(v,{ref:r,initialValues:{fullName:"",email:"",phone:"",birthday:"",userType:"individual",industryCategory:"",newsletter:!1,notifications:!0,department:"",jobTitle:"",description:"",agreement:!1},onSubmit:t,layout:"vertical",children:[e.jsx("h3",{children:"基础信息"}),e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx("div",{style:{flex:1},children:e.jsx(l,{name:"fullName",label:"全名",required:!0,rules:[{validate:a=>a?void 0:"全名不能为空"},{validate:a=>a?.length<2?"至少 2 个字符":void 0}],children:e.jsx(s,{placeholder:"请输入您的全名"})})}),e.jsx("div",{style:{flex:1},children:e.jsx(l,{name:"birthday",label:"出生年月",children:e.jsx(ge,{picker:"month",placeholder:"选择出生年月",format:"YYYY-MM"})})})]}),e.jsx(l,{name:"email",label:"电子邮箱",required:!0,rules:[{validate:a=>a?void 0:"邮箱不能为空"},{validate:a=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)?void 0:"请输入有效的邮箱"}],children:e.jsx(s,{type:"email",placeholder:"example@domain.com"})}),e.jsx(l,{name:"phone",label:"电话号码",help:"格式：+86 10 12345678 或 010-12345678",children:e.jsx(s,{placeholder:"请输入电话号码"})}),e.jsx("h3",{children:"用户类型与分类"}),e.jsx(l,{name:"userType",label:"用户类型",required:!0,children:e.jsxs(ye,{name:"userType",children:[e.jsx(K,{value:"individual",label:"个人用户"}),e.jsx(K,{value:"enterprise",label:"企业用户"}),e.jsx(K,{value:"developer",label:"开发者"})]})}),e.jsx(l,{name:"industryCategory",label:"行业分类",required:!0,rules:[{validate:a=>a?void 0:"请选择行业分类"}],children:e.jsx(C,{options:[{label:"信息技术",value:"it"},{label:"金融服务",value:"finance"},{label:"教育培训",value:"education"},{label:"医疗健康",value:"healthcare"},{label:"零售电商",value:"retail"},{label:"其他",value:"other"}],placeholder:"请选择所属行业"})}),e.jsx("h3",{children:"偏好设置"}),e.jsx(l,{name:"notifications",label:"通知偏好",children:e.jsx(be,{checkedChildren:"启用推送",unCheckedChildren:"关闭推送"})}),e.jsx(l,{name:"newsletter",label:"订阅",children:e.jsx(ne,{label:"订阅每周新闻通讯"})}),e.jsx("h3",{children:"工作信息"}),e.jsx(l,{name:"department",label:"部门",children:e.jsx(C,{options:[{label:"产品部",value:"product"},{label:"技术部",value:"tech"},{label:"设计部",value:"design"},{label:"市场部",value:"marketing"},{label:"运营部",value:"ops"},{label:"人力资源",value:"hr"}],placeholder:"选择部门"})}),e.jsx(l,{name:"jobTitle",label:"职位",children:e.jsx(s,{placeholder:"请输入职位名称"})}),e.jsx(l,{name:"description",label:"个人描述",help:"简要介绍您自己和您的专业背景",children:e.jsx(s,{textarea:!0,rows:4,placeholder:"请输入您的个人描述或专业背景"})}),e.jsx("h3",{children:"附件上传"}),e.jsx(l,{name:"attachments",label:"上传文件",help:"支持 PDF、Word、Excel 等常见文件格式，单个文件不超过 10MB",children:e.jsx(fe,{multiple:!0,accept:".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"})}),e.jsx("h3",{children:"协议与确认"}),e.jsx(l,{name:"agreement",label:"协议",required:!0,rules:[{validate:a=>a?void 0:"必须同意协议才能提交"}],children:e.jsx(ne,{label:"我已阅读并同意服务条款、隐私政策和数据处理协议"})}),e.jsxs("div",{style:{display:"flex",gap:8,marginTop:32},children:[e.jsx(n,{variant:"primary",type:"submit",size:"medium",children:"提交申请"}),e.jsx(n,{type:"button",variant:"ghost",onClick:()=>r.current?.reset(),children:"重置表单"})]})]})}},H={name:"原生组件（Native）",render:()=>{const[r,t]=d.useState("b"),[a,u]=d.useState("b");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{style:{fontSize:12,opacity:.8},children:["当前外部受控值：nativeTag=",r,"，customTag=",a]}),e.jsxs(v,{initialValues:{nativeTag:"a",customTag:"a"},layout:"vertical",children:[e.jsx(l,{name:"nativeTag",label:"原生 Select（外部受控）",children:e.jsxs("select",{value:r,onChange:m=>t(m.target.value),children:[e.jsx("option",{value:"a",children:"A"}),e.jsx("option",{value:"b",children:"B"})]})}),e.jsx(l,{name:"customTag",label:"自家 Select（外部受控）",children:e.jsx(C,{options:[{label:"A",value:"a"},{label:"B",value:"b"}],value:a,onChange:m=>u(m),style:{width:200}})})]})]})}},G={name:"外部受控（多选）",render:()=>{const[r,t]=d.useState(["b"]),[a,u]=d.useState(["b"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{style:{fontSize:12,opacity:.8},children:["外部受控状态：nativeTags=",r.join(",")," customTags=",a.join(",")]}),e.jsxs(v,{initialValues:{nativeTags:["a"],customTags:["a"]},layout:"vertical",children:[e.jsx(l,{name:"nativeTags",label:"原生 multiple（外部受控）",children:e.jsxs("select",{multiple:!0,"aria-label":"native-external-multi",value:r,onChange:m=>t(Array.from(m.target.selectedOptions,j=>j.value)),children:[e.jsx("option",{value:"a",children:"A"}),e.jsx("option",{value:"b",children:"B"}),e.jsx("option",{value:"c",children:"C"})]})}),e.jsx(l,{name:"customTags",label:"自家 Select multiple（外部受控）",children:e.jsx(C,{multiple:!0,options:[{label:"A",value:"a"},{label:"B",value:"b"},{label:"C",value:"c"}],value:a,onChange:m=>u(m),style:{width:240}})})]})]})}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: '默认',
  render: () => {
    const formRef = React.useRef<any>(null);
    const handleSubmit = (values: any) => {
      console.log('提交的数据:', values);
      Toast.info(\` \${JSON.stringify(values)}\`, {
        duration: 0,
        title: '表单数据'
      });
    };
    return <div>
        <Form ref={formRef} initialValues={{
        username: '',
        email: '',
        message: ''
      }} onSubmit={handleSubmit} layout="vertical">
          <FormItem name="username" label="用户名" help="请输入 3-20 个字符" required rules={[{
          validate: value => value?.length < 3 ? '用户名至少 3 个字符' : undefined
        }, {
          validate: value => value?.length > 20 ? '用户名不超过 20 个字符' : undefined
        }]}>
            <Input placeholder="请输入用户名" />
          </FormItem>

          <FormItem name="email" label="邮箱" required rules={[{
          validate: value => !value ? '邮箱不能为空' : undefined
        }, {
          validate: value => !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value) ? '请输入有效的邮箱地址' : undefined
        }]}>
            <Input type="email" placeholder="请输入邮箱" />
          </FormItem>
          <FormItem name="message" label="留言" help="可选，最多 200 个字符" rules={[{
          validate: value => value?.length > 200 ? '留言不超过 200 个字符' : undefined
        }]}>
            <Input textarea rows={4} placeholder="请输入你的留言" />
          </FormItem>

          <div style={{
          display: 'flex',
          gap: 8
        }}>
            <Button variant="primary" type="submit">
              提交
            </Button>
            <Button type="button" variant="ghost" onClick={() => formRef.current?.reset()}>
              重置
            </Button>
          </div>
        </Form>
      </div>;
  }
}`,...q.parameters?.docs?.source},description:{story:"基本使用",...q.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: '水平布局',
  render: () => {
    const handleSubmit = (values: any) => {
      console.log('提交的数据:', values);
    };
    return <Form initialValues={{
      name: '',
      age: '',
      password: ''
    }} onSubmit={handleSubmit} layout="horizontal" labelWidth={100}>
        <FormItem name="name" label="姓名" required rules={[{
        validate: value => !value ? '姓名不能为空' : undefined
      }]}>
          <Input placeholder="请输入姓名" />
        </FormItem>

        <FormItem name="age" label="年龄" rules={[{
        validate: value => {
          if (!value) return undefined;
          const age = parseInt(value, 10);
          return age < 0 || age > 150 ? '请输入有效的年龄' : undefined;
        }
      }]}>
          <Input type="number" placeholder="请输入年龄" />
        </FormItem>

        <FormItem name="password" label="密码" rules={[{
        validate: value => !value ? '密码不能为空' : undefined
      }]}>
          <Input type="password" placeholder="请输入密码" showPasswordToggle />
        </FormItem>

        <div style={{
        marginLeft: 116
      }}>
          <Button variant="primary" type="submit">
            提交
          </Button>
        </div>
      </Form>;
  }
}`,...O.parameters?.docs?.source},description:{story:"水平布局（标签在左，输入框在右）",...O.parameters?.docs?.description}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: '行内布局',
  render: () => {
    const handleSubmit = (values: any) => {
      console.log('提交的数据:', values);
    };
    return <Form initialValues={{
      keyword: '',
      category: ''
    }} onSubmit={handleSubmit} layout="inline">
        <FormItem name="keyword" label="关键词" rules={[{
        validate: value => !value ? '关键词不能为空' : undefined
      }]}>
          <Input placeholder="输入搜索关键词" width={150} />
        </FormItem>

        <FormItem name="category" label="分类">
          <Select options={[{
          label: '全部',
          value: ''
        }, {
          label: '新闻',
          value: 'news'
        }, {
          label: '博客',
          value: 'blog'
        }, {
          label: '文档',
          value: 'docs'
        }]} placeholder="请选择" style={{
          width: 150
        }} />
        </FormItem>

        <Button variant="primary" type="submit">
          搜索
        </Button>
      </Form>;
  }
}`,...$.parameters?.docs?.source},description:{story:"行内布局（所有字段在一行）",...$.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: '不同尺寸',
  render: () => {
    const sizes: Array<'small' | 'medium' | 'large'> = ['small', 'medium', 'large'];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }}>
        {sizes.map(size => <div key={size}>
            <h4 style={{
          marginTop: 0,
          marginBottom: 16
        }}>
              {size === 'small' ? '小 (Small)' : size === 'medium' ? '中 (Medium)' : '大 (Large)'}
            </h4>
            <Form initialValues={{
          username: '',
          email: '',
          userType: 'individual',
          newsletter: false
        }} layout="horizontal" size={size} style={{
          maxWidth: 720
        }}>
              <FormItem name={\`username-\${size}\`} label="用户名" rules={[{
            validate: value => !value ? '用户名不能为空' : undefined
          }]}>
                <Input placeholder="请输入用户名" width={200} />
              </FormItem>

              <FormItem name={\`email-\${size}\`} label="邮箱">
                <Input type="email" placeholder="请输入邮箱" width={200} />
              </FormItem>

              <FormItem name={\`category-\${size}\`} label="分类">
                <Select options={[{
              label: '全部',
              value: ''
            }, {
              label: '新闻',
              value: 'news'
            }, {
              label: '博客',
              value: 'blog'
            }, {
              label: '文档',
              value: 'docs'
            }]} placeholder="请选择" width={200} />
              </FormItem>

              <FormItem name={\`newsletter-\${size}\`} label="订阅">
                <Checkbox label="订阅每周新闻" />
              </FormItem>

              <FormItem name={\`userType-\${size}\`} label="用户类型">
                <RadioGroup name={\`userType-\${size}\`}>
                  <Radio value="individual" label="个人" />
                  <Radio value="enterprise" label="企业" />
                </RadioGroup>
              </FormItem>

              <FormItem name={\`notifications-\${size}\`} label="通知">
                <Switch checkedChildren="开" unCheckedChildren="关" />
              </FormItem>

              <FormItem name={\`birthday-\${size}\`} label="出生日期">
                <DatePicker placeholder="选择日期" width={200} />
              </FormItem>

              <FormItem name={\`attachments-\${size}\`} label="上传">
                <Upload />
              </FormItem>

              <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 8,
            marginTop: 8
          }}>
                <Button variant="primary" type="submit" size={size}>
                  提交
                </Button>
                <Button type="button" variant="ghost" size={size}>
                  重置
                </Button>
              </div>
            </Form>
          </div>)}
      </div>;
  }
}`,..._.parameters?.docs?.source},description:{story:"不同尺寸",..._.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '禁用状态',
  render: () => {
    return <div>
        <div style={{
        margin: '20px 0'
      }}>整个表单禁用</div>
        <Form initialValues={{
        username: 'John Doe',
        email: 'john@example.com'
      }} layout="vertical" disabled>
          <FormItem name="username" label="用户名">
            <Input />
          </FormItem>

          <FormItem name="email" label="邮箱">
            <Input />
          </FormItem>

          <Button variant="primary" type="submit">
            提交
          </Button>
        </Form>
        <hr style={{
        margin: '32px 0'
      }} />
        <div style={{
        margin: '20px 0'
      }}>单个字段禁用</div>
        <Form initialValues={{
        username: '',
        category: ''
      }} layout="horizontal" style={{
        maxWidth: 720
      }}>
          <FormItem name={\`username\`} label="用户名" rules={[{
          validate: value => !value ? '用户名不能为空' : undefined
        }]}>
            <Input placeholder="请输入用户名" width={200} disabled />
          </FormItem>

          <FormItem name={\`category\`} label="分类" disabled>
            <Select options={[{
            label: '全部',
            value: ''
          }, {
            label: '新闻',
            value: 'news'
          }, {
            label: '博客',
            value: 'blog'
          }, {
            label: '文档',
            value: 'docs'
          }]} placeholder="请选择" width={200} />
          </FormItem>

          <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 8,
          marginTop: 8
        }}>
            <Button variant="primary" type="submit">
              提交
            </Button>
            <Button type="button" variant="ghost">
              重置
            </Button>
          </div>
        </Form>
      </div>;
  }
}`,...E.parameters?.docs?.source},description:{story:"禁用状态",...E.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: '自定义验证',
  render: () => {
    const handleSubmit = (values: any) => {
      console.log('validateWhenDisabled 提交的数据:', values);
      Toast.info(\` \${JSON.stringify(values)}\`, {
        duration: 0,
        title: '表单数据'
      });
    };
    return <Form initialValues={{
      username: 'bc',
      description: ''
    }} onSubmit={handleSubmit} layout="vertical">
        <FormItem name="username" label="用户名" required rules={[{
        validate: val => val !== 'abc' ? '必须为 abc' : undefined,
        validateWhenDisabled: true
      }]}>
          <Input disabled />
        </FormItem>

        <FormItem name="description" label="简介" required rules={[{
        validate: v => !v ? 'onChange 必填' : undefined,
        trigger: 'onChange'
      }, {
        validate: v => v && v.length < 3 ? 'onBlur: 至少 3 个字符' : undefined,
        trigger: 'onBlur'
      }]}>
          <Input placeholder="输入时触发 onChange 规则，失焦时触发 onBlur 规则" />
        </FormItem>

        <div style={{
        display: 'flex',
        gap: 8
      }}>
          <Button variant="primary" type="submit">
            提交
          </Button>
        </div>
      </Form>;
  }
}`,...P.parameters?.docs?.source},description:{story:`自定义验证规则示例
- validateWhenDisabled: true 表示即使字段被禁用也执行该验证规则
- trigger: 'onChange' | 'onBlur' 指定验证触发时机`,...P.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: '异步校验',
  render: () => {
    const handleSubmit = (values: any) => {
      Toast.success(JSON.stringify(values, null, 2), {
        duration: 0,
        title: '表单数据'
      });
    };
    return <Form initialValues={{
      username: ''
    }} onSubmit={handleSubmit} layout="vertical">
        <FormItem name="username" label="用户名" required help="输入 taken 会触发占用提示（模拟异步校验）" rules={[{
        validate: async value => {
          if (!value) return '用户名不能为空';
          await new Promise(r => setTimeout(r, 600));
          if (value === 'taken') return '用户名已被占用';
          return undefined;
        }
      }]}>
          <Input placeholder="请输入用户名（试试输入 taken）" />
        </FormItem>

        <div style={{
        display: 'flex',
        gap: 8
      }}>
          <Button variant="primary" type="submit">
            提交
          </Button>
        </div>
      </Form>;
  }
}`,...z.parameters?.docs?.source},description:{story:"异步校验示例",...z.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: '动态字段（增/删）',
  render: () => {
    const formRef = React.useRef<any>(null);
    const [keys, setKeys] = React.useState<number[]>([0]);
    const idRef = React.useRef(1);
    const add = () => setKeys(k => [...k, idRef.current++]);
    const remove = (key: number) => setKeys(k => k.filter(x => x !== key));
    const handleSubmit = (values: any) => {
      const activeNames = new Set(keys.map(k => \`item-\${k + 1}\`));
      const filtered = Object.fromEntries(Object.entries(values).filter(([name]) => activeNames.has(name)));
      Toast.info(JSON.stringify(filtered, null, 2), {
        duration: 0,
        title: '表单数据'
      });
    };
    return <Form ref={formRef} onSubmit={handleSubmit} layout="horizontal">
        <div style={{
        display: 'flex',
        flexDirection: 'row-reverse',
        marginBottom: 8
      }}>
          <Button type="button" onClick={add}>
            添加字段
          </Button>
        </div>
        {keys.map(k => <div key={k}>
            <FormItem name={\`item-\${k + 1}\`} label={\`项 \${k + 1}\`} rules={[{
          validate: v => !v ? '不能为空' : undefined
        }]}>
              <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }}>
                <Input placeholder="输入值" style={{
              width: '100%'
            }} />
                <Button type="button" style={{
              width: 80
            }} color="danger" onClick={() => remove(k)}>
                  删除
                </Button>
              </div>
            </FormItem>
          </div>)}

        <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 8
      }}>
          <Button variant="primary" type="submit">
            提交
          </Button>
        </div>
      </Form>;
  }
}`,...A.parameters?.docs?.source},description:{story:"动态字段示例：演示增删字段并校验",...A.parameters?.docs?.description}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: '字段依赖',
  render: () => {
    const handleSubmit = (values: any) => {
      Toast.info(JSON.stringify(values, null, 2), {
        duration: 0,
        title: '表单数据'
      });
    };
    const PhoneField = () => {
      const form = useFormContext();
      return <FormItem name="phone" label="联系电话" required help={(form.values.country ?? 'cn') === 'cn' ? '中国手机号建议以 +86 或区号开头' : '请输入国际/本地号码'} rules={[{
        validate: (v, allValues) => (allValues?.country ?? 'cn') === 'cn' && v && !/^\\+?86/.test(v) ? '中国手机号请以 +86 或区号开头' : undefined
      }, {
        validate: (v, allValues) => (allValues?.country ?? 'cn') === 'us' && v && !/^\\+?1/.test(v) ? '美国手机号请以 +1 开头' : undefined
      }]}>
          <Input placeholder="根据国家不同校验规则不同" />
        </FormItem>;
    };
    return <Form onSubmit={handleSubmit} initialValues={{
      country: 'cn',
      phone: ''
    }} layout="vertical">
        <FormItem name="country" label="国家">
          <Select options={[{
          label: '中国',
          value: 'cn'
        }, {
          label: '美国',
          value: 'us'
        }]} />
        </FormItem>

        <PhoneField />

        <Button variant="primary" type="submit">
          提交
        </Button>
      </Form>;
  }
}`,...J.parameters?.docs?.source},description:{story:"字段依赖示例：根据一个字段值调整另一个字段的校验规则",...J.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'useFormContext 用法',
  render: () => {
    const handleSubmit = (values: any) => {
      Toast.info(JSON.stringify(values, null, 2), {
        duration: 0,
        title: '表单数据'
      });
    };
    const HookControls = () => {
      const form = useFormContext() as any;
      const [dynamicRegistered, setDynamicRegistered] = React.useState(false);
      const [dynamicValue, setDynamicValue] = React.useState('');
      React.useEffect(() => {
        // 避免注销后值残留在表单数据中
        if (dynamicRegistered) {
          const v = form?.values?.dynamicField;
          setDynamicValue(v ?? '');
        }
      }, [dynamicRegistered]);
      const registerDynamic = () => {
        form?.registerField?.('dynamicField', [{
          validate: (v: any) => !v ? '动态字段不能为空' : undefined
        }]);
        setDynamicRegistered(true);
      };
      const unregisterDynamic = () => {
        form?.unregisterField?.('dynamicField');
        setDynamicRegistered(false);
        setDynamicValue('');
      };
      return <div style={{
        marginTop: 12,
        border: '1px dashed #e6e6e6',
        padding: 12
      }}>
          <div style={{
          marginBottom: 8
        }}>
            <strong>当前表单值：</strong>
            <pre style={{
            whiteSpace: 'pre-wrap',
            margin: 0
          }}>
              {JSON.stringify(form?.values ?? {}, null, 2)}
            </pre>
          </div>
          <div style={{
          marginBottom: 8
        }}>
            <strong>校验信息：</strong>
            <pre style={{
            whiteSpace: 'pre-wrap',
            margin: 0
          }}>
              {JSON.stringify(form?.errors ?? {}, null, 2)}
            </pre>
          </div>

          <div style={{
          display: 'flex',
          gap: 8,
          flexWrap: 'wrap',
          marginBottom: 8
        }}>
            <Button type="button" onClick={() => form?.setFieldsValue?.({
            name: 'hook-user',
            email: 'hook@example.com'
          })}>
              设置示例值
            </Button>

            <Button type="button" onClick={() => form?.reset?.()}>
              重置
            </Button>

            <Button type="button" onClick={() => form?.validate?.()?.then((ok: boolean) => {
            if (ok) Toast.success('表单校验通过');else Toast.error('表单校验未通过，请检查错误');
          })}>
              校验整个表单 (validate)
            </Button>

            <Button type="button" onClick={() => form?.validateField?.('email')?.then((ok: boolean) => Toast.info(ok ? 'email 字段校验通过' : 'email 字段校验未通过'))}>
              校验 email 字段 (validateField)
            </Button>

            <Button type="button" onClick={() => console.log('form (from useFormContext):', form)}>
              打印 form 对象
            </Button>
          </div>

          <div style={{
          display: 'flex',
          gap: 8,
          alignItems: 'center',
          marginBottom: 8
        }}>
            {!dynamicRegistered ? <Button type="button" onClick={registerDynamic}>
                注册动态字段 \`dynamicField\`
              </Button> : <Button type="button" onClick={unregisterDynamic} color="danger">
                注销动态字段 \`dynamicField\`
              </Button>}

            {dynamicRegistered && <div style={{
            display: 'flex',
            gap: 8,
            alignItems: 'center'
          }}>
                <Input placeholder="动态字段输入" value={dynamicValue} onChange={(e: any) => {
              const val = e?.target?.value;
              setDynamicValue(val);
              form?.setFieldValue?.('dynamicField', val);
              form?.setFieldsValue?.({
                dynamicField: val
              });
            }} style={{
              width: 220
            }} />
                <Button type="button" onClick={() => form?.validateField?.('dynamicField')?.then((ok: boolean) => Toast.info(ok ? '动态字段校验通过' : '动态字段校验未通过'))}>
                  校验动态字段
                </Button>
              </div>}
          </div>
        </div>;
    };
    return <Form initialValues={{
      name: '',
      email: ''
    }} onSubmit={handleSubmit} layout="vertical">
        <FormItem name="name" label="姓名" required rules={[{
        validate: v => !v ? '姓名不能为空' : undefined
      }]}>
          <Input placeholder="请输入姓名" />
        </FormItem>

        <FormItem name="email" label="邮箱" required rules={[{
        validate: v => v && !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(v) ? '邮箱格式不正确' : undefined
      }]}>
          <Input placeholder="请输入邮箱" />
        </FormItem>

        <HookControls />

        <div style={{
        marginTop: 8
      }}>
          <Button variant="primary" type="submit">
            提交
          </Button>
        </div>
      </Form>;
  }
}`,...W.parameters?.docs?.source},description:{story:"useFormContext 演示\n- 展示如何在子组件中通过 hook 访问 `form` 对象（values、errors 等）\n- 演示 programmatic setFieldsValue、reset 和触发校验",...W.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: '使用ref控制',
  render: () => {
    const formRef = React.useRef<any>(null);
    const handleSubmit = (values: any) => {
      Toast.info(JSON.stringify(values, null, 2), {
        duration: 0,
        title: '表单数据'
      });
    };
    return <Form ref={formRef} onSubmit={handleSubmit} initialValues={{
      name: '',
      email: ''
    }} layout="vertical">
        <FormItem name="name" label="姓名">
          <Input placeholder="请输入姓名" />
        </FormItem>

        <FormItem name="email" label="邮箱">
          <Input type="email" placeholder="请输入邮箱" />
        </FormItem>

        <div style={{
        display: 'flex',
        gap: 8
      }}>
          <Button type="button" onClick={() => formRef.current?.reset()}>
            重置（ref.reset）
          </Button>

          <Button type="button" onClick={() => formRef.current?.setFieldsValue?.({
          name: '示例用户',
          email: 'demo@example.com'
        })}>
            填充示例数据（ref.setFieldsValue）
          </Button>

          <Button variant="primary" type="submit">
            提交
          </Button>
        </div>
      </Form>;
  }
}`,...M.parameters?.docs?.source},description:{story:"使用 ref 进行程序化控制（reset / setFieldsValue）",...M.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: '提交前拦截（同步）',
  render: () => {
    const handleSubmit = (values: any) => {
      Toast.success(JSON.stringify(values, null, 2), {
        duration: 0,
        title: '提交成功'
      });
    };
    const beforeSubmit = (values: any) => {
      if (!values?.name) {
        Toast.error('姓名不能为空，已阻止提交');
        return false;
      }
      return true;
    };
    return <Form initialValues={{
      name: ''
    }} beforeSubmit={beforeSubmit} onSubmit={handleSubmit} layout="vertical">
        <FormItem name="name" label="姓名">
          <Input placeholder="尝试不填并提交，会被拦截" />
        </FormItem>

        <div style={{
        marginTop: 8
      }}>
          <Button variant="primary" type="submit">
            提交
          </Button>
        </div>
      </Form>;
  }
}`,...L.parameters?.docs?.source},description:{story:"提交前拦截示例（同步）",...L.parameters?.docs?.description}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: '提交前拦截（异步）',
  render: () => {
    const handleSubmit = (values: any) => {
      Toast.success(JSON.stringify(values, null, 2), {
        duration: 0,
        title: '提交成功'
      });
    };
    const beforeSubmit = async (values: any) => {
      // 模拟异步检查（例如后端校验或远程规则）
      await new Promise(r => setTimeout(r, 800));
      if (values?.email && values.email.includes('block')) {
        Toast.error('该邮箱被拦截，无法提交');
        return false;
      }
      return true;
    };
    return <Form initialValues={{
      email: ''
    }} beforeSubmit={beforeSubmit} onSubmit={handleSubmit} layout="vertical">
        <FormItem name="email" label="邮箱">
          <Input placeholder="输入包含 block 的邮箱会被异步拦截" />
        </FormItem>

        <div style={{
        marginTop: 8
      }}>
          <Button variant="primary" type="submit">
            提交
          </Button>
        </div>
      </Form>;
  }
}`,...U.parameters?.docs?.source},description:{story:"提交前拦截示例（异步）",...U.parameters?.docs?.description}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: '完整综合表单',
  render: () => {
    const formRef = React.useRef<any>(null);
    const handleSubmit = (values: any) => {
      console.log('完整表单提交数据:', values);
      Toast.info(JSON.stringify(values, null, 2), {
        duration: 0,
        title: '表单数据'
      });
    };
    return <Form ref={formRef} initialValues={{
      // 基础信息
      fullName: '',
      email: '',
      phone: '',
      birthday: '',
      // 用户选择
      userType: 'individual',
      industryCategory: '',
      // 偏好设置
      newsletter: false,
      notifications: true,
      // 其他
      department: '',
      jobTitle: '',
      description: '',
      agreement: false
    }} onSubmit={handleSubmit} layout="vertical">
        <h3>基础信息</h3>

        <div style={{
        display: 'flex',
        gap: 16
      }}>
          <div style={{
          flex: 1
        }}>
            <FormItem name="fullName" label="全名" required rules={[{
            validate: v => !v ? '全名不能为空' : undefined
          }, {
            validate: v => v?.length < 2 ? '至少 2 个字符' : undefined
          }]}>
              <Input placeholder="请输入您的全名" />
            </FormItem>
          </div>
          <div style={{
          flex: 1
        }}>
            <FormItem name="birthday" label="出生年月">
              <DatePicker picker="month" placeholder="选择出生年月" format="YYYY-MM" />
            </FormItem>
          </div>
        </div>

        <FormItem name="email" label="电子邮箱" required rules={[{
        validate: v => !v ? '邮箱不能为空' : undefined
      }, {
        validate: v => !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(v) ? '请输入有效的邮箱' : undefined
      }]}>
          <Input type="email" placeholder="example@domain.com" />
        </FormItem>

        <FormItem name="phone" label="电话号码" help="格式：+86 10 12345678 或 010-12345678">
          <Input placeholder="请输入电话号码" />
        </FormItem>

        <h3>用户类型与分类</h3>

        <FormItem name="userType" label="用户类型" required>
          <RadioGroup name="userType">
            <Radio value="individual" label="个人用户" />
            <Radio value="enterprise" label="企业用户" />
            <Radio value="developer" label="开发者" />
          </RadioGroup>
        </FormItem>

        <FormItem name="industryCategory" label="行业分类" required rules={[{
        validate: v => !v ? '请选择行业分类' : undefined
      }]}>
          <Select options={[{
          label: '信息技术',
          value: 'it'
        }, {
          label: '金融服务',
          value: 'finance'
        }, {
          label: '教育培训',
          value: 'education'
        }, {
          label: '医疗健康',
          value: 'healthcare'
        }, {
          label: '零售电商',
          value: 'retail'
        }, {
          label: '其他',
          value: 'other'
        }]} placeholder="请选择所属行业" />
        </FormItem>

        <h3>偏好设置</h3>

        <FormItem name="notifications" label="通知偏好">
          <Switch checkedChildren="启用推送" unCheckedChildren="关闭推送" />
        </FormItem>

        <FormItem name="newsletter" label="订阅">
          <Checkbox label="订阅每周新闻通讯" />
        </FormItem>

        <h3>工作信息</h3>

        <FormItem name="department" label="部门">
          <Select options={[{
          label: '产品部',
          value: 'product'
        }, {
          label: '技术部',
          value: 'tech'
        }, {
          label: '设计部',
          value: 'design'
        }, {
          label: '市场部',
          value: 'marketing'
        }, {
          label: '运营部',
          value: 'ops'
        }, {
          label: '人力资源',
          value: 'hr'
        }]} placeholder="选择部门" />
        </FormItem>

        <FormItem name="jobTitle" label="职位">
          <Input placeholder="请输入职位名称" />
        </FormItem>

        <FormItem name="description" label="个人描述" help="简要介绍您自己和您的专业背景">
          <Input textarea rows={4} placeholder="请输入您的个人描述或专业背景" />
        </FormItem>

        <h3>附件上传</h3>

        <FormItem name="attachments" label="上传文件" help="支持 PDF、Word、Excel 等常见文件格式，单个文件不超过 10MB">
          <Upload multiple accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx" />
        </FormItem>

        <h3>协议与确认</h3>

        <FormItem name="agreement" label="协议" required rules={[{
        validate: v => !v ? '必须同意协议才能提交' : undefined
      }]}>
          <Checkbox label="我已阅读并同意服务条款、隐私政策和数据处理协议" />
        </FormItem>

        <div style={{
        display: 'flex',
        gap: 8,
        marginTop: 32
      }}>
          <Button variant="primary" type="submit" size="medium">
            提交申请
          </Button>
          <Button type="button" variant="ghost" onClick={() => formRef.current?.reset()}>
            重置表单
          </Button>
        </div>
      </Form>;
  }
}`,...Y.parameters?.docs?.source},description:{story:"完整的综合表单 - 包含库里所有主要表单组件",...Y.parameters?.docs?.description}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: '原生组件（Native）',
  render: () => {
    const [nativeTag, setNativeTag] = React.useState('b');
    const [customTag, setCustomTag] = React.useState<string>('b');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }}>
        <div style={{
        fontSize: 12,
        opacity: 0.8
      }}>
          当前外部受控值：nativeTag={nativeTag}，customTag={customTag}
        </div>

        <Form initialValues={{
        nativeTag: 'a',
        customTag: 'a'
      }} layout="vertical">
          <FormItem name="nativeTag" label="原生 Select（外部受控）">
            <select value={nativeTag} onChange={e => setNativeTag(e.target.value)}>
              <option value="a">A</option>
              <option value="b">B</option>
            </select>
          </FormItem>

          <FormItem name="customTag" label="自家 Select（外部受控）">
            <Select options={[{
            label: 'A',
            value: 'a'
          }, {
            label: 'B',
            value: 'b'
          }]} value={customTag} onChange={v => setCustomTag(v as string)} style={{
            width: 200
          }} />
          </FormItem>
        </Form>
      </div>;
  }
}`,...H.parameters?.docs?.source},description:{story:"原生表单控件（用于验证 FormItem 不覆盖外部受控 value）",...H.parameters?.docs?.description}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: '外部受控（多选）',
  render: () => {
    const [nativeTags, setNativeTags] = React.useState<string[]>(['b']);
    const [customTags, setCustomTags] = React.useState<string[]>(['b']);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }}>
        <div style={{
        fontSize: 12,
        opacity: 0.8
      }}>
          外部受控状态：nativeTags={nativeTags.join(',')} customTags={customTags.join(',')}
        </div>

        <Form initialValues={{
        nativeTags: ['a'],
        customTags: ['a']
      }} layout="vertical">
          <FormItem name="nativeTags" label="原生 multiple（外部受控）">
            <select multiple aria-label="native-external-multi" value={nativeTags} onChange={e => setNativeTags(Array.from(e.target.selectedOptions, o => o.value))}>
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
            </select>
          </FormItem>

          <FormItem name="customTags" label="自家 Select multiple（外部受控）">
            <Select multiple options={[{
            label: 'A',
            value: 'a'
          }, {
            label: 'B',
            value: 'b'
          }, {
            label: 'C',
            value: 'c'
          }]} value={customTags} onChange={v => setCustomTags(v as string[])} style={{
            width: 240
          }} />
          </FormItem>
        </Form>
      </div>;
  }
}`,...G.parameters?.docs?.source},description:{story:"外部受控（多选）示例：父组件显式传入 value/onChange",...G.parameters?.docs?.description}}};const et=["Default","HorizontalLayout","InlineLayout","Sizes","Disabled","ValidateWhenDisabled","AsyncValidation","DynamicFields","DependentFields","UseFormContextDemo","ProgrammaticControls","BeforeSubmitSync","BeforeSubmitAsync","ComprehensiveForm","NativeElements","ExternallyControlledMultiple"];export{z as AsyncValidation,U as BeforeSubmitAsync,L as BeforeSubmitSync,Y as ComprehensiveForm,q as Default,J as DependentFields,E as Disabled,A as DynamicFields,G as ExternallyControlledMultiple,O as HorizontalLayout,$ as InlineLayout,H as NativeElements,M as ProgrammaticControls,_ as Sizes,W as UseFormContextDemo,P as ValidateWhenDisabled,et as __namedExportsOrder,Ze as default};
