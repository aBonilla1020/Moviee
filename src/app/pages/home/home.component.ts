import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { GetFilmsService } from '../../services/get-films.service';
import { Movie } from '../../interfaces/cartelera-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public filmSlideShow:Movie[] = [];
  public films:Movie[] = [];

  @HostListener('window:scroll',['$event'])
  onScroll(){
    const position = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const positionMax = (document.documentElement.scrollHeight || document.body.scrollHeight);

  
    if(position > positionMax){

      if(this._gf.loading){
        return;
      }
  
      this._gf.obtenerPeliculas().subscribe((movies:any)=>{
        this.films.push(...movies)
      })
    }
  }

  constructor(private _gf:GetFilmsService) { }

  ngOnInit(): void {
    this._gf.obtenerPeliculas().subscribe((movies:any)=> {this.films=movies,
                                                        this.filmSlideShow=movies})
  }
  ngOnDestroy(){
    this._gf.resetBillboard();
  }

}
