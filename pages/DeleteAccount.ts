import { Page, Locator } from '@playwright/test'

export class DeleteAccount{
    private readonly page:Page;
    private readonly locateHomePageVerify : Locator;
    private readonly locateDeleteAccount: Locator;


    constructor(page:Page){
        this.page = page
        this.locateHomePageVerify = this.page.locator("#slider-carousel")
        this.locateDeleteAccount = this.page.locator("a[href='/delete_account']")        
    }

    async verifyHomePage(){
        try {
            await this.locateHomePageVerify.waitFor({ state: "visible", timeout: 5000 });
            return true
        } catch{
            console.log("Testcase failed because of home page verification failed")
            return false
        }
    }

    async clickDeleteAccount(){
        try {
            await this.locateDeleteAccount.click()
        } catch{
            console.log("Test case failed: Not able to click Delete Account Link in home Page");            
        }
    }
}
