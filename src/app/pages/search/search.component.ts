import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetFilmsService } from '../../services/get-films.service';
import { Movie } from '../../interfaces/cartelera-interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  moviesResults =[];
  constructor(private _gf:GetFilmsService,
              private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.active.params.subscribe(params=>{
   
      this._gf.searchMovies(params.text).subscribe((resp:any)=>{
        this.moviesResults = resp.results
      })
    })
  }
}
