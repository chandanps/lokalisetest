import { expect, type Locator, type Page } from '@playwright/test';

const baseUrl: string = "https://lokalise.com/";

export class LokaliseHomePage {
  readonly page: Page;
  readonly productMenu: Locator;
  readonly mobileAppTranslationLink: Locator;
  readonly acceptCookiesButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productMenu = page.getByText('Product', { exact: true });
    this.mobileAppTranslationLink = page.getByRole('link', { name: 'Mobile app translation' });
    this.acceptCookiesButton = page.getByRole('button', { name: 'Accept all cookies' });
  }

  async goto() {
    await this.page.goto(baseUrl);
  }

  async acceptCookies() {
    await this.acceptCookiesButton.first().click();
  }

  async selectMobileAppTranslation() {
    expect(this.productMenu).toBeVisible();
    await this.productMenu.first().click();
    expect(this.mobileAppTranslationLink).toBeVisible();
    await this.mobileAppTranslationLink.click();
  }
}