
import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/Homepage'
import { LoginPage } from '../pages/Loginpage'
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { ProductPage } from '../pages/ProductPage';
import {testConfig} from '../test.config'

let homepage: HomePage;
let loginpage: LoginPage;
let searchResultPage: SearchResultsPage;
let productPage: ProductPage;


test.beforeEach('Before Each', async ({ page }) => {

    await page.goto(testConfig.baseURL)
    homepage = new HomePage(page);
    loginpage = new LoginPage(page);
    searchResultPage = new SearchResultsPage(page);
    productPage = new ProductPage(page);


})

test.describe('Add To Cart - Positive Scenarios', () => {

    test('Add a single product to cart @regression', async ({ page }) => {

        const productName = testConfig.productName;
        await homepage.enterProductName(productName);
        await homepage.clickSearch();
        expect(await searchResultPage.isSearchResultsPageExists()).toBeTruthy();
        expect(await searchResultPage.isProductExist(productName)).toBeTruthy();
        await searchResultPage.selectProduct(productName);
        await productPage.addToCart();                         
        expect(await productPage.isConfirmationMessageVisible()).toBeTruthy();
        });

    test('Add multiple quantities of the same product to cart @regression', async ({ page }) => {
        // Search product
        // Select product
        // Increase quantity
        // Add product to cart
        // Verify quantity
    });

    test('Add different products to cart', async ({ page }) => {
        // Search first product
        // Add first product
        // Search second product
        // Add second product
        // Verify both products are in cart
    });

    test('Verify product details after adding to cart', async ({ page }) => {
        // Search product
        // Select product
        // Capture product name/price
        // Add product to cart
        // Open cart
        // Verify product name and price
    });

});