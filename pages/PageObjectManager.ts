import { Page } from '@playwright/test';
import { HomePage } from './Homepage';
import { LoginPage } from './Loginpage';
import { SearchResultsPage } from './SearchResultsPage';
import { MyAccountPage } from './MyAccountPage';
import {ProductPage} from './ProductPage';
import { RegistrationPage } from './RegistrationPage';

export class PageObjectManager {

    homePage: HomePage;
    loginPage: LoginPage;
    searchResultsPage: SearchResultsPage;
    productPage:ProductPage;
    accountPage:MyAccountPage;
    registrationPage:RegistrationPage;


    constructor(page: Page) {
        this.homePage = new HomePage(page);
        this.loginPage = new LoginPage(page);
        this.searchResultsPage = new SearchResultsPage(page);
        this.productPage=new ProductPage(page)
        this.accountPage=new MyAccountPage(page)
        this.registrationPage=new RegistrationPage(page)
}
}