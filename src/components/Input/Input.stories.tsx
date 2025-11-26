import React from 'react';
import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
};

export const Default = (args: any) => <Input {...args} />;
Default.args = { placeholder: 'Type here' };

export const WithValue = (args: any) => <Input {...args} />;
WithValue.args = { defaultValue: 'Hello' };

export const Disabled = (args: any) => <Input {...args} />;
Disabled.args = { placeholder: 'Disabled', disabled: true };

export const Error = (args: any) => <Input {...args} />;
Error.args = { placeholder: 'Error', validation: 'error' };
