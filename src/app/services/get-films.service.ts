import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Movie } from '../interfaces/cartelera-interface';



@Injectable({
  providedIn: 'root'
})
export class GetFilmsService {

  loading:boolean = false;
  url:string = 'https://api.themoviedb.org';
  page = 1;
  api = 'here put your api key'

  constructor(private http:HttpClient) {

   }

   obtenerPeliculas():Observable<Movie[]>{

    if(this.loading){
      return;
    }
  
     this.loading = true;
     return this.http.get(`${this.url}/3/movie/now_playing?api_key=${this.api}&language=en-US&page=${this.page.toString()}`).pipe(
      map((resp:any)=>resp.results), 
      tap(()=> {this.page += 1,
                 this.loading = false;})
     )

   }

   resetBillboard(){
     return this.page = 1
   }
   searchMovies(text){
     return this.http.get(`${this.url}/3/search/movie?api_key=${this.api}&language=en-US&query=${text}&page=1&include_adult=false`);
   }

   getMovieDetails(id){
     return this.http.get(`${this.url}/3/movie/${id}?api_key=${this.api}&language=en-US`).pipe(
       catchError(err=> of(null))
     )
   }
   getCredits(id){
    return this.http.get(`${this.url}/3/movie/${id}/credits?api_key=${this.api}`).pipe(
      catchError(err=> of([])),
      map((resp:any)=> {return resp.cast})
    )
   }
}
