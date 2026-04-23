import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../../../shared/header/header.component';
import { FooterComponent } from '../../../../shared/footer/footer.component';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';
import { CtaBannerComponent } from '../../../../shared/components/cta-banner/cta-banner.component';
import { CertificationsSectionComponent } from '../../../../shared/components/certifications-section/certifications-section.component';
import { ProgrameFinantareDataService } from '../../api/programe-finantare-data.service';
import { ProgramFinantareDto } from '../../models/program-finantare.models';

@Component({
  selector: 'app-program-detail-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    PageHeaderComponent,
    CtaBannerComponent,
    CertificationsSectionComponent,
    RouterLink,
  ],
  templateUrl: './program-detail-page.component.html',
})
export class ProgramDetailPageComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private dataService = inject(ProgrameFinantareDataService);

  program = signal<ProgramFinantareDto | undefined>(undefined);
  allPrograms = this.dataService.getAll();

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') ?? '';
      this.program.set(this.dataService.getBySlug(slug));
      window.scrollTo(0, 0);
    });
  }
}
