import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  readonly rootURL = 'https://dev.sitemercado.com.br/api/login';
  dataLogin = new Login();
  httpOptions: {};
  login(formData) {
    this.dataLogin.username = formData.login;
    this.dataLogin.password = formData.password
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': 'Basic ' + btoa(this.dataLogin.username + ':' + this.dataLogin.password)
      })
    }
    return this.http.post(this.rootURL, this.dataLogin, this.httpOptions);
  }
}
