import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface NewsPost {
  image: string;
  author: string;
  date: string;
  title: string;
  route: string;
}

@Component({
  selector: 'app-latest-news-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './latest-news-section.component.html',
  styleUrl: './latest-news-section.component.scss'
})
export class LatestNewsSectionComponent {
  posts: NewsPost[] = [
    {
      image: 'assets/images/post-1.jpg',
      author: 'admin',
      date: '22 may 2024',
      title: 'Câte panouri solare ai nevoie pentru locuința ta?',
      route: '/blog/solar-panels-business',
    },
    {
      image: 'assets/images/post-2.jpg',
      author: 'admin',
      date: '22 may 2024',
      title: 'Cum funcționează programul Casa Verde Fotovoltaic în 2025',
      route: '/blog/tax-deductions',
    },
    {
      image: 'assets/images/post-3.jpg',
      author: 'admin',
      date: '22 may 2024',
      title: 'Pompe de căldură vs. centrale termice — ce alegi în 2025?',
      route: '/blog/tax-deductions-2',
    },
  ];
}
