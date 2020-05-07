import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

// import { FlexLayoutModule } from '@angular/flex-layout';

import {
  SwiperModule, SwiperConfigInterface,
  SWIPER_CONFIG
} from 'ngx-swiper-wrapper';

import { AppComponent } from './app.component';
import { SlideshowComponent } from "./slideshow/slideshow.component";

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 2,
  slidesPerView: 1,
  centeredSlides: true
};

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    SlideshowComponent
  ],
  imports: [
    SwiperModule,
    BrowserModule,
    // FlexLayoutModule
  ],
  exports: [
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class AppModule { }
