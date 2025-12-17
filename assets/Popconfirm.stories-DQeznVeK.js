import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as i,R as Z}from"./iframe-C_luWA5I.js";import{B as c}from"./Button-D_4T-rhX.js";import{r as ee}from"./index-es0lou1A.js";import{a as J}from"./Toast-DnIJxGbC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Be4jxvWk.js";import"./client-DcmaHadq.js";import"./Info-BcfQhsHo.js";import"./Close-IiX-HAFp.js";import"./Check-C9Lcua7d.js";const te=({children:d})=>typeof document>"u"?null:ee.createPortal(d,document.body),re=(d,p,y="top",r=8,k=8,q=!0)=>{const[W,$]=i.useState({top:0,left:0,arrowOffset:0});return i.useEffect(()=>{if(!q)return;const H=d.current,b=p.current;if(!H||!b)return;const h=()=>{const t=H.getBoundingClientRect(),m=b.offsetWidth||250,u=b.offsetHeight||100,w=window.innerWidth,v=window.innerHeight,j=t.width,B=t.height;let o=0,s=0,a=y.toLowerCase();if({top:()=>{o=t.top-u-r,s=t.left+(j-m)/2},bottom:()=>{o=t.bottom+r,s=t.left+(j-m)/2},left:()=>{s=t.left-m-r,o=t.top+(B-u)/2},right:()=>{s=t.right+r,o=t.top+(B-u)/2}}[a]?.(),a==="top"&&o<0?(a="bottom",o=t.bottom+r):a==="bottom"&&o+u>v?(a="top",o=t.top-u-r):a==="left"&&s<0?(a="right",s=t.right+r):a==="right"&&s+m>w&&(a="left",s=t.left-m-r),t.bottom>0&&t.top<v&&t.right>0&&t.left<w){const f=s+m>0,X=s<w;f&&X&&(s<8?s=8:s+m>w-8&&(s=w-m-8));const Y=o+u>0,F=o<v;Y&&F&&(o<8?o=8:o+u>v-8&&(o=v-u-8))}const g=t.left+j/2,P=t.top+B/2,T=s+m/2,A=o+u/2;let x=0;a==="top"||a==="bottom"?(x=g-T,x=Math.max(-m/2+16,Math.min(m/2-16,x))):(a==="left"||a==="right")&&(x=P-A,x=Math.max(-u/2+16,Math.min(u/2-16,x))),$({top:o,left:s,arrowOffset:x,placement:a})};h();const D=setInterval(h,100);return window.addEventListener("scroll",h),window.addEventListener("resize",h),()=>{clearInterval(D),window.removeEventListener("scroll",h),window.removeEventListener("resize",h)}},[d,p,y,r,q]),W},l=Z.forwardRef(({children:d,open:p,onOpenChange:y,title:r,description:k,okText:q="确定",cancelText:W="取消",okVariant:$="primary",cancelVariant:H="ghost",onConfirm:b,onCancel:h,maskClosable:D=!0,showMask:t=!1,placement:m="top",contentClassName:u="",maskClassName:w="",okDisabled:v=!1,okLoading:j=!1,className:B="",...o},s)=>{const[a,K]=i.useState(!1),z=p!==void 0,g=z?p:a,P=i.useRef(null),T=i.useRef(null),A=i.useRef(null),x=re(P,T,m,8,8,g),f=i.useCallback(n=>{z||K(n),y?.(n)},[z,y]),X=i.useCallback(async n=>{if(!(j||v))try{b&&await Promise.resolve(b(n)),f(!1)}catch(C){console.error("Popconfirm confirm error:",C)}},[j,v,b,f]),Y=i.useCallback(n=>{h?.(n),f(!1)},[h,f]),F=i.useCallback(n=>{D&&n.target===n.currentTarget&&f(!1)},[D,f]);i.useEffect(()=>{if(!g)return;const n=U=>{const G=U.target;P.current&&T.current&&!P.current.contains(G)&&!T.current.contains(G)&&f(!1)},C=setTimeout(()=>{document.addEventListener("mousedown",n)},0);return()=>{clearTimeout(C),document.removeEventListener("mousedown",n)}},[g,f]),i.useEffect(()=>{if(!g)return;const n=C=>{C.key==="Escape"&&f(!1)};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[g,f]),i.useEffect(()=>{},[g]),i.useEffect(()=>{g&&T.current&&P.current?.getBoundingClientRect()},[g]);const Q=i.cloneElement(d,{ref:n=>{P.current=n},onClick:n=>{const C=d.props?.onClick;C&&C(n),f(!g)}});return e.jsxs(e.Fragment,{children:[Q,g&&e.jsx(te,{children:e.jsxs("div",{className:"beaver-popconfirm-portal",children:[t&&e.jsx("div",{className:`beaver-popconfirm__mask ${t?"beaver-popconfirm--show-mask":""} ${w}`,onClick:F}),e.jsx("div",{ref:A,className:`beaver-popconfirm-wrapper beaver-popconfirm--${x.placement||m} ${B}`,style:{position:"fixed",top:`${x.top}px`,left:`${x.left}px`},...o,children:e.jsxs("div",{ref:T,className:`beaver-popconfirm__content ${u}`,style:{"--arrow-offset":`${x.arrowOffset||0}px`},children:[e.jsx("div",{className:"beaver-popconfirm__arrow"}),e.jsx("div",{className:"beaver-popconfirm__title",children:r}),k&&e.jsx("div",{className:"beaver-popconfirm__description",children:k}),e.jsxs("div",{className:"beaver-popconfirm__actions",children:[e.jsx(c,{className:"beaver-popconfirm__cancel",variant:H,size:"small",onClick:Y,children:W}),e.jsx(c,{className:`beaver-popconfirm__ok ${j?"beaver-popconfirm--ok-loading":""}`,variant:$,size:"small",disabled:v||j,onClick:X,children:q})]})]})})]})})]})});l.displayName="Popconfirm";l.__docgenInfo={description:"",methods:[],displayName:"Popconfirm",props:{children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:"用于触发 popconfirm 显示的子元素"},open:{required:!1,tsType:{name:"boolean"},description:"控制 Popconfirm 是否打开"},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Popconfirm 打开时的回调"},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"* Popconfirm 的标题文本"},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Popconfirm 的描述文本，位于标题下方"},okText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:'确认按钮文本，默认为 "确定"',defaultValue:{value:"'确定'",computed:!1}},cancelText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:'取消按钮文本，默认为 "取消"',defaultValue:{value:"'取消'",computed:!1}},okVariant:{required:!1,tsType:{name:"union",raw:"'primary' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'ghost'"}]},description:"确认按钮的样式变体，默认为 'primary'",defaultValue:{value:"'primary'",computed:!1}},cancelVariant:{required:!1,tsType:{name:"union",raw:"'primary' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'ghost'"}]},description:"取消按钮的样式变体，默认为 'ghost'",defaultValue:{value:"'ghost'",computed:!1}},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"(e?: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:"点击确认按钮时的回调"},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"(e?: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"点击取消按钮时的回调"},maskClosable:{required:!1,tsType:{name:"boolean"},description:"是否在点击遮罩时关闭 popconfirm，默认为 true",defaultValue:{value:"true",computed:!1}},showMask:{required:!1,tsType:{name:"boolean"},description:"是否显示遮罩，默认为 false",defaultValue:{value:"false",computed:!1}},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:`Popconfirm 出现的位置，默认为 'top'
top: 顶部
bottom: 底部
left: 左侧
right: 右侧`,defaultValue:{value:"'top'",computed:!1}},contentClassName:{required:!1,tsType:{name:"string"},description:"自定义 popconfirm 内容区域的 className",defaultValue:{value:"''",computed:!1}},maskClassName:{required:!1,tsType:{name:"string"},description:"自定义遮罩的 className",defaultValue:{value:"''",computed:!1}},okDisabled:{required:!1,tsType:{name:"boolean"},description:"禁用确认按钮，默认为 false",defaultValue:{value:"false",computed:!1}},okLoading:{required:!1,tsType:{name:"boolean"},description:"是否显示加载状态（确认按钮会显示加载中），默认为 false",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const fe={title:"浮层（Overlays）/Popconfirm",component:l,parameters:{layout:"centered",docs:{description:{component:`Popconfirm 组件 - 弹出式确认框

- 使用场景： 在执行重要或不可逆操作前，要求用户进行确认，避免误操作
- 支持自定义标题和描述文本
- 支持确认和取消按钮的文本、样式和禁用状态
- 支持异步确认操作，显示加载状态
- 支持多种位置（上/下/左/右）
- 支持遮罩层和点击遮罩关闭`}}},tags:["autodocs"]},R={name:"基础用法",render:()=>e.jsx(l,{title:"确定删除此项目吗？",children:e.jsx(c,{color:"danger",children:"删除"})})},E={name:"带描述文本",render:()=>e.jsx(l,{title:"确定删除此项目吗？",description:"此操作无法撤销，请谨慎操作",okText:"确定删除",cancelText:"取消",children:e.jsx(c,{color:"danger",children:"删除"})})},L={name:"自定义按钮文本",render:()=>e.jsx(l,{title:"请确认您的操作",okText:"立即执行",cancelText:"我再想想",children:e.jsx(c,{variant:"primary",children:"执行操作"})})},N={name:"位置",render:()=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:40,padding:"40px 20px",minHeight:260},children:[e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flex:1},children:e.jsx(l,{title:"向上位置示例",placement:"top",children:e.jsx(c,{variant:"primary",children:"上"})})}),e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flex:1},children:e.jsx(l,{title:"向下位置示例",placement:"bottom",children:e.jsx(c,{variant:"primary",children:"下"})})}),e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flex:1},children:e.jsx(l,{title:"向左位置示例",placement:"left",children:e.jsx(c,{variant:"primary",children:"左"})})}),e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flex:1},children:e.jsx(l,{title:"向右位置示例",placement:"right",children:e.jsx(c,{variant:"primary",children:"右"})})})]})},S={name:"显示遮罩",render:()=>e.jsx(l,{title:"确定要执行此操作吗？",description:"点击遮罩可关闭",showMask:!0,children:e.jsx(c,{variant:"primary",children:"操作"})})},I={name:"禁用确认按钮",render:()=>e.jsx(l,{title:"确定要执行此操作吗？",description:"确认按钮已禁用",okDisabled:!0,children:e.jsx(c,{variant:"primary",children:"操作"})})},M={name:"加载状态",render:()=>e.jsx(l,{title:"确定要执行此操作吗？",okLoading:!0,children:e.jsx(c,{color:"danger",children:"删除"})})},V={name:"异步操作",render:()=>{const[d,p]=i.useState(!1),y=async()=>{p(!0),await new Promise(r=>setTimeout(r,2e3)),p(!1),J.success("删除成功！")};return e.jsx(l,{title:"确定删除此项目吗？",description:"此操作无法撤销",okLoading:d,onConfirm:y,onCancel:()=>console.log("已取消"),children:e.jsx(c,{color:"danger",children:"删除"})})}},O={name:"受控组件",render:()=>{const[d,p]=i.useState(!1);return e.jsxs("div",{children:[e.jsx(c,{variant:"primary",onClick:()=>p(!0),style:{marginRight:"20px"},children:"点击打开 Popconfirm"}),e.jsx(l,{open:d,onOpenChange:p,title:"确定要执行此操作吗？",description:"受控组件演示",onConfirm:()=>{J.success("已确认！")},children:e.jsx(c,{variant:"primary",children:"按钮"})})]})}},_={name:"交互演示",render:()=>{const[d,p]=i.useState([{id:1,text:"学习 React"},{id:2,text:"完成项目文档"},{id:3,text:"代码审查"}]),y=r=>{p(d.filter(k=>k.id!==r))};return e.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[e.jsx("h3",{children:"待办事项"}),e.jsx("ul",{style:{listStyle:"none",padding:0},children:d.map(r=>e.jsxs("li",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px",marginBottom:"8px",backgroundColor:"#f5f5f5",borderRadius:"4px",border:"1px solid #ddd",fontSize:"14px"},children:[e.jsx("span",{children:r.text}),e.jsx(l,{title:"确定要删除此项吗？",description:`将删除: "${r.text}"`,okText:"删除",cancelText:"保留",placement:"right",onConfirm:()=>y(r.id),children:e.jsx(c,{color:"danger",size:"small",style:{marginLeft:20},children:"删除"})})]},r.id))}),e.jsxs("div",{style:{marginTop:"16px",fontSize:"12px",color:"#666"},children:["共 ",d.length," 项待办"]})]})}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: '基础用法',
  render: () => <Popconfirm title="确定删除此项目吗？">
      <Button color="danger">删除</Button>
    </Popconfirm>
}`,...R.parameters?.docs?.source},description:{story:"基础演示 - 最简单的用法",...R.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '带描述文本',
  render: () => <Popconfirm title="确定删除此项目吗？" description="此操作无法撤销，请谨慎操作" okText="确定删除" cancelText="取消">
      <Button color="danger">删除</Button>
    </Popconfirm>
}`,...E.parameters?.docs?.source},description:{story:"带描述文本 - 提供更详细的确认信息",...E.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: '自定义按钮文本',
  render: () => <Popconfirm title="请确认您的操作" okText="立即执行" cancelText="我再想想">
      <Button variant="primary">执行操作</Button>
    </Popconfirm>
}`,...L.parameters?.docs?.source},description:{story:"自定义按钮文本 - 显示不同的按钮标签",...L.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:"位置",...N.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '显示遮罩',
  render: () => <Popconfirm title="确定要执行此操作吗？" description="点击遮罩可关闭" showMask={true}>
      <Button variant="primary">操作</Button>
    </Popconfirm>
}`,...S.parameters?.docs?.source},description:{story:"显示遮罩 - showMask 为 true",...S.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: '禁用确认按钮',
  render: () => <Popconfirm title="确定要执行此操作吗？" description="确认按钮已禁用" okDisabled={true}>
      <Button variant="primary">操作</Button>
    </Popconfirm>
}`,...I.parameters?.docs?.source},description:{story:"禁用确认按钮",...I.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: '加载状态',
  render: () => <Popconfirm title="确定要执行此操作吗？" okLoading={true}>
      <Button color="danger">删除</Button>
    </Popconfirm>
}`,...M.parameters?.docs?.source},description:{story:"加载状态 - 显示确认按钮的加载动画",...M.parameters?.docs?.description}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: '异步操作',
  render: () => {
    const [loading, setLoading] = useState(false);
    const handleConfirm = async () => {
      setLoading(true);
      // 模拟 API 调用
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
      Toast.success('删除成功！');
    };
    return <Popconfirm title="确定删除此项目吗？" description="此操作无法撤销" okLoading={loading} onConfirm={handleConfirm} onCancel={() => console.log('已取消')}>
        <Button color="danger">删除</Button>
      </Popconfirm>;
  }
}`,...V.parameters?.docs?.source},description:{story:"异步操作 - 模拟异步确认操作",...V.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
        Toast.success('已确认！');
      }}>
          <Button variant="primary">按钮</Button>
        </Popconfirm>
      </div>;
  }
}`,...O.parameters?.docs?.source},description:{story:"受控组件 - 通过 open 和 onOpenChange 完全控制状态",...O.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`删除操作演示 - 列表项删除
模拟删除列表中的一项`,..._.parameters?.docs?.description}}};const ge=["Basic","WithDescription","CustomButtonText","PlacementVariants","WithMask","OkDisabled","OkLoading","AsyncConfirm","Controlled","DeleteOperation"];export{V as AsyncConfirm,R as Basic,O as Controlled,L as CustomButtonText,_ as DeleteOperation,I as OkDisabled,M as OkLoading,N as PlacementVariants,E as WithDescription,S as WithMask,ge as __namedExportsOrder,fe as default};
