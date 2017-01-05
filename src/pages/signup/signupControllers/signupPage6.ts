import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ComponentList } from '../../../app/app.constant';

@Component({
  templateUrl: 'signupPage6.html'
})

export class SignupController6 {
  signup: {username?: string, password?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController) {}

  onSignup(form) {
    this.submitted = true;

    if (form.valid) {
      debugger
     this.navCtrl.setRoot(ComponentList.HomeController);
    }
  }
}
