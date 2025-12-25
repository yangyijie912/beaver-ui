import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as b}from"./iframe-CIZpvQ1U.js";import{C as L}from"./Close-IiX-HAFp.js";import{C as j}from"./Check-C9Lcua7d.js";import{W as M,I as T}from"./Info-BYSQShoX.js";import{T as R}from"./Trash-CEBRM02O.js";import"./preload-helper-PPVm8Dsz.js";const a=b.forwardRef(({children:t,className:r,size:f="medium",type:w="default",variant:z="solid",disabled:v=!1,closable:k=!1,onClose:D,icon:C,closeIcon:S,onClick:I,style:V,customColor:i,...q},N)=>{const s=["beaver-tag"];f&&s.push(`beaver-tag--${f}`),w&&!i&&s.push(`beaver-tag--${w}`),z&&!i&&s.push(`beaver-tag--${z}`),v&&s.push("beaver-tag--disabled"),r&&s.push(r);const _=W=>{W.stopPropagation(),D?.(W)},E={...V,...i&&{backgroundColor:i.bg,color:i.text,borderColor:i.border}};return e.jsxs("span",{ref:N,className:s.join(" "),style:E,onClick:v?void 0:I,role:"img","aria-disabled":v,...q,children:[C&&e.jsx("span",{className:"beaver-tag__icon",children:C}),e.jsx("span",{className:"beaver-tag__content",children:t}),k&&!v&&e.jsx("button",{type:"button",className:"beaver-tag__close","aria-label":"关闭标签",onClick:_,children:S||e.jsx(L,{width:"1em",height:"1em"})})]})});a.displayName="Tag";a.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Tag 的显示文本内容"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:`Tag 的尺寸
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'primary' | 'success' | 'warning' | 'error' | 'default'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'default'"}]},description:`Tag 的类型/颜色方案
- primary: 主色调
- success: 成功色
- warning: 警告色
- error: 错误色
- default: 默认色
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'outline' | 'light'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'light'"}]},description:`Tag 的变体样式
- solid: 实心填充（默认）
- outline: 边框样式
- light: 浅色背景
@default 'solid'`,defaultValue:{value:"'solid'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`是否为禁用状态
@default false`,defaultValue:{value:"false",computed:!1}},closable:{required:!1,tsType:{name:"boolean"},description:`是否显示关闭按钮
@default false`,defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"关闭按钮的点击回调"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`自定义图标内容，支持传入 React 组件或 ReactNode
示例：<Tag icon={<Check width={14} height={14} />}>已完成</Tag>`},closeIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`自定义关闭按钮内容，默认为 × 图标
示例：<Tag closable closeIcon={<Trash />}>删除</Tag>`},customColor:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /**
   * 背景色
   */
  bg?: string;
  /**
   * 文字色
   */
  text?: string;
  /**
   * 边框色
   */
  border?: string;
}`,signature:{properties:[{key:"bg",value:{name:"string",required:!1},description:"背景色"},{key:"text",value:{name:"string",required:!1},description:"文字色"},{key:"border",value:{name:"string",required:!1},description:"边框色"}]}},description:`自定义背景颜色（会覆盖 type 定义的背景色）
示例：<Tag customColor={{ bg: '#ff6b6b', text: '#fff', border: '#ff6b6b' }}>自定义</Tag>`}}};const G={title:"数据展示（Data Display）/Tag",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`Tag 组件
- 使用场景：标记和分类内容
- 支持多种类型（主色、成功、警告、错误、默认）
- 支持多种变体（实心、边框、浅色）
- 支持多种尺寸（小、中、大）
- 支持可关闭标签
- 支持禁用状态
- 支持自定义图标`}}}},l={name:"默认",args:{children:"标签"}},n={name:"类型",render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(a,{type:"default",children:"默认"}),e.jsx(a,{type:"primary",children:"主色调"}),e.jsx(a,{type:"success",children:"成功"}),e.jsx(a,{type:"warning",children:"警告"}),e.jsx(a,{type:"error",children:"错误"})]})},o={name:"变体",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"12px",color:"#666"},children:"实心 (solid)"}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(a,{variant:"solid",type:"default",children:"默认"}),e.jsx(a,{variant:"solid",type:"primary",children:"主色调"}),e.jsx(a,{variant:"solid",type:"success",children:"成功"}),e.jsx(a,{variant:"solid",type:"warning",children:"警告"}),e.jsx(a,{variant:"solid",type:"error",children:"错误"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"12px",color:"#666"},children:"边框 (outline)"}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(a,{variant:"outline",type:"default",children:"默认"}),e.jsx(a,{variant:"outline",type:"primary",children:"主色调"}),e.jsx(a,{variant:"outline",type:"success",children:"成功"}),e.jsx(a,{variant:"outline",type:"warning",children:"警告"}),e.jsx(a,{variant:"outline",type:"error",children:"错误"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"12px",color:"#666"},children:"浅色 (light)"}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(a,{variant:"light",type:"default",children:"默认"}),e.jsx(a,{variant:"light",type:"primary",children:"主色调"}),e.jsx(a,{variant:"light",type:"success",children:"成功"}),e.jsx(a,{variant:"light",type:"warning",children:"警告"}),e.jsx(a,{variant:"light",type:"error",children:"错误"})]})]})]})},d={name:"尺寸",render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"flex-start"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("div",{style:{fontSize:"12px",color:"#666"},children:"小 (small)"}),e.jsx(a,{size:"small",children:"小标签"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("div",{style:{fontSize:"12px",color:"#666"},children:"中 (medium)"}),e.jsx(a,{size:"medium",children:"中标签"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("div",{style:{fontSize:"12px",color:"#666"},children:"大 (large)"}),e.jsx(a,{size:"large",children:"大标签"})]})]})},p={name:"可关闭",render:()=>{const[t,r]=b.useState(!0),f=()=>r(!1);return t?e.jsxs(a,{closable:!0,onClose:f,type:"primary",children:["	","可关闭的标签"]}):e.jsx("button",{onClick:()=>r(!0),style:{padding:"4px 12px",border:"1px solid #ccc",borderRadius:"4px",cursor:"pointer"},children:"显示标签"})}},c={name:"带图标",render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(a,{icon:e.jsx(j,{width:14,height:14}),type:"success",children:"成功完成"}),e.jsx(a,{icon:e.jsx(M,{width:14,height:14}),type:"warning",children:"需要注意"}),e.jsx(a,{icon:e.jsx(T,{width:14,height:14}),type:"primary",children:"信息提示"}),e.jsx(a,{icon:e.jsx(R,{width:14,height:14}),type:"error",children:"删除"})]})},g={name:"禁用",render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(a,{disabled:!0,children:"禁用标签"}),e.jsx(a,{disabled:!0,type:"primary",children:"禁用主色"}),e.jsx(a,{disabled:!0,closable:!0,children:"禁用可关闭"})]})},m={name:"组合示例",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"12px",color:"#666"},children:"标签云示例"}),e.jsxs("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:[e.jsx(a,{size:"small",type:"primary",children:"React"}),e.jsx(a,{size:"small",type:"primary",variant:"light",children:"TypeScript"}),e.jsx(a,{size:"small",type:"success",children:"完成"}),e.jsx(a,{size:"small",type:"warning",children:"进行中"}),e.jsx(a,{size:"small",type:"default",variant:"outline",children:"标签1"}),e.jsx(a,{size:"small",type:"default",variant:"outline",children:"标签2"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"12px",color:"#666"},children:"状态指示示例"}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(a,{icon:e.jsx(j,{width:14,height:14}),type:"success",variant:"light",children:"已发布"}),e.jsx(a,{icon:e.jsx(T,{width:14,height:14}),type:"warning",variant:"light",children:"待审核"}),e.jsx(a,{icon:e.jsx(R,{width:14,height:14}),type:"error",variant:"light",children:"已拒绝"}),e.jsx(a,{icon:e.jsx(T,{width:14,height:14}),type:"primary",variant:"light",children:"草稿"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"12px",color:"#666"},children:"可删除列表示例"}),e.jsxs("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:[e.jsx(a,{closable:!0,type:"primary",children:"热门话题 #1"}),e.jsx(a,{closable:!0,type:"primary",children:"热门话题 #2"}),e.jsx(a,{closable:!0,type:"primary",children:"热门话题 #3"})]})]})]})},x={name:"边框样式各尺寸",render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{size:"small",variant:"outline",type:"primary",children:"小"}),e.jsx(a,{size:"medium",variant:"outline",type:"primary",children:"中"}),e.jsx(a,{size:"large",variant:"outline",type:"primary",children:"大"})]})},u={name:"浅色样式各尺寸",render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{size:"small",variant:"light",type:"success",children:"小"}),e.jsx(a,{size:"medium",variant:"light",type:"success",children:"中"}),e.jsx(a,{size:"large",variant:"light",type:"success",children:"大"})]})},y={name:"自定义颜色",render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(a,{customColor:{bg:"#ff6b6b",text:"#fff",border:"#ff6b6b"},children:"自定义红色"}),e.jsx(a,{customColor:{bg:"#4ecdc4",text:"#fff",border:"#4ecdc4"},children:"自定义青色"}),e.jsx(a,{customColor:{bg:"#ffe66d",text:"#333",border:"#ffd700"},children:"自定义黄色"}),e.jsx(a,{customColor:{bg:"#c7ceea",text:"#333",border:"#b0a7db"},children:"自定义紫色"}),e.jsx(a,{icon:e.jsx(j,{width:14,height:14}),customColor:{bg:"#95e1d3",text:"#333",border:"#76cfc0"},children:"带图标自定义"})]})},h={name:"自定义颜色可关闭",render:()=>{const[t,r]=b.useState(!0);return t?e.jsx(a,{closable:!0,onClose:()=>r(!1),customColor:{bg:"#667eea",text:"#fff",border:"#667eea"},children:"自定义可关闭标签"}):e.jsx("button",{onClick:()=>r(!0),style:{padding:"4px 12px",border:"1px solid #ccc",borderRadius:"4px",cursor:"pointer"},children:"显示标签"})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: '默认',
  args: {
    children: '标签'
  }
}`,...l.parameters?.docs?.source},description:{story:"基本使用",...l.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: '类型',
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  }}>
      <Tag type="default">默认</Tag>
      <Tag type="primary">主色调</Tag>
      <Tag type="success">成功</Tag>
      <Tag type="warning">警告</Tag>
      <Tag type="error">错误</Tag>
    </div>
}`,...n.parameters?.docs?.source},description:{story:`不同类型展示
- primary: 主色调，用于突出重要信息
- success: 成功状态，通常用于标记已完成项目
- warning: 警告状态，用于标记需要注意的项目
- error: 错误状态，用于标记失败或有问题的项目
- default: 默认类型，用于普通分类`,...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: '变体',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div>
        <h3 style={{
        margin: '0 0 8px 0',
        fontSize: '12px',
        color: '#666'
      }}>实心 (solid)</h3>
        <div style={{
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap'
      }}>
          <Tag variant="solid" type="default">
            默认
          </Tag>
          <Tag variant="solid" type="primary">
            主色调
          </Tag>
          <Tag variant="solid" type="success">
            成功
          </Tag>
          <Tag variant="solid" type="warning">
            警告
          </Tag>
          <Tag variant="solid" type="error">
            错误
          </Tag>
        </div>
      </div>

      <div>
        <h3 style={{
        margin: '0 0 8px 0',
        fontSize: '12px',
        color: '#666'
      }}>边框 (outline)</h3>
        <div style={{
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap'
      }}>
          <Tag variant="outline" type="default">
            默认
          </Tag>
          <Tag variant="outline" type="primary">
            主色调
          </Tag>
          <Tag variant="outline" type="success">
            成功
          </Tag>
          <Tag variant="outline" type="warning">
            警告
          </Tag>
          <Tag variant="outline" type="error">
            错误
          </Tag>
        </div>
      </div>

      <div>
        <h3 style={{
        margin: '0 0 8px 0',
        fontSize: '12px',
        color: '#666'
      }}>浅色 (light)</h3>
        <div style={{
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap'
      }}>
          <Tag variant="light" type="default">
            默认
          </Tag>
          <Tag variant="light" type="primary">
            主色调
          </Tag>
          <Tag variant="light" type="success">
            成功
          </Tag>
          <Tag variant="light" type="warning">
            警告
          </Tag>
          <Tag variant="light" type="error">
            错误
          </Tag>
        </div>
      </div>
    </div>
}`,...o.parameters?.docs?.source},description:{story:`不同变体展示
- solid: 实心填充，最常用
- outline: 边框样式，适合浅色背景
- light: 浅色背景，柔和的表现形式`,...o.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '尺寸',
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <div style={{
        fontSize: '12px',
        color: '#666'
      }}>小 (small)</div>
        <Tag size="small">小标签</Tag>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <div style={{
        fontSize: '12px',
        color: '#666'
      }}>中 (medium)</div>
        <Tag size="medium">中标签</Tag>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <div style={{
        fontSize: '12px',
        color: '#666'
      }}>大 (large)</div>
        <Tag size="large">大标签</Tag>
      </div>
    </div>
}`,...d.parameters?.docs?.source},description:{story:`不同尺寸展示
- small: 紧凑型，用于标签列表等空间受限的场景
- medium: 标准型（默认），最常用的尺寸
- large: 宽松型，用于突出的标签`,...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '可关闭',
  render: () => {
    const [visible, setVisible] = React.useState(true);
    const handleClose = () => setVisible(false);
    if (!visible) {
      return <button onClick={() => setVisible(true)} style={{
        padding: '4px 12px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
          显示标签
        </button>;
    }
    return <Tag closable onClose={handleClose} type="primary">
        {'\\t'}可关闭的标签
      </Tag>;
  }
}`,...p.parameters?.docs?.source},description:{story:`可关闭的标签
通过设置 closable=true 和 onClose 回调来实现关闭功能`,...p.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: '带图标',
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  }}>
      <Tag icon={<Check width={14} height={14} />} type="success">
        成功完成
      </Tag>
      <Tag icon={<Warning width={14} height={14} />} type="warning">
        需要注意
      </Tag>
      <Tag icon={<Info width={14} height={14} />} type="primary">
        信息提示
      </Tag>
      <Tag icon={<Trash width={14} height={14} />} type="error">
        删除
      </Tag>
    </div>
}`,...c.parameters?.docs?.source},description:{story:`带图标的标签
使用库中的 Icon 组件，图标和文字会自动垂直居中`,...c.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '禁用',
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  }}>
      <Tag disabled>禁用标签</Tag>
      <Tag disabled type="primary">
        禁用主色
      </Tag>
      <Tag disabled closable>
        禁用可关闭
      </Tag>
    </div>
}`,...g.parameters?.docs?.source},description:{story:"禁用状态",...g.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '组合示例',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div>
        <h3 style={{
        margin: '0 0 8px 0',
        fontSize: '12px',
        color: '#666'
      }}>标签云示例</h3>
        <div style={{
        display: 'flex',
        gap: '6px',
        flexWrap: 'wrap'
      }}>
          <Tag size="small" type="primary">
            React
          </Tag>
          <Tag size="small" type="primary" variant="light">
            TypeScript
          </Tag>
          <Tag size="small" type="success">
            完成
          </Tag>
          <Tag size="small" type="warning">
            进行中
          </Tag>
          <Tag size="small" type="default" variant="outline">
            标签1
          </Tag>
          <Tag size="small" type="default" variant="outline">
            标签2
          </Tag>
        </div>
      </div>

      <div>
        <h3 style={{
        margin: '0 0 8px 0',
        fontSize: '12px',
        color: '#666'
      }}>状态指示示例</h3>
        <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
      }}>
          <Tag icon={<Check width={14} height={14} />} type="success" variant="light">
            已发布
          </Tag>
          <Tag icon={<Info width={14} height={14} />} type="warning" variant="light">
            待审核
          </Tag>
          <Tag icon={<Trash width={14} height={14} />} type="error" variant="light">
            已拒绝
          </Tag>
          <Tag icon={<Info width={14} height={14} />} type="primary" variant="light">
            草稿
          </Tag>
        </div>
      </div>

      <div>
        <h3 style={{
        margin: '0 0 8px 0',
        fontSize: '12px',
        color: '#666'
      }}>可删除列表示例</h3>
        <div style={{
        display: 'flex',
        gap: '6px',
        flexWrap: 'wrap'
      }}>
          <Tag closable type="primary">
            热门话题 #1
          </Tag>
          <Tag closable type="primary">
            热门话题 #2
          </Tag>
          <Tag closable type="primary">
            热门话题 #3
          </Tag>
        </div>
      </div>
    </div>
}`,...m.parameters?.docs?.source},description:{story:"组合示例：不同大小和类型的组合",...m.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '边框样式各尺寸',
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Tag size="small" variant="outline" type="primary">
        小
      </Tag>
      <Tag size="medium" variant="outline" type="primary">
        中
      </Tag>
      <Tag size="large" variant="outline" type="primary">
        大
      </Tag>
    </div>
}`,...x.parameters?.docs?.source},description:{story:"边框样式的不同大小",...x.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '浅色样式各尺寸',
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Tag size="small" variant="light" type="success">
        小
      </Tag>
      <Tag size="medium" variant="light" type="success">
        中
      </Tag>
      <Tag size="large" variant="light" type="success">
        大
      </Tag>
    </div>
}`,...u.parameters?.docs?.source},description:{story:"浅色样式的不同大小",...u.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '自定义颜色',
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  }}>
      <Tag customColor={{
      bg: '#ff6b6b',
      text: '#fff',
      border: '#ff6b6b'
    }}>自定义红色</Tag>
      <Tag customColor={{
      bg: '#4ecdc4',
      text: '#fff',
      border: '#4ecdc4'
    }}>自定义青色</Tag>
      <Tag customColor={{
      bg: '#ffe66d',
      text: '#333',
      border: '#ffd700'
    }}>自定义黄色</Tag>
      <Tag customColor={{
      bg: '#c7ceea',
      text: '#333',
      border: '#b0a7db'
    }}>自定义紫色</Tag>
      <Tag icon={<Check width={14} height={14} />} customColor={{
      bg: '#95e1d3',
      text: '#333',
      border: '#76cfc0'
    }}>
        带图标自定义
      </Tag>
    </div>
}`,...y.parameters?.docs?.source},description:{story:`自定义颜色
通过 customColor 属性可以完全自定义标签的背景色、文字色和边框色`,...y.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '自定义颜色可关闭',
  render: () => {
    const [visible, setVisible] = React.useState(true);
    if (!visible) {
      return <button onClick={() => setVisible(true)} style={{
        padding: '4px 12px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
          显示标签
        </button>;
    }
    return <Tag closable onClose={() => setVisible(false)} customColor={{
      bg: '#667eea',
      text: '#fff',
      border: '#667eea'
    }}>
        自定义可关闭标签
      </Tag>;
  }
}`,...h.parameters?.docs?.source},description:{story:"自定义颜色 + 可关闭",...h.parameters?.docs?.description}}};const J=["Default","Types","Variants","Sizes","Closable","WithIcon","Disabled","Combined","OutlineSizes","LightSizes","CustomColor","CustomColorClosable"];export{p as Closable,m as Combined,y as CustomColor,h as CustomColorClosable,l as Default,g as Disabled,u as LightSizes,x as OutlineSizes,d as Sizes,n as Types,o as Variants,c as WithIcon,J as __namedExportsOrder,G as default};
