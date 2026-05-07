import { test, expect } from "@playwright/test";
test("Simple Alert handling", async ({ page }) => {
  await page.goto("https://selenium.qabible.in/javascript-alert.php")
  page.on('dialog', async dialog =>{ 
     //on() is an event listener. It tells Playwright: "whenever a JavaScript dialog pops up on this page, run the callback function".
    //'dialog' is the event name. It fires for alert(), confirm(), and prompt(). 
    //async dialog => This is the callback function that runs when a dialog appears.
    //dialog is the parameter — it’s the Dialog object Playwright gives you to interact with the popup.
    const alerttype=dialog.type()
    // Gets the type of the alert popup, tells us if it’s alert, confirm, or prompt
    console.log(alerttype)
    expect(dialog.message()).toBe('I am a Javascript alert box!')
    //dialog.message() gets the text shown in the alert.
    //expect(...).toBe(...) is Playwright Test assertion. It checks if the alert text exactly matches 'I am a Javascript alert box!'. If not, the test fails.
    await dialog.accept()
    //dialog.accept() clicks the "OK" button on the alert to close it.
    //await is needed because it’s async — the browser has to process the click.
  })
  const clickme= page.locator("//button[@onclick='jsAlert()']")
  await clickme.click()
})
test("Confirmation Alert handling", async ({ page }) => {
  await page.goto("https://selenium.qabible.in/javascript-alert.php")
  page.on('dialog', async dialog =>{  
    const alerttype=dialog.type()
    console.log(alerttype)
    expect(dialog.message()).toBe('Press a button!')
    //await dialog.accept()
    await dialog.dismiss()//clicks the "Cancel" button on the alert to close it.
  })
  const clickme= page.locator("//button[@onclick='jsConfirm()']")
  await clickme.click()
})
test.only("Prompt Alert handling", async ({ page }) => {
  await page.goto("https://selenium.qabible.in/javascript-alert.php")
  page.on('dialog', async dialog =>{  
    const alerttype=dialog.type()
    console.log(alerttype)
    const alerttext= dialog.defaultValue()
    //Gets the default text in the prompt, prompt means input box present in the alert box.
    console.log(alerttext)
    expect(dialog.message()).toBe('Please enter your name')
    //await dialog.accept('Varna')//it will type 'Varna' into the input box of alert and click OK.
    //await dialog.dismiss()
    await dialog.dismiss()
  })
  const clickme= page.locator("//button[@onclick='jsPrompt()']")
  await clickme.click()
})

