import { test, expect } from "@playwright/test"; //"@playwright/test" is the official test runner package/library of playwright. without importing this one test wont execute.' expect' is used to support assertions.
test("Browser Context Playwright Test", async ({ browser }) => {
  //"test" denotes testcase. the one mentioned inside the sigle quotes is Testname."browser" is browser fixture. It repressents the actual browser.
  const context = await browser.newContext(); // Create a new browser section
  const page = await context.newPage(); // Create a new tab inside the browser.
  await page.goto("https://selenium.qabible.in/"); // "go to" method is used to launch the page url.
});
//Step1: Browser starts
//Step2: Session/Browser create
//Step3: Page/Tab create
//Step4: Url launch
test.only("Page Playwright Test", async ({ page }) => {    // '.only' is used to execute only this perticular testcase.
  await page.goto("https://selenium.qabible.in/");
  const title=await page.title()
  console.log(title)
  //assertion is used to verify the test result either pass or fail.
  await expect(page).toHaveTitle("Obsqura Testings")
});

