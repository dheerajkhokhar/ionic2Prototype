import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Service } from '../../providers/service';
/*
  Generated class for the PerformaceEval page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-performace-eval',
  templateUrl: 'performace-eval.html'
})
export class PerformaceEvalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public service:Service) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerformaceEvalPage');  
      this.service.getPosts().subscribe((posts) => {
      console.log(posts[0].id);
    },
    (error) => {
      console.log(error);
    },
    ()=>{
      console.log("Done");
    }
    );
  }
}
