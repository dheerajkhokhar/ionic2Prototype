import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Transfer,Cordova } from 'ionic-native';
import { NgZone } from '@angular/core';
/*
  Generated class for the HeatAlert page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-heat-alert',
  templateUrl: 'heat-alert.html'
})
export class HeatAlertPage {
  storageDirectory;
  progress = 0;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,private ngZone: NgZone) {
    this.platform.ready().then(() => {
      // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
      if(!this.platform.is('cordova')) {
        return false;
      }
      if (this.platform.is('ios')) {
        this.storageDirectory = cordova.file.documentsDirectory;
      }
      else if(this.platform.is('android')) {
        debugger
        this.storageDirectory = cordova.file.dataDirectory;
      }
      else {
        // exit otherwise, but you could add further types here e.g. Windows
        return false;
      }
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeatAlertPage');
  }

  download() {
    const fileTransfer = new Transfer();
    let url = "http://3.bp.blogspot.com/-XchURXRz-5c/U5ApPOrPM9I/AAAAAAAADoo/YZEj4qeSlqo/s1600/Final-Fantasy-XV-Noctis-Red-Eyes.png";
    let filename = url.split("/").pop();
    let targetPath = cordova.file.externalRootDirectory + 'Pictures/' + filename;
    fileTransfer.onProgress(this.onProgress);
    fileTransfer.download(url, targetPath,true).then((entry) => {
      console.log('download complete: ' + entry.toURL());
    }, (error) => {
      // handle error
      console.log("error occurs");
    });

  }

   onProgress =  (progressEvent: ProgressEvent) : void => {
        this.ngZone.run(() => {
            if (progressEvent.lengthComputable) {
                let progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
                console.log(progress);
                this.progress = progress      
            }
        });
    }

}
