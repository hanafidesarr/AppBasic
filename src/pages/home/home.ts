import { Component } from '@angular/core';
import { NavController, App, IonicPage } from 'ionic-angular';

// Services
import { AuthServicesProvider } from '../../providers/auth-services/auth-services';
import { SharedServicesProvider } from '../../providers/shared-services/shared-services';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  statusLogin: boolean = false;

  constructor(
    public _app: App,
    public _navCtrl: NavController,
    public _authServices: AuthServicesProvider,
    public _sharedServices: SharedServicesProvider) {

  }

  ionViewDidEnter() {
    this.statusLogin = this._authServices.getLoginStatus();
    this._sharedServices.showLoader().then(response => {
      if (!this.statusLogin) {
        this._sharedServices.hideLoader();
        this._app.getRootNav().setRoot('LoginPage');
      } else {
        this._sharedServices.hideLoader();
      }
    })
  }

  doLogOut() {
    this._authServices.doLogOut();
    this._navCtrl.push('LoginPage');
  }
}
