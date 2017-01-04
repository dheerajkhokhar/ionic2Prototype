import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { ComponentList } from '../../app/app.constant';

@Component({
  selector: 'page-user',
  templateUrl: 'signup.html'
})


export class SignupController{
  @ViewChild(Nav) nav: Nav;
  rootPage: any;

  signup: {username?: string, password?: string} = {};
  submitted = false;

  constructor(public navCtrl: Nav) {
    //this.rootPage = ComponentList.SignupController;
  }

  onSignup(form) {
    this.submitted = true;

    if (form.valid) {
      //this.userData.signup(this.signup.username);
      debugger
      this.navCtrl.push(ComponentList.SignupController1);
    }
  }
}
