import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CmsApiService } from '../../../cms/api/cms-api.service';
import { ProductDto } from '../../../cms/models/product.models';
import { sanityImageUrl } from '../../../cms/utils/sanity-image.util';
import { LanguageService } from '../../../../shared/services/language.service';

@Component({
  selector: 'app-catalog-grid-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './catalog-grid-section.component.html',
  styleUrl: './catalog-grid-section.component.scss'
})
export class CatalogGridSectionComponent implements OnInit {
  private readonly cmsApi = inject(CmsApiService);
  private readonly langService = inject(LanguageService);

  readonly products = signal<ProductDto[]>([]);
  readonly lang = () => this.langService.currentLang();

  ngOnInit(): void {
    this.cmsApi.getProducts().subscribe(products => {
      this.products.set(products);
    });
  }

  getTitle(product: ProductDto): string {
    return product.title[this.lang()] ?? '';
  }

  getCoverImageUrl(product: ProductDto): string {
    return sanityImageUrl(product.coverImage, 800);
  }
}
