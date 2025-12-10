import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const ROOT = path.resolve(path.dirname(__filename), '..');
const SRC = path.join(ROOT, 'src');

const FILE_EXTENSIONS = new Set(['.css', '.scss', '.ts', '.tsx', '.js', '.jsx', '.html']);

async function walk(dir) {
  const items = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const it of items) {
    const full = path.join(dir, it.name);
    if (it.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (it.isFile()) {
      if (FILE_EXTENSIONS.has(path.extname(it.name))) files.push(full);
    }
  }
  return files;
}

function findMatches(content, regex) {
  const lines = content.split(/\r?\n/);
  const matches = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const m = line.match(regex);
    if (m) matches.push({ line: i + 1, text: line.trim(), match: m[0] });
  }
  return matches;
}

async function run() {
  try {
    const files = await walk(SRC);
    const isRegex = /\bis-[A-Za-z0-9_-]+\b/g;
    const bemRegex = /\b[A-Za-z0-9_-]+--[A-Za-z0-9_-]+\b/g;
    const results = [];

    for (const file of files) {
      const content = await fs.readFile(file, 'utf8');
      const isMatches = [];
      const bemMatches = [];

      let m;
      while ((m = isRegex.exec(content))) {
        const prefix = content.slice(0, m.index);
        const line = (prefix.match(/\n/g) || []).length + 1;
        isMatches.push({ line, match: m[0] });
      }
      while ((m = bemRegex.exec(content))) {
        const prefix = content.slice(0, m.index);
        const line = (prefix.match(/\n/g) || []).length + 1;
        bemMatches.push({ line, match: m[0] });
      }

      if (isMatches.length || bemMatches.length) {
        results.push({ file, isMatches, bemMatches });
      }
    }

    if (!results.length) {
      console.log('check-naming：未发现命名问题。');
      process.exit(0);
    }

    console.log('\n命名问题报告（优先使用 BEM `--modifier`，避免 `is-*` 状态类）：\n');
    let totalIs = 0;
    let totalBem = 0;
    for (const r of results) {
      if (r.isMatches.length) {
        console.log('  -> 检测到 `is-` 类：');
        for (const it of r.isMatches) {
          console.log(`     ${it.line}: ${it.match}`);
          totalIs++;
        }
      }
      if (r.bemMatches.length) {
        for (const it of r.bemMatches) {
          totalBem++;
        }
      }
      if (r.isMatches.length && r.bemMatches.length) {
        console.log('  !! 同一文件中同时使用了 `is-*` 与 BEM（建议将 `is-*` 迁移为 BEM 修饰符）');
      }
    }

    console.log(`总结：有 ${results.length} 个文件包含匹配项 — ${totalIs} 个 \`is-*\` 出现，${totalBem} 个 BEM 出现。`);
    // 报告性的检查：不作为失败条件，保持退出码为 0
    process.exit(0);
  } catch (err) {
    console.error('check-naming: error', err);
    process.exit(2);
  }
}

run();
