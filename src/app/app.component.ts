import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen, ScreenOrientation } from 'ionic-native';
import { MenuList,ComponentList } from './app.constant';

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
    this.rootPage = ComponentList.LoginPage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if(this.platform.is('cordova')){
        StatusBar.styleDefault();
        Splashscreen.hide();
      }
      console.log(ScreenOrientation.orientation);
      window.addEventListener("orientationchange", function(){
        console.log("change");
      });
    });
  }

  onOpenPage(page) {
    this.nav.setRoot(page.component);
  }

  onGotoHome(page){
    this.nav.setRoot(ComponentList.HomePage);
    //this.nav.push(ComponentList.HomePage);
  }

  onLogout(){
    this.nav.setRoot(ComponentList.LoginPage);
  }

}
