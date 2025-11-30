import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as i,r as A}from"./iframe-tE7EJGsz.js";import"./preload-helper-PPVm8Dsz.js";const k=i.createContext(null),d=({name:o,value:r,defaultValue:l,disabled:n,vertical:N,onChange:t,children:S,className:s})=>{const[u,p]=i.useState(r!==void 0?r:l??null);i.useEffect(()=>{r!==void 0&&p(r)},[r]);const V=(c,E)=>{r===void 0&&p(c),t?.(c,E)},y=A.useMemo(()=>({name:o,value:u,disabled:n,onChange:V}),[o,u,n]),m=["beaver-radio-group",s,N?"beaver-radio-group--vertical":""].filter(Boolean).join(" ");return e.jsx(k.Provider,{value:y,children:e.jsx("div",{role:"radiogroup",className:m,children:S})})};d.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{name:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"受控选中值"},defaultValue:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"非受控初始选中值"},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用所有子单选项"},vertical:{required:!1,tsType:{name:"boolean"},description:"垂直排列"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number, event?: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"},{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"选中值变化时的回调"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const a=i.forwardRef(({label:o,className:r,inputClassName:l,disabled:n,onChange:N,...t},S)=>{const s=A.useContext(k),u=l||"",p=["beaver-radio-wrapper",r,n??s?.disabled?"beaver-radio-wrapper--disabled":""].filter(Boolean).join(" "),V=["beaver-radio",u,n??s?.disabled?"beaver-radio--disabled":""].filter(Boolean).join(" ").trim(),y=t.name??s?.name,m=t.checked,c=m!==void 0,E=!c&&s&&t.value!==void 0?String(s.value)===String(t.value):void 0,B=c?m:E,q=T=>{if(N?.(T),s?.onChange){const w=t.value;w!==void 0&&s.onChange(w,T)}},I={ref:S,type:"radio",className:"beaver-radio-input",disabled:n??s?.disabled,name:y,onChange:q,...B!==void 0?{checked:B}:{},...t};return e.jsxs("label",{className:p,"aria-disabled":n??s?.disabled,children:[e.jsx("input",{...I}),e.jsx("span",{className:V,"aria-hidden":"true"}),o?e.jsx("span",{children:o}):null]})});a.displayName="Radio";a.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"标签文本，可以是其它ReactNode"},inputClassName:{required:!1,tsType:{name:"string"},description:"如果需要给 input 本身加额外 class，请使用该属性"}}};const M={title:"Components/Radio",component:a},b={args:{}},v={args:{defaultChecked:!0}},g={args:{label:"Option A"}},R={args:{disabled:!0,label:"Option (disabled)"}},C={args:{inputClassName:"custom-radio",label:"Custom input class"}},x={render:()=>e.jsxs(d,{defaultValue:"b",children:[e.jsx(a,{value:"a",label:"Option A"}),e.jsx(a,{value:"b",label:"Option B"}),e.jsx(a,{value:"c",label:"Option C"})]})},h={render:()=>{const o=()=>{const[r,l]=i.useState("a");return e.jsxs(d,{value:r,onChange:n=>l(n),children:[e.jsx(a,{value:"a",label:`A (selected: ${r})`}),e.jsx(a,{value:"b",label:"B"}),e.jsx(a,{value:"c",label:"C"})]})};return e.jsx(o,{})}},f={render:()=>e.jsxs(d,{defaultValue:"a",disabled:!0,children:[e.jsx(a,{value:"a",label:"Option A"}),e.jsx(a,{value:"b",label:"Option B"})]})},j={render:()=>e.jsxs("div",{children:[e.jsx(a,{name:"plain",value:"1",label:"One"}),e.jsx(a,{name:"plain",value:"2",label:"Two"})]})},G={render:()=>e.jsxs(d,{defaultValue:"a",vertical:!0,children:[e.jsx(a,{value:"a",label:"Option A"}),e.jsx(a,{value:"b",label:"Option B"}),e.jsx(a,{value:"c",label:"Option C"})]})},O={render:()=>{const o=()=>{const[r,l]=i.useState("b");return e.jsxs(d,{value:r,onChange:n=>l(n),vertical:!0,children:[e.jsx(a,{value:"a",label:"A"}),e.jsx(a,{value:"b",label:`B (selected: ${r})`}),e.jsx(a,{value:"c",label:"C"})]})};return e.jsx(o,{})}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Option A'
  }
}`,...g.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Option (disabled)'
  }
}`,...R.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    inputClassName: 'custom-radio',
    label: 'Custom input class'
  }
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="b">
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
      <Radio value="c" label="Option C" />
    </RadioGroup>
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
  render: () => <RadioGroup defaultValue="a" disabled>
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
    </RadioGroup>
}`,...f.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <Radio name="plain" value="1" label="One" />
      <Radio name="plain" value="2" label="Two" />
    </div>
}`,...j.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="a" vertical>
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
      <Radio value="c" label="Option C" />
    </RadioGroup>
}`,...G.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
