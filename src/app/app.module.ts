//Modules
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Ng2SmartTableModule } from 'ng2-smart-table';

//Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChartsPage } from '../pages/charts/charts';
import { AccountPage } from '../pages/account/account';
import { MapsPage } from '../pages/maps/maps';
import { TablesPage } from '../pages/tables/tables';
//import { ListPage } from '..pages/list/list';

//My Custom Components
import { SmartTableComponent } from '../components/smart-table/smart-table'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ParseServerProvider } from '../providers/parse-server/parse-server';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChartsPage,
    AccountPage,
    MapsPage,
    TablesPage,
    SmartTableComponent
    //ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Ng2SmartTableModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChartsPage,
    AccountPage,
    MapsPage,
    TablesPage
    //ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ParseServerProvider
  ]
})
export class AppModule {}
