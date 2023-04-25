### Inside that directory, you can run several commands:

`npx playwright test`

### Runs the end-to-end tests.

`npx playwright test --ui`

### Starts the interactive UI mode.

`npx playwright test --project=chromium`

### Runs the tests only on Desktop Chrome.

`npx playwright test example`

### Runs the tests in a specific file.

`npx playwright test --debug`

### Runs the tests in debug mode.

`npx playwright codegen`

### Auto generate tests with Codegen.

### We suggest that you begin by typing:

`npx playwright test`

And check out the following files:

- ./tests/example.spec.js - Example end-to-end test
- ./tests-examples/demo-todo-app.spec.js - Demo Todo App end-to-end tests
- ./playwright.config.js - Playwright Test configuration

`Visit https://playwright.dev/docs/intro for more information.`

Running Test

`npx playwright test` runs all tests on all browsers in headless mode

`npx playwright test --workers 3` runs with 3 workers in parallel

`npx playwright test one.spec.js` runs a specific test file

`npx playwright test one.spec.js two.spec.js` runs the files specified

`npx playwright test one two` runs files that have one or two in the file name

`npx playwright test -g "check title"` runs test with the title

`npx playwright test --project=chromium` runs on specific browser

`npx playwright test --headed` runs tests in headed mode

`npx playwright test --debug` debug tests

`npx playwright test example.spec.js --debug` debug specific test file

`npx playwright test example.spec.js:<lineNumber> --debug` debug starting from specific line where test(..starts from the line number we mentioned)

We can find all the assertions that are possible in `expect.js` inside node_modules

`npx playwright codegen` to record the test script

`npx playwright codegen --browser <browserName>` to record the test in specific browser

`npx playwright codegen <testSiteUrl>` to start recording via going to the site directly

`npx playwright codegen -help` to see all the options available in codegen

`npx playwright codegen --viewport-size=height,width` to set the codegen height and width (screen resolution)

Emulate devices(device name) `npx playwright codegen --device="iPhone 11"`

Emulate color scheme(if available on the website) `npx playwright codegen --color-scheme-dark`
