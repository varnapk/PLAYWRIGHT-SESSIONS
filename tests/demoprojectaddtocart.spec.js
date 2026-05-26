import {test, expect} from '@playwright/test';
import { DemoProjectSignupPage } from '../Pages/DemoProjectSignupPage';
import { DemoProjectLoginPage } from '../Pages/DemoProjectLoginPage';
import { DemoProjectAddtocartPage } from '../Pages/DemoProjectAddtoCartPage';
const credentialsList = require('../utils/demoprojecttestdata.json');

test('Select One Product', async({page})=>{
    
    const demoprojectsignuppage= new DemoProjectSignupPage(page)
    await demoprojectsignuppage.goto()

    const demoprojectloginpage= new DemoProjectLoginPage(page)
    const username=credentialsList.validlogincredentials.username
    const password= credentialsList.validlogincredentials.password
    await demoprojectloginpage.login(username,password)

    page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toBe('Product added.');
        await dialog.accept();
    })
    const demoprojectaddtocart= new DemoProjectAddtocartPage(page)
    await demoprojectaddtocart.addToCartAnyOneProduct()

})

test('Select One Product Under Phones', async({page})=>{
    test.setTimeout(60000)
    
    const demoprojectsignuppage= new DemoProjectSignupPage(page)
    await demoprojectsignuppage.goto()

    const demoprojectloginpage= new DemoProjectLoginPage(page)
    const username=credentialsList.validlogincredentials.username
    const password= credentialsList.validlogincredentials.password
    await demoprojectloginpage.login(username,password)

    page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toBe('Product added.');
        await dialog.accept();
    })
    const demoprojectaddtocart= new DemoProjectAddtocartPage(page)
    await demoprojectaddtocart.addToCartOneProductUnderPhones()
    await demoprojectaddtocart.goToCart()
    const name=credentialsList.placeorderDetails.name
    const country=credentialsList.placeorderDetails.country
    const city=credentialsList.placeorderDetails.city
    const creditcard=credentialsList.placeorderDetails.creditcard
    const month=credentialsList.placeorderDetails.month
    const year=credentialsList.placeorderDetails.year
    await demoprojectaddtocart.placeOrder(name,country,city,creditcard,month,year)
    await expect("//h2[text()='Thank you for your purchase!']").toContain('Thank you for your purchase!')
})
test('Select One Product Under Monitors', async({page})=>{
    test.setTimeout(60000)
    
    const demoprojectsignuppage= new DemoProjectSignupPage(page)
    await demoprojectsignuppage.goto()

    const demoprojectloginpage= new DemoProjectLoginPage(page)
    const username=credentialsList.validlogincredentials.username
    const password= credentialsList.validlogincredentials.password
    await demoprojectloginpage.login(username,password)

    page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toBe('Product added.');
        await dialog.accept();
    })
    const demoprojectaddtocart= new DemoProjectAddtocartPage(page)
    await demoprojectaddtocart.addToCartOneProductUnderMonitors()
    await demoprojectaddtocart.goToCart()
    const name=credentialsList.placeorderDetails.name
    const country=credentialsList.placeorderDetails.country
    const city=credentialsList.placeorderDetails.city
    const creditcard=credentialsList.placeorderDetails.creditcard
    const month=credentialsList.placeorderDetails.month
    const year=credentialsList.placeorderDetails.year
    await demoprojectaddtocart.placeOrder(name,country,city,creditcard,month,year)
    await expect("//h2[text()='Thank you for your purchase!']").toContain('Thank you for your purchase!')
})
