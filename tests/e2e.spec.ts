import {test, expect} from '@playwright/test'
import {faker} from '@faker-js/faker'
import { PageManager } from '../page-objects/pageManager'

test.describe('e2e suite', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('/')
    })

    test('Main page should be loaded succesfully @smoke @regression', async({page}, testInfo) => {
        test.skip(testInfo.project.name === 'mobile', 'Skipping this test on mobile project')

        const pm = new PageManager(page)
        await expect(pm.onMainPage().searchBar).toBeVisible()
        await expect(pm.onMainPage().searchBtn).toBeVisible()
        await expect(pm.onMainPage().shoppingCartBtn).toBeVisible()
        await expect(pm.onMainPage().womenTab).toBeVisible()
        await expect(pm.onMainPage().dressesTab).toBeVisible()
        await expect(pm.onMainPage().tShirtsTab).toBeVisible()
        await expect(pm.onMainPage().blogTab).toBeVisible()
    })

    test('Signing up should work @smoke @regression', async({page}) => {
        const pm = new PageManager(page)
        await pm.onMainPage().signInBtn.click()
        const email = pm.onMainPage().getRandomEmail()
        console.log(email)
        await pm.onSignInPage().createNewAccount(email)
    })

    test('Signing in should work @smoke @regression', async({page}) => {
        const pm = new PageManager(page)
        await pm.onMainPage().signInBtn.click()
        const email = pm.onMainPage().getRandomEmail()
        console.log(email)
        const password = faker.internet.password({length: 10})
        console.log(password)

        await pm.onSignInPage().login(email, password)
    })

    test('Searching should work @smoke @regression', async({page}) => {
        const pm = new PageManager(page)
        await pm.onMainPage().searchProductByName('Blouse')
    })

    test('Newsletter should work @regression', async({page}) => {
        const pm = new PageManager(page)
        const email = pm.onMainPage().getRandomEmail()
        console.log(email)
        await pm.onMainPage().submitNewsletter(email)
        await expect(pm.onMainPage().newsletterSubmitMessage).toBeVisible()
    })

    test('Social media links should be correct @regression', async({page}) => {
        const pm = new PageManager(page)
        await pm.onMainPage().facebookBtn.click()
    })


})