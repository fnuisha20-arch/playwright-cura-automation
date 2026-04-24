import {test, expect} from '@playwright/test';

import { LoginPage } from '../pages/login.Page';
import { AppointmentPage } from '../pages/appointmentPage';


test('Book appointment sucessfully', async ({ page }) =>{
 const loginpageObj = new LoginPage(page);
 const appointmentPageObj = new AppointmentPage(page);

 await page.goto('/');

 //Login
 await loginpageObj.openLogin();
 await loginpageObj.login("John Doe", "ThisIsNotAPassword");

 //Booking Appointment
 await appointmentPageObj.bookAppointment("28/04/2026","This is comment section");

 //Assertion
 await expect(page.locator('h2')).toContainText('Confirmation');

})