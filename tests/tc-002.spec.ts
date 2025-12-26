import { test, expect } from '@playwright/test';

test('tc-002', async ({ page }) => {
  await page.goto('https://abhigyank.github.io/To-Do-List/');
  await page.locator('#new-task').click();
  await page.locator('#new-task').fill('test');
  await page.getByRole('button', { name: 'add' }).click();
  await page.getByRole('link', { name: 'To-Do Tasks' }).click();
  await page.locator('.mdl-checkbox__ripple-container').click();
  await page.getByRole('link', { name: 'Completed' }).click();

  await expect(page.locator('#completed-tasks .mdl-list__item-primary-content:has-text("test")')).toBeVisible();
});