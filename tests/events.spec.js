import { test, expect } from "@playwright/test";
test('Mouse Events',async({page})=>{
    await page.goto('https://selenium.qabible.in/')
    //MouseEvent: Hover
    const mousehover=page.locator('#others').hover()
    await page.goto('https://selenium.qabible.in/drag-drop.php')
    //MouseEvent:RightClick
    //const rightclick= page.locator("//span[text()='Draggable n°1']").click({button:'right'})
    //MouseEvent:DoubleClick
   // const doubleclick= page.locator("//span[text()='Draggable n°2']").dblclick()
   //Mouse Event: Drag and Drop
    const gragandDrop=await page.locator("//span[text()='Draggable n°1']").dragTo(page.locator('#mydropzone'))
}
)
