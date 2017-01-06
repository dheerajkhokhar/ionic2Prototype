import { Component, ViewChild, OnInit } from '@angular/core';
import { Nav, ModalController } from 'ionic-angular';

import { ComponentList } from '../../../app/app.constant';

@Component({
  selector: 'page-signup-page1',
  templateUrl: 'signup-page1.html'
})


export class SignupPage1 implements OnInit {
  // @ViewChild(Nav) nav: Nav;
  rootPage: any;

  signup: {firstname?: string, lastname?: string, email?:string, password?:string,confirmpassword?:string} = {};
  submitted = false;

  constructor(public navCtrl: Nav, public modelCtrl:ModalController) {
    this.rootPage = ComponentList.SignupPage1;
  }

  ngOnInit(){}

  onSignup(form) {
    this.submitted = true;
    if (form.valid) {
      console.log(this.signup);
      //this.userData.signup(this.signup.username);

      this.navCtrl.push(ComponentList.SignupPage2,this.signup);

      // let model = this.modelCtrl.create(ComponentList.SignupController2);
      // model.present();
    }
  }

}
