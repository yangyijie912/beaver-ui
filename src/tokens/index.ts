import vars from './vars';

export { vars };
export default vars;

// 运行时 helper: 客户端需要时可调用 `applyTokens()` 动态写入 CSS 变量
export { default as applyTokens } from './applyTokens';
export { setCssVars } from './applyTokens';
