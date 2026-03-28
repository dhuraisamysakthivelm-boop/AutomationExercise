import { test, expect } from '@playwright/test';
import { TestConfig } from '../test.config';
import { HomePage } from '../pages/HomePage';
import { SignupLoginPage } from '../pages/SignupLoginPage';
import { RandomDataUtil } from '../utils/randomDataGenerator';
import { AccountInformationPage } from '../pages/AccountInformationPage'
import { MessageVerifyPage } from '../pages/MessageVerifyPage'
import { DeleteAccount } from "../pages/DeleteAccount"

let homepage: HomePage;
let signinlogin: SignupLoginPage;
let accountinfo: AccountInformationPage;
let message: MessageVerifyPage
let deleteacc: DeleteAccount


test.beforeEach(async ({ page }) => {

  await page.waitForLoadState('networkidle');
  await page.locator('.loader').waitFor({ state: 'hidden' });
  const config = new TestConfig();
  await page.goto(config.appUrl);
  homepage = new HomePage(page);
  signinlogin = new SignupLoginPage(page);
  accountinfo = new AccountInformationPage(page)
  message = new MessageVerifyPage(page)
  deleteacc = new DeleteAccount(page)

});

test('Test Case 1: Register User', async () => {

  const verifyhome = await homepage.verifyHomePage()
  await expect(verifyhome).toBeTruthy()
  await homepage.clickSignupLoginLink()


  const iscorrect = await signinlogin.verifySignupTitle()
  await expect(iscorrect).toBeTruthy()
  await signinlogin.enterSignupName(RandomDataUtil.getUserName())
  await signinlogin.enterSignupEmail(RandomDataUtil.getEmail())
  await signinlogin.clickSignupButton()


  const title = await accountinfo.verifyTitles()
  expect(title).toContain('Enter Account Information')

  await accountinfo.selectMrMrs(RandomDataUtil.getTitle())
  await accountinfo.enterPassword(RandomDataUtil.getPassword())
  const date = RandomDataUtil.getBirthday()

  const day = date.getDate();       // 1–31
  const month = date.getMonth() + 1; // 0–11 → add 1
  const year = date.getFullYear();   // yyyy
  await accountinfo.enterDay(day)
  await accountinfo.enterMonth(month)
  await accountinfo.enterYear(year)

  await accountinfo.enterFirstName(RandomDataUtil.getFirstName())
  await accountinfo.enterlastName(RandomDataUtil.getlastName())
  await accountinfo.enterCompany(RandomDataUtil.getcompany())
  await accountinfo.enterAddress(RandomDataUtil.getAddress())
  await accountinfo.enterCountry(RandomDataUtil.getCountry())
  await accountinfo.enterState(RandomDataUtil.getState())
  await accountinfo.enterCity(RandomDataUtil.getCity())
  await accountinfo.enterZipCode(RandomDataUtil.getZipcode())
  await accountinfo.enterMobileNumber(RandomDataUtil.getPhoneNumber())
  await accountinfo.clickCreateAcountButton()


  const createdMessage = await message.verifyCreatedMessage()
  expect(createdMessage).toContain("Account Created!")
  await message.clickContinue()


  const istrue = deleteacc.verifyHomePage()
  expect(istrue).toBeTruthy()
  deleteacc.clickDeleteAccount()

  const deletedMessage = await message.verifyCreatedMessage()
  expect(deletedMessage).toContain("Account Deleted!")
  await message.clickContinue()

});
