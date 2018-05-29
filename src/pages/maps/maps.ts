import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


//Provides
import { AuthProvider} from '../../providers/auth/auth';
import { ParseServerProvider } from '../../providers/parse-server/parse-server';
/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//Angular Thing
//@IonicPage()
declare var google;

@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  markerArray = [];
  userInformation = {
    surveyingUser: this.auth.currentUser().name,
    surveyingOrganization: this.auth.currentUser().organization,
    
    latitude: null,
    longitude: null,

    image : 'assets/icon/user.png'
  };

  
  queryimage = 'assets/icon/users.png';

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public geolocation: Geolocation,
    private auth: AuthProvider, 
    public navParams: NavParams,
    public parseProvider: ParseServerProvider) {
  }

  ionViewWillEnter() {
  }
  ionViewDidLoad() {
    this.initializeMap().then(() => {
      this.addMultipleMarkers().then(() => {
        this.setMarkersMapOnAll(this.map);
      });
    });
     
  }
  ionViewDidEnter() {      
  }
  ionViewDidLeave() {
  }

  /*
  Map Creation
  */
  public initializeMap() {
    //This function gets the static coordinates of the user
    let locationOptions = { 
      timeout: 10000, 
      enableHighAccuracy: true
    };

    //Loading Controller
    let loading = this.loadingCtrl.create({
      content: 'Initializing Map...'
    });

    loading.present();

    return this.geolocation.getCurrentPosition(locationOptions).then((position) => {

        let options = {
          center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
          zoom: 5,
          fullscreenControl: true,
          mapTypeIds: ['satellite','roadmap', 'hybrid', 'terrain']
          //mapTypeId: 'satellite'
          //mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.userInformation.latitude = position.coords.latitude;
        this.userInformation.longitude = position.coords.longitude;
        loading.dismiss();
        
        /* Create Map */
        this.map = new google.maps.Map(document.getElementById("map_canvas"), options);

        /* We can show our location only if map was previously initialized */
        this.addMarker(position.coords.latitude, position.coords.longitude,'User Location', this.userInformation.image);

    }).catch((error) => {
        console.log('Error getting location', error);
      });
  }

  addMarker(latitude: number, longitude: number, markerInformation:string,image){
    /*
    * Adds a marker to the map and push to the array.
    */
    let marker = new google.maps.Marker({
        map: this.map,
        icon: image,
        animation: google.maps.Animation.DROP,
        position: {
          lat: latitude,
          lng: longitude
        },
    });

    //let markerInfo = "<h4>You are here!</h4>";
    let markerInfo = markerInformation;         

    let infoModal = new google.maps.InfoWindow({
        content: markerInfo
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoModal.open(this.map, marker);
    });

    //Google's Solution
    //Pushes marker into Array
    this.markerArray.push(marker);
  }

  addMultipleMarkers(){
    //this.getUserPosition();
        
    //Acts as Users Location
    let latitude = this.userInformation.latitude;
    let longitude = this.userInformation.longitude;

    /*
      Parse
    */

    //Limits the length of the searched results
    let limit = 500;
    let parseClass = 'SurveyData';
    let parseField = 'surveyingOrganization';
    let parseFieldValue = String(this.auth.currentUser().organization);

    //return this.parseProvider.geoQuery(latitude,longitude,limit, parseClass).then((result) => {
    return this.parseProvider.geoQuery(latitude,longitude,limit, parseClass,parseField,parseFieldValue).then((result) => {
      for (let i = 0; i < result.length; i++) {
        let object = result[i];
        //this.addMarker([object.get('latitude'),object.get('longitude')],"Local Survey Queries");
        
        //Loops and pushes each marker into markerArray
        if (object.get('latitude') != null || object.get('longitude') != null) {
          this.addMarker(object.get('latitude'),object.get('longitude'),object.get('fname'),this.queryimage);
        }
      }
    }, (error) => {
      console.log(error);
    });
  }

  setMarkersMapOnAll(map) {
    // Sets the map on all markers in the array.
    for (var i = 0; i < this.markerArray.length; i++) {
      this.markerArray[i].setMap(map);
    }
  }

  showMarkers() {
    // Shows any markers currently in the array.
    this.setMarkersMapOnAll(this.map);
  }
  
  clearMarkers() {
    // Removes the markers from the map, but keeps them in the array.
    this.setMarkersMapOnAll(null);
  }

  
  deleteMarkers() {
    // Deletes all markers in the array by removing references to them.
    this.clearMarkers();
    this.markerArray = [];
    this.addMarker(this.userInformation.latitude,this.userInformation.longitude,'User Location',this.userInformation.image);
  }

  
  restartMarkers(){
    // Reinitiate Everything
    this.addMultipleMarkers().then(() => {
      this.setMarkersMapOnAll(this.map);
    });
  }
}
