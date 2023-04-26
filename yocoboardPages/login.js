exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.login_button = page.getByRole("link", { name: "Login" });
    this.email_textbox = page.getByPlaceholder("Email Address");
    this.password_textbox = page.getByPlaceholder("Password");
    this.signin_button = page.getByRole("button", { name: "sign in" });
    this.tripple_button = page.locator('div > em[id="hamburger_icon"]');
    this.signout_button = page.locator('div > ul > li[onclick="signOut();"]');
  }

  async gotoLoginPage() {
    await this.page.goto("https://www.yocoboard.com/");
  }

  async login(username, password) {
    await this.login_button.click();
    await this.email_textbox.fill(username);
    await this.password_textbox.fill(password);
    await this.signin_button.click();
  }

  async trippleButton() {
    await this.tripple_button.click();
  }
  async signout() {
    await this.signout_button.click();
  }
};
