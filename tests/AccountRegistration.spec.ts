
import {test} from '../fixtures/admin.fixtures'
import {expect} from '@playwright/test'
import {testConfig} from '../test.config'
import {PageObjectManager} from '../pages/PageObjectManager'
import {RandomDataUtil} from '../utils/randomDataGenerator'


let pageObject:PageObjectManager;

test.beforeEach('Before Each', async({page})=>{
     await page.goto(testConfig.baseURL)
     pageObject=new PageObjectManager(page)
})


test('User registration test @master @sanity @regression', async () => {

    //Go to 'My Account' and click 'Register'

    await pageObject.homePage.clickMyAccount();
    await pageObject.homePage.clickRegister();

    //Fill in registration details with random data
    await pageObject.registrationPage.setFirstName(RandomDataUtil.getFirstName());
    await pageObject.registrationPage.setLastName(RandomDataUtil.getlastName());
    await pageObject.registrationPage.setEmail(RandomDataUtil.getEmail());
    await pageObject.registrationPage.setTelephone(RandomDataUtil.getPhoneNumber());

    const password = RandomDataUtil.getPassword();
    await pageObject.registrationPage.setPassword(password);
    await pageObject.registrationPage.setConfirmPassword(password);

    await pageObject.registrationPage.setPrivacyPolicy();
    await pageObject.registrationPage.clickContinue();

    //Validate the confirmation message
    const confirmationMsg = await pageObject.registrationPage.getConfirmationMsg();
    expect(confirmationMsg).toContain('Your Account Has Been Created!')


})
