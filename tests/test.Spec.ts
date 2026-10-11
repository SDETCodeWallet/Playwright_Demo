import test, { chromium } from "@playwright/test";

test('Text Box Website', async ()=>{

    const browser= await chromium.launch({headless: false});

    const browser_= await browser.newContext();

    const page = await browser_.newPage();

    await page.goto("https://demoqa.com/text-box")

    await page.getByPlaceholder("Full Name").fill("Shubham")

    await page.getByPlaceholder("name@example.com").fill("sgoyal202@gmail.com")

    await page.getByPlaceholder("Current Address").type("Roorkee Road Chhutmalpur"); 

    await page.locator("//textarea[@id='permanentAddress']").type("Saharanpur Road Chhutmalpur"); 

    await page.getByText("Submit").click();

    await page.pause()

})


test('https://demoqa.com/webtables', async ()=>{

    const browser= await chromium.launch({headless: false});

    const browser_= await browser.newContext();

    const page = await browser_.newPage();

    await page.goto("https://demoqa.com/webtables")

    const alllocators = await page.locator("//tr").all();

    for(let i= 0; i <=await alllocators.length;i++){
        const rows= await alllocators.at(i)
    }

})


test('https://demoqa.com/browser-windows', async ()=>{

    const browser= await chromium.launch({headless: false});

    const browser_= await browser.newContext();

    const page = await browser_.newPage();

    await page.goto("https://demoqa.com/browser-windows")

    await page.locator("//button[text()='New Tab']").click();

    const popup = await page.waitForEvent('popup');

    console.log(await popup.url());

    console.log(await popup.locator("//h1[@id='sampleHeading']").textContent()); 
})

test('https://demoqa.com/New Window', async ()=>{

    const browser= await chromium.launch({headless: false});

    const browser_= await browser.newContext();

    const page = await browser_.newPage();

    await page.goto("https://demoqa.com/browser-windows")

    await page.locator("//button[text()='New Window']").click();

    const popup = await page.waitForEvent('popup');

    console.log(await popup.url());

    console.log(await popup.locator("//h1[@id='sampleHeading']").textContent()); 
})

test('https://demoqa.com/New Window Message', async ()=>{

    const browser= await chromium.launch({headless: false});

    const browser_= await browser.newContext();

    const page = await browser_.newPage();

    await page.goto("https://demoqa.com/browser-windows")

    const popup = await browser_.waitForEvent('page');

    await page.locator("//button[text()='New Window Message']").click();

    console.log(await popup.url());

    console.log(await popup.locator("tbody").textContent()); 
})

test('Alert', async ()=>{

    const browser= await chromium.launch({headless: false});

    const browser_= await browser.newContext();

    const page = await browser_.newPage();

    await page.goto("http://demoqa.com/alerts")

    await page.locator("//button[@id='alertButton']").click();

    const dial= await page.waitForEvent('dialog');

    await dial.accept();


})
