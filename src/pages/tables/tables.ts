import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ParseServerProvider } from '../../providers/parse-server/parse-server';



/**
 * Generated class for the TablesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//Angular Thing
//@IonicPage()

@Component({
  selector: 'page-tables',
  templateUrl: 'tables.html',
  
})
export class TablesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private parseServerProvider: ParseServerProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TablesPage');
    
  }

}
