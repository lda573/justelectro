import { Component, AfterViewInit } from '@angular/core';

interface Testimonial {
  image: string;
  name: string;
  role: string;
  text: string;
}

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [],
  templateUrl: './testimonials-section.component.html',
  styleUrl: './testimonials-section.component.scss'
})
export class TestimonialsSectionComponent implements AfterViewInit {
  testimonials: Testimonial[] = [
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
    // Swiper este inițializat global din function.js al template-ului
  }
}
