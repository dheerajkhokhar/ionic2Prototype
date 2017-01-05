import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Constants, ComponentList } from '../../app/app.constant';

@NgModule({
  declarations: [
    ComponentList.SignupController1,
    ComponentList.SignupController2,
    ComponentList.SignupController3,
    ComponentList.SignupController4,
    ComponentList.SignupController5,
    ComponentList.SignupController6,
    ComponentList.SingleSelectPopup,
    ComponentList.MultiSelectPopup,
 ],
  imports: [
    IonicModule.forRoot(ComponentList.SignupController1)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ComponentList.SignupController1,
    ComponentList.SignupController2,
    ComponentList.SignupController3,
    ComponentList.SignupController4,
    ComponentList.SignupController5,
    ComponentList.SignupController6,
    ComponentList.SingleSelectPopup,
    ComponentList.MultiSelectPopup
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class SignupModule {}