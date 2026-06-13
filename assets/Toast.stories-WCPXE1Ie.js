import{j as s}from"./jsx-runtime-u17CrQMm.js";import{R as B}from"./iframe-BihDZwrr.js";import{B as t}from"./Button-D5eXmc61.js";import{T as i,a as d}from"./Toast-DDLnkoFO.js";import"./preload-helper-PPVm8Dsz.js";import"./client-CYiWBOFf.js";import"./index-Z1qDU-Vl.js";import"./index-B_xcmWvR.js";import"./Spinner-CKAoCXB_.js";import"./Info-BYSQShoX.js";import"./Close-IiX-HAFp.js";import"./Check-C9Lcua7d.js";const A=["success","warning","error","info","loading"],g={type:{control:{type:"radio"},options:A},title:{control:{type:"text"}},message:{control:{type:"text"}},duration:{control:{type:"number",min:0,step:500}},closable:{control:{type:"boolean"}},icon:{control:{type:"text"}}},D={...g,secondaryTitle:{control:{type:"text"}},secondaryMessage:{control:{type:"text"}},secondaryDuration:{control:{type:"number",min:0,step:500}}},S={...g,loadingMessage:{control:{type:"text"}},loadingSuccessMessage:{control:{type:"text"}},loadingDelay:{control:{type:"number",min:0,step:500}}},O={...g,firstMessage:{control:{type:"text"}},secondMessage:{control:{type:"text"}},thirdMessage:{control:{type:"text"}},repeatDelay:{control:{type:"number",min:0,step:100}},repeatCount:{control:{type:"number",min:1,step:1}},loadingDelay:{control:{type:"number",min:0,step:500}}},F={...g,shortMessage:{control:{type:"text"}},shortDuration:{control:{type:"number",min:0,step:500}},longMessage:{control:{type:"text"}},longDuration:{control:{type:"number",min:0,step:500}},manualMessage:{control:{type:"text"}}},L={...g,emojiIcon:{control:{type:"text"}},textIcon:{control:{type:"text"}},infoMessage:{control:{type:"text"}},textMessage:{control:{type:"text"}}},I={...g,callbackLabel:{control:{type:"text"}}},W={...g,longMessage:{control:{type:"text"}}},R={...g,insideMessage:{control:{type:"text"}},outsideMessage:{control:{type:"text"}}},c=e=>e.trim()||void 0,a=(e,n={})=>{const r={...e,...n};return{title:c(r.title),message:r.message,duration:r.duration,closable:r.closable,icon:c(r.icon)}},o=(e,n)=>(d.clear(),d.show({type:e,...n})),U={title:"反馈（Feedback）/Toast",tags:["autodocs"],parameters:{docs:{description:{component:`Toast 全局通知组件

- 使用场景：全局通知和提示，显示操作结果反馈（成功、失败、警告等）
- 支持 Toast.success()、Toast.error() 等方法调用
- 支持自动关闭（可配置时长）或手动关闭
- 支持标题和描述两层信息
- 支持自定义图标
- 支持回调函数（如关闭时触发）
- 可通过 ToastProvider 配置全局选项`}}}},m={name:"成功通知",args:{type:"success",title:"保存成功",message:"个人资料已更新",duration:3e3,closable:!0,icon:"",secondaryTitle:"保存成功",secondaryMessage:"个人资料已更新",secondaryDuration:5e3},argTypes:D,render:e=>s.jsx(i,{children:s.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[s.jsx(t,{variant:"primary",onClick:()=>{o(e.type,a(e,{title:"",message:e.message}))},children:"显示成功提示"}),s.jsx(t,{variant:"primary",onClick:()=>{o(e.type,a(e,{title:e.secondaryTitle,message:e.secondaryMessage,duration:e.secondaryDuration}))},children:"带标题的成功提示"})]})})},y={name:"错误通知",args:{type:"error",title:"操作失败",message:"网络连接失败，请检查网络设置",duration:5e3,closable:!0,icon:"",secondaryTitle:"操作失败",secondaryMessage:"网络连接失败，请检查网络设置",secondaryDuration:5e3},argTypes:D,render:e=>s.jsx(i,{children:s.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[s.jsx(t,{color:"danger",onClick:()=>{o(e.type,a(e,{title:"",message:e.message}))},children:"显示错误提示"}),s.jsx(t,{color:"danger",onClick:()=>{o(e.type,a(e,{title:e.secondaryTitle,message:e.secondaryMessage,duration:e.secondaryDuration}))},children:"长时间显示的错误提示"})]})})},T={name:"警告通知",args:{type:"warning",title:"提醒",message:"此操作不可撤销",duration:3e3,closable:!0,icon:"",secondaryTitle:"提醒",secondaryMessage:"你有2条未读消息需要处理",secondaryDuration:3e3},argTypes:D,render:e=>s.jsx(i,{children:s.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[s.jsx(t,{onClick:()=>{o(e.type,a(e,{title:"",message:e.message}))},children:"显示警告提示"}),s.jsx(t,{onClick:()=>{o(e.type,a(e,{title:e.secondaryTitle,message:e.secondaryMessage,duration:e.secondaryDuration}))},children:"带标题的警告提示"})]})})},x={name:"信息通知",args:{type:"info",title:"系统通知",message:"页面将在5秒后刷新",duration:5e3,closable:!0,icon:"",secondaryTitle:"系统通知",secondaryMessage:"系统将在今晚10点进行维护，请提前保存数据",secondaryDuration:5e3},argTypes:D,render:e=>s.jsx(i,{children:s.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[s.jsx(t,{onClick:()=>{o(e.type,a(e,{title:"",message:e.message}))},children:"显示信息提示"}),s.jsx(t,{onClick:()=>{o(e.type,a(e,{title:e.secondaryTitle,message:e.secondaryMessage,duration:e.secondaryDuration}))},children:"长通知内容"})]})})},h={name:"加载通知",args:{type:"loading",title:"文件上传",message:"正在加载数据...",duration:3e3,closable:!0,icon:"",loadingMessage:"正在加载数据...",loadingSuccessMessage:"加载完成",loadingDelay:3e3},argTypes:S,render:e=>{const[n,r]=B.useState(null),l=B.useRef(null);B.useEffect(()=>()=>{l.current&&window.clearTimeout(l.current)},[]);const p=u=>{l.current&&window.clearTimeout(l.current);const P=o("loading",{title:c(e.title),message:u?e.loadingMessage:e.message,duration:0,closable:e.closable,icon:c(e.icon)});r(P),l.current=window.setTimeout(()=>{d.close(P),o("success",{title:c(e.title),message:e.loadingSuccessMessage,duration:e.duration,closable:e.closable,icon:c(e.icon)}),r(null)},e.loadingDelay)};return s.jsx(i,{children:s.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[s.jsxs(t,{variant:"primary",onClick:()=>p(!1),children:["显示加载中（",e.loadingDelay/1e3,"秒后自动完成）"]}),s.jsx(t,{variant:"primary",onClick:()=>p(!0),children:"带标题的加载提示"}),n&&s.jsx(t,{onClick:()=>{l.current&&(window.clearTimeout(l.current),l.current=null),d.close(n),r(null)},children:"手动关闭"})]})})}},v={name:"所有类型对比",args:{type:"success",title:"所有类型对比",message:"操作成功",duration:0,closable:!0,icon:"",firstMessage:"操作成功",secondMessage:"请注意",thirdMessage:"操作失败",repeatDelay:300,repeatCount:3,loadingDelay:2e3},argTypes:O,render:e=>s.jsx(i,{children:s.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[s.jsx(t,{size:"small",onClick:()=>{o("success",a(e,{title:e.title,message:e.firstMessage,duration:e.duration}))},children:"Success"}),s.jsx(t,{size:"small",onClick:()=>{o("warning",a(e,{title:e.title,message:e.secondMessage,duration:e.duration}))},children:"Warning"}),s.jsx(t,{size:"small",color:"danger",onClick:()=>{o("error",a(e,{title:e.title,message:e.thirdMessage,duration:e.duration}))},children:"Error"}),s.jsx(t,{size:"small",onClick:()=>{o("info",a(e,{title:e.title,message:e.message,duration:e.duration}))},children:"Info"}),s.jsx(t,{size:"small",onClick:()=>{const n=o("loading",{title:c(e.title),message:"加载中...",duration:0,closable:e.closable,icon:c(e.icon)});window.setTimeout(()=>{d.close(n)},e.loadingDelay||2e3)},children:"Loading"})]})})},f={name:"多条通知堆叠",args:{type:"success",title:"第一条通知",message:"第一条通知",duration:3e3,closable:!0,icon:"",firstMessage:"第一条通知",secondMessage:"第二条通知",thirdMessage:"第三条通知",repeatDelay:300,repeatCount:5},argTypes:O,render:e=>s.jsx(i,{children:s.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[s.jsx(t,{variant:"primary",onClick:()=>{o(e.type,a(e,{title:e.title,message:e.firstMessage})),window.setTimeout(()=>o("info",a(e,{title:e.title,message:e.secondMessage})),e.repeatDelay),window.setTimeout(()=>o("warning",a(e,{title:e.title,message:e.thirdMessage})),e.repeatDelay*2)},children:"显示多条通知"}),s.jsx(t,{variant:"primary",onClick:()=>{d.clear();for(let n=1;n<=e.repeatCount;n++)window.setTimeout(()=>{d.show({type:"info",title:c(e.title),message:`${e.firstMessage} ${n}`,duration:e.duration,closable:e.closable,icon:c(e.icon)})},(n-1)*e.repeatDelay)},children:"快速显示5条通知"}),s.jsx(t,{variant:"ghost",onClick:()=>d.clear(),children:"清空所有通知"})]})})},w={name:"自定义时长",args:{type:"success",title:"自定义时长",message:"1秒后关闭",duration:1e3,closable:!0,icon:"",shortMessage:"1秒后关闭",shortDuration:1e3,longMessage:"5秒后关闭",longDuration:5e3,manualMessage:"不会自动关闭，需手动关闭"},argTypes:F,render:e=>s.jsx(i,{children:s.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[s.jsx(t,{onClick:()=>{o(e.type,a(e,{title:e.title,message:e.shortMessage,duration:e.shortDuration}))},children:"1秒后自动关闭"}),s.jsx(t,{onClick:()=>{o("info",a(e,{title:e.title,message:e.longMessage,duration:e.longDuration}))},children:"5秒后自动关闭"}),s.jsx(t,{onClick:()=>{o("warning",a(e,{title:e.title,message:e.manualMessage,duration:0,closable:!0}))},children:"永不自动关闭"})]})})},b={name:"自定义图标",args:{type:"success",title:"自定义图标",message:"任务完成",duration:3e3,closable:!0,icon:"🎉",emojiIcon:"🎉",textIcon:"★",infoMessage:"提示信息",textMessage:"使用任意内容作为图标"},argTypes:L,render:e=>s.jsx(i,{children:s.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[s.jsx(t,{onClick:()=>{o(e.type,a(e,{title:e.title,message:e.message,icon:e.emojiIcon}))},children:"使用 Emoji 图标"}),s.jsx(t,{onClick:()=>{o("info",a(e,{title:e.title,message:e.infoMessage,icon:"📌"}))},children:"Emoji 提示符"}),s.jsx(t,{onClick:()=>{o("success",a(e,{title:e.title,message:e.textMessage,icon:e.textIcon}))},children:"使用文本符号"})]})})},M={name:"回调函数",args:{type:"success",title:"已保存",message:"已保存",duration:3e3,closable:!0,icon:"",callbackLabel:"成功通知已关闭"},argTypes:I,render:e=>{const[n,r]=B.useState([]),l=p=>{r(u=>[...u,`[${new Date().toLocaleTimeString()}] ${p}`])};return s.jsx(i,{children:s.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[s.jsx(t,{onClick:()=>{o(e.type,{...a(e),onClose:()=>l(e.callbackLabel)})},children:"显示带回调的通知"}),s.jsx("div",{style:{padding:"12px",backgroundColor:"#f5f5f5",borderRadius:"6px",maxHeight:"200px",overflowY:"auto",fontFamily:"monospace",fontSize:"12px"},children:n.length===0?s.jsx("p",{style:{margin:0,color:"#999"},children:"操作日志会显示在这里..."}):n.map((p,u)=>s.jsx("div",{style:{margin:"4px 0",color:"#333"},children:p},u))}),s.jsx(t,{size:"small",variant:"ghost",onClick:()=>r([]),children:"清空日志"})]})})}},C={name:"长内容处理",args:{type:"warning",title:"操作需要确认",message:"这是一个很长的消息内容。Toast 组件能够正确地处理多行文本，并确保内容的可读性。当内容超过容器宽度时，文本会自动换行，不会影响整体的布局。",duration:5e3,closable:!0,icon:"",longMessage:"这是一个很长的消息内容。Toast 组件能够正确地处理多行文本，并确保内容的可读性。当内容超过容器宽度时，文本会自动换行，不会影响整体的布局。"},argTypes:W,render:e=>s.jsx(i,{children:s.jsx(t,{onClick:()=>{o(e.type,a(e,{title:e.title,message:e.longMessage,duration:e.duration}))},children:"显示长内容通知"})})},k={name:"命令式（无需 Provider）",args:{type:"success",title:"直接调用 Toast.success",message:"直接调用 Toast.success，无需 Provider",duration:3e3,closable:!0,icon:""},argTypes:g,render:e=>s.jsx("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:s.jsx(t,{variant:"primary",onClick:()=>{o(e.type,a(e))},children:"直接调用（自动挂载）"})})},j={name:"限定在 Provider 范围内",args:{type:"success",title:"Toast 限定容器（内部）",message:"仅在此容器内显示通知",duration:3e3,closable:!0,icon:"",insideMessage:"仅在此容器内显示通知",outsideMessage:"在页面其他位置调用 Toast"},argTypes:R,render:e=>s.jsxs("div",{style:{display:"flex",gap:16,alignItems:"flex-start"},children:[s.jsx(i,{limitToProvider:!0,children:s.jsxs("div",{style:{width:660,height:220,border:"2px dashed #9aa4b2",borderRadius:8,padding:12,position:"relative",overflow:"auto"},children:[s.jsx("div",{style:{marginBottom:8,color:"#556",fontSize:13},children:"Toast 限定容器（内部）"}),s.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[s.jsx(t,{variant:"primary",onClick:()=>{o(e.type,a(e,{title:e.title,message:e.insideMessage}))},children:"在容器内显示 Toast"}),s.jsx(t,{variant:"ghost",onClick:()=>d.clear(),children:"清空"})]})]})}),s.jsxs("div",{style:{width:240},children:[s.jsx("div",{style:{marginBottom:8,color:"#556",fontSize:13},children:"页面其他位置"}),s.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:s.jsx(t,{onClick:()=>{o(e.type,a(e,{title:e.title,message:e.outsideMessage}))},children:"在页面其他位置调用"})})]})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '成功通知',
  args: {
    type: 'success',
    title: '保存成功',
    message: '个人资料已更新',
    duration: 3000,
    closable: true,
    icon: '',
    secondaryTitle: '保存成功',
    secondaryMessage: '个人资料已更新',
    secondaryDuration: 5000
  },
  argTypes: pairArgTypes,
  render: (args: PairToastArgs) => <ToastProvider>
      <div style={{
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }}>
        <Button variant="primary" onClick={() => {
        showFreshToast(args.type, buildToastOptions(args, {
          title: '',
          message: args.message
        }));
      }}>
          显示成功提示
        </Button>
        <Button variant="primary" onClick={() => {
        showFreshToast(args.type, buildToastOptions(args, {
          title: args.secondaryTitle,
          message: args.secondaryMessage,
          duration: args.secondaryDuration
        }));
      }}>
          带标题的成功提示
        </Button>
      </div>
    </ToastProvider>
}`,...m.parameters?.docs?.source},description:{story:"成功通知",...m.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '错误通知',
  args: {
    type: 'error',
    title: '操作失败',
    message: '网络连接失败，请检查网络设置',
    duration: 5000,
    closable: true,
    icon: '',
    secondaryTitle: '操作失败',
    secondaryMessage: '网络连接失败，请检查网络设置',
    secondaryDuration: 5000
  },
  argTypes: pairArgTypes,
  render: (args: PairToastArgs) => <ToastProvider>
      <div style={{
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }}>
        <Button color="danger" onClick={() => {
        showFreshToast(args.type, buildToastOptions(args, {
          title: '',
          message: args.message
        }));
      }}>
          显示错误提示
        </Button>
        <Button color="danger" onClick={() => {
        showFreshToast(args.type, buildToastOptions(args, {
          title: args.secondaryTitle,
          message: args.secondaryMessage,
          duration: args.secondaryDuration
        }));
      }}>
          长时间显示的错误提示
        </Button>
      </div>
    </ToastProvider>
}`,...y.parameters?.docs?.source},description:{story:"错误通知",...y.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: '警告通知',
  args: {
    type: 'warning',
    title: '提醒',
    message: '此操作不可撤销',
    duration: 3000,
    closable: true,
    icon: '',
    secondaryTitle: '提醒',
    secondaryMessage: '你有2条未读消息需要处理',
    secondaryDuration: 3000
  },
  argTypes: pairArgTypes,
  render: (args: PairToastArgs) => <ToastProvider>
      <div style={{
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }}>
        <Button onClick={() => {
        showFreshToast(args.type, buildToastOptions(args, {
          title: '',
          message: args.message
        }));
      }}>
          显示警告提示
        </Button>
        <Button onClick={() => {
        showFreshToast(args.type, buildToastOptions(args, {
          title: args.secondaryTitle,
          message: args.secondaryMessage,
          duration: args.secondaryDuration
        }));
      }}>
          带标题的警告提示
        </Button>
      </div>
    </ToastProvider>
}`,...T.parameters?.docs?.source},description:{story:"警告通知",...T.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '信息通知',
  args: {
    type: 'info',
    title: '系统通知',
    message: '页面将在5秒后刷新',
    duration: 5000,
    closable: true,
    icon: '',
    secondaryTitle: '系统通知',
    secondaryMessage: '系统将在今晚10点进行维护，请提前保存数据',
    secondaryDuration: 5000
  },
  argTypes: pairArgTypes,
  render: (args: PairToastArgs) => <ToastProvider>
      <div style={{
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }}>
        <Button onClick={() => {
        showFreshToast(args.type, buildToastOptions(args, {
          title: '',
          message: args.message
        }));
      }}>
          显示信息提示
        </Button>
        <Button onClick={() => {
        showFreshToast(args.type, buildToastOptions(args, {
          title: args.secondaryTitle,
          message: args.secondaryMessage,
          duration: args.secondaryDuration
        }));
      }}>
          长通知内容
        </Button>
      </div>
    </ToastProvider>
}`,...x.parameters?.docs?.source},description:{story:"信息通知",...x.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '加载通知',
  args: {
    type: 'loading',
    title: '文件上传',
    message: '正在加载数据...',
    duration: 3000,
    closable: true,
    icon: '',
    loadingMessage: '正在加载数据...',
    loadingSuccessMessage: '加载完成',
    loadingDelay: 3000
  },
  argTypes: loadingArgTypes,
  render: (args: LoadingToastArgs) => {
    const [loadingId, setLoadingId] = React.useState<string | null>(null);
    const timerRef = React.useRef<number | null>(null);
    React.useEffect(() => {
      return () => {
        if (timerRef.current) {
          window.clearTimeout(timerRef.current);
        }
      };
    }, []);
    const showLoading = (withTitle: boolean) => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
      const id = showFreshToast('loading', {
        title: toOptionalText(args.title),
        message: withTitle ? args.loadingMessage : args.message,
        duration: 0,
        closable: args.closable,
        icon: toOptionalText(args.icon)
      });
      setLoadingId(id);
      timerRef.current = window.setTimeout(() => {
        Toast.close(id);
        showFreshToast('success', {
          title: toOptionalText(args.title),
          message: args.loadingSuccessMessage,
          duration: args.duration,
          closable: args.closable,
          icon: toOptionalText(args.icon)
        });
        setLoadingId(null);
      }, args.loadingDelay);
    };
    return <ToastProvider>
        <div style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }}>
          <Button variant="primary" onClick={() => showLoading(false)}>
            显示加载中（{args.loadingDelay / 1000}秒后自动完成）
          </Button>
          <Button variant="primary" onClick={() => showLoading(true)}>
            带标题的加载提示
          </Button>
          {loadingId && <Button onClick={() => {
          if (timerRef.current) {
            window.clearTimeout(timerRef.current);
            timerRef.current = null;
          }
          Toast.close(loadingId);
          setLoadingId(null);
        }}>
              手动关闭
            </Button>}
        </div>
      </ToastProvider>;
  }
}`,...h.parameters?.docs?.source},description:{story:"加载通知",...h.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '所有类型对比',
  args: {
    type: 'success',
    title: '所有类型对比',
    message: '操作成功',
    duration: 0,
    closable: true,
    icon: '',
    firstMessage: '操作成功',
    secondMessage: '请注意',
    thirdMessage: '操作失败',
    repeatDelay: 300,
    repeatCount: 3,
    loadingDelay: 2000
  },
  argTypes: multiArgTypes,
  render: (args: MultiToastArgs) => <ToastProvider>
      <div style={{
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }}>
        <Button size="small" onClick={() => {
        showFreshToast('success', buildToastOptions(args, {
          title: args.title,
          message: args.firstMessage,
          duration: args.duration
        }));
      }}>
          Success
        </Button>
        <Button size="small" onClick={() => {
        showFreshToast('warning', buildToastOptions(args, {
          title: args.title,
          message: args.secondMessage,
          duration: args.duration
        }));
      }}>
          Warning
        </Button>
        <Button size="small" color="danger" onClick={() => {
        showFreshToast('error', buildToastOptions(args, {
          title: args.title,
          message: args.thirdMessage,
          duration: args.duration
        }));
      }}>
          Error
        </Button>
        <Button size="small" onClick={() => {
        showFreshToast('info', buildToastOptions(args, {
          title: args.title,
          message: args.message,
          duration: args.duration
        }));
      }}>
          Info
        </Button>
        <Button size="small" onClick={() => {
        const id = showFreshToast('loading', {
          title: toOptionalText(args.title),
          message: '加载中...',
          duration: 0,
          closable: args.closable,
          icon: toOptionalText(args.icon)
        });
        window.setTimeout(() => {
          Toast.close(id);
        }, args.loadingDelay || 2000);
      }}>
          Loading
        </Button>
      </div>
    </ToastProvider>
}`,...v.parameters?.docs?.source},description:{story:"所有类型对比",...v.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: '多条通知堆叠',
  args: {
    type: 'success',
    title: '第一条通知',
    message: '第一条通知',
    duration: 3000,
    closable: true,
    icon: '',
    firstMessage: '第一条通知',
    secondMessage: '第二条通知',
    thirdMessage: '第三条通知',
    repeatDelay: 300,
    repeatCount: 5
  },
  argTypes: multiArgTypes,
  render: (args: MultiToastArgs) => <ToastProvider>
      <div style={{
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }}>
        <Button variant="primary" onClick={() => {
        showFreshToast(args.type, buildToastOptions(args, {
          title: args.title,
          message: args.firstMessage
        }));
        window.setTimeout(() => showFreshToast('info', buildToastOptions(args, {
          title: args.title,
          message: args.secondMessage
        })), args.repeatDelay);
        window.setTimeout(() => showFreshToast('warning', buildToastOptions(args, {
          title: args.title,
          message: args.thirdMessage
        })), args.repeatDelay * 2);
      }}>
          显示多条通知
        </Button>
        <Button variant="primary" onClick={() => {
        Toast.clear();
        for (let i = 1; i <= args.repeatCount; i++) {
          window.setTimeout(() => {
            Toast.show({
              type: 'info',
              title: toOptionalText(args.title),
              message: \`\${args.firstMessage} \${i}\`,
              duration: args.duration,
              closable: args.closable,
              icon: toOptionalText(args.icon)
            });
          }, (i - 1) * args.repeatDelay);
        }
      }}>
          快速显示5条通知
        </Button>
        <Button variant="ghost" onClick={() => Toast.clear()}>
          清空所有通知
        </Button>
      </div>
    </ToastProvider>
}`,...f.parameters?.docs?.source},description:{story:"多条通知堆叠",...f.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: '自定义时长',
  args: {
    type: 'success',
    title: '自定义时长',
    message: '1秒后关闭',
    duration: 1000,
    closable: true,
    icon: '',
    shortMessage: '1秒后关闭',
    shortDuration: 1000,
    longMessage: '5秒后关闭',
    longDuration: 5000,
    manualMessage: '不会自动关闭，需手动关闭'
  },
  argTypes: durationArgTypes,
  render: (args: DurationToastArgs) => <ToastProvider>
      <div style={{
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }}>
        <Button onClick={() => {
        showFreshToast(args.type, buildToastOptions(args, {
          title: args.title,
          message: args.shortMessage,
          duration: args.shortDuration
        }));
      }}>
          1秒后自动关闭
        </Button>
        <Button onClick={() => {
        showFreshToast('info', buildToastOptions(args, {
          title: args.title,
          message: args.longMessage,
          duration: args.longDuration
        }));
      }}>
          5秒后自动关闭
        </Button>
        <Button onClick={() => {
        showFreshToast('warning', buildToastOptions(args, {
          title: args.title,
          message: args.manualMessage,
          duration: 0,
          closable: true
        }));
      }}>
          永不自动关闭
        </Button>
      </div>
    </ToastProvider>
}`,...w.parameters?.docs?.source},description:{story:"自定义时长",...w.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '自定义图标',
  args: {
    type: 'success',
    title: '自定义图标',
    message: '任务完成',
    duration: 3000,
    closable: true,
    icon: '🎉',
    emojiIcon: '🎉',
    textIcon: '★',
    infoMessage: '提示信息',
    textMessage: '使用任意内容作为图标'
  },
  argTypes: iconArgTypes,
  render: (args: IconToastArgs) => <ToastProvider>
      <div style={{
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }}>
        <Button onClick={() => {
        showFreshToast(args.type, buildToastOptions(args, {
          title: args.title,
          message: args.message,
          icon: args.emojiIcon
        }));
      }}>
          使用 Emoji 图标
        </Button>
        <Button onClick={() => {
        showFreshToast('info', buildToastOptions(args, {
          title: args.title,
          message: args.infoMessage,
          icon: '📌'
        }));
      }}>
          Emoji 提示符
        </Button>
        <Button onClick={() => {
        showFreshToast('success', buildToastOptions(args, {
          title: args.title,
          message: args.textMessage,
          icon: args.textIcon
        }));
      }}>
          使用文本符号
        </Button>
      </div>
    </ToastProvider>
}`,...b.parameters?.docs?.source},description:{story:"自定义图标",...b.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: '回调函数',
  args: {
    type: 'success',
    title: '已保存',
    message: '已保存',
    duration: 3000,
    closable: true,
    icon: '',
    callbackLabel: '成功通知已关闭'
  },
  argTypes: callbackArgTypes,
  render: (args: CallbackToastArgs) => {
    const [log, setLog] = React.useState<string[]>([]);
    const addLog = (msg: string) => {
      setLog(prev => [...prev, \`[\${new Date().toLocaleTimeString()}] \${msg}\`]);
    };
    return <ToastProvider>
        <div style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }}>
          <Button onClick={() => {
          showFreshToast(args.type, {
            ...buildToastOptions(args),
            onClose: () => addLog(args.callbackLabel)
          });
        }}>
            显示带回调的通知
          </Button>
          <div style={{
          padding: '12px',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px',
          maxHeight: '200px',
          overflowY: 'auto',
          fontFamily: 'monospace',
          fontSize: '12px'
        }}>
            {log.length === 0 ? <p style={{
            margin: 0,
            color: '#999'
          }}>操作日志会显示在这里...</p> : log.map((item, idx) => <div key={idx} style={{
            margin: '4px 0',
            color: '#333'
          }}>
                  {item}
                </div>)}
          </div>
          <Button size="small" variant="ghost" onClick={() => setLog([])}>
            清空日志
          </Button>
        </div>
      </ToastProvider>;
  }
}`,...M.parameters?.docs?.source},description:{story:"回调函数",...M.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '长内容处理',
  args: {
    type: 'warning',
    title: '操作需要确认',
    message: '这是一个很长的消息内容。Toast 组件能够正确地处理多行文本，并确保内容的可读性。当内容超过容器宽度时，文本会自动换行，不会影响整体的布局。',
    duration: 5000,
    closable: true,
    icon: '',
    longMessage: '这是一个很长的消息内容。Toast 组件能够正确地处理多行文本，并确保内容的可读性。当内容超过容器宽度时，文本会自动换行，不会影响整体的布局。'
  },
  argTypes: longContentArgTypes,
  render: (args: LongContentToastArgs) => <ToastProvider>
      <Button onClick={() => {
      showFreshToast(args.type, buildToastOptions(args, {
        title: args.title,
        message: args.longMessage,
        duration: args.duration
      }));
    }}>
        显示长内容通知
      </Button>
    </ToastProvider>
}`,...C.parameters?.docs?.source},description:{story:"长内容处理",...C.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '命令式（无需 Provider）',
  args: {
    type: 'success',
    title: '直接调用 Toast.success',
    message: '直接调用 Toast.success，无需 Provider',
    duration: 3000,
    closable: true,
    icon: ''
  },
  argTypes: baseArgTypes,
  render: (args: BaseToastArgs) => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap'
  }}>
      <Button variant="primary" onClick={() => {
      showFreshToast(args.type, buildToastOptions(args));
    }}>
        直接调用（自动挂载）
      </Button>
    </div>
}`,...k.parameters?.docs?.source},description:{story:"无需 Provider 的命令式用法示例\n在没有显式包裹 `ToastProvider` 时，直接调用 `Toast` 会自动在 `document.body` 创建宿主容器并渲染\n适用于简单场景或临时使用，无需手动添加 Provider，注意不要在 SSR 环境调用",...k.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: '限定在 Provider 范围内',
  args: {
    type: 'success',
    title: 'Toast 限定容器（内部）',
    message: '仅在此容器内显示通知',
    duration: 3000,
    closable: true,
    icon: '',
    insideMessage: '仅在此容器内显示通知',
    outsideMessage: '在页面其他位置调用 Toast'
  },
  argTypes: providerArgTypes,
  render: (args: ProviderToastArgs) => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'flex-start'
  }}>
      <ToastProvider limitToProvider>
        <div style={{
        width: 660,
        height: 220,
        border: '2px dashed #9aa4b2',
        borderRadius: 8,
        padding: 12,
        position: 'relative',
        overflow: 'auto'
      }}>
          <div style={{
          marginBottom: 8,
          color: '#556',
          fontSize: 13
        }}>Toast 限定容器（内部）</div>
          <div style={{
          display: 'flex',
          gap: 8,
          flexWrap: 'wrap'
        }}>
            <Button variant="primary" onClick={() => {
            showFreshToast(args.type, buildToastOptions(args, {
              title: args.title,
              message: args.insideMessage
            }));
          }}>
              在容器内显示 Toast
            </Button>
            <Button variant="ghost" onClick={() => Toast.clear()}>
              清空
            </Button>
          </div>
        </div>
      </ToastProvider>

      <div style={{
      width: 240
    }}>
        <div style={{
        marginBottom: 8,
        color: '#556',
        fontSize: 13
      }}>页面其他位置</div>
        <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }}>
          <Button onClick={() => {
          showFreshToast(args.type, buildToastOptions(args, {
            title: args.title,
            message: args.outsideMessage
          }));
        }}>
            在页面其他位置调用
          </Button>
        </div>
      </div>
    </div>
}`,...j.parameters?.docs?.source},description:{story:"通过参数 limitToProvider限定在 Provider 范围内的示例",...j.parameters?.docs?.description}}};const V=["Success","Error","Warning","Info","Loading","AllTypes","MultipleToasts","CustomDuration","CustomIcon","Callbacks","LongContent","ImperativeNoProvider","LimitedToProvider"];export{v as AllTypes,M as Callbacks,w as CustomDuration,b as CustomIcon,y as Error,k as ImperativeNoProvider,x as Info,j as LimitedToProvider,h as Loading,C as LongContent,f as MultipleToasts,m as Success,T as Warning,V as __namedExportsOrder,U as default};
