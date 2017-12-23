import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CustomValidators } from 'ng2-validation';

// services
import { AuthServicesProvider } from '../../providers/auth-services/auth-services';
import { SharedServicesProvider } from '../../providers/shared-services/shared-services';

// models
import { Login } from '../../models/login';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
  login: Login;

  constructor(
    public _navCtrl: NavController,
    public _formBuilder: FormBuilder,
    public _authService: AuthServicesProvider,
    public _sharedServices: SharedServicesProvider
  ) { }

  buildForm() {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, CustomValidators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.buildForm();
  }

  onSave() {
    this.login = this.loginForm.value;
    this._sharedServices.showLoader().then(response => {
      this._authService.postLogin(this.login).subscribe(response => {
        this._sharedServices.hideLoader();
        this._navCtrl.pop();
      }, (err) => {
        this._sharedServices.hideLoader();
        this._sharedServices.errorToast('Error')
      })
    })
  }

  goRegister() {
    this._navCtrl.push('RegisterPage')
  }
}
