import { Component, OnInit } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { ComponentList } from '../../../app/app.constant';

@Component({
  selector: 'page-signup-page2',
  templateUrl: 'signup-page2.html'
})
export class SignupPage2 implements OnInit {
  signup: {employee?: {}, race?: [string],insurance?:{},education?:{}} = {};
  submitted = false;
  racesOptions;
  insuranceOptions;
  employmentStatusOptions;
  educationOptions;

  constructor(public navCtrl: NavController, public navParams:NavParams) {}

  ionViewDidLoad() {
    console.log(this.navParams.data);
    console.log('ionViewDidLoad');
  }

   ngOnInit(){
     console.log('init');
    this.racesOptions = [{id:1, text:"White", checked:true},{id: 2, text:"Black or African American", checked:false},{id: 3, text:"American Indian or Alaska Native", checked:true},{id: 4, text:"Asian", checked:false},{id: 5, text:"Native Hawaiian or Other Pacific Islander", checked:false}]; 
    this.insuranceOptions = [{id:1, text:"Private, employer-paid insurance", checked:false},{id:2, text:"Private, self-paid insurance", checked:false},{id:3, text:"Medicare or Medicaid", checked:true},{id:4, text:"Other", checked:false},{id:5, text:"None", checked:false}];
    this.employmentStatusOptions = [{id:1, text:'Full time', checked:false},{id:2, text:'Full time with MS-related limitations', checked:false},{id:3, text:'Part time', checked:false},{id:4, text:'Part time due to MS-related limitations', checked:false},{id:5, text:'Unemployed, looking for work', checked:false},{id:6, text:'Retired', checked:true},{id:7, text:'Disabled, permanently or temporarily', checked:false},{id:8, text:'Stay at home', checked:false},{id:9, text:'Student', checked:false},{id:10, text:'Sick leave', checked:false},{id:11, text:'Maternity leave', checked:false}];
    this.educationOptions = [{id:1, text:"Elementary school", checked:false},{id:2, text:"Middle school", checked:true},{id:3, text:"High school diploma/GED", checked:false},{id:4, text:"Associate's degree", checked:false},{id:5, text:"Bachelor's degree", checked:false},{id:6, text:"Master's degree", checked:false},{id:7, text:"Doctoral degree", checked:false},{id:8, text:"No formal education", checked:false}];

  }

  onSingleSelect($event){
    this.signup[$event.obj.objectName]=$event.obj.value;
    console.log($event);
  }

  onMultiSelect($event){
    this.signup[$event.obj.objectName]=$event.obj.value;
    console.log($event);
  }

  onSignup(form) {
    this.submitted = true;

    if (form.valid) {
      console.log(this.signup);
      this.navCtrl.push(ComponentList.SignupPage3);
    }
  }
}
