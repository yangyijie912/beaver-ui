import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as o,R as b}from"./iframe-DrRAcTtF.js";import{r as G}from"./index-Ci4OHB6e.js";import{B as l}from"./Button-1jTwx0M_.js";import{I as O}from"./Input-C4cpDfOp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CK-JP5ii.js";function J(t){const[r,a]=o.useState(!1),[i,s]=o.useState(!1);return o.useEffect(()=>{if(t)if(r)i||s(!0);else{a(!0);const n=setTimeout(()=>{const j=setTimeout(()=>{s(!0)},10);return()=>clearTimeout(j)},0);return()=>clearTimeout(n)}else{s(!1);const n=setTimeout(()=>{t||a(!1)},250);return()=>clearTimeout(n)}},[t,r,i]),{mounted:r,animating:i}}const S=b.forwardRef(({title:t,closable:r,onClose:a,id:i},s)=>e.jsxs("div",{className:"beaver-drawer__header",ref:s,children:[t&&e.jsx("h2",{className:"beaver-drawer__title",id:i,children:t}),r&&e.jsx("button",{className:"beaver-drawer__close",onClick:a,"aria-label":"关闭抽屉",type:"button",children:e.jsx("svg",{viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"currentColor",children:e.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})})})]}));S.displayName="DrawerHeader";S.__docgenInfo={description:`DrawerHeader 组件
- 用于展示Drawer的标题和关闭按钮
- 内部组件，通常由Drawer自动创建，也可独立使用`,methods:[],displayName:"DrawerHeader",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"标题内容"},closable:{required:!1,tsType:{name:"boolean"},description:"是否显示关闭按钮"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"关闭按钮点击回调"},id:{required:!1,tsType:{name:"string"},description:"标题元素的id，用于关联aria-labelledby"}}};const N=b.forwardRef(({children:t},r)=>e.jsx("div",{className:"beaver-drawer__footer",ref:r,children:t}));N.displayName="DrawerFooter";N.__docgenInfo={description:`DrawerFooter 组件
- 用于放置Drawer底部的操作按钮
- 内部组件，通常由Drawer自动创建，也可独立使用`,methods:[],displayName:"DrawerFooter",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"页脚内容，通常为按钮等操作元素"}}};const B=b.forwardRef(({children:t,container:r},a)=>{if(typeof document>"u")return null;const i=r||document.body;return G.createPortal(e.jsx("div",{ref:a,className:"beaver-drawer-portal",children:t}),i)});B.displayName="Portal";B.__docgenInfo={description:`Portal 组件
- 用于将组件内容挂载到 DOM 的其他位置（通常为 body）
- 用于Drawer、Modal等需要脱离文档流的组件
- 避免z-index和overflow属性的层级问题`,methods:[],displayName:"Portal",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Portal容器内的内容"},container:{required:!1,tsType:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},description:"容器元素，默认为document.body"}}};const Q={small:"240px",medium:"360px",large:"520px"},d=b.forwardRef(({open:t=!1,onClose:r,title:a,width:i,placement:s="right",size:n="medium",closable:j=!0,maskClosable:T=!0,children:_,footer:C,className:z="",maskClassName:q="",contentClassName:E="",offset:p=0,mask:F=!0,...P},W)=>{const{mounted:k,animating:R}=J(t),$=o.useRef(null),M=m=>{T&&r&&r()};if(o.useEffect(()=>{if(!t)return;const m=K=>{K.key==="Escape"&&r&&r()};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[t,r]),o.useEffect(()=>{if(k){const m=window.innerWidth-document.documentElement.clientWidth;return document.body.style.overflow="hidden",document.body.style.paddingRight=`${m}px`,()=>{document.body.style.overflow="",document.body.style.paddingRight=""}}},[k]),!k)return null;const V=i||Q[n],c={[s==="left"||s==="right"?"width":"height"]:V};p&&p>0&&(s==="left"?c.left=p:s==="right"?c.right=p:s==="top"?c.top=p:s==="bottom"&&(c.bottom=p));const I=`beaver-drawer__mask ${R?"beaver-drawer--active":""} ${q}`.trim(),L=`beaver-drawer-wrapper beaver-drawer--${s} ${R?"beaver-drawer--active":""} ${z}`.trim(),H=`beaver-drawer__content ${E}`.trim(),A=e.jsxs("div",{ref:W,className:L,...P,children:[F&&e.jsx("div",{className:I,onClick:M,"aria-hidden":"true"}),e.jsxs("div",{ref:$,className:H,style:c,role:"complementary","aria-modal":"true","aria-labelledby":a?"beaver-drawer-title":void 0,children:[(a||j)&&e.jsx(S,{title:a,closable:j,onClose:r,id:a?"beaver-drawer-title":void 0}),e.jsx("div",{className:"beaver-drawer__body",children:_}),C!==null&&C!==!1?e.jsx(N,{children:C}):null]})]});return e.jsx(B,{children:A})});d.displayName="Drawer";d.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{open:{required:!1,tsType:{name:"boolean"},description:"控制Drawer是否打开",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"关闭Drawer时的回调"},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Drawer标题"},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Drawer的宽度（水平方向）或高度（竖向方向），可以是px单位或百分比
当placement为 'left' 或 'right' 时，此值作为宽度
当placement为 'top' 或 'bottom' 时，此值作为高度`},placement:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'top' | 'bottom'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:`Drawer的展示方向
@default 'right'`,defaultValue:{value:"'right'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:`Drawer的大小预设（仅在未指定 width 时生效）
- small: 240px
- medium: 360px
- large: 520px
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},closable:{required:!1,tsType:{name:"boolean"},description:`是否显示关闭按钮
@default true`,defaultValue:{value:"true",computed:!1}},maskClosable:{required:!1,tsType:{name:"boolean"},description:`点击遮罩是否关闭Drawer
@default true`,defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Drawer的内容"},footer:{required:!1,tsType:{name:"union",raw:"React.ReactNode | null | false",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"null"},{name:"literal",value:"false"}]},description:`Drawer页脚，可以放置按钮等操作元素
设为 null 或 false 时不显示页脚`},className:{required:!1,tsType:{name:"string"},description:"自定义className",defaultValue:{value:"''",computed:!1}},maskClassName:{required:!1,tsType:{name:"string"},description:"自定义遮罩className",defaultValue:{value:"''",computed:!1}},contentClassName:{required:!1,tsType:{name:"string"},description:"自定义内容className",defaultValue:{value:"''",computed:!1}},offset:{required:!1,tsType:{name:"number"},description:`Drawer距离视口边缘的间距（用于非全屏模式）
@default 0`,defaultValue:{value:"0",computed:!1}},mask:{required:!1,tsType:{name:"boolean"},description:`遮罩是否可见
@default true`,defaultValue:{value:"true",computed:!1}}}};const ae={title:"Components/Drawer",component:d,tags:["autodocs"],parameters:{docs:{description:{component:`Drawer 组件

- 使用场景：侧边栏或抽屉式面板，用于展示附加内容或操作选项
- 支持四个方向展示（左、右、上、下）
- 支持多种尺寸预设或自定义尺寸
- 支持遮罩点击关闭和按键关闭
- 支持自定义标题、内容和页脚
- 平滑的动画效果，可以通过覆盖css类自定义动画或时长`}}}},u={name:"默认（右侧）",render:()=>{const[t,r]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"primary",onClick:()=>r(!0),children:"打开Drawer"}),e.jsxs(d,{open:t,title:"Drawer标题",onClose:()=>r(!1),children:[e.jsx("p",{children:"这是一个基础的Drawer组件演示。"}),e.jsx("p",{children:"点击关闭按钮或遮罩层可以关闭Drawer。"}),e.jsx("p",{children:"也可以按Escape键关闭。"})]})]})}},f={name:"位置演示",render:()=>{const[t,r]=o.useState(!1),[a,i]=o.useState("right"),s={left:"从左侧弹出的菜单导航",right:"从右侧弹出的侧边栏",top:"从顶部弹出的操作面板",bottom:"从底部弹出的信息展示"};return e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:["left","right","top","bottom"].map(n=>e.jsx(l,{variant:a===n?"primary":"default",onClick:()=>{i(n),r(!0)},children:n==="left"?"左侧":n==="right"?"右侧":n==="top"?"顶部":"底部"},n))}),e.jsxs(d,{open:t,title:`${a==="left"?"左侧":a==="right"?"右侧":a==="top"?"顶部":"底部"}抽屉`,placement:a,onClose:()=>r(!1),children:[a==="left"&&e.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0},children:[e.jsx("li",{style:{padding:"12px 0",borderBottom:"1px solid #f0f0f0"},children:e.jsx(l,{variant:"link",children:"菜单1"})}),e.jsx("li",{style:{padding:"12px 0",borderBottom:"1px solid #f0f0f0"},children:e.jsx(l,{variant:"link",children:"菜单2"})}),e.jsx("li",{style:{padding:"12px 0"},children:e.jsx(l,{variant:"link",children:"菜单3"})})]}),(a==="right"||a==="top"||a==="bottom")&&e.jsx("p",{children:s[a]})]})]})}},w={name:"尺寸演示",render:()=>{const[t,r]=o.useState(!1),[a,i]=o.useState("medium"),s={small:"小型Drawer，适合简单内容展示",medium:"中等Drawer，适合常见操作",large:"大型Drawer，适合复杂表单和多个内容"};return e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:["small","medium","large"].map(n=>e.jsx(l,{variant:a===n?"primary":"default",onClick:()=>{i(n),r(!0)},children:n==="small"?"小":n==="medium"?"中":"大"},n))}),e.jsxs(d,{open:t,title:`${a==="small"?"小":a==="medium"?"中":"大"}型Drawer`,size:a,onClose:()=>r(!1),children:[e.jsx("p",{children:s[a]}),e.jsxs("p",{style:{marginTop:"16px",color:"#999",fontSize:"12px"},children:[a==="small"&&"宽度: 300px",a==="medium"&&"宽度: 500px",a==="large"&&"宽度: 800px"]})]})]})}},x={name:"带页脚",render:()=>{const[t,r]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"primary",onClick:()=>r(!0),children:"打开表单Drawer"}),e.jsx(d,{open:t,title:"编辑信息",onClose:()=>r(!1),footer:e.jsxs("div",{style:{display:"flex",gap:12,justifyContent:"flex-end",width:"100%"},children:[e.jsx(l,{onClick:()=>r(!1),children:"取消"}),e.jsx(l,{variant:"primary",onClick:()=>r(!1),children:"保存"})]}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(O,{placeholder:"姓名"}),e.jsx(O,{placeholder:"邮箱"})]})})]})}},y={name:"长内容滚动",render:()=>{const[t,r]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"primary",onClick:()=>r(!0),children:"打开Drawer"}),e.jsx(d,{open:t,title:"长内容",onClose:()=>r(!1),children:Array.from({length:20}).map((a,i)=>e.jsxs("div",{style:{marginBottom:16},children:[e.jsxs("h4",{style:{margin:"0 0 8px 0"},children:["段落 ",i+1]}),e.jsx("p",{style:{margin:0},children:"内容..."})]},i))})]})}},h={name:"无遮罩",render:()=>{const[t,r]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"primary",onClick:()=>r(!0),children:"打开Drawer"}),e.jsx(d,{open:t,title:"无遮罩",mask:!1,onClose:()=>r(!1),children:e.jsx("p",{children:"这个Drawer没有遮罩。"})})]})}},g={name:"无标题",render:()=>{const[t,r]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"primary",onClick:()=>r(!0),children:"打开Drawer"}),e.jsx(d,{open:t,onClose:()=>r(!1),children:e.jsx("p",{children:"这是无标题Drawer"})})]})}},D={name:"无关闭按钮",render:()=>{const[t,r]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"primary",onClick:()=>r(!0),children:"打开Drawer"}),e.jsx(d,{open:t,title:"无关闭按钮",closable:!1,onClose:()=>r(!1),children:e.jsx("p",{children:"这个Drawer没有关闭按钮"})})]})}},v={name:"自定义宽度",render:()=>{const[t,r]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"primary",onClick:()=>r(!0),children:"打开自定义宽度Drawer"}),e.jsx(d,{open:t,title:"自定义宽度",width:"70%",onClose:()=>r(!1),children:e.jsx("p",{children:"这个Drawer的宽度是视口宽度的70%"})})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '默认（右侧）',
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Drawer
        </Button>
        <Drawer open={open} title="Drawer标题" onClose={() => setOpen(false)}>
          <p>这是一个基础的Drawer组件演示。</p>
          <p>点击关闭按钮或遮罩层可以关闭Drawer。</p>
          <p>也可以按Escape键关闭。</p>
        </Drawer>
      </>;
  }
}`,...u.parameters?.docs?.source},description:{story:"基础Drawer演示",...u.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: '位置演示',
  render: () => {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState<'left' | 'right' | 'top' | 'bottom'>('right');
    const placementDescriptions: Record<string, string> = {
      left: '从左侧弹出的菜单导航',
      right: '从右侧弹出的侧边栏',
      top: '从顶部弹出的操作面板',
      bottom: '从底部弹出的信息展示'
    };
    return <div style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
        <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
      }}>
          {(['left', 'right', 'top', 'bottom'] as const).map(p => <Button key={p} variant={placement === p ? 'primary' : 'default'} onClick={() => {
          setPlacement(p);
          setOpen(true);
        }}>
              {p === 'left' ? '左侧' : p === 'right' ? '右侧' : p === 'top' ? '顶部' : '底部'}
            </Button>)}
        </div>

        <Drawer open={open} title={\`\${placement === 'left' ? '左侧' : placement === 'right' ? '右侧' : placement === 'top' ? '顶部' : '底部'}抽屉\`} placement={placement} onClose={() => setOpen(false)}>
          {placement === 'left' && <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
              <li style={{
            padding: '12px 0',
            borderBottom: '1px solid #f0f0f0'
          }}>
                <Button variant="link">菜单1</Button>
              </li>
              <li style={{
            padding: '12px 0',
            borderBottom: '1px solid #f0f0f0'
          }}>
                <Button variant="link">菜单2</Button>
              </li>
              <li style={{
            padding: '12px 0'
          }}>
                <Button variant="link">菜单3</Button>
              </li>
            </ul>}
          {(placement === 'right' || placement === 'top' || placement === 'bottom') && <p>{placementDescriptions[placement]}</p>}
        </Drawer>
      </div>;
  }
}`,...f.parameters?.docs?.source},description:{story:"位置演示（选择器）",...f.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: '尺寸演示',
  render: () => {
    const [open, setOpen] = useState(false);
    const [size, setSize] = useState<'small' | 'medium' | 'large'>('medium');
    const sizeDescriptions: Record<string, string> = {
      small: '小型Drawer，适合简单内容展示',
      medium: '中等Drawer，适合常见操作',
      large: '大型Drawer，适合复杂表单和多个内容'
    };
    return <div style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
        <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
      }}>
          {(['small', 'medium', 'large'] as const).map(s => <Button key={s} variant={size === s ? 'primary' : 'default'} onClick={() => {
          setSize(s);
          setOpen(true);
        }}>
              {s === 'small' ? '小' : s === 'medium' ? '中' : '大'}
            </Button>)}
        </div>

        <Drawer open={open} title={\`\${size === 'small' ? '小' : size === 'medium' ? '中' : '大'}型Drawer\`} size={size} onClose={() => setOpen(false)}>
          <p>{sizeDescriptions[size]}</p>
          <p style={{
          marginTop: '16px',
          color: '#999',
          fontSize: '12px'
        }}>
            {size === 'small' && '宽度: 300px'}
            {size === 'medium' && '宽度: 500px'}
            {size === 'large' && '宽度: 800px'}
          </p>
        </Drawer>
      </div>;
  }
}`,...w.parameters?.docs?.source},description:{story:"尺寸演示（选择器）",...w.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '带页脚',
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开表单Drawer
        </Button>
        <Drawer open={open} title="编辑信息" onClose={() => setOpen(false)} footer={<div style={{
        display: 'flex',
        gap: 12,
        justifyContent: 'flex-end',
        width: '100%'
      }}>
              <Button onClick={() => setOpen(false)}>取消</Button>
              <Button variant="primary" onClick={() => setOpen(false)}>
                保存
              </Button>
            </div>}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12
        }}>
            <Input placeholder="姓名" />
            <Input placeholder="邮箱" />
          </div>
        </Drawer>
      </>;
  }
}`,...x.parameters?.docs?.source},description:{story:"带页脚的Drawer",...x.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '长内容滚动',
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Drawer
        </Button>
        <Drawer open={open} title="长内容" onClose={() => setOpen(false)}>
          {Array.from({
          length: 20
        }).map((_, i) => <div key={i} style={{
          marginBottom: 16
        }}>
              <h4 style={{
            margin: '0 0 8px 0'
          }}>段落 {i + 1}</h4>
              <p style={{
            margin: 0
          }}>内容...</p>
            </div>)}
        </Drawer>
      </>;
  }
}`,...y.parameters?.docs?.source},description:{story:"长内容滚动",...y.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '无遮罩',
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Drawer
        </Button>
        <Drawer open={open} title="无遮罩" mask={false} onClose={() => setOpen(false)}>
          <p>这个Drawer没有遮罩。</p>
        </Drawer>
      </>;
  }
}`,...h.parameters?.docs?.source},description:{story:"无遮罩Drawer",...h.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '无标题',
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Drawer
        </Button>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <p>这是无标题Drawer</p>
        </Drawer>
      </>;
  }
}`,...g.parameters?.docs?.source},description:{story:"无标题Drawer",...g.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: '无关闭按钮',
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Drawer
        </Button>
        <Drawer open={open} title="无关闭按钮" closable={false} onClose={() => setOpen(false)}>
          <p>这个Drawer没有关闭按钮</p>
        </Drawer>
      </>;
  }
}`,...D.parameters?.docs?.source},description:{story:"无关闭按钮Drawer",...D.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '自定义宽度',
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开自定义宽度Drawer
        </Button>
        <Drawer open={open} title="自定义宽度" width="70%" onClose={() => setOpen(false)}>
          <p>这个Drawer的宽度是视口宽度的70%</p>
        </Drawer>
      </>;
  }
}`,...v.parameters?.docs?.source},description:{story:"自定义宽度Drawer",...v.parameters?.docs?.description}}};const ne=["Default","Placements","Sizes","WithFooter","LongContent","NoMask","NoTitle","NoCloseButton","CustomWidth"];export{v as CustomWidth,u as Default,y as LongContent,D as NoCloseButton,h as NoMask,g as NoTitle,f as Placements,w as Sizes,x as WithFooter,ne as __namedExportsOrder,ae as default};
