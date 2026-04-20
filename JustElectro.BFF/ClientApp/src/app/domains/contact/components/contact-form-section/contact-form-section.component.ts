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
      city: 'Zalău, România',
      description: 'Construim soluții energetice durabile, bazate pe inovație și eficiență.',
      email: 'office@just-electro.ro',
      address: 'Bulevardul Mihai Viteazul 84C , Zalau, Romania , 450066',
      phone: '0744 576 486 ,  0771 737 189',
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
