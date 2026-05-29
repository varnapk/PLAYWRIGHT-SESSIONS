import { test,expect } from "@playwright/test";
import { LoginPage } from '../Pages/LoginPage'
test('Login using valid Credentials', async({page})=>{
    const loginpage=new LoginPage(page)
    await loginpage.goto()
    await loginpage.login('standard_user','secret_sauce')
})

