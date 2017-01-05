import { Component, ViewChild, OnInit } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { ComponentList } from '../../../app/app.constant';

@Component({
  templateUrl: 'signupPage1.html'
})


export class SignupController1 implements OnInit {
  // @ViewChild(Nav) nav: Nav;
  // rootPage: any;

  signup: {firstname?: string, lastname?: string, email?:string, password?:string,confirmpassword?:string} = {};
  submitted = false;

  constructor(public navCtrl: Nav) {
    //this.rootPage = ComponentList.SignupController;
  }

  ngOnInit(){}

  onSignup(form) {
    this.submitted = true;
    if (form.valid) {
      console.log(this.signup);
      //this.userData.signup(this.signup.username);

      this.navCtrl.push(ComponentList.SignupController2);
    }
  }

}
