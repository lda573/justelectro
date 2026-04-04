import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/header/header.component';
import { FooterComponent } from '../../../../shared/footer/footer.component';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';
import { ContactFormSectionComponent } from '../../components/contact-form-section/contact-form-section.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    PageHeaderComponent,
    ContactFormSectionComponent
  ],
  template: `
    <app-header />
    <app-page-header
      title="Contact Us"
      [breadcrumbs]="[{ label: 'home', route: '/' }, { label: 'contact us' }]"
    />
    <app-contact-form-section />
    <app-footer />
  `
})
export class ContactPageComponent {}
