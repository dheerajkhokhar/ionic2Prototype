import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ComponentList } from '../../app/app.constant';

@Component({
  selector: 'page-user',
  templateUrl: 'signupPage5.html'
})
export class SignupController5 {
  signup: {username?: string, password?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController) {}

  onSignup(form) {
    this.submitted = true;

    if (form.valid) {
      this.navCtrl.setRoot(ComponentList.HomeController);
    }
  }
}
