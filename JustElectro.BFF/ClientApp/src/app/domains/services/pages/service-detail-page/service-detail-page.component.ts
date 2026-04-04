import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '../../../../shared/header/header.component';
import { FooterComponent } from '../../../../shared/footer/footer.component';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';
import { CtaBannerComponent } from '../../../../shared/components/cta-banner/cta-banner.component';
import { TestimonialsSectionComponent } from '../../../../shared/components/testimonials-section/testimonials-section.component';
import { ServicesDataService } from '../../api/services-data.service';
import { ServiceDto } from '../../../../shared/models/service.models';

@Component({
  selector: 'app-service-detail-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    PageHeaderComponent,
    CtaBannerComponent,
    TestimonialsSectionComponent,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './service-detail-page.component.html',
})
export class ServiceDetailPageComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private servicesData = inject(ServicesDataService);

  service = signal<ServiceDto | undefined>(undefined);
  allServices = this.servicesData.getAll();
  activeStep = signal<number>(0);

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug') ?? '';
      this.service.set(this.servicesData.getBySlug(slug));
      this.activeStep.set(0);
      window.scrollTo(0, 0);
    });
  }

  onToggleFaq(index: number): void {
    this.activeStep.set(this.activeStep() === index ? -1 : index);
  }
}
