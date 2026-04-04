import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface CompanyFeature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about-intro-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about-intro-section.component.html',
  styleUrl: './about-intro-section.component.scss'
})
export class AboutIntroSectionComponent {
  bulletPoints = [
    'Expertise and Experience',
    'Free Consultation and Site Assessment',
    'High-Quality Solar Products',
    'Comprehensive End-to-End Services',
  ];

  companyFeatures: CompanyFeature[] = [
    {
      icon: 'assets/images/icon-about-us-1.svg',
      title: 'peak shaving',
      description: 'We understand that every home and business is unique.',
    },
    {
      icon: 'assets/images/icon-about-us-2.svg',
      title: 'demand response',
      description: 'We understand that every home and business is unique.',
    },
    {
      icon: 'assets/images/icon-about-us-3.svg',
      title: 'load shifting',
      description: 'We understand that every home and business is unique.',
    },
    {
      icon: 'assets/images/icon-about-us-4.svg',
      title: 'environmental benefits',
      description: 'We understand that every home and business is unique.',
    },
  ];
}
