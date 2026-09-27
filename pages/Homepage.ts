import {Locator, Page} from '@playwright/test'

export class HomePage{

    private readonly page:Page;

    private readonly linkMyAccount:Locator;
    private readonly linkLogin:Locator;
    private readonly txtSearchbox:Locator;
    private readonly btnSearch:Locator;
    private readonly lnkRegister: Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.linkMyAccount=page.locator('span', {hasText:'My Account'})
        this.linkLogin=page.getByRole('link', {name:'Login'})
        this.txtSearchbox = page.getByPlaceholder('Search', {exact:true})
        this.btnSearch = page.locator('#search button[type="button"]');
        this.lnkRegister = page.getByRole('link', { name: 'Register' })
    }

    //Home Page exist
    async isHomePageExists(){
        let title:string = await this.page.title();
        if(title)
        {
            return true;
        }
        return false;
    } 

    //Actions
    async clickMyAccount()
    {
        await this.linkMyAccount.click();
    }

    async clickLogin()
    {
        await this.linkLogin.click();
    }

     // Enter product name in the search box
    async enterProductName(pName: string){
            await this.txtSearchbox.fill(pName);}


    // Click the search button
    async clickSearch(){  
            await this.btnSearch.click();
        
    }

     // Click "Register" link
    async clickRegister(){
            await this.lnkRegister.click();
       
    }
}