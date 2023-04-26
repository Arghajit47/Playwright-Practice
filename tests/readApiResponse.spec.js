import { test } from "@playwright/test";

test("Read API Response", async ({ page }) => {
  await page.goto("https://reqres.in/");
  await page.locator('//li[@data-id="users-single"]').click();
  const [response] = await Promise.all([
    page.waitForResponse(
      (resp) => resp.url().includes("/api/users/2") && resp.status() === 200
    ),
    page.locator("(//span[@class='url'])[1]").click(),
  ]);
  console.log(response.body());

  //   await expect(page.locator("div[id='formattedJson']")).toHaveText(
  //     '{"data":{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},"support":{"url":"https://reqres.in/#support-heading","text":"To keep ReqRes free, contributions towards server costs are appreciated!"}}'
  //   );
});
