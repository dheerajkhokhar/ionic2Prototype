import { Component } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { ComponentList } from '../../app/app.constant';
import { AppVersion, Contacts, Camera, Geolocation } from 'ionic-native';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: {username?: string, password?: string} = {};
  submitted = false;
  contacts:Contacts;
  constructor(public navCtrl: Nav, public platform:Platform) {
    platform.ready().then(() => {
      console.log("Login Platform");
      //AppVersion.getVersionNumber().then(v => console.log("VERSION",v));
      Contacts.find(['displayName']).then(contacts => this.contacts = contacts);
      // Camera.getPicture({
      //   sourceType:0
      // }).then((imageData) => {
      // // imageData is either a base64 encoded string or a file URI
      // // If it's base64:
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
      // console.log(base64Image);
      // }, (err) => {
      // // Handle error
      // console.log("error occured");
      // });

      Geolocation.getCurrentPosition().then(pos => console.log('Position'));

      Geolocation.getCurrentPosition().then((resp) => {
        console.log(resp);
        // resp.coords.latitude
        // resp.coords.longitude
      }).catch((error) => {
        console.log('Error getting location', error);
      });
    });
  }

  onLogin(form) {
    this.submitted = true;

    if (form.valid) {
      //this.userData.login(this.login.username);
      this.navCtrl.setRoot(ComponentList.HomePage);
    }
  }

  onSignup() {
    this.navCtrl.push(ComponentList.SignupPage1);
  }
}
