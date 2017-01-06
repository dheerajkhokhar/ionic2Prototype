import { Component } from '@angular/core';
import { Nav } from 'ionic-angular';
import { ComponentList } from '../../app/app.constant';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: {username?: string, password?: string} = {};
  submitted = false;

  constructor(public navCtrl: Nav) { }

  onLogin(form) {
    this.submitted = true;

    if (form.valid) {
      //this.userData.login(this.login.username);
      this.navCtrl.setRoot(ComponentList.HomePage);
    }
  }

  onSignup() {
    this.navCtrl.push(ComponentList.SignupPage1);
  }
}
