import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/header/header.component';
import { FooterComponent } from '../../../../shared/footer/footer.component';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';
import { CompanyCounterComponent } from '../../../../shared/components/company-counter/company-counter.component';
import { CtaBannerComponent } from '../../../../shared/components/cta-banner/cta-banner.component';
import { AboutStorySectionComponent } from '../../components/about-story-section/about-story-section.component';
import { CompanyExpertiseSectionComponent } from '../../components/company-expertise-section/company-expertise-section.component';
import { HowItWorksSectionComponent } from '../../components/how-it-works-section/how-it-works-section.component';
import { TeamSectionComponent } from '../../components/team-section/team-section.component';
import { CertificationsSectionComponent } from '../../../../shared/components/certifications-section/certifications-section.component';
import { QuoteSectionComponent } from '../../../../shared/components/quote-section/quote-section.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    PageHeaderComponent,
    CompanyCounterComponent,
    CtaBannerComponent,
    CertificationsSectionComponent,
    QuoteSectionComponent,
    AboutStorySectionComponent,
    CompanyExpertiseSectionComponent,
    HowItWorksSectionComponent,
    TeamSectionComponent,
  ],
  template: `
    <app-header />
    <app-page-header
      title="Despre noi"
      [breadcrumbs]="[{ label: 'acasă', route: '/' }, { label: 'despre noi', route: '/despre-noi' }]"
    />
    <app-about-story-section />
    <app-company-counter />
    <app-company-expertise-section />
    <app-how-it-works-section />
    <app-cta-banner />
    <app-certifications-section />
    <app-quote-section />
    <app-team-section />
    <app-footer />
  `
})
export class AboutPageComponent {}
