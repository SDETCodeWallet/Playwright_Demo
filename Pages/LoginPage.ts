import { page } from "../steps/hooks";

export class LoginPage{

    private userName: string = "//input[@placeholder='Name']"
    private email : string = "//input[@data-qa='signup-email']"
    private signUpBtn: string = "//button[text()='Signup']"

    public async createNewUser(userName: string, email: string){
        await page.locator(this.userName).fill(userName)
        await page.locator(this.email).fill(email)
        await page.locator(this.signUpBtn).click();
    }



}