import { Locator, Page } from '@playwright/test'
import { HelperBase } from './helperBase'

export class MainPage extends HelperBase {

    readonly shoppingCartBtn: Locator
    readonly searchBar: Locator
    readonly searchBtn: Locator
    readonly womenTab: Locator
    readonly dressesTab: Locator
    readonly tShirtsTab: Locator
    readonly blogTab: Locator
    readonly signInBtn: Locator
    readonly newsletterEmail: Locator
    readonly newsletterSubmitBtn: Locator

    constructor(page: Page) {
        super(page)
        this.shoppingCartBtn = page.getByRole('link', { name: 'Cart' })
        this.searchBar = page.getByPlaceholder('Search')
        this.searchBtn = page.getByRole('button', { name: '' })
        this.womenTab = page.locator('#block_top_menu').getByRole('link', { name: 'Women' })
        this.dressesTab = page.getByRole('link', { name: 'Dresses', exact: true })
        this.tShirtsTab = page.getByRole('link', { name: 'T-shirts' })
        this.blogTab = page.getByRole('link', { name: 'Blog' })
        this.signInBtn = page.getByRole('link', { name: 'Sign in'})
        this.newsletterEmail = page.locator('#newsletter-input')
        this.newsletterSubmitBtn = page.locator('button[name="submitNewsletter"]')
    }

    /**
     * This method will search a product item
     * @param productName - should be product name
     */

    async searchProductByName(productName: string) {
        await this.searchBar.fill(productName)
        await this.searchBtn.click()
    }

    async submitNewsletter(email: string) {
        await this.newsletterEmail.fill(email)
        await this.newsletterSubmitBtn.click()
    }

}