import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { ResultsPage } from '../pages/results.page';

test('verify search results are not empty', async ({ page }) => {
    const homePage = new HomePage(page);
    const resultsPage = new ResultsPage(page);


    await homePage.goto();
    await homePage.searchForItem('instax mini');

    const numberOfItems = await resultsPage.getNumberOfItems();
    expect(numberOfItems).toBe(12);

    console.log(`Test completed: ${numberOfItems} items found on the first page.`);
});
