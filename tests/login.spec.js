import { test, expect } from "@playwright/test";
const validcredentials= require('../utils/testcredentials.json')
// importing json file
// .. represent two different folder, here login.json and testcredentials.json are in two different folder
test.beforeEach(async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
});
test("Login using correct credentials", async ({ page }) => {
  const usernamevalue= validcredentials.username//taking username value from credentials file and storing into the variable usernamevalue
  const passwordvalue= validcredentials.password//taking password value from credentials file and storing into the variable passwordvalue
  const username = page.locator("#user-name");
  //await username.fill('standard_user');
  await username.fill(usernamevalue);
  const password = page.locator("#password");
  //await password.fill('secret_sauce');
  await password.fill(passwordvalue);
  const loginbutton = page.locator("#login-button");
  await loginbutton.click();
  const title = await page.title();
  console.log(title);
  await expect(page).toHaveTitle("Swag Labs");
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});
test.only("Login using invalid credentials", async ({ page }) => {
  const username = page.locator("#user-name");
  await username.fill("standard_user1");
  const password = page.locator("#password");
  await password.fill("secret_sauce");
  const loginbutton = page.locator("#login-button");
  await loginbutton.click();
  const title = await page.title();
  console.log(title);
  await expect(page).toHaveTitle("Swag Labs");
  await expect(page).toHaveURL("https://www.saucedemo.com/");
});
