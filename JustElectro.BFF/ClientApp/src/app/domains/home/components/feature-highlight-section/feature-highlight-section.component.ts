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
    'Rezistență ridicată la condiții meteo extreme',
    'Durată de viață de peste 25 de ani',
    'Costuri reduse de întreținere',
    'Garanție pentru performanță și echipamente',
  ];
}
