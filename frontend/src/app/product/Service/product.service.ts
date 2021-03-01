import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //debug
 //readonly rootURL = 'http://localhost:1168/api';
 
 //dotnet run
readonly rootURL = 'http://localhost:5000/api'; 

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data',
      'Accept': 'application/json'
    })
  }

  getData() {
    return this.http.get(this.rootURL + '/Product/List');
  }

  getById(id){
    return this.http.get(this.rootURL + '/Product/GetById/'+id);
  }

  postData(formData) {
    return this.http.post(this.rootURL + '/Product/Add', formData);
  }

  update(formData) {
    return this.http.put(this.rootURL + '/Product/Update',formData);
  }
  delete(id) {
    return this.http.get(this.rootURL + '/Product/Delete/' + id);
  }
}
