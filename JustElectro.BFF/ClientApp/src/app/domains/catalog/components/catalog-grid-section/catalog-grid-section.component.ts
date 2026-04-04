import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catalog-grid-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './catalog-grid-section.component.html',
  styleUrl: './catalog-grid-section.component.scss'
})
export class CatalogGridSectionComponent {}
