import { Component } from '@angular/core';

@Component({
  selector: 'app-feature-highlight-section',
  standalone: true,
  imports: [],
  templateUrl: './feature-highlight-section.component.html',
  styleUrl: './feature-highlight-section.component.scss'
})
export class FeatureHighlightSectionComponent {
  images = [
    'assets/images/company-quality-img-1.jpg',
    'assets/images/company-quality-img-2.jpg',
    'assets/images/company-quality-img-3.jpg',
    'assets/images/company-quality-img-4.jpg',
  ];

  bulletPoints = [
    'Warranties not cover on damage panels',
    'Warranties cover on panel output low',
    'The ability to turnaround consulting',
    'It was popularised in the 1960s with the.',
  ];
}
