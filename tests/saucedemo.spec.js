const { test, expect } = require('@playwright/test');

test.describe('Sauce Demo', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

  test('login with standard_user', async ({ page }) => {
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator('.inventory_list')).toBeVisible();
  });

  test('purchase flow: add to cart and checkout', async ({ page }) => {
    // login
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL(/inventory.html/);

    // add first item to cart
    const firstAdd = page.locator('.inventory_item').first().locator('button');
    await firstAdd.click();
    await page.click('.shopping_cart_link');
    await expect(page.locator('.cart_list')).toBeVisible();

    // checkout
    await page.click('#checkout');
    await page.fill('#first-name', 'Test');
    await page.fill('#last-name', 'User');
    await page.fill('#postal-code', '12345');
    await page.click('#continue');
    await expect(page.locator('.summary_info')).toBeVisible();
    await page.click('#finish');
    await expect(page.locator('.complete-header')).toHaveText('THANK YOU FOR YOUR ORDER');
  });
});
