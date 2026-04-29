import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { CmsApiService } from '../../../cms/api/cms-api.service';
import { AboutPage } from '../../../cms/models/about.models';
import { sanityImageUrl } from '../../../cms/utils/sanity-image.util';
import { LanguageService } from '../../../../shared/services/language.service';

@Component({
  selector: 'app-company-expertise-section',
  standalone: true,
  imports: [],
  templateUrl: './company-expertise-section.component.html',
  styleUrl: './company-expertise-section.component.scss'
})
export class CompanyExpertiseSectionComponent implements OnInit {
  private readonly cmsApi = inject(CmsApiService);
  private readonly languageService = inject(LanguageService);

  readonly aboutPage = signal<AboutPage | null>(null);
  private readonly lang = computed(() => this.languageService.currentLang());

  readonly heading = computed(() => this.aboutPage()?.expertise?.heading?.[this.lang()] ?? '');
  readonly body = computed(() => this.aboutPage()?.expertise?.body?.[this.lang()] ?? '');
  readonly skills = computed(() => {
    const lang = this.lang();
    return this.aboutPage()?.expertise?.skills?.[lang] ?? [];
  });
  readonly imageUrl = computed(() => sanityImageUrl(this.aboutPage()?.expertise?.image, 800));
  readonly clientCount = computed(() => this.aboutPage()?.expertise?.clientCount ?? 0);

  ngOnInit(): void {
    this.cmsApi.getAboutPage().subscribe(page => this.aboutPage.set(page));
  }
}
