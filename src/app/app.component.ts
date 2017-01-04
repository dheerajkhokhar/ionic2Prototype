import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { MenuList,ComponentList } from './app.constant';
import { LoginController } from '../pages/login/login';
import { HomeController } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp(); 
    this.pages = MenuList;
    this.rootPage = LoginController;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  onOpenPage(page) {
    this.nav.push(page.component);
  }

  onGotoHome(page){
    this.nav.push(ComponentList.HomeController);
  }

  onLogout(){
    this.nav.setRoot(ComponentList.LoginController);
  }

}
