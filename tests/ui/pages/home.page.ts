import { expect, type Locator, type Page } from '@playwright/test';

const baseUrl: string = "https://lokalise.com/";

export class LokaliseHomePage {
  readonly page: Page;
  readonly tryFreeButton: Locator;
  readonly acceptCookiesButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.tryFreeButton = page.locator('.btn-primary.btn-small');
    this.acceptCookiesButton = page.getByRole('button', { name: 'Accept all cookies' });
  }

  async goto() {
    await this.page.goto(baseUrl);
  }

  async acceptCookies() {
    await this.acceptCookiesButton.first().click();
  }

  async clicktryFreeButton() {
    expect(this.tryFreeButton).toBeVisible();
    await this.tryFreeButton.first().click();
  }
  
}