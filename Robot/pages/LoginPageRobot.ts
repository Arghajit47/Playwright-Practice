import { Page } from "@playwright/test";
import { BaseEyes, BaseHands, BaseDependencies } from "../BaseRobot";

export class LoginPageRobotEyes extends BaseEyes {
  constructor(page: Page) {
    super(page);
  }
  async seesLoginPageElements() {
    await super.seesDomVisible('input[id="email"]');
    await super.seesDomVisible('input[id="password"]');
    await super.seesDomEnabled('button[aria-label="sign in"]');
    await super.seesIdVisible("rememberMe");
    await super.seesIdVisible("forgotPassword");
    await super.seesDomEnabled('button[aria-label="google login"]');
    await super.seesDomEnabled(
      'span > a[onclick="javascript:funBackToSignUp();return false;"]'
    );
  }
  async validateHoursPageUrl() {
    await super.seesPathNameInUrl("https://www.yocoboard.com/hours");
  }
}

export class LoginPageRobotDependencies extends BaseDependencies {
  constructor(page: Page) {
    super(page);
  }
  async visitHomePage() {
    await super.visitUrl("https://www.yocoboard.com/");
  }
}

export class LoginPageRobotHands extends BaseHands {
  constructor(page: Page) {
    super(page);
  }
  async clickOnLoginButton() {
    await super.clickOnDomElementWithIndex('a[class="login_button"]', 0);
  }
  async inputEmailId() {
    await super.typeTextonId("email", "arghajitsingha47+user+admin@gmail.com");
  }
  async inputPassword() {
    await super.typeTextonId("password", "Asughan4711");
  }
  async clickOnSignInButton() {
    await super.clickOnDomElement('button[aria-label="sign in"]');
  }
}
