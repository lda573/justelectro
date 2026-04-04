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
    'Solar Panel Installation', 'Energy Solution',
    'Energy Efficiency', 'Project Management',
    'Electrical Engineering', 'Energy Consultancy',
  ];
}
