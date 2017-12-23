import { Angular2TokenService } from 'angular2-token';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { NgModule, ErrorHandler } from '@angular/core';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';

// Providers
import { AuthServicesProvider } from '../providers/auth-services/auth-services';
import { SharedServicesProvider } from '../providers/shared-services/shared-services';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthServicesProvider,
    Angular2TokenService,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SharedServicesProvider
  ]
})
export class AppModule { }
