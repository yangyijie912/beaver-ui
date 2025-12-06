import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a,R as P}from"./iframe-DzAduImK.js";import{r as K}from"./index-j6MuDHel.js";import{B as n}from"./Button-DQp7BXCC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-EV4k8_5W.js";const G=(s,t={})=>{const{animated:o=!0,exitDuration:r=300}=t,[d,i]=a.useState(s),[S,b]=a.useState(s);return a.useEffect(()=>{if(s)i(!0),requestAnimationFrame(()=>{b(!0)});else if(b(!1),o){const c=setTimeout(()=>{i(!1)},r);return()=>clearTimeout(c)}else i(!1)},[s,o,r]),{mounted:d,animating:o&&S}},R=({title:s,closable:t=!0,onClose:o,className:r="",...d})=>e.jsxs("div",{className:`beaver-modal__header ${r}`,...d,children:[e.jsx("div",{className:"beaver-modal__title",children:s}),t&&e.jsx("button",{className:"beaver-modal__close",onClick:o,"aria-label":"关闭",type:"button",children:e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]});R.__docgenInfo={description:"",methods:[],displayName:"ModalHeader",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"标题内容"},closable:{required:!1,tsType:{name:"boolean"},description:"是否显示关闭按钮",defaultValue:{value:"true",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"关闭按钮点击回调"},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const w=({children:s,className:t="",...o})=>e.jsx("div",{className:`beaver-modal__footer ${t}`,...o,children:s});w.__docgenInfo={description:"",methods:[],displayName:"ModalFooter",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"页脚内容"},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const J=({children:s})=>{const[t,o]=a.useState(!1),r=a.useRef(null);return a.useEffect(()=>{o(!0);let d=document.getElementById("beaver-modal-portal");return d||(d=document.createElement("div"),d.id="beaver-modal-portal",d.className="beaver-modal-portal",document.body.appendChild(d)),r.current=d,()=>{}},[]),!t||!r.current?null:K.createPortal(s,r.current)},Q={small:"300px",medium:"520px",large:"800px"},l=P.forwardRef(({open:s=!1,onClose:t,title:o,width:r,size:d="medium",closable:i=!0,maskClosable:S=!0,children:b,footer:c,className:_="",maskClassName:T="",contentClassName:q="",animated:F=!0,...E},L)=>{const{mounted:N,animating:B}=G(s,{animated:F}),V=a.useRef(null),z=p=>{S&&t&&t()};if(a.useEffect(()=>{if(!s)return;const p=H=>{H.key==="Escape"&&t&&t()};return document.addEventListener("keydown",p),()=>document.removeEventListener("keydown",p)},[s,t]),a.useEffect(()=>{if(N){const p=window.innerWidth-document.documentElement.clientWidth;return document.body.style.overflow="hidden",document.body.style.paddingRight=`${p}px`,()=>{document.body.style.overflow="",document.body.style.paddingRight=""}}},[N]),!N)return null;const $=r||Q[d],I=`beaver-modal__mask ${B?"beaver-modal--active":""} ${T}`.trim(),W=`beaver-modal-wrapper ${B?"beaver-modal--active":""} ${_}`.trim(),A=`beaver-modal__content ${q}`.trim(),D=e.jsxs("div",{ref:L,className:W,...E,children:[e.jsx("div",{className:I,onClick:z,"aria-hidden":"true"}),e.jsxs("div",{ref:V,className:A,style:{width:$},role:"dialog","aria-modal":"true","aria-labelledby":o?"beaver-modal-title":void 0,children:[(o||i)&&e.jsx(R,{title:o,closable:i,onClose:t,id:o?"beaver-modal-title":void 0}),e.jsx("div",{className:"beaver-modal__body",children:b}),c!==null&&c!==!1?e.jsx(w,{children:c||e.jsx(n,{variant:"primary",onClick:t,children:"关闭"})}):null]})]});return e.jsx(J,{children:D})});l.displayName="Modal";l.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{open:{required:!1,tsType:{name:"boolean"},description:"控制Modal是否打开",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"关闭Modal时的回调"},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Modal标题"},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Modal的宽度，默认520px"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Modal的大小预设：small(300px) / medium(520px) / large(800px)",defaultValue:{value:"'medium'",computed:!1}},closable:{required:!1,tsType:{name:"boolean"},description:"是否显示关闭按钮",defaultValue:{value:"true",computed:!1}},maskClosable:{required:!1,tsType:{name:"boolean"},description:"点击遮罩是否关闭Modal",defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Modal的内容"},footer:{required:!1,tsType:{name:"union",raw:"React.ReactNode | null | false",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"null"},{name:"literal",value:"false"}]},description:`Modal页脚，可以放置按钮等操作元素
设为 null 或 false 时不显示页脚
默认显示带关闭按钮的页脚（仅当 open=true 且 footer 未被明确设置为 false/null 时）`},className:{required:!1,tsType:{name:"string"},description:"自定义className",defaultValue:{value:"''",computed:!1}},maskClassName:{required:!1,tsType:{name:"string"},description:"自定义遮罩className",defaultValue:{value:"''",computed:!1}},contentClassName:{required:!1,tsType:{name:"string"},description:"自定义内容className",defaultValue:{value:"''",computed:!1}},animated:{required:!1,tsType:{name:"boolean"},description:"是否禁用动画",defaultValue:{value:"true",computed:!1}}},composes:["Omit"]};const se={title:"Components/Modal",component:l,tags:["autodocs"]},u={name:"默认",render:()=>{const[s,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),children:"打开Modal"}),e.jsxs(l,{open:s,title:"Modal标题",onClose:()=>t(!1),children:[e.jsx("p",{children:"这是一个基础的Modal组件演示。"}),e.jsx("p",{children:"点击关闭按钮或遮罩层可以关闭Modal。"})]})]})}},m={name:"无标题",render:()=>{const[s,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),children:"打开Modal"}),e.jsxs(l,{open:s,onClose:()=>t(!1),children:[e.jsx("h3",{children:"内容标题"}),e.jsx("p",{children:"这是一个没有顶部标题的Modal组件。"}),e.jsx("p",{children:"关闭按钮仍然显示在右上角。"})]})]})}},f={name:"无关闭按钮",render:()=>{const[s,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),children:"打开Modal"}),e.jsx(l,{open:s,title:"确认操作",onClose:()=>t(!1),closable:!1,children:e.jsx("p",{children:"这个Modal没有关闭按钮，必须通过底部按钮来操作。"})})]})}},x={name:"不可通过遮罩关闭",render:()=>{const[s,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),children:"打开Modal"}),e.jsx(l,{open:s,title:"重要操作",onClose:()=>t(!1),maskClosable:!1,children:e.jsx("p",{children:"这个Modal无法通过点击遮罩层关闭，用户必须使用关闭按钮或页脚按钮。"})})]})}},h={name:"小 (300px)",render:()=>{const[s,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),children:"打开Modal"}),e.jsx(l,{open:s,title:"小Modal",size:"small",onClose:()=>t(!1),children:e.jsx("p",{children:"这是一个小尺寸的Modal，宽度为300px。"})})]})}},M={name:"中 (520px)",render:()=>{const[s,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),children:"打开Modal"}),e.jsxs(l,{open:s,title:"中等Modal",size:"medium",onClose:()=>t(!1),children:[e.jsx("p",{children:"这是一个中等尺寸的Modal，宽度为520px。"}),e.jsx("p",{children:"这是默认尺寸，也是推荐使用的尺寸。"})]})]})}},g={name:"大 (800px)",render:()=>{const[s,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),children:"打开Modal"}),e.jsxs(l,{open:s,title:"大Modal",size:"large",onClose:()=>t(!1),children:[e.jsx("p",{children:"这是一个大尺寸的Modal，宽度为800px。"}),e.jsx("p",{children:"适合用来展示大量的内容或表单。"})]})]})}},C={name:"自定义宽度",render:()=>{const[s,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),children:"打开Modal"}),e.jsx(l,{open:s,title:"自定义宽度",width:"600px",onClose:()=>t(!1),children:e.jsx("p",{children:"这个Modal的宽度被设置为600px。"})})]})}},j={name:"长内容",render:()=>{const[s,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),children:"打开Modal"}),e.jsx(l,{open:s,title:"长内容Modal",onClose:()=>t(!1),children:Array.from({length:20}).map((o,r)=>e.jsxs("p",{children:["这是第 ",r+1," 段内容。Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]},r))})]})}},y={name:"自定义页脚",render:()=>{const[s,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),children:"打开Modal"}),e.jsxs(l,{open:s,title:"自定义页脚",onClose:()=>t(!1),footer:e.jsxs("div",{style:{width:"100%",display:"flex",gap:"8px",justifyContent:"space-between"},children:[e.jsx(n,{variant:"ghost",children:"返回"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(n,{variant:"ghost",onClick:()=>t(!1),children:"取消"}),e.jsx(n,{onClick:()=>t(!1),children:"下一步"})]})]}),children:[e.jsx("p",{children:"这个Modal有一个自定义的页脚布局。"}),e.jsx("p",{children:"页脚中有返回按钮和操作按钮。"})]})]})}},v={name:"无页脚",render:()=>{const[s,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),children:"打开Modal"}),e.jsxs(l,{open:s,title:"无页脚Modal",onClose:()=>t(!1),footer:null,children:[e.jsx("p",{children:"这是一个没有页脚的Modal。"}),e.jsx("p",{children:"必须通过关闭按钮或Escape键来关闭它。"})]})]})}},O={name:"无页头",render:()=>{const[s,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),children:"打开Modal"}),e.jsxs(l,{closable:!1,open:s,onClose:()=>t(!1),children:[e.jsx("p",{children:"这是一个没有页头的Modal。"}),e.jsx("p",{children:"可以自己写一个页头"})]})]})}},k={name:"交互示例",render:()=>{const[s,t]=a.useState(!1),[o,r]=a.useState(!1),d=()=>{r(!0),setTimeout(()=>{r(!1),t(!1)},1500)};return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),children:"打开Modal"}),e.jsx(l,{open:s,title:"确认删除",onClose:()=>t(!1),footer:e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"ghost",onClick:()=>t(!1),disabled:o,children:"取消"}),e.jsx(n,{onClick:d,disabled:o,children:o?"处理中...":"确定删除"})]}),children:e.jsx("p",{children:"确定要删除这项内容吗？此操作无法撤销。"})})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '默认',
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>打开Modal</Button>
        <Modal open={open} title="Modal标题" onClose={() => setOpen(false)}>
          <p>这是一个基础的Modal组件演示。</p>
          <p>点击关闭按钮或遮罩层可以关闭Modal。</p>
        </Modal>
      </>;
  }
}`,...u.parameters?.docs?.source},description:{story:"基础Modal演示",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '无标题',
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>打开Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <h3>内容标题</h3>
          <p>这是一个没有顶部标题的Modal组件。</p>
          <p>关闭按钮仍然显示在右上角。</p>
        </Modal>
      </>;
  }
}`,...m.parameters?.docs?.source},description:{story:"无标题Modal",...m.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: '无关闭按钮',
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>打开Modal</Button>
        <Modal open={open} title="确认操作" onClose={() => setOpen(false)} closable={false}>
          <p>这个Modal没有关闭按钮，必须通过底部按钮来操作。</p>
        </Modal>
      </>;
  }
}`,...f.parameters?.docs?.source},description:{story:"无关闭按钮Modal",...f.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '不可通过遮罩关闭',
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>打开Modal</Button>
        <Modal open={open} title="重要操作" onClose={() => setOpen(false)} maskClosable={false}>
          <p>这个Modal无法通过点击遮罩层关闭，用户必须使用关闭按钮或页脚按钮。</p>
        </Modal>
      </>;
  }
}`,...x.parameters?.docs?.source},description:{story:"不可通过点击遮罩关闭",...x.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '小 (300px)',
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>打开Modal</Button>
        <Modal open={open} title="小Modal" size="small" onClose={() => setOpen(false)}>
          <p>这是一个小尺寸的Modal，宽度为300px。</p>
        </Modal>
      </>;
  }
}`,...h.parameters?.docs?.source},description:{story:"小尺寸",...h.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: '中 (520px)',
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>打开Modal</Button>
        <Modal open={open} title="中等Modal" size="medium" onClose={() => setOpen(false)}>
          <p>这是一个中等尺寸的Modal，宽度为520px。</p>
          <p>这是默认尺寸，也是推荐使用的尺寸。</p>
        </Modal>
      </>;
  }
}`,...M.parameters?.docs?.source},description:{story:"中尺寸（默认）",...M.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '大 (800px)',
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>打开Modal</Button>
        <Modal open={open} title="大Modal" size="large" onClose={() => setOpen(false)}>
          <p>这是一个大尺寸的Modal，宽度为800px。</p>
          <p>适合用来展示大量的内容或表单。</p>
        </Modal>
      </>;
  }
}`,...g.parameters?.docs?.source},description:{story:"大尺寸",...g.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '自定义宽度',
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>打开Modal</Button>
        <Modal open={open} title="自定义宽度" width="600px" onClose={() => setOpen(false)}>
          <p>这个Modal的宽度被设置为600px。</p>
        </Modal>
      </>;
  }
}`,...C.parameters?.docs?.source},description:{story:"自定义宽度",...C.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: '长内容',
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>打开Modal</Button>
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
}`,...j.parameters?.docs?.source},description:{story:"长内容示例",...j.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '自定义页脚',
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>打开Modal</Button>
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
                <Button onClick={() => setOpen(false)}>下一步</Button>
              </div>
            </div>}>
          <p>这个Modal有一个自定义的页脚布局。</p>
          <p>页脚中有返回按钮和操作按钮。</p>
        </Modal>
      </>;
  }
}`,...y.parameters?.docs?.source},description:{story:"自定义页脚",...y.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '无页脚',
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>打开Modal</Button>
        <Modal open={open} title="无页脚Modal" onClose={() => setOpen(false)} footer={null}>
          <p>这是一个没有页脚的Modal。</p>
          <p>必须通过关闭按钮或Escape键来关闭它。</p>
        </Modal>
      </>;
  }
}`,...v.parameters?.docs?.source},description:{story:"无页脚",...v.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: '无页头',
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>打开Modal</Button>
        <Modal closable={false} open={open} onClose={() => setOpen(false)}>
          <p>这是一个没有页头的Modal。</p>
          <p>可以自己写一个页头</p>
        </Modal>
      </>;
  }
}`,...O.parameters?.docs?.source},description:{story:"无页头",...O.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
        <Button onClick={() => setOpen(true)}>打开Modal</Button>
        <Modal open={open} title="确认删除" onClose={() => setOpen(false)} footer={<>
              <Button variant="ghost" onClick={() => setOpen(false)} disabled={loading}>
                取消
              </Button>
              <Button onClick={handleConfirm} disabled={loading}>
                {loading ? '处理中...' : '确定删除'}
              </Button>
            </>}>
          <p>确定要删除这项内容吗？此操作无法撤销。</p>
        </Modal>
      </>;
  }
}`,...k.parameters?.docs?.source},description:{story:"交互示例",...k.parameters?.docs?.description}}};const ae=["Default","NoTitle","NoClosable","MaskNotClosable","Small","Medium","Large","CustomWidth","LongContent","CustomFooter","NoFooter","NoHeader","Interactive"];export{y as CustomFooter,C as CustomWidth,u as Default,k as Interactive,g as Large,j as LongContent,x as MaskNotClosable,M as Medium,f as NoClosable,v as NoFooter,O as NoHeader,m as NoTitle,h as Small,ae as __namedExportsOrder,se as default};
