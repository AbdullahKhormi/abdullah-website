import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  contectMe!: FormGroup;

successMessage = '';
errorMessage = '';
showMessage = false;
isClosing = false;
  constructor(private fb: FormBuilder) {
    this.contectMe = this.fb.group({
      yourName: ['', [Validators.required]],
      yourEmail: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    });

    emailjs.init('AG9bmRQp2QgOY-_Cd');
  }

  submit() {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.contectMe.valid) {
      const formValues = this.contectMe.value;
      const messageContent = `
        New message from Contact Me form:
        - Name: ${formValues.yourName}
        - Email: ${formValues.yourEmail}
        - Message: ${formValues.message}
      `;

      this.sendEmail(messageContent, 'Contact Form Message');
    }
  }

sendEmail(messageContent: string, subject: string) {
  const formValues = this.contectMe.value;

  this.successMessage = '';
  this.errorMessage = '';

  emailjs
    .send('service_mmfdc5h', 'template_5t4yvq4', {
      email: 'akhormi20@gmail.com',
      message: messageContent,
      title: subject,
    })
    .then(() => {
      this.successMessage = 'Email sent successfully!';
      this.contectMe.reset();

      this.showMessage = true;

      setTimeout(() => {
        this.isClosing = true;
      }, 2500);
      setTimeout(() => {
        this.successMessage = '';
        this.showMessage = false;
        this.isClosing = false;
      }, 3500);
    })
    .catch(() => {
     this.errorMessage = 'Failed to send email. Please try again.';
      this.showMessage = true;

      setTimeout(() => {
        this.isClosing = true;
      }, 2500);

      setTimeout(() => {
        this.errorMessage = '';
        this.showMessage = false;
        this.isClosing = false;
      }, 3500);
    });
}

}
