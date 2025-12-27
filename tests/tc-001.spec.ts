import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/To-Do-List/');
});

test('tc-001', async ({ page }) => {
  await page.locator('#new-task').click();
  await page.locator('#new-task').fill('Test');
  await page.getByRole('button', { name: 'add' }).click();
  await page.getByRole('link', { name: 'To-Do Tasks' }).click();
  
  await expect(page.locator('#todo.is-active #incomplete-tasks').getByText('Test')).toBeVisible();
});