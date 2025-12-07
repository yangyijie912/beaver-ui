/**
 *  查找开发和重构过程中因为疏忽和失误而产生的未定义的 CSS 变量
 * （一般因为忘记定义或者已经移除或者拼写错误等，用于开发时自测）
 * 说明：
 *   扫描指定目录（或整个仓库）下的所有 CSS/HTML/JS/TS 文件，
 *   查找使用了 var(--xxx) 但未定义 --xxx 的 CSS 变量。
 *  用法：
 *   node scripts/find-undefined-css-vars.mjs            # 扫描整个仓库
 *   node scripts/find-undefined-css-vars.mjs <path>...  # 只扫描指定的文件或目录
 *  示例：
 *   node scripts/find-undefined-css-vars.mjs src/components/Input/Input.css
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const ROOT = path.resolve(__dirname, '..');
const IGNORE_DIRS = ['node_modules', '.git', 'dist', 'build'];
const FILE_EXTS = ['.css', '.scss', '.less', '.sass', '.html', '.htm', '.js', '.ts', '.jsx', '.tsx'];

function walk(dir) {
  const results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of list) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (IGNORE_DIRS.includes(entry.name)) continue;
      results.push(...walk(full));
    } else {
      if (FILE_EXTS.includes(path.extname(entry.name).toLowerCase())) {
        results.push(full);
      }
    }
  }
  return results;
}

function collectFilesFromTargets(targets) {
  const files = new Set();
  for (const t of targets) {
    const abs = path.isAbsolute(t) ? t : path.resolve(ROOT, t);
    if (!fs.existsSync(abs)) {
      console.warn(`警告：路径不存在 -> ${t}`);
      continue;
    }
    const stat = fs.statSync(abs);
    if (stat.isDirectory()) {
      for (const f of walk(abs)) files.add(f);
    } else if (stat.isFile()) {
      if (FILE_EXTS.includes(path.extname(abs).toLowerCase())) files.add(abs);
    }
  }
  return Array.from(files);
}

function extract(file) {
  const text = fs.readFileSync(file, 'utf8');
  const lines = text.split(/\r?\n/);
  const defs = new Set();
  const uses = [];

  const defRegex = /(--[a-zA-Z0-9_-]+)\s*:\s*[^;\n]+/g;
  let m;
  while ((m = defRegex.exec(text))) {
    defs.add(m[1]);
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const useRegex = /var\(\s*--([a-zA-Z0-9_-]+)\s*(?:,.*)?\)/g;
    let um;
    while ((um = useRegex.exec(line))) {
      uses.push({ name: `--${um[1]}`, file, line: i + 1, text: line.trim() });
    }
  }

  return { defs: Array.from(defs), uses };
}

function printUsageAndExit() {
  console.log('\n用法：');
  console.log('  node scripts/find-undefined-css-vars.mjs            # 扫描整个仓库');
  console.log('  node scripts/find-undefined-css-vars.mjs <path>...  # 只扫描指定的文件或目录');
  console.log('示例：');
  console.log('  node scripts/find-undefined-css-vars.mjs src/components/Input/Input.css');
  process.exit(0);
}

function main() {
  const argv = process.argv.slice(2);
  if (argv.includes('-h') || argv.includes('--help')) return printUsageAndExit();

  const targets = argv.length ? argv : [ROOT];

  console.log('开始扫描...');
  let files = argv.length ? collectFilesFromTargets(argv) : walk(ROOT);

  // 始终尝试包含全局 tokens 文件，避免单文件扫描时把全局变量误报为未定义
  const tokensPath = path.resolve(ROOT, 'src', 'tokens', 'tokens.css');
  try {
    if (fs.existsSync(tokensPath) && !files.includes(tokensPath)) {
      files.push(tokensPath);
    }
  } catch (e) {
    // ignore
  }

  const allDefs = new Set();
  const usesByName = new Map();

  for (const f of files) {
    try {
      const { defs, uses } = extract(f);
      for (const d of defs) allDefs.add(d);
      for (const u of uses) {
        if (!usesByName.has(u.name)) usesByName.set(u.name, []);
        usesByName.get(u.name).push(u);
      }
    } catch (err) {
      // 忽略无法读取的文件
    }
  }

  const used = Array.from(usesByName.keys()).sort();
  const defined = Array.from(allDefs).sort();

  const undefinedVars = used.filter((v) => !allDefs.has(v));

  console.log(`\n检测结果：`);
  console.log(`  var(...) 使用数：${used.length}`);
  console.log(`  扫描文件数：${files.length}`);
  console.log(`  CSS 变量定义数：${defined.length}`);
  console.log(`\n按文件列出的未定义变量：`);
  if (undefinedVars.length === 0) {
    console.log('  无');
  } else {
    // 将未定义变量按文件分组，输出格式：
    // <file>
    // --var1
    // --var2
    const fileVars = {};
    for (const v of undefinedVars) {
      const occ = usesByName.get(v) || [];
      for (const o of occ) {
        const rel = path.relative(ROOT, o.file);
        if (!fileVars[rel]) fileVars[rel] = new Set();
        fileVars[rel].add(v);
      }
    }
    for (const [file, varsSet] of Object.entries(fileVars)) {
      console.log(file);
      for (const varName of Array.from(varsSet)) {
        console.log(`  ${varName}`);
      }
    }
  }

  process.exit(0);
}

main();
