import {test,expect} from "@playwright/test";
test.beforeEach(async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
});
//tags are used to group or filter testcases
//the tag will usually starts with @ symbol.
test('@smoke Login using valid credentials', async ({ page }) => {
  const username = page.locator("#user-name");
  await username.fill('standard_user');
  const password = page.locator("#password");
  await password.fill('secret_sauce');
  const loginbutton = page.locator("#login-button");
  await loginbutton.click();
  const title = await page.title();
  console.log(title);
  await expect(page).toHaveTitle("Swag Labs");
});
test('@smoke Login using invalid username and valid password', async ({ page }) => {
  const username = page.locator("#user-name");
  await username.fill("standard_user1");
  const password = page.locator("#password");
  await password.fill("secret_sauce");
  const loginbutton = page.locator("#login-button");
  await loginbutton.click();
  await expect(page).toHaveURL("https://www.saucedemo.com/");
});
test('Login using valid username and invalid password', async ({ page }) => {
  const username = page.locator("#user-name");
  await username.fill("standard_user");
  const password = page.locator("#password");
  await password.fill("secret_sauce1");
  const loginbutton = page.locator("#login-button");
  await loginbutton.click();
  const title = await page.title();
  console.log(title);
  await expect(page).toHaveTitle("Swag Labs");
});
test('Login using invalid username and invalid password', async ({ page }) => {
  const username = page.locator("#user-name");
  await username.fill("standard_user1");
  const password = page.locator("#password");
  await password.fill("secret_sauce1");
  const loginbutton = page.locator("#login-button");
  await loginbutton.click();
  const title = await page.title();
  console.log(title);
  await expect(page).toHaveTitle("Swag Labs");
});


