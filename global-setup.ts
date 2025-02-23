import { chromium, expect} from "@playwright/test";
import { normalize } from "path";


async function globalSetup() {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();


    //login
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      await page.getByRole('textbox', { name: 'Username' }).fill('a');
      await page.getByRole('textbox', { name: 'Username' }).click();
      await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
      await page.getByRole('textbox', { name: 'Username' }).press('Tab');
      await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
      await page.getByRole('button', { name: 'Login' }).click();
      await expect(page.getByRole('heading')).toContainText('Dashboard');
    
      await page.context().storageState({path: "./playwright/.auth/auth.json"})
}

export default globalSetup;