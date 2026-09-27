import {Locator, Page} from '@playwright/test'

export class LoginPage{

    private readonly page:Page;

    private readonly email:Locator;
    private readonly pwd:Locator;
    private readonly loginBtn:Locator
   private readonly txtErrorMessage:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.email=page.getByPlaceholder('E-Mail Address')
        this.pwd=page.getByPlaceholder('Password')
        this.loginBtn=page.getByRole('button', {name:'Login'})
        this.txtErrorMessage=page.locator('.alert.alert-danger.alert-dismissible');
    }

    //Actions
    async setEmail(email:string)
    {
       await this.email.fill(email)
    }
    async setPwd(pwd:string)
    {
       await this.pwd.fill(pwd)
    }
    async clickLoginBtn()
    {
       await this.loginBtn.click();
    }

    async performLogin(email:string, pwd:string)
    {
        await this.email.fill(email)
         await this.pwd.fill(pwd)
         await this.loginBtn.click();
    }

    async getloginErrorMessage():Promise<null | string>{
       
        return(this.txtErrorMessage.textContent());
    }
}