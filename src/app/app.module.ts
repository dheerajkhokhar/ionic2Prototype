import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SignupModule } from '../pages/signup/signup.module';
import { Constants, ComponentList } from './app.constant';
import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    ComponentList.HomeController,
    ComponentList.HealthTrackerController,
    ComponentList.HeatAlertController,
    ComponentList.PerformaceEvalController,
    ComponentList.SurveyController,
    ComponentList.TipsController,
    ComponentList.ProfileSettingController,
    ComponentList.LoginController
  ],
  imports: [
    SignupModule,
    IonicModule.forRoot(MyApp,{
      menuType: Constants.ionicMenuType,
      platforms: {
        ios: {
          menuType: Constants.ionicMenuType,
        }
      }
    })

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ComponentList.HomeController,
    ComponentList.HealthTrackerController,
    ComponentList.HeatAlertController,
    ComponentList.PerformaceEvalController,
    ComponentList.SurveyController,
    ComponentList.TipsController,
    ComponentList.ProfileSettingController,
    ComponentList.LoginController
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
