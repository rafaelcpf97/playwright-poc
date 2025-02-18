import {test, expect} from '@playwright/test'
import {faker} from '@faker-js/faker'
import { PageManager } from '../page-objects/pageManager'

test.describe('e2e suite', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('/')
    })

    test('Main page should be loaded succesfully @smoke @regression', async({page}) => {
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
        await pm.onSignInPage().createNewAccount(faker.internet.email.toString())
    })

    test('Signing in should work @smoke @regression', async({page}) => {
        const pm = new PageManager(page)
        await pm.onMainPage().signInBtn.click()
        await pm.onSignInPage().login(faker.internet.email.toString(), faker.internet.password.toString())
    })

    test('Searching should work @smoke @regression', async({page}) => {
        const pm = new PageManager(page)
        await pm.onMainPage().searchProductByName('Blouse')
    })

    test('Newsletter should work @regression', async({page}) => {
        const pm = new PageManager(page)
        await pm.onMainPage().submitNewsletter(faker.internet.email.toString())
    })

    test('Social media links should be correct @regression', async({page}) => {

    })


})