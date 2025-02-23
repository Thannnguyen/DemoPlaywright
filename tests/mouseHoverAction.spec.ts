import {test} from "@playwright/test"
test("mouse hover action", async({page})=>{
    await page.goto("https://demo.opencart.com/");
    await page.locator("//a[text()='Components']").hover({force:true});
    await page.getByRole('link', { name: 'Show All Components' }).click();

})