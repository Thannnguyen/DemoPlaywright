import { test, expect } from '@playwright/test';
import dataArray from "../testdata/testdata1.json";
import logindata from "../testdata/loginData.json";

test.beforeEach('test', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("//input[@name='username']").waitFor();
   
    await page.locator("//input[@name='username']").fill(logindata.username);

    await page.locator("//input[@name='password']").fill(logindata.password);
    await page.locator("//button[@type='submit']").click();
})

dataArray.forEach((data) => {
test(`test ${data.fname}`, async ({ page }) => {
  
  await page.getByRole('link', { name: 'My Info' }).click();
  await page.getByRole('link', { name: 'Time' }).click();
  await page.getByRole('link', { name: 'Recruitment' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill(data.fname);
  await page.getByRole('textbox', { name: 'First Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Middle Name' }).fill(data.mname);
  await page.getByRole('textbox', { name: 'Middle Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last Name' }).fill(data.lname);
  await page.getByRole('textbox', { name: 'Last Name' }).press('Tab');
  await page.getByRole('option', { name: 'Junior Account Assistant' }).click();
  await page.getByRole('textbox', { name: 'Type here' }).first().click();
  await page.getByRole('textbox', { name: 'Type here' }).first().fill(data.email);
  await page.getByRole('textbox', { name: 'Type here' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Type here' }).nth(1).fill(data.phoneNumber);
  await page.getByRole('button', { name: 'Save' }).click();
})
});