import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  statusLogin: boolean = false;

  constructor(public _navCtrl: NavController) {
  }
  ionViewDidEnter() {
    if (!this.statusLogin) {
      this._navCtrl.push(RegisterPage);
    }
  }
}
