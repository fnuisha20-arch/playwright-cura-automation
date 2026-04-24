import {test, expect} from '@playwright/test';

import { LoginPage } from '../pages/login.Page';
import { env } from '../utils/env';
test('Verify of Login', async ({page}) =>{
    const login = new LoginPage(page);
    await login.openLogin();
    await login.login(env.username, env.password);
    await login.verifyLoginSucess();
})
test ('Invalid username login' ,async ({page})=>{
    const login =new LoginPage(page);
    await login.openLogin();
    await login.login('WrongUsername', env.password);
    await login.verifyLoginError();
})

test ('Invalid password login' ,async ({page})=>{
    const login =new LoginPage(page);
    await login.openLogin();
    await login.login(env.username, 'WrongPassword');
    await login.verifyLoginError();
})
test ('Empty login fields' ,async ({page})=>{
    const login =new LoginPage(page);
    await login.openLogin();
    await login.login('','');
    await login.verifyLoginError();
})
