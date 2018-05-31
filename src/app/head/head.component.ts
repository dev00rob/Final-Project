import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  
  
  
  userName = 'Rob';

  constructor(private _user: UserService) { 
  }

  ngOnInit() {
    if(this._user && this._user.userID){
      console.log('This has a userID');
    }
  }

}
