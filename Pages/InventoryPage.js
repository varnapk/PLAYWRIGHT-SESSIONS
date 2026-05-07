export class InventoryPage{
    constructor(page){
        this.page=page
        this.addtocartbutton=page.locator('#add-to-cart-sauce-labs-backpack')
    }
    async addcart(){
        await this.addtocartbutton.click()
        return this
    }
}