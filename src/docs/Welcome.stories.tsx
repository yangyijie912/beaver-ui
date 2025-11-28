import React from 'react';
import type { Meta } from '@storybook/react';

const meta: Meta = {
  title: '欢迎',
};

export default meta;

export const Welcome = () => (
  <div style={{ padding: 24, fontFamily: 'Inter, Arial, sans-serif' }}>
    <h1>欢迎使用 Beaver UI</h1>
    <p>这是组件展示页（Storybook），一个简易的个人组件库。</p>
    <h2>使用说明</h2>
  </div>
);
