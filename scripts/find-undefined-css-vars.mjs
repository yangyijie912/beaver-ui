/**
 *  查找开发和重构过程中因为疏忽和失误而产生的未定义的或定义了没有使用的 CSS 变量
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
    // 确保这是一个属性定义而不是选择器或伪类（例如 `.foo--default:not(...)`）
    const idx = m.index;
    const prevChar = idx > 0 ? text[idx - 1] : undefined;
    if (prevChar && !/\s|\{|;/.test(prevChar)) {
      // 上一个字符不是空白、{ 或 ;，很可能不是属性定义，跳过
      continue;
    }
    defs.add(m[1]);
  }

  // 识别在 JS/TS/JSX/TSX 中通过 element.style.setProperty 或 setProperty(...) 动态设置的 CSS 变量
  // 比如：buttonRef.current.style.setProperty('--switch-actual-content-width', `${w}px`)
  const setPropRegex = /setProperty\(\s*['"`](--[a-zA-Z0-9_-]+)['"`]\s*,/g;
  while ((m = setPropRegex.exec(text))) {
    defs.add(m[1]);
  }

  // 识别在 JS/TS/JSX/TSX 的对象字面量中直接设置的 CSS 变量
  // 比如：{ ['--arrow-offset']: `${offset}px`, ... } 或 { '--my-var': 'value' }
  // 包括 TypeScript 类型断言的情况：['--var-name' as any]: value
  const objectPropRegex = /\[\s*['"`](--[a-zA-Z0-9_-]+)['"`](?:\s+as\s+\w+)?\s*\]|['"`](--[a-zA-Z0-9_-]+)['"` ]\s*:/g;
  while ((m = objectPropRegex.exec(text))) {
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
  const tokensPath = path.resolve(ROOT, 'src', 'tokens', 'tokens.css');

  console.log('开始扫描...');
  let files = argv.length ? collectFilesFromTargets(argv) : walk(ROOT);

  // 判断是否扫描的是单个文件
  const isSingleFileScan =
    argv.length === 1 &&
    fs.existsSync(path.resolve(ROOT, argv[0])) &&
    fs.statSync(path.resolve(ROOT, argv[0])).isFile();

  // 始终包含全局 tokens 文件，确保全局变量定义被正确识别
  const normalizedTokensPath = path.normalize(tokensPath);
  const normalizedFiles = new Set(files.map((f) => path.normalize(path.resolve(f))));

  if (fs.existsSync(tokensPath) && !normalizedFiles.has(normalizedTokensPath)) {
    files.push(tokensPath);
  }

  const allDefs = new Set();
  const usesByName = new Map();
  // 记录每个文件中定义的变量，便于后续检测“定义但未使用”
  const defsByFile = new Map(); // file -> Set(vars)
  const defsByName = new Map(); // var -> Set(files)

  for (const f of files) {
    try {
      const { defs, uses } = extract(f);
      // 记录 file -> defs
      if (!defsByFile.has(f)) defsByFile.set(f, new Set());
      for (const d of defs) {
        allDefs.add(d);
        defsByFile.get(f).add(d);
        if (!defsByName.has(d)) defsByName.set(d, new Set());
        defsByName.get(d).add(f);
      }
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
