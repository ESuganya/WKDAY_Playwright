import {test,expect} from '@playwright/test'
import { HomePage } from '../pages/Homepage'
import { LoginPage } from '../pages/Loginpage'
import { SearchResultsPage } from '../pages/SearchResultsPage';



let homepage:HomePage;
let loginpage:LoginPage;
let searchResultPage:SearchResultsPage;

test.beforeEach('Before Each', async({page})=>{

    await page.goto('https://tutorialsninja.com/demo/')
    homepage=new HomePage(page);
    loginpage=new LoginPage(page);
    searchResultPage=new SearchResultsPage(page);
})

test.describe('Product Search', () => {
test('Search for existiing product @regression', async () => {
  
    const productName = "MacBook";

  // Step 2 & 3: Enter product name and click Search
  await homepage.enterProductName(productName);
  await homepage.clickSearch();

  // Step 4: Verify that the search results page is displayed
  expect(await searchResultPage.isSearchResultsPageExists()).toBeTruthy();

  // Step 5: Validate if the searched product appears in results
  const isProductFound = await searchResultPage.isProductExist(productName);
  expect(isProductFound).toBeTruthy();

});


    test('Select searched product', async ({ page }) => {
        // selectProduct()
    });

    test('Search for non-existing product', async ({ page }) => {
        // verify product is not available
    });

    test('Search with partial product name', async ({ page }) => {
        // e.g. "Lap" → Laptop
})

})