import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetFilmsService } from '../../services/get-films.service';
import { MovieResponse } from '../../interfaces/movie-response';
import { Location } from '@angular/common';





@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  public movieDetails:MovieResponse;
  public credits = [];
  constructor(private active:ActivatedRoute,
              private _gf:GetFilmsService,
              private router:Router,
              private location:Location) { }

  ngOnInit(): void {
   const {id} = this.active.snapshot.params;

   this._gf.getMovieDetails(id).subscribe((resp:MovieResponse)=>{

    if(!resp){
      this.router.navigateByUrl('/home')
    }

    this.movieDetails = resp
   })

   this._gf.getCredits(id).subscribe(resp=>{

    this.credits = resp
   })
  }

  goBack(){
    this.location.back();
  }

}
