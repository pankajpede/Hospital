import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [],
  imports: [BrowserModule,BrowserAnimationsModule,CarouselModule],
  exports:[CarouselModule],
  providers: [],
  bootstrap: []
})
export class AppModule { }
