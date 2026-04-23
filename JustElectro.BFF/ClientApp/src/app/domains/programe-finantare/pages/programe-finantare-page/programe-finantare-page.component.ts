import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/header/header.component';
import { FooterComponent } from '../../../../shared/footer/footer.component';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';
import { CtaBannerComponent } from '../../../../shared/components/cta-banner/cta-banner.component';
import { ProgrameFinantareListSectionComponent } from '../../components/programe-finantare-list-section/programe-finantare-list-section.component';
import { CertificationsSectionComponent } from '../../../../shared/components/certifications-section/certifications-section.component';

@Component({
  selector: 'app-programe-finantare-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    PageHeaderComponent,
    CtaBannerComponent,
    ProgrameFinantareListSectionComponent,
    CertificationsSectionComponent,
  ],
  template: `
    <app-header />
    <app-page-header
      title="Programe Finanțare"
      [breadcrumbs]="[{ label: 'acasă', route: '/' }, { label: 'programe finanțare' }]"
    />
    <app-programe-finantare-list-section />
    <app-cta-banner
      label="contact"
      title="Vrei să accesezi o finanțare? Hai să vorbim!"
      description="Experții noștri sunt pregătiți să te ajute să înțelegi cum poți accesa fondurile disponibile. Programează o consultație gratuită."
      buttonText="get started"
      buttonRoute="/contact"
    />
    <app-certifications-section />
    <app-footer />
  `
})
export class ProgrameFinantarePageComponent {}
