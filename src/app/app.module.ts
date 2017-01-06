import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SignupModule } from '../pages/signup/signup.module';
import { Constants, ComponentList } from './app.constant';
import { MyApp } from './app.component';
import { Kinvey} from 'kinvey-angular2-sdk';

@NgModule({
  declarations: [
    MyApp,
    ComponentList.HomePage,
    ComponentList.HealthTrackerPage,
    ComponentList.HeatAlertPage,
    ComponentList.PerformaceEvalPage,
    ComponentList.SurveyPage,
    ComponentList.TipsPage,
    ComponentList.ProfileSettingPage,
    ComponentList.LoginPage
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
    ComponentList.HomePage,
    ComponentList.HealthTrackerPage,
    ComponentList.HeatAlertPage,
    ComponentList.PerformaceEvalPage,
    ComponentList.SurveyPage,
    ComponentList.TipsPage,
    ComponentList.ProfileSettingPage,
    ComponentList.LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {
  constructor(){
    // Kinvey.init({
    //   apiHostname: 'https://kvy-us2-baas.kinvey.com',
    //   appKey: 'kid_B1XibGkt',
    //   appSecret: 'd6176d0fefcc4ecfae67f10e8620ea3a'
    // });

    // var promise = Kinvey.ping();
    // promise.then(function(response) {
    //   console.log('Kinvey Ping Success. Kinvey Service is alive, version: ' + response.version + ', response: ' + response.kinvey);
    // }).catch(function(error) {
    //   console.log('Kinvey Ping Failed. Response: ' + error.message);
    // });
  }
}
