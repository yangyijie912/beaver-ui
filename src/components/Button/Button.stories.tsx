import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Primary = {
  args: { children: 'Primary', variant: 'primary' },
};

export const Ghost = {
  args: { children: 'Ghost', variant: 'ghost' },
};

export const Disabled = {
  args: { children: 'Disabled', disabled: true },
};

export const Large = {
  args: { children: 'Large', size: 'large' },
};

export const Medium = {
  args: { children: 'Medium', size: 'medium' },
};

export const Small = {
  args: { children: 'Small', size: 'small' },
};
