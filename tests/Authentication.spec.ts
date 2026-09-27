
import {test} from '../fixtures/admin.fixtures'
import {expect} from '@playwright/test'
import {testConfig} from '../test.config'
import {PageObjectManager} from '../pages/PageObjectManager'


let pageObject:PageObjectManager;

test.beforeEach('Before Each', async({page})=>{
     await page.goto(testConfig.baseURL)
     pageObject=new PageObjectManager(page)
})

test.describe('Authentication', ()=>{
    test('Login @smoke @regression', async({page})=>{
    //Navigate to Login page via Home page

    await pageObject.homePage.clickMyAccount();
    await pageObject.homePage.clickLogin();

    //Enter valid credentials and log in
    await pageObject.loginPage.setEmail(testConfig.username);
    await pageObject.loginPage.setPwd(testConfig.password);
    await pageObject.loginPage.clickLoginBtn();

    //alternatevly
    //await pageObject.loginPage.login(testConfig.username, testConfig.password);

    //Verify successful login by checking 'My Account' page presence
    const isLoggedIn=await pageObject.accountPage.isMyAccountPageExists();
    expect(isLoggedIn).toBeTruthy();
})


test('Logout @smoke', ()=>{

})


})



//test('')