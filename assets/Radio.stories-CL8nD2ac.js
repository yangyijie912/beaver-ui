import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as i,r as A}from"./iframe-DVSZfAXH.js";import"./preload-helper-PPVm8Dsz.js";const k=i.createContext(null),d=i.forwardRef(({name:o,value:r,defaultValue:l,disabled:n,vertical:V,onChange:t,children:E,className:s},y)=>{const[u,c]=i.useState(r!==void 0?r:l??null);i.useEffect(()=>{r!==void 0&&c(r)},[r]);const B=(b,v)=>{r===void 0&&c(b),t?.(b,v)},p=A.useMemo(()=>({name:o,value:u,disabled:n,onChange:B}),[o,u,n]),m=["beaver-radio-group",s,V?"beaver-radio-group--vertical":""].filter(Boolean).join(" ");return e.jsx(k.Provider,{value:p,children:e.jsx("div",{role:"radiogroup",className:m,ref:y,children:E})})});d.displayName="RadioGroup";d.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{name:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"受控选中值"},defaultValue:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"非受控初始选中值"},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用所有子单选项"},vertical:{required:!1,tsType:{name:"boolean"},description:"垂直排列"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number, event?: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"},{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"选中值变化时的回调"}}};const a=i.forwardRef(({label:o,className:r,inputClassName:l,disabled:n,onChange:V,...t},E)=>{const s=A.useContext(k),y=l||"",u=["beaver-radio-wrapper",r,n??s?.disabled?"beaver-radio-wrapper--disabled":""].filter(Boolean).join(" "),c=["beaver-radio",y,n??s?.disabled?"beaver-radio--disabled":""].filter(Boolean).join(" ").trim(),B=t.name??s?.name,p=t.checked,m=p!==void 0,b=!m&&s&&t.value!==void 0?String(s.value)===String(t.value):void 0,v=m?p:b,q=w=>{if(V?.(w),s?.onChange){const T=t.value;T!==void 0&&s.onChange(T,w)}},I={ref:E,type:"radio",className:"beaver-radio-input",disabled:n??s?.disabled,name:B,onChange:q,...v!==void 0?{checked:v}:{},...t};return e.jsxs("label",{className:u,"aria-disabled":n??s?.disabled,children:[e.jsx("input",{...I}),e.jsx("span",{className:c,"aria-hidden":"true"}),o?e.jsx("span",{children:o}):null]})});a.displayName="Radio";a.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"标签文本，可以是其它ReactNode"},inputClassName:{required:!1,tsType:{name:"string"},description:"如果需要给 input 本身加额外 class，请使用该属性"}}};const M={title:"Components/Radio",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`Radio 组件
- 使用场景：在一组选项中进行单选
- 支持与 RadioGroup 组件配合使用，管理一组单选按钮
- 支持禁用状态
- 支持自定义标签内容`}}}},g={name:"默认",args:{}},R={name:"选中",args:{defaultChecked:!0}},C={name:"带标签",args:{label:"Option A"}},x={name:"禁用",args:{disabled:!0,label:"Option (disabled)"}},h={name:"输入类名",args:{inputClassName:"custom-radio",label:"Custom input class"}},f={name:"分组（非受控）",render:()=>e.jsxs(d,{defaultValue:"b",children:[e.jsx(a,{value:"a",label:"Option A"}),e.jsx(a,{value:"b",label:"Option B"}),e.jsx(a,{value:"c",label:"Option C"})]})},j={name:"分组（受控）",render:()=>{const o=()=>{const[r,l]=i.useState("a");return e.jsxs(d,{value:r,onChange:n=>l(n),children:[e.jsx(a,{value:"a",label:`A (selected: ${r})`}),e.jsx(a,{value:"b",label:"B"}),e.jsx(a,{value:"c",label:"C"})]})};return e.jsx(o,{})}},G={name:"分组（禁用）",render:()=>e.jsxs(d,{defaultValue:"a",disabled:!0,children:[e.jsx(a,{value:"a",label:"Option A"}),e.jsx(a,{value:"b",label:"Option B"})]})},O={name:"基于 name",render:()=>e.jsxs("div",{children:[e.jsx(a,{name:"plain",value:"1",label:"One"}),e.jsx(a,{name:"plain",value:"2",label:"Two"})]})},S={name:"分组（垂直）",render:()=>e.jsxs(d,{defaultValue:"a",vertical:!0,children:[e.jsx(a,{value:"a",label:"Option A"}),e.jsx(a,{value:"b",label:"Option B"}),e.jsx(a,{value:"c",label:"Option C"})]})},N={name:"分组（垂直受控）",render:()=>{const o=()=>{const[r,l]=i.useState("b");return e.jsxs(d,{value:r,onChange:n=>l(n),vertical:!0,children:[e.jsx(a,{value:"a",label:"A"}),e.jsx(a,{value:"b",label:`B (selected: ${r})`}),e.jsx(a,{value:"c",label:"C"})]})};return e.jsx(o,{})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '默认',
  args: {}
}`,...g.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: '选中',
  args: {
    defaultChecked: true
  }
}`,...R.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '带标签',
  args: {
    label: 'Option A'
  }
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '禁用',
  args: {
    disabled: true,
    label: 'Option (disabled)'
  }
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '输入类名',
  args: {
    inputClassName: 'custom-radio',
    label: 'Custom input class'
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: '分组（非受控）',
  render: () => <RadioGroup defaultValue="b">
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
      <Radio value="c" label="Option C" />
    </RadioGroup>
}`,...f.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: '分组（受控）',
  render: () => {
    const Example: React.FC = () => {
      const [val, setVal] = React.useState<string | number>('a');
      return <RadioGroup value={val} onChange={v => setVal(v)}>
          <Radio value="a" label={\`A (selected: \${val})\`} />
          <Radio value="b" label="B" />
          <Radio value="c" label="C" />
        </RadioGroup>;
    };
    return <Example />;
  }
}`,...j.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: '分组（禁用）',
  render: () => <RadioGroup defaultValue="a" disabled>
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
    </RadioGroup>
}`,...G.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: '基于 name',
  render: () => <div>
      <Radio name="plain" value="1" label="One" />
      <Radio name="plain" value="2" label="Two" />
    </div>
}`,...O.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '分组（垂直）',
  render: () => <RadioGroup defaultValue="a" vertical>
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
      <Radio value="c" label="Option C" />
    </RadioGroup>
}`,...S.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: '分组（垂直受控）',
  render: () => {
    const Example: React.FC = () => {
      const [val, setVal] = React.useState<string | number>('b');
      return <RadioGroup value={val} onChange={v => setVal(v)} vertical>
          <Radio value="a" label="A" />
          <Radio value="b" label={\`B (selected: \${val})\`} />
          <Radio value="c" label="C" />
        </RadioGroup>;
    };
    return <Example />;
  }
}`,...N.parameters?.docs?.source}}};const $=["Default","Checked","WithLabel","Disabled","InputClassName","GroupUncontrolled","GroupControlled","GroupDisabled","NameBased","GroupVertical","GroupVerticalControlled"];export{R as Checked,g as Default,x as Disabled,j as GroupControlled,G as GroupDisabled,f as GroupUncontrolled,S as GroupVertical,N as GroupVerticalControlled,h as InputClassName,O as NameBased,C as WithLabel,$ as __namedExportsOrder,M as default};
