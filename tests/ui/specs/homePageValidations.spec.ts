import { test, expect } from '@playwright/test';
import { LokaliseHomePage } from '../pages/home.page';
import { SignupPage } from '../pages/signup.page';

test('try free and signup page validation', async ({ page }) => {
  const lokaliseHomePage = new LokaliseHomePage(page);
  const signupPage = new SignupPage(page);
  await lokaliseHomePage.goto();
  await lokaliseHomePage.acceptCookies();
  await lokaliseHomePage.clicktryFreeButton();
  await signupPage.clickSignupButton();
});