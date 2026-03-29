import { Page, Locator } from '@playwright/test'

export class PageAfterSigninLogin{
    private readonly page:Page;    
    private readonly locateDeleteAccount: Locator;
    private readonly locateUserName: Locator;
    private readonly locateLogOut:Locator;


    constructor(page:Page){
        this.page = page        
        this.locateDeleteAccount = this.page.locator("a[href='/delete_account']")
        this.locateUserName = this.page.locator('.col-sm-8 div ul li:last-child')
        this.locateLogOut = this.page.getByRole('link', { name: ' Logout' })        
    }

    async verifyUserName(){
        return await this.locateUserName.textContent()
    }

    async clickDeleteAccount(){
        try {
            await this.locateDeleteAccount.click()
        } catch{
            console.log("Test case failed: Not able to click Delete Account Link in home Page");            
        }
    }

    async clickLogOut(){
        await this.locateLogOut.click()
    }
}
