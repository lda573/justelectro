import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../../../shared/header/header.component';
import { FooterComponent } from '../../../../shared/footer/footer.component';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';
import { CtaBannerComponent } from '../../../../shared/components/cta-banner/cta-banner.component';
import { CertificationsSectionComponent } from '../../../../shared/components/certifications-section/certifications-section.component';
import { CmsApiService } from '../../../cms/api/cms-api.service';
import { ProductDto } from '../../../cms/models/product.models';
import { sanityImageUrl } from '../../../cms/utils/sanity-image.util';
import { LanguageService } from '../../../../shared/services/language.service';

@Component({
  selector: 'app-catalog-product-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    PageHeaderComponent,
    CtaBannerComponent,
    CertificationsSectionComponent,
    RouterLink,
  ],
  templateUrl: './catalog-product-page.component.html',
})
export class CatalogProductPageComponent implements OnInit {
  private readonly cmsApi = inject(CmsApiService);
  private readonly langService = inject(LanguageService);
  private readonly route = inject(ActivatedRoute);

  readonly product = signal<ProductDto | null>(null);
  readonly lang = () => this.langService.currentLang();
  readonly sanityImageUrl = sanityImageUrl;

  readonly title = computed(() =>
    this.product()?.title?.[this.lang()] ?? '');

  readonly coverImageUrl = computed(() =>
    sanityImageUrl(this.product()?.coverImage, 1200));

  readonly gallery = computed(() =>
    this.product()?.gallery ?? []);

  readonly specs = computed(() =>
    this.product()?.specs ?? []);

  readonly aboutDescription = computed(() =>
    this.product()?.about?.description?.[this.lang()] ?? '');

  readonly aboutDescriptionExtra = computed(() =>
    this.product()?.about?.descriptionExtra?.[this.lang()] ?? '');

  readonly aboutPoints = computed(() =>
    this.product()?.about?.points?.[this.lang()] ?? []);

  readonly durabilityTitle = computed(() =>
    this.product()?.durability?.title?.[this.lang()] ?? '');

  readonly durabilityDescription = computed(() =>
    this.product()?.durability?.description?.[this.lang()] ?? '');

  readonly durabilityDescriptionExtra = computed(() =>
    this.product()?.durability?.descriptionExtra?.[this.lang()] ?? '');

  readonly durabilityPoints = computed(() =>
    this.product()?.durability?.points?.[this.lang()] ?? []);

  readonly durabilityImageUrl = computed(() =>
    sanityImageUrl(this.product()?.durability?.image, 800));

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') ?? '';
      this.cmsApi.getProductBySlug(slug).subscribe(product => {
        this.product.set(product);
      });
      window.scrollTo(0, 0);
    });
  }
}
