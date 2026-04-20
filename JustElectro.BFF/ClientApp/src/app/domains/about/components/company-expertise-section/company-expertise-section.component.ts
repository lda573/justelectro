import { Component } from '@angular/core';

@Component({
  selector: 'app-company-expertise-section',
  standalone: true,
  imports: [],
  templateUrl: './company-expertise-section.component.html',
  styleUrl: './company-expertise-section.component.scss'
})
export class CompanyExpertiseSectionComponent {
  skills = [
    'Instalare panouri fotovoltaice', 'Optimizarea consumului',
    'Eficiență energetică ridicat', 'Implementare rapidă',
    'Execuție sigură', 'Suport și consultanță',
  ];
}
