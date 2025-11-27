import fs from 'fs';
import path from 'path';
import vars from '../src/tokens/vars';

function flatten(obj: any, prefix = ''): Record<string, string> {
  const out: Record<string, string> = {};
  Object.keys(obj).forEach((key) => {
    const val = obj[key];
    const name = prefix ? `${prefix}-${key}` : key;
    if (val && typeof val === 'object') {
      Object.assign(out, flatten(val, name));
    } else {
      out[`--beaver-${name}`] = String(val).trim();
    }
  });
  return out;
}

function parseCss(fileContent: string): Record<string, string> {
  const out: Record<string, string> = {};
  const re = /(--beaver-[a-z0-9\-]+)\s*:\s*([^;]+);/gim;
  let m: RegExpExecArray | null;
  while ((m = re.exec(fileContent))) {
    out[m[1]] = m[2].trim();
  }
  return out;
}

function main() {
  const flat = flatten({ beaver: vars });
  const cssPath = path.resolve(__dirname, '../src/tokens/tokens.css');
  if (!fs.existsSync(cssPath)) {
    console.error(`tokens.css not found at ${cssPath}. Run gen:tokens first.`);
    process.exit(2);
  }
  const css = fs.readFileSync(cssPath, 'utf8');
  const parsed = parseCss(css);

  const missing: string[] = [];
  const mismatched: string[] = [];

  Object.keys(flat).forEach((k) => {
    if (!(k in parsed)) {
      missing.push(k);
    } else if (parsed[k] !== flat[k]) {
      mismatched.push(`${k}: vars='${flat[k]}' css='${parsed[k]}'`);
    }
  });

  if (missing.length || mismatched.length) {
    console.error('tokens sync check failed');
    if (missing.length) {
      console.error('Missing keys in tokens.css:');
      missing.forEach((k) => console.error(`  - ${k}`));
    }
    if (mismatched.length) {
      console.error('Mismatched values:');
      mismatched.forEach((m) => console.error(`  - ${m}`));
    }
    process.exit(1);
  }

  console.log('tokens.css is in sync with vars.ts');
}

main();
