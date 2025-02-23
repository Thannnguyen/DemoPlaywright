import {test, expect} from '@playwright/test';
import exp from 'constants';

test.describe("Test group", ()=>{
    test('Browser Context Playwright Test 0', async ({page})=>{
        await page.goto("https://rahulshettyacademy.com/client");
        await page.locator("#userEmail").fill("anshika@gmail.com");
        await page.locator("#userPassword").fill("Iamking@000");
        await page.locator("[value='Login']").click();
        
        //handle wait dynamically
        await page.locator(".card-body b").last().waitFor();
        const titles = await page.locator(".card-body b").allTextContents();
        console.log(titles);
    
    });
})

test.beforeAll("before all", ()=>{
    console.log("before all");
})

test.beforeEach("before each", ()=>{
    console.log("before each");
})


test('Browser Context Playwright Test 1', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").fill("Iamking@000");
    await page.locator("[value='Login']").click();
    
    //handle wait dynamically
    await page.locator(".card-body b").last().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);

});

test('Browser Context Playwright Test 2', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").fill("Iamking@000");
    await page.locator("[value='Login']").click();
    
    //handle wait dynamically
    await page.locator(".card-body b").last().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);

});



