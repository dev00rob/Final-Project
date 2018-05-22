import { Component, OnInit } from '@angular/core';

import { SearchMoviesService } from '../search-movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchMoviesService]
})
export class SearchComponent implements OnInit {

  constructor(private searchMoviesService: SearchMoviesService) { }

  ngOnInit() {
  }

}
