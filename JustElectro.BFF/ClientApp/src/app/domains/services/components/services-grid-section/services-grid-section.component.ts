import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CmsApiService } from '../../../cms/api/cms-api.service';
import { LanguageService } from '../../../../shared/services/language.service';
import { ServiceDto } from '../../../cms/models/service.models';
import { sanityImageUrl } from '../../../cms/utils/sanity-image.util';

@Component({
  selector: 'app-services-grid-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services-grid-section.component.html',
  styleUrl: './services-grid-section.component.scss'
})
export class ServicesGridSectionComponent implements OnInit {
  private readonly cmsApi = inject(CmsApiService);
  private readonly langService = inject(LanguageService);

  readonly services = signal<ServiceDto[]>([]);
  readonly sanityImageUrl = sanityImageUrl;

  ngOnInit(): void {
    this.cmsApi.getServices().subscribe(items => this.services.set(items));
  }

  getTitle(service: ServiceDto): string {
    return service.title[this.langService.currentLang()] ?? '';
  }

  getShortDescription(service: ServiceDto): string {
    return service.shortDescription[this.langService.currentLang()] ?? '';
  }
}
