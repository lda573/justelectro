import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../../../shared/header/header.component';
import { FooterComponent } from '../../../../shared/footer/footer.component';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';
import { CtaBannerComponent } from '../../../../shared/components/cta-banner/cta-banner.component';
import { CertificationsSectionComponent } from '../../../../shared/components/certifications-section/certifications-section.component';
import { CmsApiService } from '../../../cms/api/cms-api.service';
import { SanityImage } from '../../../cms/models/about.models';
import { PortfolioItemDto } from '../../../cms/models/portfolio.models';
import { sanityImageUrl } from '../../../cms/utils/sanity-image.util';
import { LanguageService } from '../../../../shared/services/language.service';

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
  private readonly route = inject(ActivatedRoute);
  private readonly cmsApi = inject(CmsApiService);
  private readonly langService = inject(LanguageService);

  readonly proiect = signal<PortfolioItemDto | undefined>(undefined);
  readonly selectedImage = signal<string>('');
  readonly lang = () => this.langService.currentLang();

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') ?? '';
      this.cmsApi.getPortfolioItemBySlug(slug).subscribe(item => {
        this.proiect.set(item ?? undefined);
        this.selectedImage.set(item ? this.getCoverImageUrl(item) : '');
      });
      window.scrollTo(0, 0);
    });
  }

  getTitle(item: PortfolioItemDto): string {
    return item.title[this.lang()] ?? '';
  }

  getDescription(item: PortfolioItemDto): string {
    return item.description[this.lang()] ?? '';
  }

  getCoverImageUrl(item: PortfolioItemDto): string {
    return sanityImageUrl(item.coverImage, 1200);
  }

  getImageUrl(image: SanityImage, width = 1200): string {
    return sanityImageUrl(image, width);
  }

  getGalleryImages(item: PortfolioItemDto): SanityImage[] {
    return [item.coverImage, ...(item.gallery ?? [])];
  }

  getDisplayImageUrl(item: PortfolioItemDto): string {
    return this.selectedImage() || this.getCoverImageUrl(item);
  }

  selectImage(url: string): void {
    this.selectedImage.set(url);
  }

  isSelectedImage(url: string): boolean {
    return this.selectedImage() === url;
  }
}
