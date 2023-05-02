### `fixturesD/myFixtures.ts` folder contains all the variable values like emailId, password and etc.

### `Robot/BaseRobot.ts` is the Robot file developed for the Playwright, extending which we created for example `Robot/pages/LoginPageRobot.ts` to use them in different testFiles, such as; `Robot/pages/LoginPageRobot.ts` is used for `tests/yocoboard/login.spec.ts`.

### In playwright.config.ts file we have mentioned the actionTimeout and expectTimeout;

`timeout: 50 * 1000,`
`  expect: {`
`    /* Maximum time expect() should wait for the condition to be met.`
`    For example in await expect(locator).toHaveText(); */`
`    timeout: 20000,`
`  },`

### To run the testFile : `npx playwright test ./tests/yocoboard/login.spec.ts --project=chromium --headed --workers 1`
