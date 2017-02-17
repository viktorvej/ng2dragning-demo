import { Component, OnInit } from '@angular/core';

import { TvShowService } from './tv-show.service';

@Component({
  selector: 'tv-shows-list',
  templateUrl: 'app/tv-shows/tv-shows-list.component.html',
  styles: [`
    .container {
      margin-top: 80px;
    }
    img {
      max-width: 100%;
      cursor: pointer;
    }
    .tv-show:nth-child(3n+1) {
      clear:both;
    }
    ul {
      margin-top: 20px;
    }  
  `]
})
export class TvShowsListComponent implements OnInit {
 tvShows: any

  constructor(private tvShowService: TvShowService) {
     
  }

  ngOnInit() {
    this.tvShows = this.tvShowService.getTvShows();
  }
  
  addShow() {
  }
}