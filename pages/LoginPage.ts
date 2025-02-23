import { Locator, Page } from "@playwright/test";

export class LoginPage{
    readonly page: Page;
    readonly usernameTextBox: Locator;
    readonly passwordTextBox: Locator;
    readonly loginButton: Locator;



    constructor(page: Page){
        this.page = page;
        this.usernameTextBox = page.locator("#user-name");
        this.passwordTextBox = page.locator("#password");
        this.loginButton = page.locator("#login-button");
    
    }

    async openApplication(){
        await this.page.goto("https://www.saucedemo.com/");
    }

    async login(username: string, password: string){
        await this.usernameTextBox.fill(username);
        await this.passwordTextBox.fill(password);
        await this.loginButton.click();
    }






}