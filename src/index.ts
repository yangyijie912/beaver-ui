export { default as Button } from './components/Button/Button';
export * from './tokens';

// apply CSS variables at runtime so components can use `var(--beaver-color-primary)`
// This is safe to import in browsers; it's no-op in SSR environments.
try {
  // dynamic import so bundlers/tree-shakers can remove in non-browser targets
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const applyTokens = require('./tokens/applyTokens').default;
  if (typeof applyTokens === 'function') applyTokens();
} catch (e) {
  // ignore (e.g., server-side or tests without DOM)
}
