import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OfficeLocation } from '../../models/contact.models';

@Component({
  selector: 'app-contact-form-section',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form-section.component.html',
  styleUrl: './contact-form-section.component.scss'
})
export class ContactFormSectionComponent {
  private fb = inject(FormBuilder);

  submitted = signal(false);
  submitSuccess = signal(false);

  offices: OfficeLocation[] = [
    {
      city: 'San Francisco, US',
      description: 'Our presence in this iconic city reflects our dedication to being innovation.',
      email: 'info@domain.com',
      address: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
      phone: '(+0) 123 465 7890',
    },
    {
      city: 'London, UK',
      description: 'Our presence in this iconic city reflects our dedication to being innovation.',
      email: 'info@domain.com',
      address: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
      phone: '(+0) 123 465 7890',
    },
  ];

  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  get f() {
    return this.contactForm.controls;
  }

  onSubmit(): void {
    this.submitted.set(true);
    if (this.contactForm.invalid) return;

    // TODO: conectează la API când e gata backend-ul
    console.log('Contact form submitted:', this.contactForm.value);
    this.submitSuccess.set(true);
    this.contactForm.reset();
    this.submitted.set(false);
  }
}
