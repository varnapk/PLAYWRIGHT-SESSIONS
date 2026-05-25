import {test, expect} from '@playwright/test';
import { DemoProjectSignupPage } from '../Pages/DemoProjectSignupPage';
const credentialsList = require('../utils/demoprojecttestdata.json');


test('Demoproject Signup submission', async({page}) => {
const usernamevalue= credentialsList.signupcredentials.username
const passwordvalue= credentialsList.signupcredentials.password
        test.setTimeout(60000);
    const demoprojectsignuppage = new DemoProjectSignupPage(page);
    page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toBe('Sign up successful.');
        await dialog.accept();
    })
    await demoprojectsignuppage.goto();
    await demoprojectsignuppage.signinbuttonClick();
    await demoprojectsignuppage.signupFormFilling(usernamevalue,passwordvalue);
    await demoprojectsignuppage.signupFormSubmission()
})
test('DemoProject Signup Cancel',async({page})=>{
    const demoprojectsignuppage = new DemoProjectSignupPage(page);
    await demoprojectsignuppage.goto();
    await demoprojectsignuppage.signupFormCancel()

})