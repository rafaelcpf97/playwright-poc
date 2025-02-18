import { Page, expect } from '@playwright/test'
import { MainPage } from './mainPage'
import { SignInPage } from './signInPage'

export class PageManager {

    private readonly page: Page
    private readonly mainPage: MainPage
    private readonly signInPage: SignInPage

    constructor(page: Page) {
        this.page = page
        this.mainPage = new MainPage(this.page)
        this.signInPage = new SignInPage(this.page)
    }

    onMainPage() {
        return this.mainPage
    }

    onSignInPage() {
        return this.signInPage
    }

}
