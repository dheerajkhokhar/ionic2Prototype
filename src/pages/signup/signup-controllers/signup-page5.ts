import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ComponentList } from '../../../app/app.constant';

@Component({
  selector: 'page-signup-page5',
  templateUrl: 'signup-page5.html'
})
export class SignupPage5 {
  signup: {username?: string, password?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController) {}

  onSignup(form) {
    this.submitted = true;

    if (form.valid) {
      this.navCtrl.push(ComponentList.SignupPage6);
    }
  }
}
