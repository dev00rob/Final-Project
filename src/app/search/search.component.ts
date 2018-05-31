import { Component, OnInit } from '@angular/core';

import { SearchMoviesService } from '../search-movies.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchMoviesService]
})
export class SearchComponent implements OnInit {

  data = {};
  
  constructor(private _movies: SearchMoviesService, private _user: UserService) { }

  getMovie() {
    this._movies.getData()
      .subscribe( res => {
        this.data = res;   // this gives an Object error
        console.log('src/app/search.component: getMovie() works', this.data);
        }
      )
  }
  
  ngOnInit() {
  }

}
