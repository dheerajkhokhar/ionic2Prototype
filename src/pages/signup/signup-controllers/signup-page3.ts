import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ComponentList } from '../../../app/app.constant';
import { Service } from '../../../providers/service';

@Component({
  selector: 'page-signup-page3',
  templateUrl: 'signup-page3.html'
})
export class SignupPage3 {
  signup: {username?: string, password?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController, public service: Service) {}

  onSignup(form) {
    this.submitted = true;

    if (form.valid) {
      console.log(this.service.parameters)
      this.navCtrl.push(ComponentList.SignupPage4);
    }
  }
}
