import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./DatePicker-crz7Sqft.js";import{r as n}from"./iframe-CIZpvQ1U.js";import"./Form-C4Rfb4Ly.js";import"./index-B1Xph6y5.js";import"./index-DlnrNmRV.js";import"./Input-C8SVgGJd.js";import"./useMenuPosition-TViZUNcH.js";import"./floating-ui.dom-BnXNKGks.js";import"./ArrowRight-BvBKt8CZ.js";import"./Button-C3h7FaaH.js";import"./preload-helper-PPVm8Dsz.js";const G={title:"表单（Form）/DatePicker",component:a,tags:["autodocs"],decorators:[t=>e.jsx("div",{style:{padding:"20px",display:"flex",gap:"20px",flexWrap:"wrap"},children:e.jsx(t,{})})],parameters:{docs:{description:{component:`DatePicker 日期选择器组件

- 使用场景：用户输入或选择日期，支持单选和范围选择
- 支持多种日期格式
- 支持禁用特定日期
- 支持时间选择（可选）
- 支持键盘快捷键
- 支持日期范围选择`}}}},i={name:"默认",args:{placeholder:"请选择日期"}},d={name:"预设日期",args:{defaultValue:new Date("2024-01-15"),placeholder:"请选择日期"}},C={name:"不同尺寸",render:()=>e.jsxs("div",{style:{display:"flex",gap:"20px",flexDirection:"column"},children:[e.jsx(a,{size:"small",placeholder:"小尺寸"}),e.jsx(a,{size:"medium",placeholder:"中等尺寸"}),e.jsx(a,{size:"large",placeholder:"大尺寸"})]})},c={name:"禁用",args:{disabled:!0,placeholder:"已禁用",defaultValue:new Date("2024-01-15")}},p={name:"只读",args:{readOnly:!0,defaultValue:new Date("2024-01-15"),placeholder:"只读模式"}},m={name:"不显示清除按钮",args:{defaultValue:new Date("2024-01-15"),allowClear:!1,placeholder:"不可清除"}},h={name:"受控组件",render:()=>{const[t,r]=n.useState(null);return e.jsxs("div",{children:[e.jsx(a,{value:t,onChange:r,placeholder:"选择日期"}),e.jsxs("p",{style:{marginTop:"10px"},children:["选中日期: ",t?t.toLocaleDateString("zh-CN"):"未选择"]})]})}},g={name:"不同日期格式",render:()=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{marginBottom:"10px"},children:[e.jsx("label",{children:"YYYY-MM-DD"}),e.jsx(a,{format:"YYYY-MM-DD",placeholder:"2024-01-15"})]}),e.jsxs("div",{style:{marginBottom:"10px"},children:[e.jsx("label",{children:"DD/MM/YYYY"}),e.jsx(a,{format:"DD/MM/YYYY",placeholder:"15/01/2024"})]}),e.jsxs("div",{style:{marginBottom:"10px"},children:[e.jsx("label",{children:"MM/DD/YYYY"}),e.jsx(a,{format:"MM/DD/YYYY",placeholder:"01/15/2024"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"YYYY/MM/DD"}),e.jsx(a,{format:"YYYY/MM/DD",placeholder:"2024/01/15"})]})]})},D={name:"自定义宽度",render:()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginBottom:"10px"},children:e.jsx(a,{width:200,placeholder:"宽度 200px"})}),e.jsx("div",{style:{marginBottom:"10px"},children:e.jsx(a,{width:"50%",placeholder:"宽度 50%"})}),e.jsx("div",{children:e.jsx(a,{width:"100%",placeholder:"宽度 100%"})})]})},u={name:"禁用特定日期",args:{placeholder:"已禁用周末",disabledDate:t=>{const r=t.getDay();return r===0||r===6}}},x={name:"只能选择今天及以后",args:{placeholder:"禁用过去日期",disabledDate:t=>{const r=new Date;return r.setHours(0,0,0,0),t<r}}},y={name:"只能选择今天及以前",args:{placeholder:"禁用未来日期",disabledDate:t=>{const r=new Date;return r.setHours(23,59,59,999),t>r}}},v={name:"禁用指定日期范围",args:{placeholder:"禁用2025年11月10日至20日",disabledDate:t=>{const r=new Date("2025-11-10"),o=new Date("2025-11-20");return t>=r&&t<=o}}},Y={name:"日期时间范围选择",render:()=>{const[t,r]=n.useState(null);return e.jsxs("div",{children:[e.jsx(a,{picker:"datetime",range:!0,valueRange:t,onRangeChange:r,placeholder:"选择日期时间范围",timeFormat:"24h",width:400}),e.jsx("p",{style:{marginTop:"10px"},children:t?`选中范围: ${t.startDate.toLocaleDateString("zh-CN")} ${t.startDate.toLocaleTimeString("zh-CN")} ~ ${t.endDate.toLocaleDateString("zh-CN")} ${t.endDate.toLocaleTimeString("zh-CN")}`:"未选择"})]})}},S={name:"8种模式组合演示",render:()=>{const[t,r]=n.useState(null),[o,M]=n.useState(null),[j,w]=n.useState(null),[s,k]=n.useState(null),[z,b]=n.useState(null),[R,T]=n.useState(null),[f,B]=n.useState(null),[l,N]=n.useState(null);return e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"30px"},children:[e.jsxs("div",{children:[e.jsx("h2",{style:{borderBottom:"2px solid #0066cc",paddingBottom:"10px",color:"#0066cc"},children:"单选模式 (默认)"}),e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx("h4",{children:"年份选择"}),e.jsx(a,{picker:"year",value:t,onChange:r,placeholder:"选择年份",width:"100%"}),t&&e.jsxs("p",{style:{color:"#666",fontSize:"12px"},children:["✓ ",t.getFullYear()]})]}),e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx("h4",{children:"月份选择"}),e.jsx(a,{picker:"month",value:j,onChange:w,placeholder:"选择月份",width:"100%"}),j&&e.jsxs("p",{style:{color:"#666",fontSize:"12px"},children:["✓ ",j.getFullYear(),"年",j.getMonth()+1,"月"]})]}),e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx("h4",{children:"日期选择"}),e.jsx(a,{picker:"date",value:z,onChange:b,placeholder:"选择日期",width:"100%"}),z&&e.jsxs("p",{style:{color:"#666",fontSize:"12px"},children:["✓ ",z.toLocaleDateString("zh-CN")]})]}),e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx("h4",{children:"日期+时间选择"}),e.jsx(a,{picker:"datetime",value:f,onChange:B,placeholder:"选择日期和时间",width:"100%",timeFormat:"24h"}),f&&e.jsxs("p",{style:{color:"#666",fontSize:"12px"},children:["✓ ",f.toLocaleDateString("zh-CN")," ",f.toLocaleTimeString("zh-CN")]})]})]}),e.jsxs("div",{children:[e.jsx("h2",{style:{borderBottom:"2px solid #ff6600",paddingBottom:"10px",color:"#ff6600"},children:"范围模式 (range)"}),e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx("h4",{children:"年份范围选择"}),e.jsx(a,{picker:"year",range:!0,valueRange:o,onRangeChange:M,placeholder:"选择年份范围",width:"100%"}),o&&e.jsxs("p",{style:{color:"#666",fontSize:"12px"},children:["✓ ",o.startDate.getFullYear()," ~ ",o.endDate.getFullYear()]})]}),e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx("h4",{children:"月份范围选择"}),e.jsx(a,{picker:"month",range:!0,valueRange:s,onRangeChange:k,placeholder:"选择月份范围",width:"100%"}),s&&e.jsxs("p",{style:{color:"#666",fontSize:"12px"},children:["✓ ",s.startDate.getFullYear(),"年",s.startDate.getMonth()+1,"月 ~"," ",s.endDate.getFullYear(),"年",s.endDate.getMonth()+1,"月"]})]}),e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx("h4",{children:"日期范围选择"}),e.jsx(a,{picker:"date",range:!0,valueRange:R,onRangeChange:T,placeholder:"选择日期范围",width:"100%"}),R&&e.jsxs("p",{style:{color:"#666",fontSize:"12px"},children:["✓ ",R.startDate.toLocaleDateString("zh-CN")," ~ ",R.endDate.toLocaleDateString("zh-CN")]})]}),e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx("h4",{children:"日期+时间范围选择"}),e.jsx(a,{picker:"datetime",range:!0,valueRange:l,onRangeChange:N,placeholder:"选择日期时间范围",width:"100%",timeFormat:"24h"}),l&&e.jsxs("p",{style:{color:"#666",fontSize:"12px"},children:["✓ ",l.startDate.toLocaleDateString("zh-CN")," ",l.startDate.toLocaleTimeString("zh-CN")," ~"," ",l.endDate.toLocaleDateString("zh-CN")," ",l.endDate.toLocaleTimeString("zh-CN")]})]})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: '默认',
  args: {
    placeholder: '请选择日期'
  }
}`,...i.parameters?.docs?.source},description:{story:"基础使用：单选日期",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '预设日期',
  args: {
    defaultValue: new Date('2024-01-15'),
    placeholder: '请选择日期'
  }
}`,...d.parameters?.docs?.source},description:{story:"预设日期",...d.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '不同尺寸',
  render: () => <div style={{
    display: 'flex',
    gap: '20px',
    flexDirection: 'column'
  }}>
      <DatePicker size="small" placeholder="小尺寸" />
      <DatePicker size="medium" placeholder="中等尺寸" />
      <DatePicker size="large" placeholder="大尺寸" />
    </div>
}`,...C.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: '禁用',
  args: {
    disabled: true,
    placeholder: '已禁用',
    defaultValue: new Date('2024-01-15')
  }
}`,...c.parameters?.docs?.source},description:{story:"禁用状态",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '只读',
  args: {
    readOnly: true,
    defaultValue: new Date('2024-01-15'),
    placeholder: '只读模式'
  }
}`,...p.parameters?.docs?.source},description:{story:"只读模式",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '不显示清除按钮',
  args: {
    defaultValue: new Date('2024-01-15'),
    allowClear: false,
    placeholder: '不可清除'
  }
}`,...m.parameters?.docs?.source},description:{story:"不显示清除按钮",...m.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '受控组件',
  render: () => {
    const [date, setDate] = useState<Date | null>(null);
    return <div>
        <DatePicker value={date} onChange={setDate} placeholder="选择日期" />
        <p style={{
        marginTop: '10px'
      }}>选中日期: {date ? date.toLocaleDateString('zh-CN') : '未选择'}</p>
      </div>;
  }
}`,...h.parameters?.docs?.source},description:{story:"受控组件",...h.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '不同日期格式',
  render: () => <>
      <div style={{
      marginBottom: '10px'
    }}>
        <label>YYYY-MM-DD</label>
        <DatePicker format="YYYY-MM-DD" placeholder="2024-01-15" />
      </div>
      <div style={{
      marginBottom: '10px'
    }}>
        <label>DD/MM/YYYY</label>
        <DatePicker format="DD/MM/YYYY" placeholder="15/01/2024" />
      </div>
      <div style={{
      marginBottom: '10px'
    }}>
        <label>MM/DD/YYYY</label>
        <DatePicker format="MM/DD/YYYY" placeholder="01/15/2024" />
      </div>
      <div>
        <label>YYYY/MM/DD</label>
        <DatePicker format="YYYY/MM/DD" placeholder="2024/01/15" />
      </div>
    </>
}`,...g.parameters?.docs?.source},description:{story:"不同的日期格式",...g.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: '自定义宽度',
  render: () => <>
      <div style={{
      marginBottom: '10px'
    }}>
        <DatePicker width={200} placeholder="宽度 200px" />
      </div>
      <div style={{
      marginBottom: '10px'
    }}>
        <DatePicker width="50%" placeholder="宽度 50%" />
      </div>
      <div>
        <DatePicker width="100%" placeholder="宽度 100%" />
      </div>
    </>
}`,...D.parameters?.docs?.source},description:{story:"自定义宽度",...D.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '禁用特定日期',
  args: {
    placeholder: '已禁用周末',
    disabledDate: (date: Date) => {
      // 禁用周末
      const day = date.getDay();
      return day === 0 || day === 6;
    }
  }
}`,...u.parameters?.docs?.source},description:{story:"禁用特定日期",...u.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '只能选择今天及以后',
  args: {
    placeholder: '禁用过去日期',
    disabledDate: (date: Date) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return date < today;
    }
  }
}`,...x.parameters?.docs?.source},description:{story:"禁用过去日期",...x.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '只能选择今天及以前',
  args: {
    placeholder: '禁用未来日期',
    disabledDate: (date: Date) => {
      const today = new Date();
      today.setHours(23, 59, 59, 999);
      return date > today;
    }
  }
}`,...y.parameters?.docs?.source},description:{story:"禁用未来日期",...y.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '禁用指定日期范围',
  args: {
    placeholder: '禁用2025年11月10日至20日',
    disabledDate: (date: Date) => {
      const startDisable = new Date('2025-11-10');
      const endDisable = new Date('2025-11-20');
      return date >= startDisable && date <= endDisable;
    }
  }
}`,...v.parameters?.docs?.source},description:{story:"禁用日期范围",...v.parameters?.docs?.description}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: '日期时间范围选择',
  render: () => {
    const [range, setRange] = useState<{
      startDate: Date;
      endDate: Date;
    } | null>(null);
    return <div>
        <DatePicker picker="datetime" range={true} valueRange={range} onRangeChange={setRange} placeholder="选择日期时间范围" timeFormat="24h" width={400} />
        <p style={{
        marginTop: '10px'
      }}>
          {range ? \`选中范围: \${range.startDate.toLocaleDateString('zh-CN')} \${range.startDate.toLocaleTimeString('zh-CN')} ~ \${range.endDate.toLocaleDateString('zh-CN')} \${range.endDate.toLocaleTimeString('zh-CN')}\` : '未选择'}
        </p>
      </div>;
  }
}`,...Y.parameters?.docs?.source},description:{story:"日期 + 时间选择范围",...Y.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '8种模式组合演示',
  render: () => {
    const [year, setYear] = useState<Date | null>(null);
    const [yearRange, setYearRange] = useState<{
      startDate: Date;
      endDate: Date;
    } | null>(null);
    const [month, setMonth] = useState<Date | null>(null);
    const [monthRange, setMonthRange] = useState<{
      startDate: Date;
      endDate: Date;
    } | null>(null);
    const [date, setDate] = useState<Date | null>(null);
    const [dateRange, setDateRange] = useState<{
      startDate: Date;
      endDate: Date;
    } | null>(null);
    const [dateTime, setDateTime] = useState<Date | null>(null);
    const [dateTimeRange, setDateTimeRange] = useState<{
      startDate: Date;
      endDate: Date;
    } | null>(null);
    return <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '30px'
    }}>
        {/* 第一列：单选模式 */}
        <div>
          <h2 style={{
          borderBottom: '2px solid #0066cc',
          paddingBottom: '10px',
          color: '#0066cc'
        }}>
            单选模式 (默认)
          </h2>

          <div style={{
          marginBottom: '20px'
        }}>
            <h4>年份选择</h4>
            <DatePicker picker="year" value={year} onChange={setYear} placeholder="选择年份" width="100%" />
            {year && <p style={{
            color: '#666',
            fontSize: '12px'
          }}>✓ {year.getFullYear()}</p>}
          </div>

          <div style={{
          marginBottom: '20px'
        }}>
            <h4>月份选择</h4>
            <DatePicker picker="month" value={month} onChange={setMonth} placeholder="选择月份" width="100%" />
            {month && <p style={{
            color: '#666',
            fontSize: '12px'
          }}>
                ✓ {month.getFullYear()}年{month.getMonth() + 1}月
              </p>}
          </div>

          <div style={{
          marginBottom: '20px'
        }}>
            <h4>日期选择</h4>
            <DatePicker picker="date" value={date} onChange={setDate} placeholder="选择日期" width="100%" />
            {date && <p style={{
            color: '#666',
            fontSize: '12px'
          }}>✓ {date.toLocaleDateString('zh-CN')}</p>}
          </div>

          <div style={{
          marginBottom: '20px'
        }}>
            <h4>日期+时间选择</h4>
            <DatePicker picker="datetime" value={dateTime} onChange={setDateTime} placeholder="选择日期和时间" width="100%" timeFormat="24h" />
            {dateTime && <p style={{
            color: '#666',
            fontSize: '12px'
          }}>
                ✓ {dateTime.toLocaleDateString('zh-CN')} {dateTime.toLocaleTimeString('zh-CN')}
              </p>}
          </div>
        </div>

        {/* 第二列：范围选择模式 */}
        <div>
          <h2 style={{
          borderBottom: '2px solid #ff6600',
          paddingBottom: '10px',
          color: '#ff6600'
        }}>
            范围模式 (range)
          </h2>

          <div style={{
          marginBottom: '20px'
        }}>
            <h4>年份范围选择</h4>
            <DatePicker picker="year" range valueRange={yearRange} onRangeChange={setYearRange} placeholder="选择年份范围" width="100%" />
            {yearRange && <p style={{
            color: '#666',
            fontSize: '12px'
          }}>
                ✓ {yearRange.startDate.getFullYear()} ~ {yearRange.endDate.getFullYear()}
              </p>}
          </div>

          <div style={{
          marginBottom: '20px'
        }}>
            <h4>月份范围选择</h4>
            <DatePicker picker="month" range valueRange={monthRange} onRangeChange={setMonthRange} placeholder="选择月份范围" width="100%" />
            {monthRange && <p style={{
            color: '#666',
            fontSize: '12px'
          }}>
                ✓ {monthRange.startDate.getFullYear()}年{monthRange.startDate.getMonth() + 1}月 ~{' '}
                {monthRange.endDate.getFullYear()}年{monthRange.endDate.getMonth() + 1}月
              </p>}
          </div>

          <div style={{
          marginBottom: '20px'
        }}>
            <h4>日期范围选择</h4>
            <DatePicker picker="date" range valueRange={dateRange} onRangeChange={setDateRange} placeholder="选择日期范围" width="100%" />
            {dateRange && <p style={{
            color: '#666',
            fontSize: '12px'
          }}>
                ✓ {dateRange.startDate.toLocaleDateString('zh-CN')} ~ {dateRange.endDate.toLocaleDateString('zh-CN')}
              </p>}
          </div>

          <div style={{
          marginBottom: '20px'
        }}>
            <h4>日期+时间范围选择</h4>
            <DatePicker picker="datetime" range valueRange={dateTimeRange} onRangeChange={setDateTimeRange} placeholder="选择日期时间范围" width="100%" timeFormat="24h" />
            {dateTimeRange && <p style={{
            color: '#666',
            fontSize: '12px'
          }}>
                ✓ {dateTimeRange.startDate.toLocaleDateString('zh-CN')}{' '}
                {dateTimeRange.startDate.toLocaleTimeString('zh-CN')} ~{' '}
                {dateTimeRange.endDate.toLocaleDateString('zh-CN')} {dateTimeRange.endDate.toLocaleTimeString('zh-CN')}
              </p>}
          </div>
        </div>
      </div>;
  }
}`,...S.parameters?.docs?.source},description:{story:`8 种不同的组合
picker: year | month | date | datetime
range: true | false`,...S.parameters?.docs?.description}}};const I=["Default","WithDefaultValue","Sizes","Disabled","ReadOnly","NoClear","Controlled","Formats","CustomWidth","DisabledDates","NoFutureDates","NoPastDates","DisabledDateRange","DateTimeRange","AllEightCases"];export{S as AllEightCases,h as Controlled,D as CustomWidth,Y as DateTimeRange,i as Default,c as Disabled,v as DisabledDateRange,u as DisabledDates,g as Formats,m as NoClear,x as NoFutureDates,y as NoPastDates,p as ReadOnly,C as Sizes,d as WithDefaultValue,I as __namedExportsOrder,G as default};
