import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private _http: HttpClient) { }
  
  // console.log("heyooo");
  baseball: string = "Babe Ruth";
  baseUrl: string = "http://rob-spring-2018-phortonssf.c9users.io:8080/api/appUsers/";
  loginURL: string = "http://rob-spring-2018-phortonssf.c9users.io:8080/api/appUsers/login";
  // loginURL: string = baseUrl+"login";
  
  // regURL: string = 'http://rob-spring-2018-phortonssf.c9users.io:8080/api/appUsers';
  // userQueryURL: string = "http://rob-spring-2018-phortonssf.c9users.io:8080/api/appUsers/";
  
  userID;
  userRes;

  register(user){
    return this._http.post(this.baseUrl, user);
  }

  login(user){
    return this._http.post(this.loginURL, user);
  }

  queryUser(){
    this.userID = sessionStorage.getItem('userId');
    console.log('This user\'s userID', this.userID);
    //http://rob-spring-2018-phortonssf.c9users.io:8080/api/appUsers/5b0f65d7665821c04e9171c7
    return this._http.get(this.baseUrl+this.userID).subscribe(
      res => {
        console.log('user data', res);
        this.userRes = res;
      }
    );
  }

}