import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quote-section',
  standalone: true,
  imports: [],
  templateUrl: './quote-section.component.html',
  styleUrl: './quote-section.component.scss'
})
export class QuoteSectionComponent {
  @Input() quote = 'Misiunea noastră este să facem energia curată și regenerabilă accesibilă tuturor. Credem într-un viitor sustenabil și suntem dedicați furnizării de soluții solare de înaltă calitate, care oferă energie fiabilă și accesibilă.';
  @Input() author = '';
}