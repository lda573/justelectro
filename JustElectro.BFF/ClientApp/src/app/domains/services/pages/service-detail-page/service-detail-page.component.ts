import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '../../../../shared/header/header.component';
import { FooterComponent } from '../../../../shared/footer/footer.component';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';
import { CtaBannerComponent } from '../../../../shared/components/cta-banner/cta-banner.component';
import { CertificationsSectionComponent } from '../../../../shared/components/certifications-section/certifications-section.component';
import { CmsApiService } from '../../../cms/api/cms-api.service';
import { LanguageService } from '../../../../shared/services/language.service';
import { ServiceDto } from '../../../cms/models/service.models';
import { sanityImageUrl } from '../../../cms/utils/sanity-image.util';

@Component({
  selector: 'app-service-detail-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    PageHeaderComponent,
    CtaBannerComponent,
    CertificationsSectionComponent,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './service-detail-page.component.html',
})
export class ServiceDetailPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly cmsApi = inject(CmsApiService);
  private readonly langService = inject(LanguageService);

  readonly service = signal<ServiceDto | null>(null);
  readonly allServices = signal<ServiceDto[]>([]);

  lang = () => this.langService.currentLang();

  title = computed(() => this.service()?.title?.[this.lang()] ?? '');
  imageUrl = computed(() => sanityImageUrl(this.service()?.image, 1200));
  fullDescription = computed(() => this.service()?.fullDescription?.[this.lang()] ?? '');
  fullDescriptionExtra = computed(() => this.service()?.fullDescriptionExtra?.[this.lang()] ?? '');
  keyPoints = computed(() => this.service()?.keyPoints?.[this.lang()] ?? []);
  contentBlockHeading = computed(() => this.service()?.contentBlock?.heading?.[this.lang()] ?? '');
  contentBlockBody1 = computed(() => this.service()?.contentBlock?.body1?.[this.lang()] ?? '');
  contentBlockBody2 = computed(() => this.service()?.contentBlock?.body2?.[this.lang()] ?? '');
  contentBlockPoints = computed(() => this.service()?.contentBlock?.points?.[this.lang()] ?? []);
  contentBlockImage1 = computed(() => sanityImageUrl(this.service()?.contentBlock?.image1, 600));
  contentBlockImage2 = computed(() => sanityImageUrl(this.service()?.contentBlock?.image2, 600));
  contentBlockCounterValue = computed(() => this.service()?.contentBlock?.counterValue ?? 0);
  contentBlockCounterLabel = computed(() => this.service()?.contentBlock?.counterLabel?.[this.lang()] ?? '');

  getSidebarTitle(s: ServiceDto): string {
    return s.title[this.lang()] ?? '';
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug') ?? '';
      this.cmsApi.getServices().subscribe(items => this.allServices.set(items));
      this.cmsApi.getServiceBySlug(slug).subscribe(item => this.service.set(item));
      window.scrollTo(0, 0);
    });
  }
}
