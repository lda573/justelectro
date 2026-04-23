import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlicePipe } from '@angular/common';
import { ProgrameFinantareDataService } from '../../api/programe-finantare-data.service';

@Component({
  selector: 'app-programe-finantare-list-section',
  standalone: true,
  imports: [RouterLink, SlicePipe],
  templateUrl: './programe-finantare-list-section.component.html',
  styleUrl: './programe-finantare-list-section.component.scss'
})
export class ProgrameFinantareListSectionComponent {
  private dataService = inject(ProgrameFinantareDataService);
  programs = this.dataService.getAll();
}
