import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { SwiperModule, SwiperConfigInterface, SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { AppComponent } from './app.component';
import { SlideshowComponent } from "./slideshow/slideshow.component";
import { FormsModule } from '@angular/forms';
import { NgxDocViewerModule } from 'ngx-doc-viewer';

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
    BrowserAnimationsModule,
    DropdownModule,
    ButtonModule,
    FormsModule,
    DialogModule,
    NgxDocViewerModule
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
