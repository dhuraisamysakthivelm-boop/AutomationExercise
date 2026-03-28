import { Page, Locator } from "@playwright/test"

export class MessageVerifyPage{
    private readonly page: Page;
    private readonly locateCreatedMessage: Locator;
    private readonly locateContinue: Locator;

    constructor(page:Page){
        this.page = page
        this.locateCreatedMessage = this.page.locator("h2[class='title text-center'] b")
        this.locateContinue = this.page.locator('.btn.btn-primary')
    }

    async verifyCreatedMessage(){
        return await this.locateCreatedMessage.textContent() ?? '';
    }

    async clickContinue(){
        try {
            await this.locateContinue.click()
        } catch{
            console.log("Test case failed: Not able to click continue Button in Account Created/ Deleted! Page");            
        }
    }
}