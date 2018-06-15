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
  private parseJavascriptKey: string = ENV.parseJavascriptKey;

  constructor() {
    console.log('Hello ParseServerProvider Provider');
    this.parseInitialize();
  }

  //Initialize Parse Server
  private parseInitialize() {
    Parse.initialize(this.parseAppId,this.parseJavascriptKey);
    console.log('Initiated Parse');
    Parse.serverURL = this.parseServerUrl;
    
  }

  public basicQuery(offset: number = 0, limit: number = 3, parseObject: string, parseColumn: string, parseParam: string): Promise<any> {
    //Returns the resolve (the query) and if there's an error, rejects
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //Creates local object based on "SurveyData" Object in Parse-Server
        const SurveyData = Parse.Object.extend(parseObject);

        //Queries the SurveyData class from Parse Server
        let query = new Parse.Query(SurveyData);
        
        //You can skip the first results by setting skip
        query.skip(offset);

        //You can limit the number of results by setting "limit"
        query.limit(limit);

        //Limiting Results based on a class
        query.equalTo(parseColumn,parseParam);

        //Below searches what's in the surveyPoints array
        query.find().then((surveyPoints) => {
          resolve(surveyPoints);
        }, (error) => {
          reject(error);
        });
      }, 500);
    });
  }

  
  public getQuery(offset: number = 0, limit: number = 3, parseObject): Promise<any> {
    //Legacy
    //This is Retrieving Survey Results from Parse Server
    //This is a copy of function in puente-data-colleciton../providers/parse
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

       
        query.find().then((objectPoints) => {
          resolve(objectPoints);
        }, (error) => {
          reject(error);
        });
      }, 500);
    });
  }

  //This is Retrieving Survey Results from Parse Server
  public geoQuery(lat: number, long: number, limit: number , parseClass: string, parseColumn: string, parseParam: string): Promise<any> {
    //Returns the resolve (the query) and if there's an error, rejects
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //Creates local object based on "SurveyData" Object in Parse-Server
        const ParseClass = Parse.Object.extend(parseClass);

        //Users Location by creaing geopoint
        //var myLocation = new Parse.GeoPoint({latitude: lat, longitude: long});

        //Query
        //Queries the Class from Parse Server
        let query = new Parse.Query(ParseClass);
        
        // Interested in locations (GeoPoint Column in Parse) near user.
        //query.near("location", myLocation);
        //query.withinMiles("location", myLocation, 5);

        //You can limit the number of results by setting "limit"
        query.limit(limit);

        //Limiting Results based on a specific paramater in a specific field/column
        query.equalTo(parseColumn, parseParam);

        //Below searches what's in the surveyPoints array
        query.find().then((results) => {
          resolve(results);
        }, (error) => {
          reject(error);
        });
      }, 500);
    });
  }

  runCloudFunction (funcname : string, funcbody : any) {
    return Parse.Cloud.run(funcname, funcbody);
  }

}

