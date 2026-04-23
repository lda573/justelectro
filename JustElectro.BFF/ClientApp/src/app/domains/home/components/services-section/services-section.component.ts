import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServicesDataService } from '../../../services/api/services-data.service';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss'
})
export class ServicesSectionComponent {
  private servicesData = inject(ServicesDataService);
  services = this.servicesData.getAll();
}
