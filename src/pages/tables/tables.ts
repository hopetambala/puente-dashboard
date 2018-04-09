import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


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
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    }
  };
  data = [
    {
      id: 1,
      name: "Test Testerton",
      DiabetesDiagnosis: "Nope",
      Availability: "test@test.com"
    },
    // ... other rows here
    {
      id: 11,
      name: "Tested Testme",
      DiabetesDiagnosis: "Yep",
      Availability: "Test.testberg@testamond.tez"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TablesPage');
    
  }

}
