import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { RequestMethod } from '@angular/http';

import { AppApi } from '../../ignore-files/api-server';
import 'rxjs/add/operator/map';

// model
import { Login } from '../../models/login';
import { Register } from '../../models/register';

@Injectable()
export class AuthServicesProvider {

  constructor(public _http: HttpClient,
    public _authServiceProvider: Angular2TokenService) {

    this._authServiceProvider.init({
      globalOptions: {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    })
  }

  postLogin(login: Login) {
    return this._authServiceProvider.request({
      method: RequestMethod.Post,
      url: AppApi.BASE_API_URL + 'auth/login',
      body: login
    }).map(res => res.json())
  }

  postRegister(register: Register) {
    return this._authServiceProvider.request({
      method: RequestMethod.Post,
      url: AppApi.BASE_API_URL + 'sellers',
      body: register
    }).map(res => res.json())
  }

}
