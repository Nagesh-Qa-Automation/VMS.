import { test as setup } from "@playwright/test";
import { LoginPage } from "../pages/login.page";

const authFile = "auth/auth.json";

setup("authenticate", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto("/");

  await loginPage.login(process.env.EMAIL, process.env.PASSWORD);

  await page.waitForURL(/dashboard/);

  await page.context().storageState({
    path: authFile,
  });
});
