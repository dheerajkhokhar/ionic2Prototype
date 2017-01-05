import { Component } from '@angular/core';
import { Nav } from 'ionic-angular';
import { ComponentList } from '../../app/app.constant';


@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginController {
  login: {username?: string, password?: string} = {};
  submitted = false;

  constructor(public navCtrl: Nav) { }

  onLogin(form) {
    this.submitted = true;

    if (form.valid) {
      //this.userData.login(this.login.username);
      this.navCtrl.setRoot(ComponentList.HomeController);
    }
  }

  onSignup() {
    this.navCtrl.push(ComponentList.SignupController1);
  }
}
