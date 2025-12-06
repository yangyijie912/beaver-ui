import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-DzAduImK.js";import{r as V}from"./index-j6MuDHel.js";import{B as a}from"./Button-DQp7BXCC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-EV4k8_5W.js";const n=({content:m,placement:d="top",children:N,portal:I=!0})=>{const R=p.useId(),T=p.useRef(null),E=p.useRef(null),[_,C]=p.useState(!1),w=_,[S,H]=p.useState({}),v=!(m==null||typeof m=="string"&&m.trim()===""),h=8;p.useEffect(()=>{if(!v)return;const t=T.current;if(!t)return;const c=()=>C(!0),s=()=>C(!1);return t.addEventListener("mouseenter",c),t.addEventListener("mouseleave",s),t.addEventListener("focus",c),t.addEventListener("blur",s),()=>{t.removeEventListener("mouseenter",c),t.removeEventListener("mouseleave",s),t.removeEventListener("focus",c),t.removeEventListener("blur",s)}},[v]),p.useEffect(()=>{if(!w)return;const t=()=>{const c=T.current,s=E.current;if(!c||!s)return;const o=c.getBoundingClientRect(),u=s.offsetWidth,f=s.offsetHeight;let r=0,i=0;d==="top"?(r=o.top-h-f,i=o.left+o.width/2-u/2):d==="bottom"?(r=o.bottom+h,i=o.left+o.width/2-u/2):d==="left"?(r=o.top+o.height/2-f/2,i=o.left-h-u):(r=o.top+o.height/2-f/2,i=o.right+h);const l=8,P=window.innerWidth,L=window.innerHeight;i<l&&(i=l),i+u>P-l&&(i=P-l-u),r<l&&(r=l),r+f>L-l&&(r=L-l-f),H({left:Math.round(i),top:Math.round(r)})};return t(),window.addEventListener("scroll",t,!0),window.addEventListener("resize",t),()=>{window.removeEventListener("scroll",t,!0),window.removeEventListener("resize",t)}},[w,d]);const D=e.jsx("span",{className:"beaver-tooltip__trigger",ref:T,"aria-describedby":v?R:void 0,tabIndex:0,children:N}),B=v?e.jsxs("div",{ref:E,role:"tooltip",id:R,className:"beaver-tooltip__content","data-placement":d,"data-state":w?"visible":"hidden",style:S,children:[e.jsx("div",{className:"beaver-tooltip__inner",children:m}),e.jsx("div",{className:"beaver-tooltip__arrow","data-placement":d})]}):null;return e.jsxs("span",{className:`beaver-tooltip beaver-tooltip--placement-${d}`,children:[D,I&&B?V.createPortal(B,document.body):B]})};n.__docgenInfo={description:`Tooltip 组件（改进版）

- 使用 JS 事件（mouseenter/focus）控制可见性，并用 \`createPortal\` 将提示渲染到 \`document.body\`，
  避免在 Storybook 或其他有 overflow:hidden 的容器中被裁切。
- 简单实现四个方向定位（top/bottom/left/right），通过读取触发元素的 bounding rect
  计算固定定位（position: fixed）的坐标；这可作为轻量替代 Popper/Floating
- 有详细中文注释，便于后续扩展（如添加 offset、delay、自动翻转）`,methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"要展示的内容，可以是字符串或 React 节点"},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"显示位置，默认为 `top`",defaultValue:{value:"'top'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:"子元素：触发 Tooltip 的元素（通常是按钮或文本）"},portal:{required:!1,tsType:{name:"boolean"},description:"是否通过 portal 渲染到 body（默认 true，避免被父容器裁剪）",defaultValue:{value:"true",computed:!1}}}};const k={title:"Components/Tooltip",component:n,tags:["autodocs"]},g={name:"上方 (默认)",render:()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:40},children:e.jsx(n,{content:"这是一个提示（上方）",children:e.jsx(a,{children:"Hover me"})})})},y={name:"不同位置示例",render:()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:40},children:e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[e.jsx(n,{content:"左侧提示",placement:"left",children:e.jsx(a,{children:"Left"})}),e.jsx(n,{content:"下方提示",placement:"bottom",children:e.jsx(a,{children:"Center"})}),e.jsx(n,{content:"右侧提示",placement:"right",children:e.jsx(a,{children:"Right"})})]})})},x={name:"React节点内容",render:()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:40},children:e.jsx(n,{content:e.jsxs("div",{children:[e.jsx("strong",{style:{color:"blue"},children:"提示标题"}),e.jsx("p",{style:{margin:0},children:"这是提示的详细描述，可以包含多行文本和其他 React 节点。"})]}),placement:"right",children:e.jsx(a,{children:"Hover me"})})})},j={name:"Portal 对比（裁切与局部样式继承）",render:()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:24},children:e.jsx("div",{style:{border:"1px dashed #cbd5e1",width:360,height:120,overflow:"hidden",position:"relative",display:"flex",alignItems:"center",justifyContent:"center","--beaver-components-tooltip-bg":"orange"},children:e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{marginBottom:8},children:"Portal（默认）"}),e.jsx(n,{content:"这是 portal=true（会渲染到 body，不继承局部变量，且不会被裁切）",placement:"top",children:e.jsx(a,{children:"Portal"})})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{marginBottom:8},children:"No Portal（portal=false）"}),e.jsx(n,{content:"这是 portal=false（在父容器内渲染，会继承局部变量，并可能在某些场景被裁切而无法看到）",placement:"top",portal:!1,children:e.jsx(a,{children:"In-Place"})})]})]})})})},b={name:"禁用状态（无内容）",render:()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"当content为null/undefined/空字符串时，Tooltip 不显示。"}),e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:40},children:e.jsx(n,{content:"",placement:"top",children:e.jsx(a,{children:"Hover me"})})})]})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '上方 (默认)',
  render: () => <div style={{
    display: 'flex',
    justifyContent: 'center',
    padding: 40
  }}>
      <Tooltip content="这是一个提示（上方）">
        <Button>Hover me</Button>
      </Tooltip>
    </div>
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '不同位置示例',
  render: () => <div style={{
    display: 'flex',
    justifyContent: 'center',
    padding: 40
  }}>
      <div style={{
      display: 'flex',
      gap: 24,
      alignItems: 'center'
    }}>
        <Tooltip content="左侧提示" placement="left">
          <Button>Left</Button>
        </Tooltip>
        <Tooltip content="下方提示" placement="bottom">
          <Button>Center</Button>
        </Tooltip>
        <Tooltip content="右侧提示" placement="right">
          <Button>Right</Button>
        </Tooltip>
      </div>
    </div>
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
        <Button>Hover me</Button>
      </Tooltip>
    </div>
}`,...x.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
      ['--beaver-components-tooltip-bg' as any]: 'orange'
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
              <Button>Portal</Button>
            </Tooltip>
          </div>

          <div style={{
          textAlign: 'center'
        }}>
            <div style={{
            marginBottom: 8
          }}>No Portal（portal=false）</div>
            <Tooltip content="这是 portal=false（在父容器内渲染，会继承局部变量，并可能在某些场景被裁切而无法看到）" placement="top" portal={false}>
              <Button>In-Place</Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
}`,...j.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '禁用状态（无内容）',
  render: () => <>
      <p>当content为null/undefined/空字符串时，Tooltip 不显示。</p>
      <div style={{
      display: 'flex',
      justifyContent: 'center',
      padding: 40
    }}>
        <Tooltip content="" placement="top">
          <Button>Hover me</Button>
        </Tooltip>
      </div>
    </>
}`,...b.parameters?.docs?.source}}};const J=["Top","DifferentPlacements","WithReactNode","PortalComparison","Disabled"];export{y as DifferentPlacements,b as Disabled,j as PortalComparison,g as Top,x as WithReactNode,J as __namedExportsOrder,k as default};
