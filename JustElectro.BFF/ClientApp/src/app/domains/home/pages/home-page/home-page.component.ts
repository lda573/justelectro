import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/header/header.component';
import { FooterComponent } from '../../../../shared/footer/footer.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { AboutIntroSectionComponent } from '../../components/about-intro-section/about-intro-section.component';
import { ServicesSectionComponent } from '../../components/services-section/services-section.component';
import { ProjectsGallerySectionComponent } from '../../components/projects-gallery-section/projects-gallery-section.component';
import { FeatureHighlightSectionComponent } from '../../components/feature-highlight-section/feature-highlight-section.component';
import { CtaBannerComponent } from '../../../../shared/components/cta-banner/cta-banner.component';
import { CertificationsSectionComponent } from '../../../../shared/components/certifications-section/certifications-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    AboutIntroSectionComponent,
    ServicesSectionComponent,
    ProjectsGallerySectionComponent,
    FeatureHighlightSectionComponent,
    CtaBannerComponent,
    CertificationsSectionComponent,
  ],
  template: `
    <app-header />
    <app-hero-section />
    <app-about-intro-section />
    <app-services-section />
    <app-projects-gallery-section />
    <app-feature-highlight-section />
    <app-cta-banner />
    <app-certifications-section />
    <app-footer />
  `
})
export class HomePageComponent {}
