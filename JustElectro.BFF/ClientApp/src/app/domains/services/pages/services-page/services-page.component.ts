import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/header/header.component';
import { FooterComponent } from '../../../../shared/footer/footer.component';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';
import { CtaBannerComponent } from '../../../../shared/components/cta-banner/cta-banner.component';
import { TestimonialsSectionComponent } from '../../../../shared/components/testimonials-section/testimonials-section.component';
import { ServicesGridSectionComponent } from '../../components/services-grid-section/services-grid-section.component';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    PageHeaderComponent,
    CtaBannerComponent,
    TestimonialsSectionComponent,
    ServicesGridSectionComponent,
  ],
  template: `
    <app-header />
    <app-page-header
      title="Servicii"
      [breadcrumbs]="[{ label: 'acasă', route: '/' }, { label: 'servicii', route: '/servicii' }]"
    />
    <app-services-grid-section />
    <app-cta-banner />
    <app-testimonials-section />
    <app-footer />
  `
})
export class ServicesPageComponent {}
