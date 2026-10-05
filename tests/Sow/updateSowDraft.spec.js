import { test, expect } from "@playwright/test";
import { UpdateSowPage } from "../../pages/Sow page/updateSowDraft.page";

test("Update the created sow draft", async ({ page }) => {
  const sowUpdate = new UpdateSowPage(page);
  test.setTimeout(120000);

  await page.goto("/");

  await sowUpdate.dashboardToSowList();
  await sowUpdate.selectStatusToUpadate();
  await page.waitForLoadState();
  await sowUpdate.updateToSubmit();
});
