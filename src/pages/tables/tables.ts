import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ParseServerProvider } from '../../providers/parse-server/parse-server';
import { FileManagementProvider } from '../../providers/file-management/file-management';
import { AuthProvider } from '../../providers/auth/auth';



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

  queryResults = [];
  dataArray = [];
  communityRecords: any[] = [];

  //Strings to Help with File-Management
  storageDirectory: string = '';
  csvStr : string = '';

  constructor(private fileManagementProvider:FileManagementProvider,
    public auth: AuthProvider, 
    public parseProvider: ParseServerProvider, 
    public navCtrl: NavController, 
    public navParams: NavParams) {
    //this.listQuery();
    //this.convertQuery();
   

    this.aggregateRecords();
    
    //TEST JSON File
    /*
    var items = [
      { name: "Dona", lname: "Luisa", sex: "Female" },
      { name: "Doggy", lname: "Dog", sex: "Dog?" },
      { name: "Toilet", lname: "Man", sex: "Sorry" }
    ];
    */
    //Pushes JSON "items" into "csvStr" then calls "convertToCSV" to convert the files
    //var items = this.convertToCSV(this.dataArray);
    //this.csvStr = items;
    //this.storageDirectory = fileManagementProvider.getStorageDirectory();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TablesPage');
    
  }


  //Function that constructs an Array of Community Records
  public aggregateRecords(){
    let offset = this.communityRecords.length;
    let limit = 1000;


    return this.parseProvider.basicQuery(offset,limit,'SurveyData','surveyingOrganization',String(this.auth.currentUser().organization)).then((result) =>{
      for (let i = 0; i < result.length; i++) {
        let object = result[i];
        
        if (object.attributes != null) {
          this.communityRecords.push(object.attributes);
        }
      }
      console.log(this.communityRecords);

    }, (error) => {
      console.log(error);
    });
  }


  public listQuery(){
    //Lists QueryData
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
  //TODO
  public convertQuery(){
    //Creates a natural "skip" of certain results based on surveyPoints length
    let offset = this.queryResults.length;

    //Limits the length of the searched results
    let limit = 100;

    //Returns the query then displays those "result" by pushing into surveyPoints object
    return this.parseProvider.getQuery(offset, limit, 'SurveyData').then((result) => {
      for (let i = 0; i < result.length; i++) {
        let object = result[i];
        this.dataArray.push(object.attributes);
        //console.log(object.attributes);
      }
      //console.log(dataArray);
      console.log(this.dataArray);

    }, (error) => {
      console.log(error);
    });
    //console.log(dataArray);
  }

  convertToCSV(items) {
    //TODO?
    //Save JSON data to CSV file
    const replacer = (key, value) => value === null ? 'NaN' : value ;// specify how you want to handle null values here
    
    const headers = Object.keys(items[0]);
    
    var csv = items.map(row => headers.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    csv.unshift(headers.join(','));

    return csv.join('\r\n'); 
  }

  saveCsv() {
      this.fileManagementProvider.save(this.storageDirectory, "file.csv", "text/csv", this.csvStr);
  }
}

