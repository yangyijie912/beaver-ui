import React from 'react';
import Switch from './Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
};

export const Default = {
  args: {},
};

export const Controlled = {
  render: (args: any) => {
    const [val, setVal] = React.useState(true);
    return <Switch {...args} checked={val} onChange={(c: boolean) => setVal(c)} />;
  },
};

export const Disabled = {
  args: { disabled: true },
};

export const Loading = {
  args: { loading: true },
};

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Switch size="sm" defaultChecked />
      <Switch size="md" defaultChecked />
      <Switch size="lg" defaultChecked />
    </div>
  ),
};

export const WithIconsAndText = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Switch
        defaultChecked
        checkedChildren={<span style={{ color: 'white' }}>1</span>}
        unCheckedChildren={<span style={{ color: 'white' }}>0</span>}
      />

      <Switch
        defaultChecked
        checkedChildren={<span style={{ color: 'white' }}>开启</span>}
        unCheckedChildren={<span style={{ color: 'white' }}>关闭</span>}
      />

      <Switch
        defaultChecked
        checkedChildren={<span style={{ color: 'white' }}>true</span>}
        unCheckedChildren={<span style={{ color: 'white' }}>false</span>}
      />

      <Switch
        defaultChecked={false}
        checkedChildren={
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.5 12.5l3.5 3.5L18.5 6.5"
              stroke="currentColor"
              strokeWidth={2.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
        unCheckedChildren={
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.5 6.5l11 11M17.5 6.5l-11 11"
              stroke="currentColor"
              strokeWidth={2.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />
    </div>
  ),
};
