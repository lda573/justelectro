import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../../../shared/header/header.component';
import { FooterComponent } from '../../../../shared/footer/footer.component';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';
import { CtaBannerComponent } from '../../../../shared/components/cta-banner/cta-banner.component';
import { CertificationsSectionComponent } from '../../../../shared/components/certifications-section/certifications-section.component';
import { PortofoliuDataService } from '../../api/portofoliu-data.service';
import { ProiectDto } from '../../models/portofoliu.models';

@Component({
  selector: 'app-portofoliu-detail-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    PageHeaderComponent,
    CtaBannerComponent,
    CertificationsSectionComponent,
    RouterLink,
  ],
  templateUrl: './portofoliu-detail-page.component.html',
})
export class PortofoliuDetailPageComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private dataService = inject(PortofoliuDataService);

  proiect = signal<ProiectDto | undefined>(undefined);

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') ?? '';
      this.proiect.set(this.dataService.getBySlug(slug));
      window.scrollTo(0, 0);
    });
  }
}
