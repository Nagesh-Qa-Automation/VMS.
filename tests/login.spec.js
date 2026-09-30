import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page";

test("user can login", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto("/");
  await loginPage.login(process.env.EMAIL, process.env.PASSWORD);
  await expect(page).toHaveURL(/dashboard/);
});
