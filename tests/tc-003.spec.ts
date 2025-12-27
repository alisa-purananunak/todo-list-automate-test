import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/To-Do-List/');
});

test('tc-003', async ({ page }) => {
  // Add a new task
  await page.locator('#new-task').click();
  await page.locator('#new-task').fill('Test');
  await page.getByRole('button', { name: 'add' }).click();

  // Remove todo task by deleting it
  await page.getByRole('link', { name: 'To-Do Tasks' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();

  // Verify the task is deleted, not present in To-Do tasks
  await expect(page.locator('#incomplete-tasks li')).toHaveCount(0);

  // Verify the task is deleted, not present in Completed tasks
  await page.getByRole('link', { name: 'Completed' }).click();
  await expect(page.locator('#completed-tasks .mdl-list')).toHaveCount(0);
});