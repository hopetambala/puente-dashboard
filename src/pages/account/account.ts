import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';

//Providers
import { AuthProvider } from '../../providers/auth/auth';
import { AlertsProvider } from '../../providers/alerts/alerts';

// Pages
import { SigninPage } from '../signin/signin';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public auth:AuthProvider,
    private app: App,
    private alerts:AlertsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  //Authentication
  public signout() {
    this.auth.signout().subscribe(() => {
      this.app.getRootNav().setRoot(SigninPage);
    });
    this.alerts.presentToast('Signing Out');
  }

}
