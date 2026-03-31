/*
// >>>> Read the data from Json file <<<<
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter correct email address and password
7. Click 'login' button
8. if scenario is "Valid Crentencials" then do following steps:
        1. Verify that 'Logged in as username' is visible
        2. Click 'Logout' button
        3. Verify that user is navigated to login page
9. else do following steps:
        1. Verify error 'Your email or password is incorrect!' is visible
*/

import { test, expect } from '@playwright/test';

import path from 'path';
import { TestConfig } from '../test.config';
import { HomePage } from '../pages/HomePage';
import { SignupLoginPage } from '../pages/SignupLoginPage';
import { PageAfterSigninLogin } from "../pages/PageAfterSigninLogin"
import { readFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { dirname, resolve } from "node:path"
// import loginDetails from "../data/loginDetails.json" assert { type: 'json' };

let homepage: HomePage;
let signinlogin: SignupLoginPage;
let afterpagelogin: PageAfterSigninLogin
let config: TestConfig

test.describe('TestCase-4', () => {

    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)
    const jsonPath = path.resolve(__dirname, '../data/loginDetails.json');
    const loginDetails = JSON.parse(readFileSync(jsonPath, "utf-8"));


    test.beforeEach(async ({ page }) => {

        page.on('pageerror', (error) => {
          console.log('Page error ignored:', error.message);
        });
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

    for (const data of loginDetails) {
        test(`Test Case 4: Data read from JSON Scenario:${data.scenario} email:${data.loginemail}  and password:${data.password}`, async () => {

            // 3. Verify that home page is visible successfully
            const verifyhome = await homepage.verifyHomePage()
            await expect(verifyhome).toBeVisible()

            // 4. Click on 'Signup / Login' button
            await homepage.clickSignupLoginLink()

            // 5. Verify 'Login to your account' is visible
            const logintitle = await signinlogin.verifyLoginTitle()
            await expect(logintitle).toContain('Login to your account')

            // 6. Enter correct email address and password
            await signinlogin.enterLoginEmail(data.loginemail)
            await signinlogin.enterLoginPassword(data.password)

            // 7. Click 'login' button
            await signinlogin.clickLoginButton()


            if (data.scenario === "valid login") {
                // 8. Verify that 'Logged in as username' is visible
                const extractUserName = await afterpagelogin.verifyUserName()
                expect(extractUserName).toContain(data.username)

                // 9. Click 'Logout' button
                await afterpagelogin.clickLogOut()
                // 10. Verify that user is navigated to login page
                const afterlogoutlogintitle = await signinlogin.verifyLoginTitle()
                await expect(afterlogoutlogintitle).toContain('Login to your account')
            } else {
                // 11. Verify error 'Your email or password is incorrect!' is visible
                const errormessage = await signinlogin.verifyErrorMessage()
                expect(errormessage).toContainText("Your email or password is incorrect!")
            }

        });
    }

});