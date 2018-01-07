import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// services
import { AuthServicesProvider } from '../../../providers/auth-services/auth-services';
import { SharedServicesProvider } from '../../../providers/shared-services/shared-services';

@IonicPage()
@Component({
  selector: 'page-register-type-seller',
  templateUrl: 'register-type-seller.html',
})

export class RegisterTypeSellerPage {

  typeSellers: Array<any> = [
    { 'image': '/assets/img/photo.jpg', 'displayName': 'Traveler', 'value': 'traveler' },
    { 'image': '/assets/img/photo.jpg', 'displayName': 'Stay', 'value': 'stay' }]

  constructor(
    public _navParams: NavParams,
    public _navCtrl: NavController,
    public _authService: AuthServicesProvider,
    public _sharedServices: SharedServicesProvider) {

  }

  doTypeSeller(typeSellerParam) {

    let typeSeller = { 'seller_type': typeSellerParam }

    this._sharedServices.showLoader().then(response => {
      this._authService.postTypeSeller(typeSeller).subscribe(response => {
        this._sharedServices.hideLoader();
        this._navCtrl.push('HomePage');
      }, (err) => {
        this._sharedServices.hideLoader();
        this._sharedServices.errorToast(err)
      })
    }, (error)=>{
      this._sharedServices.errorToast(error)
    })
  }

}
