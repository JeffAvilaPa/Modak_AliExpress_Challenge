import { expect } from '@playwright/test';

export class ResultsPage {
    constructor(page) {
        this.page = page;
        this.items = page.locator('#card-list');
    }

    async isSecondItemAvailable() {
        const secondItem = this.items.nth(1);
        return await secondItem.isVisible();
    }
}