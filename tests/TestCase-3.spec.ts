/*
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter correct email address and password
7. Click 'login' button
8. Verify error 'Your email or password is incorrect!' is visible
*/

import { test, expect } from '@playwright/test';
import { TestConfig } from '../test.config';
import { HomePage } from '../pages/HomePage';
import { SignupLoginPage } from '../pages/SignupLoginPage';
import { PageAfterSigninLogin } from "../pages/PageAfterSigninLogin"

let homepage: HomePage;
let signinlogin: SignupLoginPage;
let afterpagelogin: PageAfterSigninLogin
let config: TestConfig

test.describe('TestCase-3', () => {

test.beforeEach(async ({ page }) => {

    await page.waitForLoadState('networkidle');
    await page.locator('.loader').waitFor({ state: 'hidden' });
    config = new TestConfig();
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    await page.goto(config.appUrl);
    homepage = new HomePage(page);
    signinlogin = new SignupLoginPage(page);
    afterpagelogin = new PageAfterSigninLogin(page)

});

test('Test Case 3: Login User with incorrect email and password', async () => {

    // 3. Verify that home page is visible successfully
    const verifyhome = await homepage.verifyHomePage()
    await expect(verifyhome).toBeVisible()

    // 4. Click on 'Signup / Login' button
    await homepage.clickSignupLoginLink()

    // 5. Verify 'Login to your account' is visible
    const logintitle = await signinlogin.verifyLoginTitle()
    await expect(logintitle).toContain('Login to your account')

    // 6. Enter correct email address and password
    await signinlogin.enterLoginEmail(config.invalidloginemail)
    await signinlogin.enterLoginPassword(config.invalidpassword)

    // 7. Click 'login' button
    await signinlogin.clickLoginButton()

    // 8. Verify error 'Your email or password is incorrect!' is visible
    const errormessage = await signinlogin.verifyErrorMessage()
    expect(errormessage).toContainText("Your email or password is incorrect!")

});

});