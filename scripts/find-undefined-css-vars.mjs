/**
 *  查找开发和重构过程中因为疏忽和失误而产生的未定义的或定义了没有使用的 CSS 变量
 * （一般因为忘记定义或者已经移除或者拼写错误等，用于开发时自测）
 * 说明：
 *   默认仅扫描 src/ 下的所有 CSS/HTML/JS/TS 文件，
 *   可通过 --repo 扫描整个仓库（会跳过构建产物目录）。
 *   查找使用了 var(--xxx) 但未定义 --xxx 的 CSS 变量。
 *  用法：
 *   node scripts/find-undefined-css-vars.mjs            # 默认只扫描 src/
 *   node scripts/find-undefined-css-vars.mjs --repo     # 扫描整个仓库（排除构建产物）
 *   node scripts/find-undefined-css-vars.mjs <path>...  # 只扫描指定的文件或目录
 *  示例：
 *   node scripts/find-undefined-css-vars.mjs src/components/Input/Input.css
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const ROOT = path.resolve(__dirname, '..');
const SRC = path.resolve(ROOT, 'src');
const IGNORE_DIRS = ['node_modules', '.git', 'dist', 'build', 'storybook-static', 'dist-analyze'];
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
      const ext = path.extname(abs).toLowerCase();
      if (FILE_EXTS.includes(ext)) {
        files.add(abs);
        // 如果是单个 CSS/预处理文件，尝试同时包含同目录下同名的组件文件
        // 例如：扫描 `Popconfirm.css` 时同时包含 `Popconfirm.tsx` / `Popconfirm.jsx` / `Popconfirm.ts` / `Popconfirm.js`
        const cssLike = ['.css', '.scss', '.less', '.sass'];
        if (cssLike.includes(ext)) {
          const dir = path.dirname(abs);
          const base = path.basename(abs, ext);
          const companionExts = ['.tsx', '.jsx', '.ts', '.js', '.html', '.htm'];
          for (const ce of companionExts) {
            const cand = path.join(dir, base + ce);
            try {
              if (fs.existsSync(cand) && fs.statSync(cand).isFile()) files.add(cand);
            } catch (e) {
              // ignore
            }
          }
        }
      }
    }
  }
  return Array.from(files);
}

function extract(file) {
  const text = fs.readFileSync(file, 'utf8');
  const lines = text.split(/\r?\n/);
  const defs = new Set();
  const uses = [];
  // 为了避免注释中的误报，先去掉块注释和行注释（简单启发式）
  const scanText = text.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|\n)\s*\/\/.*$/gm, '');

  const defRegex = /(--[a-zA-Z0-9_-]+)\s*:\s*[^;\n]+/g;
  let m;
  while ((m = defRegex.exec(scanText))) {
    // 确保这是一个属性定义而不是选择器或伪类（例如 `.foo--default:not(...)`）
    const idx = m.index;
    const prevChar = idx > 0 ? scanText[idx - 1] : undefined;
    // 允许在内联 style 中常见的前导字符，比如 `=` / `"` / `'`，以及常规的空白、`{`、`;`、`(`
    if (prevChar && !/[\s\{\;=\(\[\"\']/.test(prevChar)) {
      // 上一个字符看起来像选择器的一部分，跳过
      continue;
    }
    defs.add(m[1]);
  }

  // 识别在 JS/TS/JSX/TSX 中通过 element.style.setProperty 或 setProperty(...) 动态设置的 CSS 变量
  // 比如：buttonRef.current.style.setProperty('--switch-actual-content-width', `${w}px`)
  const setPropRegex = /setProperty\(\s*['"`](--[a-zA-Z0-9_-]+)['"`]\s*,/g;
  while ((m = setPropRegex.exec(scanText))) {
    defs.add(m[1]);
  }

  // 识别在 JS/TS/JSX/TSX 的对象字面量中直接设置的 CSS 变量
  // 比如：{ ['--arrow-offset']: `${offset}px`, ... } 或 { '--my-var': 'value' }
  // 包括 TypeScript 类型断言的情况：['--var-name' as any]: value
  // 匹配对象字面量或者作为键的 CSS 变量，例如: { ['--x']: val } 或 { '--x': val }
  const objectPropRegex =
    /(?:\[\s*['"`](--[a-zA-Z0-9_-]+)['"`]\s*(?:as\s+\w+)?\s*\]|['"`](--[a-zA-Z0-9_-]+)['"`]\s*:\s*)/g;
  while ((m = objectPropRegex.exec(scanText))) {
    defs.add(m[1] || m[2]);
  }

  // 识别在 JS/TS/JSX/TSX 中通过 getPropertyValue(...) 读取 CSS 变量的用法
  // 例如：getComputedStyle(el).getPropertyValue('--beaver-switch-min-content-width')
  const getPropRegex = /getPropertyValue\(\s*['"`](--[a-zA-Z0-9_-]+)['"`]\s*\)/g;
  // 当作变量的使用，而不是定义
  while ((m = getPropRegex.exec(text))) {
    // 计算行号并加入 uses 列表
    const upto = text.slice(0, m.index);
    const lineNum = upto.split(/\r?\n/).length;
    const lineText = text.split(/\r?\n/)[lineNum - 1] || '';
    uses.push({ name: m[1], file, line: lineNum, text: lineText.trim() });
  }

  // 在文本中查找所有 var(--name) 的出现（支持嵌套），按行记录位置信息
  const useRegex = /var\(\s*--([a-zA-Z0-9_-]+)\b/g;
  let um;
  while ((um = useRegex.exec(text))) {
    // 计算行号（基于匹配开始位置）
    const upto = text.slice(0, um.index);
    const lineNum = upto.split(/\r?\n/).length;
    const lineText = text.split(/\r?\n/)[lineNum - 1] || '';
    uses.push({ name: `--${um[1]}`, file, line: lineNum, text: lineText.trim() });
  }

  return { defs: Array.from(defs), uses };
}

function printUsageAndExit() {
  console.log('\n用法：');
  console.log('  node scripts/find-undefined-css-vars.mjs                 # 默认只扫描 src/');
  console.log('  node scripts/find-undefined-css-vars.mjs --repo           # 扫描整个仓库（排除构建产物）');
  console.log('  node scripts/find-undefined-css-vars.mjs <path>...         # 只扫描指定的文件或目录');
  console.log('  可选：添加 `--local` 标志使定义/使用限定在目标范围（仅目标文件内查找定义和使用）');
  console.log('示例：');
  console.log('  node scripts/find-undefined-css-vars.mjs src/components/Input/Input.css');
  process.exit(0);
}

function main() {
  const argv = process.argv.slice(2);
  if (argv.includes('-h') || argv.includes('--help')) return printUsageAndExit();

  // 支持可选标志：--local
  const localIndex = argv.indexOf('--local');
  const localScope = localIndex !== -1;
  // 支持可选标志：--repo
  const repoIndex = argv.indexOf('--repo');
  const scanRepo = repoIndex !== -1;
  // 过滤掉 flags，剩下的为目标路径
  const targets = argv.filter((a) => a !== '--local' && a !== '--repo');
  const effectiveTargets = targets.length ? targets : [scanRepo ? ROOT : SRC];
  const tokensPath = path.resolve(ROOT, 'src', 'tokens', 'tokens.css');

  console.log('开始扫描...');
  let files = effectiveTargets.length ? collectFilesFromTargets(effectiveTargets) : walk(ROOT);

  // 判断是否扫描的是单个文件
  const isSingleFileScan =
    argv.length === 1 &&
    fs.existsSync(path.resolve(ROOT, argv[0])) &&
    fs.statSync(path.resolve(ROOT, argv[0])).isFile();

  // 始终包含全局 tokens 文件，确保全局变量定义被正确识别
  const normalizedTokensPath = path.normalize(tokensPath);
  let normalizedFiles = new Set(files.map((f) => path.normalize(path.resolve(f))));

  if (fs.existsSync(tokensPath) && !normalizedFiles.has(path.normalize(path.resolve(tokensPath)))) {
    files.push(tokensPath);
    // 重新计算 normalizedFiles，确保 tokensPath 被包含
    normalizedFiles = new Set(files.map((f) => path.normalize(path.resolve(f))));
  }

  const allDefs = new Set();
  const usesByName = new Map();
  // 记录每个文件中定义的变量，便于后续检测“定义但未使用”
  const defsByFile = new Map(); // file -> Set(vars)
  const defsByName = new Map(); // var -> Set(files)

  // 根据 --local 标志选择作用域：
  // - 默认（全局）：在整个仓库中收集 defs 和 uses（更准确，避免跨文件误报）。
  // - --local：仅在用户指定的目标文件集合内收集 defs 和 uses（用于检测目标范围内的缺失定义）。
  // 现在默认仅扫描 src/；如果传了 --repo，则扫描整个仓库。
  const rootScope = scanRepo ? ROOT : SRC;
  const defsFiles = localScope ? files : walk(rootScope);
  const usesFiles = localScope ? files : walk(rootScope);

  for (const f of defsFiles) {
    try {
      const { defs } = extract(f);
      if (!defsByFile.has(f)) defsByFile.set(f, new Set());
      for (const d of defs) {
        allDefs.add(d);
        defsByFile.get(f).add(d);
        if (!defsByName.has(d)) defsByName.set(d, new Set());
        defsByName.get(d).add(f);
      }
    } catch (err) {
      // 忽略无法读取的文件
    }
  }

  for (const f of usesFiles) {
    try {
      const { uses } = extract(f);
      for (const u of uses) {
        if (!usesByName.has(u.name)) usesByName.set(u.name, []);
        usesByName.get(u.name).push(u);
      }
    } catch (err) {
      // 忽略无法读取的文件
    }
  }

  // 调试模式：输出 tokens 中的项在 usesByName 中的存在情况，便于诊断未使用误报
  if (process.env.DEBUG_TOKENS === '1') {
    const suspect = Array.from(allDefs)
      .filter((d) => d.indexOf('--beaver-') === 0)
      .slice(0, 200);
    console.log('\n[DEBUG] 检查 tokens 在 usesByName 中的匹配:');
    for (const t of suspect) {
      const present = usesByName.has(t);
      const occ = usesByName.get(t) || [];
      console.log(`  ${t} -> used: ${present} (occurrences: ${occ.length})`);
      if (occ.length) {
        for (const o of occ.slice(0, 3)) {
          console.log(`    - ${path.relative(ROOT, o.file)}:${o.line} -> ${o.text}`);
        }
      }
    }
  }

  const used = Array.from(usesByName.keys()).sort();
  const defined = Array.from(allDefs).sort();

  const undefinedVars = used.filter((v) => !allDefs.has(v));

  // 计算定义但未使用的变量（所有已定义的变量中，不在 usesByName 的）
  const unusedVars = Array.from(allDefs).filter((v) => !usesByName.has(v));

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
        // 只将用户指定目标文件（normalizedFiles）中的未定义使用加入报告
        const abs = path.normalize(path.resolve(o.file));
        if (!normalizedFiles.has(abs)) continue;
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

  // 输出定义但未使用的变量
  console.log(`\n按文件列出的定义但未使用的变量：`);
  if (unusedVars.length === 0) {
    console.log('  无');
  } else {
    // 按文件分组输出未使用的定义
    const unusedByFile = {};
    for (const file of defsByFile.keys()) {
      // 只将用户实际扫描的文件（normalizedFiles）纳入未使用定义的输出范围
      const abs = path.normalize(path.resolve(file));
      if (!normalizedFiles.has(abs)) continue;
      const defsSet = defsByFile.get(file) || new Set();
      const unusedInFile = Array.from(defsSet).filter((d) => unusedVars.includes(d));
      if (unusedInFile.length) unusedByFile[path.relative(ROOT, file)] = unusedInFile.sort();
    }

    // 在单文件扫描时，不输出 tokens.css 的未使用变量
    const tokensRel = path.relative(ROOT, tokensPath);
    if (!isSingleFileScan && fs.existsSync(tokensPath) && unusedByFile[tokensRel]) {
      console.log(tokensRel);
      for (const v of unusedByFile[tokensRel]) console.log(`  ${v}`);
    }

    // 输出其他文件的未使用变量（排除 tokensPath 已输出的）
    for (const [file, vars] of Object.entries(unusedByFile)) {
      if (file === tokensRel) continue;
      console.log(file);
      for (const v of vars) console.log(`  ${v}`);
    }
  }

  process.exit(0);
}

main();
