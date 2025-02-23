import {test, expect} from '@playwright/test';
import exp from 'constants';


test.only('Browser Context Playwright Test', async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator("#username");
    const passWord = page.locator("#password");
    const signInBtn = page.locator("#signInBtn");
    const productName = page.locator(".card-title a");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await userName.fill("rahulshettyacademy");
    await passWord.fill("learning");
    await signInBtn.click();
    const message = page.locator("[style*='none']"); //message: Incorrect username/password.
    console.log(await message.textContent());
    await expect(message).toContainText("Incorrect");

    console.log(await page.locator(".card-title a").nth(1).textContent());//get 2th element in list
    //one more method
    // console.log(await page.locator(".card-title a").first().textContent()); //get first element in list
    const allTitles = await productName.allTextContents();  
    console.log(allTitles);



});

test('Page Playwright Test', async ({page})=>{
    await page.goto("https://google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");


});