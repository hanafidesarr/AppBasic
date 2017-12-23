import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';

// Services
import { SharedServicesProvider } from '../../providers/shared-services/shared-services';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  statusLogin: boolean = false;

  constructor(
    public _app: App,
    public _navCtrl: NavController,
    public _sharedServices: SharedServicesProvider) {
  }
  ionViewDidEnter() {
    this._sharedServices.showLoader().then(response => {
      if (!this.statusLogin) {
        this._sharedServices.hideLoader();
        this._app.getRootNav().setRoot(LoginPage);
      }
    })
  }
}
