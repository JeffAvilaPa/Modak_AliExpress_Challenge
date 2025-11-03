import { expect } from '@playwright/test';

export class HomePage {
    constructor(page) {
        this.page = page;
        this.searchInput = page.locator('#search-words');
    }

    async goto() {
        await this.page.goto('https://www.aliexpress.com');
    }

    async searchForItem(item) {
        await this.searchInput.fill(item);
        await this.searchInput.press('Enter');
        await this.page.waitForLoadState('networkidle');
    }
}