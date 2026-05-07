import { test, expect } from "@playwright/test";
test.only("Visual Testing in Playwright", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await page.waitForLoadState("networkidle"); 
  // The page will wait until network is stable. 'networkidle' means  Playwright waits until there have been 0 network requests for at least 500ms.
  await expect(page).toHaveScreenshot("loginpage.png", {
    threshold: 0.2,
    maxDiffPixels: 7000,
  })
  //'loginpage.png' is file name, this name can be given as I wish
  //'tohave screenshot' method is taking screenshot and comparing with baseline screenshot
  //'threshhold' Defines the acceptable visual difference. if we put 0, this shouldn't allow any difference, all the difference should captured.
  //if we give 0.1 as threshold value, very minor difference can be ignored.
  //if we give 0.2 as threshold value, small difference can be ignored.
  //if we give 1 as threshold value, large difference can be ignored.
  //'maxDiffPixels' means how much pixel difference can be allowed. we can give max of 3000-8000 in normal site, and 8000-15000 in large site.
})
