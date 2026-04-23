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
      title="Contact"
      [breadcrumbs]="[{ label: 'acasă', route: '/' }, { label: 'contact', route: '/contact' }]"
    />
    <app-contact-form-section />
    <app-footer />
  `
})
export class ContactPageComponent {}
