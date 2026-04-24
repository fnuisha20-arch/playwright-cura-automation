import { Locator, Page } from "@playwright/test"

export class AppointmentPage{

    readonly page :Page;
    readonly selectFacility : Locator;
    readonly tokyoFacility : Locator;
    readonly visitDate : Locator;
    readonly comment : Locator;
    readonly bookApptBtn : Locator;


  constructor (page: Page){
    this.page = page;
    this.selectFacility = page.locator("id=combo_facility");
    this.tokyoFacility = page.locator('option[value="Tokyo CURA Healthcare Center"]');
    this.visitDate = page.locator("id=txt_visit_date");
    this.comment = page.locator("id=txt_comment");
    this.bookApptBtn = page.locator("id=btn-book-appointment");
  }
  async bookAppointment(visiDateVal : string, commentVal: string){
    await this.selectFacility.selectOption("Tokyo CURA Healthcare Center");
 //   await this.tokyoFacility.click();
    await this.page.evaluate((date) => {
        const input= document.querySelector('#txt_visit_date') as HTMLInputElement;
        input.value = date;
    }, visiDateVal  );
  //  await this.visitDate.fill(visiDateVal);
  //  await this.visitDate.press('Tab');
    await this.comment.fill(commentVal);
    await this.bookApptBtn.click();
  }

}