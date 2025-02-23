

import {test, expect} from "../fixtures/TestDataFixtures"

test.beforeEach('test', async ({ page, logindata }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   
    await page.locator("//input[@name='username']").fill(logindata.uname);

    await page.locator("//input[@name='password']").fill(logindata.pw);
    await page.locator("//button[@type='submit']").click();
})


test(`test`, async ({ page, testdata }) => {
  await page.getByRole('link', { name: 'My Info' }).click();
  await page.getByRole('link', { name: 'Time' }).click();
  await page.getByRole('link', { name: 'Recruitment' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill(testdata.fname);
  await page.getByRole('textbox', { name: 'First Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Middle Name' }).fill(testdata.mname);
  await page.getByRole('textbox', { name: 'Middle Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last Name' }).fill(testdata.lname);
  await page.getByRole('textbox', { name: 'Last Name' }).press('Tab');
  await page.getByRole('option', { name: 'Junior Account Assistant' }).click();
  await page.getByRole('textbox', { name: 'Type here' }).first().click();
  await page.getByRole('textbox', { name: 'Type here' }).first().fill(testdata.email);
  await page.getByRole('textbox', { name: 'Type here' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Type here' }).nth(1).fill("0989867565");
  await page.getByRole('button', { name: 'Save' }).click();
});