import { Component, ViewChild } from '@angular/core';

import {
  SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent {
  public show: boolean = true;

  public slides = [
    {
      title: "Assesment Test Pilot",
      image: "https://swiperjs.com/demos/images/nature-1.jpg",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi adipisci, accusantium assumenda maiores eum fugit"
    },
    {
      title: "Pwc Professional",
      image: "https://swiperjs.com/demos/images/nature-2.jpg",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi adipisci, accusantium assumenda maiores eum fugit"
    },
    {
      title: "Skill Management",
      image: "https://swiperjs.com/demos/images/nature-3.jpg",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi adipisci, accusantium assumenda maiores eum fugit"
    },
    {
      title: "My Profile",
      image: "https://swiperjs.com/demos/images/nature-4.jpg",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi adipisci, accusantium assumenda maiores eum fugit"
    },
    {
      title: "Dashboard",
      image: "https://swiperjs.com/demos/images/nature-5.jpg",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi adipisci, accusantium assumenda maiores eum fugit"
    },

  ];

  public type: string = 'component';

  public disabled: boolean = false;

  public config: SwiperConfigInterface = {
    effect: 'coverflow',
    // grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 120,
      modifier: 1,
      slideShadows: true,
    },
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    // navigation: true,
    // pagination: false
  };

  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;
  index: number = 0;

  constructor() { }

  public toggleSlidesPerView(): void {
    if (this.config.slidesPerView !== 1) {
      this.config.slidesPerView = 1;
    } else {
      this.config.slidesPerView = 2;
    }
  }

  public onIndexChange(index: number): void {
    console.log('Swiper index: ', index);
  }

  public onSwiperEvent(event: string): void {
    console.log('Swiper event: ', event);
  }

  swipeToIndex(index = 2) {
    this.index = index;
  }
}
