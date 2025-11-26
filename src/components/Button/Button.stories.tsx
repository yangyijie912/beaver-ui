import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Primary = (args: any) => <Button {...args} />;
Primary.args = { children: 'Primary', variant: 'primary' };

export const Ghost = (args: any) => <Button {...args} />;
Ghost.args = { children: 'Ghost', variant: 'ghost' };

export const Disabled = (args: any) => <Button {...args} />;
Disabled.args = { children: 'Disabled', disabled: true };
