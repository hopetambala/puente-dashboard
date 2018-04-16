import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ParseServerProvider } from '../../providers/parse-server/parse-server';
import { FileManagementProvider } from '../../providers/file-management/file-management';



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

  //Strings to Help with File-Management
  storageDirectory: string = '';
  csvStr : string = '';

  constructor(private fileManagementProvider:FileManagementProvider, private parseProvider: ParseServerProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.listQuery();
    
    //JSON File
    var items = [
      { name: "Dona", lname: "Luisa", sex: "Female" },
      { name: "Doggy", lname: "Dog", sex: "Dog?" },
      { name: "Toilet", lname: "Man", sex: "Sorry" }
    ];
    //Pushes JSON "items" into "csvStr" then calls "convertToCSV" to convert the files
    this.csvStr = this.convertToCSV(items);
    console.log(this.csvStr);
    this.storageDirectory = fileManagementProvider.getStorageDirectory();
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

  //Save JSON data to CSV file
  convertToCSV(items) {
    const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
    
    const headers = Object.keys(items[0])
    
    var csv = items.map(row => headers.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(';'))
    csv.unshift(headers.join(';'))

    return csv.join('\r\n'); 
  }

  saveCsv() {
      this.fileManagementProvider.save(this.storageDirectory, "file.csv", "text/csv", this.csvStr);
  }
}

