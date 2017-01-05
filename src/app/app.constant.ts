import { SignupModule } from '../pages/signup/signup.module';
import { HomeController } from '../pages/home/home';
import { HealthTrackerController } from '../pages/healthTracker/healthTracker';
import { HeatAlertController } from '../pages/heatAlert/heatAlert';
import { PerformaceEvalController } from '../pages/performaceEval/performaceEval';
import { SurveyController } from '../pages/survey/survey';
import { TipsController } from '../pages/tips/tips';
import { ProfileSettingController } from '../pages/profileSetting/profileSetting';
import { LoginController } from '../pages/login/login';
import { SignupController1 } from '../pages/signup/signupControllers/signupPage1';
import { SignupController2 } from '../pages/signup/signupControllers/signupPage2';
import { SignupController3 } from '../pages/signup/signupControllers/signupPage3';
import { SignupController4 } from '../pages/signup/signupControllers/signupPage4';
import { SignupController5 } from '../pages/signup/signupControllers/signupPage5';
import { SignupController6 } from '../pages/signup/signupControllers/signupPage6';

import { SingleSelectPopup } from '../pages/genericTemplate/singleSelectPopup';
import { MultiSelectPopup } from '../pages/genericTemplate/multiSelectPopup';


export const Constants = {
  // Ionic constant variables
  // Menu toggle type (overlay, reveal, push)
  ionicMenuType : 'reveal'
  // Code constant variables
}

export const MenuList = [
  { title: "Surveys", component:SurveyController},
  { title: "Health Tracker", component:HealthTrackerController},
  { title: "Tips and facts", component:TipsController},
  { title: "Performance metrics", component:PerformaceEvalController},
  { title: "Heat Alerts", component:HeatAlertController},
  { title: "Profile Setting", component:ProfileSettingController}
];
export const ComponentList={
  HomeController:HomeController,
  HealthTrackerController:HealthTrackerController,
  HeatAlertController:HeatAlertController,
  PerformaceEvalController:PerformaceEvalController,
  SurveyController:SurveyController,
  TipsController:TipsController,
  ProfileSettingController:ProfileSettingController,
  LoginController:LoginController,
  SignupModule:SignupModule,
  SignupController1:SignupController1,
  SignupController2:SignupController2,
  SignupController3:SignupController3,
  SignupController4:SignupController4,
  SignupController5:SignupController5,
  SignupController6:SignupController6,
  SingleSelectPopup:SingleSelectPopup,
  MultiSelectPopup:MultiSelectPopup
}

