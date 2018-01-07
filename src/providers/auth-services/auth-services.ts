import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';

import { AppApi } from '../../ignore-files/api-server';
import 'rxjs/add/operator/map';

// model
import { Login } from '../../models/login';
import { Register } from '../../models/register';

@Injectable()
export class AuthServicesProvider {
  authHeaders: any = null;
  constructor(public _http: Http) {
    this.authHeaders = localStorage.getItem('token');
  }

  getDefaultHeaders(): Headers {
    const headers = new Headers();

    headers.append('Authorization', this.authHeaders);
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Accept-Language', 'en_US');
    
    const timezoneOffset = new Date().getTimezoneOffset();
    headers.append('Timezone-Offset', timezoneOffset.toString());
    return headers;
  }

  setLoginStatus(e) {
    localStorage.setItem('token', e.auth_token);
    localStorage.setItem('statusLogin', 'true');
  }

  getLoginStatus() {
    const statusLogin = JSON.parse(localStorage.getItem('statusLogin'));
    return statusLogin;  
  }

  doLogOut() {
    localStorage.clear()
    return true;
  }

  postLogin(login: Login) {
    const headers = this.getDefaultHeaders();
    return this._http.post(AppApi.BASE_API_URL + 'auth/login', login, {headers: headers}).map(res => res.json())
  }

  postRegister(register: Register) {
    const headers = this.getDefaultHeaders();
    return this._http.post(AppApi.BASE_API_URL + 'sellers', register, {headers: headers}).map(res => res.json())
  }

  postTypeSeller(typeSeller: object) {
    const headers = this.getDefaultHeaders();
    return this._http.post(AppApi.BASE_API_URL + 'seller_accounts', typeSeller, {headers: headers}).map(res => res)
  }

}
