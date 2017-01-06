import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Constants, ComponentList } from '../../app/app.constant';

@NgModule({
  declarations: [
    ComponentList.SignupPage1,
    ComponentList.SignupPage2,
    ComponentList.SignupPage3,
    ComponentList.SignupPage4,
    ComponentList.SignupPage5,
    ComponentList.SignupPage6,
    ComponentList.SingleSelectPopupComponent,
    ComponentList.MultiSelectPopupComponent,
 ],
  imports: [
    IonicModule.forRoot(ComponentList.SignupPage1)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ComponentList.SignupPage1,
    ComponentList.SignupPage2,
    ComponentList.SignupPage3,
    ComponentList.SignupPage4,
    ComponentList.SignupPage5,
    ComponentList.SignupPage6
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class SignupModule {}