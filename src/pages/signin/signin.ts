import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController } from 'ionic-angular';

// Providers
import { AuthProvider } from '../../providers/auth/auth';

// Pages
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
//import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  signupPage = SignupPage;
  password: string = '';
  username: string = '';

  constructor(
    public navCtrl: NavController, 
    public alertCtrl: AlertController,
    private loadCtrl: LoadingController,
    private authPvdr: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  public doSignin() {
    
    
    let loader = this.loadCtrl.create({
      content: 'Signing in...'
    });

    let ion_alert = this.alertCtrl.create({
      title: 'Login Timeout',
      subTitle: 'Invalid username and/or password',
      buttons: ['Try Again']
    });
    
    loader.present();
    
    setTimeout(() => {
      loader.dismiss();
      //ion_alert.present();
    }, 3000); 

    this.authPvdr.signin(this.username, this.password).subscribe((success) => {
      ion_alert.dismiss();
      this.navCtrl.setRoot(HomePage);
      loader.dismissAll();
    }, (error) => {
      //ion_alert.present();
      loader.dismissAll();
    });
  }

}
