export class SOWPage {
  constructor(page) {
    this.page = page;

    this.programDashboard = page.getByRole("heading", {
      name: "Program Dashboard",
    });
    this.openSowForm = page.locator("a").filter({ hasText: "SOW" }).nth(1);
    this.createSOW = page.getByRole("link", {
      name: " Create SOW",
    });
    this.gettingStarted = page.getByRole("region", {
      name: "start Getting Started Here",
    });
    this.sowType = page.locator("#sow-type").nth(1);
    this.talentHub = page.locator("p-inputgroup").getByRole("combobox");
    this.sowTemplete = page.locator("#sow-template").getByRole("combobox");
    this.workLocation = page.locator("#sow-worklocation").nth(1);
    this.endDate = page.getByRole("combobox", {
      name: "End Date *",
    });
    this.browse = page.getByText("Browse").nth(0);
    this.vendor = page.locator("#sow-vendor").nth(1);
    this.getStarted = page.getByRole("button", {
      name: "Get Started",
    });
    this.financialDetails = page.getByRole("region", {
      name: "task Financial Details Here",
    });
    this.createMilestones = page.getByRole("button", {
      name: "add Create Milestones",
    });
    this.milestoneBudget = page.getByRole("spinbutton", {
      name: "Estimated Milestone Budget",
    });
    this.milestoneTitle = page.getByRole("textbox", {
      name: "Milestone Title *",
    });
    this.estimatedBudget = page.locator("#estimated-budget");
    this.fileInput = page.locator("#file-input");
    this.uploadComplete = page.getByText("Upload Complete");
    this.createMilestonesButton = page.locator("#deliverable-save");

    //create standalone variables
    this.createStandalone = page.getByRole("button", {
      name: "add Create Standalone",
    });

    this.deliverableTitle = page.getByRole("textbox", {
      name: "Deliverable Title *",
    });

    this.deliverableType = page.getByRole("combobox");
    this.deliverableSubmitButton = page.locator("#submit-deliverable");

    this.committedSpend = page.getByRole("spinbutton", {
      name: "Committed Spend *",
    });
  }
}
