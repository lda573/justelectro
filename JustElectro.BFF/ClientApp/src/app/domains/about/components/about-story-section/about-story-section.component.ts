import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-story-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about-story-section.component.html',
  styleUrl: './about-story-section.component.scss'
})
export class AboutStorySectionComponent {
  qualityItems = [
    { icon: 'assets/images/icon-company-quality-1.svg', title: 'building quality standards' },
    { icon: 'assets/images/icon-company-quality-2.svg', title: 'certified engineered team' },
  ];

  storyPoints = [
    'expertise and experience',
    'quality products',
    'customized solutions',
    'environmental impact',
  ];
}
