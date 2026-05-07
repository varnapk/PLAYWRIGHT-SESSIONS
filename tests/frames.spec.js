import { test,expect } from "@playwright/test";
test.only('frames',async({page})=>{
    await page.goto('https://demoqa.com/frames')
    //a webpage inside another webpage is called frame
    // multiple frames can be present in single page
    //each frame contains individual html document. 
    const sampleframe=page.frameLocator("#frame1")
    console.log(await sampleframe.locator("#sampleHeading").textContent())
})