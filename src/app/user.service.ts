import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private _http: HttpClient) { }
  
  regURL: string = 'http://rob-spring-2018-phortonssf.c9users.io:8080/api/appUsers';
  loginURL: string = "http://rob-spring-2018-phortonssf.c9users.io:8080/api/appUsers/login";
  userQueryURL: string = "http://rob-spring-2018-phortonssf.c9users.io:8080/api/appUsers/";
  
  userID;
  userRes;

  register(user){
    return this._http.post(this.regURL, user)
  }

  login(user){
    return this._http.post(this.loginURL, user)
  }

  queryUser(){
    this.userID = sessionStorage.getItem('userId');
    console.log('This user\'s userID', this.userID);
    return this._http.get(this.userQueryURL+this.userID).subscribe(
      res => {
        console.log('user data', res)
        this.userRes = res;
      }
    );
  }

}