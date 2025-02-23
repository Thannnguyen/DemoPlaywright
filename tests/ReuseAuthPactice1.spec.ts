

import { test, expect } from '@playwright/test';

test.beforeEach('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page.getByRole('textbox', { name: 'Username' }).fill('a');
//   await page.getByRole('textbox', { name: 'Username' }).click();
//   await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
//   await page.getByRole('textbox', { name: 'Username' }).press('Tab');
//   await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await expect(page.getByRole('heading')).toContainText('Dashboard');
});

test('test verifycation in page', async ({ page }) => {
  await expect(page.getByRole('heading')).toContainText('Dashboard');
  await page.getByText('My Actions').click();
  await expect(page.locator('#app')).toContainText('My Actions');
  await expect(page.locator('#app')).toContainText('(1) Candidate to Interview');
});