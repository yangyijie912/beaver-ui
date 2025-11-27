import React, { useState } from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};

export const Default = {
  args: {},
};

export const Checked = {
  args: { defaultChecked: true },
};

export const WithLabel = {
  args: { label: 'Accept terms' },
};

export const Indeterminate = {
  args: { indeterminate: true },
};

export const IndeterminateInteractive = () => {
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(true);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Checkbox
        checked={checked}
        indeterminate={indeterminate}
        onChange={(e) => {
          setChecked(e.target.checked);
          // when user explicitly checks, clear indeterminate
          if (e.target.checked) setIndeterminate(false);
        }}
        label="Check all"
      />

      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={() => {
            setIndeterminate(true);
            setChecked(false);
          }}
        >
          Set Indeterminate
        </button>
        <button
          onClick={() => {
            setIndeterminate(false);
            setChecked(true);
          }}
        >
          Set Checked
        </button>
        <button
          onClick={() => {
            setIndeterminate(false);
            setChecked(false);
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export const InputClassName = {
  args: { inputClassName: 'custom-checkbox', label: 'Custom input class' },
};

export const Disabled = {
  args: { disabled: true, label: 'Accept terms' },
};
