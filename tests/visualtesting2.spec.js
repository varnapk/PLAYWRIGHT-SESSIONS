import { test, expect } from "@playwright/test";
test.only("Visual Testing type two in Playwright", async ({ page }) => {
  await page.goto("https://selenium.qabible.in/");
  await page.waitForLoadState("networkidle");
  await page.locator("//div[@id='carouselExampleIndicators']").evaluate((element)=>{
    element.style.display='none'
  })
  await expect(page).toHaveScreenshot('obsqura.png',{threshold: 0.02,
    maxDiffPixels: 8000,})
});
