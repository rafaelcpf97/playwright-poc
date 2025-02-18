import { Locator, Page } from '@playwright/test'
import { HelperBase } from './helperBase'

export class SignInPage extends HelperBase {

    readonly signUpEmailField: Locator
    readonly createAnAccountBtn: Locator

    readonly signInEmailField: Locator
    readonly signInPasswordField: Locator
    readonly signInBtn: Locator

    constructor(page: Page) {
        super(page)
        this.signUpEmailField = page.locator('#email_create')
        this.createAnAccountBtn = page.locator('#SubmitCreate')
        this.signInEmailField = page.locator('#email')
        this.signInPasswordField = page.locator('#passwd')
        this.signInBtn = page.locator('#SubmitLogin')
    }

    async createNewAccount(email: string) {
        await this.signUpEmailField.fill(email)
        await this.createAnAccountBtn.click()
    }

    async login(email: string, password: string) {
        await this.signInEmailField.fill(email)
        await this.signInPasswordField.fill(password)
        await this.signInBtn.click()
    }


}