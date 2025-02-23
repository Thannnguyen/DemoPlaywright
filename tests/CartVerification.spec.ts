import { expect } from "@playwright/test";
// import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { CartPage } from "../pages/CartPage";
import { describe } from "node:test";

import {test} from "../fixtures/POMFixtures"

test("Verification of Cart", async({page, loginPage, homePage, cartPage})=>{
    // const loginPage = new LoginPage(page);
    await loginPage.openApplication();
    // await loginPage.login(process.env.username, process.env.password);
    await loginPage.login("standard_user", "secret_sauce");
    //home page
    // const homePage = new HomePage(page);
    await expect(homePage.homePageHeading).toHaveText("Swag Labs");
    await homePage.backPackAddToCart();
    await expect(homePage.cartIcon).toHaveText("1");
    await expect(homePage.backPackRemoveButton).toBeVisible();
    await homePage.goToCart();

    //Cart page
    // const cartPage = new CartPage(page);
    await expect(cartPage.backPackItemLink).toBeVisible();



})