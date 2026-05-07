import {test, expect} from '@playwright/test'
import { getCellData } from '../utils/excelreader2'
test('Login using data from row and column', async({page})=>{
    const username=getCellData(2,1)
    const password=getCellData(2,2)
    await page.goto('https://www.saucedemo.com/')
    const user= page.locator("//input[@name='user-name']")
    //await user.fill('standard_user')
    await user.fill(username)
    const pass= page.locator("//input[@name='password']")
    //await pass.fill('secret_sauce')
    await pass.fill(password)
    const loginbutton= page.locator("//input[@name='login-button']")
    await loginbutton.click()


})
