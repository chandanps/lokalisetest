import { type Locator, type Page } from '@playwright/test';

export class SignupPage {
  readonly page: Page;
  readonly signUpButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signUpButton = page.getByRole('button', { name: 'Sign up' });;
  }

  async clickSignupButton() {
    await this.signUpButton.first().click();
  }

}