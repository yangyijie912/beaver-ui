import type { Meta } from '@storybook/react';

const meta: Meta = {
  title: '欢迎',
};

export default meta;

export const Welcome = () => (
  <div style={{ padding: 24, fontFamily: 'Inter, Arial, sans-serif' }}>
    <h1>欢迎使用 Beaver UI</h1>
    <p>一个简易的React组件库，使用Storybook生成文档和演示。</p>
    <h2>使用说明</h2>
    <section>
      <p>可以在相关组件的文件中查看UI、具体用法和代码示例。</p>
    </section>
  </div>
);
