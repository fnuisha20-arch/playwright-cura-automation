import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  retries: 0,

  workers: undefined,

  reporter: 'html',

  use: {
    baseURL: 'https://katalon-demo-cura.herokuapp.com/',
    trace: 'on-first-retry'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
});