
// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  // Test folder
  testDir: './tests',
  testMatch: ['**/*.@(spec|test).?(c|m)[jt]s?(x)', '**/TEST1.js'],

  // Overall test timeout (60 seconds)
  timeout: 90000,

  // Execute tests in parallel
  fullyParallel: true,

  // Stop accidental test.only in CI
  forbidOnly: !!process.env.CI,

  // Retry failed tests in CI
  retries: process.env.CI ? 2 : 0,

  // Number of workers
  workers: process.env.CI ? 1 : undefined,

  // HTML report
  reporter: 'html',

  // Common browser settings
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  // Browser configuration
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
      },
    },
  ],

});
