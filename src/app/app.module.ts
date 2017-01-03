import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Constants } from './app.constant';
import { MyApp } from './app.component';
import { HomeController } from '../pages/home/home';
import { HealthTrackerController } from '../pages/healthTracker/healthTracker';
import { HeatAlertController } from '../pages/heatAlert/heatAlert';
import { PerformaceEvalController } from '../pages/performaceEval/performaceEval';
import { SurveyController } from '../pages/survey/survey';
import { TipsController } from '../pages/tips/tips';
import { ProfileSettingController } from '../pages/profileSetting/profileSetting';

@NgModule({
  declarations: [
    MyApp,
    HomeController,
    HealthTrackerController,
    HeatAlertController,
    PerformaceEvalController,
    SurveyController,
    TipsController,
    ProfileSettingController
  ],
  imports: [
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
    HomeController,
    HealthTrackerController,
    HeatAlertController,
    PerformaceEvalController,
    SurveyController,
    TipsController,
    ProfileSettingController
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
