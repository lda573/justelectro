import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CmsApiService } from '../../../cms/api/cms-api.service';
import { PortfolioItemDto } from '../../../cms/models/portfolio.models';
import { sanityImageUrl } from '../../../cms/utils/sanity-image.util';
import { LanguageService } from '../../../../shared/services/language.service';

@Component({
  selector: 'app-portofoliu-grid-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './portofoliu-grid-section.component.html',
  styleUrl: './portofoliu-grid-section.component.scss'
})
export class PortofoliuGridSectionComponent implements OnInit {
  private readonly cmsApi = inject(CmsApiService);
  private readonly langService = inject(LanguageService);

  readonly items = signal<PortfolioItemDto[]>([]);

  readonly lang = () => this.langService.currentLang();

  ngOnInit(): void {
    this.cmsApi.getPortfolioItems().subscribe(items => {
      this.items.set(items ?? []);
    });
  }

  getTitle(item: PortfolioItemDto): string {
    return item.title[this.lang()] ?? '';
  }

  getCoverImageUrl(item: PortfolioItemDto): string {
    return sanityImageUrl(item.coverImage, 800);
  }
}
