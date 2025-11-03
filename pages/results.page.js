export class ResultsPage {
    constructor(page) {
        this.page = page;
        this.itemsContainer = page.locator('#card-list');
        this.itemCards = this.itemsContainer.locator('.hs_bu.search-item-card-wrapper-gallery');
    }

    async getNumberOfItems() {
        const count = await this.itemCards.count();
        console.log(`Number of items displayed on the first page: ${count}`);
        return count;
    }
}
