/*
Test Case 6: Contact Us Form
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Contact Us' button
5. Verify 'GET IN TOUCH' is visible
6. Enter name, email, subject and message
7. Upload file
8. Click 'Submit' button
9. Click OK button
10. Verify success message 'Success! Your details have been submitted successfully.' is visible
11. Click 'Home' button and verify that landed to home page successfully
*/

import { test, expect } from "@playwright/test"
import { ContactUsPage } from "../pages/ContactUsPage"
import { HomePage } from "../pages/HomePage"
import { TestConfig } from "../test.config"
// import contactUs from '../data/contactUs.json' assert { type: 'json' };;
import { readFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { dirname, resolve } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const jsonPath = resolve(__dirname, '../data/contactUs.json')
const contactUs = JSON.parse(readFileSync(jsonPath, "utf-8"))

let homepage: HomePage
let contactUsPage: ContactUsPage

test.describe('TestCase-6', () => {
    test.beforeEach(async ({ page }) => {
        page.on('pageerror', (error) => {
          console.log('Page error ignored:', error.message);
        });
        await page.waitForLoadState('networkidle')
        await page.locator('.loader').waitFor({ state: 'hidden' })
        const config = new TestConfig()
        await page.goto(config.appUrl)
        homepage = new HomePage(page)
        contactUsPage = new ContactUsPage(page)
    })

    for (const data of contactUs) {
        test(`Test Case 6: Contact Us Form Name:${data.name}, Email:${data.email}}`, async ({ page }) => {
            const homePageElement = await homepage.verifyHomePage()
            await expect(homePageElement).toBeVisible()

            await homepage.clickContactUsLink()

            const contactUsTitle = await contactUsPage.verifyContactUsTitle()
            await expect(contactUsTitle).toContain('Get In Touch')

            await contactUsPage.enterContactUsName(data.name)
            await contactUsPage.enterContactUsEmail(data.email)
            await contactUsPage.enterContactUsSubject(data.subject)
            await contactUsPage.enterContactUsBody(data.body)

            await page.waitForTimeout(5000)

            const filePath = (data.filePath)
            await contactUsPage.uploadContactUsFile(filePath)

            await contactUsPage.clickSubmitButton()

            const successMessage = await contactUsPage.verifySuccessmessage()
            await expect(successMessage).toContain('Success! Your details have been submitted successfully.')
            
            await page.waitForTimeout(5000)
            
            await contactUsPage.clickHomeButton()

            const homePageAfterReturn = await homepage.verifyHomePage()
            await expect(homePageAfterReturn).toBeVisible()
        })
    }
})
