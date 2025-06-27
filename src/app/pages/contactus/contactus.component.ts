import { Component, ViewChild, AfterViewInit } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements AfterViewInit {
  @ViewChild('contactForm') contactForm!: NgForm;
  showPopup: boolean = false;
  popupMessage: string = '';
  popupType: 'success' | 'error' = 'success';
  
  formData = {
    name: '',
    useremail: '',
    mobile: '',
    message: ''
  };

  formSubmitted = false;

  ngAfterViewInit() {
    feather.replace();
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  public async sendEmail() {
    this.formSubmitted = true;
    
    // Check if form is invalid
    if (this.contactForm.invalid) {
      this.showNotification('Please fill all required fields correctly', 'error');
      return;
    }
    
    try {
      const templateParams = {
        name: this.formData.name,
        useremail: this.formData.useremail,
        mobile: this.formData.mobile,
        message: this.formData.message
      };
      
      await emailjs.send(
        'service_07sry8n',
        'template_spy9kpk',
        templateParams,
        { publicKey: 'O-7JrDdZ6ClaoExpK' }
      );
      
      this.showNotification('We have received your enquiry! We will contact you soon.', 'success');
      this.resetForm();
      this.contactForm.resetForm();
    } catch (error) {
      console.log('FAILED...', (error as EmailJSResponseStatus).text);
      this.showNotification('Failed to send your message. Please try again later.', 'error');
    }
  }

  showNotification(message: string, type: 'success' | 'error') {
    this.popupMessage = message;
    this.popupType = type;
    this.showPopup = true;
    
    setTimeout(() => {
      this.showPopup = false;
    }, 5000);
  }

  resetForm() {
    this.formData = {
      name: '',
      useremail: '',
      mobile: '',
      message: ''
    };
    this.formSubmitted = false;
  }

  closePopup() {
    this.showPopup = false;
  }

  // Add visual feedback for invalid fields
  getValidationClass(control: any) {
    return {
      'is-invalid': control.invalid && (control.dirty || control.touched || this.formSubmitted),
      'is-valid': control.valid && (control.dirty || control.touched)
    };
  }
}