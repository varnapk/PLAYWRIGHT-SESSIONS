export class DemoProjectLogoutPage{
    constructor(page){
        this.page=page
        this.logoutButton=page.locator("//a[text()='Log out']")
    }
    async logout(){
        this.logoutButton.click()
    }
}