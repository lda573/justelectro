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
    { label: 'about us', route: '/about' },
    { label: 'services', route: '/services' },
    { label: 'projects', route: '/project' },
    { label: 'meet the team', route: '/team' },
    { label: 'contact us', route: '/contact' },
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
