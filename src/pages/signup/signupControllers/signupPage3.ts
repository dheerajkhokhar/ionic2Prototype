import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ComponentList } from '../../../app/app.constant';

@Component({
  templateUrl: 'signupPage3.html'
})
export class SignupController3 {
  signup: {username?: string, password?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController) {}

  onSignup(form) {
    this.submitted = true;

    if (form.valid) {
      this.navCtrl.push(ComponentList.SignupController4);
    }
  }
}
