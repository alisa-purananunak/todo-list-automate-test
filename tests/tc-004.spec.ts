import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/To-Do-List/');
});

test('tc-004', async ({ page }) => {
  await page.locator('#new-task').click();
  await page.locator('#new-task').fill('Test');
  await page.getByRole('button', { name: 'add' }).click();
  await page.getByRole('link', { name: 'To-Do Tasks' }).click();
  await page.locator('.mdl-checkbox__ripple-container').click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();

  await expect(page.locator('#completed-tasks li')).toHaveCount(0);
});