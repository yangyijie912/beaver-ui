import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};
export default config;

export async function viteFinal(config: any) {
  const { vanillaExtractPlugin } = await import('@vanilla-extract/vite-plugin');
  config.plugins = config.plugins || [];
  // Avoid adding the plugin repeatedly (which would change the vite config on every reload)
  const hasVanilla = config.plugins.some(
    (p: any) =>
      p && (p.name === 'vanilla-extract' || p.name === 'vanilla-extract-plugin' || p.name?.includes?.('vanilla'))
  );
  if (!hasVanilla) {
    config.plugins.push(vanillaExtractPlugin());
  }
  // Ensure React uses development build in Storybook preview (prevents
  // "React is running in production mode" runtime errors when NODE_ENV
  // is incorrectly set to production).
  config.define = config.define || {};
  config.define['process.env.NODE_ENV'] = JSON.stringify('development');
  return config;
}
