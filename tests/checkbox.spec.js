import {test,expect } from "@playwright/test"
test.only('check box in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const option1= page.locator("//input[@value='option-1']")
    //await option1.click()
    await option1.check()
    const option3= page.locator("//input[@value='option-3']")
    //await option3.click()//if we try to click the selected one using click() option then that selected one will get deselected.
    //await option3.check()// if we try to click the selected one using check() option then that selected one wont get deselected.
    await option3.uncheck()// ucheck() is used to deselect the checkbox.
    const status= await option3.isChecked()
    console.log(status)
})
