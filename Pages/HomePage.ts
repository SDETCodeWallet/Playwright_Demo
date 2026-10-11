import { page } from "../steps/hooks";

export class HomePage {

    private loginLink: string = "//a[@href='/login']";

    private productsLink: string = "//a[@href='/products']";

    private cartLink: string = "//a[@href='/view_cart']";

    private contactUsLink: string = "//a[@href='/contact_us']";

    
    public async clickonLink(linkName: string) {
        if (linkName.toLowerCase().includes("login")) {
            await page.locator(this.loginLink).click();
        } else if (linkName.toLowerCase().includes("productLink")) {
            await page.locator(this.productsLink).click();
        } else if (linkName.toLowerCase().includes("cartLink")) {
            await page.locator(this.cartLink).click()
        } else if (linkName.toLowerCase().includes("contactUs")) {
            await page.locator(this.contactUsLink).click();
        }
    }





}