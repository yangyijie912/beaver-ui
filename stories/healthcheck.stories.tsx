import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Health/Check',
};

export default meta;

type Story = StoryObj;

export const OK: Story = {
  name: '正常',
  render: () => <div>Storybook health check: OK</div>,
};
