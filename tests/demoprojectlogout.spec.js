import {test, expect} from '@playwright/test';
import { DemoProjectSignupPage } from '../Pages/DemoProjectSignupPage';
import { DemoProjectLoginPage } from '../Pages/DemoProjectLoginPage';
import { DemoProjectLogoutPage } from '../Pages/DemoProjectLogoutPage';
const credentialsList = require('../utils/demoprojecttestdata.json');
test('Logout', async({page})=>{
     const demoprojectsignuppage= new DemoProjectSignupPage(page)
    const demoprojectloginpage= new DemoProjectLoginPage(page)
    const demoprojectlogoutpage= new DemoProjectLogoutPage(page)
   await demoprojectsignuppage.goto()
   const username=credentialsList.validlogincredentials.username
    const password= credentialsList.validlogincredentials.password
    await demoprojectloginpage.login(username,password)
    await demoprojectlogoutpage.logout()
    const loginText=page.locator('#login2')
    await expect(loginText).toBeVisible()
    await expect(loginText).toHaveText('Log in')

})