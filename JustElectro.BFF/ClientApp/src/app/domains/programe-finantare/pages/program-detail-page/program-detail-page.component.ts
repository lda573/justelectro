import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../../../shared/header/header.component';
import { FooterComponent } from '../../../../shared/footer/footer.component';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';
import { CtaBannerComponent } from '../../../../shared/components/cta-banner/cta-banner.component';
import { CertificationsSectionComponent } from '../../../../shared/components/certifications-section/certifications-section.component';
import { CmsApiService } from '../../../cms/api/cms-api.service';
import { LanguageService } from '../../../../shared/services/language.service';
import { FinancingProgramDto } from '../../../cms/models/financing-program.models';
import { sanityImageUrl } from '../../../cms/utils/sanity-image.util';

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
  private readonly route = inject(ActivatedRoute);
  private readonly cmsApi = inject(CmsApiService);
  private readonly langService = inject(LanguageService);

  readonly program = signal<FinancingProgramDto | null>(null);

  lang = () => this.langService.currentLang();

  title = computed(() => this.program()?.about?.title?.[this.lang()] ?? '');

  aboutLabel = computed(() => this.program()?.about?.label?.[this.lang()] ?? '');
  aboutTitle = computed(() => this.program()?.about?.title?.[this.lang()] ?? '');
  aboutDescription = computed(() => this.program()?.about?.description?.[this.lang()] ?? '');
  aboutPoints = computed(() => this.program()?.about?.points?.[this.lang()] ?? []);
  aboutImageUrl = computed(() => sanityImageUrl(this.program()?.about?.image, 800));

  strategyTitle = computed(() => this.program()?.strategy?.title?.[this.lang()] ?? '');
  strategyDescription = computed(() => this.program()?.strategy?.description?.[this.lang()] ?? '');
  strategyDescriptionExtra = computed(() => this.program()?.strategy?.descriptionExtra?.[this.lang()] ?? '');
  strategyImageUrl = computed(() => sanityImageUrl(this.program()?.strategy?.image, 800));
  strategyProcessTitle = computed(() => this.program()?.strategy?.processTitle?.[this.lang()] ?? '');
  strategyPoints = computed(() => this.program()?.strategy?.points?.[this.lang()] ?? []);

  whyUsLabel = computed(() => this.program()?.whyUs?.label?.[this.lang()] ?? '');
  whyUsTitle = computed(() => this.program()?.whyUs?.title?.[this.lang()] ?? '');
  whyUsDescription = computed(() => this.program()?.whyUs?.description?.[this.lang()] ?? '');
  whyUsProjects = computed(() => this.program()?.whyUs?.projects ?? []);

  qualityTitle = computed(() => this.program()?.quality?.title?.[this.lang()] ?? '');
  qualityDescription = computed(() => this.program()?.quality?.description?.[this.lang()] ?? '');
  qualityDescriptionExtra = computed(() => this.program()?.quality?.descriptionExtra?.[this.lang()] ?? '');
  qualityPoints = computed(() => this.program()?.quality?.points?.[this.lang()] ?? []);
  qualityImage1Url = computed(() => sanityImageUrl(this.program()?.quality?.image1, 600));
  qualityImage2Url = computed(() => sanityImageUrl(this.program()?.quality?.image2, 600));
  qualityCounterValue = computed(() => this.program()?.quality?.counterValue ?? 0);
  qualityCounterLabel = computed(() => this.program()?.quality?.counterLabel?.[this.lang()] ?? '');

  getProjectTitle(project: any): string {
    return project.title[this.lang()] ?? '';
  }

  getProjectCategory(project: any): string {
    return project.category[this.lang()] ?? '';
  }

  getProjectImageUrl(project: any): string {
    return sanityImageUrl(project.image, 400);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') ?? '';
      this.cmsApi.getFinancingProgramBySlug(slug).subscribe(item => this.program.set(item));
      window.scrollTo(0, 0);
    });
  }
}
