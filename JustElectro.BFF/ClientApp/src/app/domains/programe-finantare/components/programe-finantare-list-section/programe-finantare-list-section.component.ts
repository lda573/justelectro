import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgrameFinantareDataService } from '../../api/programe-finantare-data.service';

@Component({
  selector: 'app-programe-finantare-list-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './programe-finantare-list-section.component.html',
  styleUrl: './programe-finantare-list-section.component.scss'
})
export class ProgrameFinantareListSectionComponent {
  private dataService = inject(ProgrameFinantareDataService);
  programs = this.dataService.getAll();
}
