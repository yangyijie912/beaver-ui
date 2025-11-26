import React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};

export const Default = (args: any) => <Checkbox {...args} />;
Default.args = {};

export const Checked = (args: any) => <Checkbox {...args} />;
Checked.args = { defaultChecked: true };

export const WithLabel = (args: any) => <Checkbox {...args} />;
WithLabel.args = { label: 'Accept terms' };

export const Indeterminate = (args: any) => <Checkbox {...args} />;
Indeterminate.args = { indeterminate: true };
