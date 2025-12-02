import React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};

export const Default = {
  name: '默认',
  args: {},
};

export const Checked = {
  name: '选中',
  args: { defaultChecked: true },
};

export const WithLabel = {
  name: '带标签',
  args: { label: 'Accept terms' },
};

export const Indeterminate = {
  name: '不确定态',
  args: { indeterminate: true },
};

export const InputClassName = {
  name: '输入类名',
  args: { inputClassName: 'custom-checkbox', label: 'Custom input class' },
};

export const Disabled = {
  name: '禁用',
  args: { disabled: true, label: 'Accept terms' },
};
