import { HomeController } from '../pages/home/home';
import { HealthTrackerController } from '../pages/healthTracker/healthTracker';
import { HeatAlertController } from '../pages/heatAlert/heatAlert';
import { PerformaceEvalController } from '../pages/performaceEval/performaceEval';
import { SurveyController } from '../pages/survey/survey';
import { TipsController } from '../pages/tips/tips';
import { ProfileSettingController } from '../pages/profileSetting/profileSetting';

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

