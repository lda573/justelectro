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
    { icon: 'assets/images/icon-company-quality-1.svg', title: 'Standarde ridicate de calitate' },
    { icon: 'assets/images/icon-company-quality-2.svg', title: 'Echipă calificată și experimentată' },
  ];

  storyPoints = [
    'Experiență în domeniu',
    'Echipamente de calitate',
    'Soluții personalizate',
    'Eficiență energetică',
  ];
}
