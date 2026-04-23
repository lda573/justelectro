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
    'Sisteme fotovoltaice',
    'Pompe de căldură',
    'Instalații electrice',
    'Stații de încărcare pentru vehicule electrice',
  ];

  companyFeatures: CompanyFeature[] = [
    {
      icon: 'assets/images/icon-about-us-1.svg',
      title: 'Soluții complete',
      description: 'Ne ocupăm de tot — de la consultanță și proiectare până la instalare și mentenanță.',
    },
    {
      icon: 'assets/images/icon-about-us-2.svg',
      title: 'Rapiditate și fiabilitate',
      description: 'Implementăm proiectele la timp, fără compromisuri la calitate.',
    },
    {
      icon: 'assets/images/icon-about-us-3.svg',
      title: 'Eficiență energetică reală',
      description: 'Reducem costurile tale prin soluții optimizate și tehnologii moderne.',
    },
    {
      icon: 'assets/images/icon-about-us-4.svg',
      title: 'Profesionalism și transparență',
      description: 'Lucrăm corect, comunicăm clar și livrăm exact ce promitem.',
    },
  ];
}
