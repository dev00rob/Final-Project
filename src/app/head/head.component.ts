import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  
  title = 'Rob\'s movie database search app';

  constructor() { }

  ngOnInit() {
  }

}
