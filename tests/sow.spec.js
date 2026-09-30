import { test, expect } from "@playwright/test";
import { SOWPage } from "../pages/sow.page";
import { faker, fakerEN_IN } from "@faker-js/faker";

test("test", async ({ page }) => {
  test.setTimeout(120000);
  const sow = new SOWPage(page);

  await page.goto("/");

  const today = new Date().getDate();
  console.log(today);

  await sow.programDashboard.click();
  await sow.openSowForm.click();

  await sow.createSOW.click();
  await expect(sow.gettingStarted).toBeVisible();

  await sow.sowType.click();

  const sawTypeSelect = page.getByRole("option");
  //   const randomNumber1 = fakerEN_IN.number.int({
  //     min: 0,
  //     max: (await sawTypeSelect.count()) - 1,
  //   });
  await sawTypeSelect.nth(1).click();

  await sow.talentHub.click();

  const selectHierarchy = page.getByRole("option");
  const randomNumber2 = fakerEN_IN.number.int({
    min: 0,
    max: (await selectHierarchy.count()) - 1,
  });
  await selectHierarchy.nth(randomNumber2).click();

  await sow.sowTemplete.click();

  const selectSowTemplete = page.getByRole("option");
  console.log(await selectSowTemplete.count());

  const randomNumber5 = fakerEN_IN.number.int({
    min: 0,
    max: (await selectSowTemplete.count()) - 1,
  });
  await selectSowTemplete.nth(randomNumber5).click();

  await sow.workLocation.click();

  const selectWorkLocation = page.getByRole("option");
  const randomNumber3 = fakerEN_IN.number.int({
    min: 0,
    max: (await selectWorkLocation.count()) - 1,
  });
  await selectWorkLocation.nth(randomNumber3).click();

  await sow.endDate.click();

  await page.getByRole("button", { name: "Choose Year" }).click();
  await page.getByText("2027", { exact: true }).click();
  await page.getByText("Dec", { exact: true }).click();
  await page.locator("td").filter({ hasText: "1" }).first().click();

  const [fileChooser] = await Promise.all([
    page.waitForEvent("filechooser"),
    sow.browse.click(),
  ]);

  await fileChooser.setFiles(
    "C:/Users/NK/Downloads/Nagesh_Kadam_QA_Resume.pdf",
  );

  await sow.vendor.click();

  const selectVendor = page.getByRole("option");
  const randomNumber4 = fakerEN_IN.number.int({
    min: 0,
    max: (await selectVendor.count()) - 1,
  });
  await selectVendor.nth(randomNumber4).click();

  await sow.getStarted.click();
  await expect(sow.financialDetails).toBeVisible();

  await sow.createMilestones.click();
  await expect(sow.milestoneBudget).toBeVisible();

  await sow.milestoneTitle.click();

  const milestoneName =
    fakerEN_IN.commerce.productAdjective() + " " + "Milestone";
  console.log(milestoneName);
  await sow.milestoneTitle.fill(milestoneName);

  await sow.milestoneBudget.click();
  await sow.milestoneBudget.press("ArrowLeft");
  await sow.milestoneBudget.press("ArrowLeft");
  await sow.milestoneBudget.press("ArrowLeft");

  await sow.estimatedBudget.fill("20");
  await sow.endDate.click();

  await page.getByRole("button", { name: "Choose Year" }).click();
  await page.getByText("2027", { exact: true }).click();
  await page.getByText("Dec", { exact: true }).click();
  await page.locator("td").filter({ hasText: "1" }).first().click();

  const [fileChooser1] = await Promise.all([
    page.waitForEvent("filechooser"),
    sow.fileInput.click(),
  ]);

  await fileChooser1.setFiles(
    "C:/Users/NK/Downloads/Nagesh_Kadam_QA_Resume.pdf",
  );

  await expect(sow.uploadComplete).toBeVisible();
});
