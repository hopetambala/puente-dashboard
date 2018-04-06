import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  	
  }
  /*
  showPlatform() {
    let text = 'I run on: ' + this.platform.platforms();
    let alert = this.alertCtrl.create({
      title: 'My Home',
      subTitle: text,
      buttons: ['Ok']
    });
    alert.present();

  }
  */

}
