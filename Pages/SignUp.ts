import { page } from "../steps/hooks";

export class signUp{

    private genderCheckBox= "//input[@id='id_gender1']"
    private password= "//input[@id='password']"
    private daysOption = "//select[@id='days']"
    private monthsOption = "//select[@id='months']"
    private yearsOption = "//select[@id='years']"

    public async enterUserFormDetails(){
        await page.locator(this.genderCheckBox).click();
        await page.locator(this.password).type("TestVaue");
        await page.locator(this.daysOption).selectOption("5")
        await page.locator(this.monthsOption).selectOption("4")
        await page.locator(this.yearsOption).selectOption("2019")
    }
}