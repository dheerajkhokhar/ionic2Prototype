import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { SignupController } from '../signup/signup';
import { HomeController } from '../home/home';


@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginController {
  login: {username?: string, password?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController) { }

  onLogin(form) {
    this.submitted = true;

    if (form.valid) {
      //this.userData.login(this.login.username);
      this.navCtrl.setRoot(HomeController);
    }
  }

  onSignup() {
    this.navCtrl.push(SignupController);
  }
}
