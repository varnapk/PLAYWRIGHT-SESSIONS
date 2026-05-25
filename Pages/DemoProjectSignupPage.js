export class DemoProjectSignupPage {
  constructor(page) {
    this.page = page;
    //this.signupbutton = page.locator("#signin2");
    this.username = page.locator("#sign-username");
    this.password = page.locator("#sign-password");
    this.signupbutton = page.locator("//button[@onclick='register()']");
    this.closebutton = page.locator("//button[text()='Close']").nth(1);
  }
  async goto() {
    await this.page.goto('https://www.demoblaze.com/');
  }
  async signinbuttonClick(){
    await this.page.locator('#signin2').click();
  }
  async signupFormFilling(username, password) {
    await this.username.fill(username);
    await this.password.fill(password)
  }
  async signupFormSubmission(){
    await this.signupbutton.click();
  }
  async signupFormCancel(){
    await this.closebutton.click()
  }

}
