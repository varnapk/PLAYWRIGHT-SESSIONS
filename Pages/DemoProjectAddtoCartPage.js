export class DemoProjectAddtocartPage{
    constructor(page){
        this.page=page
        this.phone1=page.locator("//a[text()='Samsung galaxy s6']")
        this.phone1AddtoCart=page.locator("//a[@onclick='addToCart(1)']")
        this.phoneText=page.locator("//a[text()='Phones']")
        this.phone2=page.locator("//a[text()='Nokia lumia 1520']")
        this.phone2AddtoCart=page.locator("//a[@onclick='addToCart(2)']")
        this.cartLink=page.locator('#cartur')
        this.placeOrderButton=page.locator("//button[text()='Place Order']")
        this.nameInPlaceOrder=page.locator('#name')
        this.countryInPlaceOrder=page.locator('#country')
        this.cityInPlaceorder=page.locator('#city')
        this.CreditCardInPlaceOrder=page.locator('#card')
        this.monthInPlaceOrder=page.locator('#month')
        this.yearInPlaceOrder=page.locator('#year')
        this.purchaseButtonInPlaceOrder=page.locator("//button[text()='Purchase']")
        this.monitorText=page.locator("//a[text()='Monitors']")
        this.monitor=page.locator("//a[text()='Apple monitor 24']")
        this.monitorAddtoCart=page.locator("//a[@onclick='addToCart(10)']")

    }
    async addToCartAnyOneProduct(){
        await this.phone1.click()
        await this.phone1AddtoCart.click()
    }
    async addToCartOneProductUnderPhones(){
        await this.phoneText.click()
        await this.phone2.click()
        await this.phone2AddtoCart.click()
    }
    async goToCart(){
        await this.cartLink.click()
    }
    async placeOrder(name,country,city,creditcard,month,year){
        await this.placeOrderButton.click() 
        await this.nameInPlaceOrder.fill(name)
        await this.countryInPlaceOrder.fill(country)
        await this.cityInPlaceorder.fill(city)
        await this.CreditCardInPlaceOrder.fill(creditcard)
        await this.monthInPlaceOrder.fill(month)
        await this.yearInPlaceOrder.fill(year)
        await this.purchaseButtonInPlaceOrder.click()

    }
    async addToCartOneProductUnderMonitors(){
        await this.monitorText.click()
        await this.monitor.click()
        await this.monitorAddtoCart.click()
    }
}