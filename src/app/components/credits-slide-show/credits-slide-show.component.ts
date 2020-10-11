import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-credits-slide-show',
  templateUrl: './credits-slide-show.component.html',
  styleUrls: ['./credits-slide-show.component.css']
})
export class CreditsSlideShowComponent implements OnInit, AfterViewInit{

  @Input() actors;
  constructor() { }

  ngOnInit(): void {
   
  }
  ngAfterViewInit(){
    const swiper = new Swiper('.swiper-container',{
      slidesPerView:5.3,
      freeMode:true,
      spaceBetween: 14
    });
  }

}
