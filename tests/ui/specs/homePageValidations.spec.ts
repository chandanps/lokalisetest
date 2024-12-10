import { test, expect } from '@playwright/test';
import { LokaliseHomePage } from '../pages/home.page';

test('test app translate', async ({ page }) => {
  const lokaliseHomePage = new LokaliseHomePage(page);
  lokaliseHomePage.goto();
  lokaliseHomePage.acceptCookies();
  lokaliseHomePage.selectMobileAppTranslation();
  await expect(page.getByRole('link', { name: 'Sign up with email' })).toBeVisible();
});