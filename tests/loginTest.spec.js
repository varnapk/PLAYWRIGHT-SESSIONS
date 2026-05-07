import{getData} from '../utils/excelreader'
//ES6 import. Pulls the getData function you exported from excelreader.js
import { LoginPage } from '../Pages/LoginPage'
//Imports your Page Object class. This LoginPage has methods like goto() and login() that wrap the actual Playwright actions.
import {test,expect } from '@playwright/test'
const credential= getData()
//Calls your Excel function. credential now holds the array of objects from Excel.
//Example: [{Username: 'standard_user', Password: 'secret_sauce'}, {Username: 'user2', Password: 'pass2'}]
test('login using valid credentials', async({page})=>{
   for(const data of credential) {
//Loops through each row from Excel. First iteration data = {Username: 'standard_user', Password: 'secret_sauce'}. This is data-driven testing - same test runs for multiple inputs.
   const loginpage=new LoginPage(page)
// Creates an object of your POM class. You pass the Playwright page into the constructor so all methods inside LoginPage can use that same browser tab
   await loginpage.goto()
//Calls the goto() method from your LoginPage class. Usually this does await this.page.goto('https://www.saucedemo.com'). await = wait for page to load before next step.
   //await loginpage.login('standard_user','secret_sauce')
   await loginpage.login(data.Username, data.Password)
//Calls login() method from POM. Passes Username and Password from current Excel row.
   //const login= await loginpage.goto().login('standard_user','secret_sauce')
   await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
   }
})
