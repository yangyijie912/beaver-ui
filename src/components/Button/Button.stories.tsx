import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Primary = {
  name: '主按钮',
  args: { children: 'Primary', variant: 'primary' },
};

export const Ghost = {
  name: '幽灵',
  args: { children: 'Ghost', variant: 'ghost' },
};

export const Disabled = {
  name: '禁用',
  args: { children: 'Disabled', disabled: true },
};

export const Large = {
  name: '大',
  args: { children: 'Large', size: 'large' },
};

export const Medium = {
  name: '中',
  args: { children: 'Medium', size: 'medium' },
};

export const Small = {
  name: '小',
  args: { children: 'Small', size: 'small' },
};
