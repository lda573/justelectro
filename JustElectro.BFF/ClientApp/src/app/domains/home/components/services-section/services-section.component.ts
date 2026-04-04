import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  route: string;
}

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss'
})
export class ServicesSectionComponent {
  services: ServiceItem[] = [
    {
      icon: 'assets/images/icon-services-1.svg',
      title: 'solar energy',
      description: 'Aenean mattis mauris turpis, quis porta magna aliquam.',
      route: '/services/solar-energy',
    },
    {
      icon: 'assets/images/icon-services-2.svg',
      title: 'hybrid energy',
      description: 'Aenean mattis mauris turpis, quis porta magna aliquam.',
      route: '/services/hybrid-energy',
    },
    {
      icon: 'assets/images/icon-services-3.svg',
      title: 'wind energy',
      description: 'Aenean mattis mauris turpis, quis porta magna aliquam.',
      route: '/services/wind-energy',
    },
    {
      icon: 'assets/images/icon-services-4.svg',
      title: 'renewable energy',
      description: 'Aenean mattis mauris turpis, quis porta magna aliquam.',
      route: '/services/renewable-energy',
    },
  ];
}
