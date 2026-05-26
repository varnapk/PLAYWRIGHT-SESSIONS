import {test, expect} from '@playwright/test';
import { DemoProjectSignupPage } from '../Pages/DemoProjectSignupPage';
import { DemoProjectLoginPage } from '../Pages/DemoProjectLoginPage';
const credentialsList = require('../utils/demoprojecttestdata.json');
test('Login using valid Credentials', async({page})=>{
    test.setTimeout(60000);

    const demoprojectsignuppage = new DemoProjectSignupPage(page)
    await demoprojectsignuppage.goto()

    const demoprojectloginpage= new DemoProjectLoginPage(page)
    const username=credentialsList.validlogincredentials.username
    const password= credentialsList.validlogincredentials.password
    await demoprojectloginpage.login(username,password)
    const welcomeText=page.locator('#nameofuser')
    await expect(welcomeText).toBeVisible()
    await expect(welcomeText).toHaveText('Welcome varnapk3')
})
test('Login using Invalid Username and Valid Password', async({page})=>{
    
     page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toBe('User does not exist.');
        await dialog.accept();
    })

    const demoprojectsignuppage = new DemoProjectSignupPage(page)
    await demoprojectsignuppage.goto()

    const userCredForInvalidUsernameValidPassword=credentialsList.invalidlogincredentials[0]
    const username = userCredForInvalidUsernameValidPassword.username
    const password= userCredForInvalidUsernameValidPassword.password
    const demoprojectloginpage= new DemoProjectLoginPage(page)
    await demoprojectloginpage.login(username,password)

})
test('Login using Valid Username and Invalid Password', async({page})=>{
    
     page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toBe('Wrong password.');
        await dialog.accept();
    })

    const demoprojectsignuppage = new DemoProjectSignupPage(page)
    await demoprojectsignuppage.goto()

    const userCredForValidUsernameInvalidPassword=credentialsList.invalidlogincredentials[1]
    const username = userCredForValidUsernameInvalidPassword.username
    const password= userCredForValidUsernameInvalidPassword.password
    const demoprojectloginpage= new DemoProjectLoginPage(page)
    await demoprojectloginpage.login(username,password)

})
test('Login using Invalid Username and Invalid Password', async({page})=>{
    
     page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toBe('User does not exist.');
        await dialog.accept();
    })

    const demoprojectsignuppage = new DemoProjectSignupPage(page)
    await demoprojectsignuppage.goto()

    const userCredForInvalidUsernameInvalidPassword=credentialsList.invalidlogincredentials[2]
    const username = userCredForInvalidUsernameInvalidPassword.username
    const password= userCredForInvalidUsernameInvalidPassword.password
    const demoprojectloginpage= new DemoProjectLoginPage(page)
    await demoprojectloginpage.login(username,password)
    
})

