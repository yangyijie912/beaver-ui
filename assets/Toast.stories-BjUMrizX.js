import{j as n}from"./jsx-runtime-u17CrQMm.js";import{R as j}from"./iframe-Bt23bDWF.js";import{T as s,a as e}from"./Toast-X2B8xxjv.js";import{B as o}from"./Button-C9F5-CP9.js";import"./preload-helper-PPVm8Dsz.js";import"./client-C2IrZJqX.js";import"./index-Dx0fzY9A.js";import"./index-XnXQcDdv.js";import"./Spinner-CKAoCXB_.js";import"./Info-BYSQShoX.js";import"./Close-IiX-HAFp.js";import"./Check-C9Lcua7d.js";const D={title:"反馈（Feedback）/Toast",tags:["autodocs"],parameters:{docs:{description:{component:`Toast 全局通知组件

- 使用场景：全局通知和提示，显示操作结果反馈（成功、失败、警告等）
- 支持 Toast.success()、Toast.error() 等方法调用
- 支持自动关闭（可配置时长）或手动关闭
- 支持标题和描述两层信息
- 支持自定义图标
- 支持回调函数（如关闭时触发）
- 可通过 ToastProvider 配置全局选项`}}}},a={name:"成功通知",render:()=>n.jsx(s,{children:n.jsxs("div",{style:{display:"flex",gap:12},children:[n.jsx(o,{variant:"primary",onClick:()=>{e.success("保存成功")},children:"显示成功提示"}),n.jsx(o,{variant:"primary",onClick:()=>{e.success("个人资料已更新",{title:"保存成功"})},children:"带标题的成功提示"})]})})},d={name:"错误通知",render:()=>n.jsx(s,{children:n.jsxs("div",{style:{display:"flex",gap:12},children:[n.jsx(o,{color:"danger",onClick:()=>{e.error("操作失败，请重试")},children:"显示错误提示"}),n.jsx(o,{color:"danger",onClick:()=>{e.error("网络连接失败，请检查网络设置",{title:"操作失败",duration:5e3})},children:"长时间显示的错误提示"})]})})},c={name:"警告通知",render:()=>n.jsx(s,{children:n.jsxs("div",{style:{display:"flex",gap:12},children:[n.jsx(o,{onClick:()=>{e.warning("此操作不可撤销")},children:"显示警告提示"}),n.jsx(o,{onClick:()=>{e.warning("你有2条未读消息需要处理",{title:"提醒"})},children:"带标题的警告提示"})]})})},l={name:"信息通知",render:()=>n.jsx(s,{children:n.jsxs("div",{style:{display:"flex",gap:12},children:[n.jsx(o,{onClick:()=>{e.info("页面将在5秒后刷新")},children:"显示信息提示"}),n.jsx(o,{onClick:()=>{e.info("系统将在今晚10点进行维护，请提前保存数据",{title:"系统通知",duration:5e3})},children:"长通知内容"})]})})},p={name:"加载通知",render:()=>{const[r,i]=j.useState(null),C=()=>{const t=e.loading("正在加载数据...");i(t),setTimeout(()=>{e.close(t),e.success("加载完成")},3e3)};return n.jsx(s,{children:n.jsxs("div",{style:{display:"flex",gap:12},children:[n.jsx(o,{variant:"primary",onClick:C,children:"显示加载中（3秒后自动完成）"}),n.jsx(o,{variant:"primary",onClick:()=>{const t=e.loading("处理中...",{title:"文件上传"});i(t)},children:"带标题的加载提示"}),r&&n.jsx(o,{onClick:()=>{r&&(e.close(r),i(null))},children:"手动关闭"})]})})}},u={name:"所有类型对比",render:()=>n.jsx(s,{children:n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx(o,{size:"small",onClick:()=>e.success("操作成功",{duration:0}),children:"Success"}),n.jsx(o,{size:"small",onClick:()=>e.warning("请注意",{duration:0}),children:"Warning"}),n.jsx(o,{size:"small",color:"danger",onClick:()=>e.error("操作失败",{duration:0}),children:"Error"}),n.jsx(o,{size:"small",onClick:()=>e.info("提示信息",{duration:0}),children:"Info"}),n.jsx(o,{size:"small",onClick:()=>{const r=e.loading("加载中...");setTimeout(()=>e.close(r),2e3)},children:"Loading"})]})})},m={name:"多条通知堆叠",render:()=>n.jsx(s,{children:n.jsxs("div",{style:{display:"flex",gap:12},children:[n.jsx(o,{variant:"primary",onClick:()=>{e.success("第一条通知"),setTimeout(()=>e.info("第二条通知"),300),setTimeout(()=>e.warning("第三条通知"),600)},children:"显示多条通知"}),n.jsx(o,{variant:"primary",onClick:()=>{for(let r=1;r<=5;r++)setTimeout(()=>{e.info(`通知 ${r}`)},(r-1)*300)},children:"快速显示5条通知"}),n.jsx(o,{variant:"ghost",onClick:()=>e.clear(),children:"清空所有通知"})]})})},g={name:"自定义时长",render:()=>n.jsx(s,{children:n.jsxs("div",{style:{display:"flex",gap:12},children:[n.jsx(o,{onClick:()=>{e.success("1秒后关闭",{duration:1e3})},children:"1秒后自动关闭"}),n.jsx(o,{onClick:()=>{e.info("5秒后关闭",{duration:5e3})},children:"5秒后自动关闭"}),n.jsx(o,{onClick:()=>{e.warning("不会自动关闭，需手动关闭",{duration:0,closable:!0})},children:"永不自动关闭"})]})})},v={name:"自定义图标",render:()=>n.jsx(s,{children:n.jsxs("div",{style:{display:"flex",gap:12},children:[n.jsx(o,{onClick:()=>{e.success("任务完成",{icon:"🎉"})},children:"使用 Emoji 图标"}),n.jsx(o,{onClick:()=>{e.info("提示信息",{icon:"📌"})},children:"Emoji 提示符"}),n.jsx(o,{onClick:()=>{e.show({type:"success",title:"自定义图标",message:"使用任意内容作为图标",icon:"★"})},children:"使用文本符号"})]})})},x={name:"回调函数",render:()=>{const[r,i]=j.useState([]),C=t=>{i(f=>[...f,`[${new Date().toLocaleTimeString()}] ${t}`])};return n.jsx(s,{children:n.jsxs("div",{style:{display:"flex",gap:12},children:[n.jsx(o,{onClick:()=>{e.success("已保存",{onClose:()=>C("成功通知已关闭")})},children:"显示带回调的通知"}),n.jsx("div",{style:{padding:"12px",backgroundColor:"#f5f5f5",borderRadius:"6px",maxHeight:"200px",overflowY:"auto",fontFamily:"monospace",fontSize:"12px"},children:r.length===0?n.jsx("p",{style:{margin:0,color:"#999"},children:"操作日志会显示在这里..."}):r.map((t,f)=>n.jsx("div",{style:{margin:"4px 0",color:"#333"},children:t},f))}),n.jsx(o,{size:"small",variant:"ghost",onClick:()=>i([]),children:"清空日志"})]})})}},y={name:"长内容处理",render:()=>n.jsx(s,{children:n.jsx(o,{onClick:()=>{e.show({type:"warning",title:"操作需要确认",message:"这是一个很长的消息内容。Toast 组件能够正确地处理多行文本，并确保内容的可读性。当内容超过容器宽度时，文本会自动换行，不会影响整体的布局。",duration:5e3})},children:"显示长内容通知"})})},T={name:"命令式（无需 Provider）",render:()=>n.jsx("div",{style:{display:"flex",gap:12},children:n.jsx(o,{variant:"primary",onClick:()=>{e.success("直接调用 Toast.success，无需 Provider")},children:"直接调用（自动挂载）"})})},h={name:"限定在 Provider 范围内",render:()=>n.jsxs("div",{style:{display:"flex",gap:16,alignItems:"flex-start"},children:[n.jsx(s,{limitToProvider:!0,children:n.jsxs("div",{style:{width:660,height:220,border:"2px dashed #9aa4b2",borderRadius:8,padding:12,position:"relative",overflow:"auto"},children:[n.jsx("div",{style:{marginBottom:8,color:"#556",fontSize:13},children:"Toast 限定容器（内部）"}),n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx(o,{variant:"primary",onClick:()=>{e.success("仅在此容器内显示通知")},children:"在容器内显示 Toast"}),n.jsx(o,{variant:"ghost",onClick:()=>{e.clear()},children:"清空"})]})]})}),n.jsxs("div",{style:{width:240},children:[n.jsx("div",{style:{marginBottom:8,color:"#556",fontSize:13},children:"页面其他位置"}),n.jsx("div",{style:{display:"flex",gap:8},children:n.jsx(o,{onClick:()=>{e.success("在页面其他位置调用 Toast")},children:"在页面其他位置调用"})})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:"成功通知",...a.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:"错误通知",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source},description:{story:"警告通知",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source},description:{story:"信息通知",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:"加载通知",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:"所有类型对比",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:"多条通知堆叠",...m.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:"自定义时长",...g.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:"自定义图标",...v.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:"回调函数",...x.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:"长内容处理",...y.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:"无需 Provider 的命令式用法示例\n在没有显式包裹 `ToastProvider` 时，直接调用 `Toast` 会自动在 `document.body` 创建宿主容器并渲染\n适用于简单场景或临时使用，无需手动添加 Provider，注意不要在 SSR 环境调用",...T.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:"通过参数 limitToProvider限定在 Provider 范围内的示例",...h.parameters?.docs?.description}}};const W=["Success","Error","Warning","Info","Loading","AllTypes","MultipleToasts","CustomDuration","CustomIcon","Callbacks","LongContent","ImperativeNoProvider","LimitedToProvider"];export{u as AllTypes,x as Callbacks,g as CustomDuration,v as CustomIcon,d as Error,T as ImperativeNoProvider,l as Info,h as LimitedToProvider,p as Loading,y as LongContent,m as MultipleToasts,a as Success,c as Warning,W as __namedExportsOrder,D as default};
