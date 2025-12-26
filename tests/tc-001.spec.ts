import { test, expect } from '@playwright/test';

test('tc-001', async ({ page }) => {
  await page.goto('https://abhigyank.github.io/To-Do-List/');
  await page.locator('#new-task').click();
  await page.locator('#new-task').fill('Test');
  await page.getByRole('button', { name: 'add' }).click();
  await page.getByRole('link', { name: 'To-Do Tasks' }).click();
  
  await expect(page.locator('#todo.is-active #incomplete-tasks #text-1')).toHaveText('Test');
});