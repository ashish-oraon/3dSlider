import { Component, ViewChild, OnInit } from '@angular/core';
import Slides from '../../assets/datasource/slides.js';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface, SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  public show: boolean = true;
  selectedSlide: any;
  public slides = Slides;

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
  display: boolean = false;
  viewer: string = 'google';
  selectedType: string = 'pptx';
  doc: string = 'https://files.fm/down.php?i=sdymh2y6';
  slidesDropdown: { index: number; title: string; image: string; desc: string; }[];

  constructor() { }
  ngOnInit(): void {
    this.slidesDropdown = this.slides.map((el, index, arr) => {
      return { ...el, index: index }
    })
  }

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

  swipeToIndex(index = 0) {
    this.directiveRef.setIndex(index, Math.round(this.directiveRef.getIndex() - index) / 30 * 400);
  }
  onSlideSelect(slide) {
    this.swipeToIndex(slide.index);
  }

  showDialog(doc) {
    this.display = true;
    this.doc = doc;
  }
}
