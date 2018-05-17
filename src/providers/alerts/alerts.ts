//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the AlertsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlertsProvider {

  constructor(private toast:ToastController) {
    console.log('Hello AlertsProvider Provider');
  }

  presentToast(toastmessage: string, duration: number = 2500, position:string ="bottom") {
    /*
    A Toast is a subtle notification commonly used in modern applications. 
    It can be used to provide feedback about an operation or to display a system message.
    The toast appears on top of the app's content, and can be dismissed 
    by the app to resume user interaction with the app.
    */
    let toast = this.toast.create({
      message: toastmessage,
      duration: 2500,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
