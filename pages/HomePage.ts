import { Page, Locator } from "@playwright/test"

export class HomePage {
    private readonly page: Page;
    private readonly locateHomePageVerify: Locator;
    private readonly locateHomeLink: Locator;
    private readonly locateProductLink: Locator;
    private readonly locateCartLink: Locator;
    private readonly locateSignupLoginLink: Locator;
    private readonly locateTestcasesLink: Locator;
    private readonly locateApiTestingLink: Locator;
    private readonly locateVideoTutorialLink: Locator;
    private readonly locateContactUsLink: Locator;

    constructor(page: Page) {
        this.page = page
        this.locateHomePageVerify = this.page.locator("#slider-carousel")
        this.locateHomeLink = this.page.getByRole('link', { name: ' Home' })
        this.locateProductLink = this.page.getByRole('link', { name: ' Products' })
        this.locateCartLink = this.page.getByRole('link', { name: ' Cart' })
        this.locateSignupLoginLink = this.page.getByRole('link', { name: ' Signup / Login' })
        this.locateTestcasesLink = this.page.getByRole('link', { name: ' Test Cases' })
        this.locateApiTestingLink = this.page.getByRole('link', { name: ' API Testing' })
        this.locateVideoTutorialLink = this.page.getByRole('link', { name: ' Video Tutorials' })
        this.locateContactUsLink = this.page.getByRole('link', { name: ' Contact us' })
    }

    async verifyHomePage() {        
            await this.locateHomePageVerify.waitFor({ state: "visible", timeout: 5000 });
            return this.locateHomePageVerify;        
    }

    async clickHomeLink(){
            try {
                await this.locateHomeLink.click()
            } catch {
                console.log("Home Link in the top of the home page is not clickable or not located correctly")
            }
        }

    async clickProductLink(){
            try {
                await this.locateProductLink.click()
            } catch {
                console.log("Product Link in the top of the home page is not clickable or not located correctly")
            }
        }

    async clickCartLink(){
            try {
                await this.locateCartLink.click()
            } catch {
                console.log("Cart Link in the top of the home page is not clickable or not located correctly")
            }
        }

    async clickSignupLoginLink(){
            try {
                await this.locateSignupLoginLink.click()
            } catch {
                console.log("Signup/ Login Link in the top of the home page is not clickable or not located correctly")
            }
        }

    async clickTestcaseLink(){
            try {
                await this.locateTestcasesLink.click()
            } catch {
                console.log("Cart Link in the top of the home page is not clickable or not located correctly")
            }
        }

    async clickAPITestingLink(){
            try {
                await this.locateApiTestingLink.click()
            } catch {
                console.log("API Testing Link in the top of the home page is not clickable or not located correctly")
            }
        }

    async clickVideoTutorialLink(){
            try {
                await this.locateVideoTutorialLink.click()
            } catch {
                console.log("Cart Link in the top of the home page is not clickable or not located correctly")
            }
        }

    async clickContactUsLink(){
            try {
                await this.locateContactUsLink.click()
            } catch {
                console.log("Cart Link in the top of the home page is not clickable or not located correctly")
            }
        }

    }