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
    { image: 'assets/images/pozeSite/jinko_solar.png', name: '', role: '', socials: [ ] },
    { image: 'assets/images/team-2.jpg', name: '', role: '', socials: [ ] },
    { image: 'assets/images/team-3.jpg', name: '', role: '', socials: [ ] },
    { image: 'assets/images/team-4.jpg', name: '', role: '', socials: [ ] },
  ];
}
