import { Page, Locator, expect } from '@playwright/test';


export class ProductPage {
    private readonly page: Page;
    
    // Locators using CSS selectors
    private readonly btnAddToCart: Locator;
    private readonly cnfMsg: Locator;
    private readonly btnItems: Locator;

    constructor(page: Page) {
        this.page = page;
        
        // Initialize locators with CSS selectors
        this.btnAddToCart = page.getByRole('button', {name:'Add to Cart',exact:true})
        this.cnfMsg = page.locator('.alert.alert-success.alert-dismissible');
        this.btnItems = page.locator('#cart');
    
    }

    

    /**
     * Adds product to cart
     */
    async addToCart(): Promise<void> {
        await this.btnAddToCart.click();
    }

    /**
     * Checks if confirmation message is visible
     * @returns Promise<boolean> - Returns true if message is visible
     */
    async isConfirmationMessageVisible():Promise<Locator>{
        return await this.cnfMsg 
    }

    /**
     * Clicks on Items button to navigate to cart
     */
    async clickItemsToNavigateToCart(): Promise<void> {
        await this.btnItems.click();
    }



   
}