import { LoginPage} from "../Pages/LoginPage";
import { InventoryPage } from "../Pages/InventoryPage";
import { test, expect } from "@playwright/test";
test ('Ading One Item to Cart',async({page})=>{
    const loginpage= new LoginPage(page)
    await loginpage.goto()
    await loginpage.login('standard_user','secret_sauce')
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    const inventorypage= new InventoryPage(page)
    await inventorypage.addcart()
})
