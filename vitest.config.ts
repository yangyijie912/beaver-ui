import { defineConfig } from 'vitest/config';

// Default (node) Vitest config - browser/storybook tests were moved to
// `vitest.browser.config.ts` to allow running unit tests without Playwright.
export default defineConfig({
  test: {
    // Enable global test APIs (describe/test/expect)
    globals: true,
    // Use JSDOM environment so React Testing Library can access `document`/`window`.
    // Browser/storybook tests use `vitest.browser.config.ts` and Playwright.
    environment: 'jsdom',
  },
});
