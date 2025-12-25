import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as m,r as N}from"./iframe-B140BTaK.js";import{u as ie,a as p}from"./Form-Do2C96hb.js";import{I as s}from"./Input-lEOcpoEu.js";import{B as n}from"./Button-CZP4zj4_.js";import{a as h}from"./Toast-BGTWiF1X.js";import{S as I}from"./Select-CLDZV0FG.js";import{C as re}from"./Checkbox-BPbY2K4C.js";import{a as ue,R as G}from"./Radio-C3ScTt6B.js";import{S as ce}from"./Switch-Dorn5GTa.js";import{D as pe}from"./DatePicker-BynlElK1.js";import{U as ve}from"./Upload-Bd_C5Pen.js";import"./preload-helper-PPVm8Dsz.js";import"./client-BFSRAFrp.js";import"./index-DaK_gO4g.js";import"./index-f83XspaX.js";import"./Spinner-CKAoCXB_.js";import"./Info-BYSQShoX.js";import"./Close-IiX-HAFp.js";import"./Check-C9Lcua7d.js";import"./useMenuPosition-2E4Wosrl.js";import"./floating-ui.dom-BnXNKGks.js";import"./ArrowRight-BvBKt8CZ.js";import"./Trash-CEBRM02O.js";const l=m.forwardRef(({className:r,name:a,label:t,required:d,rules:c=[],help:S,colon:C=!0,children:y,disabled:f,...v},j)=>{const u=ie(),[ne,he]=N.useState(!1),K=a&&u.errors[a],b=a?u.values[a]:void 0,k=(ne||!!u.submitAttempted)&&K,se=m.Children.toArray(y).some(o=>m.isValidElement(o)&&o.props?.disabled),ae=m.useMemo(()=>{const o=t&&(typeof t=="string"||typeof t=="number")?String(t):a?String(a):"该字段",i={validate:F=>F==null||typeof F=="string"&&F.trim()===""||Array.isArray(F)&&F.length===0?`${o}不能为空`:void 0,__isRequired:!0};return d?c&&c.length>0?[i,...c]:[i]:c},[c,d,t,a]);N.useEffect(()=>()=>{a&&u.unregisterField?.(a)},[a,u.unregisterField]),N.useEffect(()=>{if(a&&ae.length>0){const o=!!(se||f||u.disabled);u.registerField?.(a,ae,{disabled:o})}},[a,ae,se,f,u.disabled,u.registerField]);const oe=N.useCallback(o=>{if(a){let i;if(o&&typeof o=="object"&&"target"in o){const g=o.target,X=g.tagName,Z=X==="INPUT"&&(g.type==="checkbox"||g.type==="radio"),ee=X==="SELECT"&&g.multiple;Z?i=g.checked:ee?i=Array.from(g.selectedOptions,te=>te.value):i=g.value}else i=o;u.setFieldValue(a,i),u.getFieldRules(a).some(g=>g.trigger!=="onBlur")&&u.validateField(a)}},[a,u]),de=N.useCallback(o=>{he(!0),a&&u.validateField(a)},[a,u]),Q=["beaver-form-item"];d&&Q.push("beaver-form-item--required"),k&&Q.push("beaver-form-item--error"),r&&Q.push(r);const me=m.Children.map(y,o=>{if(m.isValidElement(o)){const i=o.props,F=o.type==="input"||o.type==="textarea"||o.type==="select",V=o.type?.displayName||"",g=V==="Checkbox",X=V==="Switch",Z=V==="DatePicker";if(F){const T=B=>{i.onChange&&i.onChange(B),oe(B)},ee=B=>{i.onBlur&&i.onBlur(B),de(B)},w=o.type==="input"&&(i.type==="checkbox"||i.type==="radio"),te=w&&i.checked===void 0,R=o.type==="select"&&!!i.multiple,le=!w&&i.value===void 0,x=(()=>{if(le)return R?b??[]:b!=null?String(b):""})();return m.cloneElement(o,{...i,...te?{checked:!!b}:{},...x!==void 0?{value:x}:{},onChange:T,onBlur:ee,disabled:i.disabled||f||u.disabled})}else{let T="none";const w=i.style?.width;k?T="error":ne&&!K&&b&&(T="none");const R={onChange:x=>{i.onChange&&i.onChange(x),oe(x)},onBlur:x=>{i.onBlur&&i.onBlur(x),de(x)},disabled:i.disabled||f||u.disabled,validation:i.validation||T,...w!==void 0&&i.width===void 0?{width:w}:{}};if(!g&&!Z&&(R.size=i.size||u.size),g||X){const x=i.checked===void 0;return m.cloneElement(o,{...i,...R,...x?{checked:!!b}:{}})}if(Z){const x=b instanceof Date||b===null?b:void 0,B=i.value===void 0;return m.cloneElement(o,{...i,...R,...B?{value:x}:{}})}const le=i.value===void 0;return m.cloneElement(o,{...i,...R,...le?{value:b??""}:{}})}}return o}),ye=u.layout==="inline";return e.jsxs("div",{ref:j,className:Q.join(" "),...v,children:[t&&e.jsxs("label",{className:"beaver-form-item__label",children:[d&&e.jsx("span",{className:"beaver-form-item__required-mark",children:"*"}),e.jsx("span",{children:t}),C&&e.jsx("span",{className:"beaver-form-item__colon",children:":"})]}),ye?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"beaver-form-item__control",children:me}),e.jsx("div",{className:"beaver-form-item__error-message",children:k?K:""}),e.jsx("div",{className:"beaver-form-item__help",children:S&&!k?S:""})]}):e.jsxs("div",{className:"beaver-form-item__control",children:[me,e.jsx("div",{className:"beaver-form-item__error-message",children:k?K:""}),e.jsx("div",{className:"beaver-form-item__help",children:S&&!k?S:""})]})]})});l.displayName="FormItem";l.__docgenInfo={description:"",methods:[],displayName:"FormItem",props:{name:{required:!1,tsType:{name:"string"},description:"字段名"},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"标签文本"},required:{required:!1,tsType:{name:"boolean"},description:"是否必填（会显示红色 * 标记）"},disabled:{required:!1,tsType:{name:"boolean"},description:"字段禁用（可用于在 FormItem 中标记字段为 disabled）"},rules:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
 第二个参数为表单的所有字段值，方便实现字段间依赖校验`},{key:"trigger",value:{name:"union",raw:"'onChange' | 'onBlur'",elements:[{name:"literal",value:"'onChange'"},{name:"literal",value:"'onBlur'"}],required:!1},description:"验证触发时机：'onChange' 或 'onBlur'"},{key:"validateWhenDisabled",value:{name:"boolean",required:!1},description:"当字段处于 disabled 时，是否仍然执行该规则（默认 false）"}]}}],raw:"ValidationRule[]"},description:"字段的验证规则数组",defaultValue:{value:"[]",computed:!1}},help:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"辅助说明文本"},colon:{required:!1,tsType:{name:"boolean"},description:"是否展示冒号",defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"子元素"}}};const We={title:"表单（Form）/Form",component:p,tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{width:600,maxWidth:"100%",margin:"0 auto"},children:e.jsx(r,{})})],parameters:{docs:{description:{component:`Form 组件
- 使用场景：用于收集和验证用户输入的表单数据
- 支持多种布局方式（vertical、horizontal、inline）
- 支持灵活的字段验证规则
- 支持自定义标签宽度和表单尺寸
- 支持错误提示和辅助说明
- 与 Input、Select 等表单控件配合`}}}},D={name:"默认",render:()=>{const r=m.useRef(null),a=t=>{console.log("提交的数据:",t),h.info(` ${JSON.stringify(t)}`,{duration:0,title:"表单数据"})};return e.jsx("div",{children:e.jsxs(p,{ref:r,initialValues:{username:"",email:"",message:""},onSubmit:a,layout:"vertical",children:[e.jsx(l,{name:"username",label:"用户名",help:"请输入 3-20 个字符",required:!0,rules:[{validate:t=>t?.length<3?"用户名至少 3 个字符":void 0},{validate:t=>t?.length>20?"用户名不超过 20 个字符":void 0}],children:e.jsx(s,{placeholder:"请输入用户名"})}),e.jsx(l,{name:"email",label:"邮箱",required:!0,rules:[{validate:t=>t?void 0:"邮箱不能为空"},{validate:t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)?void 0:"请输入有效的邮箱地址"}],children:e.jsx(s,{type:"email",placeholder:"请输入邮箱"})}),e.jsx(l,{name:"message",label:"留言",help:"可选，最多 200 个字符",rules:[{validate:t=>t?.length>200?"留言不超过 200 个字符":void 0}],children:e.jsx(s,{textarea:!0,rows:4,placeholder:"请输入你的留言"})}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(n,{variant:"primary",type:"submit",children:"提交"}),e.jsx(n,{type:"button",variant:"ghost",onClick:()=>r.current?.reset(),children:"重置"})]})]})})}},q={name:"水平布局",render:()=>{const r=a=>{console.log("提交的数据:",a)};return e.jsxs(p,{initialValues:{name:"",age:""},onSubmit:r,layout:"horizontal",labelWidth:100,children:[e.jsx(l,{name:"name",label:"姓名",required:!0,rules:[{validate:a=>a?void 0:"姓名不能为空"}],children:e.jsx(s,{placeholder:"请输入姓名"})}),e.jsx(l,{name:"age",label:"年龄",rules:[{validate:a=>{if(!a)return;const t=parseInt(a,10);return t<0||t>150?"请输入有效的年龄":void 0}}],children:e.jsx(s,{type:"number",placeholder:"请输入年龄"})}),e.jsx("div",{style:{marginLeft:116},children:e.jsx(n,{variant:"primary",type:"submit",children:"提交"})})]})}},$={name:"行内布局",render:()=>{const r=a=>{console.log("提交的数据:",a)};return e.jsxs(p,{initialValues:{keyword:"",category:""},onSubmit:r,layout:"inline",children:[e.jsx(l,{name:"keyword",label:"关键词",rules:[{validate:a=>a?void 0:"关键词不能为空"}],children:e.jsx(s,{placeholder:"输入搜索关键词",width:150})}),e.jsx(l,{name:"category",label:"分类",children:e.jsx(I,{options:[{label:"全部",value:""},{label:"新闻",value:"news"},{label:"博客",value:"blog"},{label:"文档",value:"docs"}],placeholder:"请选择",style:{width:150}})}),e.jsx(n,{variant:"primary",type:"submit",children:"搜索"})]})}},O={name:"不同尺寸",render:()=>{const r=["small","medium","large"];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32},children:r.map(a=>e.jsxs("div",{children:[e.jsx("h4",{style:{marginTop:0,marginBottom:16},children:a==="small"?"小 (Small)":a==="medium"?"中 (Medium)":"大 (Large)"}),e.jsxs(p,{initialValues:{username:"",email:"",userType:"individual",newsletter:!1},layout:"horizontal",size:a,style:{maxWidth:720},children:[e.jsx(l,{name:`username-${a}`,label:"用户名",rules:[{validate:t=>t?void 0:"用户名不能为空"}],children:e.jsx(s,{placeholder:"请输入用户名",width:200})}),e.jsx(l,{name:`email-${a}`,label:"邮箱",children:e.jsx(s,{type:"email",placeholder:"请输入邮箱",width:200})}),e.jsx(l,{name:`category-${a}`,label:"分类",children:e.jsx(I,{options:[{label:"全部",value:""},{label:"新闻",value:"news"},{label:"博客",value:"blog"},{label:"文档",value:"docs"}],placeholder:"请选择",width:200})}),e.jsx(l,{name:`newsletter-${a}`,label:"订阅",children:e.jsx(re,{label:"订阅每周新闻"})}),e.jsx(l,{name:`userType-${a}`,label:"用户类型",children:e.jsxs(ue,{name:`userType-${a}`,children:[e.jsx(G,{value:"individual",label:"个人"}),e.jsx(G,{value:"enterprise",label:"企业"})]})}),e.jsx(l,{name:`notifications-${a}`,label:"通知",children:e.jsx(ce,{checkedChildren:"开",unCheckedChildren:"关"})}),e.jsx(l,{name:`birthday-${a}`,label:"出生日期",children:e.jsx(pe,{placeholder:"选择日期",width:200})}),e.jsx(l,{name:`attachments-${a}`,label:"上传",children:e.jsx(ve,{})}),e.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:8,marginTop:8},children:[e.jsx(n,{variant:"primary",type:"submit",size:a,children:"提交"}),e.jsx(n,{type:"button",variant:"ghost",size:a,children:"重置"})]})]})]},a))})}},z={name:"禁用状态",render:()=>e.jsxs("div",{children:[e.jsx("div",{style:{margin:"20px 0"},children:"整个表单禁用"}),e.jsxs(p,{initialValues:{username:"John Doe",email:"john@example.com"},layout:"vertical",disabled:!0,children:[e.jsx(l,{name:"username",label:"用户名",children:e.jsx(s,{})}),e.jsx(l,{name:"email",label:"邮箱",children:e.jsx(s,{})}),e.jsx(n,{variant:"primary",type:"submit",children:"提交"})]}),e.jsx("hr",{style:{margin:"32px 0"}}),e.jsx("div",{style:{margin:"20px 0"},children:"单个字段禁用"}),e.jsxs(p,{initialValues:{username:"",category:""},layout:"horizontal",style:{maxWidth:720},children:[e.jsx(l,{name:"username",label:"用户名",rules:[{validate:r=>r?void 0:"用户名不能为空"}],children:e.jsx(s,{placeholder:"请输入用户名",width:200,disabled:!0})}),e.jsx(l,{name:"category",label:"分类",disabled:!0,children:e.jsx(I,{options:[{label:"全部",value:""},{label:"新闻",value:"news"},{label:"博客",value:"blog"},{label:"文档",value:"docs"}],placeholder:"请选择",width:200})}),e.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:8,marginTop:8},children:[e.jsx(n,{variant:"primary",type:"submit",children:"提交"}),e.jsx(n,{type:"button",variant:"ghost",children:"重置"})]})]})]})},J={name:"自定义验证",render:()=>{const r=a=>{console.log("validateWhenDisabled 提交的数据:",a),h.info(` ${JSON.stringify(a)}`,{duration:0,title:"表单数据"})};return e.jsxs(p,{initialValues:{username:"bc",description:""},onSubmit:r,layout:"vertical",children:[e.jsx(l,{name:"username",label:"用户名",required:!0,rules:[{validate:a=>a!=="abc"?"必须为 abc":void 0,validateWhenDisabled:!0}],children:e.jsx(s,{disabled:!0})}),e.jsx(l,{name:"description",label:"简介",required:!0,rules:[{validate:a=>a?void 0:"onChange 必填",trigger:"onChange"},{validate:a=>a&&a.length<3?"onBlur: 至少 3 个字符":void 0,trigger:"onBlur"}],children:e.jsx(s,{placeholder:"输入时触发 onChange 规则，失焦时触发 onBlur 规则"})}),e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(n,{variant:"primary",type:"submit",children:"提交"})})]})}},P={name:"异步校验",render:()=>{const r=a=>{h.success(JSON.stringify(a,null,2),{duration:0,title:"表单数据"})};return e.jsxs(p,{initialValues:{username:""},onSubmit:r,layout:"vertical",children:[e.jsx(l,{name:"username",label:"用户名",required:!0,help:"输入 taken 会触发占用提示（模拟异步校验）",rules:[{validate:async a=>{if(!a)return"用户名不能为空";if(await new Promise(t=>setTimeout(t,600)),a==="taken")return"用户名已被占用"}}],children:e.jsx(s,{placeholder:"请输入用户名（试试输入 taken）"})}),e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(n,{variant:"primary",type:"submit",children:"提交"})})]})}},_={name:"动态字段（增/删）",render:()=>{const r=m.useRef(null),[a,t]=m.useState([0]),d=m.useRef(1),c=()=>t(y=>[...y,d.current++]),S=y=>t(f=>f.filter(v=>v!==y)),C=y=>{const f=new Set(a.map(j=>`item-${j+1}`)),v=Object.fromEntries(Object.entries(y).filter(([j])=>f.has(j)));h.info(JSON.stringify(v,null,2),{duration:0,title:"表单数据"})};return e.jsxs(p,{ref:r,onSubmit:C,layout:"horizontal",children:[e.jsx("div",{style:{display:"flex",flexDirection:"row-reverse",marginBottom:8},children:e.jsx(n,{type:"button",onClick:c,children:"添加字段"})}),a.map(y=>e.jsx("div",{children:e.jsx(l,{name:`item-${y+1}`,label:`项 ${y+1}`,rules:[{validate:f=>f?void 0:"不能为空"}],children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx(s,{placeholder:"输入值",style:{width:"100%"}}),e.jsx(n,{type:"button",style:{width:80},color:"danger",onClick:()=>S(y),children:"删除"})]})})},y)),e.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:8},children:e.jsx(n,{variant:"primary",type:"submit",children:"提交"})})]})}},E={name:"字段依赖",render:()=>{const r=t=>{h.info(JSON.stringify(t,null,2),{duration:0,title:"表单数据"})},a=()=>{const t=ie();return e.jsx(l,{name:"phone",label:"联系电话",required:!0,help:(t.values.country??"cn")==="cn"?"中国手机号建议以 +86 或区号开头":"请输入国际/本地号码",rules:[{validate:(d,c)=>(c?.country??"cn")==="cn"&&d&&!/^\+?86/.test(d)?"中国手机号请以 +86 或区号开头":void 0},{validate:(d,c)=>(c?.country??"cn")==="us"&&d&&!/^\+?1/.test(d)?"美国手机号请以 +1 开头":void 0}],children:e.jsx(s,{placeholder:"根据国家不同校验规则不同"})})};return e.jsxs(p,{onSubmit:r,initialValues:{country:"cn",phone:""},layout:"vertical",children:[e.jsx(l,{name:"country",label:"国家",children:e.jsx(I,{options:[{label:"中国",value:"cn"},{label:"美国",value:"us"}]})}),e.jsx(a,{}),e.jsx(n,{variant:"primary",type:"submit",children:"提交"})]})}},W={name:"useFormContext 用法",render:()=>{const r=t=>{h.info(JSON.stringify(t,null,2),{duration:0,title:"表单数据"})},a=()=>{const t=ie(),[d,c]=m.useState(!1),[S,C]=m.useState("");m.useEffect(()=>{if(d){const v=t?.values?.dynamicField;C(v??"")}},[d]);const y=()=>{t?.registerField?.("dynamicField",[{validate:v=>v?void 0:"动态字段不能为空"}]),c(!0)},f=()=>{t?.unregisterField?.("dynamicField"),c(!1),C("")};return e.jsxs("div",{style:{marginTop:12,border:"1px dashed #e6e6e6",padding:12},children:[e.jsxs("div",{style:{marginBottom:8},children:[e.jsx("strong",{children:"当前表单值："}),e.jsx("pre",{style:{whiteSpace:"pre-wrap",margin:0},children:JSON.stringify(t?.values??{},null,2)})]}),e.jsxs("div",{style:{marginBottom:8},children:[e.jsx("strong",{children:"校验信息："}),e.jsx("pre",{style:{whiteSpace:"pre-wrap",margin:0},children:JSON.stringify(t?.errors??{},null,2)})]}),e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:8},children:[e.jsx(n,{type:"button",onClick:()=>t?.setFieldsValue?.({name:"hook-user",email:"hook@example.com"}),children:"设置示例值"}),e.jsx(n,{type:"button",onClick:()=>t?.reset?.(),children:"重置"}),e.jsx(n,{type:"button",onClick:()=>t?.validate?.()?.then(v=>{v?h.success("表单校验通过"):h.error("表单校验未通过，请检查错误")}),children:"校验整个表单 (validate)"}),e.jsx(n,{type:"button",onClick:()=>t?.validateField?.("email")?.then(v=>h.info(v?"email 字段校验通过":"email 字段校验未通过")),children:"校验 email 字段 (validateField)"}),e.jsx(n,{type:"button",onClick:()=>console.log("form (from useFormContext):",t),children:"打印 form 对象"})]}),e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",marginBottom:8},children:[d?e.jsx(n,{type:"button",onClick:f,color:"danger",children:"注销动态字段 `dynamicField`"}):e.jsx(n,{type:"button",onClick:y,children:"注册动态字段 `dynamicField`"}),d&&e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(s,{placeholder:"动态字段输入",value:S,onChange:v=>{const j=v?.target?.value;C(j),t?.setFieldValue?.("dynamicField",j),t?.setFieldsValue?.({dynamicField:j})},style:{width:220}}),e.jsx(n,{type:"button",onClick:()=>t?.validateField?.("dynamicField")?.then(v=>h.info(v?"动态字段校验通过":"动态字段校验未通过")),children:"校验动态字段"})]})]})]})};return e.jsxs(p,{initialValues:{name:"",email:""},onSubmit:r,layout:"vertical",children:[e.jsx(l,{name:"name",label:"姓名",required:!0,rules:[{validate:t=>t?void 0:"姓名不能为空"}],children:e.jsx(s,{placeholder:"请输入姓名"})}),e.jsx(l,{name:"email",label:"邮箱",required:!0,rules:[{validate:t=>t&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)?"邮箱格式不正确":void 0}],children:e.jsx(s,{placeholder:"请输入邮箱"})}),e.jsx(a,{}),e.jsx("div",{style:{marginTop:8},children:e.jsx(n,{variant:"primary",type:"submit",children:"提交"})})]})}},A={name:"使用ref控制",render:()=>{const r=m.useRef(null),a=t=>{h.info(JSON.stringify(t,null,2),{duration:0,title:"表单数据"})};return e.jsxs(p,{ref:r,onSubmit:a,initialValues:{name:"",email:""},layout:"vertical",children:[e.jsx(l,{name:"name",label:"姓名",children:e.jsx(s,{placeholder:"请输入姓名"})}),e.jsx(l,{name:"email",label:"邮箱",children:e.jsx(s,{type:"email",placeholder:"请输入邮箱"})}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(n,{type:"button",onClick:()=>r.current?.reset(),children:"重置（ref.reset）"}),e.jsx(n,{type:"button",onClick:()=>r.current?.setFieldsValue?.({name:"示例用户",email:"demo@example.com"}),children:"填充示例数据（ref.setFieldsValue）"}),e.jsx(n,{variant:"primary",type:"submit",children:"提交"})]})]})}},L={name:"提交前拦截（同步）",render:()=>{const r=t=>{h.success(JSON.stringify(t,null,2),{duration:0,title:"提交成功"})},a=t=>t?.name?!0:(h.error("姓名不能为空，已阻止提交"),!1);return e.jsxs(p,{initialValues:{name:""},beforeSubmit:a,onSubmit:r,layout:"vertical",children:[e.jsx(l,{name:"name",label:"姓名",children:e.jsx(s,{placeholder:"尝试不填并提交，会被拦截"})}),e.jsx("div",{style:{marginTop:8},children:e.jsx(n,{variant:"primary",type:"submit",children:"提交"})})]})}},M={name:"提交前拦截（异步）",render:()=>{const r=t=>{h.success(JSON.stringify(t,null,2),{duration:0,title:"提交成功"})},a=async t=>(await new Promise(d=>setTimeout(d,800)),t?.email&&t.email.includes("block")?(h.error("该邮箱被拦截，无法提交"),!1):!0);return e.jsxs(p,{initialValues:{email:""},beforeSubmit:a,onSubmit:r,layout:"vertical",children:[e.jsx(l,{name:"email",label:"邮箱",children:e.jsx(s,{placeholder:"输入包含 block 的邮箱会被异步拦截"})}),e.jsx("div",{style:{marginTop:8},children:e.jsx(n,{variant:"primary",type:"submit",children:"提交"})})]})}},Y={name:"完整综合表单",render:()=>{const r=m.useRef(null),a=t=>{console.log("完整表单提交数据:",t),h.info(JSON.stringify(t,null,2),{duration:0,title:"表单数据"})};return e.jsxs(p,{ref:r,initialValues:{fullName:"",email:"",phone:"",birthday:"",userType:"individual",industryCategory:"",newsletter:!1,notifications:!0,department:"",jobTitle:"",description:"",agreement:!1},onSubmit:a,layout:"vertical",children:[e.jsx("h3",{children:"基础信息"}),e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx("div",{style:{flex:1},children:e.jsx(l,{name:"fullName",label:"全名",required:!0,rules:[{validate:t=>t?void 0:"全名不能为空"},{validate:t=>t?.length<2?"至少 2 个字符":void 0}],children:e.jsx(s,{placeholder:"请输入您的全名"})})}),e.jsx("div",{style:{flex:1},children:e.jsx(l,{name:"birthday",label:"出生年月",children:e.jsx(pe,{picker:"month",placeholder:"选择出生年月",format:"YYYY-MM"})})})]}),e.jsx(l,{name:"email",label:"电子邮箱",required:!0,rules:[{validate:t=>t?void 0:"邮箱不能为空"},{validate:t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)?void 0:"请输入有效的邮箱"}],children:e.jsx(s,{type:"email",placeholder:"example@domain.com"})}),e.jsx(l,{name:"phone",label:"电话号码",help:"格式：+86 10 12345678 或 010-12345678",children:e.jsx(s,{placeholder:"请输入电话号码"})}),e.jsx("h3",{children:"用户类型与分类"}),e.jsx(l,{name:"userType",label:"用户类型",required:!0,children:e.jsxs(ue,{name:"userType",children:[e.jsx(G,{value:"individual",label:"个人用户"}),e.jsx(G,{value:"enterprise",label:"企业用户"}),e.jsx(G,{value:"developer",label:"开发者"})]})}),e.jsx(l,{name:"industryCategory",label:"行业分类",required:!0,rules:[{validate:t=>t?void 0:"请选择行业分类"}],children:e.jsx(I,{options:[{label:"信息技术",value:"it"},{label:"金融服务",value:"finance"},{label:"教育培训",value:"education"},{label:"医疗健康",value:"healthcare"},{label:"零售电商",value:"retail"},{label:"其他",value:"other"}],placeholder:"请选择所属行业"})}),e.jsx("h3",{children:"偏好设置"}),e.jsx(l,{name:"notifications",label:"通知偏好",children:e.jsx(ce,{checkedChildren:"启用推送",unCheckedChildren:"关闭推送"})}),e.jsx(l,{name:"newsletter",label:"订阅",children:e.jsx(re,{label:"订阅每周新闻通讯"})}),e.jsx("h3",{children:"工作信息"}),e.jsx(l,{name:"department",label:"部门",children:e.jsx(I,{options:[{label:"产品部",value:"product"},{label:"技术部",value:"tech"},{label:"设计部",value:"design"},{label:"市场部",value:"marketing"},{label:"运营部",value:"ops"},{label:"人力资源",value:"hr"}],placeholder:"选择部门"})}),e.jsx(l,{name:"jobTitle",label:"职位",children:e.jsx(s,{placeholder:"请输入职位名称"})}),e.jsx(l,{name:"description",label:"个人描述",help:"简要介绍您自己和您的专业背景",children:e.jsx(s,{textarea:!0,rows:4,placeholder:"请输入您的个人描述或专业背景"})}),e.jsx("h3",{children:"附件上传"}),e.jsx(l,{name:"attachments",label:"上传文件",help:"支持 PDF、Word、Excel 等常见文件格式，单个文件不超过 10MB",children:e.jsx(ve,{multiple:!0,accept:".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"})}),e.jsx("h3",{children:"协议与确认"}),e.jsx(l,{name:"agreement",label:"协议",required:!0,rules:[{validate:t=>t?void 0:"必须同意协议才能提交"}],children:e.jsx(re,{label:"我已阅读并同意服务条款、隐私政策和数据处理协议"})}),e.jsxs("div",{style:{display:"flex",gap:8,marginTop:32},children:[e.jsx(n,{variant:"primary",type:"submit",size:"medium",children:"提交申请"}),e.jsx(n,{type:"button",variant:"ghost",onClick:()=>r.current?.reset(),children:"重置表单"})]})]})}},U={name:"原生组件（Native）",render:()=>{const[r,a]=m.useState("b"),[t,d]=m.useState("b");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{style:{fontSize:12,opacity:.8},children:["当前外部受控值：nativeTag=",r,"，customTag=",t]}),e.jsxs(p,{initialValues:{nativeTag:"a",customTag:"a"},layout:"vertical",children:[e.jsx(l,{name:"nativeTag",label:"原生 Select（外部受控）",children:e.jsxs("select",{value:r,onChange:c=>a(c.target.value),children:[e.jsx("option",{value:"a",children:"A"}),e.jsx("option",{value:"b",children:"B"})]})}),e.jsx(l,{name:"customTag",label:"自家 Select（外部受控）",children:e.jsx(I,{options:[{label:"A",value:"a"},{label:"B",value:"b"}],value:t,onChange:c=>d(c),style:{width:200}})})]})]})}},H={name:"由 Form 控制的多选",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:e.jsxs(p,{initialValues:{nativeTags:["a"],customTags:["a"]},layout:"vertical",children:[e.jsx(l,{name:"nativeTags",label:"原生 multiple（由 Form 控制）",children:e.jsxs("select",{multiple:!0,"aria-label":"native-form-multi",children:[e.jsx("option",{value:"a",children:"A"}),e.jsx("option",{value:"b",children:"B"}),e.jsx("option",{value:"c",children:"C"})]})}),e.jsx(l,{name:"customTags",label:"自家 Select multiple（由 Form 控制）",children:e.jsx(I,{multiple:!0,options:[{label:"A",value:"a"},{label:"B",value:"b"},{label:"C",value:"c"}],style:{width:240}})})]})})};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:"基本使用",...D.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: '水平布局',
  render: () => {
    const handleSubmit = (values: any) => {
      console.log('提交的数据:', values);
    };
    return <Form initialValues={{
      name: '',
      age: ''
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

        <div style={{
        marginLeft: 116
      }}>
          <Button variant="primary" type="submit">
            提交
          </Button>
        </div>
      </Form>;
  }
}`,...q.parameters?.docs?.source},description:{story:"水平布局（标签在左，输入框在右）",...q.parameters?.docs?.description}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:"行内布局（所有字段在一行）",...$.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:"不同尺寸",...O.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source},description:{story:"禁用状态",...z.parameters?.docs?.description}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:`自定义验证规则示例
- validateWhenDisabled: true 表示即使字段被禁用也执行该验证规则
- trigger: 'onChange' | 'onBlur' 指定验证触发时机`,...J.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source},description:{story:"异步校验示例",...P.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:"动态字段示例：演示增删字段并校验",..._.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:"字段依赖示例：根据一个字段值调整另一个字段的校验规则",...E.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
          }}>{JSON.stringify(form?.values ?? {}, null, 2)}</pre>
          </div>
          <div style={{
          marginBottom: 8
        }}>
            <strong>校验信息：</strong>
            <pre style={{
            whiteSpace: 'pre-wrap',
            margin: 0
          }}>{JSON.stringify(form?.errors ?? {}, null, 2)}</pre>
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
}`,...W.parameters?.docs?.source},description:{story:"useFormContext 演示\n- 展示如何在子组件中通过 hook 访问 `form` 对象（values、errors 等）\n- 演示 programmatic setFieldsValue、reset 和触发校验",...W.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:"使用 ref 进行程序化控制（reset / setFieldsValue）",...A.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source},description:{story:"提交前拦截示例（同步）",...L.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:"提交前拦截示例（异步）",...M.parameters?.docs?.description}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:"完整的综合表单 - 包含库里所有主要表单组件",...Y.parameters?.docs?.description}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source},description:{story:"原生表单控件（用于验证 FormItem 不覆盖外部受控 value）",...U.parameters?.docs?.description}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: '由 Form 控制的多选',
  render: () => {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }}>
        <Form initialValues={{
        nativeTags: ['a'],
        customTags: ['a']
      }} layout="vertical">
          <FormItem name="nativeTags" label="原生 multiple（由 Form 控制）">
            <select multiple aria-label="native-form-multi">
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
            </select>
          </FormItem>

          <FormItem name="customTags" label="自家 Select multiple（由 Form 控制）">
            <Select multiple options={[{
            label: 'A',
            value: 'a'
          }, {
            label: 'B',
            value: 'b'
          }, {
            label: 'C',
            value: 'c'
          }]} style={{
            width: 240
          }} />
          </FormItem>
        </Form>
      </div>;
  }
}`,...H.parameters?.docs?.source},description:{story:"由 Form 控制的多选示例（不在子组件上传 value）",...H.parameters?.docs?.description}}};const Ae=["Default","HorizontalLayout","InlineLayout","Sizes","Disabled","ValidateWhenDisabled","AsyncValidation","DynamicFields","DependentFields","UseFormContextDemo","ProgrammaticControls","BeforeSubmitSync","BeforeSubmitAsync","ComprehensiveForm","NativeElements","ControlledByFormMultiple"];export{P as AsyncValidation,M as BeforeSubmitAsync,L as BeforeSubmitSync,Y as ComprehensiveForm,H as ControlledByFormMultiple,D as Default,E as DependentFields,z as Disabled,_ as DynamicFields,q as HorizontalLayout,$ as InlineLayout,U as NativeElements,A as ProgrammaticControls,O as Sizes,W as UseFormContextDemo,J as ValidateWhenDisabled,Ae as __namedExportsOrder,We as default};
