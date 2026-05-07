import { test, expect } from "@playwright/test";
test("Locators", async ({ page }) => {
  await page.goto("https://selenium.qabible.in/simple-form-demo.php");
  const inputbox1 = page.locator("#single-input-field");
  //const inputbox2=page.locator('.form-control')
  //xpath syntax: //tagname[@attribute='value']
  //const gettotal=page.locator("//button[@id='button-two']")
  // Using text: //tagname[text()='value']
  // const gettotalbutton=page.locator("//button[text()='Get Total']")
  const showmessage = page.locator("#button-one");
  //fill method is used to input value to the input field.
  await inputbox1.fill("Playwright Automation");
  await showmessage.click();
  //special locators: built-in method in playwright
  // mainly used in ARIA application- Accessible Rich Internet applications
  //aria attributes- role,label,state
});
test.only("speciallocators", async ({ page }) => {
  await page.goto("https://groceryapp.uniqassosiates.com/admin");
  const username = page.locator("//input[@name='username']");
  await username.fill("admin");
  const password = page.locator("//input[@name='password']");
  await password.fill("admin");
  const signin = page.locator("//button[@type='submit']");
  await signin.click();
  await page.goto("https://groceryapp.uniqassosiates.com/admin/list-admin");
  //special locator: get by role(locating based on aria role and accessible name)
  //syntax: page.getByRole(role,{name:'text'})
  //getByRole is a playwright locator used to find elements based on their role and visible name, making test more stable and user-friendly
  //await page.getByRole("button", { name: "Active" }).nth(0).click(); // 'button' is role of element and 'Active' is the visible text/accessible name
  //Special locator getByText syntax: page.getByText('Text')
  await page.getByText('Active').nth(1).click()
  await page.getByText('Active').first().click()
  await page.getByText('Active').last().click()
});

