const { test, expect } = require("@playwright/test");

// const { hello, world } = require("./demo/hello");        //to import the functions created in the file
// import { hello, world } from "./demo/hello";

// console.log(hello());
// console.log(world());

test("My First Test", async ({ page }) => {
  await page.goto("https://google.com");
  await expect(page).toHaveTitle("Google");
});
