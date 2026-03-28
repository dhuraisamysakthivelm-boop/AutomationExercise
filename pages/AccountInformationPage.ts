import { Page, Locator } from "@playwright/test"

export class AccountInformationPage {

    private readonly page: Page;
    private readonly locateTitles: Locator;
    private readonly locateMr: Locator;
    private readonly locateMrs: Locator;
    private readonly locatePassword: Locator;
    private readonly locateDay: Locator;
    private readonly locateMonth: Locator;
    private readonly locateYear: Locator;
    private readonly locateFirstName: Locator;
    private readonly locateLastName: Locator;
    private readonly locateCompany: Locator;
    private readonly locateaddress: Locator;
    private readonly locateCountry: Locator;
    private readonly locateState: Locator;
    private readonly locateCity: Locator;
    private readonly locateZipCode: Locator;
    private readonly LocateMobileNumber: Locator;
    private readonly locateCreateAccount: Locator;

    constructor(page: Page) {
        this.page = page;
        this.locateTitles = this.page.locator("//b[normalize-space()='Enter Account Information']");
        this.locateMr = this.page.locator('#uniform-id_gender1')
        this.locateMrs = this.page.locator('#uniform-id_gender2')
        this.locatePassword = this.page.locator('#password')
        this.locateDay = this.page.locator('#days')
        this.locateMonth = this.page.locator('#months')
        this.locateYear = this.page.locator('#years')
        this.locateFirstName = this.page.locator('#first_name')
        this.locateLastName = this.page.locator('#last_name')
        this.locateCompany = this.page.locator('#company')
        this.locateaddress = this.page.locator('#address1')
        this.locateCountry = this.page.locator('#country')
        this.locateState = this.page.locator('#state')
        this.locateCity = this.page.locator('#city')
        this.locateZipCode = this.page.locator('#zipcode')
        this.LocateMobileNumber = this.page.locator('#mobile_number')
        this.locateCreateAccount = this.page.getByRole('button', { name: 'Create Account' })
    }

    async verifyTitles() {        
            return await this.locateTitles.textContent() ?? '';       
    }

    async selectMrMrs(gender: string) {
        try {            
            if (gender === "Mr."){
                await this.locateMr.check()
            } 
            else if(gender === "Mrs."){
                await this.locateMrs.check()
            }
        } catch {
            console.log('Test case failed: not able to select Mrs. or Mr.')
        }
    }

    async enterPassword(password:string){
        try {
            await this.locatePassword.waitFor({ state: "visible", timeout: 5000 });
            await this.locatePassword.clear()
            await this.locatePassword.fill(password)
        } catch{
            console.log("Test case failed: Not able to enter password in Enter Account Information Page");            
        }
    }

    async enterDay(day:number){
        try {
            const dayString = day.toString()
            await this.locateDay.waitFor({ state: "visible", timeout: 5000 });          
            await this.locateDay.selectOption({value: dayString})
        } catch{
            console.log("Test case failed: Not able to enter day in Enter Account Information Page");            
        }
    }

    async enterMonth(month:number){
        try {
            const monthString = month.toString()
            await this.locateMonth.waitFor({ state: "visible", timeout: 5000 });            
            await this.locateMonth.selectOption({value: monthString})
        } catch{
            console.log("Test case failed: Not able to enter month in Enter Account Information Page");            
        }
    }

    async enterYear(year:number){
        try {
            const yearString = year.toString()
            await this.locateYear.waitFor({ state: "visible", timeout: 5000 });            
            await this.locateYear.selectOption({value: yearString})
        } catch{
            console.log("Test case failed: Not able to enter month in Enter Account Information Page");            
        }
    }

    async enterFirstName(firstname:string){
        try {
            await this.locateFirstName.waitFor({ state: "visible", timeout: 5000 });
            await this.locateFirstName.clear()
            await this.locateFirstName.fill(firstname)
        } catch{
            console.log("Test case failed: Not able to enter first name in Enter Account Information Page");            
        }
    }

    async enterlastName(lastname:string){
        try {
            await this.locateLastName.waitFor({ state: "visible", timeout: 5000 });
            await this.locateLastName.clear()
            await this.locateLastName.fill(lastname)
        } catch{
            console.log("Test case failed: Not able to enter last name in Enter Account Information Page");            
        }
    }

    async enterCompany(company:string){
        try {
            await this.locateCompany.waitFor({ state: "visible", timeout: 5000 });
            await this.locateCompany.clear()
            await this.locateCompany.fill(company)
        } catch{
            console.log("Test case failed: Not able to enter company in Enter Account Information Page");            
        }
    }

    async enterAddress(address:string){
        try {
            await this.locateaddress.waitFor({ state: "visible", timeout: 5000 });
            await this.locateaddress.clear()
            await this.locateaddress.fill(address)
        } catch{
            console.log("Test case failed: Not able to enter address in Enter Account Information Page");            
        }
    }

    async enterCountry(country:string){
        try {
            await this.locateCountry.waitFor({ state: "visible", timeout: 5000 });
            await this.locateCountry.selectOption({value:country})
        } catch{
            console.log("Test case failed: Not able to select country in Enter Account Information Page");            
        }
    }

    async enterState(state:string){
        try {
            await this.locateState.waitFor({ state: "visible", timeout: 5000 });
            await this.locateState.clear()
            await this.locateState.fill(state)
        } catch{
            console.log("Test case failed: Not able to enter state in Enter Account Information Page");            
        }
    }

    async enterCity(city:string){
        try {
            await this.locateCity.waitFor({ state: "visible", timeout: 5000 });
            await this.locateCity.clear()
            await this.locateCity.fill(city)
        } catch{
            console.log("Test case failed: Not able to enter city in Enter Account Information Page");            
        }
    }

    async enterZipCode(zip:string){
        try {
            await this.locateZipCode.waitFor({ state: "visible", timeout: 5000 });
            await this.locateZipCode.clear()
            await this.locateZipCode.fill(zip)
        } catch{
            console.log("Test case failed: Not able to enter zip code in Enter Account Information Page");            
        }
    }

    async enterMobileNumber(mobilenumber:string){
        try {
            await this.LocateMobileNumber.waitFor({ state: "visible", timeout: 5000 });
            await this.LocateMobileNumber.clear()
            await this.LocateMobileNumber.fill(mobilenumber)
        } catch{
            console.log("Test case failed: Not able to enter mobile number in Enter Account Information Page");            
        }
    }

    async clickCreateAcountButton(){
        try {
            await this.locateCreateAccount.waitFor({ state: "visible", timeout: 5000 });            
            await this.locateCreateAccount.click()
        } catch{
            console.log("Test case failed: Not able to click Create Account Button in Enter Account Information Page");            
        }
    }

}