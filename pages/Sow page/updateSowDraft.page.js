import { faker, fakerEN_IN } from "@faker-js/faker";

export class UpdateSowPage {
  constructor(page) {
    this.page = page;

    this.programDashboard = page.getByRole("heading", {
      name: "Program Dashboard",
    });
    //dashboard to sow list
    this.openSowForm = page.locator("a").filter({ hasText: "SOW" }).nth(1);
    this.sowsList = page.getByRole("link", { name: "SOWs List" });

    //status to update
    this.openStatusDropdown = page.getByRole("combobox", { name: "Status" });
    this.selectDraftStatus = page.getByRole("checkbox", { name: "Draft" });
    this.clickApply = page.getByRole("button", { name: "Apply" });
    this.clickFirstDraftSow = page.locator(".sow-id").first();
    this.clickOnUpdate = page.getByRole("button", { name: "Update" });

    //update to submit
    this.workLocation = page.locator("#sow-worklocation").nth(1);
    this.selectWorkLocation = page.getByRole("option");
    this.browse = page.getByText("Browse").nth(0);
    this.getStarted = page.getByRole("button", {
      name: "Get Started",
    });
    this.committedSpend = page.getByRole("spinbutton", {
      name: "Committed Spend *",
    });
    this.submitButton = page.getByRole("button", {
      name: "Submit Statement of Work",
    });
  }

  // resuable function
  async dashboardToSowList() {
    await this.programDashboard.click();
    await this.openSowForm.click();
    await this.sowsList.click();
  }

  async selectStatusToUpadate() {
    await this.openStatusDropdown.click();
    await this.selectDraftStatus.click();
    await this.clickApply.click();
    await this.clickFirstDraftSow.click();
    await this.clickOnUpdate.click();
  }

  async updateToSubmit() {
    await this.workLocation.click();
    await this.selectRandomOption(this.selectWorkLocation);
    await this.uploadFile(
      "C:/Users/NK/Downloads/10-Day_Advanced_Playwright_Plan.pdf",
    );
    await this.getStarted.click();
    await this.committedSpend.click();
    await this.committedSpend.press("ArrowLeft");
    await this.committedSpend.press("ArrowLeft");
    await this.committedSpend.press("ArrowLeft");
    await this.committedSpend.fill("20000");
    await this.submitButton.click();
  }

  async selectRandomOption(locator) {
    const count = await locator.count();

    if (count === 0) {
      throw new Error("No options found.");
    }

    const randomNumber = fakerEN_IN.number.int({
      min: 0,
      max: count - 1,
    });

    await locator.nth(randomNumber).click();
  }

  //for upload files
  async uploadFile(filePath) {
    const [fileChooser] = await Promise.all([
      this.page.waitForEvent("filechooser"),
      this.browse.click(),
    ]);

    await fileChooser.setFiles(filePath);
  }
}
