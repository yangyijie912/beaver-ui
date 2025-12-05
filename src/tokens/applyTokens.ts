import vars from './vars';

function setCssVars(obj: any, prefix = '') {
  Object.keys(obj).forEach((key) => {
    const val = obj[key];
    const name = prefix ? `${prefix}-${key}` : key;
    if (val && typeof val === 'object') {
      setCssVars(val, name);
    } else {
      const propName = `--${name}`;
      try {
        document.documentElement.style.setProperty(propName, String(val));
      } catch (_e) {
        // ignore if document not available (SSR)
      }
    }
  });
}

export default function applyTokens() {
  // flatten tokens under 'beaver' namespace to avoid colliding with other libs
  setCssVars({ beaver: vars });
}

export { setCssVars };
