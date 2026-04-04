import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ProjectItem {
  image: string;
  title: string;
  category: string;
  route: string;
}

@Component({
  selector: 'app-projects-gallery-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects-gallery-section.component.html',
  styleUrl: './projects-gallery-section.component.scss'
})
export class ProjectsGallerySectionComponent {
  projects: ProjectItem[] = [
    {
      image: 'assets/images/project-1.jpg',
      title: 'adani plant - gujarat',
      category: 'power plant',
      route: '/project/adani-plant-gujarat',
    },
    {
      image: 'assets/images/project-2.jpg',
      title: 'goldi plant - gujarat',
      category: 'solar plant',
      route: '/project/goldi-plant-gujarat',
    },
    {
      image: 'assets/images/project-3.jpg',
      title: 'adani plant - gujarat',
      category: 'mega plant',
      route: '/project/adani-plant-gujarat-mega',
    },
    {
      image: 'assets/images/project-4.jpg',
      title: 'tata plant - gujarat',
      category: 'power plant',
      route: '/project/tata-plant-gujarat',
    },
  ];
}
