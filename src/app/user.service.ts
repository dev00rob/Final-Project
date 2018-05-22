import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private _http: HttpClient) { }
  
  regURL: string = 'https://daniel-q2-2018-phortonssf.c9users.io:8080/api/appUsers';
  
  data = {
    firstName: "Shawn",
    lastName: "Horton",
    email: "testing1223@ssftest.com",
    password: "testing123"
  }

  register(user){
    return this._http.post(this.regURL, user)
  }

 

}