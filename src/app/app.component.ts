import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//List of Pages in Application
import { HomePage } from '../pages/home/home';
import { ChartsPage } from '../pages/charts/charts';
import { AccountPage } from '../pages/account/account';
import { MapsPage } from '../pages/maps/maps';
import { TablesPage } from '../pages/tables/tables';
//import { ListPage } from '../pages/list/list';
import { SigninPage } from '../pages/signin/signin';


export class SinglePage {
  title : string;
  component : any;
  activated : boolean = false;

  constructor (title : string, component : any, activated : boolean) {
    this.title = title;
    this.component = component;
    this.activated = activated;
  }
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SigninPage;
  //rootPage: any = HomePage;

  pages: Array<SinglePage>;

  //Basic
  dev:Array<SinglePage> = [
    new SinglePage('Dashboard',HomePage,true),
    //new SinglePage('Models',ChartsPage,true),
    new SinglePage('Data Records',TablesPage,true),
    new SinglePage('Maps',MapsPage,true),
    new SinglePage('Account',AccountPage,true)
  ]

  //Basic
  tier1:Array<SinglePage> = [
    new SinglePage('Dashboard',HomePage,true),
    //new SinglePage('Models',ChartsPage,true),
    new SinglePage('Data Records',TablesPage,true),
    //new SinglePage('Maps',MapsPage,true),
    new SinglePage('Account',AccountPage,true)
  ]
  //Enhanced
  tier2:Array<SinglePage> = [
    new SinglePage('Dashboard',HomePage,true),
    //new SinglePage('Models',ChartsPage,true),
    new SinglePage('Data Records',TablesPage,true),
    new SinglePage('Maps',MapsPage,true),
    new SinglePage('Account',AccountPage,true)
  ]

  //Premium
  tier3:Array<SinglePage> = [
    new SinglePage('Dashboard',HomePage,true),
    new SinglePage('Data Models',ChartsPage,true),
    new SinglePage('Data Records',TablesPage,true),
    new SinglePage('Maps',MapsPage,true),
    new SinglePage('Account',AccountPage,true)
  ]


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for  ngFor and navigation
    this.pages = this.dev;

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
