import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Movie } from '../../interfaces/cartelera-interface';


@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit, AfterViewInit {

  @Input() movie:Movie[] 
  mySwiper:Swiper;
  constructor() { }


  ngAfterViewInit(){
    this.mySwiper = new Swiper('.swiper-container', {
      loop: true,
       },
    )}



  ngOnInit(): void {
  
  }
  
  next(){
    this.mySwiper.slideNext();
  }
  previus(){
    this.mySwiper.slidePrev();
  }

}
