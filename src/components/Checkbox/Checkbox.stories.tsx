import React from 'react';
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

export const InputClassName = {
  args: { inputClassName: 'custom-checkbox', label: 'Custom input class' },
};

export const Disabled = {
  args: { disabled: true, label: 'Accept terms' },
};
