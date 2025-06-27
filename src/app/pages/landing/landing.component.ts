import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { CarouselModule } from 'ngx-owl-carousel-o';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
declare var $ : any;


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CarouselModule,CommonModule,RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  
  showSuccessModal : boolean = false;

  testimonial1: OwlOptions = {
    loop: true,
    autoplay: true,
    center: false,
    dots: true,
    autoHeight: true,
    autoWidth: true,
    nav: false,
    navText: [ '<i class="ri-arrow-left-s-line"></i>', '<i class="ri-arrow-right-s-line"></i>' ],
    responsive: {
      0: {
        items: 1,
      },
      991: {
        items: 1,
      },
      1024: {
        items: 1,
      },

    }
  }
  
  
  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_07sry8n', 'template_spy9kpk', e.target as HTMLFormElement, {
        publicKey: 'O-7JrDdZ6ClaoExpK',
      })
      .then(
        () => {
          this.showSuccessModal = true
          console.log('SUCCESS!');
          alert('We have Got Your Enquiry')
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }

  ngOnInit() {
    window.scroll(0,0);
  }
}

