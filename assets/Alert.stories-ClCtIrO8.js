import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as h}from"./iframe-CUpoYAUB.js";import{I as W,W as E}from"./Info-BcfQhsHo.js";import{C as M}from"./Close-IiX-HAFp.js";import{C as k}from"./Check-C9Lcua7d.js";import"./preload-helper-PPVm8Dsz.js";const s=h.forwardRef(({className:r,type:t="info",title:x,message:j,closable:R=!1,onClose:C,compact:I=!1,icon:S,showIcon:w=!0,closeIcon:A,showBorder:B=!0,children:z,...N},_)=>{const[V,T]=h.useState(!0),D=()=>{T(!1),C?.()};if(!V)return null;const a=["beaver-alert"];t&&a.push(`beaver-alert--${t}`),I&&a.push("beaver-alert--compact"),B||a.push("beaver-alert--no-border"),r&&a.push(r),w||a.push("beaver-alert--no-icon");const q=S!==void 0?S:{success:e.jsx(k,{width:20,height:20,"aria-hidden":!0}),warning:e.jsx(E,{width:20,height:20,"aria-hidden":!0}),error:e.jsx(M,{width:20,height:20,"aria-hidden":!0}),info:e.jsx(W,{width:20,height:20,"aria-hidden":!0})}[t];return e.jsxs("div",{ref:_,className:a.join(" "),role:"alert",...N,children:[B&&e.jsx("div",{className:"beaver-alert__border"}),w&&e.jsx("div",{className:"beaver-alert__icon",children:q}),e.jsxs("div",{className:"beaver-alert__content",children:[x&&e.jsx("div",{className:"beaver-alert__title",children:typeof x=="string"?e.jsx("span",{children:x}):x}),(j||z)&&e.jsx("div",{className:"beaver-alert__message",children:j||z})]}),R&&e.jsx("button",{type:"button",className:"beaver-alert__close","aria-label":"关闭提示",onClick:D,children:A!==void 0?A:"×"})]})});s.displayName="Alert";s.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{type:{required:!1,tsType:{name:"union",raw:"'success' | 'warning' | 'error' | 'info'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"}]},description:"提示类型，用于控制颜色和图标",defaultValue:{value:"'info'",computed:!1}},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"提示标题"},message:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"提示内容/描述"},closable:{required:!1,tsType:{name:"boolean"},description:"是否展示关闭按钮",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"关闭按钮点击回调"},compact:{required:!1,tsType:{name:"boolean"},description:"是否为紧凑模式（减少内边距）",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"自定义图标"},showIcon:{required:!1,tsType:{name:"boolean"},description:"是否展示图标",defaultValue:{value:"true",computed:!1}},closeIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"自定义关闭按钮"},showBorder:{required:!1,tsType:{name:"boolean"},description:"是否展示左边的颜色条",defaultValue:{value:"true",computed:!1}}}};const K={title:"反馈（Feedback）/Alert",component:s,tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{width:"100%",maxWidth:600},children:e.jsx(r,{})})],parameters:{docs:{description:{component:`Alert 全局提示组件

- 使用场景：向用户展示重要的操作结果或反馈信息
- 显示系统级别的通知或警告
- 支持四种类型：success（成功）、warning（警告）、error（错误）、info（信息）
- 支持标题和描述两层信息结构
- 可以手动关闭提示`}}}},o={name:"默认（信息）",args:{type:"info",message:"这是一条信息提示"}},i={name:"成功",args:{type:"success",title:"操作成功",message:"您的操作已完成，数据已正确保存。",closable:!0}},n={name:"警告",args:{type:"warning",title:"请注意",message:"这个操作可能会影响您的数据，请确认后继续。",closable:!0}},l={name:"错误",args:{type:"error",title:"操作失败",message:"由于网络连接问题，您的操作无法完成。请检查网络设置后重试。",closable:!0}},c={name:"信息",args:{type:"info",title:"提示信息",message:"系统将在今晚 10 点进行定期维护，期间可能会影响您的使用。",closable:!0}},d={name:"仅消息（无标题）",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#666",marginBottom:8},children:"成功"}),e.jsx(s,{type:"success",message:"操作成功",closable:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#666",marginBottom:8},children:"警告"}),e.jsx(s,{type:"warning",message:"请确认您的操作",closable:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#666",marginBottom:8},children:"错误"}),e.jsx(s,{type:"error",message:"发生了一个错误",closable:!0})]})]})},m={name:"标题和消息",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#666",marginBottom:8},children:"成功：两级信息"}),e.jsx(s,{type:"success",title:"保存成功",message:"您的个人资料已更新，更改将在下一次登录时生效。",closable:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#666",marginBottom:8},children:"错误：两级信息"}),e.jsx(s,{type:"error",title:"验证失败",message:"请确保邮箱地址正确，然后重新尝试提交表单。",closable:!0})]})]})},p={name:"紧凑模式",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#666",marginBottom:8},children:"标准模式"}),e.jsx(s,{type:"info",message:"这是标准模式的提示信息",closable:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#666",marginBottom:8},children:"紧凑模式"}),e.jsx(s,{type:"info",message:"这是紧凑模式的提示信息",closable:!0,compact:!0})]})]})},u={name:"无左侧边框和图标",args:{type:"warning",title:"警告",message:"这个提示没有左侧的颜色条和图标",showBorder:!1,closable:!0,showIcon:!1}},g={name:"可关闭",render:()=>{const[r,t]=h.useState(!0);return r?e.jsx(s,{type:"success",title:"成功提示",message:"这是一个可以关闭的提示，点击右侧的 × 按钮可以关闭它",closable:!0,onClose:()=>t(!1)}):e.jsx("div",{style:{padding:12,background:"#f5f5f5",borderRadius:6},children:e.jsx("p",{style:{margin:0,color:"#666",fontSize:14},children:"提示已关闭。（刷新页面重置）"})})}},f={name:"自定义图标",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(s,{type:"success",title:"自定义图标",message:"使用 Emoji 作为自定义图标",icon:"🎉",closable:!0}),e.jsx(s,{type:"warning",title:"自定义图标",message:"使用文本作为自定义图标",icon:"!",closable:!0}),e.jsx(s,{type:"error",title:"自定义图标",message:"使用特殊符号作为自定义图标",icon:"🚫",closable:!0})]})},y={name:"自定义关闭按钮",render:()=>{const[r,t]=h.useState(!0);return r?e.jsx(s,{type:"info",title:"自定义关闭按钮",message:"这个提示使用自定义的关闭按钮",closable:!0,closeIcon:"✕",onClose:()=>t(!1)}):e.jsx("p",{style:{color:"#999"},children:"已关闭"})}},v={name:"长内容",args:{type:"warning",title:"重要通知",message:"这是一个包含较长内容的提示消息。Alert 组件能够正确地处理多行文本，并确保内容的可读性。当内容超过容器宽度时，文本会自动换行。您可以点击关闭按钮来隐藏此提示。这对于向用户展示详细的操作反馈或系统通知非常有用。",closable:!0}},b={name:"所有类型对比",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#666",marginBottom:8},children:"信息（info）"}),e.jsx(s,{type:"info",title:"信息提示",message:"这是一条普通的信息提示，用于向用户说明某些情况。",closable:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#666",marginBottom:8},children:"成功（success）"}),e.jsx(s,{type:"success",title:"成功提示",message:"操作已成功完成，所有更改都已保存。",closable:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#666",marginBottom:8},children:"警告（warning）"}),e.jsx(s,{type:"warning",title:"警告提示",message:"请谨慎处理，此操作可能会对数据造成影响。",closable:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#666",marginBottom:8},children:"错误（error）"}),e.jsx(s,{type:"error",title:"错误提示",message:"操作失败，请检查您的输入或网络连接后重试。",closable:!0})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: '默认（信息）',
  args: {
    type: 'info',
    message: '这是一条信息提示'
  }
}`,...o.parameters?.docs?.source},description:{story:"基础使用 - 仅展示消息",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: '成功',
  args: {
    type: 'success',
    title: '操作成功',
    message: '您的操作已完成，数据已正确保存。',
    closable: true
  }
}`,...i.parameters?.docs?.source},description:{story:`成功类型的提示
常用于表示操作成功、数据保存成功等场景`,...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: '警告',
  args: {
    type: 'warning',
    title: '请注意',
    message: '这个操作可能会影响您的数据，请确认后继续。',
    closable: true
  }
}`,...n.parameters?.docs?.source},description:{story:`警告类型的提示
常用于提醒用户注意某些重要信息或潜在风险`,...n.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: '错误',
  args: {
    type: 'error',
    title: '操作失败',
    message: '由于网络连接问题，您的操作无法完成。请检查网络设置后重试。',
    closable: true
  }
}`,...l.parameters?.docs?.source},description:{story:`错误类型的提示
常用于显示操作失败、验证错误等错误信息`,...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: '信息',
  args: {
    type: 'info',
    title: '提示信息',
    message: '系统将在今晚 10 点进行定期维护，期间可能会影响您的使用。',
    closable: true
  }
}`,...c.parameters?.docs?.source},description:{story:`信息类型的提示
常用于显示一般性的信息、提示或说明`,...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '仅消息（无标题）',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <div>
        <div style={{
        fontSize: 12,
        color: '#666',
        marginBottom: 8
      }}>成功</div>
        <Alert type="success" message="操作成功" closable />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#666',
        marginBottom: 8
      }}>警告</div>
        <Alert type="warning" message="请确认您的操作" closable />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#666',
        marginBottom: 8
      }}>错误</div>
        <Alert type="error" message="发生了一个错误" closable />
      </div>
    </div>
}`,...d.parameters?.docs?.source},description:{story:`仅显示消息，不显示标题
适合简短的提示信息`,...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '标题和消息',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <div>
        <div style={{
        fontSize: 12,
        color: '#666',
        marginBottom: 8
      }}>成功：两级信息</div>
        <Alert type="success" title="保存成功" message="您的个人资料已更新，更改将在下一次登录时生效。" closable />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#666',
        marginBottom: 8
      }}>错误：两级信息</div>
        <Alert type="error" title="验证失败" message="请确保邮箱地址正确，然后重新尝试提交表单。" closable />
      </div>
    </div>
}`,...m.parameters?.docs?.source},description:{story:`标题和消息都显示
用于显示更详细的信息结构`,...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '紧凑模式',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <div>
        <div style={{
        fontSize: 12,
        color: '#666',
        marginBottom: 8
      }}>标准模式</div>
        <Alert type="info" message="这是标准模式的提示信息" closable />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#666',
        marginBottom: 8
      }}>紧凑模式</div>
        <Alert type="info" message="这是紧凑模式的提示信息" closable compact />
      </div>
    </div>
}`,...p.parameters?.docs?.source},description:{story:`紧凑模式
减少内边距，适合空间受限的场景（如工具栏、表单旁注）`,...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '无左侧边框和图标',
  args: {
    type: 'warning',
    title: '警告',
    message: '这个提示没有左侧的颜色条和图标',
    showBorder: false,
    closable: true,
    showIcon: false
  }
}`,...u.parameters?.docs?.source},description:{story:`无左侧边框和图标
当不需要左侧颜色条和图标时可以使用`,...u.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '可关闭',
  render: () => {
    const [isVisible, setIsVisible] = React.useState(true);
    if (!isVisible) {
      return <div style={{
        padding: 12,
        background: '#f5f5f5',
        borderRadius: 6
      }}>
          <p style={{
          margin: 0,
          color: '#666',
          fontSize: 14
        }}>提示已关闭。（刷新页面重置）</p>
        </div>;
    }
    return <Alert type="success" title="成功提示" message="这是一个可以关闭的提示，点击右侧的 × 按钮可以关闭它" closable onClose={() => setIsVisible(false)} />;
  }
}`,...g.parameters?.docs?.source},description:{story:`可关闭状态演示
点击关闭按钮将隐藏该提示`,...g.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: '自定义图标',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <Alert type="success" title="自定义图标" message="使用 Emoji 作为自定义图标" icon="🎉" closable />
      <Alert type="warning" title="自定义图标" message="使用文本作为自定义图标" icon="!" closable />
      <Alert type="error" title="自定义图标" message="使用特殊符号作为自定义图标" icon="🚫" closable />
    </div>
}`,...f.parameters?.docs?.source},description:{story:`自定义图标
可以使用任意内容替换默认图标`,...f.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '自定义关闭按钮',
  render: () => {
    const [visible, setVisible] = React.useState(true);
    if (!visible) {
      return <p style={{
        color: '#999'
      }}>已关闭</p>;
    }
    return <Alert type="info" title="自定义关闭按钮" message="这个提示使用自定义的关闭按钮" closable closeIcon="✕" onClose={() => setVisible(false)} />;
  }
}`,...y.parameters?.docs?.source},description:{story:`自定义关闭按钮
可以使用自定义的关闭按钮样式`,...y.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '长内容',
  args: {
    type: 'warning',
    title: '重要通知',
    message: '这是一个包含较长内容的提示消息。Alert 组件能够正确地处理多行文本，并确保内容的可读性。当内容超过容器宽度时，文本会自动换行。您可以点击关闭按钮来隐藏此提示。这对于向用户展示详细的操作反馈或系统通知非常有用。',
    closable: true
  }
}`,...v.parameters?.docs?.source},description:{story:`长内容处理
演示 Alert 如何处理很长的文本内容`,...v.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '所有类型对比',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <div>
        <div style={{
        fontSize: 12,
        color: '#666',
        marginBottom: 8
      }}>信息（info）</div>
        <Alert type="info" title="信息提示" message="这是一条普通的信息提示，用于向用户说明某些情况。" closable />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#666',
        marginBottom: 8
      }}>成功（success）</div>
        <Alert type="success" title="成功提示" message="操作已成功完成，所有更改都已保存。" closable />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#666',
        marginBottom: 8
      }}>警告（warning）</div>
        <Alert type="warning" title="警告提示" message="请谨慎处理，此操作可能会对数据造成影响。" closable />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#666',
        marginBottom: 8
      }}>错误（error）</div>
        <Alert type="error" title="错误提示" message="操作失败，请检查您的输入或网络连接后重试。" closable />
      </div>
    </div>
}`,...b.parameters?.docs?.source},description:{story:`各类型对比
同时展示所有四种类型的提示，便于对比`,...b.parameters?.docs?.description}}};const P=["Default","Success","Warning","Error","Info","MessageOnly","WithTitleAndMessage","Compact","NoBorder","Closable","CustomIcon","CustomCloseIcon","LongContent","AllTypes"];export{b as AllTypes,g as Closable,p as Compact,y as CustomCloseIcon,f as CustomIcon,o as Default,l as Error,c as Info,v as LongContent,d as MessageOnly,u as NoBorder,i as Success,n as Warning,m as WithTitleAndMessage,P as __namedExportsOrder,K as default};
