import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as F}from"./iframe-CIZpvQ1U.js";import{U as n}from"./Upload-B6GV-sv1.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-C3h7FaaH.js";import"./Form-C4Rfb4Ly.js";import"./Trash-CEBRM02O.js";const E={title:"表单（Form）/Upload",component:n,tags:["autodocs"],parameters:{docs:{description:{component:`Upload 组件
- 使用场景：用于文件上传功能
- 支持单文件和多文件上传
- 支持拖拽上传
- 支持文件验证（大小、类型等）
- 支持自定义上传端点和上传函数
- 显示上传进度和文件列表
- 支持多种风格（按钮、拖拽区、头像上传等）
- 支持自定义触发节点渲染`}}}},w=[{uid:"demo-1",name:"landscape.png",status:"success",response:{url:"https://picsum.photos/300/300"}},{uid:"demo-2",name:"avatar.jpg",status:"uploading",percent:48,response:{url:"https://picsum.photos/300/300"}},{uid:"avatar-1",name:"report.pdf",status:"success",response:{url:""}},{uid:"avatar-2",name:"notes.txt",status:"error",error:"上传失败"}],d={name:"基础上传",args:{action:"/api/upload",buttonText:"上传"}},l={name:"拖拽风格",render:r=>e.jsx("div",{style:{width:500},children:e.jsx(n,{...r,variant:"drag"})}),args:{dragText:"拖拽文件到此处，或点击选择文件",buttonText:"选择文件"}},c={name:"头像风格",render:r=>e.jsx("div",{children:e.jsx(n,{...r,variant:"avatar"})})},p={name:"简易按钮风格+图片展示",render:r=>e.jsx("div",{style:{width:500},children:e.jsx(n,{...r,listType:"picture"})}),args:{buttonText:"选择文件",defaultFileList:w}},g={name:"拖拽风格+图片展示",render:r=>e.jsx("div",{style:{width:500},children:e.jsx(n,{...r,variant:"drag",listType:"picture"})}),args:{dragText:"拖拽文件到此处，或点击选择文件",buttonText:"选择文件",defaultFileList:w}},m={name:"头像风格+列表展示",render:r=>e.jsx("div",{children:e.jsx(n,{...r,variant:"avatar",listType:"list"})}),args:{defaultFileList:w}},u={name:"单文件上传",args:{action:"/api/upload",multiple:!1,buttonText:"选择单个文件"}},x={name:"限制文件数量",args:{action:"/api/upload",maxCount:3,buttonText:"最多上传 3 个文件"}},h={name:"限制文件类型",args:{action:"/api/upload",accept:"image/*",buttonText:"只支持图片文件"}},v={name:"限制文件大小",args:{action:"/api/upload",maxSize:1024*1024,sizeLimitMessage:"文件大小不超过 1MB",dragText:"拖拽文件到此处（最大 1MB）",variant:"drag"}},f={name:"禁用拖拽",args:{action:"/api/upload",drag:!1,dragText:"点击下方按钮选择文件",buttonText:"点击选择文件",variant:"drag"}},y={name:"禁用状态",render:r=>e.jsxs("div",{style:{display:"grid",gap:24,width:500},children:[e.jsx(n,{...r,variant:"default",buttonText:"默认风格（禁用）"}),e.jsx(n,{...r,variant:"avatar"}),e.jsx(n,{...r,variant:"drag",dragText:"拖拽风格（禁用）"})]}),args:{disabled:!0}},T={name:"隐藏文件列表",args:{action:"/api/upload",showFileList:!1}},b={name:"带回调事件",render:r=>{const s=o=>(console.log("上传前钩子:",o.name),!0),t=(o,i)=>{console.log("上传成功:",i.name,o)},a=(o,i)=>{console.log("上传失败:",i.name,o.message)},L=(o,i)=>{const R=Math.round(o.loaded/o.total*100);console.log(`${i.name} 上传进度: ${R}%`)},C=o=>{console.log("已移除:",o.name)};return e.jsx(n,{...r,beforeUpload:s,onSuccess:t,onError:a,onProgress:L,onRemove:C})},args:{action:"/api/upload",dragText:"拖拽文件到此处",buttonText:"选择文件"}},S={name:"手动上传",render:r=>{const[s,t]=F.useState([]),a=()=>{console.log("手动上传",s)};return e.jsxs("div",{children:[e.jsx(n,{...r,autoUpload:!1,onChange:L=>t(L)}),e.jsx("button",{onClick:a,style:{marginTop:"12px",padding:"8px 16px",cursor:"pointer"},children:"提交上传"})]})},args:{dragText:'拖拽文件到此处，点击"提交上传"按钮手动上传'}},j={name:"自定义上传函数",render:r=>{const s=async t=>new Promise(a=>{setTimeout(()=>{console.log("自定义上传完成:",t.name),a({success:!0,filename:t.name})},2e3)});return e.jsx(n,{...r,customRequest:s})},args:{dragText:"使用自定义上传函数",buttonText:"选择文件"}},U={name:"完全自定义样式",render:r=>{const[s,t]=F.useState([]);return e.jsxs("div",{style:{width:360},children:[e.jsx(n,{...r,onChange:a=>t(a),children:e.jsxs("div",{role:"button",tabIndex:0,onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&a.currentTarget.click()},style:{display:"flex",alignItems:"center",gap:12,padding:"14px 18px",borderRadius:12,background:"linear-gradient(90deg,#ffecd2,#fcb69f)",cursor:"pointer",boxShadow:"0 8px 20px rgba(0,0,0,0.08)",userSelect:"none"},children:[e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12 3v10",stroke:"#5b3bdb",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M8 7l4-4 4 4",stroke:"#5b3bdb",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M20 21H4a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2z",stroke:"#5b3bdb",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})]}),e.jsxs("div",{style:{lineHeight:1},children:[e.jsx("div",{style:{fontWeight:700,color:"#3b2f7a"},children:"上传你的创意文件"}),e.jsx("div",{style:{fontSize:12,color:"#4a4a4a"},children:"支持 PNG / JPG / PDF • 点击或拖拽上传"})]})]})}),e.jsxs("div",{style:{marginTop:12,fontSize:13,color:"#222"},children:[e.jsx("strong",{children:"已选文件："}),s.length?e.jsx("ul",{style:{margin:"6px 0 0",paddingLeft:18},children:s.map(a=>e.jsx("li",{style:{fontSize:13},children:a.name},a.uid||a.name))}):e.jsx("span",{style:{marginLeft:6,color:"#666"},children:"未选择任何文件"})]})]})},args:{action:"/api/upload"}},k={name:"自定义触发",render:r=>{const[s,t]=F.useState([]);return e.jsxs("div",{style:{width:320},children:[e.jsx(n,{...r,onChange:a=>t(a),renderTrigger:({open:a})=>e.jsx("a",{onClick:a,style:{cursor:"pointer",color:"#0eaae0"},children:"自定义触发（renderTrigger）"})}),e.jsxs("div",{style:{marginTop:12,fontSize:13},children:[e.jsx("strong",{children:"已选文件："}),s.length?e.jsx("span",{style:{marginLeft:6},children:s.map(a=>a.name).join(", ")}):e.jsx("span",{style:{marginLeft:6,color:"#666"},children:"未选择任何文件"})]})]})},parameters:{docs:{source:{code:`import React from 'react';
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
`}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '基础上传',
  args: {
    action: '/api/upload',
    buttonText: '上传'
  }
}`,...d.parameters?.docs?.source},description:{story:`基础上传
- 通过 buttonText 设置按钮文本`,...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source},description:{story:`拖拽风格
- 通过设置 variant="drag" 启用拖拽上传风格
- 通过 dragText 自定义提示文本`,...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: '头像风格',
  render: (args: UploadArgs) => <div>
      <Upload {...args} variant="avatar" />
    </div>
}`,...c.parameters?.docs?.source},description:{story:`头像风格
- 通过设置 variant="avatar" 启用头像上传风格`,...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:`简易按钮风格（默认） + 图片展示
- 通过设置 listType="picture" 启用图片展示风格`,...p.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:"拖拽风格 + 图片展示",...g.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '头像风格+列表展示',
  render: (args: UploadArgs) => <div>
      <Upload {...args} variant="avatar" listType="list" />
    </div>,
  args: {
    defaultFileList
  }
}`,...m.parameters?.docs?.source},description:{story:`头像风格 + 列表展示
- 通过设置 listType="list" 启用列表展示风格`,...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '单文件上传',
  args: {
    action: '/api/upload',
    multiple: false,
    buttonText: '选择单个文件'
  }
}`,...u.parameters?.docs?.source},description:{story:`单文件上传
- 通过设置 multiple=false 限制为单文件上传，反复上传只会更新文件`,...u.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '限制文件数量',
  args: {
    action: '/api/upload',
    maxCount: 3,
    buttonText: '最多上传 3 个文件'
  }
}`,...x.parameters?.docs?.source},description:{story:`限制文件数量
- 通过设置 maxCount 限制最大上传文件数`,...x.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '限制文件类型',
  args: {
    action: '/api/upload',
    accept: 'image/*',
    buttonText: '只支持图片文件'
  }
}`,...h.parameters?.docs?.source},description:{story:`限制文件类型
- 通过设置 accept 限制可上传的文件类型`,...h.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '限制文件大小',
  args: {
    action: '/api/upload',
    maxSize: 1024 * 1024,
    // 1MB
    sizeLimitMessage: '文件大小不超过 1MB',
    dragText: '拖拽文件到此处（最大 1MB）',
    variant: 'drag'
  }
}`,...v.parameters?.docs?.source},description:{story:`限制文件大小
- 通过设置 maxSize 限制单个文件的最大大小
- 通过 sizeLimitMessage 自定义超限时的错误提示`,...v.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: '禁用拖拽',
  args: {
    action: '/api/upload',
    drag: false,
    dragText: '点击下方按钮选择文件',
    buttonText: '点击选择文件',
    variant: 'drag'
  }
}`,...f.parameters?.docs?.source},description:{story:`无拖拽功能
- 通过设置 drag=false 禁用拖拽上传功能`,...f.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:"不同风格的禁用状态",...y.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: '隐藏文件列表',
  args: {
    action: '/api/upload',
    showFileList: false
  }
}`,...T.parameters?.docs?.source},description:{story:"隐藏文件列表",...T.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:"带回调事件",...b.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:`手动上传
- 设置 autoUpload={false}
- 通过 onChange 把选中的文件列表回调给父组件，但不会自动发起上传
- 适用场景：需要在父组件中做额外处理后再上传（例如先校验、预览、合并表单数据或用户确认）
- 组件只负责文件选择和列表管理，不负责实际发送请求，上传操作需手动控制`,...S.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:`自定义上传函数
- 通过 customRequest 提供自定义上传逻辑，替代默认的网络上传逻辑
- 适用场景：需要使用特殊的上传协议或 SDK，用 fetch/axios、上传到第三方服务、分片上传、带特殊表单字段等，或需要在上传前后做额外处理`,...j.parameters?.docs?.description}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source},description:{story:"children 完全自定义样式",...U.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:`函数式插槽 renderTrigger 示例
- 通过 renderTrigger 自定义触发节点渲染
- 当想完全自定义触发器（外观、事件、样式）但仍希望复用 Upload 的文件选择/管理逻辑时使用
- 提供的 open 方法用于打开文件选择对话框`,...k.parameters?.docs?.description}}};const H=["Basic","DragStyle","AvatarStyle","DefaultButtonWithPicture","DragStyleWithPicture","AvatarStyleWithList","SingleFile","LimitFileCount","LimitFileType","LimitFileSize","NoDrag","DisabledVariants","HideFileList","WithCallbacks","ManualUpload","CustomUpload","CustomTriggerChildrenStyled","RenderTrigger"];export{c as AvatarStyle,m as AvatarStyleWithList,d as Basic,U as CustomTriggerChildrenStyled,j as CustomUpload,p as DefaultButtonWithPicture,y as DisabledVariants,l as DragStyle,g as DragStyleWithPicture,T as HideFileList,x as LimitFileCount,v as LimitFileSize,h as LimitFileType,S as ManualUpload,f as NoDrag,k as RenderTrigger,u as SingleFile,b as WithCallbacks,H as __namedExportsOrder,E as default};
