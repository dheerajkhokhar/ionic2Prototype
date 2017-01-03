import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { MenuList } from './app.constant';
import { HomeController } from '../pages/home/home';
import { HealthTrackerController } from '../pages/healthTracker/healthTracker';
import { HeatAlertController } from '../pages/heatAlert/heatAlert';
import { PerformaceEvalController } from '../pages/performaceEval/performaceEval';
import { SurveyController } from '../pages/survey/survey';
import { TipsController } from '../pages/tips/tips';
import { ProfileSettingController } from '../pages/profileSetting/profileSetting';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomeController;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    //  this.pages = [
    //   { title: "Surveys", component:SurveyController},
    //   { title: "Health Tracker", component:HealthTrackerController},
    //   { title: "Tips and facts", component:TipsController},
    //   { title: "Performance metrics", component:PerformaceEvalController},
    //   { title: "Heat Alerts", component:HeatAlertController},
    //   { title: "Profile Setting", component:ProfileSettingController}
    //  ];  
    this.pages = MenuList;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  gotoHome(page){
    this.nav.setRoot(this.rootPage);
  }

}
