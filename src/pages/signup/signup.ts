import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

// Providers
import { AuthProvider } from '../../providers/auth/auth';

// Pages
import { HomePage } from '../home/home';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  password: string = '';
  username: string = '';
  email: string = '';
  organization: string = '';


  constructor(public navCtrl: NavController, 
    private authPvdr:AuthProvider,
    private loadCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  public doRegister() {
    let loader = this.loadCtrl.create({
      content: 'Signing up...'
    });
    
    loader.present();

    this.authPvdr.signup(this.username, this.password, this.email, this.organization).subscribe((success) => {
      this.navCtrl.setRoot(HomePage);
      loader.dismissAll();
    }, (error) => {
      loader.dismissAll();
    });
  }

}
