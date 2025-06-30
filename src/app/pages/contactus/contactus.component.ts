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
  @ViewChild('appointmentForm') appointmentForm!: NgForm;
  showPopup: boolean = false;
  popupMessage: string = '';
  popupType: 'success' | 'error' = 'success';
  
  appointmentData = {
    name: '',
    email: '',
    phone: '',
    date: '',
    department: '',
    message: ''
  };

  departments = [
    { value: 'cardiology', label: 'Cardiology' },
    { value: 'neurology', label: 'Neurology' },
    { value: 'pediatrics', label: 'Pediatrics' },
    { value: 'orthopedics', label: 'Orthopedics' },
    { value: 'general', label: 'General Medicine' }
  ];

  formSubmitted = false;

  ngAfterViewInit() {
    feather.replace();
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  public async submitAppointment() {
    this.formSubmitted = true;
    
    // Check if form is invalid
    if (this.appointmentForm.invalid) {
      this.showNotification('Please fill all required fields correctly', 'error');
      return;
    }
    
    try {
      const templateParams = {
        patient_name: this.appointmentData.name,
        patient_email: this.appointmentData.email,
        patient_phone: this.appointmentData.phone,
        appointment_date: this.appointmentData.date,
        department: this.appointmentData.department,
        symptoms: this.appointmentData.message,
        to_email: 'appointments@hospitalname.com' // Change to your hospital email
      };
      
      await emailjs.send(
        'your_service_id', // Replace with your EmailJS service ID
        'your_template_id', // Replace with your EmailJS template ID
        templateParams,
        { publicKey: 'your_public_key' } // Replace with your EmailJS public key
      );
      
      this.showNotification('Your appointment request has been submitted successfully! We will contact you shortly to confirm.', 'success');
      this.resetForm();
      this.appointmentForm.resetForm();
    } catch (error) {
      console.error('Appointment submission failed:', error);
      this.showNotification('Failed to submit your appointment request. Please try again later or call us directly.', 'error');
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
    this.appointmentData = {
      name: '',
      email: '',
      phone: '',
      date: '',
      department: '',
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

  // Format date for display
  formatDate(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }
}