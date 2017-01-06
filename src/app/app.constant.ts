import { SignupModule } from '../pages/signup/signup.module';


import { HomePage } from '../pages/home/home';
import { HealthTrackerPage } from '../pages/health-tracker/health-tracker';
import { HeatAlertPage } from '../pages/heat-alert/heat-alert';
import { PerformaceEvalPage } from '../pages/performace-eval/performace-eval';
import { SurveyPage } from '../pages/survey/survey';
import { TipsPage } from '../pages/tips/tips';
import { ProfileSettingPage } from '../pages/profile-setting/profile-setting';
import { LoginPage } from '../pages/login/login';
import { SignupPage1 } from '../pages/signup/signup-controllers/signup-page1';
import { SignupPage2 } from '../pages/signup/signup-controllers/signup-page2';
import { SignupPage3 } from '../pages/signup/signup-controllers/signup-page3';
import { SignupPage4 } from '../pages/signup/signup-controllers/signup-page4';
import { SignupPage5 } from '../pages/signup/signup-controllers/signup-page5';
import { SignupPage6 } from '../pages/signup/signup-controllers/signup-page6';


import { SingleSelectPopupComponent } from '../components/single-select-popup/single-select-popup';
import { MultiSelectPopupComponent } from '../components/multi-select-popup/multi-select-popup';


export const Constants = {
  // Ionic constant variables
  // Menu toggle type (overlay, reveal, push)
  ionicMenuType : 'reveal'
  // Code constant variables
}

export const MenuList = [
  { title: "Surveys", component:SurveyPage},
  { title: "Health Tracker", component:HealthTrackerPage},
  { title: "Tips and facts", component:TipsPage},
  { title: "Performance metrics", component:PerformaceEvalPage},
  { title: "Heat Alerts", component:HeatAlertPage},
  { title: "Profile Setting", component:ProfileSettingPage}
];
export const ComponentList={
  HomePage:HomePage,
  HealthTrackerPage:HealthTrackerPage,
  HeatAlertPage:HeatAlertPage,
  PerformaceEvalPage:PerformaceEvalPage,
  SurveyPage:SurveyPage,
  TipsPage:TipsPage,
  ProfileSettingPage:ProfileSettingPage,
  LoginPage:LoginPage,
  SignupModule:SignupModule,
  SignupPage1:SignupPage1,
  SignupPage2:SignupPage2,
  SignupPage3:SignupPage3,
  SignupPage4:SignupPage4,
  SignupPage5:SignupPage5,
  SignupPage6:SignupPage6,
  SingleSelectPopupComponent:SingleSelectPopupComponent,
  MultiSelectPopupComponent:MultiSelectPopupComponent
}

