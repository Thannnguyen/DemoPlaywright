import {test, expect,} from "../fixtures/MyHooksFixture"
test('Add/remove/from cart verification', async({page, loginlogoutfixture})=>{
    //add and remove from cart
    // await page.getByText("Sauce Labs Backpack").click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator("//span[@class='shopping_cart_badge']");


})

test("Test record", async({page})=>{
    await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
})