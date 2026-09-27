import { Page, Locator } from '@playwright/test';

export class SearchResultsPage {
    private readonly page: Page;
    
    
    private readonly searchPageHeader: Locator;
    private readonly searchProducts: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchPageHeader = page.locator('#content h1');
        this.searchProducts = page.locator('h4>a');
        
    }

    async isSearchResultsPageExists(): Promise<boolean> {
            const headerText = await this.searchPageHeader.textContent();
            if(headerText?.includes('Search -'))
                return true
            else
                return false
            
            
        
    }

    
    async isProductExist(productName: string): Promise<boolean> {

        const products=await this.searchProducts .filter({ hasText: productName })
        const result=await products.count()>0
           return result;
         
    }

    /**
     * Select a product from the search results by its name
     * @param productName - The name of the product to select
     * @returns Promise<ProductPage> - ProductPage instance after selecting the product
     */
    async selectProduct(productName: string) {
        
           const product = this.searchProducts.filter({ hasText: productName }).first();

    await product.click();
    }

    /**
     * Get count of products in search results
     * @returns Promise<number> - Number of products found
     */
    async getProductCount(): Promise<number> {
        return await this.searchProducts.count();
    }
}