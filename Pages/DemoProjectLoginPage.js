export class DemoProjectLoginPage{
    constructor(page){
        this.page=page
        this.loginButton=page.locator('#login2')
        this.loginUsername=page.locator('#loginusername')
        this.loginPassword=page.locator('#loginpassword')
        this.loginButton=page.locator("//button[@onclick='logIn()']")
    }
    async login(usernameValue,passwordValue){
        await this.page.locator('#login2').click()
        await this.loginUsername.fill(usernameValue)
        await this.loginPassword.fill(passwordValue)
        await this.loginButton.click()
    }

}