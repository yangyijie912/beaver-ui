import React from 'react';
import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
};

export const Default = {
  args: { placeholder: 'Type here' },
};

export const WithValue = {
  args: { defaultValue: 'Hello' },
};

export const Disabled = {
  args: { placeholder: 'Disabled', disabled: true },
};

export const Error = {
  args: { placeholder: 'Error', validation: 'error' },
};

export const Textarea = {
  args: { textarea: true, placeholder: 'Type here...' },
};
