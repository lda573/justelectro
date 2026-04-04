import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServicesDataService } from '../../api/services-data.service';

@Component({
  selector: 'app-services-grid-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services-grid-section.component.html',
  styleUrl: './services-grid-section.component.scss'
})
export class ServicesGridSectionComponent {
  private servicesData = inject(ServicesDataService);
  services = this.servicesData.getAll();
}
