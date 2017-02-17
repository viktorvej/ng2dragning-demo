import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TvShowsListComponent } from './tv-shows/tv-shows-list.component';
import { TvShowService } from './tv-shows/tv-show.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    TvShowsListComponent 
  ],
  providers: [
    TvShowService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
