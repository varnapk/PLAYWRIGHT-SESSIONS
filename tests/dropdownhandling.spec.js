import {test,expect } from "@playwright/test";
test.only('dropdown handling',async({page})=>{
    await page.goto('https://selenium.qabible.in/select-input.php')
    const dropdown= page.locator("//select[@id='single-input-field']")
    //type1: selecting the dropdown value using visible text
    //await dropdown.selectOption({label:'Red'})// if we are selecting dropdown value by 'visible text' option, then 'label' property will use.
    //await dropdown.selectOption({value:'Red'})// if we are selecting dropdown value by 'visible value' option, then 'value' property will use.
    await dropdown.selectOption({index:1})//if we are selecting dropdown value by 'visible index' option, then 'index' property will use.
})

