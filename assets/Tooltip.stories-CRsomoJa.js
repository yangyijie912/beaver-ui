import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as o,R as L}from"./iframe-CkYmOMph.js";import{r as H}from"./index-EYGWMsiT.js";import{a as A,o as V,f as W,s as q,b as M,c as $}from"./floating-ui.dom-BnXNKGks.js";import{B as r}from"./Button-BcB96ueV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Vzf2YRGW.js";const F=(i,d,_,g=!0)=>{const{placement:f,gap:x=8,padding:m=8,showArrow:u=!0}=_,[D,j]=o.useState({x:0,y:0,placement:f,arrowStyle:{}});return o.useEffect(()=>{if(!g)return;const y=i.current,l=d.current;if(!y||!l)return;const p=l.querySelector("[data-floating-arrow]"),T=A(y,l,async()=>{try{const b=[V(x),W(),q({padding:m})];u&&p&&b.push(M({element:p}));const{x:w,y:I,placement:s,middlewareData:h}=await $(y,l,{placement:f,strategy:"fixed",middleware:b}),a={};if(u&&p&&h&&h.arrow){const B=h.arrow,v=p.offsetWidth||p.offsetHeight||8;if(s.startsWith("top")||s.startsWith("bottom")){const c=(B.x??0)-l.offsetWidth/2+(v/2||0);a.left=`calc(50% + ${Math.round(c)}px)`}else{const c=(B.y??0)-l.offsetHeight/2+(v/2||0);a.top=`calc(50% + ${Math.round(c)}px)`}}j({x:Math.round(w||0),y:Math.round(I||0),placement:s,arrowStyle:a})}catch{}});return()=>T&&T()},[i,d,f,x,m,u,g]),D},t=L.forwardRef(({content:i,placement:d="top",children:_,portal:g=!0},f)=>{const x=o.useId(),m=o.useRef(null),u=o.useRef(null),[D,j]=o.useState(!1),y=D,[l,p]=o.useState({}),[T,b]=o.useState({}),[w,I]=o.useState(d),s=!(i==null||typeof i=="string"&&i.trim()===""),h=8;o.useEffect(()=>{if(!s)return;const n=m.current;if(!n)return;const c=()=>j(!0),R=()=>j(!1);return n.addEventListener("mouseenter",c),n.addEventListener("mouseleave",R),n.addEventListener("focus",c),n.addEventListener("blur",R),()=>{n.removeEventListener("mouseenter",c),n.removeEventListener("mouseleave",R),n.removeEventListener("focus",c),n.removeEventListener("blur",R)}},[s]);const a=F(m,u,{placement:d,gap:h,showArrow:!0},y);o.useEffect(()=>{p({left:a.x,top:a.y}),I(a.placement),b(a.arrowStyle)},[a]);const B=e.jsx("span",{className:"beaver-tooltip__trigger",ref:m,"aria-describedby":s?x:void 0,tabIndex:0,children:_}),v=s?e.jsxs("div",{ref:u,role:"tooltip",id:x,className:"beaver-tooltip__content","data-placement":w,"data-state":y?"visible":"hidden",style:{...l},children:[e.jsx("div",{className:"beaver-tooltip__inner",children:i}),e.jsx("div",{className:"beaver-tooltip__arrow","data-placement":w,"data-floating-arrow":!0,style:T})]}):null;return e.jsxs("span",{className:`beaver-tooltip beaver-tooltip--placement-${d}`,ref:f,children:[B,g&&v?H.createPortal(v,document.body):v]})});t.displayName="Tooltip";t.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"要展示的内容，可以是字符串或 React 节点"},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"显示位置，默认为 `top`",defaultValue:{value:"'top'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:"子元素：触发 Tooltip 的元素（通常是按钮或文本）"},portal:{required:!1,tsType:{name:"boolean"},description:"是否通过 portal 渲染到 body（默认 true，避免被父容器裁剪）",defaultValue:{value:"true",computed:!1}}}};const J={title:"Components/Tooltip",component:t,tags:["autodocs"],parameters:{docs:{description:{component:`Tooltip 组件
- 使用场景：为元素提供简洁的文字提示信息
- 支持多种位置（上/下/左/右）
- 支持 React 节点内容
- 支持 portal 渲染，避免裁切问题
- 支持内容为空时不显示 Tooltip`}}}},P={name:"上方 (默认)",render:()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:40},children:e.jsx(t,{content:"这是一个提示（上方）",children:e.jsx(r,{variant:"primary",children:"Hover me"})})})},E={name:"不同位置示例",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,width:"100%"},children:[e.jsxs("div",{style:{display:"flex",gap:24,justifyContent:"center"},children:[e.jsx(t,{content:"左侧提示",placement:"left",children:e.jsx(r,{variant:"primary",children:"左侧提示"})}),e.jsx(t,{content:"这是一个上方提示，但是在方位受限的情况下会自动调整位置",placement:"top",children:e.jsx(r,{variant:"primary",children:"上方提示"})}),e.jsx(t,{content:"右侧提示",placement:"right",children:e.jsx(r,{variant:"primary",children:"右侧提示"})})]}),e.jsxs("div",{style:{display:"flex",gap:24},children:[e.jsx(t,{content:"这是一个左侧提示，但是在方位受限的情况下会自动调整位置",placement:"left",children:e.jsx(r,{variant:"primary",children:"左侧提示"})}),e.jsx(t,{content:"下方提示",placement:"bottom",children:e.jsx(r,{variant:"primary",children:"下方提示"})}),e.jsx(t,{content:"右侧提示",placement:"right",children:e.jsx(r,{variant:"primary",children:"右侧提示"})})]}),e.jsxs("div",{style:{display:"flex",gap:24,flexDirection:"row-reverse"},children:[e.jsx(t,{content:"这是一个右侧提示，但是在方位受限的情况下会自动调整位置",placement:"right",children:e.jsx(r,{variant:"primary",children:"右侧提示"})}),e.jsx(t,{content:"下方提示",placement:"bottom",children:e.jsx(r,{variant:"primary",children:"下方提示"})}),e.jsx(t,{content:"左侧提示",placement:"left",children:e.jsx(r,{variant:"primary",children:"左侧提示"})})]})]})},S={name:"React节点内容",render:()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:40},children:e.jsx(t,{content:e.jsxs("div",{children:[e.jsx("strong",{style:{color:"blue"},children:"提示标题"}),e.jsx("p",{style:{margin:0},children:"这是提示的详细描述，可以包含多行文本和其他 React 节点。"})]}),placement:"right",children:e.jsx(r,{variant:"primary",children:"Hover me"})})})},C={name:"Portal 对比（裁切与局部样式继承）",render:()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:24},children:e.jsx("div",{style:{border:"1px dashed #cbd5e1",width:360,height:120,overflow:"hidden",position:"relative",display:"flex",alignItems:"center",justifyContent:"center","--beaver-tooltip-bg":"orange"},children:e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{marginBottom:8},children:"Portal（默认）"}),e.jsx(t,{content:"这是 portal=true（会渲染到 body，不继承局部变量，且不会被裁切）",placement:"top",children:e.jsx(r,{variant:"primary",children:"Portal"})})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{marginBottom:8},children:"No Portal（portal=false）"}),e.jsx(t,{content:"这是 portal=false（在父容器内渲染，会继承局部变量，并可能在某些场景被裁切而无法看到）",placement:"top",portal:!1,children:e.jsx(r,{variant:"primary",children:"In-Place"})})]})]})})})},N={name:"禁用状态（无内容）",render:()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"当content为null/undefined/空字符串时，Tooltip 不显示。"}),e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:40},children:e.jsx(t,{content:"",placement:"top",children:e.jsx(r,{variant:"primary",children:"Hover me"})})})]})};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: '上方 (默认)',
  render: () => <div style={{
    display: 'flex',
    justifyContent: 'center',
    padding: 40
  }}>
      <Tooltip content="这是一个提示（上方）">
        <Button variant="primary">Hover me</Button>
      </Tooltip>
    </div>
}`,...P.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '不同位置示例',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    width: '100%'
  }}>
      <div style={{
      display: 'flex',
      gap: 24,
      justifyContent: 'center'
    }}>
        <Tooltip content="左侧提示" placement="left">
          <Button variant="primary">左侧提示</Button>
        </Tooltip>
        <Tooltip content="这是一个上方提示，但是在方位受限的情况下会自动调整位置" placement="top">
          <Button variant="primary">上方提示</Button>
        </Tooltip>
        <Tooltip content="右侧提示" placement="right">
          <Button variant="primary">右侧提示</Button>
        </Tooltip>
      </div>
      <div style={{
      display: 'flex',
      gap: 24
    }}>
        <Tooltip content="这是一个左侧提示，但是在方位受限的情况下会自动调整位置" placement="left">
          <Button variant="primary">左侧提示</Button>
        </Tooltip>
        <Tooltip content="下方提示" placement="bottom">
          <Button variant="primary">下方提示</Button>
        </Tooltip>
        <Tooltip content="右侧提示" placement="right">
          <Button variant="primary">右侧提示</Button>
        </Tooltip>
      </div>
      <div style={{
      display: 'flex',
      gap: 24,
      flexDirection: 'row-reverse'
    }}>
        <Tooltip content="这是一个右侧提示，但是在方位受限的情况下会自动调整位置" placement="right">
          <Button variant="primary">右侧提示</Button>
        </Tooltip>
        <Tooltip content="下方提示" placement="bottom">
          <Button variant="primary">下方提示</Button>
        </Tooltip>
        <Tooltip content="左侧提示" placement="left">
          <Button variant="primary">左侧提示</Button>
        </Tooltip>
      </div>
    </div>
}`,...E.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'React节点内容',
  render: () => <div style={{
    display: 'flex',
    justifyContent: 'center',
    padding: 40
  }}>
      <Tooltip content={<div>
            <strong style={{
        color: 'blue'
      }}>提示标题</strong>
            <p style={{
        margin: 0
      }}>这是提示的详细描述，可以包含多行文本和其他 React 节点。</p>
          </div>} placement="right">
        <Button variant="primary">Hover me</Button>
      </Tooltip>
    </div>
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Portal 对比（裁切与局部样式继承）',
  render: () => <div style={{
    display: 'flex',
    justifyContent: 'center',
    padding: 24
  }}>
      <div style={{
      border: '1px dashed #cbd5e1',
      width: 360,
      height: 120,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      // 在容器上设置局部变量，portal=false 的 tooltip 可以继承到这个变量
      ['--beaver-tooltip-bg' as any]: 'orange'
    }}>
        <div style={{
        display: 'flex',
        gap: 24,
        alignItems: 'center'
      }}>
          <div style={{
          textAlign: 'center'
        }}>
            <div style={{
            marginBottom: 8
          }}>Portal（默认）</div>
            <Tooltip content="这是 portal=true（会渲染到 body，不继承局部变量，且不会被裁切）" placement="top">
              <Button variant="primary">Portal</Button>
            </Tooltip>
          </div>

          <div style={{
          textAlign: 'center'
        }}>
            <div style={{
            marginBottom: 8
          }}>No Portal（portal=false）</div>
            <Tooltip content="这是 portal=false（在父容器内渲染，会继承局部变量，并可能在某些场景被裁切而无法看到）" placement="top" portal={false}>
              <Button variant="primary">In-Place</Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
}`,...C.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: '禁用状态（无内容）',
  render: () => <>
      <p>当content为null/undefined/空字符串时，Tooltip 不显示。</p>
      <div style={{
      display: 'flex',
      justifyContent: 'center',
      padding: 40
    }}>
        <Tooltip content="" placement="top">
          <Button variant="primary">Hover me</Button>
        </Tooltip>
      </div>
    </>
}`,...N.parameters?.docs?.source}}};const K=["Top","DifferentPlacements","WithReactNode","PortalComparison","Disabled"];export{E as DifferentPlacements,N as Disabled,C as PortalComparison,P as Top,S as WithReactNode,K as __namedExportsOrder,J as default};
