import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Angular2TokenService } from 'angular2-token';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

// Autentification page
import { RegisterPage } from '../pages/register/register';
import { RegisterTypeSellerPage } from '../pages/register/register-type-seller/register-type-seller';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Service
import { AuthServicesProvider } from '../providers/auth-services/auth-services';
import { SharedServicesProvider } from '../providers/shared-services/shared-services';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RegisterPage,
    RegisterTypeSellerPage,
    LoginPage
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RegisterPage,
    RegisterTypeSellerPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthServicesProvider,
    Angular2TokenService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SharedServicesProvider
  ]
})
export class AppModule {}
