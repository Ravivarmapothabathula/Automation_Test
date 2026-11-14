// @ts-check
import { test, expect } from '@playwright/test';

test('CCRM Tool', async ({ page }) => {
  await page.goto('https://erika-int.azurewebsites.net/');
  await page.getByLabel('Email').fill('pothabathulav@emids.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Password').fill(process.env.APP_PASSWORD ?? '');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('checkbox', { name: "Don't show this again" }).check();
  const yesButton = page.getByRole('button', { name: 'Yes' });
  //await yesButton.waitFor({ state: 'visible', timeout: 30000 });
  await yesButton.click();
  console.log('Login submitted successfully');
  await page.waitForTimeout(10000);
  console.log('Login submitted successfully');
  await page.goto('https://erika-int.azurewebsites.net/Customer-Contract-Review/dashboard', {
    waitUntil: 'load'
  });
  console.log('Current URL:', page.url());

  console.log('Page title:', await page.title());
  console.log('Page content:', await page.locator('body').innerText());
  await page.getByText('New Contract').click();
  await page.locator('select[name="documentId"]').selectOption('2: 5');
  await page.getByRole('textbox', { name: 'Enter CounterParty Name' }).fill('Test1234');
  await page.locator('ng-select').filter({ hasText: 'Search Entity' }).getByRole('textbox').click();
  await page.getByText('emids', { exact: true }).click();
  await page.locator('ng-select').filter({ hasText: 'Search Account' }).getByRole('textbox').click();
  await page.getByRole('option', { name: 'Adapt Health' }).click();
  await page.locator('ng-select').filter({ hasText: 'Search Project' }).getByRole('textbox').click();
  await page.getByRole('option', { name: 'ADAPT HEALTH - Digital Transformation - LC' }).click();
  await page.locator('input[name="startDate"]').click();
  await page.getByText('1').first().click();
  await page.locator('input[name="endDate"]').click();
  await page.getByText('30').click();
  await page.getByRole('textbox', { name: 'Group Mail Id' }).click();
  await page.getByRole('textbox', { name: 'Group Mail Id' }).fill('varma@gmail.com');
  await page.getByRole('textbox', { name: 'Comments' }).click();
  await page.getByRole('textbox', { name: 'Comments' }).fill('Test');
  await page.getByText('Emids Template').click();
  await page.getByRole('radio', { name: 'Emids Template' }).check();
  await page.getByRole('button', { name: 'SUBMIT' }).click();
  await page.goto('https://erika-int.azurewebsites.net/Customer-Contract-Review/dashboard');
  await page.pause();








});










