import {test,expect } from "@playwright/test";
test.only('multiple window handling',async({page,context})=>{ //'page' is a fixture to support current window and 'context' is a fixture to support multiple window
    await page.goto('https://demo.guru99.com/popup.php')
    const popup = context.waitForEvent('page')//waitForEvent():Normally this function is using to wait a perticular event to be happen, event can be anything. here this function is used to wait untill a new page/tab opened, because inside the method the parameter is given as the event 'page'.
    const clickhere= page.locator("//a[text()='Click Here']")
    await clickhere.click()
    const newpopup= await popup
    await newpopup.waitForLoadState()//waitForLoadState(): used to wait untill new page is fully loaded.
    const emailid= newpopup.locator("//input[@name='emailid']")
    await emailid.fill('test@gmail.com')
    const submit= newpopup.locator("//input[@type='submit']")
    await submit.click()
}
)

