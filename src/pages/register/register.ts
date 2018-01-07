import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CustomValidators } from 'ng2-validation';

// services
import { AuthServicesProvider } from '../../providers/auth-services/auth-services';
import { SharedServicesProvider } from '../../providers/shared-services/shared-services';

// model
import { Register } from '../../models/register';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  registerForm: FormGroup;
  register: Register;

  constructor(
    public _navCtrl: NavController,
    public _formBuilder: FormBuilder,
    public _authService: AuthServicesProvider,
    public _sharedServices: SharedServicesProvider
  ) {
  }

  buildForm() {
    this.registerForm = this._formBuilder.group({
      email: ['hanafi@yahoo.com', [Validators.required, CustomValidators.email]],
      phone: ['085798103294', Validators.required],
      password: ['123456', Validators.required],
      password_confirmation: ['123456', Validators.required]
    });
  }

  ngOnInit() {
    this.buildForm();
  }

  onSave() {
    this.register = this.registerForm.value;
    this._sharedServices.showLoader().then(response => {
      this._authService.postRegister(this.register).subscribe(response => {

        this._authService.setLoginStatus(response);
        
        this._sharedServices.hideLoader();
        this._navCtrl.push('RegisterTypeSellerPage');
      }, (err) => {
        this._sharedServices.hideLoader();
        this._sharedServices.errorToast('Error')
        this._navCtrl.push('RegisterTypeSellerPage');
      })
    })
  }
}
