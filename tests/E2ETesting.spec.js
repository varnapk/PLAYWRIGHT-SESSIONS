//An E2E testing checks the complete flow of application from start to end as real user
import { test, expect } from "@playwright/test";
const validcredentials= require('../utils/testcredentials.json')
test.only('E2E Testing', async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    const usernamevalue= validcredentials.username
  const passwordvalue= validcredentials.password
  const username = page.locator("#user-name");
  await username.fill(usernamevalue);
  const password = page.locator("#password");
  //await password.fill('secret_sauce');
  await password.fill(passwordvalue);
  const loginbutton = page.locator("#login-button");
  await loginbutton.click();
  const addtocartbutton=page.locator("//button[@id='add-to-cart-sauce-labs-backpack']")
  await addtocartbutton.click()
  const carticon=page.locator('.shopping_cart_link')
  await carticon.click()
  const checkoutbutton=page.locator('#checkout')
  await checkoutbutton.click()
  const firstname=page.locator('#first-name')
  await firstname.fill('Varna')
const lastname=page.locator('#last-name')
await lastname.fill('Test')
const zipcode=page.locator('#postal-code')
await zipcode.fill('121212')
const continuebutton=page.locator('#continue')
await continuebutton.click()
const finishbutton= page.locator('#finish')
await finishbutton.click()
await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!')
})
