import { test, expect } from "@playwright/test";
import { LoginPage } from "../../yocoboardPages/login";
import { ProfileSettingsPage } from "../../yocoboardPages/profileSettings";

test("test", async ({ page }) => {
  const Login = new LoginPage(page);
  const ProfileSettings = new ProfileSettingsPage(page);

  await Login.gotoLoginPage();
  await Login.login("arghajitsingha47+user+admin@gmail.com", "Asughan4711");
  await Login.trippleButton();
  await ProfileSettings.openProfileSettings();
  await ProfileSettings.uploadProfilePicture();
});
