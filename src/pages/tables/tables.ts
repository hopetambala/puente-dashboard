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

  //Array to Hold listQuery() results
  queryResults = []

  constructor(private parseProvider: ParseServerProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.listQuery();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TablesPage');
    
  }

  //Lists QueryData
  public listQuery(){
    //Creates a natural "skip" of certain results based on surveyPoints length
    let offset = this.queryResults.length;

    //Limits the length of the searched results
    let limit = 100;

    //Returns the query then displays those "result" by pushing into surveyPoints object
    return this.parseProvider.getQuery(offset, limit, 'SurveyData').then((result) => {
      for (let i = 0; i < result.length; i++) {
        let object = result[i];
        this.queryResults.push(object);
      }
    }, (error) => {
      console.log(error);
    });
  }
}

