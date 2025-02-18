import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 30000,
  globalTimeout: 60000,
  expect: {
    timeout: 5000
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', {outputFile: 'test-results/htmlReport.html'}],
    ['junit', {outputFile: 'test-results/junitReport.xml'}],
    ['allure-playwright']
  ],
  use: {
    baseURL: 'http://www.automationpractice.pl/index.php',
    trace: 'on-first-retry',
    actionTimeout: 30000,
    navigationTimeout: 30000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    {
      name: 'mobile',
      use: { ...devices['iPhone 13 Pro Max'] }
    }
  ],
});
