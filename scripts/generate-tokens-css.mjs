import fs from 'fs';
import { fileURLToPath } from 'url';

(async () => {
  try {
    console.log('开始执行：generate-tokens-css (mjs)');

    // 直接读取并解析 vars.ts 文件为 JS 对象（避免依赖 ts-node/esm）
    const varsPath = fileURLToPath(new URL('../src/tokens/vars.ts', import.meta.url));
    const varsText = fs.readFileSync(varsPath, 'utf8');
    // 移除开头的 export 声明，取等号右侧对象文本
    const match = varsText.match(/export\s+const\s+vars\s*=\s*({[\s\S]*?})\s*;/m);
    if (!match) throw new Error('无法从 vars.ts 中解析 vars');
    const objText = match[1];
    // 使用 Function 在模块作用域内求值（比 eval 更安全些）
    // eslint-disable-next-line no-new-func
    const vars = new Function(`return (${objText})`)();

    const flatten = (obj, prefix = '') => {
      const out = {};
      Object.keys(obj).forEach((key) => {
        const val = obj[key];
        const name = prefix ? `${prefix}-${key}` : key;
        if (val && typeof val === 'object') Object.assign(out, flatten(val, name));
        else out[`--beaver-${name}`] = String(val);
      });
      return out;
    };

    const flat = flatten({ beaver: vars });
    const css = `:root {\n${Object.entries(flat)
      .map(([k, v]) => `  ${k}: ${v};`)
      .join('\n')}\n}\n`;
    const outPath = fileURLToPath(new URL('../src/tokens/tokens.css', import.meta.url));
    fs.writeFileSync(outPath, css, 'utf8');
    console.log(`已生成 tokens CSS，路径：${outPath}`);
    process.exit(0);
  } catch (err) {
    console.error('generate-tokens-css (mjs) 执行失败：', err);
    process.exit(1);
  }
})();
