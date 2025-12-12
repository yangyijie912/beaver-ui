import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as m}from"./iframe-CkYmOMph.js";import{S as N,I as $,C as D,W as M,a as W}from"./Spinner-Dq2vT7lv.js";import{c as H}from"./client-CotrgNYI.js";import{r as F}from"./index-EYGWMsiT.js";import{B as o}from"./Button-BcB96ueV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Vzf2YRGW.js";const I=m.forwardRef((n,t)=>{const{items:s,onRemove:i,host:c,disablePortal:d}=n;if(typeof document>"u")return null;const p=e.jsx("div",{ref:t,className:`beaver-toast-container${d?" beaver-toast-container--inline":""}`,...d?{"data-inline":"true"}:{},children:s.map(u=>e.jsx(q,{item:u,onRemove:()=>i(u.id)},u.id))});return d?p:F.createPortal(p,c??document.body)});I.displayName="ToastContainer";const q=({item:n,onRemove:t})=>{const{type:s="info",title:i,message:c,duration:d=3e3,onClose:p,icon:u,closable:E=!0}=n;m.useEffect(()=>{if(d>0){const _=setTimeout(()=>{R()},d);return()=>clearTimeout(_)}},[d]);const R=()=>{t(),p?.()},L=["beaver-toast"];s&&L.push(`beaver-toast--${s}`),i&&L.push("beaver-toast--has-title");const z=u!==void 0?u:{success:e.jsx(W,{width:18,height:18,"aria-hidden":!0}),warning:e.jsx(M,{width:18,height:18,"aria-hidden":!0}),error:e.jsx(D,{width:18,height:18,"aria-hidden":!0}),info:e.jsx($,{width:18,height:18,"aria-hidden":!0}),loading:e.jsx(N,{width:18,height:18,"aria-hidden":!0})}[s];return e.jsxs("div",{className:L.join(" "),role:"alert",children:[e.jsx("div",{className:`beaver-toast__icon beaver-toast__icon--${s}`,children:z}),e.jsxs("div",{className:"beaver-toast__content",children:[i&&e.jsx("div",{className:"beaver-toast__title",children:i}),c&&e.jsx("div",{className:"beaver-toast__message",children:c})]}),E&&e.jsx("button",{type:"button",className:"beaver-toast__close","aria-label":"关闭通知",onClick:R,children:"×"})]})};class A{constructor(){this.items=[],this.listeners=new Set,this.idCounter=0,this.providerCount=0,this.providerListeners=new Set,this.generation=0}subscribe(t){return this.listeners.add(t),()=>{this.listeners.delete(t)}}subscribeProviderChange(t){return this.providerListeners.add(t),()=>this.providerListeners.delete(t)}registerProvider(){this.providerCount+=1,this.providerListeners.forEach(t=>t(this.providerCount>0)),this.generation+=1,this.items=[],this.notify()}unregisterProvider(){this.providerCount=Math.max(0,this.providerCount-1),this.providerListeners.forEach(t=>t(this.providerCount>0)),this.providerCount===0&&(this.generation+=1,this.items=[],this.notify())}hasProvider(){return this.providerCount>0}notify(){const t=this.generation,s=this.items.filter(i=>i.generation===t);this.listeners.forEach(i=>i([...s]))}generateId(){return`toast-${++this.idCounter}-${Date.now()}`}getItems(){return[...this.items]}getGeneration(){return this.generation}add(t){G();const s=this.generateId(),i={...t,id:s,generation:this.generation};return this.items.push(i),this.notify(),s}remove(t){this.items=this.items.filter(s=>s.id!==t),this.notify()}clear(){this.items=[],this.notify()}success(t,s){return this.add({...s,type:"success",message:t})}warning(t,s){return this.add({...s,type:"warning",message:t})}error(t,s){return this.add({...s,type:"error",message:t})}info(t,s){return this.add({...s,type:"info",message:t})}loading(t,s){return this.add({...s,type:"loading",message:t,duration:0})}show(t){return this.add(t)}}const a=new A;let h=null,v=null;function G(){if(typeof window>"u"||a.hasProvider()||h)return;const n=document.getElementById("beaver-toast-root"),t=n??document.createElement("div");n||(t.id="beaver-toast-root",document.body.appendChild(t)),v=t,h=H.createRoot(t);const s=d=>{h.render(e.jsx(I,{items:d,onRemove:p=>a.remove(p)}))};try{const d=a.getGeneration(),p=a.getItems().filter(u=>u.generation===d);s(p)}catch{s([])}const i=a.subscribe(d=>s(d)),c=a.subscribeProviderChange(d=>{d&&(i(),c(),Promise.resolve().then(()=>Y()))})}function Y(){if(h){try{h.unmount()}catch{}h=null}v&&v.parentElement&&(v.parentElement.removeChild(v),v=null)}const l=({children:n,limitToProvider:t=!1})=>{const s=m.useRef(null),i=m.useRef(null),[c,d]=m.useState([]);m.useLayoutEffect(()=>{a.registerProvider(),a.clear();const u=a.subscribe(d);return()=>{u(),a.unregisterProvider()}},[]);const p=u=>{a.remove(u)};return e.jsxs(e.Fragment,{children:[n,t?e.jsx("div",{ref:i,className:"beaver-toast-provider-host",children:e.jsx(I,{ref:s,disablePortal:!0,items:c,onRemove:p})}):e.jsx(I,{ref:s,items:c,onRemove:p})]})},r={success:(n,t)=>a.success(n,t),warning:(n,t)=>a.warning(n,t),error:(n,t)=>a.error(n,t),info:(n,t)=>a.info(n,t),loading:(n,t)=>a.loading(n,t),show:n=>a.show(n),close:n=>a.remove(n),clear:()=>a.clear()};l.__docgenInfo={description:`Toast 提供器组件

需要在应用的根部包裹此组件，以便全局调用 Toast`,methods:[],displayName:"ToastProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},limitToProvider:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const te={title:"Components/Toast",tags:["autodocs"],parameters:{docs:{description:{component:`Toast 全局通知组件

- 使用场景：全局通知和提示，显示操作结果反馈（成功、失败、警告等）
- 支持 Toast.success()、Toast.error() 等方法调用
- 支持自动关闭（可配置时长）或手动关闭
- 支持标题和描述两层信息
- 支持自定义图标
- 支持回调函数（如关闭时触发）
- 可通过 ToastProvider 配置全局选项`}}}},g={name:"成功通知",render:()=>e.jsx(l,{children:e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(o,{variant:"primary",onClick:()=>{r.success("保存成功")},children:"显示成功提示"}),e.jsx(o,{variant:"primary",onClick:()=>{r.success("个人资料已更新",{title:"保存成功"})},children:"带标题的成功提示"})]})})},f={name:"错误通知",render:()=>e.jsx(l,{children:e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(o,{color:"danger",onClick:()=>{r.error("操作失败，请重试")},children:"显示错误提示"}),e.jsx(o,{color:"danger",onClick:()=>{r.error("网络连接失败，请检查网络设置",{title:"操作失败",duration:5e3})},children:"长时间显示的错误提示"})]})})},x={name:"警告通知",render:()=>e.jsx(l,{children:e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(o,{onClick:()=>{r.warning("此操作不可撤销")},children:"显示警告提示"}),e.jsx(o,{onClick:()=>{r.warning("你有2条未读消息需要处理",{title:"提醒"})},children:"带标题的警告提示"})]})})},y={name:"信息通知",render:()=>e.jsx(l,{children:e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(o,{onClick:()=>{r.info("页面将在5秒后刷新")},children:"显示信息提示"}),e.jsx(o,{onClick:()=>{r.info("系统将在今晚10点进行维护，请提前保存数据",{title:"系统通知",duration:5e3})},children:"长通知内容"})]})})},T={name:"加载通知",render:()=>{const[n,t]=m.useState(null),s=()=>{const i=r.loading("正在加载数据...");t(i),setTimeout(()=>{r.close(i),r.success("加载完成")},3e3)};return e.jsx(l,{children:e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(o,{variant:"primary",onClick:s,children:"显示加载中（3秒后自动完成）"}),e.jsx(o,{variant:"primary",onClick:()=>{const i=r.loading("处理中...",{title:"文件上传"});t(i)},children:"带标题的加载提示"}),n&&e.jsx(o,{onClick:()=>{n&&(r.close(n),t(null))},children:"手动关闭"})]})})}},C={name:"所有类型对比",render:()=>e.jsx(l,{children:e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(o,{size:"small",onClick:()=>r.success("操作成功",{duration:0}),children:"Success"}),e.jsx(o,{size:"small",onClick:()=>r.warning("请注意",{duration:0}),children:"Warning"}),e.jsx(o,{size:"small",color:"danger",onClick:()=>r.error("操作失败",{duration:0}),children:"Error"}),e.jsx(o,{size:"small",onClick:()=>r.info("提示信息",{duration:0}),children:"Info"}),e.jsx(o,{size:"small",onClick:()=>{const n=r.loading("加载中...");setTimeout(()=>r.close(n),2e3)},children:"Loading"})]})})},j={name:"多条通知堆叠",render:()=>e.jsx(l,{children:e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(o,{variant:"primary",onClick:()=>{r.success("第一条通知"),setTimeout(()=>r.info("第二条通知"),300),setTimeout(()=>r.warning("第三条通知"),600)},children:"显示多条通知"}),e.jsx(o,{variant:"primary",onClick:()=>{for(let n=1;n<=5;n++)setTimeout(()=>{r.info(`通知 ${n}`)},(n-1)*300)},children:"快速显示5条通知"}),e.jsx(o,{variant:"ghost",onClick:()=>r.clear(),children:"清空所有通知"})]})})},k={name:"自定义时长",render:()=>e.jsx(l,{children:e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(o,{onClick:()=>{r.success("1秒后关闭",{duration:1e3})},children:"1秒后自动关闭"}),e.jsx(o,{onClick:()=>{r.info("5秒后关闭",{duration:5e3})},children:"5秒后自动关闭"}),e.jsx(o,{onClick:()=>{r.warning("不会自动关闭，需手动关闭",{duration:0,closable:!0})},children:"永不自动关闭"})]})})},B={name:"自定义图标",render:()=>e.jsx(l,{children:e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(o,{onClick:()=>{r.success("任务完成",{icon:"🎉"})},children:"使用 Emoji 图标"}),e.jsx(o,{onClick:()=>{r.info("提示信息",{icon:"📌"})},children:"Emoji 提示符"}),e.jsx(o,{onClick:()=>{r.show({type:"success",title:"自定义图标",message:"使用任意内容作为图标",icon:"★"})},children:"使用文本符号"})]})})},P={name:"回调函数",render:()=>{const[n,t]=m.useState([]),s=i=>{t(c=>[...c,`[${new Date().toLocaleTimeString()}] ${i}`])};return e.jsx(l,{children:e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(o,{onClick:()=>{r.success("已保存",{onClose:()=>s("成功通知已关闭")})},children:"显示带回调的通知"}),e.jsx("div",{style:{padding:"12px",backgroundColor:"#f5f5f5",borderRadius:"6px",maxHeight:"200px",overflowY:"auto",fontFamily:"monospace",fontSize:"12px"},children:n.length===0?e.jsx("p",{style:{margin:0,color:"#999"},children:"操作日志会显示在这里..."}):n.map((i,c)=>e.jsx("div",{style:{margin:"4px 0",color:"#333"},children:i},c))}),e.jsx(o,{size:"small",variant:"ghost",onClick:()=>t([]),children:"清空日志"})]})})}},b={name:"长内容处理",render:()=>e.jsx(l,{children:e.jsx(o,{onClick:()=>{r.show({type:"warning",title:"操作需要确认",message:"这是一个很长的消息内容。Toast 组件能够正确地处理多行文本，并确保内容的可读性。当内容超过容器宽度时，文本会自动换行，不会影响整体的布局。",duration:5e3})},children:"显示长内容通知"})})},w={name:"命令式（无需 Provider）",render:()=>e.jsx("div",{style:{display:"flex",gap:12},children:e.jsx(o,{variant:"primary",onClick:()=>{r.success("直接调用 Toast.success，无需 Provider")},children:"直接调用（自动挂载）"})})},S={name:"限定在 Provider 范围内",render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"flex-start"},children:[e.jsx(l,{limitToProvider:!0,children:e.jsxs("div",{style:{width:660,height:220,border:"2px dashed #9aa4b2",borderRadius:8,padding:12,position:"relative",overflow:"auto"},children:[e.jsx("div",{style:{marginBottom:8,color:"#556",fontSize:13},children:"Toast 限定容器（内部）"}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(o,{variant:"primary",onClick:()=>{r.success("仅在此容器内显示通知")},children:"在容器内显示 Toast"}),e.jsx(o,{variant:"ghost",onClick:()=>{r.clear()},children:"清空"})]})]})}),e.jsxs("div",{style:{width:240},children:[e.jsx("div",{style:{marginBottom:8,color:"#556",fontSize:13},children:"页面其他位置"}),e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(o,{onClick:()=>{r.success("在页面其他位置调用 Toast")},children:"在页面其他位置调用"})})]})]})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '成功通知',
  render: () => <ToastProvider>
      <div style={{
      display: 'flex',
      gap: 12
    }}>
        <Button variant="primary" onClick={() => {
        Toast.success('保存成功');
      }}>
          显示成功提示
        </Button>
        <Button variant="primary" onClick={() => {
        Toast.success('个人资料已更新', {
          title: '保存成功'
        });
      }}>
          带标题的成功提示
        </Button>
      </div>
    </ToastProvider>
}`,...g.parameters?.docs?.source},description:{story:"成功通知",...g.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: '错误通知',
  render: () => <ToastProvider>
      <div style={{
      display: 'flex',
      gap: 12
    }}>
        <Button color="danger" onClick={() => {
        Toast.error('操作失败，请重试');
      }}>
          显示错误提示
        </Button>
        <Button color="danger" onClick={() => {
        Toast.error('网络连接失败，请检查网络设置', {
          title: '操作失败',
          duration: 5000
        });
      }}>
          长时间显示的错误提示
        </Button>
      </div>
    </ToastProvider>
}`,...f.parameters?.docs?.source},description:{story:"错误通知",...f.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '警告通知',
  render: () => <ToastProvider>
      <div style={{
      display: 'flex',
      gap: 12
    }}>
        <Button onClick={() => {
        Toast.warning('此操作不可撤销');
      }}>
          显示警告提示
        </Button>
        <Button onClick={() => {
        Toast.warning('你有2条未读消息需要处理', {
          title: '提醒'
        });
      }}>
          带标题的警告提示
        </Button>
      </div>
    </ToastProvider>
}`,...x.parameters?.docs?.source},description:{story:"警告通知",...x.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '信息通知',
  render: () => <ToastProvider>
      <div style={{
      display: 'flex',
      gap: 12
    }}>
        <Button onClick={() => {
        Toast.info('页面将在5秒后刷新');
      }}>
          显示信息提示
        </Button>
        <Button onClick={() => {
        Toast.info('系统将在今晚10点进行维护，请提前保存数据', {
          title: '系统通知',
          duration: 5000
        });
      }}>
          长通知内容
        </Button>
      </div>
    </ToastProvider>
}`,...y.parameters?.docs?.source},description:{story:"信息通知",...y.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: '加载通知',
  render: () => {
    const [loadingId, setLoadingId] = React.useState<string | null>(null);
    const handleStartLoading = () => {
      const id = Toast.loading('正在加载数据...');
      setLoadingId(id);
      setTimeout(() => {
        Toast.close(id);
        Toast.success('加载完成');
      }, 3000);
    };
    return <ToastProvider>
        <div style={{
        display: 'flex',
        gap: 12
      }}>
          <Button variant="primary" onClick={handleStartLoading}>
            显示加载中（3秒后自动完成）
          </Button>
          <Button variant="primary" onClick={() => {
          const id = Toast.loading('处理中...', {
            title: '文件上传'
          });
          setLoadingId(id);
        }}>
            带标题的加载提示
          </Button>
          {loadingId && <Button onClick={() => {
          if (loadingId) {
            Toast.close(loadingId);
            setLoadingId(null);
          }
        }}>
              手动关闭
            </Button>}
        </div>
      </ToastProvider>;
  }
}`,...T.parameters?.docs?.source},description:{story:"加载通知",...T.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '所有类型对比',
  render: () => <ToastProvider>
      <div style={{
      display: 'flex',
      gap: 8
    }}>
        <Button size="small" onClick={() => Toast.success('操作成功', {
        duration: 0
      })}>
          Success
        </Button>
        <Button size="small" onClick={() => Toast.warning('请注意', {
        duration: 0
      })}>
          Warning
        </Button>
        <Button size="small" color="danger" onClick={() => Toast.error('操作失败', {
        duration: 0
      })}>
          Error
        </Button>
        <Button size="small" onClick={() => Toast.info('提示信息', {
        duration: 0
      })}>
          Info
        </Button>
        <Button size="small" onClick={() => {
        const id = Toast.loading('加载中...');
        setTimeout(() => Toast.close(id), 2000);
      }}>
          Loading
        </Button>
      </div>
    </ToastProvider>
}`,...C.parameters?.docs?.source},description:{story:"所有类型对比",...C.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: '多条通知堆叠',
  render: () => <ToastProvider>
      <div style={{
      display: 'flex',
      gap: 12
    }}>
        <Button variant="primary" onClick={() => {
        Toast.success('第一条通知');
        setTimeout(() => Toast.info('第二条通知'), 300);
        setTimeout(() => Toast.warning('第三条通知'), 600);
      }}>
          显示多条通知
        </Button>
        <Button variant="primary" onClick={() => {
        for (let i = 1; i <= 5; i++) {
          setTimeout(() => {
            Toast.info(\`通知 \${i}\`);
          }, (i - 1) * 300);
        }
      }}>
          快速显示5条通知
        </Button>
        <Button variant="ghost" onClick={() => Toast.clear()}>
          清空所有通知
        </Button>
      </div>
    </ToastProvider>
}`,...j.parameters?.docs?.source},description:{story:"多条通知堆叠",...j.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '自定义时长',
  render: () => <ToastProvider>
      <div style={{
      display: 'flex',
      gap: 12
    }}>
        <Button onClick={() => {
        Toast.success('1秒后关闭', {
          duration: 1000
        });
      }}>
          1秒后自动关闭
        </Button>
        <Button onClick={() => {
        Toast.info('5秒后关闭', {
          duration: 5000
        });
      }}>
          5秒后自动关闭
        </Button>
        <Button onClick={() => {
        Toast.warning('不会自动关闭，需手动关闭', {
          duration: 0,
          closable: true
        });
      }}>
          永不自动关闭
        </Button>
      </div>
    </ToastProvider>
}`,...k.parameters?.docs?.source},description:{story:"自定义时长",...k.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: '自定义图标',
  render: () => <ToastProvider>
      <div style={{
      display: 'flex',
      gap: 12
    }}>
        <Button onClick={() => {
        Toast.success('任务完成', {
          icon: '🎉'
        });
      }}>
          使用 Emoji 图标
        </Button>
        <Button onClick={() => {
        Toast.info('提示信息', {
          icon: '📌'
        });
      }}>
          Emoji 提示符
        </Button>
        <Button onClick={() => {
        Toast.show({
          type: 'success',
          title: '自定义图标',
          message: '使用任意内容作为图标',
          icon: '★'
        });
      }}>
          使用文本符号
        </Button>
      </div>
    </ToastProvider>
}`,...B.parameters?.docs?.source},description:{story:"自定义图标",...B.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: '回调函数',
  render: () => {
    const [log, setLog] = React.useState<string[]>([]);
    const addLog = (msg: string) => {
      setLog(prev => [...prev, \`[\${new Date().toLocaleTimeString()}] \${msg}\`]);
    };
    return <ToastProvider>
        <div style={{
        display: 'flex',
        gap: 12
      }}>
          <Button onClick={() => {
          Toast.success('已保存', {
            onClose: () => addLog('成功通知已关闭')
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
}`,...P.parameters?.docs?.source},description:{story:"回调函数",...P.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '长内容处理',
  render: () => <ToastProvider>
      <Button onClick={() => {
      Toast.show({
        type: 'warning',
        title: '操作需要确认',
        message: '这是一个很长的消息内容。Toast 组件能够正确地处理多行文本，并确保内容的可读性。当内容超过容器宽度时，文本会自动换行，不会影响整体的布局。',
        duration: 5000
      });
    }}>
        显示长内容通知
      </Button>
    </ToastProvider>
}`,...b.parameters?.docs?.source},description:{story:"长内容处理",...b.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: '命令式（无需 Provider）',
  render: () => <div style={{
    display: 'flex',
    gap: 12
  }}>
      <Button variant="primary" onClick={() => {
      Toast.success('直接调用 Toast.success，无需 Provider');
    }}>
        直接调用（自动挂载）
      </Button>
    </div>
}`,...w.parameters?.docs?.source},description:{story:"无需 Provider 的命令式用法示例\n在没有显式包裹 `ToastProvider` 时，直接调用 `Toast` 会自动在 `document.body` 创建宿主容器并渲染\n适用于简单场景或临时使用，无需手动添加 Provider，注意不要在 SSR 环境调用",...w.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '限定在 Provider 范围内',
  render: () => <div style={{
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
          gap: 8
        }}>
            <Button variant="primary" onClick={() => {
            Toast.success('仅在此容器内显示通知');
          }}>
              在容器内显示 Toast
            </Button>
            <Button variant="ghost" onClick={() => {
            Toast.clear();
          }}>
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
        gap: 8
      }}>
          <Button onClick={() => {
          Toast.success('在页面其他位置调用 Toast');
        }}>
            在页面其他位置调用
          </Button>
        </div>
      </div>
    </div>
}`,...S.parameters?.docs?.source},description:{story:"通过参数 limitToProvider限定在 Provider 范围内的示例",...S.parameters?.docs?.description}}};const ne=["Success","Error","Warning","Info","Loading","AllTypes","MultipleToasts","CustomDuration","CustomIcon","Callbacks","LongContent","ImperativeNoProvider","LimitedToProvider"];export{C as AllTypes,P as Callbacks,k as CustomDuration,B as CustomIcon,f as Error,w as ImperativeNoProvider,y as Info,S as LimitedToProvider,T as Loading,b as LongContent,j as MultipleToasts,g as Success,x as Warning,ne as __namedExportsOrder,te as default};
