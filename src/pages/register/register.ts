import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CustomValidators } from 'ng2-validation';

// model
import { Register } from '../../model/register';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  registerForm: FormGroup;
  register: Register;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _formBuilder: FormBuilder) {
  }

  buildForm() {
    this.registerForm = this._formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, CustomValidators.email]],
      phone: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.buildForm();
  }

  onSave() {
    this.registerForm.value
  }
}
