exports.ProfileSettingsPage = class ProfileSettingsPage {
  constructor(page) {
    this.page = page;
    this.profile_settings_button = page.locator(
      'ul > li[id="profileSettings"]'
    );
    this.profile_picture = page.locator('img[alt="profile picture"]');
    this.firstname_placeholder = page.locator(
      'input[placeholder="First Name"]'
    );
    this.lastname_placeholder = page.locator('input[placeholder="Last Name"]');
    this.email_placeholder = page.locator('input[placeholder="Email"]');
    this.changes_password_dropdown = page.locator('img[alt="loading"]');
    this.current_password = page.locator('div > input[id="currPwd"]');
    this.current_password = page.locator('div > input[id="nwPwd"]');
    this.current_password = page.locator('div > input[id="retyppwd"]');
    this.weekly_digest_button = page.locator('div[id="weeklyDigest"]');
    this.clock_out_reminder_button = page.locator(
      'div[id="inApp-reminder-btn"]'
    );
  }
  async openProfileSettings() {
    await this.profile_settings_button.click();
  }
  async uploadProfilePicture() {
    await this.profile_picture.toBeVisible();
    await this.profile_picture.setInputFiles(
      "images/Aamoled-Astronaut-4K-iPad-Wallpaper.jpg"
    );
  }
};
