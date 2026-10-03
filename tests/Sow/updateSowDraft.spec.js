import { test, expect } from "@playwright/test";
import { fakerEN_IN, faker } from "@faker-js/faker";
import { UpdateSowPage } from "../../pages/Sow page/updateSowDraft.page";

test("Update the created sow draft", async ({ page }) => {
  const sowUpdate = new UpdateSowPage(page);
  test.setTimeout(120000);

  await page.goto("/");

  await sowUpdate.dashboardToSowList();
  await sowUpdate.selectStatusToUpadate();
  await page.waitForLoadState();
  await sowUpdate.updateToSubmit();

  const [fileChooser] = await Promise.all([
    page.waitForEvent("filechooser"),
    sowUpdate.browse.click(),
  ]);

  await fileChooser.setFiles(
    "C:/Users/NK/Downloads/10-Day_Advanced_Playwright_Plan.pdf",
  );
  await sowUpdate.getStarted.click();
  await sowUpdate.committedSd();
  await sowUpdate.submitButton.click();
});
