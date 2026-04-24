import { expect, Locator, Page } from "@playwright/test"

export class LoginPage{

    constructor(private page : Page){}
    private username = '#txt-username';
    private password = '#txt-password';
    private loginBtn = "#btn-login";
    private errorMsg = '.text-danger';
    
    async openLogin(){
        await this.page.goto('/');
        await this.page.click('#btn-make-appointment');
    }
        async login(user: string, pwd: string){
            await this.page.fill(this.username, user);
            await this.page.fill(this.password,pwd);
            await this.page.click(this.loginBtn);
        }
//valid login
        async verifyLoginSucess(){
            await expect(this.page).toHaveURL(/profile|appointment/);  
        }
//Invalid Login
        async verifyLoginError(){
            await expect(this.page.locator(this.errorMsg)).toBeVisible();
        }

    }