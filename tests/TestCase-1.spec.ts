import { test, expect } from '@playwright/test';
import { TestConfig } from '../test.config';
import { HomePage } from '../pages/HomePage';
import { SignupLoginPage } from '../pages/SignupLoginPage';
import { RandomDataUtil } from '../utils/randomDataGenerator';
import { AccountInformationPage } from '../pages/AccountInformationPage'
import { MessageVerifyPage } from '../pages/MessageVerifyPage'
import { PageAfterSigninLogin } from "../pages/PageAfterSigninLogin"

let homepage: HomePage;
let signinlogin: SignupLoginPage;
let accountinfo: AccountInformationPage;
let message: MessageVerifyPage
let pageaftersignin: PageAfterSigninLogin

test.describe('TestCase-1', () => {

test.beforeEach(async ({ page }) => {

  await page.waitForLoadState('networkidle');
  await page.locator('.loader').waitFor({ state: 'hidden' });
  const config = new TestConfig();
  // 1. Launch browser
  // 2. Navigate to url 'http://automationexercise.com'
  await page.goto(config.appUrl);
  homepage = new HomePage(page);
  signinlogin = new SignupLoginPage(page);
  accountinfo = new AccountInformationPage(page)
  message = new MessageVerifyPage(page)
  pageaftersignin = new PageAfterSigninLogin(page)

});

test('Test Case 1: Register User', async () => {

  // 3. Verify that home page is visible successfully
  const verifyhome = await homepage.verifyHomePage()
  await expect(verifyhome).toBeVisible()

  // 4. Click on 'Signup / Login' button
  await homepage.clickSignupLoginLink()

  // 5. Verify 'New User Signup!' is visible
  const iscorrect = await signinlogin.verifySignupTitle()
  await expect(iscorrect).toBeVisible()

  // 6. Enter name and email address
  await signinlogin.enterSignupName(await RandomDataUtil.getUserName())
  await signinlogin.enterSignupEmail(await RandomDataUtil.getEmail())

  // 7. Click 'Signup' button
  await signinlogin.clickSignupButton()

  // Verify that 'ENTER ACCOUNT INFORMATION' is visible
  const title = await accountinfo.verifyTitles()
  expect(title).toContain('Enter Account Information')

  // 9. Fill details: Title, Name, Email, Password, Date of birth
  await accountinfo.selectMrMrs(await RandomDataUtil.getTitle())
  await accountinfo.enterPassword(await RandomDataUtil.getPassword())
  const date = await RandomDataUtil.getBirthday()

  const day = date.getDate();       // 1–31
  const month = date.getMonth() + 1; // 0–11 → add 1
  const year = date.getFullYear();   // yyyy
  await accountinfo.enterDay(day)
  await accountinfo.enterMonth(month)
  await accountinfo.enterYear(year)

  // 10. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
  await accountinfo.enterFirstName(await RandomDataUtil.getFirstName())
  await accountinfo.enterlastName(await RandomDataUtil.getlastName())
  await accountinfo.enterCompany(await RandomDataUtil.getcompany())
  await accountinfo.enterAddress(await RandomDataUtil.getAddress())
  await accountinfo.enterCountry(await RandomDataUtil.getCountry())
  await accountinfo.enterState(await RandomDataUtil.getState())
  await accountinfo.enterCity(await RandomDataUtil.getCity())
  await accountinfo.enterZipCode(await RandomDataUtil.getZipcode())
  await accountinfo.enterMobileNumber(await RandomDataUtil.getPhoneNumber())

  // 11. Click 'Create Account button'
  await accountinfo.clickCreateAcountButton()

  // 12. Verify that 'ACCOUNT CREATED!' is visible
  const createdMessage = await message.verifyCreatedMessage()
  expect(createdMessage).toContain("Account Created!")

  // 13. Click 'Continue' button
  await message.clickContinue()

  // 14. Verify that home page is visible successfully
  const verifyhomedel = await homepage.verifyHomePage()
  await expect(verifyhomedel).toBeVisible()

  //15. Click 'Delete Account' button
  pageaftersignin.clickDeleteAccount()

  //16. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
  const deletedMessage = await message.verifyCreatedMessage()
  expect(deletedMessage).toContain("Account Deleted!")
  await message.clickContinue()

});

});
