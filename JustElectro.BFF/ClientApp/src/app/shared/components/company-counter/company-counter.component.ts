import { Component, Input } from '@angular/core';

export interface CounterItem {
  value: number;
  suffix: string;
  label: string;
}

@Component({
  selector: 'app-company-counter',
  standalone: true,
  imports: [],
  templateUrl: './company-counter.component.html',
  styleUrl: './company-counter.component.scss'
})
export class CompanyCounterComponent {
  @Input() counters: CounterItem[] = [
    { value: 12, suffix: '+', label: 'years experience' },
    { value: 239, suffix: '+', label: 'projects completed' },
    { value: 230, suffix: '+', label: 'happy customers' },
    { value: 4.2, suffix: '', label: 'overall rating' },
  ];
}
