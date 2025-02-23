import {test as baseTest} from "@playwright/test";

type MyHooksFixtures={
    loginlogoutfixture: any;
}

export const test = baseTest.extend<MyHooksFixtures>({
    loginlogoutfixture: async({page}, use)=>{
        const loginlogoutfixture = undefined;
        //login (same BeforeEach) => same setup and teardown
        await page.goto("https://www.saucedemo.com/");
        await page.locator("#user-name").fill("standard_user");
        await page.locator("#password").fill("secret_sauce");
        await page.locator("#login-button").click();

        await use(loginlogoutfixture);

        //logout (same AfterHook)
        await page.getByRole('button', {name: 'Open Menu'}).click();
        await page.getByRole('link', {name: 'Logout'}).click();

    }
})
export {expect} from "@playwright/test"