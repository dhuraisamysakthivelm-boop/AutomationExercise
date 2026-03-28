import { Page, Locator } from "@playwright/test"

export class SignupLoginPage {

    private readonly page: Page;
    private readonly locateLoginVerify: Locator;
    private readonly locateSignupVerify: Locator;
    private readonly locateLoginEmail: Locator;
    private readonly locateLoginPassword: Locator;
    private readonly locateLoginButton: Locator;
    private readonly locateSignupName: Locator;
    private readonly locateSignupEmail: Locator;
    private readonly locateSignupButton: Locator;

    constructor(page: Page) {
        this.page = page
        this.locateLoginVerify = this.page.locator(".login-form h2")
        this.locateSignupVerify = this.page.locator(".signup-form h2")
        this.locateLoginEmail = this.page.locator("//input[@data-qa='login-email']")
        this.locateLoginPassword = this.page.locator('input[data-qa="login-password"]')
        this.locateLoginButton = this.page.getByRole('button', { name: 'Login' })
        this.locateSignupName = this.page.locator("input[data-qa='signup-name']")
        this.locateSignupEmail = this.page.locator("input[data-qa='signup-email']")
        this.locateSignupButton = this.page.getByRole("button", { name: 'Signup' })
    }


    async verifyLoginTitle() {
        try {
            await this.locateLoginVerify.waitFor({ state: "visible", timeout: 5000 });
            return true;
        } catch (error) {
            console.log("Test case failed: Login page title not visible");
            return false;
        }
    }

    async verifySignupTitle() {
        try {
            await this.locateSignupVerify.waitFor({ state: "visible", timeout: 5000 });
            return true;
        } catch (error) {
            console.log("Test case failed: Signup page title not visible");
            return false;
        }
    }

    async enterLoginEmail(loginemail: string) {
        try {            
            await this.locateLoginEmail.waitFor({ state: "visible", timeout: 5000 });
            await this.locateLoginEmail.clear()
            await this.locateLoginEmail.fill(loginemail)
        } catch {
            console.log("Test case failed: Not able to enter email during Login");
        }
    }

    async enterLoginPassword(loginpassword: string) {
        try {            
            await this.locateLoginPassword.clear()
            await this.locateLoginPassword.fill(loginpassword)
        } catch {
            console.log("Test case failed: Not able to enter password during Login");
        }
    }

    async clickLoginButton() {
        try {
            await this.locateLoginButton.waitFor({ state: 'visible' })
            await this.locateLoginButton.click()
        } catch {
            console.log("Test case failed: Not able to click Login button during Login");
        }
    }

    async enterSignupName(signupname: string) {
        try {
            await this.locateSignupName.waitFor({ state: "visible", timeout: 5000 });
            await this.locateSignupName.clear()
            await this.locateSignupName.fill(signupname)
        } catch {
            console.log("Test case failed: Not able to enter signin name during Login");
        }
    }

    async enterSignupEmail(signupemail: string) {
        try {
            await this.locateSignupEmail.waitFor({ state: 'visible', timeout: 5000 })
            await this.locateSignupEmail.clear()
            await this.locateSignupEmail.fill(signupemail)
        } catch {
            console.log("Test case failed: Not able to enter signin email during Login");
        }
    }

    async clickSignupButton() {
        try {
            await this.locateSignupButton.waitFor({ state: 'visible' })
            await this.locateSignupButton.click()
        } catch {
            console.log("Test case failed: Not able to click signup button during Login");
        }
    }
}