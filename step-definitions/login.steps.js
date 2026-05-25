import {Given,When,Then,setDefaultTimeout} from '@cucumber/cucumber'//importing the necessary modules from cucumber, AND function generally does not exist in cucumber, but we can use multiple Given, When, Then steps to achieve the same functionality.
//setDefaultTimeout: Used to increase cucumber waiting time, which is useful for actions that may take longer to complete, such as loading a page or waiting for an element to appear.
import{chromium} from 'playwright'//importing the chromium module from playwright, which allows us to automate browser actions in a Chromium-based browser (like Google Chrome or Microsoft Edge).
import assert from 'assert'//importing the assert module, which provides a set of assertion functions for verifying conditions in tests. This is used to check if the expected outcomes match the actual results during testing.
    setDefaultTimeout(60000)
    let browser
//declaring a variable to hold the browser instance that will be used throughout the test steps.
    let page
//declaring variables to hold the browser and page instances that will be used throughout the test steps.
//browser and page is declared outside function to make them accessible through out the step definition files, and also to avoid re-declaring them in each step definition, which can lead to cleaner and more efficient code.
    Given('User is on the login page',async function(){
//defining a step that sets up the initial condition for the test, which is that the user is on the login page.
        browser=await chromium.launch({headless:false})
//launching a new instance of the Chromium browser in non-headless mode, which means the browser will be visible during the test execution.if headless is set to true, the browser will run in the background without a user interface, which can be faster but may not be suitable for all testing scenarios, especially when visual verification is needed.
        const context=await browser.newContext()
//creating a new browser context, which is an isolated environment within the browser that allows for separate sessions, cookies, and cache. This is useful for running multiple tests in parallel without interference.
        page=await context.newPage()
//creating a new page (or tab) in the browser instance, which will be used to navigate to the login page and perform actions on it.
        await page.goto('https://www.saucedemo.com/')
    })
//navigating to the specified URL, which is the login page of the application being tested.
    When('User enters valid username and password', async function() {
        await page.fill('#user-name', 'standard_user')
        await page.fill('#password', 'secret_sauce')
    })
    When('User enters invalid username and password', async function() {
        await page.fill('#user-name', 'invalid_user')
        await page.fill('#password', 'invalid_password')
    })
    When('User clicks on the login button', async function() {
        await page.click('#login-button')
    })
    Then('User should be redirected to the home page', async function() {
        const title=await page.title()
        assert.ok(title.includes('Swag Labs'))
        await browser.close()
    })
    Then('User should not be redirected to the home page', async function(){
        const errorMessage=await page.locator("//h3[@data-test='error']").textContent()
        assert.ok(errorMessage.includes('Epic sadface: Username and password do not match any user in this service'))
        await browser.close()
})


