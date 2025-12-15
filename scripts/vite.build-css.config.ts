import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      // 使用聚合样式入口，确保构建时会输出包含所有组件样式的单一 CSS 文件
      entry: path.resolve(__dirname, '../src/styles/index.ts'),
      name: 'beaver-ui',
      fileName: 'index',
      // 仅输出 ESM 格式，不生成 UMD
      formats: ['es'],
    },
    // 输出目录为 dist-css，区别于 tsup 的 dist 目录
    outDir: path.resolve(__dirname, '../dist-css'),
    // 不清空 dist，保持与 tsup 产物兼容（tsup 会写入 JS）
    emptyOutDir: false,
    // 将所有 CSS 合并为单一文件，便于后续发布（并保证按 module graph 顺序）
    cssCodeSplit: false,
    // 保持与 tsup 相同的外部依赖策略
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        // 将所有静态资源的 CSS 命名为 index.css（覆盖默认带 hash 的命名），
        // 只用于 CSS 提取，其他资源仍会走 assets 命名
        assetFileNames: (assetInfo) => {
          if (assetInfo && assetInfo.name && assetInfo.name.endsWith('.css')) return 'index.css';
          return 'assets/[name]-[hash][extname]';
        },
        // 如果未来需要 UMD，可在此显式指定 globals：
        // globals: { react: 'React', 'react-dom': 'ReactDOM' }
      },
    },
  },
});
