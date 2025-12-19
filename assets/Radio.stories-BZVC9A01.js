import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as g}from"./iframe-BcxRHepN.js";import{R as a,a as s}from"./Radio-SFDEpW-R.js";import"./preload-helper-PPVm8Dsz.js";import"./Form-DGYaHNXf.js";const V={title:"表单（Form）/Radio",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`Radio 组件
- 使用场景：在一组选项中进行单选
- 支持与 RadioGroup 组件配合使用，管理一组单选按钮
- 支持禁用状态
- 支持自定义标签内容`}}}},o={name:"默认",args:{}},l={name:"选中",args:{defaultChecked:!0}},t={name:"带标签",args:{label:"Option A"}},n={name:"禁用",args:{disabled:!0,label:"Option (disabled)"}},u={name:"输入类名",args:{inputClassName:"custom-radio",label:"Custom input class"}},c={name:"分组（非受控）",render:()=>e.jsxs(s,{defaultValue:"b",children:[e.jsx(a,{value:"a",label:"Option A"}),e.jsx(a,{value:"b",label:"Option B"}),e.jsx(a,{value:"c",label:"Option C"})]})},d={name:"分组（受控）",render:()=>{const v=()=>{const[r,R]=g.useState("a");return e.jsxs(s,{value:r,onChange:x=>R(x),children:[e.jsx(a,{value:"a",label:`A (selected: ${r})`}),e.jsx(a,{value:"b",label:"B"}),e.jsx(a,{value:"c",label:"C"})]})};return e.jsx(v,{})}},i={name:"分组（禁用）",render:()=>e.jsxs(s,{defaultValue:"a",disabled:!0,children:[e.jsx(a,{value:"a",label:"Option A"}),e.jsx(a,{value:"b",label:"Option B"})]})},p={name:"基于 name",render:()=>e.jsxs("div",{children:[e.jsx(a,{name:"plain",value:"1",label:"One"}),e.jsx(a,{name:"plain",value:"2",label:"Two"})]})},m={name:"分组（垂直）",render:()=>e.jsxs(s,{defaultValue:"a",vertical:!0,children:[e.jsx(a,{value:"a",label:"Option A"}),e.jsx(a,{value:"b",label:"Option B"}),e.jsx(a,{value:"c",label:"Option C"})]})},b={name:"分组（垂直受控）",render:()=>{const v=()=>{const[r,R]=g.useState("b");return e.jsxs(s,{value:r,onChange:x=>R(x),vertical:!0,children:[e.jsx(a,{value:"a",label:"A"}),e.jsx(a,{value:"b",label:`B (selected: ${r})`}),e.jsx(a,{value:"c",label:"C"})]})};return e.jsx(v,{})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: '默认',
  args: {}
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: '选中',
  args: {
    defaultChecked: true
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: '带标签',
  args: {
    label: 'Option A'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: '禁用',
  args: {
    disabled: true,
    label: 'Option (disabled)'
  }
}`,...n.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '输入类名',
  args: {
    inputClassName: 'custom-radio',
    label: 'Custom input class'
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: '分组（非受控）',
  render: () => <RadioGroup defaultValue="b">
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
      <Radio value="c" label="Option C" />
    </RadioGroup>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: '分组（禁用）',
  render: () => <RadioGroup defaultValue="a" disabled>
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
    </RadioGroup>
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '基于 name',
  render: () => <div>
      <Radio name="plain" value="1" label="One" />
      <Radio name="plain" value="2" label="Two" />
    </div>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '分组（垂直）',
  render: () => <RadioGroup defaultValue="a" vertical>
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
      <Radio value="c" label="Option C" />
    </RadioGroup>
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const S=["Default","Checked","WithLabel","Disabled","InputClassName","GroupUncontrolled","GroupControlled","GroupDisabled","NameBased","GroupVertical","GroupVerticalControlled"];export{l as Checked,o as Default,n as Disabled,d as GroupControlled,i as GroupDisabled,c as GroupUncontrolled,m as GroupVertical,b as GroupVerticalControlled,u as InputClassName,p as NameBased,t as WithLabel,S as __namedExportsOrder,V as default};
