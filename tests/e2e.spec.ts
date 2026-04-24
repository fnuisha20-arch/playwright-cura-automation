import {test, expect} from '@playwright/test';

import { LoginPage } from '../pages/login.Page';
import { AppointmentPage } from '../pages/appointmentPage';
import { env } from '../utils/env';

test('CURA END TO END FLOW', async({page})=>{
 
 const loginpageObj = new LoginPage(page);
 const appointmentPageObj = new AppointmentPage(page);

 await loginpageObj.openLogin();
 await loginpageObj.login(env.username,env.password);
 
 await appointmentPageObj.bookAppointment("28/04/2026", "Routine Checkup");

 //Assertion
 await expect(page.locator('h2')).toHaveText('Appointment Confirmation');

}
)