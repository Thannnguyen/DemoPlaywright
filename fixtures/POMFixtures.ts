import {test as baseTest} from "@playwright/test"
import {LoginPage} from "../pages/LoginPage"
import { HomePage } from "../pages/HomePage";
import { CartPage } from "../pages/CartPage";

type myPomFixtures = {
    loginPage: LoginPage;
    homePage: HomePage;
    cartPage: CartPage;

}

export const test = baseTest.extend<myPomFixtures>({
    loginPage: async({page}, use)=>{
        const loginPage = new LoginPage(page);
        await use(loginPage);

    },
    homePage: async({page}, use)=>{
        const homePage = new HomePage(page);
        await use(homePage);

    },
    cartPage: async({page}, use)=>{
        const cartPage = new CartPage(page);
        await use(cartPage);

    }
})