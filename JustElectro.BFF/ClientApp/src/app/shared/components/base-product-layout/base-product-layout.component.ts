import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { CtaBannerComponent } from '../cta-banner/cta-banner.component';
import { CertificationsSectionComponent } from '../certifications-section/certifications-section.component';

@Component({
  selector: 'app-base-product-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    CtaBannerComponent,
    CertificationsSectionComponent,
    RouterLink,
  ],
  templateUrl: './base-product-layout.component.html',
})
export class BaseProductLayoutComponent {}
