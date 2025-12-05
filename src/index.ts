export { default as Button } from './components/Button/Button';
export { default as Radio } from './components/Radio/Radio';
export { default as RadioGroup } from './components/Radio/RadioGroup';
export { default as Checkbox } from './components/Checkbox/Checkbox';
export { default as Input } from './components/Input/Input';
export { default as Select } from './components/Select/Select';
export { default as Switch } from './components/Switch/Switch';
export { default as Pagination } from './components/Pagination/Pagination';
export { default as Table } from './components/Table/Table';
export * from './tokens';

// 在运行时应用 CSS 变量，以便组件可以使用 `var(--beaver-color-primary)`
// 在浏览器中安全导入，在 SSR 环境中无操作
try {
  // 动态导入，以便bundlers/tree-shakers可以在非浏览器目标中移除
  const applyTokens = require('./tokens/applyTokens').default;
  if (typeof applyTokens === 'function') applyTokens();
} catch (_e) {
  // 忽略错误（例如，服务器端或没有 DOM 的测试环境）
}
