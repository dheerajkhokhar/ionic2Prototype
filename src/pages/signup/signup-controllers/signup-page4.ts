import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ComponentList } from '../../../app/app.constant';

@Component({
  selector: 'page-signup-page4',
  templateUrl: 'signup-page4.html'
})
export class SignupPage4 {
  signup: {username?: string, password?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController) {}

  onSignup(form) {
    this.submitted = true;

    if (form.valid) {
      this.navCtrl.push(ComponentList.SignupPage5);
    }
  }
}
