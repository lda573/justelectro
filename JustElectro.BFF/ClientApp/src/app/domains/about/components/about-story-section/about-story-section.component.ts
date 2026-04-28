import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CmsApiService } from '../../../cms/api/cms-api.service';
import { AboutPage, SanityImage } from '../../../cms/models/about.models';
import { sanityImageUrl } from '../../../cms/utils/sanity-image.util';
import { LanguageService } from '../../../../shared/services/language.service';

@Component({
  selector: 'app-about-story-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about-story-section.component.html',
  styleUrl: './about-story-section.component.scss'
})
export class AboutStorySectionComponent implements OnInit {
  private readonly cmsApi = inject(CmsApiService);
  private readonly languageService = inject(LanguageService);

  readonly aboutPage = signal<AboutPage | null>(null);
  private readonly lang = computed(() => this.languageService.currentLang());

  readonly heading = computed(() => this.aboutPage()?.story?.heading?.[this.lang()] ?? '');
  readonly body = computed(() => this.aboutPage()?.story?.body?.[this.lang()] ?? '');
  readonly yearsExperience = computed(() => this.aboutPage()?.story?.yearsExperience ?? 0);
  readonly image1Url = computed(() => sanityImageUrl(this.aboutPage()?.story?.image1, 800));
  readonly image2Url = computed(() => sanityImageUrl(this.aboutPage()?.story?.image2, 800));
  readonly qualityItems = computed(() => {
    const lang = this.lang();
    return (this.aboutPage()?.story?.qualityItems ?? []).map(item => ({
      icon: item.icon as SanityImage | undefined,
      title: item.title[lang],
    }));
  });
  readonly bulletPoints = computed(() => {
    const lang = this.lang();
    return (this.aboutPage()?.story?.bulletPoints ?? []).map(bp => bp[lang]);
  });

  readonly sanityImageUrl = sanityImageUrl;

  ngOnInit(): void {
    this.cmsApi.getAboutPage().subscribe(page => this.aboutPage.set(page));
  }
}
