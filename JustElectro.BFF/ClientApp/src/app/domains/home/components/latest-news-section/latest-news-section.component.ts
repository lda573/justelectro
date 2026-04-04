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
      title: 'How Many Solar Panels Do You Need for Your Business?',
      route: '/blog/solar-panels-business',
    },
    {
      image: 'assets/images/post-2.jpg',
      author: 'admin',
      date: '22 may 2024',
      title: 'Understanding Tax Deductions for Small Businesses',
      route: '/blog/tax-deductions',
    },
    {
      image: 'assets/images/post-3.jpg',
      author: 'admin',
      date: '22 may 2024',
      title: 'Understanding Tax Deductions for Small Businesses',
      route: '/blog/tax-deductions-2',
    },
  ];
}
