import { Component, AfterViewInit, OnInit, inject, signal } from '@angular/core';
import { CmsApiService } from '../../../domains/cms/api/cms-api.service';
import { LanguageService } from '../../services/language.service';
import { Certification } from '../../../domains/cms/models/about.models';
import { sanityImageUrl } from '../../../domains/cms/utils/sanity-image.util';

@Component({
  selector: 'app-certifications-section',
  standalone: true,
  imports: [],
  templateUrl: './certifications-section.component.html',
  styleUrl: './certifications-section.component.scss'
})
export class CertificationsSectionComponent implements OnInit, AfterViewInit {
  private readonly cmsApi = inject(CmsApiService);
  private readonly languageService = inject(LanguageService);

  readonly certifications = signal<Certification[]>([]);
  readonly sanityImageUrl = sanityImageUrl;
  readonly currentLang = this.languageService.currentLang;

  ngOnInit(): void {
    this.cmsApi.getCertifications().subscribe(items => this.certifications.set(items));
  }

  ngAfterViewInit(): void {
    // Swiper is initialized globally from the template's function.js
  }
}
