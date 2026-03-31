import { Page, Locator } from '@playwright/test'

export class ContactUsPage {
    private readonly page: Page;
    private readonly locateTitle: Locator;
    private readonly locateName: Locator;
    private readonly locateEmail: Locator;
    private readonly locateSubject: Locator;
    private readonly locateBody: Locator;
    private readonly locateChooseFile: Locator;
    private readonly locateSubmitButton: Locator;
    private readonly locateSuccessMessage: Locator;
    private readonly locateHomeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.locateTitle = this.page.locator("//h2[normalize-space()='Get In Touch']")
        this.locateName = this.page.getByPlaceholder('Name');
        this.locateEmail = this.page.locator("//input[@placeholder='Email']");
        this.locateSubject = this.page.getByPlaceholder('Subject');
        this.locateBody = this.page.getByPlaceholder('Your Message Here')
        this.locateChooseFile = this.page.locator("input[name='upload_file']")
        this.locateSubmitButton = this.page.locator("input[value='Submit']")
        this.locateSuccessMessage = this.page.locator(".status.alert.alert-success")
        this.locateHomeButton = this.page.locator('.btn.btn-success')
    }

    async verifyContactUsTitle(): Promise<string | null> {
        await this.locateTitle.waitFor({ state: "visible", timeout: 5000 });
        return await this.locateTitle.textContent() ?? ""
    }

    async enterContactUsName(name: string) {
        await this.locateName.waitFor({ state: "visible", timeout: 5000 });
        await this.locateName.fill(name)
    }

    async enterContactUsEmail(email: string) {
        await this.locateEmail.waitFor({ state: "visible", timeout: 5000 });
        await this.locateEmail.fill(email)
    }

    async enterContactUsSubject(subject: string) {
        await this.locateSubject.waitFor({ state: "visible", timeout: 5000 });
        await this.locateSubject.fill(subject)
    }

    async enterContactUsBody(body: string) {
        await this.locateBody.waitFor({ state: "visible", timeout: 5000 });
        await this.locateBody.fill(body)
    }

    async uploadContactUsFile(filepath: string) {
        await this.locateChooseFile.waitFor({ state: "visible", timeout: 5000 });
        await this.locateChooseFile.setInputFiles(filepath)
    }

    async clickSubmitButton() {
        await this.page.on("dialog", (dialog) => {
            console.log(dialog.message())
            dialog.accept()
        });
        await this.locateSubmitButton.click()
    }

    async verifySuccessmessage():Promise <string | null> {
        await this.locateSuccessMessage.waitFor({ state: "visible", timeout: 5000 });
        return await this.locateSuccessMessage.textContent() ?? ""
    }

    async clickHomeButton(){
        await this.locateHomeButton.waitFor({ state: "visible", timeout: 5000 });
        await this.locateHomeButton.click()
    }

}