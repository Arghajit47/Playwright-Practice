import { test, expect, BrowserContext, Page } from "@playwright/test";
import {
  LoginPageRobotDependencies,
  LoginPageRobotEyes,
  LoginPageRobotHands,
} from "../../Robot/pages/LoginPageRobot";

// let context: BrowserContext;
// let page: Page;

test.describe("Login Testing", async () => {
  test("Login with Valid Credentials", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPageRobotDependenciesObj = new LoginPageRobotDependencies(page);
    const loginPageRobotEyesObj = new LoginPageRobotEyes(page);
    const loginPageRobotHandsObj = new LoginPageRobotHands(page);

    loginPageRobotDependenciesObj.visitHomePage();
    loginPageRobotHandsObj.clickOnLoginButton();
    loginPageRobotEyesObj.seesLoginPageElements();
    loginPageRobotHandsObj.inputEmailId();
    loginPageRobotHandsObj.inputPassword();
    loginPageRobotHandsObj.clickOnSignInButton();
    loginPageRobotEyesObj.validateHoursPageUrl();
  });
});
