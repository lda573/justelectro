import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlicePipe } from '@angular/common';
import { CmsApiService } from '../../../cms/api/cms-api.service';
import { LanguageService } from '../../../../shared/services/language.service';
import { FinancingProgramDto } from '../../../cms/models/financing-program.models';
import { sanityImageUrl } from '../../../cms/utils/sanity-image.util';

@Component({
  selector: 'app-programe-finantare-list-section',
  standalone: true,
  imports: [RouterLink, SlicePipe],
  templateUrl: './programe-finantare-list-section.component.html',
  styleUrl: './programe-finantare-list-section.component.scss'
})
export class ProgrameFinantareListSectionComponent implements OnInit {
  private readonly cmsApi = inject(CmsApiService);
  private readonly langService = inject(LanguageService);

  readonly programs = signal<FinancingProgramDto[]>([]);
  readonly sanityImageUrl = sanityImageUrl;

  lang = () => this.langService.currentLang();

  getTitle(p: FinancingProgramDto): string {
    return p.about.title[this.lang()] ?? '';
  }

  getDescription(p: FinancingProgramDto): string {
    return p.about.description[this.lang()] ?? '';
  }

  ngOnInit(): void {
    this.cmsApi.getFinancingPrograms().subscribe(items => this.programs.set(items));
  }
}
