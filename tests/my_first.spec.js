const { test, expect } = require("@playwright/test");

// const { hello, world } = require("./demo/hello");        //to import the functions created in the file
// import { hello, world } from "./demo/hello";

// console.log(hello());
// console.log(world());

test("My First Test", async ({ page, context }) => {
  await context.tracing.start({
    snapshots: true,
    screenshots: true,
  });
  await page.goto("https://google.com");
  await expect(page).toHaveTitle("Google");
  await context.tracing.stop({ path: "test-trace.zip" });
});
