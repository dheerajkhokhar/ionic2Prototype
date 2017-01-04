import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ComponentList } from '../../app/app.constant';

@Component({
  selector: 'page-user1',
  templateUrl: 'signupPage1.html'
})

export class SignupController1 {
  signup: {username?: string, password?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController) {}

  onSignup(form) {
    this.submitted = true;

    if (form.valid) {
      debugger
     this.navCtrl.push(ComponentList.SignupController2);
    }
  }
}
