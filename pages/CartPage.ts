import { Locator, Page } from "@playwright/test";

export class CartPage{
    readonly page: Page;
    readonly backPackItemLink: Locator;
    readonly 



    constructor(page: Page){
        this.page = page;
        this.backPackItemLink = page.locator("//div[@class='cart_item_label']//div[text()='Sauce Labs Backpack']");
    }



}