import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class SharedServicesProvider {

  loading: any;

  constructor(
    public _toastCtrl: ToastController,
    public _loadingCtrl: LoadingController) {
  }

  errorToast(msg) {
    const toast = this._toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top',
      dismissOnPageChange: true
    });
    toast.present();
  }

  showLoader() {
    this.loading = this._loadingCtrl.create({
      content: 'loading...'
    });
    return this.loading.present();
  }

  hideLoader() {
    this.loading.dismissAll();
    this.loading = null;
  }
}
