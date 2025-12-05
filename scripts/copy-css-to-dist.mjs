import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// 使用 fileURLToPath 获取 Windows 和 POSIX 上正确的文件系统路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');
const srcDir = path.join(root, 'dist-css');
const outDir = path.join(root, 'dist');

async function run() {
  try {
    const cssPath = path.join(srcDir, 'index.css');
    // 确保 css 存在
    await fs.access(cssPath);
  } catch (err) {
    console.warn('dist-css/index.css 没有被构建步骤生成，跳过复制');
    process.exit(0);
  }

  await fs.mkdir(outDir, { recursive: true });
  await fs.copyFile(path.join(srcDir, 'index.css'), path.join(outDir, 'index.css'));
  console.log('复制 dist-css/index.css -> dist/index.css');

  // 可选：删除临时目录下的 JS 产物与 map，只保留清理行为
  try {
    const files = await fs.readdir(srcDir);
    // 删除临时目录中由 Vite 生成的所有文件
    for (const f of files) {
      try {
        await fs.unlink(path.join(srcDir, f));
      } catch (err) {
        // 记录并继续
        console.warn('删除文件失败', f, err && err.message);
      }
    }
    // 删除临时目录本身
    try {
      await fs.rm(srcDir, { recursive: true, force: true });
      console.log('已删除临时 dist-css 目录');
    } catch (err) {
      console.warn('删除临时 dist-css 目录失败:', err && err.message);
    }
  } catch (e) {
    console.warn('清理 dist-css 失败:', e && e.message);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
