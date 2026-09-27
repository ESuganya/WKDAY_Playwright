import { Page, Locator, expect } from '@playwright/test';


export class MyAccountPage {
    private readonly page: Page;
    private readonly msgHeading: Locator;
    private readonly lnkLogout: Locator;

    constructor(page: Page) {
        this.page = page;
        this.msgHeading = page.locator('h2:has-text("My Account")');
        this.lnkLogout = page.locator("text='Logout'").nth(1);
    }

    async isMyAccountPageExists() {
            const isVisible = await this.msgHeading.isVisible();
            return isVisible;
        
    }

    async clickLogout(){
        
            await this.lnkLogout.click();
    

   
}
}