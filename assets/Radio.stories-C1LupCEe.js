import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as i,r as A}from"./iframe-poeLuani.js";import"./preload-helper-PPVm8Dsz.js";const k=i.createContext(null),d=({name:o,value:r,defaultValue:l,disabled:s,vertical:N,onChange:t,children:S,className:n})=>{const[u,p]=i.useState(r!==void 0?r:l??null);i.useEffect(()=>{r!==void 0&&p(r)},[r]);const V=(c,E)=>{r===void 0&&p(c),t?.(c,E)},y=A.useMemo(()=>({name:o,value:u,disabled:s,onChange:V}),[o,u,s]),m=["beaver-radio-group",n,N?"beaver-radio-group--vertical":""].filter(Boolean).join(" ");return e.jsx(k.Provider,{value:y,children:e.jsx("div",{role:"radiogroup",className:m,children:S})})};d.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{name:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"受控选中值"},defaultValue:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"非受控初始选中值"},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用所有子单选项"},vertical:{required:!1,tsType:{name:"boolean"},description:"垂直排列"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number, event?: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"},{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"选中值变化时的回调"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const a=i.forwardRef(({label:o,className:r,inputClassName:l,disabled:s,onChange:N,...t},S)=>{const n=A.useContext(k),u=l||"",p=["beaver-radio-wrapper",r,s??n?.disabled?"beaver-radio-wrapper--disabled":""].filter(Boolean).join(" "),V=["beaver-radio",u,s??n?.disabled?"beaver-radio--disabled":""].filter(Boolean).join(" ").trim(),y=t.name??n?.name,m=t.checked,c=m!==void 0,E=!c&&n&&t.value!==void 0?String(n.value)===String(t.value):void 0,B=c?m:E,q=T=>{if(N?.(T),n?.onChange){const w=t.value;w!==void 0&&n.onChange(w,T)}},I={ref:S,type:"radio",className:"beaver-radio-input",disabled:s??n?.disabled,name:y,onChange:q,...B!==void 0?{checked:B}:{},...t};return e.jsxs("label",{className:p,"aria-disabled":s??n?.disabled,children:[e.jsx("input",{...I}),e.jsx("span",{className:V,"aria-hidden":"true"}),o?e.jsx("span",{children:o}):null]})});a.displayName="Radio";a.__docgenInfo={description:`Radio 组件
- 使用场景：在一组选项中进行单选
- 支持与 RadioGroup 组件配合使用，管理一组单选按钮
- 支持禁用状态
- 支持自定义标签内容`,methods:[],displayName:"Radio",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"标签文本，可以是其它ReactNode"},inputClassName:{required:!1,tsType:{name:"string"},description:"如果需要给 input 本身加额外 class，请使用该属性"}}};const M={title:"Components/Radio",component:a,tags:["autodocs"]},b={name:"默认",args:{}},v={name:"选中",args:{defaultChecked:!0}},g={name:"带标签",args:{label:"Option A"}},R={name:"禁用",args:{disabled:!0,label:"Option (disabled)"}},C={name:"输入类名",args:{inputClassName:"custom-radio",label:"Custom input class"}},x={name:"分组（非受控）",render:()=>e.jsxs(d,{defaultValue:"b",children:[e.jsx(a,{value:"a",label:"Option A"}),e.jsx(a,{value:"b",label:"Option B"}),e.jsx(a,{value:"c",label:"Option C"})]})},h={name:"分组（受控）",render:()=>{const o=()=>{const[r,l]=i.useState("a");return e.jsxs(d,{value:r,onChange:s=>l(s),children:[e.jsx(a,{value:"a",label:`A (selected: ${r})`}),e.jsx(a,{value:"b",label:"B"}),e.jsx(a,{value:"c",label:"C"})]})};return e.jsx(o,{})}},f={name:"分组（禁用）",render:()=>e.jsxs(d,{defaultValue:"a",disabled:!0,children:[e.jsx(a,{value:"a",label:"Option A"}),e.jsx(a,{value:"b",label:"Option B"})]})},j={name:"基于 name",render:()=>e.jsxs("div",{children:[e.jsx(a,{name:"plain",value:"1",label:"One"}),e.jsx(a,{name:"plain",value:"2",label:"Two"})]})},G={name:"分组（垂直）",render:()=>e.jsxs(d,{defaultValue:"a",vertical:!0,children:[e.jsx(a,{value:"a",label:"Option A"}),e.jsx(a,{value:"b",label:"Option B"}),e.jsx(a,{value:"c",label:"Option C"})]})},O={name:"分组（垂直受控）",render:()=>{const o=()=>{const[r,l]=i.useState("b");return e.jsxs(d,{value:r,onChange:s=>l(s),vertical:!0,children:[e.jsx(a,{value:"a",label:"A"}),e.jsx(a,{value:"b",label:`B (selected: ${r})`}),e.jsx(a,{value:"c",label:"C"})]})};return e.jsx(o,{})}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '默认',
  args: {}
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '选中',
  args: {
    defaultChecked: true
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '带标签',
  args: {
    label: 'Option A'
  }
}`,...g.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: '禁用',
  args: {
    disabled: true,
    label: 'Option (disabled)'
  }
}`,...R.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '输入类名',
  args: {
    inputClassName: 'custom-radio',
    label: 'Custom input class'
  }
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '分组（非受控）',
  render: () => <RadioGroup defaultValue="b">
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
      <Radio value="c" label="Option C" />
    </RadioGroup>
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: '分组（禁用）',
  render: () => <RadioGroup defaultValue="a" disabled>
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
    </RadioGroup>
}`,...f.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: '基于 name',
  render: () => <div>
      <Radio name="plain" value="1" label="One" />
      <Radio name="plain" value="2" label="Two" />
    </div>
}`,...j.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: '分组（垂直）',
  render: () => <RadioGroup defaultValue="a" vertical>
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
      <Radio value="c" label="Option C" />
    </RadioGroup>
}`,...G.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};const $=["Default","Checked","WithLabel","Disabled","InputClassName","GroupUncontrolled","GroupControlled","GroupDisabled","NameBased","GroupVertical","GroupVerticalControlled"];export{v as Checked,b as Default,R as Disabled,h as GroupControlled,f as GroupDisabled,x as GroupUncontrolled,G as GroupVertical,O as GroupVerticalControlled,C as InputClassName,j as NameBased,g as WithLabel,$ as __namedExportsOrder,M as default};
