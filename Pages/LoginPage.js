import { InventoryPage } from "./InventoryPage"

export class LoginPage {
  // 'export' keyword is suing to export all the elements from page class to test class
  constructor(page) {
    this.page=page
    this.username=page.locator('#user-name')
    this.password=page.locator('#password')
    this.loginbutton=page.locator('#login-button')
  }
  async goto(){
    await this.page.goto('https://www.saucedemo.com/')
    return this
  }
  async login(user,pass){
    await this.username.fill(user)
    await this.password.fill(pass)
    await this.loginbutton.click()
    return new InventoryPage(this.page)
  }
}
