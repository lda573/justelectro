import { Component, AfterViewInit } from '@angular/core';

interface Certification {
  image: string;
  name: string;
  role: string;
  text: string;
}

@Component({
  selector: 'app-certifications-section',
  standalone: true,
  imports: [],
  templateUrl: './certifications-section.component.html',
  styleUrl: './certifications-section.component.scss'
})
export class CertificationsSectionComponent implements AfterViewInit {
  certifications: Certification[] = [
    {
      image: 'assets/images/author-1.jpg',
      name: 'boy williamson',
      role: 'food entrepreneur',
      text: 'For adding learning references, it\'s really good, because clients often study here too For adding learning references, it\'s really good, because clients often study here too',
    },
    {
      image: 'assets/images/author-2.jpg',
      name: 'marvin mckinney',
      role: 'senior freelancer',
      text: 'For adding learning references, it\'s really good, because clients often study here too For adding learning references, it\'s really good, because clients often study here too',
    },
    {
      image: 'assets/images/author-3.jpg',
      name: 'courtney henry',
      role: 'creative director',
      text: 'For adding learning references, it\'s really good, because clients often study here too For adding learning references, it\'s really good, because clients often study here too',
    },
    {
      image: 'assets/images/author-4.jpg',
      name: 'courtney henry',
      role: 'creative director',
      text: 'For adding learning references, it\'s really good, because clients often study here too For adding learning references, it\'s really good, because clients often study here too',
    },
  ];

  ngAfterViewInit(): void {
    // Swiper is initialized globally from the template's function.js
  }
}
