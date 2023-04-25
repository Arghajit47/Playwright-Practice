import { test, expect } from "@playwright/test";

let context;
let page;

test.beforeAll(async ({ browser }) => {
  context = await browser.newContext();
  //   await context.tracing.start({
  //     snapshots: true,
  //     screenshots: true,
  //   });
  page = await context.newPage();
  await page.goto("https://google.com");
});

test("Demo Login Test 1", async () => {
  await page.goto("https://demo.applitools.com/");
  //   await page.pause();
  await page.locator('input[id="username"]').fill("Arghajit");
  await page.locator('input[id="password"]').fill("Asughan4711");
  await page.waitForSelector('div > a[id="log-in"]', { timeout: 4000 });
  await expect(page.locator('div > a[id="log-in"]')).toHaveCount(1);
  await page.locator('div > a[id="log-in"]').click();
});

test("Demo Login Test 2", async () => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.locator('input[name="username"]').fill("Admin");
  await page.locator('input[name="password"]').fill("admin123");
  await page.waitForSelector('button[type="submit"]', { timeout: 6000 });
  await expect(page.locator('button[type="submit"]')).toHaveCount(1);
  await page.locator('button[type="submit"]').click();
  //   await page.pause();
  await page.getByRole("banner").getByText("Paul Collings").click();
  await page.getByRole("menuitem", { name: "Logout" }).click();
});

test("Demo Login Test 3", async () => {
  //   await page.pause();
  await page.goto("https://admin-demo.nopcommerce.com/login");
  await page.locator('input[name="Email"]').click();
  await page.locator('input[name="Email"]').press("Control+a");
  await page.locator('input[name="Email"]').fill("admin@yourstore.com");
  await page.locator('input[name="Password"]').click();
  await page.locator('input[name="Password"]').press("Control+a");
  await page.locator('input[name="Password"]').fill("admin");
  await page.getByRole("button", { name: "Log in" }).click();
  await page.waitForURL("https://admin-demo.nopcommerce.com/admin/");
  await page.getByRole("link", { name: "Logout" }).click();
  await page.waitForURL(
    "https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F"
  );
});

test.afterAll(async () => {
  //   await context.tracing.stop({ path: "login-test-trace.zip" });
  await context.close();
  await page.close();
});
