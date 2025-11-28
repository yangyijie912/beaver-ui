// Storybook React 入口点的本地备用类型定义
// 这提供了最小的类型声明以满足编辑器中的 TypeScript 要求
// 当包中提供适当的类型时，可以将其删除
declare module '@storybook/react' {
  import type * as React from 'react';

  export type Args = Record<string, any>;

  export type Meta<T = any> = {
    title?: string;
    component?: React.ComponentType<any> | string;
    argTypes?: Record<string, any>;
    parameters?: Record<string, any>;
  } & Record<string, any>;

  export type StoryContext<TArgs = Args> = {
    args: TArgs;
    initialArgs: Partial<TArgs>;
    // 避免 undefined 类型
    canvasElement: HTMLElement;
    loaded?: any;
    [key: string]: any;
  };

  export type PlayFunction<TArgs = Args> = (context: StoryContext<TArgs>) => Promise<void> | void;

  export type StoryObj<T = any> = {
    // 使 args 具有宽松的类型，以避免在许多 CSF 用法中严格映射到 `typeof meta`
    args?: Record<string, any>;
    play?: PlayFunction<any>;
  } & Record<string, any>;

  export type StoryFn<T = any> = (args: T) => React.ReactElement | null;

  export { React };
  export default {} as any;
}

// 用于此项目的 Vite 特定入口的声明
declare module '@storybook/react-vite' {
  import type { Meta, StoryObj, PlayFunction } from '@storybook/react';

  export type Preview = {
    parameters?: Record<string, any>;
    decorators?: Array<(Story: any) => any>;
    globalTypes?: Record<string, any>;
  } & Record<string, any>;

  // 设置项目级注释（装饰器、参数等）
  export function setProjectAnnotations(annotations: any | any[]): void;

  // 用于 .storybook/main.ts 的 StorybookConfig 类型
  export type StorybookConfig = {
    stories?: Array<string> | Record<string, any>[];
    addons?: Array<string | Record<string, any>>;
    framework?: { name?: string; options?: Record<string, any> } & Record<string, any>;
    [key: string]: any;
  };

  export { StorybookConfig };

  export { Meta, StoryObj, PlayFunction };

  export default {} as any;
}
