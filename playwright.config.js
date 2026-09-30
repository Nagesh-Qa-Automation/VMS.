// @ts-check
import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";

const environment = process.env.ENV || "qa";

dotenv.config({
  path: `./env/.env.${environment}`,
});

// /**
//  * @see https://playwright.dev/docs/test-configuration
//  */

export default defineConfig({
  testDir: "./tests",

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  // workers: process.env.CI ? 1 : undefined,
  reporter: "html",

  use: {
    // headless: false,

    //for env
    baseURL: process.env.BASE_URL,
    screenshot: "only-on-failure",
    trace: "on-first-retry",

    //for action reactions
    launchOptions: {
      slowMo: 800, // 0.8 second delay after every action
    },

    viewport: {
      width: 1050,
      height: 550,
    },
  },

  projects: [
    {
      name: "setup",
      testMatch: /auth\.setup\.js/,
    },

    {
      name: "chromium",
      // dependencies: ["setup"],  //for run login test every time when chorme will open for any test

      use: {
        ...devices["Desktop Chrome"],
        storageState: "auth/auth.json",
        viewport: {
          width: 1050,
          height: 550,
        },
      },
    },
  ],
});
