const { test, expect } = require("@playwright/test");

let context;
let page;

test.beforeAll(async ({ browser }) => {
  context = await browser.newContext();
  await context.tracing.start({
    snapshots: true,
    screenshots: true,
  });
  page = await context.newPage();
});

test.afterAll(async () => {
  await context.tracing.stop({ path: "test-trace.zip" });
});

test("My First Test", async ({}) => {
  await page.goto("https://google.com");
  await expect(page).toHaveTitle("Google");
});
