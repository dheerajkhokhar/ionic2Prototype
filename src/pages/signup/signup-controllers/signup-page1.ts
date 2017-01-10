import { Component, ViewChild, OnInit } from '@angular/core';
import { Nav, ModalController, Events  } from 'ionic-angular';

import { ComponentList } from '../../../app/app.constant';
import { Service } from '../../../providers/service';

@Component({
  selector: 'page-signup-page1',
  templateUrl: 'signup-page1.html'
})


export class SignupPage1 implements OnInit {
  // @ViewChild(Nav) nav: Nav;
  rootPage: any;

  signup: {firstname?: string, lastname?: string, email?:string, password?:string,confirmpassword?:string} = {};
  submitted = false;

  constructor(public navCtrl: Nav, public modelCtrl:ModalController, public service: Service, public events:Events) {
    this.rootPage = ComponentList.SignupPage1;
  }

  ngOnInit(){
    //console.log(this.service.username);
    this.service.username = "Doe";
    //console.log(this.service.username);
    console.log(this.service.parameters);
  }

  onSignup(form) {
    this.submitted = true;
    if (form.valid) {
      console.log(this.signup);
      //this.userData.signup(this.signup.username);

      this.service.parameters.s1 = this.signup;

      debugger
      this.events.publish('user:created', this.signup);

      this.navCtrl.push(ComponentList.SignupPage2,this.signup);

      // let model = this.modelCtrl.create(ComponentList.SignupController2);
      // model.present();
    }
  }

}
