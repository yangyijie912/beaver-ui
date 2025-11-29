import React from 'react';
import Radio from './Radio';

export default {
  title: 'Components/Radio',
  component: Radio,
};

export const Default = {
  args: {},
};

export const Checked = {
  args: { defaultChecked: true },
};

export const WithLabel = {
  args: { label: 'Option A' },
};

export const Disabled = {
  args: { disabled: true, label: 'Option (disabled)' },
};

export const InputClassName = {
  args: { inputClassName: 'custom-radio', label: 'Custom input class' },
};
