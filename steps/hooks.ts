import { After, Before, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "@playwright/test";

let browser: Browser
let page: Page
let context: BrowserContext

setDefaultTimeout(10000);

Before(async function(){
    browser =  await chromium.launch({headless: true})
    context= await browser.newContext();
    page= await context.newPage(); 
    await page.goto("https://www.automationexercise.com/");
})

After(async function(){
    await page.close(); 
    await context.close();
    await browser.close();
})

export {browser, page, context}