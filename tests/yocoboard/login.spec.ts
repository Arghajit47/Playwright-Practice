import { expect, BrowserContext, Page } from "@playwright/test";
import {
  LoginPageRobotDependencies,
  LoginPageRobotEyes,
  LoginPageRobotHands,
} from "../../Robot/pages/LoginPageRobot";
import { test, assert } from "../../fixturesD/myFixtures";

test.describe("Login Testing", async () => {
  test("Login with Valid Credentials", async ({
    browser,
    validEmailId,
    validPassword,
  }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPageRobotDependenciesObj = new LoginPageRobotDependencies(page);
    const loginPageRobotEyesObj = new LoginPageRobotEyes(page);
    const loginPageRobotHandsObj = new LoginPageRobotHands(page);

    await loginPageRobotDependenciesObj.visitHomePage();
    await loginPageRobotHandsObj.clickOnLoginButton();
    await loginPageRobotEyesObj.seesLoginPageElements();
    await loginPageRobotHandsObj.inputEmailId(validEmailId);
    await loginPageRobotHandsObj.inputPassword(validPassword);
    await loginPageRobotHandsObj.clickOnSignInButton();
    await page.waitForLoadState();
    await loginPageRobotEyesObj.validateHoursPage();
    await loginPageRobotHandsObj.clickOnHamburgerIcon();
    await loginPageRobotHandsObj.clickOnSignOut();
    await page.waitForLoadState();
    await loginPageRobotEyesObj.seesLoginPageElements();
  });

  test("Login with Invalid Credentials", async ({
    browser,
    inValidEmailId,
    inValidPassword,
  }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPageRobotDependenciesObj = new LoginPageRobotDependencies(page);
    const loginPageRobotEyesObj = new LoginPageRobotEyes(page);
    const loginPageRobotHandsObj = new LoginPageRobotHands(page);

    await loginPageRobotDependenciesObj.visitHomePage();
    await loginPageRobotHandsObj.clickOnLoginButton();
    await loginPageRobotEyesObj.seesLoginPageElements();
    await loginPageRobotHandsObj.inputEmailId(inValidEmailId);
    await loginPageRobotHandsObj.inputPassword(inValidPassword);
    await loginPageRobotHandsObj.clickOnSignInButton();
    await page.waitForLoadState();
    await loginPageRobotEyesObj.validateInvalidCredentialsText();
  });

  test("Forgot Password", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPageRobotDependenciesObj = new LoginPageRobotDependencies(page);
    const loginPageRobotEyesObj = new LoginPageRobotEyes(page);
    const loginPageRobotHandsObj = new LoginPageRobotHands(page);

    await loginPageRobotDependenciesObj.visitHomePage();
    await loginPageRobotHandsObj.clickOnLoginButton();
    await loginPageRobotEyesObj.seesLoginPageElements();
    await loginPageRobotHandsObj.clickOnForgotPassword();
    await loginPageRobotEyesObj.validateForgotPasswordPage();
  });
});
