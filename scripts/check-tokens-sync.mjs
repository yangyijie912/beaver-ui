import fs from 'fs';
import { fileURLToPath } from 'url';

(async () => {
  try {
    console.log('开始执行：check-tokens-sync (mjs)');

    // 直接读取并解析 vars.ts 文件为 JS 对象（避免依赖 ts-node/esm）
    const varsPath = fileURLToPath(new URL('../src/tokens/vars.ts', import.meta.url));
    const varsText = fs.readFileSync(varsPath, 'utf8');
    const match = varsText.match(/export\s+const\s+vars\s*=\s*({[\s\S]*?})\s*;/m);
    if (!match) throw new Error('无法从 vars.ts 中解析 vars');
    const objText = match[1];

    const vars = new Function(`return (${objText})`)();

    const toKebab = (s) =>
      String(s)
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .replace(/_/g, '-')
        .toLowerCase();
    const flatten = (obj, prefix = '') => {
      const out = {};
      Object.keys(obj).forEach((key) => {
        const val = obj[key];
        // 顶层的 `components` 分组在最终变量名中不应出现（与生成脚本保持一致）
        const rawName = prefix === '' && key === 'components' ? '' : prefix ? `${prefix}-${key}` : key;
        const name = toKebab(rawName);
        if (val && typeof val === 'object') Object.assign(out, flatten(val, name));
        else out[`--beaver-${name}`] = String(val).trim();
      });
      return out;
    };

    const parseCss = (fileContent) => {
      const out = {};
      const re = /(--beaver-[a-z0-9\-]+)\s*:\s*([^;]+);/gim;
      let m;
      while ((m = re.exec(fileContent))) {
        out[m[1]] = m[2].trim();
      }
      return out;
    };

    const varsObj = vars;
    const flat = flatten(varsObj);
    const cssPath = fileURLToPath(new URL('../src/tokens/tokens.css', import.meta.url));
    if (!fs.existsSync(cssPath)) {
      console.error(`tokens.css 未找到：${cssPath}。请先运行 pnpm run gen:tokens 生成。`);
      process.exit(2);
    }
    const css = fs.readFileSync(cssPath, 'utf8');
    const parsed = parseCss(css);

    const missing = [];
    const mismatched = [];
    Object.keys(flat).forEach((k) => {
      if (!(k in parsed)) missing.push(k);
      else if (parsed[k] !== flat[k]) mismatched.push(`${k}: vars='${flat[k]}' css='${parsed[k]}'`);
    });

    if (missing.length || mismatched.length) {
      console.error('tokens 校验失败：');
      if (missing.length) {
        console.error('tokens.css 中缺失的 key：');
        missing.forEach((k) => console.error(`  - ${k}`));
      }
      if (mismatched.length) {
        console.error('token 值不匹配：');
        mismatched.forEach((m) => console.error(`  - ${m}`));
      }
      process.exit(1);
    }

    console.log('tokens.css 与 vars.ts 同步校验通过');
    process.exit(0);
  } catch (err) {
    console.error('check-tokens-sync (mjs) 执行失败：', err);
    process.exit(1);
  }
})();
