import { Component } from '@angular/core';

interface TeamMember {
  image: string;
  name: string;
  role: string;
  socials: { icon: string; url: string }[];
}

@Component({
  selector: 'app-team-section',
  standalone: true,
  imports: [],
  templateUrl: './team-section.component.html',
  styleUrl: './team-section.component.scss'
})
export class TeamSectionComponent {
  members: TeamMember[] = [
    { image: 'assets/images/team-1.jpg', name: 'dianne russell', role: 'CEO and founder', socials: [{ icon: 'fa-brands fa-facebook-f', url: '#' }, { icon: 'fa-brands fa-instagram', url: '#' }, { icon: 'fa-brands fa-linkedin-in', url: '#' }] },
    { image: 'assets/images/team-2.jpg', name: 'dianne russell', role: 'CEO and founder', socials: [{ icon: 'fa-brands fa-facebook-f', url: '#' }, { icon: 'fa-brands fa-instagram', url: '#' }, { icon: 'fa-brands fa-linkedin-in', url: '#' }] },
    { image: 'assets/images/team-3.jpg', name: 'dianne russell', role: 'CEO and founder', socials: [{ icon: 'fa-brands fa-facebook-f', url: '#' }, { icon: 'fa-brands fa-instagram', url: '#' }, { icon: 'fa-brands fa-linkedin-in', url: '#' }] },
    { image: 'assets/images/team-4.jpg', name: 'dianne russell', role: 'CEO and founder', socials: [{ icon: 'fa-brands fa-facebook-f', url: '#' }, { icon: 'fa-brands fa-instagram', url: '#' }, { icon: 'fa-brands fa-linkedin-in', url: '#' }] },
  ];
}
