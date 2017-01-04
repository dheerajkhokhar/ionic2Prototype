import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Constants, ComponentList } from '../../app/app.constant';

@NgModule({
  declarations: [
    ComponentList.SignupController,
    ComponentList.SignupController1,
    ComponentList.SignupController2,
    ComponentList.SignupController3,
    ComponentList.SignupController4,
    ComponentList.SignupController5
 ],
  imports: [
    IonicModule.forRoot(ComponentList.SignupController)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ComponentList.SignupController,
    ComponentList.SignupController1,
    ComponentList.SignupController2,
    ComponentList.SignupController3,
    ComponentList.SignupController4,
    ComponentList.SignupController5
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class SignupModule {}