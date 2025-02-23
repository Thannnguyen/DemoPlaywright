import { Locator, Page } from "@playwright/test";

export class HomePage{
    readonly page : Page;
    readonly homePageHeading: Locator;
    readonly backPackAddToCartButton: Locator;
    readonly backPackRemoveButton: Locator;
    readonly cartIcon: Locator;


    constructor(page: Page){
        this.page = page;
        this.homePageHeading=page.getByText("Swag Labs");
        this.backPackAddToCartButton = page.locator("#add-to-cart-sauce-labs-backpack");
        this.backPackRemoveButton = page.locator("#remove-sauce-labs-backpack");
        this.cartIcon = page.locator("//span[@class='shopping_cart_badge']");


    }

    async backPackAddToCart(){
        await this.backPackAddToCartButton.click();
    }

    async goToCart(){
        await this.cartIcon.click();

    }



}