import { test as base } from '@playwright/test';
import { Page } from '@playwright/test';

type AdminFixture = {
    adminPage: Page;
    generalPage:Page
};

export const test = base.extend<AdminFixture>({
    adminPage: async ({page }, use) => {
        // Login as Admin
        await page.goto('https://tutorialsninja.com/demo/');
        await page.getByLabel('Username').fill('admin');
        await page.getByLabel('Password').fill('admin123');
        await page.getByRole('button', { name: 'Login' }).click();
        // Give the logged-in page to the test
        await use(page);
    },
    generalPage: async({page}, use)=>{
         // Login as general user
        await page.goto('https://your-application.com/login');
        await page.getByLabel('Username').fill('admin');
        await page.getByLabel('Password').fill('admin123');
        await page.getByRole('button', { name: 'Login' }).click();
        //
         await use(page);

    }

});

export { expect } from '@playwright/test';