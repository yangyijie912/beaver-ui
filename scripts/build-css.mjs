import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const srcDir = fileURLToPath(new URL('../src', import.meta.url));
const tokensPath = path.join(srcDir, 'tokens', 'tokens.css');
const componentsDir = path.join(srcDir, 'components');
const outDir = fileURLToPath(new URL('../dist', import.meta.url));
const outFile = path.join(outDir, 'index.css');

async function collectCssFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      const child = await collectCssFiles(full);
      files.push(...child);
    } else if (ent.isFile() && ent.name.endsWith('.css')) {
      files.push(full);
    }
  }
  return files;
}

async function build() {
  let out = '/* beaver-ui - combined css (generated) */\n\n';

  try {
    const tok = await fs.readFile(tokensPath, 'utf8');
    out += `/* tokens.css */\n` + tok + '\n\n';
  } catch (e) {
    console.warn('tokens.css not found, skipping tokens.');
  }

  try {
    await fs.access(componentsDir).catch(() => {
      throw new Error('components directory not found');
    });
    const cssFiles = await collectCssFiles(componentsDir);
    cssFiles.sort();
    for (const f of cssFiles) {
      const rel = path.relative(srcDir, f).replace(/\\/g, '/');
      const content = await fs.readFile(f, 'utf8');
      out += `/* ${rel} */\n` + content + '\n\n';
    }
  } catch (e) {
    console.warn('No component css found or error reading components:', e.message || e);
  }

  await fs.mkdir(outDir, { recursive: true });
  await fs.writeFile(outFile, out, 'utf8');
  console.log('Wrote', outFile);
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
