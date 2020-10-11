import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FilmComponent } from './pages/film/film.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'film/:id', component: FilmComponent},
  {path:'search/:text', component: SearchComponent},
  {path:'**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
