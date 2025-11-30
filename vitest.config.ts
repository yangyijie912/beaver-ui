import { defineConfig } from 'vitest/config';

// Default (node) Vitest config - browser/storybook tests were moved to
// `vitest.browser.config.ts` to allow running unit tests without Playwright.
export default defineConfig({
  test: {},
});
