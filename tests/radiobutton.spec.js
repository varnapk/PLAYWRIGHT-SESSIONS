import {test,expect } from "@playwright/test"
test.only('radio button in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const radiobuttongreen= page.locator("//input[@value='green']")
    //radio button can be select in tow ways: click and check
    //await radiobuttongreen.click()
    await radiobuttongreen.check()
    const status= await radiobuttongreen.isChecked()// 
    //isChecked() method is used to verify whether a radio button is selected or not.
    console.log(status)// printing the status as true/false in the console. if radio button is selected it will return true otherwise it will return false.
})

