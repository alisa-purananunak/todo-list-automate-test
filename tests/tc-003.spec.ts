import { test, expect } from '@playwright/test';

test('tc-003', async ({ page }) => {
  await page.goto('https://abhigyank.github.io/To-Do-List/');
  await page.locator('#new-task').click();
  await page.locator('#new-task').fill('Test');
  await page.getByRole('button', { name: 'add' }).click();
  await page.getByRole('link', { name: 'To-Do Tasks' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();

  await expect(page.locator('#completed-tasks .mdl-list')).toHaveCount(0);
});