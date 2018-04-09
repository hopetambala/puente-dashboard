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
  
  //Fill settings with Column Headings from Parse Server
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      fname: {
        title: 'First Name'
      },
      lname: {
        title: 'Last Name'
      },
      DiabetesDiagnosis: {
        title: 'Diagnosis of Diabetes'
      },
      Availability: {
        title: 'When Are You Usually Available?'
      }
    }
  };
  
  //Fill array with data from Pars Server
  data = [
    {
      id: 1,
      fname: "Test",
      lname: "Testerton",
      DiabetesDiagnosis: "Nope",
      Availability: "Always"
    },
    // ... other rows here
    {
      id: 1,
      fname: "Test",
      lname: "Testy",
      DiabetesDiagnosis: "Yes",
      Availability: "Never"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TablesPage');
    
  }

}
