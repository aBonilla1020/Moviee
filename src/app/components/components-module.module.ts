import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsPosterComponent } from './films-poster/films-poster.component';
import { CreditsSlideShowComponent } from './credits-slide-show/credits-slide-show.component';





@NgModule({
  declarations: [FilmsPosterComponent, CreditsSlideShowComponent],
  imports: [
    CommonModule
  ],
  exports:[
    FilmsPosterComponent
  ]
})
export class ComponentsModuleModule { }
