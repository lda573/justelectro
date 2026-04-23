import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/header/header.component';
import { FooterComponent } from '../../../../shared/footer/footer.component';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';
import { CtaBannerComponent } from '../../../../shared/components/cta-banner/cta-banner.component';
import { CertificationsSectionComponent } from '../../../../shared/components/certifications-section/certifications-section.component';

@Component({
  selector: 'app-catalog-product-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    PageHeaderComponent,
    CtaBannerComponent,
    CertificationsSectionComponent,
  ],
  templateUrl: './catalog-product-page.component.html',
})
export class CatalogProductPageComponent {}
