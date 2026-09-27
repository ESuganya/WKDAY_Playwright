import {test,expect} from '@playwright/test'
import {testConfig} from '../test.config'
import {PageObjectManager} from '../pages/PageObjectManager'
import {DataProvider} from '../utils/dataProvider'


let pageObject:PageObjectManager;

test.beforeEach('Before Each', async({page})=>{

     await page.goto(testConfig.baseURL)
     pageObject=new PageObjectManager(page)
})

let testdata="testdata/logindata.json"
let data=DataProvider.getTestDataFromJson(testdata);


for(const dt of data)
{
   test(`Login Test with JSON Data: ${dt.testName} @datadriven`, async({page})=>{
        await page.goto(testConfig.baseURL);    // getting baseURL from test.config.ts file
        await pageObject.homePage.clickMyAccount();
        await pageObject.homePage.clickLogin();

        await pageObject.loginPage.performLogin(dt.email, dt.password);

        if(dt.expected.toLowerCase()==='success')
        {

            const isLoggedIn=await pageObject.accountPage.isMyAccountPageExists();
            expect(isLoggedIn).toBeTruthy();

        }
        else{
            const errorMessage=await pageObject.loginPage.getloginErrorMessage();
            //expect(errorMessage).toBe('Warning: No match for E-Mail Address and/or Password.');
            expect(errorMessage).toContain('Warning: No match');
        }
    })

}

//Load CSV test data logindata.json

const csvPath = "testdata/logindata.csv";
const csvTestData = DataProvider.getTestDataFromCsv(csvPath);

for(const data of csvTestData)
{
   test(`Login Test with CSV Data: ${data.testName} @datadriven`, async({page})=>{
        await page.goto(testConfig.baseURL);    // getting baseURL from test.config.ts file
        await pageObject.homePage.clickMyAccount();
        await pageObject.homePage.clickLogin();

        await pageObject.loginPage.performLogin(data.email, data.password);

        if(data.expected.toLowerCase()==='success')
        {

            const isLoggedIn=await pageObject.accountPage.isMyAccountPageExists();
            expect(isLoggedIn).toBeTruthy();

        }
        else{
            const errorMessage=await pageObject.loginPage.getloginErrorMessage();
            //expect(errorMessage).toBe('Warning: No match for E-Mail Address and/or Password.');
            expect(errorMessage).toContain('Warning: No match');
        }
    })

}