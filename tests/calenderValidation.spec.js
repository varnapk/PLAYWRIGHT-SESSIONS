import{test,expect} from '@playwright/test'
test('Calender validation', async({page})=>{
    await page.goto('https://selenium.qabible.in/date-picker.php')
    const calendarfield= page.locator('#single-input-field')
    await calendarfield.click()
    const targetyear= 1997
    await expect(page.locator('.datepicker-dropdown')).toBeVisible()
//  Assertion - waits and checks that the calendar popup .datepicker-dropdown is actually visible before continuing. Fails the test if it doesn’t show up.
    const monthandyeartitle=page.locator('.datepicker-switch:visible')
//Creates a locator for the title in the calendar header. .datepicker-switch shows "May 2024" at first. :visible picks only the one you can see.
    await monthandyeartitle.click()
    await monthandyeartitle.click()
    let attempts=10
//Sets a safety counter. You’ll loop max 10 times so the test doesn’t run forever if something breaks.
    while(attempts--){
//Starts a loop. attempts-- runs while attempts > 0, and decreases by 1 each time. Goes 10, 9, 8... 1.
        const decades=await monthandyeartitle.innerText()
//Gets the visible text of the title. After 2 clicks you’re in decade view, so this will be something like "2020-2029".
//innerText method is used to get the visible text on the screen
    const startyear=parseInt(decades.split('-')[0].trim())
//decades.split('-') → ["2020", "2029"]
// [0] → "2020".
// trim() → removes spaces → "2020"
// parseInt() → converts string to number → 2020
    if(targetyear>=startyear && targetyear<=startyear+9)
        break
    await page.locator('.prev:visible').click()
    }
    await page.locator('.year:visible').filter({hasText:'1997'}).click()
//used to filter elements based on the visible text.
    await page.locator('.month:visible').filter({hasText:'feb'}).click()
    await page.locator('.day:visible').filter({hasText:/^9$/}).click()
   // await page.locator('.day:visible').filter({hasText:'28'}).nth(1).click()
    const showdate= await page.locator('#button-one')
    await showdate.click()
})
//Allure report
//jdk 21 version
