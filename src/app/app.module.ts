import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FilmComponent } from './pages/film/film.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './pages/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SlideShowComponent } from './slideShows/slide-show/slide-show.component';
import { FilmsPosterComponent } from './components/films-poster/films-poster.component';
import { RatingModule } from 'ng-starrating';
import { RouterModule } from '@angular/router';
import { CreditsSlideShowComponent } from './components/credits-slide-show/credits-slide-show.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmComponent,
    SearchComponent,
    NavbarComponent,
    SlideShowComponent,
    FilmsPosterComponent,
    CreditsSlideShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RatingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
