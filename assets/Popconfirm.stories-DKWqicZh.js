import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r,R as ee}from"./iframe-BKpi8Zge.js";import{B as s}from"./Button-BF6hd8ru.js";import{r as te}from"./index-DuoL47QS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CuTHX-aT.js";const re=({children:n})=>typeof document>"u"?null:te.createPortal(n,document.body),ne=(n,o,f="top",a=8,k=8,$=!0)=>{const[A,F]=r.useState({top:0,left:0,arrowOffset:0});return r.useEffect(()=>{if(!n.current)return;const j=()=>{if(!n.current)return;const l=n.current.getBoundingClientRect(),m=o.current?.offsetWidth||250,p=o.current?.offsetHeight||100,T=window.innerWidth,w=window.innerHeight;let x=0,y=0;const W=l.width,E=l.height,u=f.toLowerCase();u==="top"?(x=l.top-p-a,y=l.left+(W-m)/2):u==="bottom"?(x=l.bottom+a,y=l.left+(W-m)/2):u==="left"?(y=l.left-m-a,x=l.top+(E-p)/2):u==="right"&&(y=l.right+a,x=l.top+(E-p)/2);let h=y,i=x;y<0?h=8:y+m>T&&(h=T-m-8),x<0?i=8:x+p>w&&(i=w-p-8);let g=0;const D=l.left+W/2,P=l.top+E/2,b=h+m/2,X=i+p/2;u.startsWith("top")||u.startsWith("bottom")?(g=D-b,g=Math.max(-m/2+16,Math.min(m/2-16,g))):(u==="left"||u==="right")&&(g=P-X,g=Math.max(-p/2+16,Math.min(p/2-16,g))),F({top:i,left:h,arrowOffset:g})};j();let C=null;o.current&&(C=new ResizeObserver(()=>{j()}),C.observe(o.current));const H=setTimeout(j,0),B=j,R=j;return window.addEventListener("resize",B),window.addEventListener("scroll",R),()=>{clearTimeout(H),window.removeEventListener("resize",B),window.removeEventListener("scroll",R),C?.disconnect()}},[n,o,f,a,$]),A},c=ee.forwardRef(({children:n,open:o,onOpenChange:f,title:a,description:k,okText:$="确定",cancelText:A="取消",okVariant:F="primary",cancelVariant:j="ghost",onConfirm:C,onCancel:H,maskClosable:B=!0,showMask:R=!1,placement:l="top",contentClassName:m="",maskClassName:p="",okDisabled:T=!1,okLoading:w=!1,className:x="",...y},W)=>{const[E,u]=r.useState(!1),h=o!==void 0,i=h?o:E,[g,D]=r.useState(!1),P=r.useRef(null),b=r.useRef(null),X=r.useRef(null),Y=ne(P,b,l,8,8,i),d=r.useCallback(t=>{h||u(t),f?.(t)},[h,f]),G=r.useCallback(async t=>{if(!(w||T))try{C&&await Promise.resolve(C(t)),d(!1)}catch(v){console.error("Popconfirm confirm error:",v)}},[w,T,C,d]),J=r.useCallback(t=>{H?.(t),d(!1)},[H,d]),Q=r.useCallback(t=>{B&&t.target===t.currentTarget&&d(!1)},[B,d]);r.useEffect(()=>{if(!i)return;const t=Z=>{const K=Z.target;P.current&&b.current&&!P.current.contains(K)&&!b.current.contains(K)&&d(!1)},v=setTimeout(()=>{document.addEventListener("mousedown",t)},0);return()=>{clearTimeout(v),document.removeEventListener("mousedown",t)}},[i,d]),r.useEffect(()=>{if(!i)return;const t=v=>{v.key==="Escape"&&d(!1)};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[i,d]),r.useEffect(()=>{if(i){const t=requestAnimationFrame(()=>{D(!0)});return()=>cancelAnimationFrame(t)}else D(!1)},[i]),r.useEffect(()=>{i&&b.current&&P.current?.getBoundingClientRect()},[i]);const U=r.cloneElement(n,{ref:P,onClick:t=>{const v=n.props?.onClick;v&&v(t),d(!i)}});return e.jsxs(e.Fragment,{children:[U,i&&g&&e.jsxs(re,{children:[R&&e.jsx("div",{className:`beaver-popconfirm__mask ${R?"beaver-popconfirm--show-mask":""} ${p}`,onClick:Q}),e.jsx("div",{ref:X,className:`beaver-popconfirm-wrapper beaver-popconfirm--${l} ${x}`,style:{top:`${Y.top}px`,left:`${Y.left}px`},...y,children:e.jsxs("div",{ref:b,className:`beaver-popconfirm__content ${m}`,style:{"--arrow-offset":`${Y.arrowOffset||0}px`},children:[e.jsx("div",{className:"beaver-popconfirm__arrow"}),e.jsx("div",{className:"beaver-popconfirm__title",children:a}),k&&e.jsx("div",{className:"beaver-popconfirm__description",children:k}),e.jsxs("div",{className:"beaver-popconfirm__actions",children:[e.jsx(s,{className:"beaver-popconfirm__cancel",variant:j,size:"small",onClick:J,children:A}),e.jsx(s,{className:`beaver-popconfirm__ok ${w?"beaver-popconfirm--ok-loading":""}`,variant:F,size:"small",disabled:T||w,onClick:G,children:$})]})]})})]})]})});c.displayName="Popconfirm";c.__docgenInfo={description:`Popconfirm 组件 - 弹出式确认框

- 使用场景： 在执行重要或不可逆操作前，要求用户进行确认，避免误操作
- 支持自定义标题和描述文本
- 支持确认和取消按钮的文本、样式和禁用状态
- 支持异步确认操作，显示加载状态
- 支持多种位置（上/下/左/右）
- 支持遮罩层和点击遮罩关闭`,methods:[],displayName:"Popconfirm",props:{children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:"用于触发 popconfirm 显示的子元素"},open:{required:!1,tsType:{name:"boolean"},description:"控制 Popconfirm 是否打开"},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Popconfirm 打开时的回调"},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"* Popconfirm 的标题文本"},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Popconfirm 的描述文本，位于标题下方"},okText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:'确认按钮文本，默认为 "确定"',defaultValue:{value:"'确定'",computed:!1}},cancelText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:'取消按钮文本，默认为 "取消"',defaultValue:{value:"'取消'",computed:!1}},okVariant:{required:!1,tsType:{name:"union",raw:"'primary' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'ghost'"}]},description:"确认按钮的样式变体，默认为 'primary'",defaultValue:{value:"'primary'",computed:!1}},cancelVariant:{required:!1,tsType:{name:"union",raw:"'primary' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'ghost'"}]},description:"取消按钮的样式变体，默认为 'ghost'",defaultValue:{value:"'ghost'",computed:!1}},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"(e?: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:"点击确认按钮时的回调"},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"(e?: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"点击取消按钮时的回调"},maskClosable:{required:!1,tsType:{name:"boolean"},description:"是否在点击遮罩时关闭 popconfirm，默认为 true",defaultValue:{value:"true",computed:!1}},showMask:{required:!1,tsType:{name:"boolean"},description:"是否显示遮罩，默认为 false",defaultValue:{value:"false",computed:!1}},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:`Popconfirm 出现的位置，默认为 'top'
top: 顶部
bottom: 底部
left: 左侧
right: 右侧`,defaultValue:{value:"'top'",computed:!1}},contentClassName:{required:!1,tsType:{name:"string"},description:"自定义 popconfirm 内容区域的 className",defaultValue:{value:"''",computed:!1}},maskClassName:{required:!1,tsType:{name:"string"},description:"自定义遮罩的 className",defaultValue:{value:"''",computed:!1}},okDisabled:{required:!1,tsType:{name:"boolean"},description:"禁用确认按钮，默认为 false",defaultValue:{value:"false",computed:!1}},okLoading:{required:!1,tsType:{name:"boolean"},description:"是否显示加载状态（确认按钮会显示加载中），默认为 false",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const de={title:"Components/Popconfirm",component:c,parameters:{layout:"centered"},tags:["autodocs"]},L={name:"基础用法",render:()=>e.jsx(c,{title:"确定删除此项目吗？",children:e.jsx(s,{color:"danger",children:"删除"})})},S={name:"带描述文本",render:()=>e.jsx(c,{title:"确定删除此项目吗？",description:"此操作无法撤销，请谨慎操作",okText:"确定删除",cancelText:"取消",children:e.jsx(s,{color:"danger",children:"删除"})})},N={name:"自定义按钮文本",render:()=>e.jsx(c,{title:"请确认您的操作",okText:"立即执行",cancelText:"我再想想",children:e.jsx(s,{variant:"primary",children:"执行操作"})})},O={name:"位置",render:()=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:40,padding:"40px 20px",minHeight:260},children:[e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flex:1},children:e.jsx(c,{title:"向上位置示例",placement:"top",children:e.jsx(s,{variant:"primary",children:"上"})})}),e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flex:1},children:e.jsx(c,{title:"向下位置示例",placement:"bottom",children:e.jsx(s,{variant:"primary",children:"下"})})}),e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flex:1},children:e.jsx(c,{title:"向左位置示例",placement:"left",children:e.jsx(s,{variant:"primary",children:"左"})})}),e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flex:1},children:e.jsx(c,{title:"向右位置示例",placement:"right",children:e.jsx(s,{variant:"primary",children:"右"})})})]})},I={name:"显示遮罩",render:()=>e.jsx(c,{title:"确定要执行此操作吗？",description:"点击遮罩可关闭",showMask:!0,children:e.jsx(s,{variant:"primary",children:"操作"})})},M={name:"禁用确认按钮",render:()=>e.jsx(c,{title:"确定要执行此操作吗？",description:"确认按钮已禁用",okDisabled:!0,children:e.jsx(s,{variant:"primary",children:"操作"})})},_={name:"加载状态",render:()=>e.jsx(c,{title:"确定要执行此操作吗？",okLoading:!0,children:e.jsx(s,{color:"danger",children:"删除"})})},q={name:"异步操作",render:()=>{const[n,o]=r.useState(!1),f=async()=>{o(!0),await new Promise(a=>setTimeout(a,2e3)),o(!1),alert("删除成功！")};return e.jsx(c,{title:"确定删除此项目吗？",description:"此操作无法撤销",okLoading:n,onConfirm:f,onCancel:()=>console.log("已取消"),children:e.jsx(s,{color:"danger",children:"删除"})})}},V={name:"受控组件",render:()=>{const[n,o]=r.useState(!1);return e.jsxs("div",{children:[e.jsx(s,{variant:"primary",onClick:()=>o(!0),style:{marginRight:"20px"},children:"点击打开 Popconfirm"}),e.jsx(c,{open:n,onOpenChange:o,title:"确定要执行此操作吗？",description:"受控组件演示",onConfirm:()=>{alert("已确认！")},children:e.jsx(s,{variant:"primary",children:"按钮"})})]})}},z={name:"交互演示",render:()=>{const[n,o]=r.useState([{id:1,text:"学习 React"},{id:2,text:"完成项目文档"},{id:3,text:"代码审查"}]),f=a=>{o(n.filter(k=>k.id!==a))};return e.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[e.jsx("h3",{children:"待办事项"}),e.jsx("ul",{style:{listStyle:"none",padding:0},children:n.map(a=>e.jsxs("li",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px",marginBottom:"8px",backgroundColor:"#f5f5f5",borderRadius:"4px",border:"1px solid #ddd",fontSize:"14px"},children:[e.jsx("span",{children:a.text}),e.jsx(c,{title:"确定要删除此项吗？",description:`将删除: "${a.text}"`,okText:"删除",cancelText:"保留",placement:"right",onConfirm:()=>f(a.id),children:e.jsx(s,{color:"danger",size:"small",style:{marginLeft:20},children:"删除"})})]},a.id))}),e.jsxs("div",{style:{marginTop:"16px",fontSize:"12px",color:"#666"},children:["共 ",n.length," 项待办"]})]})}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: '基础用法',
  render: () => <Popconfirm title="确定删除此项目吗？">
      <Button color="danger">删除</Button>
    </Popconfirm>
}`,...L.parameters?.docs?.source},description:{story:"基础演示 - 最简单的用法",...L.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '带描述文本',
  render: () => <Popconfirm title="确定删除此项目吗？" description="此操作无法撤销，请谨慎操作" okText="确定删除" cancelText="取消">
      <Button color="danger">删除</Button>
    </Popconfirm>
}`,...S.parameters?.docs?.source},description:{story:"带描述文本 - 提供更详细的确认信息",...S.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: '自定义按钮文本',
  render: () => <Popconfirm title="请确认您的操作" okText="立即执行" cancelText="我再想想">
      <Button variant="primary">执行操作</Button>
    </Popconfirm>
}`,...N.parameters?.docs?.source},description:{story:"自定义按钮文本 - 显示不同的按钮标签",...N.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: '位置',
  render: () => <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 40,
    padding: '40px 20px',
    minHeight: 260
  }}>
      <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
    }}>
        <Popconfirm title="向上位置示例" placement="top">
          <Button variant="primary">上</Button>
        </Popconfirm>
      </div>

      <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
    }}>
        <Popconfirm title="向下位置示例" placement="bottom">
          <Button variant="primary">下</Button>
        </Popconfirm>
      </div>

      <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
    }}>
        <Popconfirm title="向左位置示例" placement="left">
          <Button variant="primary">左</Button>
        </Popconfirm>
      </div>

      <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
    }}>
        <Popconfirm title="向右位置示例" placement="right">
          <Button variant="primary">右</Button>
        </Popconfirm>
      </div>
    </div>
}`,...O.parameters?.docs?.source},description:{story:"位置",...O.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: '显示遮罩',
  render: () => <Popconfirm title="确定要执行此操作吗？" description="点击遮罩可关闭" showMask={true}>
      <Button variant="primary">操作</Button>
    </Popconfirm>
}`,...I.parameters?.docs?.source},description:{story:"显示遮罩 - showMask 为 true",...I.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: '禁用确认按钮',
  render: () => <Popconfirm title="确定要执行此操作吗？" description="确认按钮已禁用" okDisabled={true}>
      <Button variant="primary">操作</Button>
    </Popconfirm>
}`,...M.parameters?.docs?.source},description:{story:"禁用确认按钮",...M.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: '加载状态',
  render: () => <Popconfirm title="确定要执行此操作吗？" okLoading={true}>
      <Button color="danger">删除</Button>
    </Popconfirm>
}`,..._.parameters?.docs?.source},description:{story:"加载状态 - 显示确认按钮的加载动画",..._.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: '异步操作',
  render: () => {
    const [loading, setLoading] = useState(false);
    const handleConfirm = async () => {
      setLoading(true);
      // 模拟 API 调用
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
      alert('删除成功！');
    };
    return <Popconfirm title="确定删除此项目吗？" description="此操作无法撤销" okLoading={loading} onConfirm={handleConfirm} onCancel={() => console.log('已取消')}>
        <Button color="danger">删除</Button>
      </Popconfirm>;
  }
}`,...q.parameters?.docs?.source},description:{story:"异步操作 - 模拟异步确认操作",...q.parameters?.docs?.description}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: '受控组件',
  render: () => {
    const [open, setOpen] = useState(false);
    return <div>
        <Button variant="primary" onClick={() => setOpen(true)} style={{
        marginRight: '20px'
      }}>
          点击打开 Popconfirm
        </Button>

        <Popconfirm open={open} onOpenChange={setOpen} title="确定要执行此操作吗？" description="受控组件演示" onConfirm={() => {
        alert('已确认！');
      }}>
          <Button variant="primary">按钮</Button>
        </Popconfirm>
      </div>;
  }
}`,...V.parameters?.docs?.source},description:{story:"受控组件 - 通过 open 和 onOpenChange 完全控制状态",...V.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: '交互演示',
  render: () => {
    const [items, setItems] = useState([{
      id: 1,
      text: '学习 React'
    }, {
      id: 2,
      text: '完成项目文档'
    }, {
      id: 3,
      text: '代码审查'
    }]);
    const handleDelete = (id: number) => {
      // 删除对应的项
      setItems(items.filter(item => item.id !== id));
    };
    return <div style={{
      maxWidth: '400px',
      margin: '0 auto'
    }}>
        <h3>待办事项</h3>
        <ul style={{
        listStyle: 'none',
        padding: 0
      }}>
          {items.map(item => <li key={item.id} style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px',
          marginBottom: '8px',
          backgroundColor: '#f5f5f5',
          borderRadius: '4px',
          border: '1px solid #ddd',
          fontSize: '14px'
        }}>
              <span>{item.text}</span>
              <Popconfirm title="确定要删除此项吗？" description={\`将删除: "\${item.text}"\`} okText="删除" cancelText="保留" placement="right" onConfirm={() => handleDelete(item.id)}>
                <Button color="danger" size="small" style={{
              marginLeft: 20
            }}>
                  删除
                </Button>
              </Popconfirm>
            </li>)}
        </ul>
        <div style={{
        marginTop: '16px',
        fontSize: '12px',
        color: '#666'
      }}>共 {items.length} 项待办</div>
      </div>;
  }
}`,...z.parameters?.docs?.source},description:{story:`删除操作演示 - 列表项删除
模拟删除列表中的一项`,...z.parameters?.docs?.description}}};const me=["Basic","WithDescription","CustomButtonText","PlacementVariants","WithMask","OkDisabled","OkLoading","AsyncConfirm","Controlled","DeleteOperation"];export{q as AsyncConfirm,L as Basic,V as Controlled,N as CustomButtonText,z as DeleteOperation,M as OkDisabled,_ as OkLoading,O as PlacementVariants,S as WithDescription,I as WithMask,me as __namedExportsOrder,de as default};
