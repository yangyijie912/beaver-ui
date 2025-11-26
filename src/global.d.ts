// 项目级的模块声明，减少编辑器对第三方 d.ts/非 ts 模块的噪音
/// <reference types="react" />
/// <reference types="react-dom" />

declare module '*.css.ts';
declare module '*.css';
declare module '@storybook/*';
declare module 'storybook/*';
declare module 'storybook/test';
declare module 'react/jsx-runtime';
export {};

// 如果编辑器仍无法找到 JSX 类型，提供一个宽松的后备声明
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
