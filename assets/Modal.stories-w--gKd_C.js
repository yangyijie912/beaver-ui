import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as n,R as G}from"./iframe-CkYmOMph.js";import{C as J}from"./Spinner-Dq2vT7lv.js";import{r as Q}from"./index-EYGWMsiT.js";import{B as r}from"./Button-BcB96ueV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Vzf2YRGW.js";const U=(t,a={})=>{const{animated:o=!0,exitDuration:s=300}=a,[i,d]=n.useState(t),[b,B]=n.useState(t);return n.useEffect(()=>{if(t)d(!0),requestAnimationFrame(()=>{B(!0)});else if(B(!1),o){const _=setTimeout(()=>{d(!1)},s);return()=>clearTimeout(_)}else d(!1)},[t,o,s]),{mounted:i,animating:o?b:!0}},F=({title:t,closable:a=!0,onClose:o,className:s="",...i})=>e.jsxs("div",{className:`beaver-modal__header ${s}`,...i,children:[e.jsx("div",{className:"beaver-modal__title",children:t}),a&&e.jsx("button",{className:"beaver-modal__close",onClick:o,"aria-label":"关闭",type:"button",children:e.jsx(J,{width:"1em",height:"1em","aria-hidden":!0})})]});F.__docgenInfo={description:"",methods:[],displayName:"ModalHeader",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"标题内容"},closable:{required:!1,tsType:{name:"boolean"},description:"是否显示关闭按钮",defaultValue:{value:"true",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"关闭按钮点击回调"},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const T=({children:t,className:a="",...o})=>e.jsx("div",{className:`beaver-modal__footer ${a}`,...o,children:t});T.__docgenInfo={description:"",methods:[],displayName:"ModalFooter",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"页脚内容"},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const X=({children:t})=>{const[a,o]=n.useState(!1),s=n.useRef(null);return n.useEffect(()=>{o(!0);let i=document.getElementById("beaver-modal-portal");return i||(i=document.createElement("div"),i.id="beaver-modal-portal",i.className="beaver-modal-portal",document.body.appendChild(i)),s.current=i,()=>{}},[]),!a||!s.current?null:Q.createPortal(t,s.current)},Y={small:"300px",medium:"520px",large:"800px"},l=G.forwardRef(({open:t=!1,onClose:a,onOk:o,title:s,width:i,size:d="medium",closable:b=!0,maskClosable:B=!0,children:_,footer:N,className:q="",maskClassName:E="",contentClassName:L="",...z},V)=>{const{mounted:w,animating:R}=U(t),$=n.useRef(null),A=c=>{B&&a&&a()};if(n.useEffect(()=>{if(!t)return;const c=K=>{K.key==="Escape"&&a&&a()};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[t,a]),n.useEffect(()=>{if(w){const c=window.innerWidth-document.documentElement.clientWidth;return document.body.style.overflow="hidden",document.body.style.paddingRight=`${c}px`,()=>{document.body.style.overflow="",document.body.style.paddingRight=""}}},[w]),!w)return null;const D=i||Y[d],I=`beaver-modal__mask ${R?"beaver-modal--active":""} ${E}`.trim(),W=`beaver-modal-wrapper ${R?"beaver-modal--active":""} ${q}`.trim(),H=`beaver-modal__content ${L}`.trim(),P=e.jsxs("div",{ref:V,className:W,...z,children:[e.jsx("div",{className:I,onClick:A,"aria-hidden":"true"}),e.jsxs("div",{ref:$,className:H,style:{width:D},role:"dialog","aria-modal":"true","aria-labelledby":s?"beaver-modal-title":void 0,children:[(s||b)&&e.jsx(F,{title:s,closable:b,onClose:a,id:s?"beaver-modal-title":void 0}),e.jsx("div",{className:"beaver-modal__body",children:_}),N!==null&&N!==!1?e.jsx(T,{children:N||e.jsxs(e.Fragment,{children:[e.jsx(r,{color:"primary",onClick:a,children:"关闭"}),e.jsx(r,{variant:"primary",onClick:()=>{o?o():a&&a()},children:"确定"})]})}):null]})]});return e.jsx(X,{children:P})});l.displayName="Modal";l.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{open:{required:!1,tsType:{name:"boolean"},description:"控制Modal是否打开",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"关闭Modal时的回调"},onOk:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"点击确认按钮时的回调"},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Modal标题"},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Modal的宽度，默认520px"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Modal的大小预设：small(300px) / medium(520px) / large(800px)",defaultValue:{value:"'medium'",computed:!1}},closable:{required:!1,tsType:{name:"boolean"},description:"是否显示关闭按钮",defaultValue:{value:"true",computed:!1}},maskClosable:{required:!1,tsType:{name:"boolean"},description:"点击遮罩是否关闭Modal",defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Modal的内容"},footer:{required:!1,tsType:{name:"union",raw:"React.ReactNode | null | false",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"null"},{name:"literal",value:"false"}]},description:`Modal页脚，可以放置按钮等操作元素
设为 null 或 false 时不显示页脚
默认显示带关闭按钮的页脚（仅当 open=true 且 footer 未被明确设置为 false/null 时）`},className:{required:!1,tsType:{name:"string"},description:"自定义className",defaultValue:{value:"''",computed:!1}},maskClassName:{required:!1,tsType:{name:"string"},description:"自定义遮罩className",defaultValue:{value:"''",computed:!1}},contentClassName:{required:!1,tsType:{name:"string"},description:"自定义内容className",defaultValue:{value:"''",computed:!1}}}};const oe={title:"Components/Modal",component:l,tags:["autodocs"],parameters:{docs:{description:{component:`Modal 组件
- 使用场景：展示重要信息或需要用户操作的内容，阻断背景交互
- 支持多种尺寸预设（小、中、大）和自定义宽度
- 支持遮罩点击关闭和按键关闭
- 支持自定义标题、内容和页脚
- 支持动画效果`}}}},p={name:"默认",render:()=>{const[t,a]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"primary",onClick:()=>a(!0),children:"打开Modal"}),e.jsxs(l,{open:t,title:"Modal标题",onClose:()=>a(!1),children:[e.jsx("p",{children:"这是一个基础的Modal组件演示。"}),e.jsx("p",{children:"点击关闭按钮或遮罩层可以关闭Modal。"})]})]})}},u={name:"无标题",render:()=>{const[t,a]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"primary",onClick:()=>a(!0),children:"打开Modal"}),e.jsxs(l,{open:t,onClose:()=>a(!1),children:[e.jsx("h3",{children:"内容标题"}),e.jsx("p",{children:"这是一个没有顶部标题的Modal组件。"}),e.jsx("p",{children:"关闭按钮仍然显示在右上角。"})]})]})}},m={name:"无关闭按钮",render:()=>{const[t,a]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"primary",onClick:()=>a(!0),children:"打开Modal"}),e.jsx(l,{open:t,title:"确认操作",onClose:()=>a(!1),closable:!1,children:e.jsx("p",{children:"这个Modal没有关闭按钮，必须通过底部按钮来操作。"})})]})}},f={name:"不可通过遮罩关闭",render:()=>{const[t,a]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"primary",onClick:()=>a(!0),children:"打开Modal"}),e.jsx(l,{open:t,title:"重要操作",onClose:()=>a(!1),maskClosable:!1,children:e.jsx("p",{children:"这个Modal无法通过点击遮罩层关闭，用户必须使用关闭按钮或页脚按钮。"})})]})}},h={name:"小 (300px)",render:()=>{const[t,a]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"primary",onClick:()=>a(!0),children:"打开Modal"}),e.jsx(l,{open:t,title:"小Modal",size:"small",onClose:()=>a(!1),children:e.jsx("p",{children:"这是一个小尺寸的Modal，宽度为300px。"})})]})}},x={name:"中 (520px)",render:()=>{const[t,a]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"primary",onClick:()=>a(!0),children:"打开Modal"}),e.jsxs(l,{open:t,title:"中等Modal",size:"medium",onClose:()=>a(!1),children:[e.jsx("p",{children:"这是一个中等尺寸的Modal，宽度为520px。"}),e.jsx("p",{children:"这是默认尺寸，也是推荐使用的尺寸。"})]})]})}},M={name:"大 (800px)",render:()=>{const[t,a]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"primary",onClick:()=>a(!0),children:"打开Modal"}),e.jsxs(l,{open:t,title:"大Modal",size:"large",onClose:()=>a(!1),children:[e.jsx("p",{children:"这是一个大尺寸的Modal，宽度为800px。"}),e.jsx("p",{children:"适合用来展示大量的内容或表单。"})]})]})}},y={name:"自定义宽度",render:()=>{const[t,a]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"primary",onClick:()=>a(!0),children:"打开Modal"}),e.jsx(l,{open:t,title:"自定义宽度",width:"600px",onClose:()=>a(!1),children:e.jsx("p",{children:"这个Modal的宽度被设置为600px。"})})]})}},v={name:"长内容",render:()=>{const[t,a]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"primary",onClick:()=>a(!0),children:"打开Modal"}),e.jsx(l,{open:t,title:"长内容Modal",onClose:()=>a(!1),children:Array.from({length:20}).map((o,s)=>e.jsxs("p",{children:["这是第 ",s+1," 段内容。Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]},s))})]})}},C={name:"自定义页脚",render:()=>{const[t,a]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"primary",onClick:()=>a(!0),children:"打开Modal"}),e.jsxs(l,{open:t,title:"自定义页脚",onClose:()=>a(!1),footer:e.jsxs("div",{style:{width:"100%",display:"flex",gap:"8px",justifyContent:"space-between"},children:[e.jsx(r,{variant:"ghost",children:"返回"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(r,{variant:"ghost",onClick:()=>a(!1),children:"取消"}),e.jsx(r,{variant:"primary",onClick:()=>a(!1),children:"下一步"})]})]}),children:[e.jsx("p",{children:"这个Modal有一个自定义的页脚布局。"}),e.jsx("p",{children:"页脚中有返回按钮和操作按钮。"})]})]})}},g={name:"无页脚",render:()=>{const[t,a]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"primary",onClick:()=>a(!0),children:"打开Modal"}),e.jsxs(l,{open:t,title:"无页脚Modal",onClose:()=>a(!1),footer:null,children:[e.jsx("p",{children:"这是一个没有页脚的Modal。"}),e.jsx("p",{children:"必须通过关闭按钮或Escape键来关闭它。"})]})]})}},j={name:"无页头",render:()=>{const[t,a]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"primary",onClick:()=>a(!0),children:"打开Modal"}),e.jsxs(l,{closable:!1,open:t,onClose:()=>a(!1),children:[e.jsx("p",{children:"这是一个没有页头的Modal。"}),e.jsx("p",{children:"可以自己写一个页头"})]})]})}},O={name:"确认按钮的回调",render:()=>{const[t,a]=n.useState(!1),[o,s]=n.useState(0),i=()=>{s(d=>d+1)};return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"primary",onClick:()=>a(!0),children:"打开Modal"}),e.jsxs(l,{open:t,title:"onOk 示例",onClose:()=>a(!1),onOk:i,children:[e.jsx("p",{children:"点击确认按钮会触发 `onOk`，但不会自动关闭 Modal。"}),e.jsxs("p",{children:["点击次数：",o]})]})]})}},k={name:"交互示例",render:()=>{const[t,a]=n.useState(!1),[o,s]=n.useState(!1),i=()=>{s(!0),setTimeout(()=>{s(!1),a(!1)},1500)};return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"primary",onClick:()=>a(!0),children:"打开Modal"}),e.jsx(l,{open:t,title:"确认删除",onClose:()=>a(!1),footer:e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"ghost",onClick:()=>a(!1),disabled:o,children:"取消"}),e.jsx(r,{variant:"primary",onClick:i,loading:o,children:o?"处理中...":"确定删除"})]}),children:e.jsx("p",{children:"确定要删除这项内容吗？此操作无法撤销。"})})]})}},S={name:"动画示例",render:()=>{const[t,a]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .beaver-modal__mask { transition: opacity 1s ease !important; }
          .beaver-modal__content { transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1) !important; }
        `}),e.jsx(r,{variant:"primary",onClick:()=>a(!0),children:"打开"}),e.jsx(l,{open:t,title:"慢动作动画",onClose:()=>a(!1),children:e.jsx("p",{children:"关闭弹框，可以看到动画时长延长为 1s，便于观察遮罩的动画变化。"})})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '默认',
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Modal
        </Button>
        <Modal open={open} title="Modal标题" onClose={() => setOpen(false)}>
          <p>这是一个基础的Modal组件演示。</p>
          <p>点击关闭按钮或遮罩层可以关闭Modal。</p>
        </Modal>
      </>;
  }
}`,...p.parameters?.docs?.source},description:{story:"基础Modal演示",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '无标题',
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Modal
        </Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <h3>内容标题</h3>
          <p>这是一个没有顶部标题的Modal组件。</p>
          <p>关闭按钮仍然显示在右上角。</p>
        </Modal>
      </>;
  }
}`,...u.parameters?.docs?.source},description:{story:"无标题Modal",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '无关闭按钮',
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Modal
        </Button>
        <Modal open={open} title="确认操作" onClose={() => setOpen(false)} closable={false}>
          <p>这个Modal没有关闭按钮，必须通过底部按钮来操作。</p>
        </Modal>
      </>;
  }
}`,...m.parameters?.docs?.source},description:{story:"无关闭按钮Modal",...m.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: '不可通过遮罩关闭',
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Modal
        </Button>
        <Modal open={open} title="重要操作" onClose={() => setOpen(false)} maskClosable={false}>
          <p>这个Modal无法通过点击遮罩层关闭，用户必须使用关闭按钮或页脚按钮。</p>
        </Modal>
      </>;
  }
}`,...f.parameters?.docs?.source},description:{story:"不可通过点击遮罩关闭",...f.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '小 (300px)',
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Modal
        </Button>
        <Modal open={open} title="小Modal" size="small" onClose={() => setOpen(false)}>
          <p>这是一个小尺寸的Modal，宽度为300px。</p>
        </Modal>
      </>;
  }
}`,...h.parameters?.docs?.source},description:{story:"小尺寸",...h.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '中 (520px)',
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Modal
        </Button>
        <Modal open={open} title="中等Modal" size="medium" onClose={() => setOpen(false)}>
          <p>这是一个中等尺寸的Modal，宽度为520px。</p>
          <p>这是默认尺寸，也是推荐使用的尺寸。</p>
        </Modal>
      </>;
  }
}`,...x.parameters?.docs?.source},description:{story:"中尺寸（默认）",...x.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: '大 (800px)',
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Modal
        </Button>
        <Modal open={open} title="大Modal" size="large" onClose={() => setOpen(false)}>
          <p>这是一个大尺寸的Modal，宽度为800px。</p>
          <p>适合用来展示大量的内容或表单。</p>
        </Modal>
      </>;
  }
}`,...M.parameters?.docs?.source},description:{story:"大尺寸",...M.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '自定义宽度',
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Modal
        </Button>
        <Modal open={open} title="自定义宽度" width="600px" onClose={() => setOpen(false)}>
          <p>这个Modal的宽度被设置为600px。</p>
        </Modal>
      </>;
  }
}`,...y.parameters?.docs?.source},description:{story:"自定义宽度",...y.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '长内容',
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Modal
        </Button>
        <Modal open={open} title="长内容Modal" onClose={() => setOpen(false)}>
          {Array.from({
          length: 20
        }).map((_, i) => <p key={i}>
              这是第 {i + 1} 段内容。Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>)}
        </Modal>
      </>;
  }
}`,...v.parameters?.docs?.source},description:{story:"长内容示例",...v.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '自定义页脚',
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Modal
        </Button>
        <Modal open={open} title="自定义页脚" onClose={() => setOpen(false)} footer={<div style={{
        width: '100%',
        display: 'flex',
        gap: '8px',
        justifyContent: 'space-between'
      }}>
              <Button variant="ghost">返回</Button>
              <div style={{
          display: 'flex',
          gap: '8px'
        }}>
                <Button variant="ghost" onClick={() => setOpen(false)}>
                  取消
                </Button>
                <Button variant="primary" onClick={() => setOpen(false)}>
                  下一步
                </Button>
              </div>
            </div>}>
          <p>这个Modal有一个自定义的页脚布局。</p>
          <p>页脚中有返回按钮和操作按钮。</p>
        </Modal>
      </>;
  }
}`,...C.parameters?.docs?.source},description:{story:"自定义页脚",...C.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '无页脚',
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Modal
        </Button>
        <Modal open={open} title="无页脚Modal" onClose={() => setOpen(false)} footer={null}>
          <p>这是一个没有页脚的Modal。</p>
          <p>必须通过关闭按钮或Escape键来关闭它。</p>
        </Modal>
      </>;
  }
}`,...g.parameters?.docs?.source},description:{story:"无页脚",...g.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: '无页头',
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Modal
        </Button>
        <Modal closable={false} open={open} onClose={() => setOpen(false)}>
          <p>这是一个没有页头的Modal。</p>
          <p>可以自己写一个页头</p>
        </Modal>
      </>;
  }
}`,...j.parameters?.docs?.source},description:{story:"无页头",...j.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: '确认按钮的回调',
  render: () => {
    const [open, setOpen] = useState(false);
    const [count, setCount] = useState(0);
    const handleOk = () => {
      setCount(c => c + 1);
    };
    return <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Modal
        </Button>
        <Modal open={open} title="onOk 示例" onClose={() => setOpen(false)} onOk={handleOk}>
          <p>点击确认按钮会触发 \`onOk\`，但不会自动关闭 Modal。</p>
          <p>点击次数：{count}</p>
        </Modal>
      </>;
  }
}`,...O.parameters?.docs?.source},description:{story:"使用 onOk\n说明：当只传入 `onOk` 且不在 `onOk` 中调用 `onClose` 时，Modal 不会自动关闭。",...O.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '交互示例',
  render: () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleConfirm = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setOpen(false);
      }, 1500);
    };
    return <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          打开Modal
        </Button>
        <Modal open={open} title="确认删除" onClose={() => setOpen(false)} footer={<>
              <Button variant="ghost" onClick={() => setOpen(false)} disabled={loading}>
                取消
              </Button>
              <Button variant="primary" onClick={handleConfirm} loading={loading}>
                {loading ? '处理中...' : '确定删除'}
              </Button>
            </>}>
          <p>确定要删除这项内容吗？此操作无法撤销。</p>
        </Modal>
      </>;
  }
}`,...k.parameters?.docs?.source},description:{story:"交互示例",...k.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '动画示例',
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <style>{\`
          .beaver-modal__mask { transition: opacity 1s ease !important; }
          .beaver-modal__content { transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1) !important; }
        \`}</style>

        <Button variant="primary" onClick={() => setOpen(true)}>
          打开
        </Button>

        <Modal open={open} title="慢动作动画" onClose={() => setOpen(false)}>
          <p>关闭弹框，可以看到动画时长延长为 1s，便于观察遮罩的动画变化。</p>
        </Modal>
      </>;
  }
}`,...S.parameters?.docs?.source},description:{story:"可以自行覆盖CSS来改写动画效果",...S.parameters?.docs?.description}}};const le=["Default","NoTitle","NoClosable","MaskNotClosable","Small","Medium","Large","CustomWidth","LongContent","CustomFooter","NoFooter","NoHeader","OnOkDefault","Interactive","AnimationSlow"];export{S as AnimationSlow,C as CustomFooter,y as CustomWidth,p as Default,k as Interactive,M as Large,v as LongContent,f as MaskNotClosable,x as Medium,m as NoClosable,g as NoFooter,j as NoHeader,u as NoTitle,O as OnOkDefault,h as Small,le as __namedExportsOrder,oe as default};
