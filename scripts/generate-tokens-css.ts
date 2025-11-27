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
      out[`--beaver-${name}`] = String(val);
    }
  });
  return out;
}

function generate() {
  const flat = flatten({ beaver: vars });
  const css = `:root {\n${Object.entries(flat)
    .map(([k, v]) => `  ${k}: ${v};`)
    .join('\n')}\n}\n`;
  const outPath = path.resolve(__dirname, '../src/tokens/tokens.css');
  fs.writeFileSync(outPath, css, 'utf8');
  console.log(`Generated tokens CSS at ${outPath}`);
}

generate();
