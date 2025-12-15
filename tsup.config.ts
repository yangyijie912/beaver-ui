import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: true,
  minify: true,
  external: ['react', 'react-dom'],
  esbuildOptions(options) {
    // 让 esbuild 生成 metafile，以便后续分析（`scripts/build-analyze.mjs` 使用 esbuild 来生成可读报告）
    options.metafile = true;
    return options;
  },
});
