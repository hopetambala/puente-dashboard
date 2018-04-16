//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import  * as FileSaver  from 'file-saver';
import { File } from '@ionic-native/file';

/*
  Generated class for the FileManagementProvider provider.

  http://alferov.github.io/angular-file-saver/
*/
@Injectable()
export class FileManagementProvider {
  constructor(public platform: Platform) {

  }   

  save(fileDestiny, fileName, fileMimeType, fileData) {
    let blob = new Blob([fileData], {type: fileMimeType});
    var file = new File();
    if (!this.platform.is('android')) {
      FileSaver.saveAs(blob, fileName); 
    } else {
      file.writeFile(fileDestiny, fileName, blob).then(()=> {
        alert("file created at: " + fileDestiny);
      }).catch(()=>{
      alert("error creating file at :" + fileDestiny);
      })
  }
}

  public getStorageDirectory():string {
      let src:string = "";

      /*
      if (this.platform.is('android')) {
       src = cordova.file.externalDataDirectory;
      }   
      */
      return src;          
  }
}