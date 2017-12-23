import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-register-type-seller',
  templateUrl: 'register-type-seller.html',
})
export class RegisterTypeSellerPage {

  typeSellers: Array<any> = [
    { 'image': '/assets/img/photo.jpg', 'displayName':'Traveler', 'value': 'traveler' },
    { 'image': '/assets/img/photo.jpg', 'displayName':'Stay', 'value': 'stay' }]

  constructor(
    public _navParams: NavParams,
    public _navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterTypeSellerPage');
  }

}
