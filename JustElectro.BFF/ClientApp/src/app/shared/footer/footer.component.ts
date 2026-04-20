import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'despre noi', route: '/about' },
    { label: 'servicii', route: '/services' },
    { label: 'programe finanțare', route: '/programe-finantare' },
    { label: 'portofoliu', route: '/portofoliu' },
    { label: 'catalog', route: '/catalog' },
    { label: 'contact', route: '/contact' },
  ];

  socialLinks = [
    { icon: 'fa-brands fa-facebook-f', url: '#' },
    { icon: 'fa-brands fa-twitter', url: '#' },
    { icon: 'fa-brands fa-linkedin-in', url: '#' },
    { icon: 'fa-brands fa-instagram', url: '#' },
  ];

  newsletterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.newsletterForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onNewsletterSubmit(): void {
    if (this.newsletterForm.valid) {
      console.log('Newsletter:', this.newsletterForm.value);
      this.newsletterForm.reset();
    }
  }
}
