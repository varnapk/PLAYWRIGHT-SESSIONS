import { test, expect } from "@playwright/test";
const dataset= require('../utils/parameterisedtestdata.json')
test.beforeEach(async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
});
for(const data of dataset){
test.only(`Login using invalid credentials ${data.username} ${data.password}`, async ({ page }) => {
  const username = page.locator("#user-name");
  await username.fill(data.username);
  const password = page.locator("#password");
  await password.fill(data.password);
  const loginbutton = page.locator("#login-button");
  await loginbutton.click();
})
}