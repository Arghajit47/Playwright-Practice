import { test, expect } from "@playwright/test";
import { LoginPage } from "../../yocoboardPages/login";

test("test", async ({ page }) => {
  const Login = new LoginPage(page);

  await Login.gotoLoginPage();
  await Login.login("arghajitsingha47+user+admin@gmail.com", "Asughan4711");
  await Login.trippleButton();
  await Login.signout();
});
