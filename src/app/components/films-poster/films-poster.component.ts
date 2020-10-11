import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../interfaces/cartelera-interface';

@Component({
  selector: 'app-films-poster',
  templateUrl: './films-poster.component.html',
  styleUrls: ['./films-poster.component.css']
})
export class FilmsPosterComponent implements OnInit {

  @Input() movies:Movie
  constructor(private router:Router) { }

  ngOnInit(): void {

  }
  onClickMovie(id){
   this.router.navigate(['/film',id])
  }

}
