import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { page } from "./hooks";
import { HomePage } from "../Pages/HomePage";
import { LoginPage } from "../Pages/LoginPage";
import { signUp } from "../Pages/SignUp";

setDefaultTimeout(50000);

let homePage= new HomePage();

let loginPage= new LoginPage();

let signup= new signUp();

Given('When I launch the application', async function () {
   await page.locator("//p[text()='Consent']").click();
});

When('I enter the user Name', async function () {
   await homePage.clickonLink("login");
   await loginPage.createNewUser("Shubha", "sgoyal202@gmail.com")
   await signup.enterUserFormDetails();
});

Then('User Should login successfully', async function () {
    
});

