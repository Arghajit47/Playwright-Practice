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
  async validateHoursPage() {
    await super.seesDomVisible('div[id="company-logo"]');
    await super.seesDomVisible('img[id="userPhoto"]');
    await super.seesDomVisible('h3[id="userName_header"]');
  }
  async validateInvalidCredentialsText() {
    await super.seesDomContainText(
      'div > span[class="pwd-reset-msg"]',
      "Invalid Credential..."
    );
  }
  async validateForgotPasswordPage() {
    await super.seesDomContainText(
      'div[id="forgot-pwd-form"] > h3',
      "Forgot Password"
    );
    await super.seesDomContainText(
      'div[id="forgot-pwd-form"] > div > span',
      "Enter your email address to reset your password"
    );
    await super.seesDomVisible('input[id="frgtPsswrdMailId"]');
    await super.seesDomEnabled('button[id="resetPassword"]');
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
  async inputEmailId(email: string) {
    await super.typeTextonId("email", email);
  }
  async inputPassword(password: string) {
    await super.typeTextonId("password", password);
  }
  async clickOnSignInButton() {
    await super.clickOnDomElement('button[aria-label="sign in"]');
  }
  async clickOnHamburgerIcon() {
    await super.scrollIntoElement('aside[class="sidebar"]');
    await super.clickOnDomElement('em[id="hamburger_icon"]');
  }
  async clickOnSignOut() {
    await super.clickOnDomElement('ul > li[onclick="signOut();"]');
  }
  async clickOnForgotPassword() {
    await super.clickOnId("forgotPassword");
  }
}
