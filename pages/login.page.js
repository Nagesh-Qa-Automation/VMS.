export class LoginPage {
  constructor(page) {
    this.page = page;

    this.emailInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator('#sign-in');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
