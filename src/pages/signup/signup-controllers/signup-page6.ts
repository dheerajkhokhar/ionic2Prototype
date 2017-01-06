import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ComponentList } from '../../../app/app.constant';

@Component({
  templateUrl: 'signup-page6.html'
})

export class SignupPage6 {
  signup: {username?: string, password?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController) {}

  onSignup(form) {
    this.submitted = true;

    if (form.valid) {
      debugger
     this.navCtrl.setRoot(ComponentList.HomePage);
    }
  }
}
