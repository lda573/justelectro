import { Component, OnInit, inject, signal } from '@angular/core';
import { CmsApiService } from '../../../cms/api/cms-api.service';
import { Partner } from '../../../cms/models/about.models';
import { sanityImageUrl } from '../../../cms/utils/sanity-image.util';

@Component({
  selector: 'app-team-section',
  standalone: true,
  imports: [],
  templateUrl: './team-section.component.html',
  styleUrl: './team-section.component.scss'
})
export class TeamSectionComponent implements OnInit {
  private readonly cmsApi = inject(CmsApiService);

  readonly partners = signal<Partner[]>([]);
  readonly sanityImageUrl = sanityImageUrl;

  ngOnInit(): void {
    this.cmsApi.getPartners().subscribe(items => this.partners.set(items));
  }
}
