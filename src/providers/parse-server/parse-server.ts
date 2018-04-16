//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Parse } from 'parse';

// Constants
import { ENV } from '../../app/app.constant';

/*
  Generated class for the ParseServerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ParseServerProvider {
  private parseAppId: string = ENV.parseAppId;
  private parseServerUrl: string = ENV.parseServerUrl;
  //private parseJavascriptKey: string = ENV.parseJavascriptKey;

  constructor() {
    console.log('Hello ParseServerProvider Provider');
    this.parseInitialize();
    console.log('Initiated Parse');
  }

  //Initialize Parse Server
  private parseInitialize() {
    Parse.initialize(this.parseAppId);
    Parse.serverURL = this.parseServerUrl;
  }

  //This is Retrieving Survey Results from Parse Server
  //This is a copy of function in puente-data-colleciton../providers/parse
  public getQuery(offset: number = 0, limit: number = 3, parseObject): Promise<any> {
    //Returns the resolve (the query) and if there's an error, rejects
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //Creates local object based on "SurveyData" Object in Parse-Server
        //Make sure parseObject's a string
        const ObjectData = Parse.Object.extend(parseObject);

        //Queries the ObjectData class from Parse Server
        let query = new Parse.Query(ObjectData);
        
        //You can skip the first results by setting skip
        query.skip(offset);

        //You can limit the number of results by setting "limit"
        query.limit(limit);

        //Below searches what's in the surveyPoints array
        query.find().then((objectPoints) => {
          resolve(objectPoints);
        }, (error) => {
          reject(error);
        });
      }, 500);
    });
  }

}

