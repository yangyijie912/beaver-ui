import type { StorybookConfig } from '@storybook/react-vite';

// 开发与生产/CI 构建的区分条件
const isProdBuild =
  process.env.NODE_ENV === 'production' ||
  String(process.env.CI).toLowerCase() === 'true' ||
  String(process.env.STORYBOOK_BUILD).toLowerCase() === 'true';

const stories = isProdBuild
  ? [
      // 确保在生产构建中首先索引 Welcome/docs，便于文档重定向到欢迎页
      '../src/docs/Welcome.stories.@(js|jsx|ts|tsx)',
      '../src/docs/**/*.stories.@(js|jsx|ts|tsx)',
      '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
    ]
  : [
      // 项目根 stories（示例、health 等）
      '../stories/**/*.mdx',
      '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
      // src 下所有 story（开发时方便查看所有本地 story）
      '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    ];

const config: StorybookConfig = {
  stories,
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};

export default config;
