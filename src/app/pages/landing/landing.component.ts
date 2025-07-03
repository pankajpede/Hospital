import { Component, OnInit, inject } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CarouselModule, CommonModule, RouterLink],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  showSuccessModal = false;

  // Doctor filter properties
  specialtyFilter = 'all';
  locationFilter = 'all';
  languageFilter = 'all';

  // Sample doctors data (replace with your actual data)
  doctors = [
    {
      id: 1,
      name: 'Dr. Jaishri Adhav',
      qualification: 'MBBS, Diploma in Diabetology',
      specialty: 'diabetology',
      location: 'nanded',
      languages: ['english', 'marathi'],
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      description: 'Specializes in Type 2 Diabetes management and lifestyle modification strategies.'
    },
    {
      id: 2,
      name: 'Dr. Rajesh Sharma',
      qualification: 'MD, DM (Endocrinology)',
      specialty: 'endocrinology',
      location: 'nanded',
      languages: ['english', 'hindi'],
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
      description: 'Expert in complex endocrine disorders and insulin pump therapy.'
    },
    // Add more doctors as needed
  ];

  // Filtered doctors list
  get filteredDoctors() {
    return this.doctors.filter(doctor => {
      const specialtyMatch = this.specialtyFilter === 'all' || doctor.specialty === this.specialtyFilter;
      const locationMatch = this.locationFilter === 'all' || doctor.location === this.locationFilter;
      const languageMatch = this.languageFilter === 'all' || doctor.languages.includes(this.languageFilter);
      
      return specialtyMatch && locationMatch && languageMatch;
    });
  }

  // Carousel configuration
  testimonialCarousel: OwlOptions = {
    loop: true,
    autoplay: true,
    center: false,
    dots: true,
    autoHeight: true,
    autoWidth: true,
    nav: false,
    navText: ['<i class="ri-arrow-left-s-line"></i>', '<i class="ri-arrow-right-s-line"></i>'],
    responsive: {
      0: { items: 1 },
      576: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
      1200: { items: 3 }
    }
  };

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  async sendEmail(e: Event): Promise<void> {
    e.preventDefault();

    try {
      const form = e.target as HTMLFormElement;
      await emailjs.sendForm(
        'service_07sry8n', 
        'template_spy9kpk', 
        form, 
        { publicKey: 'O-7JrDdZ6ClaoExpK' }
      );
      
      this.showSuccessModal = true;
      form.reset();
      // Consider using a toast notification instead of alert
      alert('We have received your enquiry. Thank you!');
    } catch (error) {
      console.error('Email sending failed:', (error as EmailJSResponseStatus).text);
      alert('There was an error sending your message. Please try again later.');
    }
  }

  // Filter change handlers
  onSpecialtyChange(value: string): void {
    this.specialtyFilter = value;
  }

  onLocationChange(value: string): void {
    this.locationFilter = value;
  }

  onLanguageChange(value: string): void {
    this.languageFilter = value;
  }
}