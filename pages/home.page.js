import { expect } from '@playwright/test';

export class HomePage {
    constructor(page) {
        this.page = page;
        this.searchInput = page.locator('#search-words');
    }

    async goto() {
        console.log('Navigating to AliExpress home page...');
        await this.page.goto('https://www.aliexpress.com');
        await this.page.waitForLoadState('networkidle');
        console.log('Home page loaded successfully.');
    }

    async searchForItem(item) {
        console.log(`Searching for item: "${item}"`);
        await this.searchInput.fill(item);
        await this.searchInput.press('Enter');
        await this.page.waitForLoadState('networkidle');
        console.log('Search results loaded.');
    }
}